// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const PUBLIC_ROUTES = [
  "/",              // home
  "/shop",
  "/contact",
  "/about",
  "/product",       // product listing
  /^\/product\/[^/]+$/, // product/[id] (dynamic route regex)
  "/signup",
  "/login",
];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ✅ check if route is public
  const isPublic = PUBLIC_ROUTES.some((route) => {
    if (route instanceof RegExp) return route.test(pathname);
    return route === pathname;
  });

  // ✅ read token from cookies
  const token = req.cookies.get("token")?.value;

  if (!isPublic && !token) {
    // not logged in and trying to access protected route → redirect to login
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  if ((pathname === "/login" || pathname === "/signup") && token) {
    // already logged in → redirect to dashboard
    const dashboardUrl = new URL("/", req.url);
    return NextResponse.redirect(dashboardUrl);
  }

  return NextResponse.next();
}

// ✅ run middleware on all routes
export const config = {
  matcher: [
    "/admin/:path*",
    "/dashboard/:path*",
    "/profile/:path*",
    "/login",
    "/signup",
  ],
};
