import { products } from "@/components/ui/card/products";

import { ProductDetailsCard } from "@/components/ui/product-details";
import { RelatedProducts } from "@/components/ui/related-products";


interface ProductPageProps {
  params: { id: string };
}

export default function ProductDetails({ params }: ProductPageProps) {
const product = products.find(p => p.id === Number(params.id));

  if (!product) return <p>Product not found!</p>;

  return (
  <>
    <ProductDetailsCard product={product} />
    <RelatedProducts products={products} />
  </> 
  );
  
}
