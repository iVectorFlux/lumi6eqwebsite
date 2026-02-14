/**
 * EQ Assessment Question Bank
 * 
 * Comprehensive question collection for the EQ assessment system.
 * 10-20 questions per type, covering all EQ dimensions.
 * 
 * IMPORTANT: Questions are designed with psychometric principles:
 * - Forced-choice removes social desirability bias
 * - Likert includes reverse-keyed items
 * - Consistency probes detect unreliable responding
 * - Meta-EQ measures self-awareness calibration
 */

import type {
  ForcedChoiceQuestion,
  LikertQuestion,
  EmotionVocabularyQuestion,
  MetaEQQuestion,
  PhysiologicalProxyQuestion,
  ConsistencyProbeQuestion,
  RankingAllocationQuestion,
  EQQuestion,
} from '@/types/eq-assessment';

// =============================================================================
// 1. FORCED-CHOICE TRAIT TRADEOFFS (15 questions)
// =============================================================================

export const FORCED_CHOICE_QUESTIONS: ForcedChoiceQuestion[] = [
  {
    id: 'fc_001',
    type: 'forced_choice',
    dimension: 'self_awareness',
    difficulty: 'medium',
    version: 1,
    prompt: 'Which statement describes you better?',
    selectMost: true,
    options: [
      { id: 'a', text: 'I notice subtle emotional shifts in others before they say anything', dimension: 'empathy', weight: 1 },
      { id: 'b', text: 'I notice when tension is rising and slow my response', dimension: 'self_regulation', weight: 1 },
    ],
  },
  {
    id: 'fc_002',
    type: 'forced_choice',
    dimension: 'self_regulation',
    difficulty: 'medium',
    version: 1,
    prompt: 'Which is more characteristic of you?',
    selectMost: true,
    options: [
      { id: 'a', text: 'I can precisely name the emotions I\'m experiencing', dimension: 'self_awareness', weight: 1 },
      { id: 'b', text: 'I can adjust my approach based on how others are feeling', dimension: 'social_skills', weight: 1 },
    ],
  },
  {
    id: 'fc_003',
    type: 'forced_choice',
    dimension: 'empathy',
    difficulty: 'medium',
    version: 1,
    prompt: 'When facing a challenge, which applies more to you?',
    selectMost: true,
    options: [
      { id: 'a', text: 'I bounce back quickly from setbacks', dimension: 'motivation', weight: 1 },
      { id: 'b', text: 'I understand exactly what triggered my emotional response', dimension: 'self_awareness', weight: 1 },
    ],
  },
  {
    id: 'fc_004',
    type: 'forced_choice',
    dimension: 'social_skills',
    difficulty: 'hard',
    version: 1,
    prompt: 'In group settings, which describes you better?',
    selectMost: true,
    selectLeast: true,
    options: [
      { id: 'a', text: 'I pick up on tension between people even when it\'s unspoken', dimension: 'empathy', weight: 1 },
      { id: 'b', text: 'I name my emotions and check in with the other person before reacting', dimension: 'social_skills', weight: 1 },
      { id: 'c', text: 'I notice others\' frustration and adjust my tone and pace', dimension: 'self_regulation', weight: 1 },
      { id: 'd', text: 'I recognize when my mood is affecting my judgment', dimension: 'self_awareness', weight: 1 },
    ],
  },
  {
    id: 'fc_005',
    type: 'forced_choice',
    dimension: 'motivation',
    difficulty: 'medium',
    version: 1,
    prompt: 'Which sounds more like you?',
    selectMost: true,
    options: [
      { id: 'a', text: 'I find meaning and purpose even in routine tasks', dimension: 'motivation', weight: 1 },
      { id: 'b', text: 'I sense when someone needs space or support', dimension: 'empathy', weight: 1 },
    ],
  },
  {
    id: 'fc_006',
    type: 'forced_choice',
    dimension: 'self_awareness',
    difficulty: 'hard',
    version: 1,
    prompt: 'Choose the option that best fits you:',
    selectMost: true,
    selectLeast: true,
    options: [
      { id: 'a', text: 'I can describe my emotional state with nuance and precision', dimension: 'self_awareness', weight: 1 },
      { id: 'b', text: 'I maintain optimism even during difficult periods', dimension: 'motivation', weight: 1 },
      { id: 'c', text: 'I help others find common ground by clarifying what each person needs', dimension: 'social_skills', weight: 1 },
      { id: 'd', text: 'I pause and reflect before reacting emotionally', dimension: 'self_regulation', weight: 1 },
    ],
  },
  {
    id: 'fc_007',
    type: 'forced_choice',
    dimension: 'empathy',
    difficulty: 'medium',
    version: 1,
    prompt: 'Which ability is stronger in you?',
    selectMost: true,
    options: [
      { id: 'a', text: 'Seeing situations from others\' perspectives', dimension: 'empathy', weight: 1 },
      { id: 'b', text: 'Staying focused and driven toward my goals', dimension: 'motivation', weight: 1 },
    ],
  },
  {
    id: 'fc_008',
    type: 'forced_choice',
    dimension: 'self_regulation',
    difficulty: 'medium',
    version: 1,
    prompt: 'When stressed, which is more true of you?',
    selectMost: true,
    options: [
      { id: 'a', text: 'I quickly identify what\'s causing my stress', dimension: 'self_awareness', weight: 1 },
      { id: 'b', text: 'I use specific techniques to slow my reaction when stressed', dimension: 'self_regulation', weight: 1 },
    ],
  },
  {
    id: 'fc_009',
    type: 'forced_choice',
    dimension: 'social_skills',
    difficulty: 'hard',
    version: 1,
    prompt: 'In conversations, which best describes you?',
    selectMost: true,
    selectLeast: true,
    options: [
      { id: 'a', text: 'I notice micro-expressions that reveal how someone really feels', dimension: 'empathy', weight: 1 },
      { id: 'b', text: 'I state my needs and ask for what I need without blaming', dimension: 'social_skills', weight: 1 },
      { id: 'c', text: 'I recognize when I\'m projecting my feelings onto a situation', dimension: 'self_awareness', weight: 1 },
      { id: 'd', text: 'I notice when I\'m getting impatient and pause before responding', dimension: 'self_regulation', weight: 1 },
    ],
  },
  {
    id: 'fc_010',
    type: 'forced_choice',
    dimension: 'motivation',
    difficulty: 'medium',
    version: 1,
    prompt: 'Which describes you more accurately?',
    selectMost: true,
    options: [
      { id: 'a', text: 'I recover from disappointments faster than most people', dimension: 'motivation', weight: 1 },
      { id: 'b', text: 'I easily detect when someone is masking their true feelings', dimension: 'empathy', weight: 1 },
    ],
  },
  {
    id: 'fc_011',
    type: 'forced_choice',
    dimension: 'self_awareness',
    difficulty: 'medium',
    version: 1,
    prompt: 'Which statement resonates more with you?',
    selectMost: true,
    options: [
      { id: 'a', text: 'I know my emotional triggers and can prepare for them', dimension: 'self_awareness', weight: 1 },
      { id: 'b', text: 'I adjust how I communicate based on what motivates different people', dimension: 'social_skills', weight: 1 },
    ],
  },
  {
    id: 'fc_012',
    type: 'forced_choice',
    dimension: 'self_regulation',
    difficulty: 'hard',
    version: 1,
    prompt: 'Choose what fits you best and least:',
    selectMost: true,
    selectLeast: true,
    options: [
      { id: 'a', text: 'I adapt my emotional expression to different contexts', dimension: 'self_regulation', weight: 1 },
      { id: 'b', text: 'I understand the underlying reasons for my emotions', dimension: 'self_awareness', weight: 1 },
      { id: 'c', text: 'I adjust how I connect based on what the other person seems to need', dimension: 'social_skills', weight: 1 },
      { id: 'd', text: 'I genuinely feel what others are going through', dimension: 'empathy', weight: 1 },
    ],
  },
  {
    id: 'fc_013',
    type: 'forced_choice',
    dimension: 'empathy',
    difficulty: 'medium',
    version: 1,
    prompt: 'Which comes more naturally to you?',
    selectMost: true,
    options: [
      { id: 'a', text: 'Feeling compassion for people in difficult situations', dimension: 'empathy', weight: 1 },
      { id: 'b', text: 'Managing my emotions so they don\'t control my behavior', dimension: 'self_regulation', weight: 1 },
    ],
  },
  {
    id: 'fc_014',
    type: 'forced_choice',
    dimension: 'social_skills',
    difficulty: 'medium',
    version: 1,
    prompt: 'Which is a greater strength for you?',
    selectMost: true,
    options: [
      { id: 'a', text: 'Navigating complex social dynamics smoothly', dimension: 'social_skills', weight: 1 },
      { id: 'b', text: 'Maintaining enthusiasm and drive over long periods', dimension: 'motivation', weight: 1 },
    ],
  },
  {
    id: 'fc_015',
    type: 'forced_choice',
    dimension: 'motivation',
    difficulty: 'hard',
    version: 1,
    prompt: 'Select what describes you most and least:',
    selectMost: true,
    selectLeast: true,
    options: [
      { id: 'a', text: 'I persist toward goals despite obstacles and setbacks', dimension: 'motivation', weight: 1 },
      { id: 'b', text: 'I help others de-escalate by listening and reflecting back what they say', dimension: 'social_skills', weight: 1 },
      { id: 'c', text: 'I notice when my emotions are shifting before they peak', dimension: 'self_awareness', weight: 1 },
      { id: 'd', text: 'I can delay gratification for longer-term rewards', dimension: 'self_regulation', weight: 1 },
    ],
  },
];

