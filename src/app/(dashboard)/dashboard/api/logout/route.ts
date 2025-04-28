import { deleteCookie } from "@/lib/auth/deletCookies";
import { NextResponse } from "next/server";

export async function GET() {
    try {
      await deleteCookie();
      return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { success: false, error: error },
        { status: 500 }
      );
    }
  }