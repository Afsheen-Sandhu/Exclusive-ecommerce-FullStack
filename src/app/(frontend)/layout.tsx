import type { Metadata } from "next";
import { TopBar } from "@/components/ui/top-bar";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import TopLoader from "@/components/ui/top-loader";

export const metadata: Metadata = {
  title: "Frontend | Exclusive Ecommerce",
  description: "Frontend section with header and footer",
};

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopLoader />
      <TopBar />
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
