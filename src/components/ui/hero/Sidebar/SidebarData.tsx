// SidebarData.ts
import { ReactNode } from "react";

export interface SidebarItem {
  title: string;
  path: string;
  icon?: ReactNode; // ReactNode works perfectly
}

export const sidebarData: SidebarItem[] = [
  {
    title: "Woman’s Fashion",
    path: "/womens-fashion",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m18.78 11.37l-4.78-6a1 1 0 0 0-1.41-.15a1 1 0 0 0-.15 1.41L16.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 13 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27"
        />
        <path
          fill="currentColor"
          d="M7 5.37a1 1 0 0 0-1.61 1.26L9.71 12l-4.48 5.36a1 1 0 0 0 .13 1.41A1 1 0 0 0 6 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 0-1.27Z"
        />
      </svg>
    ),
  },
  {
    title: "Men’s Fashion",
    path: "/mens-fashion",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m18.78 11.37l-4.78-6a1 1 0 0 0-1.41-.15a1 1 0 0 0-.15 1.41L16.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 13 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27"
        />
        <path
          fill="currentColor"
          d="M7 5.37a1 1 0 0 0-1.61 1.26L9.71 12l-4.48 5.36a1 1 0 0 0 .13 1.41A1 1 0 0 0 6 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 0-1.27Z"
        />
      </svg>
    ),
  },
  { title: "Electronics", path: "/electronics" },
  { title: "Home & Lifestyle", path: "/home-lifestyle" },
  { title: "Medicine", path: "/medicine" },
  { title: "Sports & Outdoor", path: "/sports-outdoor" },
  { title: "Baby’s & Toys", path: "/babys-toys" },
  { title: "Groceries & Pets", path: "/groceries-pets" },
  { title: "Health & Beauty", path: "/health-beauty" },
];
