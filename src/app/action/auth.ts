import { deleteCookie } from "@/lib/auth/deletCookies"
import { redirect } from "next/navigation"

export async function signOut() {
  await deleteCookie()
  redirect('/signin')
}