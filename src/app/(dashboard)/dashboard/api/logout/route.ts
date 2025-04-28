import { deleteCookie } from "@/lib/auth/session";
import { NextResponse } from "next/server";

export async function GET(){
     await deleteCookie()
    return NextResponse.json({ success: true }, { status: 200 })
}