// =============================================================================
// 2. LIKERT TRAIT STATEMENTS (20 questions)
// =============================================================================

export const LIKERT_QUESTIONS: LikertQuestion[] = [
  // Self-Awareness (4 items)
  {
    id: 'lk_001',
    type: 'likert',
    dimension: 'self_awareness',
    facet: 'emotional_recognition',
    difficulty: 'easy',
    version: 1,
    statement: 'I can accurately name what I\'m feeling in difficult moments.',
    scale: 7,
    reverseKeyed: false,
    anchorLabels: { low: 'Strongly Disagree', high: 'Strongly Agree' },
    socialDesirabilityRisk: 'medium',
  },
  {
    id: 'lk_002',
    type: 'likert',
    dimension: 'self_awareness',
    facet: 'trigger_awareness',
    difficulty: 'medium',
    version: 1,
    statement: 'I rarely understand what triggers my emotional reactions.',
    scale: 7,
    reverseKeyed: true,
    anchorLabels: { low: 'Strongly Disagree', high: 'Strongly Agree' },
    socialDesirabilityRisk: 'low',
  },
  {
    id: 'lk_003',
    type: 'likert',
    dimension: 'self_awareness',
    facet: 'self_accuracy',
    difficulty: 'medium',
    version: 1,
    statement: 'I have a clear understanding of my emotional patterns over time.',
    scale: 7,
    reverseKeyed: false,
    anchorLabels: { low: 'Strongly Disagree', high: 'Strongly Agree' },
    socialDesirabilityRisk: 'medium',
  },
  {
    id: 'lk_004',
    type: 'likert',
    dimension: 'self_awareness',
    facet: 'interoceptive_awareness',
    difficulty: 'hard',
    version: 1,
    statement: 'I notice physical sensations in my body before I consciously recognize an emotion.',
    scale: 7,
    reverseKeyed: false,
    anchorLabels: { low: 'Strongly Disagree', high: 'Strongly Agree' },
    socialDesirabilityRisk: 'low',
  },
  // Self-Regulation (4 items)
  {
    id: 'lk_005',
    type: 'likert',
    dimension: 'self_regulation',
    facet: 'impulse_control',
    difficulty: 'easy',
    version: 1,
    statement: 'In heated moments, I usually pause before reacting.',
    scale: 7,
    reverseKeyed: false,
    anchorLabels: { low: 'Strongly Disagree', high: 'Strongly Agree' },
    socialDesirabilityRisk: 'high',
  },
  {
    id: 'lk_006',
    type: 'likert',
    dimension: 'self_regulation',
    facet: 'impulse_control',
    difficulty: 'medium',
    version: 1,
    statement: 'I often say things I later regret when I\'m upset.',
    scale: 7,
    reverseKeyed: true,
    anchorLabels: { low: 'Strongly Disagree', high: 'Strongly Agree' },
    socialDesirabilityRisk: 'low',
  },
  {
    id: 'lk_007',
    type: 'likert',
    dimension: 'self_regulation',
    facet: 'emotional_recovery',
    difficulty: 'medium',
    version: 1,
    statement: 'I recover emotionally faster than I used to.',
    scale: 7,
    reverseKeyed: false,
    anchorLabels: { low: 'Strongly Disagree', high: 'Strongly Agree' },
    socialDesirabilityRisk: 'medium',
  },
  {
    id: 'lk_008',
    type: 'likert',
    dimension: 'self_regulation',
    facet: 'stress_management',
    difficulty: 'hard',
    version: 1,
    statement: 'Under pressure, I can intentionally shift my emotional state.',
    scale: 7,
    reverseKeyed: false,
    anchorLabels: { low: 'Strongly Disagree', high: 'Strongly Agree' },
    socialDesirabilityRisk: 'medium',
  },
  // Empathy (4 items)
  {
    id: 'lk_009',
    type: 'likert',
    dimension: 'empathy',
    facet: 'emotional_reading',
    difficulty: 'easy',
    version: 1,
    statement: 'I notice emotional changes in others, even when they try to hide them.',
    scale: 7,
    reverseKeyed: false,
    anchorLabels: { low: 'Strongly Disagree', high: 'Strongly Agree' },
    socialDesirabilityRisk: 'medium',
  },
  {
    id: 'lk_010',
    type: 'likert',
    dimension: 'empathy',
    facet: 'perspective_taking',
    difficulty: 'medium',
    version: 1,
    statement: 'I find it hard to see situations from other people\'s point of view.',
    scale: 7,
    reverseKeyed: true,
    anchorLabels: { low: 'Strongly Disagree', high: 'Strongly Agree' },
    socialDesirabilityRisk: 'low',
  },
  {
    id: 'lk_011',
    type: 'likert',
    dimension: 'empathy',
    facet: 'compassionate_concern',
    difficulty: 'medium',
    version: 1,
    statement: 'I genuinely feel moved by others\' struggles and want to help.',
    scale: 7,
    reverseKeyed: false,
    anchorLabels: { low: 'Strongly Disagree', high: 'Strongly Agree' },
    socialDesirabilityRisk: 'high',
  },
  {
    id: 'lk_012',
    type: 'likert',
    dimension: 'empathy',
    facet: 'emotional_reading',
    difficulty: 'hard',
    version: 1,
    statement: 'I can sense the emotional atmosphere of a room immediately upon entering.',
    scale: 7,
    reverseKeyed: false,
    anchorLabels: { low: 'Strongly Disagree', high: 'Strongly Agree' },
    socialDesirabilityRisk: 'medium',
  },
  // Social Skills (4 items)
  {
    id: 'lk_013',
    type: 'likert',
    dimension: 'social_skills',
    facet: 'communication_clarity',
    difficulty: 'easy',
    version: 1,
    statement: 'In tense discussions, I usually express my emotions clearly without escalating conflict.',
    scale: 7,
    reverseKeyed: false,
    anchorLabels: { low: 'Strongly Disagree', high: 'Strongly Agree' },
    socialDesirabilityRisk: 'high',
  },
  {
    id: 'lk_014',
    type: 'likert',
    dimension: 'social_skills',
    facet: 'conflict_navigation',
    difficulty: 'medium',
    version: 1,
    statement: 'I tend to avoid difficult conversations about emotions.',
    scale: 7,
    reverseKeyed: true,
    anchorLabels: { low: 'Strongly Disagree', high: 'Strongly Agree' },
    socialDesirabilityRisk: 'low',
  },
  {
    id: 'lk_015',
    type: 'likert',
    dimension: 'social_skills',
    facet: 'influence',
    difficulty: 'medium',
    version: 1,
    statement: 'In tense discussions, I often help shift the mood in a constructive direction.',
    scale: 7,
    reverseKeyed: false,
    anchorLabels: { low: 'Strongly Disagree', high: 'Strongly Agree' },
    socialDesirabilityRisk: 'high',
  },
  {
    id: 'lk_016',
    type: 'likert',
    dimension: 'social_skills',
    facet: 'conflict_navigation',
    difficulty: 'hard',
    version: 1,
    statement: 'In tense discussions, I usually help others find common ground.',
    scale: 7,
    reverseKeyed: false,
    anchorLabels: { low: 'Strongly Disagree', high: 'Strongly Agree' },
    socialDesirabilityRisk: 'high',
  },
  // Motivation (4 items)
  {
    id: 'lk_017',
    type: 'likert',
    dimension: 'motivation',
    facet: 'resilience',
    difficulty: 'easy',
    version: 1,
    statement: 'I bounce back quickly from disappointments.',
    scale: 7,
    reverseKeyed: false,
    anchorLabels: { low: 'Strongly Disagree', high: 'Strongly Agree' },
    socialDesirabilityRisk: 'medium',
  },
  {
    id: 'lk_018',
    type: 'likert',
    dimension: 'motivation',
    facet: 'optimism',
    difficulty: 'medium',
    version: 1,
    statement: 'I tend to focus on what could go wrong rather than what could go right.',
    scale: 7,
    reverseKeyed: true,
    anchorLabels: { low: 'Strongly Disagree', high: 'Strongly Agree' },
    socialDesirabilityRisk: 'low',
  },
  {
    id: 'lk_019',
    type: 'likert',
    dimension: 'motivation',
    facet: 'intrinsic_drive',
    difficulty: 'medium',
    version: 1,
    statement: 'I find meaning and purpose in my daily activities.',
    scale: 7,
    reverseKeyed: false,
    anchorLabels: { low: 'Strongly Disagree', high: 'Strongly Agree' },
    socialDesirabilityRisk: 'medium',
  },
  {
    id: 'lk_020',
    type: 'likert',
    dimension: 'motivation',
    facet: 'resilience',
    difficulty: 'hard',
    version: 1,
    statement: 'Setbacks motivate me to try harder rather than give up.',
    scale: 7,
    reverseKeyed: false,
    anchorLabels: { low: 'Strongly Disagree', high: 'Strongly Agree' },
    socialDesirabilityRisk: 'high',
  },
];

