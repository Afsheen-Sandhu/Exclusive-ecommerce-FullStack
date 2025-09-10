"use client";

import { MouseEvent, ReactNode, useEffect, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

const toggleButtonVariants = cva(
  "flex items-center justify-center rounded-full text-primary border shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary",
  {
    variants: {
      size: {
        sm: "w-8 h-8 p-1",
        md: "w-10 h-10 p-2",
        lg: "w-12 h-12 p-3",
      },
      variantColor: {
        default: "bg-base border-base-300",
        primary: "bg-primary text-primary-content border-primary",
      },
    },
    defaultVariants: {
      size: "md",
      variantColor: "default",
    },
  }
);

export interface ToggleButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof toggleButtonVariants> {
  icon: ReactNode;
  toggledIcon: ReactNode;
  onClickToggle: (toggleState: boolean) => void;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  icon,
  toggledIcon,
  onClickToggle,
  onClick,
  size,
  variantColor,
  className,
  ...rest
}) => {
  const [toggled, setToggled] = useState(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    setToggled((prev) => !prev);
    if (onClick) onClick(e);
  };

  useEffect(() => {
    onClickToggle(toggled);
  }, [toggled, onClickToggle]);

  return (
    <button
      onClick={handleClick}
      className={cn(toggleButtonVariants({ size, variantColor }), className)}
      {...rest}
    >
      {toggled ? toggledIcon : icon}
    </button>
  );
};
