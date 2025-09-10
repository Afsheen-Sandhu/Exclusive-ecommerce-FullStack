"use client";
import { InputField } from "@/components/ui/inputs";
import { UseFormRegister } from "react-hook-form";
import { ProductFormData } from "@/lib/validations/product-schema";

type Props = {
  register: UseFormRegister<ProductFormData>;
};

export default function ProductSettingsSection({ register }: Props) {
  const settings = [
    { key: "isFavourite", label: "Mark as Favourite", desc: "Featured in favourites" },
    { key: "latest", label: "Latest Product", desc: "Show in latest collection" },
    { key: "bestSeller", label: "Best Seller", desc: "Highlight as best seller" },
  ] as const;

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold flex items-center justify-center gap-3 border-b pb-6">
        Product Settings
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {settings.map((s) => (
          <div key={s.key} className="flex flex-col items-center p-8 border ">
            <div className={`text-lg font-bold mb-2`}>{s.label}</div>
            <p className="text-sm text-gray-500 mb-4">{s.desc}</p>
            <input className="w-6 h-6" type="checkbox" {...register(s.key)} />
          </div>
        ))}
      </div>
    </div>
  );
}
