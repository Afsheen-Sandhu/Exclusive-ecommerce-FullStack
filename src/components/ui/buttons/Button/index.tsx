import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";


const buttonVariants = cva(
  "flex flex-col gap-2 font-medium   disabled:pointer-events-none",
  {
    variants: {
      variant: {
        solid:
          "bg-primary text-white hover:bg-primary/90  items-center justify-center text-center",
        outline:
          "border border-primary text-primary bg-neutral/10 hover:bg-primary hover:text-white  items-center justify-center text-center",
        underline:
          "text-base    items-start  justify-start text-left",
        neutral:
          "border border-neutral/30 text-secondary cursor-pointer focus:border-neutral hover:text-white shadow-[0_0_3px] shadow-neutral items-center justify-center text-center",
        icon: "items-center justify-center text-center",
      },
      size: {
        xs: "p-2 text-xs w-10",
        sm: "p-3 text-xs w-24",
        md: "p-4 text-base w-28",
        lg: "p-6 text-lg w-32",
        xl: "px-12 py-4 text-xl w-36",
        icon: "",
      },
    },
    defaultVariants: {
      variant: "neutral",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
  label?: string;
  details?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  icon,
  label,
  details,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {icon && <span className="text-sm">{icon}</span>}
      {label && (
        <span
          className={cn(
            "text-sm sm:text-base md:text-sm ",
            variant === "underline" &&
              "border-b-2 border-base pb-1 hover:font-semibold  w-fit"
          )}
        >
          {label}
        </span>
      )}
    </button>
  );
};
