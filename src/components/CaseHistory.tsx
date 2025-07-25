import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const CaseHistory: React.FC = () => {
  const { caseHistory } = useSelector((s: RootState) => s.clearance);

  return (
    <section className="bg-white rounded-lg shadow p-6 w-100">
      <h3 className="text-md font-semibold text-gray-900 mb-4">Case History</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Case ID
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Case Status
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {caseHistory.map((caseItem) => (
              <tr key={caseItem.caseId} className="even:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-800 font-medium">
                  {caseItem.caseId}
                </td>
                <td className="px-4 py-2 text-sm text-gray-800">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    caseItem.caseStatus === 'Approved' 
                      ? 'bg-green-100 text-green-800'
                      : caseItem.caseStatus === 'In Progress'
                      ? 'bg-blue-100 text-blue-800'
                      : caseItem.caseStatus === 'Under Review'
                      ? 'bg-yellow-100 text-yellow-800'
                      : caseItem.caseStatus === 'Closed'
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {caseItem.caseStatus}
                  </span>
                </td>
                <td className="px-4 py-2 text-sm">
                  <a 
                    href={caseItem.link}
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    View Details
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};