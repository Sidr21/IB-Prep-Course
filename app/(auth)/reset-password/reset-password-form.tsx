"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"
import { supabase } from "@/utils/supabase/client"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Lock } from "lucide-react"

export function ResetPasswordForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(event.currentTarget)
    const password = formData.get("password") as string

    try {
      const { error } = await supabase.auth.updateUser({
        password,
      })

      if (error) {
        setError(error.message)
        return
      }

      router.push("/login")
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
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="password" className="text-gray-700">
              New Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="password"
                name="password"
                type="password"
                autoCapitalize="none"
                autoComplete="new-password"
                disabled={isLoading}
                required
                minLength={6}
                className="pl-10 border-gray-200 focus:border-indigo-600 focus:ring-indigo-600/20"
              />
            </div>
          </div>
          <Button
            disabled={isLoading}
            className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:opacity-90 text-white"
          >
            {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            Reset Password
          </Button>
        </div>
      </form>
    </div>
  )
}

