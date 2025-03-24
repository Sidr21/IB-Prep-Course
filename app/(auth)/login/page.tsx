import type { Metadata } from "next"
import Link from "next/link"
import { redirect } from "next/navigation"
import { createClient } from "@/utils/supabase/server"
import { LoginForm } from "./login-form"

export const metadata: Metadata = {
  title: "Login | IB Prep",
  description: "Login to your IB Prep account",
}

export default async function LoginPage() {
  const supabase = await createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    redirect("/dashboard")
  }

  return (
    <div className="w-full">
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-8 md:p-10">
          <div className="flex flex-col space-y-2 text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Welcome back</h1>
            <p className="text-gray-500">Enter your credentials to access your account</p>
          </div>

          <LoginForm />

          <div className="mt-6 text-center space-y-2">
            <p className="text-sm text-gray-500">
              <Link href="/forgot-password" className="text-indigo-600 hover:underline">
                Forgot your password?
              </Link>
            </p>
            <p className="text-sm text-gray-500">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-indigo-600 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600/5 to-cyan-600/5 p-4 text-center border-t border-gray-100">
          <p className="text-sm text-gray-600">
            By logging in, you agree to our{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

