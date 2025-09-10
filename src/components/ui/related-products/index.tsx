
"use client";
import React, { useState, useEffect } from "react";
import { ProductCard } from "../card/CardSwiper";
import { Product } from "@/components/types/Product";
import { Heading } from "../headings";

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Shuffle products randomly - use consistent seed for SSR/client match
  const shuffled = [...products].sort(() => 0.5 - Math.random());

  // Pick 8 products for related section
  const relatedProducts = shuffled.slice(12, 20);

  return (
    <div className="flex flex-col gap-4 pb-20">
      <Heading
        text="Related Products"
        className="mb-2 ml-0 sm:ml-20 text-left sm:text-left"
        textClass="text-primary text-lg sm:text-xl md:text-2xl font-bold"
        bulletClass="bg-primary"
      />

      <h2 className="text-xl sm:text-2xl md:text-2xl font-bold text-secondary py-2 ml-0 sm:ml-20 text-left sm:text-left">
        Check out our related products
      </h2>

      {/* Responsive ProductCard with explicit single card for small screens */}
      {isClient && (
        <ProductCard
          products={relatedProducts}
          swiperOptions={{
            slidesPerView: 1, // 1 card on small screens (< 640px)
            spaceBetween: 12,
            observer: true, // Enable observer to handle dynamic content
            observeParents: true, // Watch parent element changes
            breakpoints: {
              480: { slidesPerView: 1, spaceBetween: 12 }, // extra small screens
              640: { slidesPerView: 2, spaceBetween: 16 }, // small screens
              768: { slidesPerView: 3, spaceBetween: 20 }, // tablets
              1024: { slidesPerView: 4, spaceBetween: 24 }, // desktops
              1280: { slidesPerView: 4, spaceBetween: 28 }, // large desktops
            },
          }}
        />
      )}
    </div>
  );
}