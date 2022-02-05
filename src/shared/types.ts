export interface IProduct {
  id: number;
  name: string;
  price: number;
  deliveryFee: number;
  stock: number;
  image: File;
}

export interface ProductAddRequest {
  name: string;
  price: number;
  deliveryFee: number;
  stock: number;
  image: File;
}

export interface ProductSearchQuery {
  page?: number;
  size?: number;
  order?: string;
}
