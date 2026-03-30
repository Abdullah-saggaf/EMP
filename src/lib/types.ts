export interface Property {
  id: string;
  url?: string;
  title?: string;
  description?: string;
  price: number;
  currency: string;
  price_eur?: number;
  type: string;
  subtype?: string;
  city: string;
  district?: string;
  neighborhood?: string;
  address?: string;
  country?: string;
  bedrooms: number;
  bathrooms: number;
  rooms?: number;
  size: number;
  land?: number;
  floor?: number | string;
  totalfloors?: number | string;
  storeys?: number;
  balcony?: number;
  constructionyear?: string | number;
  features: string[];
  images: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface Service {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: string;
}