// =============================================================================
// 3. EMOTION VOCABULARY & DIFFERENTIATION (15 questions)
// =============================================================================

export const EMOTION_VOCABULARY_QUESTIONS: EmotionVocabularyQuestion[] = [
  {
    id: 'ev_001',
    type: 'emotion_vocabulary',
    dimension: 'self_awareness',
    facet: 'emotional_granularity',
    difficulty: 'easy',
    version: 1,
    scenario: 'Feeling tense while anticipating an evaluation or test',
    options: [
      { id: 'a', emotion: 'Fear', isCorrect: false, partialCredit: 0.5 },
      { id: 'b', emotion: 'Anxiety', isCorrect: true, partialCredit: 1 },
      { id: 'c', emotion: 'Stress', isCorrect: false, partialCredit: 0.7 },
      { id: 'd', emotion: 'Excitement', isCorrect: false, partialCredit: 0.3 },
    ],
  },
  {
    id: 'ev_002',
    type: 'emotion_vocabulary',
    dimension: 'self_awareness',
    facet: 'emotional_granularity',
    difficulty: 'medium',
    version: 1,
    scenario: 'Wanting something that someone else has',
    options: [
      { id: 'a', emotion: 'Jealousy', isCorrect: false, partialCredit: 0.6 },
      { id: 'b', emotion: 'Envy', isCorrect: true, partialCredit: 1 },
      { id: 'c', emotion: 'Resentment', isCorrect: false, partialCredit: 0.4 },
      { id: 'd', emotion: 'Greed', isCorrect: false, partialCredit: 0.3 },
    ],
  },
  {
    id: 'ev_003',
    type: 'emotion_vocabulary',
    dimension: 'self_awareness',
    facet: 'emotional_granularity',
    difficulty: 'medium',
    version: 1,
    scenario: 'Feeling bad after doing something that goes against your values',
    options: [
      { id: 'a', emotion: 'Shame', isCorrect: false, partialCredit: 0.6 },
      { id: 'b', emotion: 'Guilt', isCorrect: true, partialCredit: 1 },
      { id: 'c', emotion: 'Regret', isCorrect: false, partialCredit: 0.7 },
      { id: 'd', emotion: 'Embarrassment', isCorrect: false, partialCredit: 0.3 },
    ],
  },
  {
    id: 'ev_004',
    type: 'emotion_vocabulary',
    dimension: 'self_awareness',
    facet: 'emotional_granularity',
    difficulty: 'hard',
    version: 1,
    scenario: 'Feeling like you don\'t measure up to others\' expectations of who you should be',
    options: [
      { id: 'a', emotion: 'Guilt', isCorrect: false, partialCredit: 0.4 },
      { id: 'b', emotion: 'Shame', isCorrect: true, partialCredit: 1 },
      { id: 'c', emotion: 'Inadequacy', isCorrect: false, partialCredit: 0.8 },
      { id: 'd', emotion: 'Disappointment', isCorrect: false, partialCredit: 0.5 },
    ],
  },
  {
    id: 'ev_005',
    type: 'emotion_vocabulary',
    dimension: 'self_awareness',
    facet: 'emotional_granularity',
    difficulty: 'easy',
    version: 1,
    scenario: 'A warm feeling when receiving an unexpected kindness',
    options: [
      { id: 'a', emotion: 'Happiness', isCorrect: false, partialCredit: 0.5 },
      { id: 'b', emotion: 'Gratitude', isCorrect: true, partialCredit: 1 },
      { id: 'c', emotion: 'Relief', isCorrect: false, partialCredit: 0.3 },
      { id: 'd', emotion: 'Surprise', isCorrect: false, partialCredit: 0.4 },
    ],
  },
  {
    id: 'ev_006',
    type: 'emotion_vocabulary',
    dimension: 'self_awareness',
    facet: 'emotional_granularity',
    difficulty: 'medium',
    version: 1,
    scenario: 'Feeling bitter about a past event where you were treated unfairly',
    options: [
      { id: 'a', emotion: 'Anger', isCorrect: false, partialCredit: 0.5 },
      { id: 'b', emotion: 'Resentment', isCorrect: true, partialCredit: 1 },
      { id: 'c', emotion: 'Frustration', isCorrect: false, partialCredit: 0.4 },
      { id: 'd', emotion: 'Indignation', isCorrect: false, partialCredit: 0.7 },
    ],
  },
  {
    id: 'ev_007',
    type: 'emotion_vocabulary',
    dimension: 'self_awareness',
    facet: 'emotional_granularity',
    difficulty: 'hard',
    version: 1,
    scenario: 'Feeling a mix of pleasure and discomfort when someone praises you publicly',
    options: [
      { id: 'a', emotion: 'Pride', isCorrect: false, partialCredit: 0.5 },
      { id: 'b', emotion: 'Self-consciousness', isCorrect: true, partialCredit: 1 },
      { id: 'c', emotion: 'Embarrassment', isCorrect: false, partialCredit: 0.7 },
      { id: 'd', emotion: 'Humility', isCorrect: false, partialCredit: 0.4 },
    ],
  },
  {
    id: 'ev_008',
    type: 'emotion_vocabulary',
    dimension: 'self_awareness',
    facet: 'emotional_granularity',
    difficulty: 'easy',
    version: 1,
    scenario: 'Feeling a strong desire to escape from an uncomfortable situation',
    options: [
      { id: 'a', emotion: 'Fear', isCorrect: false, partialCredit: 0.6 },
      { id: 'b', emotion: 'Anxiety', isCorrect: false, partialCredit: 0.5 },
      { id: 'c', emotion: 'Discomfort', isCorrect: false, partialCredit: 0.7 },
      { id: 'd', emotion: 'Aversion', isCorrect: true, partialCredit: 1 },
    ],
  },
  {
    id: 'ev_009',
    type: 'emotion_vocabulary',
    dimension: 'self_awareness',
    facet: 'emotional_granularity',
    difficulty: 'medium',
    version: 1,
    scenario: 'Feeling pleased about someone else\'s misfortune',
    options: [
      { id: 'a', emotion: 'Satisfaction', isCorrect: false, partialCredit: 0.3 },
      { id: 'b', emotion: 'Schadenfreude', isCorrect: true, partialCredit: 1 },
      { id: 'c', emotion: 'Vindication', isCorrect: false, partialCredit: 0.5 },
      { id: 'd', emotion: 'Glee', isCorrect: false, partialCredit: 0.4 },
    ],
  },
  {
    id: 'ev_010',
    type: 'emotion_vocabulary',
    dimension: 'self_awareness',
    facet: 'emotional_granularity',
    difficulty: 'hard',
    version: 1,
    scenario: 'Feeling simultaneously drawn to and fearful of something',
    options: [
      { id: 'a', emotion: 'Conflict', isCorrect: false, partialCredit: 0.4 },
      { id: 'b', emotion: 'Ambivalence', isCorrect: true, partialCredit: 1 },
      { id: 'c', emotion: 'Confusion', isCorrect: false, partialCredit: 0.3 },
      { id: 'd', emotion: 'Hesitation', isCorrect: false, partialCredit: 0.5 },
    ],
  },
  {
    id: 'ev_011',
    type: 'emotion_vocabulary',
    dimension: 'self_awareness',
    facet: 'emotional_granularity',
    difficulty: 'easy',
    version: 1,
    scenario: 'Feeling empty and lacking interest in activities you usually enjoy',
    options: [
      { id: 'a', emotion: 'Sadness', isCorrect: false, partialCredit: 0.6 },
      { id: 'b', emotion: 'Apathy', isCorrect: true, partialCredit: 1 },
      { id: 'c', emotion: 'Boredom', isCorrect: false, partialCredit: 0.5 },
      { id: 'd', emotion: 'Tiredness', isCorrect: false, partialCredit: 0.4 },
    ],
  },
  {
    id: 'ev_012',
    type: 'emotion_vocabulary',
    dimension: 'self_awareness',
    facet: 'emotional_granularity',
    difficulty: 'medium',
    version: 1,
    scenario: 'Feeling a longing for something in the past that can\'t be recovered',
    options: [
      { id: 'a', emotion: 'Sadness', isCorrect: false, partialCredit: 0.5 },
      { id: 'b', emotion: 'Nostalgia', isCorrect: true, partialCredit: 1 },
      { id: 'c', emotion: 'Grief', isCorrect: false, partialCredit: 0.6 },
      { id: 'd', emotion: 'Melancholy', isCorrect: false, partialCredit: 0.7 },
    ],
  },
  {
    id: 'ev_013',
    type: 'emotion_vocabulary',
    dimension: 'self_awareness',
    facet: 'emotional_granularity',
    difficulty: 'hard',
    version: 1,
    scenario: 'Feeling overwhelmed by too many options or demands',
    options: [
      { id: 'a', emotion: 'Anxiety', isCorrect: false, partialCredit: 0.6 },
      { id: 'b', emotion: 'Overwhelm', isCorrect: true, partialCredit: 1 },
      { id: 'c', emotion: 'Stress', isCorrect: false, partialCredit: 0.5 },
      { id: 'd', emotion: 'Confusion', isCorrect: false, partialCredit: 0.4 },
    ],
  },
  {
    id: 'ev_014',
    type: 'emotion_vocabulary',
    dimension: 'self_awareness',
    facet: 'emotional_granularity',
    difficulty: 'medium',
    version: 1,
    scenario: 'Feeling annoyed when someone breaks an unspoken social rule',
    options: [
      { id: 'a', emotion: 'Anger', isCorrect: false, partialCredit: 0.4 },
      { id: 'b', emotion: 'Irritation', isCorrect: false, partialCredit: 0.7 },
      { id: 'c', emotion: 'Indignation', isCorrect: true, partialCredit: 1 },
      { id: 'd', emotion: 'Disgust', isCorrect: false, partialCredit: 0.5 },
    ],
  },
  {
    id: 'ev_015',
    type: 'emotion_vocabulary',
    dimension: 'self_awareness',
    facet: 'emotional_granularity',
    difficulty: 'hard',
    version: 1,
    scenario: 'Feeling a deep sense of connection and oneness with something larger than yourself',
    options: [
      { id: 'a', emotion: 'Happiness', isCorrect: false, partialCredit: 0.3 },
      { id: 'b', emotion: 'Peace', isCorrect: false, partialCredit: 0.5 },
      { id: 'c', emotion: 'Awe', isCorrect: true, partialCredit: 1 },
      { id: 'd', emotion: 'Transcendence', isCorrect: false, partialCredit: 0.8 },
    ],
  },
];

