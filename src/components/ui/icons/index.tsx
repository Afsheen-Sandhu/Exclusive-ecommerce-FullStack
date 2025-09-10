// Icon.tsx
import React from "react";
import { Phone, Mail } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

const iconVariants = cva(
  "flex items-center justify-center rounded-full border-2 text-white",
  {
    variants: {
      setcolor: {
        primary: "bg-primary border-primary",
        secondary: "bg-secondary border-secondary",
        accent: "bg-accent border-accent",
        success: "bg-success border-success",
        warning: "bg-warning border-warning",
        error: "bg-error border-error",
      },
      size: {
        sm: "w-8 h-8",
        md: "w-10 h-10",
        lg: "w-12 h-12",
      },
    },
    defaultVariants: {
      setcolor: "primary",
      size: "md",
    },
  }
);

export interface IconProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof iconVariants> {
  type: "phone" | "message";
}

export const Icon: React.FC<IconProps> = ({
  type,
  setcolor,
  size,
  className,
  ...props
}) => {
  const IconComponent = type === "phone" ? Phone : Mail;

  return (
    <div className={cn(iconVariants({ setcolor, size }), className)} {...props}>
      <IconComponent
        size={size === "sm" ? 16 : size === "md" ? 20 : 24}
        strokeWidth={2}
      />
    </div>
  );
};
