"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema, ProductFormData } from "@/lib/validations/product-schema";
import FormHeader from "./FormHeader";
import BasicInfoSection from "./BasicInfoSection";
import MediaBadgeSection from "./MediaBadgeSection";
import ProductSettingsSection from "./ProductSettingsSection";
import SubmitSection from "./SubmitSection";

export default function ProductForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = (data: ProductFormData) => {
    const productData = { ...data, id: Date.now(), rating: 0, numberRating: 0 };
    console.log("Valid product:", productData);
  };

  const categories = ["Electronics", "Fashion", "Watch", "Home & Garden"];
  const badges = ["New Arrival", "Best Seller", "Top Rated"];

  return (
    <div className="min-h-screen bg-[var(--background)] py-12">
      <div className="px-4 sm:px-6 md:px-12">
        <FormHeader />
        <div className="border rounded-lg overflow-hidden">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-6 sm:p-8 md:p-12 space-y-10"
          >
            <BasicInfoSection register={register} errors={errors} categories={categories} />
            <MediaBadgeSection register={register} errors={errors} badges={badges} />
            <ProductSettingsSection register={register} />
            <SubmitSection />
          </form>
        </div>
      </div>
    </div>
  );
}