// =============================================================================
// 4. META-EQ (Self vs Other) (17 questions)
// =============================================================================

export const META_EQ_QUESTIONS: MetaEQQuestion[] = [
  {
    id: 'me_001',
    type: 'meta_eq',
    dimension: 'self_awareness',
    facet: 'self_accuracy',
    difficulty: 'medium',
    version: 1,
    selfStatement: 'I stay composed under pressure.',
    otherStatement: 'People who know me well would say I stay composed under pressure.',
    scale: 7,
    idealDelta: 0,
  },
  {
    id: 'me_002',
    type: 'meta_eq',
    dimension: 'empathy',
    facet: 'emotional_reading',
    difficulty: 'medium',
    version: 1,
    selfStatement: 'I am good at reading people\'s emotions.',
    otherStatement: 'Others would say I am good at reading their emotions.',
    scale: 7,
    idealDelta: 0,
  },
  {
    id: 'me_003',
    type: 'meta_eq',
    dimension: 'social_skills',
    facet: 'communication_clarity',
    difficulty: 'medium',
    version: 1,
    selfStatement: 'I communicate my feelings clearly.',
    otherStatement: 'People I\'m close to would say I communicate my feelings clearly.',
    scale: 7,
    idealDelta: 0,
  },
  {
    id: 'me_004',
    type: 'meta_eq',
    dimension: 'self_regulation',
    facet: 'impulse_control',
    difficulty: 'hard',
    version: 1,
    selfStatement: 'I think before I react emotionally.',
    otherStatement: 'Others would say I think before I react emotionally.',
    scale: 7,
    idealDelta: 0,
  },
  {
    id: 'me_005',
    type: 'meta_eq',
    dimension: 'empathy',
    facet: 'compassionate_concern',
    difficulty: 'medium',
    version: 1,
    selfStatement: 'I am a caring and supportive person.',
    otherStatement: 'People who know me would describe me as caring and supportive.',
    scale: 7,
    idealDelta: 0,
  },
  {
    id: 'me_006',
    type: 'meta_eq',
    dimension: 'social_skills',
    facet: 'conflict_navigation',
    difficulty: 'hard',
    version: 1,
    selfStatement: 'I handle conflict well.',
    otherStatement: 'Others would say I handle conflict well.',
    scale: 7,
    idealDelta: 0,
  },
  {
    id: 'me_007',
    type: 'meta_eq',
    dimension: 'self_awareness',
    facet: 'emotional_recognition',
    difficulty: 'medium',
    version: 1,
    selfStatement: 'I am in touch with my emotions.',
    otherStatement: 'People close to me would say I am in touch with my emotions.',
    scale: 7,
    idealDelta: 0,
  },
  {
    id: 'me_008',
    type: 'meta_eq',
    dimension: 'motivation',
    facet: 'optimism',
    difficulty: 'medium',
    version: 1,
    selfStatement: 'I maintain a positive outlook.',
    otherStatement: 'Others would describe me as having a positive outlook.',
    scale: 7,
    idealDelta: 0,
  },
  {
    id: 'me_009',
    type: 'meta_eq',
    dimension: 'self_regulation',
    facet: 'stress_management',
    difficulty: 'hard',
    version: 1,
    selfStatement: 'I manage stress effectively.',
    otherStatement: 'People who see me under stress would say I manage it effectively.',
    scale: 7,
    idealDelta: 0,
  },
  {
    id: 'me_010',
    type: 'meta_eq',
    dimension: 'social_skills',
    facet: 'influence',
    difficulty: 'medium',
    version: 1,
    selfStatement: 'I am good at motivating others.',
    otherStatement: 'Others would say I am good at motivating them.',
    scale: 7,
    idealDelta: 0,
  },
  {
    id: 'me_011',
    type: 'meta_eq',
    dimension: 'empathy',
    facet: 'perspective_taking',
    difficulty: 'medium',
    version: 1,
    selfStatement: 'I understand other people\'s perspectives.',
    otherStatement: 'People would say I really understand their perspective.',
    scale: 7,
    idealDelta: 0,
  },
  {
    id: 'me_012',
    type: 'meta_eq',
    dimension: 'motivation',
    facet: 'resilience',
    difficulty: 'medium',
    version: 1,
    selfStatement: 'I recover quickly from setbacks.',
    otherStatement: 'People who\'ve seen me face setbacks would say I recover quickly.',
    scale: 7,
    idealDelta: 0,
  },
  {
    id: 'me_013',
    type: 'meta_eq',
    dimension: 'self_regulation',
    facet: 'impulse_control',
    difficulty: 'medium',
    version: 1,
    selfStatement: 'I feel calm under pressure.',
    otherStatement: 'I appear calm under pressure.',
    scale: 7,
    idealDelta: 0,
  },
  {
    id: 'me_014',
    type: 'meta_eq',
    dimension: 'empathy',
    facet: 'compassionate_concern',
    difficulty: 'medium',
    version: 1,
    selfStatement: 'I feel moved by others\' struggles.',
    otherStatement: 'I show care when others are struggling.',
    scale: 7,
    idealDelta: 0,
  },
  {
    id: 'me_015',
    type: 'meta_eq',
    dimension: 'self_regulation',
    facet: 'stress_management',
    difficulty: 'hard',
    version: 1,
    selfStatement: 'I feel in control of my reactions when stressed.',
    otherStatement: 'I come across as controlled in my reactions when stressed.',
    scale: 7,
    idealDelta: 0,
  },
  {
    id: 'me_016',
    type: 'meta_eq',
    dimension: 'empathy',
    facet: 'emotional_reading',
    difficulty: 'medium',
    version: 1,
    selfStatement: 'I feel attuned to others\' emotional states.',
    otherStatement: 'I respond in ways that show I notice others\' emotions.',
    scale: 7,
    idealDelta: 0,
  },
  {
    id: 'me_017',
    type: 'meta_eq',
    dimension: 'motivation',
    facet: 'intrinsic_drive',
    difficulty: 'medium',
    version: 1,
    selfStatement: 'I feel motivated even when progress is slow.',
    otherStatement: 'I keep showing up and taking steps toward goals.',
    scale: 7,
    idealDelta: 0,
  },
];

