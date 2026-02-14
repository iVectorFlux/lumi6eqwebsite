import React, { useState, useRef } from 'react';
import type { LikertQuestion as LikertQ, LikertResponse } from '@/types/eq-assessment';
import { Button } from '@/components/ui/button';

interface Props {
  question: LikertQ;
  onAnswer: (response: LikertResponse) => void;
}

const LikertQuestion: React.FC<Props> = ({ question, onAnswer }) => {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const startTime = useRef(Date.now());

  const handleSubmit = () => {
    if (selectedValue === null) return;
    
    const response: LikertResponse = {
      questionId: question.id,
      type: 'likert',
      value: selectedValue,
      responseTimeMs: Date.now() - startTime.current,
    };
    onAnswer(response);
  };

  const scalePoints = Array.from({ length: question.scale }, (_, i) => i + 1);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-bold text-gray-900 mb-3">
        {question.statement}
      </h2>

      <div>
        <div className="flex justify-between text-xs text-gray-500 mb-2">
          <span>{question.anchorLabels.low}</span>
          <span>{question.anchorLabels.high}</span>
        </div>
        <div className="flex justify-between gap-1.5">
          {scalePoints.map((value) => (
            <button
              key={value}
              onClick={() => setSelectedValue(value)}
              className={`flex-1 py-3 rounded border-2 font-medium text-sm transition-all ${
                selectedValue === value
                  ? 'border-gray-900 bg-gray-900 text-white'
                  : 'border-gray-200 hover:border-gray-300 text-gray-700'
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      <Button
        onClick={handleSubmit}
        disabled={selectedValue === null}
        className="w-full bg-gray-900 hover:bg-gray-800 mt-2"
      >
        Continue
      </Button>
    </div>
  );
};

export default LikertQuestion;
