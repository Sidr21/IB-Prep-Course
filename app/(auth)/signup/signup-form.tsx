"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"
import { supabase } from "@/utils/supabase/client"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, Lock } from "lucide-react"

export function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isGoogleLoading, setIsGoogleLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError(null)
    setMessage(null)

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) {
        setError(error.message)
        return
      }

      setMessage("Check your email for the confirmation link.")
    } catch (error) {
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  async function signUpWithGoogle() {
    setIsGoogleLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) {
        setError(error.message)
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setIsGoogleLoading(false)
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
                disabled={isLoading || isGoogleLoading}
                required
                className="pl-10 border-gray-200 focus:border-indigo-600 focus:ring-indigo-600/20"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password" className="text-gray-700">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="password"
                name="password"
                type="password"
                autoCapitalize="none"
                autoComplete="new-password"
                disabled={isLoading || isGoogleLoading}
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
            Sign up free
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-500">Or continue with</span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        disabled={isLoading || isGoogleLoading}
        onClick={signUpWithGoogle}
        className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 flex items-center justify-center"
      >
        {isGoogleLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4 text-gray-700" />
        )}
        <span className="text-gray-700">Google</span>
      </Button>
    </div>
  )
}

