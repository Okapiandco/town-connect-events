export interface Venue {
  id: string;
  name: string;
  address: string;
  capacity?: number;
  description?: string;
  imageUrl?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  endTime?: string;
  category: EventCategory;
  venue: Venue;
  imageUrl?: string;
  organizer: string;
  contactEmail?: string;
  status: 'pending' | 'approved' | 'rejected';
  isFeatured?: boolean;
  ticketUrl?: string;
  price?: string;
}

export type EventCategory = 
  | 'community'
  | 'music'
  | 'sports'
  | 'arts'
  | 'education'
  | 'markets'
  | 'charity'
  | 'council'
  | 'other';

export const categoryLabels: Record<EventCategory, string> = {
  community: 'Community',
  music: 'Music & Entertainment',
  sports: 'Sports & Recreation',
  arts: 'Arts & Culture',
  education: 'Education & Workshops',
  markets: 'Markets & Fairs',
  charity: 'Charity & Fundraising',
  council: 'Council Meeting',
  other: 'Other',
};

export const categoryColors: Record<EventCategory, string> = {
  community: 'bg-primary/10 text-primary',
  music: 'bg-secondary/20 text-secondary-foreground',
  sports: 'bg-accent/10 text-accent',
  arts: 'bg-pink-100 text-pink-700',
  education: 'bg-blue-100 text-blue-700',
  markets: 'bg-orange-100 text-orange-700',
  charity: 'bg-rose-100 text-rose-700',
  council: 'bg-primary text-primary-foreground',
  other: 'bg-muted text-muted-foreground',
};