// =============================================================================
// 5. PHYSIOLOGICAL PROXY QUESTIONS (11 questions)
// =============================================================================

export const PHYSIOLOGICAL_PROXY_QUESTIONS: PhysiologicalProxyQuestion[] = [
  {
    id: 'pp_001',
    type: 'physiological_proxy',
    dimension: 'self_awareness',
    facet: 'interoceptive_awareness',
    difficulty: 'easy',
    version: 1,
    prompt: 'When I\'m stressed, I usually notice it first in:',
    options: [
      { id: 'a', text: 'My breathing (shallow, fast, or held)', awarenessLevel: 'high', bodyArea: 'respiratory' },
      { id: 'b', text: 'My muscles (tense shoulders, clenched jaw)', awarenessLevel: 'high', bodyArea: 'muscular' },
      { id: 'c', text: 'My thoughts (racing, negative, scattered)', awarenessLevel: 'medium' },
      { id: 'd', text: 'I don\'t usually notice until later', awarenessLevel: 'low' },
    ],
  },
  {
    id: 'pp_002',
    type: 'physiological_proxy',
    dimension: 'self_awareness',
    facet: 'interoceptive_awareness',
    difficulty: 'medium',
    version: 1,
    prompt: 'When I\'m anxious, my body typically:',
    options: [
      { id: 'a', text: 'Gets restless - I need to move or fidget', awarenessLevel: 'high', bodyArea: 'motor' },
      { id: 'b', text: 'Feels heavy or frozen', awarenessLevel: 'high', bodyArea: 'muscular' },
      { id: 'c', text: 'I notice my heart rate changing', awarenessLevel: 'high', bodyArea: 'cardiovascular' },
      { id: 'd', text: 'I don\'t notice specific body sensations', awarenessLevel: 'low' },
    ],
  },
  {
    id: 'pp_003',
    type: 'physiological_proxy',
    dimension: 'self_awareness',
    facet: 'interoceptive_awareness',
    difficulty: 'medium',
    version: 1,
    prompt: 'When I\'m excited or happy:',
    options: [
      { id: 'a', text: 'I feel energy in my chest or stomach', awarenessLevel: 'high', bodyArea: 'core' },
      { id: 'b', text: 'I notice myself smiling or laughing more', awarenessLevel: 'medium', bodyArea: 'facial' },
      { id: 'c', text: 'I want to talk more or be around people', awarenessLevel: 'medium' },
      { id: 'd', text: 'I just know I\'m happy without specific sensations', awarenessLevel: 'low' },
    ],
  },
  {
    id: 'pp_004',
    type: 'physiological_proxy',
    dimension: 'self_awareness',
    facet: 'interoceptive_awareness',
    difficulty: 'hard',
    version: 1,
    prompt: 'I can tell the difference between hunger and emotional eating:',
    options: [
      { id: 'a', text: 'Always - they feel very different in my body', awarenessLevel: 'high' },
      { id: 'b', text: 'Usually - I can distinguish if I pay attention', awarenessLevel: 'medium' },
      { id: 'c', text: 'Sometimes - it\'s often unclear', awarenessLevel: 'low' },
      { id: 'd', text: 'Rarely - they feel the same to me', awarenessLevel: 'low' },
    ],
  },
  {
    id: 'pp_005',
    type: 'physiological_proxy',
    dimension: 'self_awareness',
    facet: 'interoceptive_awareness',
    difficulty: 'easy',
    version: 1,
    prompt: 'When I\'m angry:',
    options: [
      { id: 'a', text: 'I feel heat rising, especially in my face or chest', awarenessLevel: 'high', bodyArea: 'thermal' },
      { id: 'b', text: 'My muscles tense up, especially in my hands or jaw', awarenessLevel: 'high', bodyArea: 'muscular' },
      { id: 'c', text: 'I notice my voice or behavior changing', awarenessLevel: 'medium' },
      { id: 'd', text: 'I usually realize I was angry after the fact', awarenessLevel: 'low' },
    ],
  },
  {
    id: 'pp_006',
    type: 'physiological_proxy',
    dimension: 'self_awareness',
    facet: 'interoceptive_awareness',
    difficulty: 'medium',
    version: 1,
    prompt: 'When I\'m sad:',
    options: [
      { id: 'a', text: 'I feel a heaviness in my chest or throat', awarenessLevel: 'high', bodyArea: 'core' },
      { id: 'b', text: 'My body feels tired or drained', awarenessLevel: 'medium', bodyArea: 'general' },
      { id: 'c', text: 'I notice tears or tightness in my eyes', awarenessLevel: 'high', bodyArea: 'facial' },
      { id: 'd', text: 'I mainly notice through my thoughts, not body', awarenessLevel: 'low' },
    ],
  },
  {
    id: 'pp_007',
    type: 'physiological_proxy',
    dimension: 'self_awareness',
    facet: 'interoceptive_awareness',
    difficulty: 'hard',
    version: 1,
    prompt: 'How often do you notice subtle body sensations throughout the day?',
    options: [
      { id: 'a', text: 'Frequently - I\'m often aware of what my body is telling me', awarenessLevel: 'high' },
      { id: 'b', text: 'Sometimes - especially when sensations are strong', awarenessLevel: 'medium' },
      { id: 'c', text: 'Rarely - only when something is very wrong', awarenessLevel: 'low' },
      { id: 'd', text: 'Almost never - I\'m usually in my head', awarenessLevel: 'low' },
    ],
  },
  {
    id: 'pp_008',
    type: 'physiological_proxy',
    dimension: 'self_awareness',
    facet: 'interoceptive_awareness',
    difficulty: 'medium',
    version: 1,
    prompt: 'When feeling nervous before an important event:',
    options: [
      { id: 'a', text: 'I notice specific sensations (butterflies, sweating, trembling)', awarenessLevel: 'high' },
      { id: 'b', text: 'I feel generally unsettled but can\'t pinpoint where', awarenessLevel: 'medium' },
      { id: 'c', text: 'I mainly notice racing thoughts', awarenessLevel: 'medium' },
      { id: 'd', text: 'I don\'t notice much until afterward', awarenessLevel: 'low' },
    ],
  },
  {
    id: 'pp_009',
    type: 'physiological_proxy',
    dimension: 'self_awareness',
    facet: 'interoceptive_awareness',
    difficulty: 'hard',
    version: 1,
    prompt: 'When I\'m feeling emotionally overwhelmed:',
    options: [
      { id: 'a', text: 'I can feel it building before I reach my limit', awarenessLevel: 'high' },
      { id: 'b', text: 'I notice when I\'m approaching my limit', awarenessLevel: 'medium' },
      { id: 'c', text: 'I often realize I\'m overwhelmed only once I\'m there', awarenessLevel: 'low' },
      { id: 'd', text: 'I usually don\'t recognize it until later', awarenessLevel: 'low' },
    ],
  },
  {
    id: 'pp_010',
    type: 'physiological_proxy',
    dimension: 'self_awareness',
    facet: 'interoceptive_awareness',
    difficulty: 'easy',
    version: 1,
    prompt: 'I can feel my heartbeat without taking my pulse:',
    options: [
      { id: 'a', text: 'Yes, easily - especially when it\'s elevated', awarenessLevel: 'high', bodyArea: 'cardiovascular' },
      { id: 'b', text: 'Sometimes, if I focus on it', awarenessLevel: 'medium', bodyArea: 'cardiovascular' },
      { id: 'c', text: 'Only in extreme situations', awarenessLevel: 'low', bodyArea: 'cardiovascular' },
      { id: 'd', text: 'No, I never notice it', awarenessLevel: 'low' },
    ],
  },
  {
    id: 'pp_gate',
    type: 'physiological_proxy',
    dimension: 'self_awareness',
    facet: 'interoceptive_awareness',
    difficulty: 'medium',
    version: 1,
    prompt: 'When I notice body sensations, I can usually regulate them.',
    options: [
      { id: 'a', text: 'Usually yes - I can calm or shift them', awarenessLevel: 'high' },
      { id: 'b', text: 'Sometimes', awarenessLevel: 'medium' },
      { id: 'c', text: 'Rarely - they often overwhelm me', awarenessLevel: 'low' },
      { id: 'd', text: 'I don\'t usually notice body sensations', awarenessLevel: 'low' },
    ],
  },
];

