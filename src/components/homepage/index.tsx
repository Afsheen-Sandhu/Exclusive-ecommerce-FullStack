import React from "react";
import { Product } from "@/components/types/Product";

import Hero from "../ui/hero";
import { Container } from "../Container";
import { LatestProducts } from "../ui/latest-products";
import { Category } from "../ui/category";
import { BestSeller } from "../ui/bestseller";
import Banner from "../ui/banner";

import { NewArrival } from "../ui/new-arrival";
import { PolicyCard } from "../ui/policy";
import { RelatedProducts } from "../ui/related-products";
interface HomePageProps {
  products: Product[]; // 👈 expects products
}

export const HomePage: React.FC<HomePageProps> = ({ products }) => {
  return (
    <>
      {/* Hero Section */}
      <Container>
        <Hero />
        <LatestProducts products={products} />
        <Category />

        {/* <NewArrival /> */}
        <BestSeller products={products} />

        {/* Marketing + Footer */}
        <Banner />
        <RelatedProducts products={products} />
        <NewArrival />
        <PolicyCard />
      </Container>
    </>
  );
};
