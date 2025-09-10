// Heading.tsx
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

const headingVariants = cva("flex items-center gap-2");

export interface HeadingProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof headingVariants> {
  text: string;
  bulletClass?: string; // Tailwind/DaisyUI class for bullet
  textClass?: string;   // Tailwind/DaisyUI class for text
}

export  function Heading   ({
  text,
  bulletClass,
  textClass,
  className,
  ...props
}: HeadingProps)  {
  return (
    <div className={cn(headingVariants(), className)} {...props}>
      {/* Vertical rectangle (bullet) */}
      <div
        className={cn("w-3 h-7 rounded-sm", bulletClass || "bg-[#DB4444]")}
      />
      
      {/* Heading text */}
      <h2 className={cn("font-semibold text-sm", textClass || "text-[#DB4444]")}>
        {text}
      </h2>
    </div>
  );
};