// =============================================================================
// 6. CONSISTENCY PROBE QUESTIONS (14 questions - 7 pairs)
// =============================================================================

export const CONSISTENCY_PROBE_QUESTIONS: ConsistencyProbeQuestion[] = [
  {
    id: 'cp_001',
    type: 'consistency_probe',
    dimension: 'self_regulation',
    facet: 'impulse_control',
    difficulty: 'easy',
    version: 1,
    statement: 'I pause before reacting emotionally.',
    scale: 7,
    pairedWithId: 'cp_002',
    expectedCorrelation: 'negative',
  },
  {
    id: 'cp_002',
    type: 'consistency_probe',
    dimension: 'self_regulation',
    facet: 'impulse_control',
    difficulty: 'easy',
    version: 1,
    statement: 'I often react before thinking.',
    scale: 7,
    pairedWithId: 'cp_001',
    expectedCorrelation: 'negative',
  },
  {
    id: 'cp_003',
    type: 'consistency_probe',
    dimension: 'empathy',
    facet: 'emotional_reading',
    difficulty: 'medium',
    version: 1,
    statement: 'I easily pick up on how others are feeling.',
    scale: 7,
    pairedWithId: 'cp_004',
    expectedCorrelation: 'negative',
  },
  {
    id: 'cp_004',
    type: 'consistency_probe',
    dimension: 'empathy',
    facet: 'emotional_reading',
    difficulty: 'medium',
    version: 1,
    statement: 'I often miss emotional cues from others.',
    scale: 7,
    pairedWithId: 'cp_003',
    expectedCorrelation: 'negative',
  },
  {
    id: 'cp_005',
    type: 'consistency_probe',
    dimension: 'self_awareness',
    facet: 'emotional_recognition',
    difficulty: 'easy',
    version: 1,
    statement: 'I know exactly what I\'m feeling at any given moment.',
    scale: 7,
    pairedWithId: 'cp_006',
    expectedCorrelation: 'negative',
  },
  {
    id: 'cp_006',
    type: 'consistency_probe',
    dimension: 'self_awareness',
    facet: 'emotional_recognition',
    difficulty: 'easy',
    version: 1,
    statement: 'My emotions often confuse me.',
    scale: 7,
    pairedWithId: 'cp_005',
    expectedCorrelation: 'negative',
  },
  {
    id: 'cp_007',
    type: 'consistency_probe',
    dimension: 'motivation',
    facet: 'resilience',
    difficulty: 'medium',
    version: 1,
    statement: 'I recover quickly from disappointments.',
    scale: 7,
    pairedWithId: 'cp_008',
    expectedCorrelation: 'negative',
  },
  {
    id: 'cp_008',
    type: 'consistency_probe',
    dimension: 'motivation',
    facet: 'resilience',
    difficulty: 'medium',
    version: 1,
    statement: 'Setbacks tend to affect me for a long time.',
    scale: 7,
    pairedWithId: 'cp_007',
    expectedCorrelation: 'negative',
  },
  {
    id: 'cp_009',
    type: 'consistency_probe',
    dimension: 'social_skills',
    facet: 'communication_clarity',
    difficulty: 'medium',
    version: 1,
    statement: 'I express my emotions clearly to others.',
    scale: 7,
    pairedWithId: 'cp_010',
    expectedCorrelation: 'negative',
  },
  {
    id: 'cp_010',
    type: 'consistency_probe',
    dimension: 'social_skills',
    facet: 'communication_clarity',
    difficulty: 'medium',
    version: 1,
    statement: 'People often misunderstand my emotional expressions.',
    scale: 7,
    pairedWithId: 'cp_009',
    expectedCorrelation: 'negative',
  },
  {
    id: 'cp_011',
    type: 'consistency_probe',
    dimension: 'self_regulation',
    facet: 'stress_management',
    difficulty: 'hard',
    version: 1,
    statement: 'I handle pressure well.',
    scale: 7,
    pairedWithId: 'cp_012',
    expectedCorrelation: 'negative',
  },
  {
    id: 'cp_012',
    type: 'consistency_probe',
    dimension: 'self_regulation',
    facet: 'stress_management',
    difficulty: 'hard',
    version: 1,
    statement: 'I tend to fall apart under pressure.',
    scale: 7,
    pairedWithId: 'cp_011',
    expectedCorrelation: 'negative',
  },
  {
    id: 'cp_013',
    type: 'consistency_probe',
    dimension: 'self_regulation',
    facet: 'stress_management',
    difficulty: 'medium',
    version: 1,
    statement: 'I am emotionally steady under stress.',
    scale: 7,
    pairedWithId: 'cp_014',
    expectedCorrelation: 'positive',
  },
  {
    id: 'cp_014',
    type: 'consistency_probe',
    dimension: 'self_regulation',
    facet: 'stress_management',
    difficulty: 'medium',
    version: 1,
    statement: 'Stress rarely disrupts my emotional balance.',
    scale: 7,
    pairedWithId: 'cp_013',
    expectedCorrelation: 'positive',
  },
];

