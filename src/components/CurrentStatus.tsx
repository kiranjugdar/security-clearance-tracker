// src/components/CurrentStatus.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const CurrentStatus: React.FC = () => {
  const { history, currentStage } = useSelector((s: RootState) => s.clearance);
  // find the most recent history item matching currentStage
  const currentRecord = [...history].reverse().find(h => h.name === currentStage);

  return (
    <section className="bg-white rounded-lg shadow p-6 mb-6 max-w-2xl">
      <h2 className="text-lg font-semibold text-gray-900 mb-2">
        Current Status: {currentStage}
      </h2>
      {currentRecord && (
        <>
          <p className="text-gray-600">{currentRecord.description}</p>
          <p className="mt-1 text-sm text-gray-500">
            {new Date(currentRecord.date).toLocaleDateString()}
          </p>
        </>
      )}
    </section>
  );
};
