export interface Product {
  id: number;
  categoryId: number;

  name: string;
  description: string;

  images: string[];
  image?: string;

  price: number;
  rating: number;

  link: string;
  likes: number;
}