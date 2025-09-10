// app/admin/dashboard/layout.tsx
import React from "react";
import Sidebar from "@/components/admin/sidebar";
import Header from "@/components/admin/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <Header />

      {/* Sidebar for small screens (horizontal) */}
      <div className="md:hidden">
        <Sidebar  />
      </div>

      {/* Body: Sidebar + Main content for md+ */}
      <div className="hidden md:flex flex-1">
        {/* Sidebar vertical for large screens */}
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 p-6">{children}</main>
      </div>

      {/* Main content for small screens */}
      <main className="flex-1 p-2 md:hidden">{children}</main>
    </div>
  );
}
