// LatestProductsCard.tsx
import React from "react";
import {ProductCard} from "../card/CardSwiper";
import { Product } from "@/components/types/Product";
import { Button } from "../buttons";
import Link from "next/link";


interface LatestProductsCardProps {
  products: Product[];
}

export  function LatestProductsCard ({
  products,
} : LatestProductsCardProps) {
  const latestProducts = products.filter((p) => p.latest === true);

  return (
    <section className="flex flex-col gap-6 items-center w-full px-2 py-6 ">
      {/* Product Grid */}
      <div className="w-full">
        <ProductCard products={latestProducts} />
      </div>

      {/* Button */}
      <Link href={"/shop"}>
      <Button
        variant="solid"
        size="xl"
        className="!px-12 !py-5 text-lg whitespace-nowrap font-semibold"
        label="View All Products"
      />
      </Link>
    </section>
  );
};

