"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/lib/redux/store";
import { Minus, Plus } from "lucide-react";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  setQuantity,
} from "@/lib/redux/slices/CartSlice";
import { CartItem } from "@/lib/redux/CartItem";
import { Button } from "../ui/buttons";
import Link from "next/link";

export default function Cart() {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">Your Shopping Cart</h2>

      {items.length === 0 ? (
        <div className="flex flex-col items-center py-20">
          <p className="text-gray-500 text-lg">Your cart is empty 🛒</p>
          <Link href="/">
            <Button
              className="mt-4 bg-primary text-white whitespace-nowrap px-20 py-4"
              label="Continue Shopping"
              variant="neutral"
              size="lg"
            />
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left: Cart Items */}
          <div className="md:col-span-2 space-y-6">
            {items.map((item: CartItem) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-[var(--background)] p-4 rounded-xl shadow"
              >
                {/* Product Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image || "https://dummyimage.com/200x200"}
                    alt={item.name}
                    className="w-20 h-20 rounded object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>{" "}
                    {/* ✅ fixed */}
                    <p className="text-gray-500">${item.price.toFixed(2)}</p>
                    {/* Quantity Controls */}
                    <div className="flex items-center border border-base-300 dark:border-base-300 rounded-md bg-transparent">
                      {/* Decrement */}
                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        disabled={item.quantity === 1}
                        className="px-3 py-2 hover:text-primary hover:font-semibold cursor-pointer transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:text-current disabled:hover:font-normal"
                      >
                        <Minus className="w-4 h-4" />
                      </button>

                      {/* Quantity Display */}
                      <span className="px-4 py-2 font-medium text-center min-w-[50px] border-x border-base-300 dark:border-base-300">
                        {item.quantity}
                      </span>

                      {/* Increment */}
                      <button
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        className="px-3 py-2 hover:text-primary hover:font-semibold cursor-pointer transition-all duration-200"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  className="text-red-500 hover:text-red-700 font-medium"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Right: Order Summary */}
          <div className="bg-[var(--background)] p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700 mb-4">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-4">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="w-full mt-6 bg-primary hover:bg-blue-600 text-white py-3   shadow">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
