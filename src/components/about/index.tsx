import React from "react";
import {Heading} from "../ui/headings";
import {StatsSection} from "./Counter";
import {TeamCard} from "./Team";
import { PolicyCard } from "../ui/policy";

export  function About() {
 

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-5 mb-16 mt-20 space-y-20">
      {/* 1️⃣ Intro Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-5">
          <Heading
            text="About"
            className=""
            textClass="text-primary text-xl sm:text-2xl md:text-3xl font-bold"
            bulletClass="bg-primary"
          />
          <p className=" leading-relaxed  md:text-lg">
            Launched in 2015,{" "}
            <span className="font-semibold text-base">Exclusive</span> is
            South Asia’s premier online shopping marketplace with an active
            presence in Bangladesh. Supported by a wide range of tailored
            marketing, data, and service solutions, Exclusive has{" "}
            <span className="font-semibold">10,500 sellers</span>,{" "}
            <span className="font-semibold">300 brands</span>, and serves{" "}
            <span className="font-semibold">3 million customers</span> across
            the region.
          </p>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="/5.avif"
            alt="About Us"
            className="w-full h-80 sm:h-96 object-cover  shadow-lg"
          />
        </div>
      </div>

      {/* 2️⃣ Counter Section */}
      <StatsSection />

      {/* 3️⃣ Team Section */}
      <div>
        <Heading
          text="Our Team"
          className=""
          textClass="text-primary text-xl sm:text-2xl md:text-3xl font-bold"
          bulletClass="bg-primary"
        />
        <div >
          <TeamCard />
        </div>
      </div>

      {/* 4️⃣ Policy Section */}
      <div>
      
        <div >
          <PolicyCard />
        </div>
      </div>
    </div>
  );
}
