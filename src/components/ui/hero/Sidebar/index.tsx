"use client";
import React, { useState } from "react";
import { sidebarData } from "./SidebarData";
import { Menu } from "lucide-react";
import Drawer from "@/components/ui/drawer"; // reusable drawer

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuContent = (
    <div className="flex flex-col gap-2">
      {sidebarData.map((item, index) => (
        <div key={index} className="cursor-pointer hover:text-primary hover:underline">
          <a
            href={item.path}
            className="flex justify-between items-center w-full"
            onClick={() => setIsOpen(false)} // close drawer on click
          >
            <span className="text-sm sm:text-base md:text-lg">{item.title}</span>
            {item.icon && (
              <span className="ml-2 sm:ml-4 md:ml-6 lg:ml-8 text-sm sm:text-base md:text-lg lg:text-xl">
                {item.icon}
              </span>
            )}
          </a>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Sidebar for large screens */}
      <aside className="hidden md:flex w-64 flex-col gap-2 px-4 py-3 bg-[var(--background)] text-secondary">
        {menuContent}
      </aside>

      {/* Hamburger button for mobile */}
      <div className="md:hidden flex justify-start px-4 py-2 bg-[var(--background)]">
        <button
          onClick={() => setIsOpen(true)}
          className="text-secondary flex items-center gap-6"
        >
          <Menu size={24} />
          <span className="text-sm sm:text-base font-medium">Open Sidebar</span>

        </button>
      </div>

      {/* Drawer for mobile */}
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {menuContent}
      </Drawer>
    </>
  );
};

export default Sidebar;
