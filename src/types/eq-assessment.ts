/**
 * EQ Assessment Type Definitions
 * 
 * Complete type system for the EQ assessment feature.
 */

// =============================================================================
// CORE TYPES
// =============================================================================

export type EQDimension = 
  | 'self_awareness'
  | 'self_regulation'
  | 'empathy'
  | 'social_skills'
  | 'motivation';

export type QuestionDifficulty = 'easy' | 'medium' | 'hard';

export type QuestionType =
  | 'forced_choice'
  | 'likert'
  | 'emotion_vocabulary'
  | 'meta_eq'
  | 'physiological_proxy'
  | 'consistency_probe'
  | 'ranking_allocation';

// =============================================================================
// BASE QUESTION INTERFACE
// =============================================================================

export interface BaseQuestion {
  id: string;
  type: QuestionType;
  dimension: EQDimension;
  difficulty: QuestionDifficulty;
  version: number;
  facet?: string;
}

// =============================================================================
// FORCED CHOICE QUESTIONS
// =============================================================================

export interface ForcedChoiceOption {
  id: string;
  text: string;
  dimension: EQDimension;
  weight: number;
}

export interface ForcedChoiceQuestion extends BaseQuestion {
  type: 'forced_choice';
  prompt: string;
  selectMost: boolean;
  selectLeast?: boolean;
  options: ForcedChoiceOption[];
}

export interface ForcedChoiceResponse {
  questionId: string;
  type: 'forced_choice';
  mostLikeMe: string;
  leastLikeMe?: string;
  responseTimeMs: number;
}

// =============================================================================
// LIKERT QUESTIONS
// =============================================================================

export interface LikertQuestion extends BaseQuestion {
  type: 'likert';
  statement: string;
  scale: number;
  reverseKeyed: boolean;
  anchorLabels: {
    low: string;
    high: string;
  };
  socialDesirabilityRisk: 'low' | 'medium' | 'high';
}

export interface LikertResponse {
  questionId: string;
  type: 'likert';
  value: number;
  responseTimeMs: number;
}

// =============================================================================
// EMOTION VOCABULARY QUESTIONS
// =============================================================================

export interface EmotionVocabularyOption {
  id: string;
  emotion: string;
  isCorrect: boolean;
  partialCredit: number;
}

export interface EmotionVocabularyQuestion extends BaseQuestion {
  type: 'emotion_vocabulary';
  scenario: string;
  options: EmotionVocabularyOption[];
}

export interface EmotionVocabularyResponse {
  questionId: string;
  type: 'emotion_vocabulary';
  selectedOptionId: string;
  responseTimeMs: number;
}

// =============================================================================
// META-EQ QUESTIONS
// =============================================================================

export interface MetaEQQuestion extends BaseQuestion {
  type: 'meta_eq';
  selfStatement: string;
  otherStatement: string;
  scale: number;
  idealDelta: number;
}

export interface MetaEQResponse {
  questionId: string;
  type: 'meta_eq';
  selfRating: number;
  otherRating: number;
  responseTimeMs: number;
}

// =============================================================================
// PHYSIOLOGICAL PROXY QUESTIONS
// =============================================================================

export interface PhysiologicalProxyOption {
  id: string;
  text: string;
  awarenessLevel: 'high' | 'medium' | 'low';
  bodyArea?: string;
}

export interface PhysiologicalProxyQuestion extends BaseQuestion {
  type: 'physiological_proxy';
  prompt: string;
  options: PhysiologicalProxyOption[];
}

export interface PhysiologicalProxyResponse {
  questionId: string;
  type: 'physiological_proxy';
  selectedOptionId: string;
  responseTimeMs: number;
}

// =============================================================================
// CONSISTENCY PROBE QUESTIONS
// =============================================================================

export interface ConsistencyProbeQuestion extends BaseQuestion {
  type: 'consistency_probe';
  statement: string;
  scale: number;
  pairedWithId: string;
  expectedCorrelation: 'positive' | 'negative';
}

export interface ConsistencyProbeResponse {
  questionId: string;
  type: 'consistency_probe';
  value: number;
  responseTimeMs: number;
}

// =============================================================================
// RANKING ALLOCATION QUESTIONS
// =============================================================================

export interface RankingAllocationOption {
  id: string;
  text: string;
  dimension: EQDimension;
}

export interface RankingAllocationQuestion extends BaseQuestion {
  type: 'ranking_allocation';
  prompt: string;
  totalPoints: number;
  minPerOption: number;
  maxPerOption: number;
  options: RankingAllocationOption[];
}

export interface RankingAllocationResponse {
  questionId: string;
  type: 'ranking_allocation';
  allocations: Record<string, number>;
  responseTimeMs: number;
}

// =============================================================================
// UNION TYPES
// =============================================================================

export type EQQuestion =
  | ForcedChoiceQuestion
  | LikertQuestion
  | EmotionVocabularyQuestion
  | MetaEQQuestion
  | PhysiologicalProxyQuestion
  | ConsistencyProbeQuestion
  | RankingAllocationQuestion;

export type EQResponse =
  | ForcedChoiceResponse
  | LikertResponse
  | EmotionVocabularyResponse
  | MetaEQResponse
  | PhysiologicalProxyResponse
  | ConsistencyProbeResponse
  | RankingAllocationResponse;

// =============================================================================
// SCORING TYPES
// =============================================================================

export interface DimensionScores {
  self_awareness: number;
  self_regulation: number;
  empathy: number;
  social_skills: number;
  motivation: number;
}

export interface ScoreQualityIndicators {
  consistencyIndex: number;
  consistencyPenalty: number;
  consistencyPenaltyLevel: 'none' | 'mild' | 'moderate' | 'severe';
  isUnreliable: boolean;
  socialDesirabilityBias: number;
  responseTimeFlags: number;
  completionRate: number;
  selfAwarenessCalibration: number;
  likertVarianceFlag: 'uniform' | 'chaotic' | null;
}

export interface EQAssessmentResult {
  id: string;
  userId: string;
  assessmentType: 'check_in' | 'full_test';
  completedAt: string;
  overallScore: number;
  dimensionScores: DimensionScores;
  typeScores: Record<string, number>;
  qualityIndicators: ScoreQualityIndicators;
  responses: EQResponse[];
  questionIds: string[];
  strengths: EQDimension[];
  growthAreas: EQDimension[];
  insights: string[];
}

// =============================================================================
// USER INFO TYPES
// =============================================================================

export interface BasicUserInfo {
  firstName: string;
  lastName: string;
  email: string;
  takingFor: 'myself' | 'company';
}

export interface FullUserInfo extends BasicUserInfo {
  company?: string;
  role?: string;
  phone?: string;
  teamSize?: string;
}

// =============================================================================
// ASSESSMENT STATE
// =============================================================================

export type AssessmentStep = 
  | 'intro'
  | 'questions'
  | 'basic_info'
  | 'score_preview'
  | 'full_info'
  | 'full_report';

export interface AssessmentState {
  step: AssessmentStep;
  questions: EQQuestion[];
  currentQuestionIndex: number;
  responses: EQResponse[];
  basicInfo: BasicUserInfo | null;
  fullInfo: FullUserInfo | null;
  result: EQAssessmentResult | null;
  startTime: number | null;
}
