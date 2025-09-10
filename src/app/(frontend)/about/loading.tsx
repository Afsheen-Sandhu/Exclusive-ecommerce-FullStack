import React from "react";

export function AboutLoading() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-5 mb-16 mt-20 space-y-20 animate-pulse">
      {/* 1️⃣ Intro Section Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content Skeleton */}
        <div className="space-y-5">
          {/* Heading Skeleton */}
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            <div className="h-8 bg-gray-300 rounded w-32"></div>
          </div>
          
          {/* Paragraph Skeleton */}
          <div className="space-y-3">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-11/12"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-4/5"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          </div>
        </div>

        {/* Right Image Skeleton */}
        <div className="w-full h-80 sm:h-96 bg-gray-300 rounded shadow-lg"></div>
      </div>

      {/* 2️⃣ Stats Section Skeleton */}
      <div className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 text-center space-y-4">
              {/* Icon Skeleton */}
              <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto"></div>
              {/* Number Skeleton */}
              <div className="h-8 bg-gray-300 rounded w-20 mx-auto"></div>
              {/* Label Skeleton */}
              <div className="h-4 bg-gray-300 rounded w-24 mx-auto"></div>
            </div>
          ))}
        </div>
      </div>

      {/* 3️⃣ Team Section Skeleton */}
      <div className="space-y-8">
        {/* Team Heading Skeleton */}
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
          <div className="h-8 bg-gray-300 rounded w-32"></div>
        </div>
        
        {/* Team Cards Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              {/* Team Member Image Skeleton */}
              <div className="w-full h-64 bg-gray-300"></div>
              
              {/* Team Member Info Skeleton */}
              <div className="p-6 space-y-3">
                <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                
                {/* Social Links Skeleton */}
                <div className="flex space-x-3 pt-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4️⃣ Policy Section Skeleton */}
      <div className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center space-y-4">
              {/* Policy Icon Skeleton */}
              <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto"></div>
              
              {/* Policy Title Skeleton */}
              <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto"></div>
              
              {/* Policy Description Skeleton */}
              <div className="space-y-2">
                <div className="h-4 bg-gray-300 rounded w-full"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6 mx-auto"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutLoading;