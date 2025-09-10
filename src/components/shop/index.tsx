"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Product } from "@/components/types/Product";
import { ShopGrid } from "@/components/shop/ShopGrid";
import { SidebarFilters } from "@/components/shop/ShopSidebar";

interface ShopPageProps {
  products: Product[];
}

export const ShopPage: React.FC<ShopPageProps> = ({ products }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const searchParams = useSearchParams();

  // ✅ get search term from query param (set by Navbar input)
  const searchTerm = searchParams.get("search") || "";

  // ✅ Toggle categories on/off
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // ✅ Apply search + filter logic
  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(p.category ?? "");

    const matchesSearch = p.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex gap-8 p-6">
      {/* Sidebar for filters */}
      <SidebarFilters
        categories={[...new Set(products.map((p) => p.category ?? ""))]} // unique categories
        selectedCategories={selectedCategories}
        onCategoryChange={handleCategoryChange}
      />

      {/* Product Grid */}
      <div className="flex-1">
        {filteredProducts.length > 0 ? (
          <ShopGrid products={filteredProducts} />
        ) : (
          <p className="text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};
