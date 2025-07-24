import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

export const CurrentStatus: React.FC = () => {
  const { currentStage, history } = useSelector((state: RootState) => state.clearance);
  const latest = history[0] || null;

  return (
    <section className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-semibold">Current Status: {currentStage}</h2>
      {latest && (
        <p className="mt-2 text-gray-600">
          {latest.description} on {new Date(latest.date).toLocaleDateString()}
        </p>
      )}
    </section>
  );
};