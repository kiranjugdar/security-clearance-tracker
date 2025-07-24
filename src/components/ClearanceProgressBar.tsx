import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

export const ClearanceProgressBar: React.FC = () => {
  const { progressStages, currentStage } = useSelector((state: RootState) => state.clearance);
  const currentIndex = progressStages.indexOf(currentStage);

  return (
    <div className="flex items-center space-x-4 p-4">
      {progressStages.map((stage, idx) => {
        const completed = idx <= currentIndex;
        return (
          <div key={stage} className="flex-1 text-center">
            <div className={`w-8 h-8 mx-auto rounded-full text-white flex items-center justify-center ${completed ? 'bg-green-600' : 'bg-gray-300'}`}>{idx + 1}</div>
            <div className={`mt-2 text-sm ${completed ? 'text-gray-800' : 'text-gray-500'}`}>{stage}</div>
          </div>
        );
      })}
    </div>
  );
};