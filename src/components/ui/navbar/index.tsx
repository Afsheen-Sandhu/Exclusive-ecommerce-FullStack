"use client";

import { Menu } from "lucide-react";
import { Logo } from "./Logo";
import { NavLinks } from "./Navlinks";
import { SearchBar } from "./Searchbar";
import { WishlistIcon } from "./WishlistIcon";
import { CartIcon } from "./CartIcon";
import { UserMenu } from "./UserMenu";
import { ThemeToggle } from "../toggle-theme";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const mobileLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
  { name: "Sign Up", href: "/signup" },
];

export function Navbar() {
  return (
    <nav className="w-full bg-[var(--background)] text-primary shadow-sm sticky top-0 z-50 border-b border-base-300">
      <div className="mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 min-w-0 lg:w-48 xl:w-64">
            <Logo />
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex flex-1 justify-center">
            <NavLinks />
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-2">
            {/* Optional: keep wishlist/cart visible even on mobile */}
            <WishlistIcon />
            <CartIcon />
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            <SearchBar /> {/* Only shows on desktop */}
            <UserMenu />

            {/* Mobile Menu Trigger */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="lg:hidden p-2 text-primary hover:bg-base-200 rounded-md transition-colors">
                  <Menu className="w-5 h-5" />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-48 right-0 mt-2 lg:hidden ">
                <DropdownMenuItem asChild>
                  <div className="w-full">
                    <ThemeToggle /> {/* Mobile-friendly theme toggle */}
                  </div>
                </DropdownMenuItem>
                {mobileLinks.map((link, idx) => (
                  <DropdownMenuItem key={idx} asChild>
                    <Link href={link.href} className="w-full">
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
                
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
