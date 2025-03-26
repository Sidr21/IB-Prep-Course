"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function InterviewsPage() {
  return (
    <main className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Mock Interviews</h2>
        <p className="text-muted-foreground">
          Practice with AI-powered mock interviews
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Technical Interview</CardTitle>
              <Badge variant="secondary">Popular</Badge>
            </div>
            <CardDescription>Software Engineering Interview Practice</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Practice coding problems and system design questions
            </p>
            <Button>Start Interview</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Behavioral Interview</CardTitle>
            <CardDescription>Professional Skills Assessment</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Practice common behavioral questions and scenarios
            </p>
            <Button>Start Interview</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Case Study Interview</CardTitle>
            <CardDescription>Business Problem Solving</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Work through real-world business scenarios
            </p>
            <Button>Start Interview</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
} 