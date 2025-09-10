// Hero.tsx
import React from "react"

import HeroCarousel from "./carousal"
import Sidebar from "./Sidebar"

const Hero = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-1 py-10">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 bg-[var(--background)] shadow-sm  p-4 border border-base-300">
          <Sidebar />
        </div>

        {/* Hero Carousel */}
        <div className="w-full lg:w-3/4  overflow-hidden shadow-lg border border-base-300">
          <HeroCarousel
            images={[
              "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=1200&h=600&fit=crop&crop=center",
              "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=1200&h=600&fit=crop&crop=center",
              "https://images.unsplash.com/photo-1615680022647-99c397cbcaea?w=1200&h=600&fit=crop&crop=center",
              "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=1200&h=600&fit=crop&crop=center",
            ]}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
