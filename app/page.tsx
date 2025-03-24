import { redirect } from "next/navigation"

export default function HomePage() {
  redirect("/login")

  // This won't be rendered, but TypeScript expects a return
  return null
}

