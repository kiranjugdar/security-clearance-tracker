// src/components/StatusHistory.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const StatusHistory: React.FC = () => {
  const { history } = useSelector((s: RootState) => s.clearance);

  return (
    <section className="bg-white rounded-lg shadow p-6 mb-6">
      <h3 className="text-md font-semibold text-gray-900 mb-4">Status History</h3>
      <ul className="space-y-4">
        {history.map((item) => (
          <li key={item.date} className="flex items-start">
            {/* bullet icon */}
            <div className="mt-1 flex-shrink-0">
              <span className="block w-3 h-3 bg-blue-500 rounded-full" />
            </div>
            <div className="ml-4">
              <p className="text-gray-800 font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <p className="text-gray-500 text-xs mt-1">
                {new Date(item.date).toLocaleDateString()}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
