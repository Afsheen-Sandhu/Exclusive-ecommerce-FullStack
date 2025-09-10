"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { Button } from "../buttons";

export function CartIcon() {
  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <Link href="/cart" className="relative">
      <Button
        variant="underline"
        size="icon"
        icon={<ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />}
        className="p-1 sm:p-2"
      />

      {cartCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-error text-white text-[0.55rem] sm:text-xs font-bold rounded-full h-3 w-3 sm:h-4 sm:w-4 flex items-center justify-center">
          {cartCount > 9 ? "9+" : cartCount}
        </span>
      )}
    </Link>
  );
}
