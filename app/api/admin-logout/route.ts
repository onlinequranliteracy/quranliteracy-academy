import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  // Delete the session cookie
  cookies().set("admin_auth", "", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    expires: new Date(0), // expire immediately
    path: "/",
  });

  return NextResponse.json({ success: true });
}
