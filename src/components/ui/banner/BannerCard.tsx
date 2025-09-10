import React from "react";

import {FlashSaleCountdown} from "../flash-sale";
import { Heading } from "../headings";
import { Button } from "../buttons";


export  function BannerCard() {
  return (
    <section className="lg:w-[90%] sm:w-full lg:mx-auto py-6 sm:py-10">
      {/* Full width container */}
      <div className="w-full flex justify-center">
        {/* Banner inner container */}
        <div className="relative w-full h-60 sm:h-80 md:h-[32rem] flex items-center overflow-hidden">
          {/* Background Image */}
          <img
            src="Frame.png"
            alt="Banner"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-neutral/40 z-10"></div>

          {/* Content */}
          <div className="relative z-20 w-full max-w-[1440px] px-4 sm:px-6 lg:px-12 flex flex-col gap-3 sm:gap-4 md:gap-6 text-center md:text-left items-center md:items-start">
            {/* Heading */}
            <Heading
              text="Categories"
              textClass="text-accent text-sm sm:text-lg md:text-2xl"
              bulletClass="bg-accent"
            />

            {/* Title */}
            <p className="text-secondary-content text-lg sm:text-2xl md:text-5xl font-semibold leading-snug">
              Enhance Your <br className="hidden sm:block" /> Music Experience
            </p>

            {/* Countdown */}
            <div className="w-[90%] flex justify-center  md:justify-start">
              <FlashSaleCountdown
                endTime="2025-09-31T23:59:59"
                variant="boxed"
              />
            </div>

            {/* Button */}
            <div className="flex justify-center md:justify-start pl-0 sm:pl-2">
              <Button variant="solid" size="sm" label="Shop Now" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
