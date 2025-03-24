"use client"

import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const { user, signOut, isLoading } = useAuth()
  const router = useRouter()

  // Redirect if not authenticated
  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  if (isLoading || !user) {
    return null
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <Button onClick={signOut} className="bg-red-600 hover:bg-red-700 text-white">
        Sign Out
      </Button>
    </div>
  )
}

