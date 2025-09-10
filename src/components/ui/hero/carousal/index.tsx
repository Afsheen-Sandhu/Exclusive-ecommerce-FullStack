"use client";

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import clsx from "clsx";

interface CarouselProps {
  images: string[];
  options?: EmblaOptionsType;
}

const HeroCarousel: React.FC<CarouselProps> = ({ images, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      ...options,
    },
    [Autoplay({ delay: 3000 })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div
      ref={emblaRef}
      className="
        relative w-full h-[180px] sm:h-[220px] md:h-[280px] lg:h-[350px] xl:h-[400px] 
        overflow-hidden 
        flex-1
      "
    >
      {/* Slides */}
      <div className="flex h-full">
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-[0_0_100%] h-full flex items-center justify-center"
          >
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => emblaApi && emblaApi.scrollTo(idx)}
            className={clsx(
              "w-2.5 h-2.5 sm:w-3 sm:h-3 transition-all",
              idx === selectedIndex ? "bg-primary scale-110" : "bg-gray-300"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
