// Item Type Definitions - Defines The Shape Of Item Data Throughout The App

export interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  rating: number;
  createdAt: string;
  updatedAt?: string;
}

// Form Data For Creating New Item
export interface CreateItemData {
  name: string;
  description: string;
  price: number;
  image?: string;
  category?: string;
  stock?: number;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  total?: number;
}
