import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatusHistoryItem, TimelineItem } from '../types';

interface ClearanceState {
  progressStages: string[];
  currentStage: string;
  history: StatusHistoryItem[];
  timeline: TimelineItem[];
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
  history: [],
  timeline: []
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
    setTimeline(state, action: PayloadAction<TimelineItem[]>) {
      state.timeline = action.payload;
    }
  }
});

export const { setCurrentStage, setHistory, setTimeline } = clearanceSlice.actions;
export const store = configureStore({ reducer: { clearance: clearanceSlice.reducer } });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;