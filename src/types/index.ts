export interface StatusHistoryItem {
  name: string;
  date: string;
  status: string;
  description?: string;
}

export interface TimelineItem {
  status: string;
  avgDuration: number | null;
  range: string;
}