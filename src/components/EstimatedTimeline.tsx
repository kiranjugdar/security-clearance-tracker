import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

export const EstimatedTimeline: React.FC = () => {
  const { timeline } = useSelector((state: RootState) => state.clearance);

  return (
    <section className="p-4 bg-white shadow rounded mt-4">
      <h2 className="text-xl font-semibold mb-2">Estimated Timeline</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2">Status</th>
            <th>Avg. Duration</th>
            <th>Range</th>
          </tr>
        </thead>
        <tbody>
          {timeline.map(item => (
            <tr key={item.status} className="border-b">
              <td className="py-2">{item.status}</td>
              <td>{item.avgDuration !== null ? `${item.avgDuration} days` : '—'}</td>
              <td>{item.range}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};