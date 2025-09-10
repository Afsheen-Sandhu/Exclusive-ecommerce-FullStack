"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Package, Users, Menu } from "lucide-react";
import { useState } from "react";
import Drawer from "@/components/ui/drawer"; // reusable drawer component

const links = [
  { name: "Analytics", href: "/admin/dashboard", icon: <Home size={18} /> },
  {
    name: "Product",
    href: "/admin/dashboard/list",
    icon: <Package size={18} />,
  },
  { name: "Users", href: "/admin/users", icon: <Users size={18} /> },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuContent = (
    <nav className="flex flex-col space-y-2">
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)} // close drawer on click
            className={`flex items-center gap-2 px-3 py-2  transition border-l-4
              ${
                active
                  ? "bg-gray-700 font-semibold border-blue-500"
                  : "hover:bg-gray-800 border-transparent"
              }`}
          >
            {link.icon}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Sidebar for large screens */}
      <aside className="hidden md:flex w-64 bg-primary text-white min-h-screen p-4 flex-col">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        {menuContent}
      </aside>

      {/* Hamburger for small screens */}
      <div className="md:hidden flex items-center justify-between bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold">Admin Panel</h2>
        <button onClick={() => setIsOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Drawer for small screens */}
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        {menuContent}
      </Drawer>
    </>
  );
}
