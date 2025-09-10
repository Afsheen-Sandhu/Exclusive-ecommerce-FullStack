import Link from "next/link";
import { Heart } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { Button } from "../buttons";

export function WishlistIcon() {
  const wishlistCount = useSelector((state: RootState) => state.wishlist.items.length);

  return (
    <Link href="/wishlist" className="relative pr-2">
        <Button variant="underline" size="icon" icon={<Heart className="w-4 h-4 sm:w-5 sm:h-5" />}  />
    
      {wishlistCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-error text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
          {wishlistCount > 9 ? "9+" : wishlistCount}
        </span>
      )}

    </Link>
  );
}
