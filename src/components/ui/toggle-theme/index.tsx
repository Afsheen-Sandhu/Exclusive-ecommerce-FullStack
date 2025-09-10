"use client";
import { useTheme } from "next-themes"; // if you’re using next-themes
import { Sun, Moon } from "lucide-react";
import { Button } from "../buttons";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
   const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a skeleton
  }

  return (
    <button
  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
  className="p-2 rounded-full text-primary hover:bg-base transition hover:text-primary-focus"
>
  {theme === "light" ? (
    <Moon className=" w-5 h-5" />
  ) : (
    <Sun className="w-5 h-5" />
  )}
</button>
  );
}
