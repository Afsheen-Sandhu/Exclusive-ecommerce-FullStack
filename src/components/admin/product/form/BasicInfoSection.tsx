"use client";
import { InputField } from "@/components/ui/inputs";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { ProductFormData } from "@/lib/validations/product-schema";

type Props = {
  register: UseFormRegister<ProductFormData>;
  errors: FieldErrors<ProductFormData>;
  categories: string[];
};

export default function BasicInfoSection({ register, errors, categories }: Props) {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold flex items-center justify-center gap-3 border-b pb-6">
        Basic Information
      </h2>

      {/* Product Name */}
      <div className="space-y-3">
        <label className="block text-xl font-semibold">Product Name *</label>
        <InputField {...register("name")} type="text" placeholder="Enter product name" sizes="lg" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      {/* Price + Category */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Price */}
        <div className="space-y-3">
          <label className="block text-xl font-semibold">Price (USD) *</label>
          <InputField
            type="number"
            step="0.01"
            {...register("price", { valueAsNumber: true })}
            placeholder="0.00"
          />
          {errors.price && <p className="text-red-500">{errors.price.message}</p>}
        </div>

        {/* Category */}
        <div className="space-y-3">
          <label className="block text-xl font-semibold">Category *</label>
          <select {...register("category")} className="border text-gray-500 bg-base-200 px-4 py-2 w-full">
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.category && <p className="text-red-500">{errors.category.message}</p>}
        </div>
      </div>
    </div>
  );
}
