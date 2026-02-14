import React, { useState, useRef } from 'react';
import type { RankingAllocationQuestion as RAQuestion, RankingAllocationResponse } from '@/types/eq-assessment';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';

interface Props {
  question: RAQuestion;
  onAnswer: (response: RankingAllocationResponse) => void;
}

const RankingAllocationQuestion: React.FC<Props> = ({ question, onAnswer }) => {
  const [allocations, setAllocations] = useState<Record<string, number>>(
    Object.fromEntries(question.options.map(opt => [opt.id, 0]))
  );
  const startTime = useRef(Date.now());

  const totalAllocated = Object.values(allocations).reduce((sum, v) => sum + v, 0);
  const remaining = question.totalPoints - totalAllocated;
  const canSubmit = remaining === 0;

  const handleChange = (optionId: string, delta: number) => {
    const currentValue = allocations[optionId];
    const newValue = Math.max(
      question.minPerOption, 
      Math.min(question.maxPerOption, currentValue + delta)
    );
    
    const potentialTotal = totalAllocated - currentValue + newValue;
    if (potentialTotal <= question.totalPoints) {
      setAllocations(prev => ({ ...prev, [optionId]: newValue }));
    }
  };

  const handleSubmit = () => {
    if (!canSubmit) return;
    
    const response: RankingAllocationResponse = {
      questionId: question.id,
      type: 'ranking_allocation',
      allocations: question.options.map(opt => ({
        optionId: opt.id,
        points: allocations[opt.id],
      })),
      responseTimeMs: Date.now() - startTime.current,
    };
    onAnswer(response);
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="text-center mb-3">
        <h2 className="text-lg font-bold text-gray-900">
          {question.prompt}
        </h2>
        <p className={`text-sm mt-1 ${remaining === 0 ? 'text-gray-900' : 'text-gray-500'}`}>
          {remaining === 0 ? 'All points allocated' : `${remaining} points left`}
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-2">
        {question.options.map((option) => {
          const value = allocations[option.id];
          
          return (
            <div key={option.id} className="flex items-center gap-2 p-2 border border-gray-200 rounded-lg">
              <span className="flex-1 text-sm text-gray-700">{option.text}</span>
              
              <div className="flex items-center gap-1">
                <button
                  onClick={() => handleChange(option.id, -10)}
                  disabled={value <= question.minPerOption}
                  className="w-7 h-7 rounded border border-gray-300 flex items-center justify-center disabled:opacity-30 hover:bg-gray-50"
                >
                  <Minus className="w-3 h-3" />
                </button>
                
                <span className="w-8 text-center font-medium text-sm">
                  {value}
                </span>
                
                <button
                  onClick={() => handleChange(option.id, 10)}
                  disabled={value >= question.maxPerOption || remaining <= 0}
                  className="w-7 h-7 rounded border border-gray-300 flex items-center justify-center disabled:opacity-30 hover:bg-gray-50"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>
          );
        })}
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

export default RankingAllocationQuestion;
