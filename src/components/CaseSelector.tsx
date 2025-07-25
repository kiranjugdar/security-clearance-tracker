import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setSelectedCaseId } from '../store';

export const CaseSelector: React.FC = () => {
  const { caseHistory, selectedCaseId } = useSelector((s: RootState) => s.clearance);
  const dispatch = useDispatch();

  const handleCaseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCaseId = event.target.value;
    dispatch(setSelectedCaseId(selectedCaseId));
  };

  return (
    <section className="bg-white rounded-lg shadow p-4 mb-6 w-fit">
      <div className="flex items-center gap-4">
        <label htmlFor="case-selector" className="text-sm font-medium text-gray-700 whitespace-nowrap">
          Select Case:
        </label>
        <select
          id="case-selector"
          className="form-select block w-auto min-w-64 px-3 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          onChange={handleCaseChange}
          value={selectedCaseId}
        >
          <option value="" disabled>
            Choose a case...
          </option>
          {caseHistory.map((caseItem) => (
            <option key={caseItem.caseId} value={caseItem.caseId}>
              {caseItem.caseId} - {caseItem.caseStatus}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};