import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatusHistoryItem, CaseHistoryItem } from '../types';

interface ClearanceState {
  progressStages: string[];
  currentStage: string;
  history: StatusHistoryItem[];
  caseHistory: CaseHistoryItem[];
  selectedCaseId: string;
}

const initialState: ClearanceState = {
  progressStages: [
    'Application Submitted',
    'Initiated',
    'Questionnaire Submitted',
    'Review & Investigation',
    'Final Review',
    'Completed'
  ],
  currentStage: 'Questionnaire Submitted',
  history: [
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
  ],
  caseHistory: [
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
    },
    {
      caseId: "SCT-2024-004",
      caseStatus: "Pending Documentation",
      link: "/case/SCT-2024-004"
    },
    {
      caseId: "SCT-2024-005",
      caseStatus: "Closed",
      link: "/case/SCT-2024-005"
    }
  ],
  selectedCaseId: 'SCT-2024-001'
};

const clearanceSlice = createSlice({
  name: 'clearance',
  initialState,
  reducers: {
    setCurrentStage(state, action: PayloadAction<string>) {
      state.currentStage = action.payload;
    },
    setHistory(state, action: PayloadAction<StatusHistoryItem[]>) {
      state.history = action.payload;
    },
    setCaseHistory(state, action: PayloadAction<CaseHistoryItem[]>) {
      state.caseHistory = action.payload;
    },
    setSelectedCaseId(state, action: PayloadAction<string>) {
      state.selectedCaseId = action.payload;
    }
  }
});

export const { setCurrentStage, setHistory, setCaseHistory, setSelectedCaseId } = clearanceSlice.actions;
export const store = configureStore({ reducer: { clearance: clearanceSlice.reducer } });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;