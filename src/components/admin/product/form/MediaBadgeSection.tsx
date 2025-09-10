"use client";
import { InputField } from "@/components/ui/inputs";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { ProductFormData } from "@/lib/validations/product-schema";

type Props = {
  register: UseFormRegister<ProductFormData>;
  errors: FieldErrors<ProductFormData>;
  badges: string[];
};

export default function MediaBadgeSection({ register, errors, badges }: Props) {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold flex items-center justify-center gap-3 border-b pb-6">
        Media & Badge
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image URL */}
        <div className="space-y-3">
          <label className="block text-xl font-semibold">Image URL *</label>
          <InputField {...register("image")} type="url" placeholder="https://example.com/image.jpg" />
          {errors.image && <p className="text-red-500">{errors.image.message}</p>}
        </div>

        {/* Badge */}
        <div className="space-y-3">
          <label className="block text-xl font-semibold">Product Badge (Optional)</label>
          <select {...register("badge")} className="border text-gray-500 bg-base-200 px-4 py-2 w-full">
            <option value="">No badge</option>
            {badges.map((badge) => (
              <option key={badge} value={badge}>{badge}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
