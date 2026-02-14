import React, { useState, useRef } from 'react';
import type { MetaEQQuestion as MetaQ, MetaEQResponse } from '@/types/eq-assessment';
import { Button } from '@/components/ui/button';

interface Props {
  question: MetaQ;
  onAnswer: (response: MetaEQResponse) => void;
}

const MetaEQQuestion: React.FC<Props> = ({ question, onAnswer }) => {
  const [selfRating, setSelfRating] = useState<number | null>(null);
  const [otherRating, setOtherRating] = useState<number | null>(null);
  const startTime = useRef(Date.now());

  const handleSubmit = () => {
    if (selfRating === null || otherRating === null) return;
    
    const response: MetaEQResponse = {
      questionId: question.id,
      type: 'meta_eq',
      selfRating,
      predictedOtherRating: otherRating,
      responseTimeMs: Date.now() - startTime.current,
    };
    onAnswer(response);
  };

  const scalePoints = Array.from({ length: question.scale }, (_, i) => i + 1);
  const canSubmit = selfRating !== null && otherRating !== null;

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 flex flex-col justify-center space-y-6">
        {/* Self Rating */}
        <div>
          <p className="text-sm font-medium text-gray-900 mb-2">
            How I see myself:
          </p>
          <p className="text-sm text-gray-600 mb-3">{question.selfStatement}</p>
          
          <div className="flex justify-between text-[10px] text-gray-400 mb-1">
            <span>Disagree</span>
            <span>Agree</span>
          </div>
          <div className="flex justify-between gap-1">
            {scalePoints.map((value) => (
              <button
                key={`self-${value}`}
                onClick={() => setSelfRating(value)}
                className={`flex-1 py-2 rounded border-2 text-xs font-medium transition-all ${
                  selfRating === value
                    ? 'border-gray-900 bg-gray-900 text-white'
                    : 'border-gray-200 hover:border-gray-300 text-gray-600'
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        <hr className="border-gray-100" />

        {/* Other Rating */}
        <div>
          <p className="text-sm font-medium text-gray-900 mb-2">
            How others would rate me:
          </p>
          <p className="text-sm text-gray-600 mb-3">{question.otherStatement}</p>
          
          <div className="flex justify-between text-[10px] text-gray-400 mb-1">
            <span>Disagree</span>
            <span>Agree</span>
          </div>
          <div className="flex justify-between gap-1">
            {scalePoints.map((value) => (
              <button
                key={`other-${value}`}
                onClick={() => setOtherRating(value)}
                className={`flex-1 py-2 rounded border-2 text-xs font-medium transition-all ${
                  otherRating === value
                    ? 'border-gray-900 bg-gray-900 text-white'
                    : 'border-gray-200 hover:border-gray-300 text-gray-600'
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </div>

      <Button
        onClick={handleSubmit}
        disabled={!canSubmit}
        className="w-full bg-gray-900 hover:bg-gray-800 mt-4 flex-shrink-0"
      >
        Continue
      </Button>
    </div>
  );
};

export default MetaEQQuestion;