// =============================================================================
// 7. RANKING & ALLOCATION QUESTIONS (6 questions)
// =============================================================================

export const RANKING_ALLOCATION_QUESTIONS: RankingAllocationQuestion[] = [
  {
    id: 'ra_001',
    type: 'ranking_allocation',
    dimension: 'self_awareness',
    difficulty: 'medium',
    version: 1,
    prompt: 'Distribute 100 points based on how well each describes you:',
    totalPoints: 100,
    minPerOption: 0,
    maxPerOption: 100,
    options: [
      { id: 'a', text: 'I understand my own emotions deeply', dimension: 'self_awareness' },
      { id: 'b', text: 'I control my emotional reactions well', dimension: 'self_regulation' },
      { id: 'c', text: 'I understand others\' emotions easily', dimension: 'empathy' },
      { id: 'd', text: 'I handle social situations smoothly', dimension: 'social_skills' },
    ],
  },
  {
    id: 'ra_002',
    type: 'ranking_allocation',
    dimension: 'self_regulation',
    difficulty: 'medium',
    version: 1,
    prompt: 'When facing challenges, allocate 100 points to your strengths:',
    totalPoints: 100,
    minPerOption: 0,
    maxPerOption: 100,
    options: [
      { id: 'a', text: 'Staying calm under pressure', dimension: 'self_regulation' },
      { id: 'b', text: 'Understanding what I\'m feeling', dimension: 'self_awareness' },
      { id: 'c', text: 'Continuing toward long-term goals even when progress is slow', dimension: 'motivation' },
      { id: 'd', text: 'Getting support from others', dimension: 'social_skills' },
    ],
  },
  {
    id: 'ra_003',
    type: 'ranking_allocation',
    dimension: 'empathy',
    difficulty: 'hard',
    version: 1,
    prompt: 'In relationships, allocate 100 points to what you\'re best at:',
    totalPoints: 100,
    minPerOption: 0,
    maxPerOption: 100,
    options: [
      { id: 'a', text: 'Sensing how others feel', dimension: 'empathy' },
      { id: 'b', text: 'Expressing my own feelings clearly', dimension: 'social_skills' },
      { id: 'c', text: 'Staying emotionally steady', dimension: 'self_regulation' },
      { id: 'd', text: 'Understanding my own needs', dimension: 'self_awareness' },
      { id: 'e', text: 'Staying committed despite difficulties', dimension: 'motivation' },
    ],
  },
  {
    id: 'ra_004',
    type: 'ranking_allocation',
    dimension: 'social_skills',
    difficulty: 'medium',
    version: 1,
    prompt: 'At work/school, allocate 100 points to your emotional strengths:',
    totalPoints: 100,
    minPerOption: 0,
    maxPerOption: 100,
    options: [
      { id: 'a', text: 'Working well with others', dimension: 'social_skills' },
      { id: 'b', text: 'Managing my stress effectively', dimension: 'self_regulation' },
      { id: 'c', text: 'Staying motivated and focused', dimension: 'motivation' },
      { id: 'd', text: 'Understanding team dynamics', dimension: 'empathy' },
    ],
  },
  {
    id: 'ra_005',
    type: 'ranking_allocation',
    dimension: 'motivation',
    difficulty: 'hard',
    version: 1,
    prompt: 'When things go wrong, allocate 100 points to how you cope:',
    totalPoints: 100,
    minPerOption: 0,
    maxPerOption: 100,
    options: [
      { id: 'a', text: 'Staying optimistic about the future', dimension: 'motivation' },
      { id: 'b', text: 'Processing my emotions fully', dimension: 'self_awareness' },
      { id: 'c', text: 'Controlling my reactions', dimension: 'self_regulation' },
      { id: 'd', text: 'Seeking support from others', dimension: 'social_skills' },
      { id: 'e', text: 'Understanding others\' perspectives', dimension: 'empathy' },
    ],
  },
  {
    id: 'ra_006',
    type: 'ranking_allocation',
    dimension: 'self_awareness',
    difficulty: 'medium',
    version: 1,
    prompt: 'What would you most want to improve? Allocate 100 points:',
    totalPoints: 100,
    minPerOption: 0,
    maxPerOption: 100,
    options: [
      { id: 'a', text: 'Understanding my emotions better', dimension: 'self_awareness' },
      { id: 'b', text: 'Managing my reactions better', dimension: 'self_regulation' },
      { id: 'c', text: 'Being more attuned to others', dimension: 'empathy' },
      { id: 'd', text: 'Communicating emotions more effectively', dimension: 'social_skills' },
      { id: 'e', text: 'Being more resilient', dimension: 'motivation' },
    ],
  },
];

