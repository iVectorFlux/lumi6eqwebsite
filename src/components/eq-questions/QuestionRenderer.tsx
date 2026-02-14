import React from 'react';
import type { EQQuestion, EQResponse } from '@/types/eq-assessment';
import { ChevronLeft } from 'lucide-react';
import ForcedChoiceQuestion from './ForcedChoiceQuestion';
import LikertQuestion from './LikertQuestion';
import EmotionVocabularyQuestion from './EmotionVocabularyQuestion';
import MetaEQQuestion from './MetaEQQuestion';
import PhysiologicalProxyQuestion from './PhysiologicalProxyQuestion';
import ConsistencyProbeQuestion from './ConsistencyProbeQuestion';
import RankingAllocationQuestion from './RankingAllocationQuestion';

interface QuestionRendererProps {
  question: EQQuestion;
  onAnswer: (response: EQResponse) => void;
  onBack?: () => void;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionRenderer: React.FC<QuestionRendererProps> = ({
  question,
  onAnswer,
  onBack,
  questionNumber,
  totalQuestions,
}) => {
  const renderQuestion = () => {
    switch (question.type) {
      case 'forced_choice':
        return <ForcedChoiceQuestion question={question} onAnswer={onAnswer} />;
      case 'likert':
        return <LikertQuestion question={question} onAnswer={onAnswer} />;
      case 'emotion_vocabulary':
        return <EmotionVocabularyQuestion question={question} onAnswer={onAnswer} />;
      case 'meta_eq':
        return <MetaEQQuestion question={question} onAnswer={onAnswer} />;
      case 'physiological_proxy':
        return <PhysiologicalProxyQuestion question={question} onAnswer={onAnswer} />;
      case 'consistency_probe':
        return <ConsistencyProbeQuestion question={question} onAnswer={onAnswer} />;
      case 'ranking_allocation':
        return <RankingAllocationQuestion question={question} onAnswer={onAnswer} />;
      default:
        return null;
    }
  };

  const progressPercent = (questionNumber / totalQuestions) * 100;

  return (
    <div className="flex flex-col w-full gap-4">
      {/* Progress + Back */}
      <div className="flex-shrink-0">
        <div className="flex items-center gap-2 mb-2">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-1 px-2 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
          )}
          <span className="text-xs text-gray-500 ml-auto">
            {questionNumber} of {totalQuestions}
          </span>
        </div>
        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gray-900 transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question card - compact, no extra stretch */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-5 shadow-sm">
        {renderQuestion()}
      </div>
    </div>
  );
};

export default QuestionRenderer;
