import React, { useEffect } from 'react';
import { HeaderBar } from './components/HeaderBar';
import { CaseSelector } from './components/CaseSelector';
import { ClearanceProgressBar } from './components/ClearanceProgressBar';
import { CurrentStatus } from './components/CurrentStatus';
import { StatusHistory } from './components/StatusHistory';
import { CaseHistory } from './components/CaseHistory';
import { fetchHistory, fetchCaseHistory } from './api/clearance';
import { setHistory, setCaseHistory } from './store';
import { store } from './store';

function App() {
  useEffect(() => {
    // Client-side fetch on mount with fallback data
    fetchHistory()
      .then(data => store.dispatch(setHistory(data)))
      .catch(error => {
        console.error('Failed to fetch history:', error);
        // Fallback data
        store.dispatch(setHistory([
          {
            name: "Application Submitted",
            date: "2025-02-01T10:23:00Z",
            status: "completed",
            description: "Security officer has submitted Top Secret questionnaire"
          },
          {
            name: "Initiated",
            date: "2025-02-07T09:00:00Z",
            status: "in_progress",
            description: "Application assigned to security specialist"
          },
          {
            name: "Questionnaire Submitted",
            date: "2025-02-14T14:30:00Z",
            status: "completed",
            description: "Questionnaire reviewed by investigator"
          }
        ]));
      });
    
    fetchCaseHistory()
      .then(data => store.dispatch(setCaseHistory(data)))
      .catch(error => {
        console.error('Failed to fetch case history:', error);
        // Fallback data
        store.dispatch(setCaseHistory([
          {
            caseId: "SCT-2024-001",
            caseStatus: "In Progress",
            link: "/case/SCT-2024-001"
          },
          {
            caseId: "SCT-2024-002",
            caseStatus: "Under Review",
            link: "/case/SCT-2024-002"
          },
          {
            caseId: "SCT-2024-003",
            caseStatus: "Approved",
            link: "/case/SCT-2024-003"
          }
        ]));
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderBar />
      <main className="p-6 max-w-6xl mx-auto">
        <CaseSelector />
        <ClearanceProgressBar />
        <CurrentStatus />
        <div className="row g-4">
          <div className="col-lg-6 d-flex">
            <StatusHistory />
          </div>
          <div className="col-lg-6 d-flex">
            <CaseHistory />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;