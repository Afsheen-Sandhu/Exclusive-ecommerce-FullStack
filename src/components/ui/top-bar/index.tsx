import React from "react";
import { Button } from "../buttons";
import Link from "next/link";

export function TopBar() {
  return (
    <div className="w-full  text-base bg-primary/10 ">
      {/* Mobile Layout */}
      <div className="sm:hidden flex flex-col items-center justify-center gap-1 px-3 py-1 ">
        <p className="text-xs text-center leading-tight">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <Link href="/shop">
          <Button
            variant="underline"
            size="sm"
            label="Shop Now"
            className="hover:text-base text-xs font-medium"
          />
            
          
        </Link>
      </div>

      {/* Tablet & Desktop Layout */}
      <div className="hidden sm:flex items-center justify-center gap-2 md:gap-4 px-4 py-2 min-h-[2.5rem]">
        <p className="text-sm md:text-base text-center leading-snug">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <Link href="/shop">
        <Button
          variant="underline"
          size="sm"
          label="Shop Now"
          className="hover:text-base whitespace-nowrap font-medium transition-colors duration-200"
        />
        </Link>
      </div>
    </div>
  );
}
