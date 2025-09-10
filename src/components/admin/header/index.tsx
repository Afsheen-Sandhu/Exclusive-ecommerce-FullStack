"use client";
import { ThemeToggle } from "@/components/ui/toggle-theme";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import { UserMenu } from "@/components/ui/navbar/UserMenu";

export default function Header() {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const res = await axios.post("/api/auth/logout");

      if (res.status === 200) {
        toast.success("Logged out successfully");

        // delay redirect so user can see toast
        setTimeout(() => {
          router.push("/login");
        }, 1200);
      } else {
        toast.error("Logout failed");
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <header className="flex items-center justify-between px-8 py-4 border-b shadow-sm">
      <Link href="/" className="text-2xl font-bold tracking-wide text-primary">
        <h1 className="text-2xl font-bold tracking-wide text-primary">
          Exclusive
        </h1>
      </Link>

      <div className="flex items-center gap-6 relative">
        <ThemeToggle />
        <UserMenu />
      </div>
    </header>
  );
}
