// app/api/auth/me/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/mongodb";
import { getUserFromToken } from "@/lib/auth";

export async function GET() {
  try {
    await connectDB();
    const user = await getUserFromToken();

    if (!user) return NextResponse.json({ user: null }, { status: 401 });
    return NextResponse.json({ user });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
