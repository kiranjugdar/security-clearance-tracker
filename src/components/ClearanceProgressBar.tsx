// src/components/ClearanceProgressBar.tsx

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const ClearanceProgressBar: React.FC = () => {
  // grab the correct fields from your Redux slice
  const { progressStages, currentStage } = useSelector((s: RootState) => s.clearance);
  const currentIndex = progressStages.indexOf(currentStage);

  return (
    <div className="relative py-6">
      {/* horizontal line behind the dots */}
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-200" />
      </div>

      {/* the circles */}
      <div className="relative flex justify-between max-w-4xl mx-auto px-6">
        {progressStages.map((stage, idx) => {
          const isDone = idx < currentIndex;
          const isCurrent = idx === currentIndex;

          const bgColor = isDone
            ? 'bg-green-500'
            : isCurrent
            ? 'bg-blue-500'
            : 'bg-gray-200';

          const textColor = isDone || isCurrent
            ? 'text-white'
            : 'text-gray-500';

          return (
            <div
              key={stage}
              className="flex flex-col items-center w-1/6 text-center"
            >
              <div
                className={`${bgColor} ${textColor} flex items-center justify-center w-8 h-8 rounded-full`}
              >
                <span className="text-sm font-medium">{idx + 1}</span>
              </div>
              <span className="mt-2 text-xs font-medium text-gray-700">
                {stage}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
