// product-schema.ts
import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(2, "Product name is required"),
  price: z.number().positive("Price must be greater than 0"),
  category: z.string().min(2, "Category is required"),
  image: z.string().url("Image must be a valid URL"),
  badge: z.string().optional(),
  isFavourite: z.boolean().default(false),  
  latest: z.boolean().default(false),       
  bestSeller: z.boolean().default(false),  
});

export type ProductFormData = z.infer<typeof productSchema>;
