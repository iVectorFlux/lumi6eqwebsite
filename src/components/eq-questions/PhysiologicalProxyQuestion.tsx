import React, { useState, useRef } from 'react';
import type { PhysiologicalProxyQuestion as PPQuestion, PhysiologicalProxyResponse } from '@/types/eq-assessment';
import { Button } from '@/components/ui/button';

interface Props {
  question: PPQuestion;
  onAnswer: (response: PhysiologicalProxyResponse) => void;
}

const PhysiologicalProxyQuestion: React.FC<Props> = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const startTime = useRef(Date.now());

  const handleSubmit = () => {
    if (!selectedOption) return;
    
    const response: PhysiologicalProxyResponse = {
      questionId: question.id,
      type: 'physiological_proxy',
      selectedOptionId: selectedOption,
      responseTimeMs: Date.now() - startTime.current,
    };
    onAnswer(response);
  };

  return (
    <div className="flex-1 flex flex-col">
      <h2 className="text-lg font-bold text-gray-900 text-center mb-4">
        {question.prompt}
      </h2>

      <div className="flex-1 flex flex-col justify-center gap-2">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelectedOption(option.id)}
            className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
              selectedOption === option.id
                ? 'border-gray-900 bg-gray-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                selectedOption === option.id 
                  ? 'border-gray-900 bg-gray-900' 
                  : 'border-gray-300'
              }`} />
              <span className="text-gray-700 text-sm">{option.text}</span>
            </div>
          </button>
        ))}
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

export default PhysiologicalProxyQuestion;
