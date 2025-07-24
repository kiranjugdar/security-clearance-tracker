import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

export const StatusHistory: React.FC = () => {
  const { history } = useSelector((state: RootState) => state.clearance);

  return (
    <section className="p-4 bg-white shadow rounded mt-4">
      <h2 className="text-xl font-semibold mb-2">Status History</h2>
      <ul className="space-y-2">
        {history.map(item => (
          <li key={item.date} className="border-b pb-2">
            <p className="font-medium">{item.name}</p>
            <p className="text-gray-500 text-sm">{new Date(item.date).toLocaleDateString()} — {item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};