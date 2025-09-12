// lib/auth.ts
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import User from "@/lib/models/User";

export async function getUserFromToken() {
  try {
    // cookies() is sync in Next.js App Router
    const cookieStore = cookies();
    const token = (await cookieStore).get("token")?.value;

    if (!token) return null;

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
    const user = await User.findById(decoded.id).select("-password").lean();

    return user;
  } catch (err) {
    return null;
  }
}
