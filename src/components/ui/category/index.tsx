// Category.jsx
import React from "react";
import { CategoryCard } from "./CategoryCard";
import { Heading } from "../headings";


export  function Category() {
  return (
    <section className="w-full py-12 sm:py-15">
      <div className="max-w-[89.5rem] mx-auto flex flex-col gap-6 pb-12 sm:pb-15 border-b border-secondary">
        <Heading
          text="Browse By Category"
          bulletClass="bg-primary"
          textClass="text-primary text-lg sm:text-xl md:text-2xl font-bold"
        />
        <CategoryCard />
      </div>
    </section>
  );
}
