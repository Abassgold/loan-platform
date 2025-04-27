import { deleteCookie } from "@/lib/session"
import { redirect } from "next/navigation"

export async function signOut() {
  await deleteCookie()
  redirect('/signin')
}