import React, { ComponentPropsWithoutRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

const inputVariants = cva(
  "flex items-center border-box", // removed width constraints
  {
    variants: {
      variant: {
        outline:
          "border border-neutral bg-base-200 shadow-sm focus-within:border-primary rounded-none dark:bg-base-300",
        underline:
          "border-0 border-b border-neutral focus-within:border-b-2 focus-within:border-primary rounded-none dark:bg-base-300",
        filled:
          "border border-transparent bg-base-200 text-black placeholder-black/50 focus-within:border-primary rounded-none dark:bg-base-300",
        ghost:
          "border-0 bg-transparent focus-within:border-secondary rounded-none dark:bg-base-300",
      },
      sizes: {
        xs: "h-6 px-2 text-xs leading-none",
        sm: "h-8 px-3 text-sm leading-none",
        md: "h-10 px-4 text-base leading-none",
        lg: "h-12 px-7 text-lg leading-none", // fixed px-28 to px-6
      },
    },
    defaultVariants: {
      variant: "filled",
      sizes: "md",
    },
  }
);

export interface InputFieldProps
  extends React.ComponentProps<"input">,
    VariantProps<typeof inputVariants> {
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  className,
  variant,
  sizes,
  label,
  error,
  leftIcon,
  rightIcon,
  ...props
}) => {
  return (
    <div className="inline-flex flex-col w-full">
      {label && (
        <label className="mb-1 text-sm font-medium text-neutral">{label}</label>
      )}
      <div
        className={cn(inputVariants({ variant, sizes }), "w-full", className)}
      >
        {leftIcon && (
          <span className="flex items-center justify-center mr-2">
            {leftIcon}
          </span>
        )}
        <input
          className="flex-1 bg-transparent border-none outline-none text-neutral placeholder:text-neutral/50 dark:placeholder:text-neutral/70 h-full leading-none text-left"
          {...props}
        />

        {rightIcon && (
          <span className="flex items-center justify-center ml-2">
            {rightIcon}
          </span>
        )}
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      <div className="h-2"></div>
    </div>
  );
};
