// SizeButton.tsx
import React, { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

const sizeButtonVariants = cva(
  "flex items-center justify-center border font-medium rounded-none text-xs transition-colors w-10 h-10",
  {
    variants: {
      variantColor: {
        default:
          "border-base-300 text-base hover:border-primary hover:bg-primary hover:text-primary-content",
        selected: "border-primary bg-primary text-primary-content",
      },
    },
    defaultVariants: {
      variantColor: "default",
    },
  }
);

export interface SizeButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof sizeButtonVariants> {
  sizes: ( "256GB" | "512GB" |"825GB"| "1TB" )[];
  onSizeClick?: (size: string) => void;
}

export  function SizeButton ({
  sizes,
  onSizeClick,
  className,
  ...props
 }: SizeButtonProps)  {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleClick = (size: string) => {
    setSelectedSize(size); // set the clicked size as selected
    onSizeClick?.(size);
  };

  return (
    <div className="flex flex-wrap gap-2 sm:gap-4">
      {sizes.map((size) => (
        <button
          key={size}
          type="button"
          className={cn(
            sizeButtonVariants({
              variantColor: selectedSize === size ? "selected" : "default",
            }),
            "flex-shrink-0", // Prevent buttons from shrinking
            className
          )}
          onClick={() => handleClick(size)}
          {...props}
        >
          {size}
        </button>
      ))}
    </div>
  );
};