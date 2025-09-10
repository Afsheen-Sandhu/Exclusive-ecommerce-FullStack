"use client";
import React, { useState } from "react";

export interface StarRatingProps
  extends React.ComponentProps<"div"> {
  maxStars?: number;
  initialRating?: number;
  onRatingChange?: (rating: number) => void;
}

export const StarRating: React.FC<StarRatingProps> = ({
  maxStars = 5,
  initialRating = 0,
  onRatingChange,
  className,
  ...rest
}) => {
  const [rating, setRating] = useState(initialRating);
 

  const handleClick = (star: number) => {
    setRating(star);
    onRatingChange?.(star);
  };

  return (
    <div className={`flex gap-1 ${className}`} {...rest}>
      {Array.from({ length: maxStars }, (_, i) => {
        const starValue = i + 1;
        return (
    <span
  className={`cursor-pointer text-2xl transition-colors duration-200 ${
    starValue <= rating ? "text-primary" : "text-neutral-500"
  }`}
>
  ★
</span>

        );
      })}
    </div>
  );
};
