import React from "react";
import { TopBar } from "../ui/top-bar";
import { Navbar } from "../ui/navbar";
import { Button } from "../ui/buttons";
import Link from "next/link";

export function NotFound() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen gap-10 ">
        <h1 className="text-9xl font-bold text-warning ">404 Not Found</h1>
        <p className="text-2xl text-warning-content">
          The page you are looking for is not found
        </p>
        <Link href="/" className="text-warning">
          <Button
            variant="solid"
            size="xl"
            label="Back to Home Page"
            className="w-full sm:w-auto px-4 sm:px-10 py-4 text-base font-medium bg-primary text-white  whitespace-nowrap "
          />
        </Link>
      </div>
    </div>
  );
}
