// Container.tsx
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="
        w-full                 /* full width on mobile */
        sm:w-[95%]             /* 95% width on small+ screens */
        max-w-8xl              /* prevent over-expansion on large screens */
        mx-auto                /* center horizontally */
        px-2 sm:px-4 lg:px-6   /* responsive padding */
      "
    >
      {children}
    </div>
  );
};
