"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PracticePage() {
  return (
    <main className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Practice Questions</h2>
        <p className="text-muted-foreground">
          Test your knowledge with past IB exam questions
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Mathematics HL</CardTitle>
            <CardDescription>Higher Level Mathematics Practice</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Practice with past paper questions and detailed solutions
            </p>
            <Button>Start Practice</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Physics HL</CardTitle>
            <CardDescription>Higher Level Physics Practice</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Solve physics problems with step-by-step explanations
            </p>
            <Button>Start Practice</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Chemistry HL</CardTitle>
            <CardDescription>Higher Level Chemistry Practice</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Work through chemistry questions with detailed solutions
            </p>
            <Button>Start Practice</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
} 