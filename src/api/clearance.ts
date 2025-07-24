import axios from 'axios';
import { StatusHistoryItem, TimelineItem } from '../types';

export const fetchHistory = async (): Promise<StatusHistoryItem[]> => {
  // JSON file served from public/mock
  const { data } = await axios.get<StatusHistoryItem[]>('/mock/history.json');
  return data;
};

export const fetchTimeline = async (): Promise<TimelineItem[]> => {
  const { data } = await axios.get<TimelineItem[]>('/mock/timeline.json');
  return data;
};