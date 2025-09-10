import React from "react";


import {FlashSaleCountdown} from "../flash-sale";
import {LatestProductsCard} from "./LatestProductsCard";
import { Product } from "@/components/types/Product";
import { Heading } from "../headings";

interface LatestProductsProps {
  products: Product[];
}

export  function LatestProducts({ products }: LatestProductsProps) {
  return (
    <section className="w-full py-10">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-10 border-b border-secondary">
        {/* Flash sale banner / heading */}
        <Heading
          text="Today's"
          textClass="text-primary text-base sm:text-lg md:text-xl lg:text-2xl font-bold"
          bulletClass="bg-primary"
        />

        {/* Countdown */}
        <FlashSaleCountdown endTime="2025-09-31T23:59:59" />

        {/* Product grid / list */}
        <LatestProductsCard products={products} />
      </div>
    </section>
  );
};

