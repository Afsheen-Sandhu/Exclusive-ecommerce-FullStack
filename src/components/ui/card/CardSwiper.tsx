"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "./Card";
import { Product } from "@/components/types/Product";
import { Button } from "../buttons";

interface ProductCardProps {
  products: Product[];
  swiperOptions?: object;
}

export function ProductCard({ products, swiperOptions }: ProductCardProps) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  // Default responsive options
  const defaultOptions = {
    slidesPerView: 1, // Start with 1 for mobile
    spaceBetween: 12,
    breakpoints: {
      640: { slidesPerView: 2, spaceBetween: 16 }, // small screens
      768: { slidesPerView: 3, spaceBetween: 20 }, // tablets
      1024: { slidesPerView: 4, spaceBetween: 24 }, // desktops
      1280: { slidesPerView: 4, spaceBetween: 28 }, // large desktops
    },
  };

  // Merge custom options with defaults
  const finalOptions = { ...defaultOptions, ...swiperOptions };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 overflow-hidden">
      {/* Custom navigation aligned to right */}
      <div className="flex justify-end gap-2 mb-4">
        <Button
          ref={prevRef}
          size={"icon"}
          icon={<ChevronLeft className="w-5 h-5" />}
          className="p-2 rounded-full bg-secondary hover:bg-secondary-content text-secondary-content hover:text-secondary transition"
        />
        <Button
          ref={nextRef}
          size={"icon"}
          icon={<ChevronRight className="w-5 h-5" />}
          className="p-2 rounded-full bg-secondary hover:bg-secondary-content text-secondary-content hover:text-secondary transition"
        />
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        {...finalOptions} // Apply merged options here
        autoplay={{ delay: 3000 }}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="flex justify-center">
            <div className="w-full h-auto flex justify-center">
              <Card product={product} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}