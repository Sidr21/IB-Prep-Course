"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ModulesPage() {
  return (
    <main className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Learning Modules</h2>
        <p className="text-muted-foreground">
          Master IB concepts through interactive learning modules
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Mathematics</CardTitle>
            <CardDescription>Core mathematical concepts and applications</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Explore calculus, algebra, and statistics fundamentals
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Physics</CardTitle>
            <CardDescription>Classical and modern physics principles</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Learn about mechanics, thermodynamics, and quantum physics
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Chemistry</CardTitle>
            <CardDescription>Chemical principles and reactions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Study atomic structure, bonding, and chemical processes
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
} 