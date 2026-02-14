import React, { useState, useRef } from 'react';
import type { EmotionVocabularyQuestion as EVQuestion, EmotionVocabularyResponse } from '@/types/eq-assessment';
import { Button } from '@/components/ui/button';

interface Props {
  question: EVQuestion;
  onAnswer: (response: EmotionVocabularyResponse) => void;
}

const EmotionVocabularyQuestion: React.FC<Props> = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const startTime = useRef(Date.now());

  const handleSubmit = () => {
    if (!selectedOption) return;
    
    const response: EmotionVocabularyResponse = {
      questionId: question.id,
      type: 'emotion_vocabulary',
      selectedOptionId: selectedOption,
      responseTimeMs: Date.now() - startTime.current,
    };
    onAnswer(response);
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="text-center mb-4">
        <p className="text-xs text-gray-500 mb-1">Which emotion best describes:</p>
        <h2 className="text-lg font-bold text-gray-900">
          "{question.scenario}"
        </h2>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-2 gap-2">
          {question.options.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedOption(option.id)}
              className={`p-3 rounded-lg border-2 transition-all text-center ${
                selectedOption === option.id
                  ? 'border-gray-900 bg-gray-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <span className={`font-medium text-sm ${
                selectedOption === option.id ? 'text-gray-900' : 'text-gray-700'
              }`}>
                {option.emotion}
              </span>
            </button>
          ))}
        </div>
      </div>

      <Button
        onClick={handleSubmit}
        disabled={!selectedOption}
        className="w-full bg-gray-900 hover:bg-gray-800 mt-4 flex-shrink-0"
      >
        Continue
      </Button>
    </div>
  );
};

export default EmotionVocabularyQuestion;