// =============================================================================
// COMBINED QUESTION BANK
// =============================================================================

export const ALL_QUESTIONS: EQQuestion[] = [
  ...FORCED_CHOICE_QUESTIONS,
  ...LIKERT_QUESTIONS,
  ...EMOTION_VOCABULARY_QUESTIONS,
  ...META_EQ_QUESTIONS,
  ...PHYSIOLOGICAL_PROXY_QUESTIONS,
  ...CONSISTENCY_PROBE_QUESTIONS,
  ...RANKING_ALLOCATION_QUESTIONS,
];

// =============================================================================
// QUESTION SELECTION UTILITIES
// =============================================================================

/**
 * Shuffle array using Fisher-Yates
 */
export function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Select questions for a quick assessment (shorter version for free test)
 * Returns approximately 25-30 questions for a 5-7 minute test
 */
export function selectQuickTestQuestions(): EQQuestion[] {
  const questions: EQQuestion[] = [];
  
  // 4 forced choice (mix of 2-option and 4-option)
  const fc2Options = shuffleArray(FORCED_CHOICE_QUESTIONS.filter(q => q.options.length === 2));
  const fc4Options = shuffleArray(FORCED_CHOICE_QUESTIONS.filter(q => q.options.length === 4));
  questions.push(...fc2Options.slice(0, 2));
  questions.push(...fc4Options.slice(0, 2));
  
  // 6 likert (balanced across dimensions)
  const likertByDim = new Map<string, LikertQuestion[]>();
  LIKERT_QUESTIONS.forEach(q => {
    const list = likertByDim.get(q.dimension) || [];
    list.push(q);
    likertByDim.set(q.dimension, list);
  });
  likertByDim.forEach(list => {
    const shuffled = shuffleArray(list);
    questions.push(shuffled[0]);
  });
  questions.push(shuffleArray(LIKERT_QUESTIONS)[0]);
  
  // 4 emotion vocabulary (easy to medium)
  const evEasyMedium = shuffleArray(
    EMOTION_VOCABULARY_QUESTIONS.filter(q => q.difficulty !== 'hard')
  );
  questions.push(...evEasyMedium.slice(0, 4));
  
  // 4 Meta-EQ questions (self vs others perception)
  questions.push(...shuffleArray(META_EQ_QUESTIONS).slice(0, 4));
  
  // 3 physiological proxy
  questions.push(...shuffleArray(PHYSIOLOGICAL_PROXY_QUESTIONS.filter(q => q.id !== 'pp_gate')).slice(0, 3));
  
  // 4 consistency probes (2 pairs)
  const pairs = [
    [CONSISTENCY_PROBE_QUESTIONS[0], CONSISTENCY_PROBE_QUESTIONS[1]],
    [CONSISTENCY_PROBE_QUESTIONS[2], CONSISTENCY_PROBE_QUESTIONS[3]],
    [CONSISTENCY_PROBE_QUESTIONS[4], CONSISTENCY_PROBE_QUESTIONS[5]],
  ];
  const selectedPairs = shuffleArray(pairs).slice(0, 2);
  selectedPairs.forEach(pair => questions.push(...pair));
  
  // 2 ranking allocation
  questions.push(...shuffleArray(RANKING_ALLOCATION_QUESTIONS).slice(0, 2));
  
  return shuffleArray(questions);
}

/**
 * Select questions for full test
 */
export function selectFullTestQuestions(): EQQuestion[] {
  const questions: EQQuestion[] = [];
  
  // 10 forced choice (balanced across dimensions)
  const fcByDimension = new Map<string, ForcedChoiceQuestion[]>();
  FORCED_CHOICE_QUESTIONS.forEach(q => {
    const list = fcByDimension.get(q.dimension) || [];
    list.push(q);
    fcByDimension.set(q.dimension, list);
  });
  fcByDimension.forEach(list => {
    questions.push(...shuffleArray(list).slice(0, 2));
  });
  
  // 15 likert (balanced across dimensions and reverse keying)
  questions.push(...shuffleArray(LIKERT_QUESTIONS).slice(0, 15));
  
  // 10 emotion vocabulary
  questions.push(...shuffleArray(EMOTION_VOCABULARY_QUESTIONS).slice(0, 10));
  
  // 8 meta-eq
  questions.push(...shuffleArray(META_EQ_QUESTIONS).slice(0, 8));
  
  // 6 physiological
  questions.push(...shuffleArray(PHYSIOLOGICAL_PROXY_QUESTIONS).slice(0, 6));
  
  // 8 consistency probes (4 pairs)
  const allPairs = [
    [CONSISTENCY_PROBE_QUESTIONS[0], CONSISTENCY_PROBE_QUESTIONS[1]],
    [CONSISTENCY_PROBE_QUESTIONS[2], CONSISTENCY_PROBE_QUESTIONS[3]],
    [CONSISTENCY_PROBE_QUESTIONS[4], CONSISTENCY_PROBE_QUESTIONS[5]],
    [CONSISTENCY_PROBE_QUESTIONS[6], CONSISTENCY_PROBE_QUESTIONS[7]],
    [CONSISTENCY_PROBE_QUESTIONS[8], CONSISTENCY_PROBE_QUESTIONS[9]],
    [CONSISTENCY_PROBE_QUESTIONS[10], CONSISTENCY_PROBE_QUESTIONS[11]],
    [CONSISTENCY_PROBE_QUESTIONS[12], CONSISTENCY_PROBE_QUESTIONS[13]],
  ];
  const selectedPairs = shuffleArray(allPairs).slice(0, 4);
  selectedPairs.forEach(pair => questions.push(...pair));
  
  // 4 ranking allocation
  questions.push(...shuffleArray(RANKING_ALLOCATION_QUESTIONS).slice(0, 4));
  
  return shuffleArray(questions);
}

// Question counts summary
export const QUESTION_COUNTS = {
  forced_choice: FORCED_CHOICE_QUESTIONS.length,
  likert: LIKERT_QUESTIONS.length,
  emotion_vocabulary: EMOTION_VOCABULARY_QUESTIONS.length,
  meta_eq: META_EQ_QUESTIONS.length,
  physiological_proxy: PHYSIOLOGICAL_PROXY_QUESTIONS.length,
  consistency_probe: CONSISTENCY_PROBE_QUESTIONS.length,
  ranking_allocation: RANKING_ALLOCATION_QUESTIONS.length,
  total: ALL_QUESTIONS.length,
};
