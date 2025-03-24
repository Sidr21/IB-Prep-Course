"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"
import { supabase } from "@/utils/supabase/client"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail } from "lucide-react"

export function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError(null)
    setMessage(null)

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email") as string

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      })

      if (error) {
        setError(error.message)
        return
      }

      setMessage("Check your email for the password reset link.")
    } catch (error) {
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="grid gap-6">
      {error && (
        <Alert variant="destructive" className="bg-red-50 text-red-800 border border-red-200">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {message && (
        <Alert className="bg-green-50 text-green-800 border border-green-200">
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-gray-700">
              Email
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="email"
                name="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
                required
                className="pl-10 border-gray-200 focus:border-indigo-600 focus:ring-indigo-600/20"
              />
            </div>
          </div>
          <Button
            disabled={isLoading}
            className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:opacity-90 text-white"
          >
            {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            Send Reset Link
          </Button>
        </div>
      </form>
    </div>
  )
}

