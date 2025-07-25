import axios from 'axios';
import { StatusHistoryItem, TimelineItem, CaseHistoryItem } from '../types';

export const fetchHistory = async (): Promise<StatusHistoryItem[]> => {
  // JSON file served from public/mock
  const { data } = await axios.get<StatusHistoryItem[]>('/mock/history.json');
  return data;
};

export const fetchTimeline = async (): Promise<TimelineItem[]> => {
  const { data } = await axios.get<TimelineItem[]>('/mock/timeline.json');
  return data;
};

export const fetchCaseHistory = async (): Promise<CaseHistoryItem[]> => {
  const { data } = await axios.get<CaseHistoryItem[]>('/mock/case-history.json');
  return data;
};