"use client";

import Link from "next/link";
import { StarRating } from "../ratings";
import { Badge } from "../badge";
import { Product } from "@/components/types/Product";
import { Heart, ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/redux/slices/CartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "@/lib/redux/slices/WishlistSlices";
import { CartItem } from "@/lib/redux/CartItem";
import { useState } from "react";

interface CardProps {
  product: Product;
}

export function Card({ product }: CardProps) {
  const { id, name, price, rating, image, badge, bestSeller, numberRating } =
    product;

  const dispatch = useDispatch();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();

    const cartItem: CartItem = {
      id,
      name,
      price,
      image,
      quantity: 1,
    };

    dispatch(addToCart(cartItem));
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isWishlisted) {
      dispatch(removeFromWishlist(id));
    } else {
      dispatch(addToWishlist(product));
    }
    setIsWishlisted(!isWishlisted);
  };

  return (
    <Link href={`/product/${id}`}>
      <div className="relative w-full sm:w-72 md:w-80 bg-[var(--background)] shadow-md overflow-hidden group flex flex-col transition hover:shadow-lg cursor-pointer border border-base-300 before:content-[''] before:absolute before:inset-0 before:-z-10 before:rounded-xl before:border-2 before:border-primary before:blur-md before:opacity-40">
        {/* Top Right Actions */}
        <div className="absolute top-2 right-2 z-20 flex flex-col gap-2">
          {/* Wishlist */}
          <button
            onClick={handleToggleWishlist}
            className="p-2 bg-base-300 rounded-full shadow hover:bg-base-200"
          >
            <Heart
              className={`w-4 h-4 ${
                isWishlisted ? "text-red-500 fill-red-500" : "text-base-content"
              }`}
            />
          </button>

          {/* Cart */}
          <button
            onClick={handleAddToCart}
            className="p-2 bg-base-300 rounded-full shadow hover:bg-base-200"
          >
            <ShoppingCart className="w-4 h-4 text-base-content" />
          </button>
        </div>

        {/* Badge */}
        {badge && (
          <Badge
            text={badge}
            className={`absolute top-2 left-2 z-10 ${
              bestSeller ? "badge-primary" : "badge-secondary"
            }`}
          >
            {badge}
          </Badge>
        )}

        {/* Image */}
        <figure className="bg-[var(--background)] h-48 w-full flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={name}
            className="object-contain h-full w-full transition-transform duration-300 group-hover:scale-105"
          />
        </figure>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-primary line-clamp-2">
              {name}
            </h2>
            <p className="text-sm text-secondary mt-1">Price: ${price}</p>
            <div className="flex items-center gap-1 mt-1">
              <StarRating initialRating={rating} />
              {numberRating && (
                <span className="text-sm text-secondary">({numberRating})</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
