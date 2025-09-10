import React from "react";

import { BestSellerCard } from "./BestSellerCard";
import { Heading } from "../headings";
import { Product } from "@/components/types/Product";

interface BestSellerProps {
  products: Product[];
}

export function BestSeller({ products }: BestSellerProps) {
  return (
    <section className="w-full py-10">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-1 flex flex-col pb-10 border-b border-secondary">
        {/* Main Heading */}
        <Heading
          text="Best Sellers"
          textClass="text-primary text-lg sm:text-xl md:text-2xl font-bold"
          bulletClass="bg-primary"
        />

        {/* Secondary heading */}
        <p className="text-secondary text-base sm:text-lg md:text-xl font-semibold mt-2">
          Check out our top products
        </p>

        {/* Product Cards */}
        <BestSellerCard products={products} />
      </div>
    </section>
  );
}
