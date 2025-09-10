// BestSellerCard.tsx
import React from "react";
import {ProductCard} from "../card/CardSwiper";
import { Product } from "@/components/types/Product";

interface BestSellerCardProps {
  products: Product[];
}

export const BestSellerCard: React.FC<BestSellerCardProps> = ({ products }) => {
  const bestSellers = products.filter((p) => p.bestSeller === true);

  return (
    <section className="py-4">
      <ProductCard products={bestSellers} />
    </section>
  );
};
