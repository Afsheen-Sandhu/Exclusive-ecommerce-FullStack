"use client";
import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";

export function SearchBar({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchValue.trim())}`);
      setSearchValue("");
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Search */}
      <div className="hidden md:flex">
        <form ref={searchRef} onSubmit={handleSubmit} className="relative flex items-center">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="p-1 sm:p-2 hover:bg-base-200 rounded-full transition"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </button>

          {isOpen && (
            <input
              type="text"
              placeholder="Search products..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="absolute right-0 top-0 mt-0 sm:mt-0 w-36 sm:w-64 px-2 sm:px-3 py-1 sm:py-2 bg-base-200 border border-base-300 text-[0.7rem] sm:text-sm outline-none rounded transition-all duration-300"
            />
          )}
        </form>
      </div>

      {/* Mobile Search */}
      <div className="flex md:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-full hover:bg-base-200 transition"
        >
          <Search className="w-4 h-4 text-primary" />
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
            <form
              ref={searchRef}
              onSubmit={handleSubmit}
              className="relative w-full max-w-md"
            >
              <input
                type="text"
                autoFocus
                placeholder="Search products..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full px-4 py-3 rounded-lg text-sm sm:text-base outline-none border border-base-300 bg-base-100"
              />
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-primary"
              >
                <X className="w-5 h-5" />
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
