"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { User, LogIn } from "lucide-react";
import axios from "axios";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function UserMenu() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Fetch logged-in user
  const fetchUser = async () => {
    try {
      const res = await axios.get("/api/auth/me", { withCredentials: true });
      setUser(res.data.user);
    } catch {
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [pathname]);

  const handleLogout = async () => {
    await axios.post("/api/auth/logout", {}, { withCredentials: true });
    setUser(null);
    router.push("/login");
  };

  // If no user → show login icon
  if (!user) {
    return (
      <LogIn
        className="w-4 h-4 sm:w-5 sm:h-5 text-primary cursor-pointer"
        onClick={() => router.push("/login")}
        
      />
    );
  }

  // If logged in → show dropdown with avatar
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <img
          src="/av1.png"
          alt="User Avatar"
          className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border cursor-pointer"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 sm:w-44">
        <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => router.push("/profile")}>
          Profile
        </DropdownMenuItem>

        {user.role === "admin" && (
          <DropdownMenuItem onClick={() => router.push("/admin/dashboard")}>
            Dashboard
          </DropdownMenuItem>
        )}

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={handleLogout} className="text-red-500">
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
