import { Product } from "@/components/types/Product";

// CartItem extends Product with quantity
export type CartItem = Pick<Product, "id" | "name" | "price" | "image"> & {
  quantity: number;
};
