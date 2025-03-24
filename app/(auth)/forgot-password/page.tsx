import type { Metadata } from "next"
import Link from "next/link"
import { ForgotPasswordForm } from "./forgot-password-form"

export const metadata: Metadata = {
  title: "Forgot Password | IB Prep",
  description: "Reset your IB Prep password",
}

export default function ForgotPasswordPage() {
  return (
    <div className="w-full">
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-8 md:p-10">
          <div className="flex flex-col space-y-2 text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Forgot Password</h1>
            <p className="text-gray-500">Enter your email address and we'll send you a link to reset your password</p>
          </div>

          <ForgotPasswordForm />

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Remember your password?{" "}
              <Link href="/login" className="text-ibprep-blue hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

