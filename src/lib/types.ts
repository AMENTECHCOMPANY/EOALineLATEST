export interface User {
  id: string;
  email: string;
  created_at: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[] | { [color: string]: string[] };
  video?: string;
  collection: 'laveira' | 'tumie';
  category: string;
  gender: 'male' | 'female' | 'unisex';
  sizes: string[];
  colors: string[];
  description: string;
  verse: string;
  isNew?: boolean;
  isComingSoon?: boolean;
  inStock: boolean;
  sku?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
  selectedSize?: string;
  selectedColor?: string;
}