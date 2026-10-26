export interface SalonHours {
  weekday: string;
  saturday: string;
  sunday: string;
}

export interface SalonLocation {
  id: string;
  city: string;
  address: string;
  department: string;
  mapsQuery: string;
  mapsUrl: string;
  phone?: string;
  phoneRaw?: string;
  openingHours: SalonHours;
}

export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface CollectionItem {
  id: string;
  title: string;
  description: string;
  image: string;
  linkText: string;
  linkHref: string;
}

export interface GalleryItem {
  id: string;
  alt: string;
  image: string;
  title?: string;
  category?: string;
}

export interface SpecialOccasion {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  icon: string;
  highlights: string[];
  image: string;
}

export interface TailoringServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  examples: string[];
}

export interface FacebookPageLink {
  label: string;
  url: string;
}

export interface SocialLink {
  label: string;
  url: string;
  platform?: 'facebook' | 'instagram';
}
