import type React from "react"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white border-b border-gray-100">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Logo />
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#" className="text-gray-500 hover:text-ibprep-blue text-sm font-medium">
                Features
              </Link>
              <Link href="#" className="text-gray-500 hover:text-ibprep-blue text-sm font-medium">
                Testimonials
              </Link>
              <Link href="#" className="text-gray-500 hover:text-ibprep-blue text-sm font-medium">
                FAQ
              </Link>
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-ibprep-blue">
                <HelpCircle className="h-5 w-5" />
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">{children}</div>
      </main>

      <footer className="bg-white py-6 border-t border-gray-100">
        <div className="container max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Logo />
            <span className="text-sm text-gray-500 ml-4">
              © {new Date().getFullYear()} IB Prep. All rights reserved.
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-ibprep-blue">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-ibprep-blue">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-ibprep-blue">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

