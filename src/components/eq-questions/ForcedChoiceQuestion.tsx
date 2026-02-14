import React, { useState, useRef } from 'react';
import type { ForcedChoiceQuestion as FCQuestion, ForcedChoiceResponse } from '@/types/eq-assessment';
import { Button } from '@/components/ui/button';

interface Props {
  question: FCQuestion;
  onAnswer: (response: ForcedChoiceResponse) => void;
}

const ForcedChoiceQuestion: React.FC<Props> = ({ question, onAnswer }) => {
  const [selectedMost, setSelectedMost] = useState<string | null>(null);
  const [selectedLeast, setSelectedLeast] = useState<string | null>(null);
  const startTime = useRef(Date.now());

  const handleSubmit = () => {
    if (!selectedMost) return;
    
    const response: ForcedChoiceResponse = {
      questionId: question.id,
      type: 'forced_choice',
      mostLikeMe: selectedMost,
      leastLikeMe: question.selectLeast ? selectedLeast || undefined : undefined,
      responseTimeMs: Date.now() - startTime.current,
    };
    onAnswer(response);
  };

  const is4Option = question.options.length === 4 && question.selectLeast;
  const canSubmit = selectedMost && (!question.selectLeast || selectedLeast);

  // Simple 2-option choice
  if (!is4Option) {
    return (
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-bold text-gray-900 mb-3">
          {question.prompt}
        </h2>

        <div className="flex flex-col gap-2">
          {question.options.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedMost(option.id)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                selectedMost === option.id
                  ? 'border-gray-900 bg-gray-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                  selectedMost === option.id 
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
          disabled={!canSubmit}
          className="w-full bg-gray-900 hover:bg-gray-800 mt-2"
        >
          Continue
        </Button>
      </div>
    );
  }

  // 4-option with Most and Least selection
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-bold text-gray-900 mb-3">
        {question.prompt}
      </h2>

      <div>
        {/* Options table */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-[1fr_60px_60px] bg-gray-50 border-b border-gray-200 text-xs font-medium text-gray-500">
            <div className="p-2"></div>
            <div className="p-2 text-center">Most</div>
            <div className="p-2 text-center">Least</div>
          </div>
          
          {/* Options */}
          {question.options.map((option, idx) => (
            <div 
              key={option.id} 
              className={`grid grid-cols-[1fr_60px_60px] items-center ${
                idx !== question.options.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className="p-3 text-sm text-gray-700">{option.text}</div>
              <div className="p-2 flex justify-center">
                <button
                  onClick={() => {
                    setSelectedMost(option.id);
                    if (selectedLeast === option.id) setSelectedLeast(null);
                  }}
                  disabled={selectedLeast === option.id}
                  className={`w-6 h-6 rounded-full border-2 transition-all ${
                    selectedMost === option.id
                      ? 'border-gray-900 bg-gray-900'
                      : selectedLeast === option.id
                      ? 'border-gray-200 opacity-30'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                />
              </div>
              <div className="p-2 flex justify-center">
                <button
                  onClick={() => {
                    setSelectedLeast(option.id);
                    if (selectedMost === option.id) setSelectedMost(null);
                  }}
                  disabled={selectedMost === option.id}
                  className={`w-6 h-6 rounded-full border-2 transition-all ${
                    selectedLeast === option.id
                      ? 'border-gray-900 bg-gray-900'
                      : selectedMost === option.id
                      ? 'border-gray-200 opacity-30'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-xs text-gray-400 text-center mt-2">
          Select one for "Most like me" and one for "Least like me"
        </p>
      </div>

      <Button
        onClick={handleSubmit}
        disabled={!canSubmit}
        className="w-full bg-gray-900 hover:bg-gray-800 mt-2"
      >
        Continue
      </Button>
    </div>
  );
};

export default ForcedChoiceQuestion;
