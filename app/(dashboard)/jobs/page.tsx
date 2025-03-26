"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function JobsPage() {
  return (
    <main className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Job Postings</h2>
        <p className="text-muted-foreground">
          Find opportunities that match your IB profile
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Software Engineer</CardTitle>
              <Badge variant="secondary">New</Badge>
            </div>
            <CardDescription>Google • Mountain View, CA</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Full-time position for recent IB graduates
            </p>
            <Button>Apply Now</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Data Analyst</CardTitle>
            <CardDescription>Microsoft • Seattle, WA</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Entry-level position in data analytics
            </p>
            <Button>Apply Now</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Research Assistant</CardTitle>
            <CardDescription>Stanford University • Palo Alto, CA</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Research position in computer science
            </p>
            <Button>Apply Now</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
} 