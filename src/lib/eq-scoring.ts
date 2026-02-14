/**
 * EQ Assessment Scoring Service
 * 
 * Comprehensive scoring system for all question types.
 * Implements psychometric best practices:
 * - Ipsative to normative conversion for forced-choice
 * - Reverse-key handling for Likert
 * - Consistency penalty calculation
 * - Social desirability bias detection
 * - Meta-EQ calibration scoring
 * 
 * All scores normalized to 0-100 scale.
 */

import type {
  EQDimension,
  EQQuestion,
  EQResponse,
  DimensionScores,
  ScoreQualityIndicators,
  EQAssessmentResult,
  ForcedChoiceQuestion,
  ForcedChoiceResponse,
  LikertQuestion,
  LikertResponse,
  EmotionVocabularyQuestion,
  EmotionVocabularyResponse,
  MetaEQQuestion,
  MetaEQResponse,
  PhysiologicalProxyQuestion,
  PhysiologicalProxyResponse,
  ConsistencyProbeQuestion,
  ConsistencyProbeResponse,
  RankingAllocationQuestion,
  RankingAllocationResponse,
} from '@/types/eq-assessment';

// =============================================================================
// CONSTANTS
// =============================================================================

const DIMENSIONS: EQDimension[] = [
  'self_awareness',
  'self_regulation',
  'empathy',
  'social_skills',
  'motivation',
];

// Weights for overall score composition
const DIMENSION_WEIGHTS: Record<EQDimension, number> = {
  self_awareness: 0.25,
  self_regulation: 0.20,
  empathy: 0.20,
  social_skills: 0.20,
  motivation: 0.15,
};

// Weights for question types in final score
const QUESTION_TYPE_WEIGHTS = {
  forced_choice: 0.20,
  likert: 0.15,
  emotion_vocabulary: 0.15,
  meta_eq: 0.20,
  physiological_proxy: 0.10,
  consistency_probe: 0.10,
  ranking_allocation: 0.10,
};

// Likert: desirability bias attenuation (score *= 1 - bias*α)
const DESIRABILITY_ATTENUATION_ALPHA = 0.4;

// Meta-EQ: reward slight self-underrating (deltaScore = 1 - |δ| + β*max(0,-δ))
const META_EQ_UNDERRATING_BETA = 0.1;

// Emotion vocabulary split: 70% self-awareness, 15% self-regulation, 15% empathy
const EMOTION_VOCAB_SPLIT = { self_awareness: 0.7, self_regulation: 0.15, empathy: 0.15 } as const;

// Ranking: use reduced weight when merging into dimensions
const RANKING_DIMENSION_WEIGHT = 0.5;

// FC variance equalization
const FC_VARIANCE_EQUALIZATION = 0.85;

// Likert entropy thresholds
const LIKERT_VARIANCE_STRAIGHT_LINE = 0.5;
const LIKERT_VARIANCE_CHAOTIC = 3.5;

// Self-awareness cap
const SELF_AWARENESS_CAP_MULTIPLIER = 1.15;

// =============================================================================
// CONSISTENCY PENALTY CONFIGURATION
// =============================================================================

const CONSISTENCY_CONFIG = {
  maxPenalty: 15,
  unreliableThreshold: 0.40,
  noPenaltyThreshold: 0.70,
  penaltyMultiplier: 20,
};

function calculateConsistencyPenalty(consistencyIndex: number): {
  penalty: number;
  isUnreliable: boolean;
  penaltyLevel: 'none' | 'mild' | 'moderate' | 'severe';
} {
  const { maxPenalty, unreliableThreshold, noPenaltyThreshold, penaltyMultiplier } = CONSISTENCY_CONFIG;

  if (consistencyIndex >= noPenaltyThreshold) {
    return { penalty: 0, isUnreliable: false, penaltyLevel: 'none' };
  }

  const consistencyDeficit = noPenaltyThreshold - consistencyIndex;
  const squaredDeficit = consistencyDeficit * consistencyDeficit;
  const rawPenalty = squaredDeficit * penaltyMultiplier;
  const penalty = Math.min(maxPenalty, rawPenalty);
  
  let penaltyLevel: 'none' | 'mild' | 'moderate' | 'severe';
  if (consistencyIndex >= 0.60) {
    penaltyLevel = 'mild';
  } else if (consistencyIndex >= unreliableThreshold) {
    penaltyLevel = 'moderate';
  } else {
    penaltyLevel = 'severe';
  }
  
  const isUnreliable = consistencyIndex < unreliableThreshold;
  
  return { penalty, isUnreliable, penaltyLevel };
}

