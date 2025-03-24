import type { Metadata } from "next"
import { ResetPasswordForm } from "./reset-password-form"

export const metadata: Metadata = {
  title: "Reset Password | IB Prep",
  description: "Reset your IB Prep password",
}

export default function ResetPasswordPage() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-ibprep-blue">Reset Password</h1>
        <p className="text-sm text-gray-500">Enter your new password below</p>
      </div>
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <ResetPasswordForm />
      </div>
    </div>
  )
}

