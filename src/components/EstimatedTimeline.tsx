// src/components/EstimatedTimeline.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const EstimatedTimeline: React.FC = () => {
  const { timeline } = useSelector((s: RootState) => s.clearance);

  return (
    <section className="bg-white rounded-lg shadow p-6 mb-6 overflow-x-auto">
      <h3 className="text-md font-semibold text-gray-900 mb-4">Estimated Timeline</h3>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-50">
            {['Status', 'Avg. Duration', 'Range'].map((h) => (
              <th
                key={h}
                className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeline.map((row) => (
            <tr key={row.status} className="even:bg-gray-50">
              <td className="px-4 py-2 text-sm text-gray-800">{row.status}</td>
              <td className="px-4 py-2 text-sm text-gray-800">
                {row.avgDuration != null ? `${row.avgDuration} days` : '–'}
              </td>
              <td className="px-4 py-2 text-sm text-gray-800">{row.range}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
