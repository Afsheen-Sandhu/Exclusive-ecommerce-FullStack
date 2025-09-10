"use client";
import { Button } from "@/components/ui/buttons";
import { StarRating } from "@/components/ui/ratings";
import Link from "next/link";
import React from "react";

export default function ProductList() {
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: "$999",
      category: "Electronics",
      rating: <StarRating initialRating={4} />,
    },
    {
      id: 2,
      name: "Nike Shoes",
      price: "$199",
      category: "Fashion",
      rating: <StarRating initialRating={4} />,
    },
    {
      id: 3,
      name: "Coffee Mug",
      price: "$15",
      category: "Home",
      rating: <StarRating initialRating={4} />,
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] py-12 px-2">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary rounded-xl shadow-lg">
            <svg
              className="w-8 h-8 text-primary-content"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold mb-1 sm:mb-2">
              Products
            </h1>
            <p className="text-base sm:text-lg">Manage your product catalog</p>
          </div>
        </div>
        <div className="w-full sm:w-auto flex justify-end">
          <Link href="/admin/dashboard/add">
            <Button
              size="xl"
              variant="solid"
              label="Add New Product"
              className="w-full sm:w-auto px-8 sm:px-10 py-3 text-base font-medium bg-primary text-white hover:bg-primary-dark rounded whitespace-nowrap transition-colors duration-200"
            />
          </Link>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-hidden border bg-[var(--background)] ">
        {/* Header Row */}
        <div className="grid grid-cols-6 text-lg font-bold px-6 py-4 border-b">
          <span>Image</span>
          <span>Name</span>
          <span>Price</span>
          <span>Category</span>
          <span>Rating</span>
          <span className="text-center">Actions</span>
        </div>

        {/* Data Rows */}
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`grid grid-cols-6 items-center px-6 py-4 text-sm transition ${
              index % 2 === 0
                ? "bg-[var(--background)]"
                : "bg-[var(--background-secondary)]"
            } hover:bg-primary/10 border-b`}
          >
            <img
              src="https://via.placeholder.com/50"
              alt={product.name}
              className="h-12 w-12 object-contain border"
            />
            <span className="font-medium">{product.name}</span>
            <span>{product.price}</span>
            <span>{product.category}</span>
            <span>{product.rating}</span>
            <div className="flex gap-2 justify-center">
              <Button
                size="sm"
                variant="solid"
                label="Update"
                className="px-3 py-2 font-medium bg-primary hover:bg-blue-600"
              />
              <Button
                size="sm"
                variant="solid"
                label="Delete"
                className="px-3 py-2 font-medium bg-error text-white hover:bg-red-600"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 border  shadow-sm bg-[var(--background-secondary)]"
          >
            <div className="flex items-center gap-4 mb-3">
              <img
                src="https://via.placeholder.com/50"
                alt={product.name}
                className="h-12 w-12 object-contain rounded-md border"
              />
              <div>
                <h2 className="font-semibold text-lg">{product.name}</h2>
                <p className="text-sm text-gray-500">{product.category}</p>
              </div>
            </div>
            <p className="text-sm">
              <span className="font-medium">Price:</span> {product.price}
            </p>
            <div className="flex items-center gap-2 my-2">
              <span className="font-medium">Rating:</span> {product.rating}
            </div>
            <div className="flex gap-2 mt-3">
              <Button
                size="sm"
                variant="solid"
                label="Update"
                className="flex-1 bg-primary hover:bg-blue-600"
              />
              <Button
                size="sm"
                variant="solid"
                label="Delete"
                className="flex-1 bg-error text-white hover:bg-red-600"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
