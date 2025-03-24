import { createClient } from "@/utils/supabase/server"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get("code")

    // If there's no code, redirect to login
    if (!code) {
      return NextResponse.redirect(new URL("/login?error=missing_code", request.url))
    }

    const supabase = await createClient()

    // Exchange the code for a session
    await supabase.auth.exchangeCodeForSession(code)

    // Redirect to dashboard
    return NextResponse.redirect(new URL("/dashboard", request.url))
  } catch (error) {
    console.error("Error in auth callback:", error)
    return NextResponse.redirect(new URL("/login?error=callback_error", request.url))
  }
}

