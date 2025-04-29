export interface ProductType {
  id: string;
  name?: string;
  description?: string;
  price?: number;
  tags?: string[];
  images?: string[];
  rating?: number;
  image?: string;
  badges?: string[];
  isSubscribable?: boolean;
}