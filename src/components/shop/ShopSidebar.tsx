import React from "react";

interface SidebarFiltersProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
}

export const SidebarFilters: React.FC<SidebarFiltersProps> = ({
  categories,
  selectedCategories,
  onCategoryChange,
}) => {
  return (
    <aside className="w-64 p-6 bg-[var(--background)] shadow-lg rounded-xl border border-gray-200">
      <h2 className="text-lg font-semibold mb-4 ">Filter by Category</h2>
      <ul className="space-y-3">
        {categories.map((category) => (
          <li key={category} className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={category}
              checked={selectedCategories.includes(category)}
              onChange={() => onCategoryChange(category)}
              className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
            />
            <label htmlFor={category} className=" cursor-pointer">
              {category}
            </label>
          </li>
        ))}
      </ul>
    </aside>
  );
};
