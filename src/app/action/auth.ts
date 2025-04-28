import { deleteCookie } from "@/lib/auth/session"
import { redirect } from "next/navigation"

export async function signOut() {
  await deleteCookie()
  redirect('/signin')
}