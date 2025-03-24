import type { Metadata } from "next"
import Link from "next/link"
import { redirect } from "next/navigation"
import { createClient } from "@/utils/supabase/server"
import { SignUpForm } from "./signup-form"

export const metadata: Metadata = {
  title: "Sign Up | IB Prep",
  description: "Create a new IB Prep account",
}

export default async function SignUpPage() {
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
            <div className="inline-block mx-auto rounded-full bg-indigo-50 px-3 py-1 text-xs text-indigo-600 mb-2">
              100% Free • No Credit Card Required
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Create an account</h1>
            <p className="text-gray-500">Enter your details below to create your account</p>
          </div>

          <SignUpForm />

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <Link href="/login" className="text-indigo-600 hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600/5 to-cyan-600/5 p-4 text-center border-t border-gray-100">
          <p className="text-sm text-gray-600">
            By signing up, you agree to our{" "}
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

