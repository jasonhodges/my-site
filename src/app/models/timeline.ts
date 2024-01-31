export interface TimelineEntry {
  date: string;
  side: 'left' | 'right';
  company: string;
  title: string;
  location?: string;
  description?: string;
}
