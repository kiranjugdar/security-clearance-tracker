import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store';
import { useEffect } from 'react';
import { fetchHistory, fetchCaseHistory } from '../api/clearance';
import { setHistory, setCaseHistory } from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Client‑side fetch on mount with fallback data
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
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;