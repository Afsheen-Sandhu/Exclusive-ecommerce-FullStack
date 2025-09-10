export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  latest: boolean;
  numberRating?: number;
  badge?: string;     // "latest" | "sale" etc
  isFavourite?: boolean;
  bestSeller?: boolean;
  quantity?: number;
  category: string;
}
