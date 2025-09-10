import React from "react";
import { Product } from "../types/Product";
import { Card } from "../ui/card/Card";

interface ShopProps {
  products: Product[];
}

export const ShopGrid: React.FC<ShopProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};
