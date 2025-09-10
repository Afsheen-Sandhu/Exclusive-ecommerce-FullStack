// app/admin/layout.tsx
import React from "react";
import { Toaster } from "react-hot-toast";
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {children}
      <Toaster position="top-center" />
    </div>
  );
}