// =============================================================================
// SCORING UTILITIES
// =============================================================================

function normalize(value: number, min: number, max: number): number {
  return Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));
}

function mean(values: number[]): number {
  if (values.length === 0) return 0;
  return values.reduce((sum, v) => sum + v, 0) / values.length;
}

function standardDeviation(values: number[]): number {
  if (values.length < 2) return 0;
  const avg = mean(values);
  const squaredDiffs = values.map(v => Math.pow(v - avg, 2));
  return Math.sqrt(mean(squaredDiffs));
}

function generateId(): string {
  return `eq_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// =============================================================================
// INDIVIDUAL QUESTION TYPE SCORING
// =============================================================================

function forcedChoiceFormRange(questions: ForcedChoiceQuestion[]): Record<EQDimension, { min: number; max: number }> {
  const range: Record<EQDimension, { min: number; max: number }> = {
    self_awareness: { min: 0, max: 0 },
    self_regulation: { min: 0, max: 0 },
    empathy: { min: 0, max: 0 },
    social_skills: { min: 0, max: 0 },
    motivation: { min: 0, max: 0 },
  };
  questions.forEach(q => {
    q.options.forEach(opt => {
      range[opt.dimension].max += opt.weight * 100;
      range[opt.dimension].min -= opt.weight * 50;
    });
  });
  return range;
}

export function scoreForcedChoice(
  questions: ForcedChoiceQuestion[],
  responses: ForcedChoiceResponse[]
): Record<EQDimension, number[]> {
  const rawTotals: Record<EQDimension, number> = {
    self_awareness: 0,
    self_regulation: 0,
    empathy: 0,
    social_skills: 0,
    motivation: 0,
  };

  responses.forEach(response => {
    const question = questions.find(q => q.id === response.questionId);
    if (!question) return;

    const mostOption = question.options.find(o => o.id === response.mostLikeMe);
    const leastOption = response.leastLikeMe
      ? question.options.find(o => o.id === response.leastLikeMe)
      : null;

    if (mostOption) rawTotals[mostOption.dimension] += mostOption.weight * 100;
    if (leastOption) rawTotals[leastOption.dimension] -= leastOption.weight * 50;
  });

  const formRange = forcedChoiceFormRange(questions);
  const dimensionPoints: Record<EQDimension, number[]> = {
    self_awareness: [],
    self_regulation: [],
    empathy: [],
    social_skills: [],
    motivation: [],
  };

  DIMENSIONS.forEach(dim => {
    const { min, max } = formRange[dim];
    const raw = rawTotals[dim];
    const span = max - min;
    const normative = span > 0 ? normalize(raw, min, max) : 50;
    dimensionPoints[dim].push(normative);
  });

  return dimensionPoints;
}

export function scoreLikert(
  questions: LikertQuestion[],
  responses: LikertResponse[]
): { scores: Record<EQDimension, number[]>; socialDesirabilityFlags: number } {
  const dimensionScores: Record<EQDimension, number[]> = {
    self_awareness: [],
    self_regulation: [],
    empathy: [],
    social_skills: [],
    motivation: [],
  };

  const flagsPerDimension: Record<EQDimension, number> = {
    self_awareness: 0,
    self_regulation: 0,
    empathy: 0,
    social_skills: 0,
    motivation: 0,
  };
  let socialDesirabilityFlags = 0;

  responses.forEach(response => {
    const question = questions.find(q => q.id === response.questionId);
    if (!question) return;

    let value = response.value;
    const maxValue = question.scale;

    if (question.reverseKeyed) {
      value = maxValue + 1 - value;
    }

    const normalizedScore = normalize(value, 1, maxValue);
    if (question.socialDesirabilityRisk === 'high' && normalizedScore > 85) {
      socialDesirabilityFlags++;
      flagsPerDimension[question.dimension]++;
    }
    dimensionScores[question.dimension].push(normalizedScore);
  });

  DIMENSIONS.forEach(dim => {
    const nDim = dimensionScores[dim].length;
    const biasDim = nDim > 0 ? Math.min(1, flagsPerDimension[dim] / nDim) : 0;
    const factor = 1 - biasDim * DESIRABILITY_ATTENUATION_ALPHA;
    dimensionScores[dim] = dimensionScores[dim].map(s => s * factor);
  });

  return { scores: dimensionScores, socialDesirabilityFlags };
}

export function scoreEmotionVocabulary(
  questions: EmotionVocabularyQuestion[],
  responses: EmotionVocabularyResponse[]
): { score: number; correctCount: number; totalCount: number } {
  let totalCredit = 0;
  let correctCount = 0;

  responses.forEach(response => {
    const question = questions.find(q => q.id === response.questionId);
    if (!question) return;

    const selectedOption = question.options.find(o => o.id === response.selectedOptionId);
    if (selectedOption) {
      totalCredit += selectedOption.partialCredit;
      if (selectedOption.isCorrect) {
        correctCount++;
      }
    }
  });

  const maxCredit = responses.length;
  const score = responses.length > 0 ? normalize(totalCredit, 0, maxCredit) : 0;

  return { score, correctCount, totalCount: responses.length };
}

export function scoreMetaEQ(
  questions: MetaEQQuestion[],
  responses: MetaEQResponse[]
): { calibrationScore: number; blindSpots: string[]; hiddenStrengths: string[] } {
  const calibrationScores: number[] = [];
  const blindSpots: string[] = [];
  const hiddenStrengths: string[] = [];

  responses.forEach(response => {
    const question = questions.find(q => q.id === response.questionId);
    if (!question) return;

    const delta = response.selfRating - response.otherRating;
    const normalizedDelta = delta / question.scale;

    const deltaScore = Math.min(1, 1 - Math.abs(normalizedDelta) + META_EQ_UNDERRATING_BETA * Math.max(0, -normalizedDelta));
    calibrationScores.push(deltaScore);

    if (normalizedDelta > 0.3) blindSpots.push(question.dimension);
    if (normalizedDelta < -0.3) hiddenStrengths.push(question.dimension);
  });

  const calibrationScore = calibrationScores.length > 0 ? mean(calibrationScores) * 100 : 50;
  return { calibrationScore, blindSpots, hiddenStrengths };
}

export function scorePhysiologicalProxy(
  questions: PhysiologicalProxyQuestion[],
  responses: PhysiologicalProxyResponse[]
): number {
  const awarenessLevels = {
    high: 100,
    medium: 70,
    low: 30,
  };

  let totalScore = 0;

  responses.forEach(response => {
    const question = questions.find(q => q.id === response.questionId);
    if (!question) return;

    const selectedOption = question.options.find(o => o.id === response.selectedOptionId);
    if (selectedOption) {
      totalScore += awarenessLevels[selectedOption.awarenessLevel];
    }
  });

  return responses.length > 0 ? totalScore / responses.length : 0;
}

export function scoreConsistencyProbes(
  questions: ConsistencyProbeQuestion[],
  responses: ConsistencyProbeResponse[]
): { consistencyIndex: number; inconsistentPairs: string[] } {
  const responseMap = new Map<string, number>();
  responses.forEach(r => responseMap.set(r.questionId, r.value));

  const inconsistentPairs: string[] = [];
  const consistencyScores: number[] = [];

  questions.forEach(question => {
    const thisValue = responseMap.get(question.id);
    const pairedValue = responseMap.get(question.pairedWithId);

    if (thisValue === undefined || pairedValue === undefined) return;
    if (question.id > question.pairedWithId) return;

    const pairedQuestion = questions.find(q => q.id === question.pairedWithId);
    if (!pairedQuestion) return;

    const maxScale = question.scale;
    let expectedConsistency: number;

    if (question.expectedCorrelation === 'negative') {
      const expectedSum = maxScale + 1;
      const actualSum = thisValue + pairedValue;
      const deviation = Math.abs(actualSum - expectedSum) / maxScale;
      expectedConsistency = 1 - deviation;
    } else {
      const difference = Math.abs(thisValue - pairedValue) / maxScale;
      expectedConsistency = 1 - difference;
    }

    consistencyScores.push(expectedConsistency);

    if (expectedConsistency < 0.5) {
      inconsistentPairs.push(question.id);
    }
  });

  const consistencyIndex = consistencyScores.length > 0 ? mean(consistencyScores) : 0.7;

  return { consistencyIndex, inconsistentPairs };
}

export function scoreRankingAllocation(
  questions: RankingAllocationQuestion[],
  responses: RankingAllocationResponse[]
): Record<EQDimension, number[]> {
  const dimensionScores: Record<EQDimension, number[]> = {
    self_awareness: [],
    self_regulation: [],
    empathy: [],
    social_skills: [],
    motivation: [],
  };

  responses.forEach(response => {
    const question = questions.find(q => q.id === response.questionId);
    if (!question) return;

    question.options.forEach(option => {
      const allocation = response.allocations[option.id] || 0;
      const normalizedScore = (allocation / question.totalPoints) * 100;
      dimensionScores[option.dimension].push(normalizedScore);
    });
  });

  return dimensionScores;
}

// =============================================================================
// RESPONSE TIME ANALYSIS
// =============================================================================

export function analyzeResponseTimes(responses: EQResponse[]): {
  suspiciouslyFast: number;
  averageTime: number;
  medianTime: number;
} {
  const times = responses.map(r => r.responseTimeMs);
  const suspiciouslyFast = times.filter(t => t < 500).length;
  const averageTime = mean(times);
  const sortedTimes = [...times].sort((a, b) => a - b);
  const medianTime = sortedTimes[Math.floor(sortedTimes.length / 2)] || 0;

  return { suspiciouslyFast, averageTime, medianTime };
}

// =============================================================================
// MAIN SCORING ENGINE
// =============================================================================

export function calculateEQScore(
  questions: EQQuestion[],
  responses: EQResponse[],
  userId: string,
  assessmentType: 'check_in' | 'full_test'
): EQAssessmentResult {
  // Separate questions and responses by type
  const forcedChoiceQs = questions.filter(q => q.type === 'forced_choice') as ForcedChoiceQuestion[];
  const forcedChoiceRs = responses.filter(r => r.type === 'forced_choice') as ForcedChoiceResponse[];

  const likertQs = questions.filter(q => q.type === 'likert') as LikertQuestion[];
  const likertRs = responses.filter(r => r.type === 'likert') as LikertResponse[];

  const emotionVocabQs = questions.filter(q => q.type === 'emotion_vocabulary') as EmotionVocabularyQuestion[];
  const emotionVocabRs = responses.filter(r => r.type === 'emotion_vocabulary') as EmotionVocabularyResponse[];

  const metaEQQs = questions.filter(q => q.type === 'meta_eq') as MetaEQQuestion[];
  const metaEQRs = responses.filter(r => r.type === 'meta_eq') as MetaEQResponse[];

  const physioQs = questions.filter(q => q.type === 'physiological_proxy') as PhysiologicalProxyQuestion[];
  const physioRs = responses.filter(r => r.type === 'physiological_proxy') as PhysiologicalProxyResponse[];

  const consistencyQs = questions.filter(q => q.type === 'consistency_probe') as ConsistencyProbeQuestion[];
  const consistencyRs = responses.filter(r => r.type === 'consistency_probe') as ConsistencyProbeResponse[];

  const rankingQs = questions.filter(q => q.type === 'ranking_allocation') as RankingAllocationQuestion[];
  const rankingRs = responses.filter(r => r.type === 'ranking_allocation') as RankingAllocationResponse[];

  // Exclude gate-only item from physio score
  const physioQsScored = physioQs.filter(q => q.id !== 'pp_gate');
  const physioRsScored = physioRs.filter(r => r.questionId !== 'pp_gate');

  // Score each type
  const fcScores = scoreForcedChoice(forcedChoiceQs, forcedChoiceRs);
  const { scores: likertScores, socialDesirabilityFlags } = scoreLikert(likertQs, likertRs);
  const emotionVocab = scoreEmotionVocabulary(emotionVocabQs, emotionVocabRs);
  const metaEQ = scoreMetaEQ(metaEQQs, metaEQRs);
  const physioScore = scorePhysiologicalProxy(physioQsScored, physioRsScored);
  const consistency = scoreConsistencyProbes(consistencyQs, consistencyRs);
  const rankingScores = scoreRankingAllocation(rankingQs, rankingRs);

  // Response time analysis
  const responseTimeAnalysis = analyzeResponseTimes(responses);

  // Physio gated by emotion vocabulary
  const physioGateFromVocab = emotionVocabRs.length > 0 ? emotionVocab.score / 100 : 1;
  const ppGateResponse = physioRs.find(r => r.questionId === 'pp_gate');
  const physioGateFromRegulation = ppGateResponse
    ? (() => {
        const q = physioQs.find(qq => qq.id === 'pp_gate');
        const opt = q?.options.find(o => o.id === ppGateResponse.selectedOptionId);
        if (!opt) return 1;
        if (opt.awarenessLevel === 'high') return 1;
        if (opt.awarenessLevel === 'medium') return 0.7;
        return 0.3;
      })()
    : 1;
  const physioGate = physioGateFromVocab * physioGateFromRegulation;
  const gatedPhysioScore = physioScore * physioGate;

  // Emotion vocabulary split
  const emotionVocabByDim: Partial<Record<EQDimension, number>> = {};
  if (emotionVocabRs.length > 0) {
    emotionVocabByDim.self_awareness = emotionVocab.score * EMOTION_VOCAB_SPLIT.self_awareness;
    emotionVocabByDim.self_regulation = emotionVocab.score * EMOTION_VOCAB_SPLIT.self_regulation;
    emotionVocabByDim.empathy = emotionVocab.score * EMOTION_VOCAB_SPLIT.empathy;
  }

  // Aggregate dimension scores
  const dimensionScores: DimensionScores = {
    self_awareness: 0,
    self_regulation: 0,
    empathy: 0,
    social_skills: 0,
    motivation: 0,
  };

  DIMENSIONS.forEach(dim => {
    const weightedSum: number[] = [];
    let weightSum = 0;

    if (fcScores[dim].length > 0) {
      fcScores[dim].forEach(s => {
        const fcAdjusted = 50 + (s - 50) * FC_VARIANCE_EQUALIZATION;
        weightedSum.push(fcAdjusted * QUESTION_TYPE_WEIGHTS.forced_choice);
        weightSum += QUESTION_TYPE_WEIGHTS.forced_choice;
      });
    }
    if (likertScores[dim].length > 0) {
      likertScores[dim].forEach(s => {
        weightedSum.push(s * QUESTION_TYPE_WEIGHTS.likert);
        weightSum += QUESTION_TYPE_WEIGHTS.likert;
      });
    }
    if (rankingScores[dim].length > 0) {
      rankingScores[dim].forEach(s => {
        weightedSum.push(s * QUESTION_TYPE_WEIGHTS.ranking_allocation * RANKING_DIMENSION_WEIGHT);
        weightSum += QUESTION_TYPE_WEIGHTS.ranking_allocation * RANKING_DIMENSION_WEIGHT;
      });
    }

    if (dim === 'self_awareness') {
      if (physioRs.length > 0) {
        weightedSum.push(gatedPhysioScore * QUESTION_TYPE_WEIGHTS.physiological_proxy);
        weightSum += QUESTION_TYPE_WEIGHTS.physiological_proxy;
      }
      if (metaEQRs.length > 0) {
        weightedSum.push(metaEQ.calibrationScore * QUESTION_TYPE_WEIGHTS.meta_eq);
        weightSum += QUESTION_TYPE_WEIGHTS.meta_eq;
      }
    }
    if (emotionVocabByDim[dim] !== undefined) {
      weightedSum.push(emotionVocabByDim[dim]! * QUESTION_TYPE_WEIGHTS.emotion_vocabulary);
      weightSum += QUESTION_TYPE_WEIGHTS.emotion_vocabulary;
    }

    dimensionScores[dim] = weightSum > 0
      ? weightedSum.reduce((a, b) => a + b, 0) / weightSum
      : 50;
  });

  // Ensure no NaN in dimension scores (fallback 50)
  DIMENSIONS.forEach(dim => {
    dimensionScores[dim] = Number.isFinite(dimensionScores[dim]) ? dimensionScores[dim]! : 50;
  });

  // Cap self-awareness
  const otherDims: EQDimension[] = ['self_regulation', 'empathy', 'social_skills', 'motivation'];
  const otherMean = otherDims.reduce((s, d) => s + dimensionScores[d], 0) / 4;
  const saCap = Number.isFinite(otherMean) ? otherMean * SELF_AWARENESS_CAP_MULTIPLIER : 100;
  dimensionScores.self_awareness = Number.isFinite(dimensionScores.self_awareness)
    ? Math.min(dimensionScores.self_awareness, saCap)
    : 50;

  // Type-specific scores
  const typeScores = {
    forced_choice: mean(Object.values(fcScores).flat()) || 50,
    likert: mean(Object.values(likertScores).flat()) || 50,
    emotion_vocabulary: emotionVocab.score || 50,
    meta_eq: metaEQ.calibrationScore || 50,
    physiological_proxy: physioScore || 50,
    consistency_probe: consistency.consistencyIndex * 100 || 50,
    ranking_allocation: mean(Object.values(rankingScores).flat()) || 50,
  };

  // Calculate overall score
  let overallScore = DIMENSIONS.reduce((total, dim) => {
    const s = dimensionScores[dim];
    return total + (Number.isFinite(s) ? s : 50) * DIMENSION_WEIGHTS[dim];
  }, 0);

  // Apply consistency penalty
  const consistencyResult = calculateConsistencyPenalty(consistency.consistencyIndex);
  overallScore = Math.max(0, overallScore - consistencyResult.penalty);
  if (!Number.isFinite(overallScore)) overallScore = 50;

  // Likert entropy check
  let likertVarianceFlag: 'uniform' | 'chaotic' | null = null;
  if (likertRs.length >= 3) {
    const likertValues = likertRs.map(r => r.value);
    const likertVar = standardDeviation(likertValues) ** 2;
    if (likertVar < LIKERT_VARIANCE_STRAIGHT_LINE) likertVarianceFlag = 'uniform';
    else if (likertVar > LIKERT_VARIANCE_CHAOTIC) likertVarianceFlag = 'chaotic';
  }

  // Quality indicators
  const qualityIndicators: ScoreQualityIndicators = {
    consistencyIndex: consistency.consistencyIndex,
    consistencyPenalty: consistencyResult.penalty,
    consistencyPenaltyLevel: consistencyResult.penaltyLevel,
    isUnreliable: consistencyResult.isUnreliable,
    socialDesirabilityBias: likertRs.length > 0
      ? Math.min(1, socialDesirabilityFlags / likertRs.length)
      : 0,
    responseTimeFlags: responseTimeAnalysis.suspiciouslyFast,
    completionRate: Math.min(1, responses.length / questions.length),
    selfAwarenessCalibration: metaEQ.calibrationScore / 100,
    likertVarianceFlag,
  };

  // Determine strengths and growth areas
  const sortedDimensions = DIMENSIONS.slice().sort(
    (a, b) => dimensionScores[b] - dimensionScores[a]
  );
  const strengths = sortedDimensions.slice(0, 2);
  const growthAreas = sortedDimensions.slice(-2).reverse();

  // Generate insights
  const insights = generateInsights(dimensionScores, qualityIndicators, metaEQ);

  const safeRound = (n: number) => Math.round(Number.isFinite(n) ? n : 50);

  return {
    id: generateId(),
    userId,
    assessmentType,
    completedAt: new Date().toISOString(),
    overallScore: safeRound(overallScore),
    dimensionScores: {
      self_awareness: safeRound(dimensionScores.self_awareness),
      self_regulation: safeRound(dimensionScores.self_regulation),
      empathy: safeRound(dimensionScores.empathy),
      social_skills: safeRound(dimensionScores.social_skills),
      motivation: safeRound(dimensionScores.motivation),
    },
    typeScores: {
      forced_choice: Math.round(typeScores.forced_choice),
      likert: Math.round(typeScores.likert),
      emotion_vocabulary: Math.round(typeScores.emotion_vocabulary),
      meta_eq: Math.round(typeScores.meta_eq),
      physiological_proxy: Math.round(typeScores.physiological_proxy),
      consistency_probe: Math.round(typeScores.consistency_probe),
      ranking_allocation: Math.round(typeScores.ranking_allocation),
    },
    qualityIndicators,
    responses,
    questionIds: questions.map(q => q.id),
    strengths,
    growthAreas,
    insights,
  };
}

// =============================================================================
// INSIGHT GENERATION
// =============================================================================

function generateInsights(
  dimensionScores: DimensionScores,
  qualityIndicators: ScoreQualityIndicators,
  metaEQ: { calibrationScore: number; blindSpots: string[]; hiddenStrengths: string[] }
): string[] {
  const insights: string[] = [];

  // Dimension-based insights
  if (dimensionScores.self_awareness >= 70) {
    insights.push('You demonstrate strong emotional self-awareness, recognizing your feelings as they arise.');
  } else if (dimensionScores.self_awareness < 40) {
    insights.push('Building awareness of your emotional states could help you respond more intentionally.');
  }

  if (dimensionScores.self_regulation >= 70) {
    insights.push('You show good ability to manage your emotional reactions and stay composed.');
  } else if (dimensionScores.self_regulation < 40) {
    insights.push('Practicing pause techniques could help you respond rather than react to emotions.');
  }

  if (dimensionScores.empathy >= 70) {
    insights.push('You have strong ability to understand and connect with others\' emotional experiences.');
  }

  if (dimensionScores.motivation >= 70) {
    insights.push('You show resilience and maintain motivation even when facing challenges.');
  }

  // Meta-EQ insights
  if (metaEQ.blindSpots.length > 0) {
    insights.push('There may be areas where your self-perception differs from how others see you.');
  }
  if (metaEQ.hiddenStrengths.length > 0) {
    insights.push('You may underestimate some of your emotional capabilities.');
  }

  // Quality-based insights (only add if there are issues)
  if (qualityIndicators.isUnreliable) {
    insights.push('Your responses showed significant variability. Consider retaking when you have more time to focus.');
  }

  return insights;
}

// =============================================================================
// SCORE INTERPRETATION
// =============================================================================

export type ScoreLevel = 'developing' | 'emerging' | 'proficient' | 'strong' | 'exemplary';

export function getScoreLevel(score: number): ScoreLevel {
  if (score >= 80) return 'exemplary';
  if (score >= 65) return 'strong';
  if (score >= 50) return 'proficient';
  if (score >= 35) return 'emerging';
  return 'developing';
}

export function getScoreLevelDescription(level: ScoreLevel): string {
  const descriptions: Record<ScoreLevel, string> = {
    developing: 'This is an area with significant room for growth. Focus here first.',
    emerging: 'You\'re building foundational skills in this area.',
    proficient: 'You have solid capabilities here, with room for refinement.',
    strong: 'This is one of your stronger areas. Keep developing it.',
    exemplary: 'This is a core strength. Consider how to leverage it more.',
  };
  return descriptions[level];
}

export function getDimensionDescription(dimension: EQDimension): string {
  const descriptions: Record<EQDimension, string> = {
    self_awareness: 'Recognizing and understanding your own emotions, triggers, and patterns.',
    self_regulation: 'Managing emotions, controlling impulses, and adapting to situations.',
    empathy: 'Understanding others\' emotions and perspectives with compassion.',
    social_skills: 'Communicating effectively, resolving conflicts, and influencing positively.',
    motivation: 'Maintaining drive, resilience, and optimism toward goals.',
  };
  return descriptions[dimension];
}

export function getDimensionLabel(dimension: EQDimension): string {
  const labels: Record<EQDimension, string> = {
    self_awareness: 'Self-Awareness',
    self_regulation: 'Self-Regulation',
    empathy: 'Empathy',
    social_skills: 'Social Skills',
    motivation: 'Motivation',
  };
  return labels[dimension];
}
