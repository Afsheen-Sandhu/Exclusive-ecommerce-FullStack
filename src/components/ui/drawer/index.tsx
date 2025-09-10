"use client";

import { ReactNode } from "react";
import { X } from "lucide-react";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Drawer({ isOpen, onClose, children }: DrawerProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer panel */}
      <aside
        className={`fixed top-0 left-0 w-64 h-full bg-gray-900 text-white z-50 transform transition-transform
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        <div className="p-4">{children}</div>
      </aside>
    </>
  );
}
