export enum DesignStyle {
  All = 'All',
  Industrial = 'Industrial',
  Minimalist = 'Minimalist',
  Scandinavian = 'Scandinavian',
  Luxury = 'Luxury',
  Commercial = 'Commercial'
}

export interface Project {
  id: string;
  title: string;
  category: DesignStyle;
  description: string;
  imageUrl: string;
  year: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
}
