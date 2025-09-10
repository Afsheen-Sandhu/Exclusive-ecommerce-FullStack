import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

const badgeVariants = cva(
  "absolute top-2 left-2 font-bold text-white flex items-center justify-center rounded-none", // square edges
  {
    variants: {
      setcolor: {
        primary: "bg-primary",
        secondary: "bg-secondary",
        accent: "bg-accent",
        success: "bg-success",
        warning: "bg-warning",
        error: "bg-error",
      },
      size: {
        small: "px-2 py-0.5 text-xs",
        medium: "px-3 py-1 text-sm",
        large: "px-4 py-1.5 text-base",
      },
    },
    defaultVariants: {
      setcolor: "primary",
      size: "medium",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  text: string;
  customColor?: string; // optional user-defined color
}

export  function Badge ({
  text,
  setcolor,
  size,
  customColor,
  className,
  ...props
}: BadgeProps)  {
  const style = customColor ? { backgroundColor: customColor } : undefined;

  return (
    <span
      className={cn(badgeVariants({ setcolor, size }), className)}
      style={style}
      {...props}
    >
      {text}
    </span>
  );
};

