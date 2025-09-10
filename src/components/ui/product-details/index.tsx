"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/buttons";
import { Heart, Minus, Plus } from "lucide-react";
import { InfoCards } from "./InfoCard";
import { StarRating } from "../ratings";
import { SizeButton } from "../buttons/SizeButton";
import { Product } from "@/components/types/Product";

// ✅ Redux
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/redux/slices/CartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "@/lib/redux/slices/WishlistSlices";
import { CartItem } from "@/lib/redux/CartItem";

interface ProductDetailsCardProps {
  product: Product;
}

export function ProductDetailsCard({ product }: ProductDetailsCardProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.image);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const dispatch = useDispatch();

  const miniImages = [
    product.image,
    "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=150",
    "https://images.unsplash.com/photo-1615680022647-99c397cbcaea?w=150",
  ];

  const handleSizeSelect = (size: string) => setSelectedSize(size);
  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  // ✅ Add to Cart
  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    };
    dispatch(addToCart(cartItem));
  };

  // ✅ Toggle Wishlist
  const handleToggleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-7 py-8 sm:py-12 bg-[var(--background)] text-base">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Images */}
        <div className="space-y-3 sm:space-y-4">
          <div className="aspect-square bg-base overflow-hidden border border-base-300">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {miniImages.map((img, i) => (
              <div
                key={i}
                className={`aspect-square overflow-hidden cursor-pointer border-2 ${
                  mainImage === img ? "border-primary" : "border-base-300"
                }`}
                onClick={() => setMainImage(img)}
              >
                <img
                  src={img}
                  alt={`${product.name} view ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col h-full lg:h-auto">
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              {product.name}
            </h1>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              <StarRating initialRating={product.rating} />
              {product.numberRating && (
                <span className="text-sm opacity-70">
                  ({product.numberRating})
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl font-bold text-primary">
                ${product.price}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6 sm:mb-8">
            <p className="text-sm sm:text-base opacity-80 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Size / Quantity / Actions */}
          <div className="mt-auto space-y-4 sm:space-y-6">
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="text-xs sm:text-sm font-medium">Qty:</span>
              <div className="flex items-center border border-base-300 dark:border-base-300 rounded-md bg-transparent">
                <button
                  onClick={decrement}
                  disabled={quantity === 1}
                  className="px-3 py-2 hover:text-primary hover:font-semibold cursor-pointer transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:text-current disabled:hover:font-normal"
                >
                  <Minus className="w-4 h-4" />
                </button>

                <span className="px-4 py-2 font-medium text-center min-w-[50px] border-x border-base-300 dark:border-base-300">
                  {quantity}
                </span>

                <button
                  onClick={increment}
                  className="px-3 py-2 hover:text-primary hover:font-semibold cursor-pointer transition-all duration-200"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <SizeButton
                sizes={["256GB", "512GB", "825GB", "1TB"]}
                className="w-auto p-3 sm:p-5"
                onSizeClick={handleSizeSelect}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {/* ✅ Add to Cart Button */}
              <Button
                variant="solid"
                className="flex-1"
                label="Add to Cart"
                onClick={handleAddToCart}
              />
              {/* ✅ Wishlist Button */}
              <Button
                variant="outline"
                icon={
                  <Heart
                    className={
                      isWishlisted ? "text-error fill-error" : "text-base"
                    }
                  />
                }
                onClick={handleToggleWishlist}
              />
            </div>
          </div>

          {/* Info Cards */}
          <div className="mt-6 sm:mt-8">
            <InfoCards />
          </div>
        </div>
      </div>
    </div>
  );
}