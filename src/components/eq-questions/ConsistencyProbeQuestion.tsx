import React, { useState, useRef } from 'react';
import type { ConsistencyProbeQuestion as CPQuestion, ConsistencyProbeResponse } from '@/types/eq-assessment';
import { Button } from '@/components/ui/button';

interface Props {
  question: CPQuestion;
  onAnswer: (response: ConsistencyProbeResponse) => void;
}

const ConsistencyProbeQuestion: React.FC<Props> = ({ question, onAnswer }) => {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const startTime = useRef(Date.now());

  const handleSubmit = () => {
    if (selectedValue === null) return;
    
    const response: ConsistencyProbeResponse = {
      questionId: question.id,
      type: 'consistency_probe',
      value: selectedValue,
      responseTimeMs: Date.now() - startTime.current,
    };
    onAnswer(response);
  };

  const scalePoints = Array.from({ length: question.scale }, (_, i) => i + 1);

  return (
    <div className="flex-1 flex flex-col">
      <h2 className="text-lg font-bold text-gray-900 text-center mb-6">
        {question.statement}
      </h2>

      <div className="flex-1 flex flex-col justify-center">
        {/* Scale labels */}
        <div className="flex justify-between text-xs text-gray-500 mb-3">
          <span>Strongly Disagree</span>
          <span>Strongly Agree</span>
        </div>

        {/* Scale buttons */}
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
        className="w-full bg-gray-900 hover:bg-gray-800 mt-4 flex-shrink-0"
      >
        Continue
      </Button>
    </div>
  );
};

export default ConsistencyProbeQuestion;
