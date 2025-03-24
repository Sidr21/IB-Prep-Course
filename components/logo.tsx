import Link from "next/link"
import { Grid } from "lucide-react"

interface LogoProps {
  href?: string
}

export function Logo({ href = "/login" }: LogoProps) {
  return (
    <Link href={href} className="flex items-center gap-2">
      <div className="flex items-center justify-center w-10 h-10 rounded-md bg-black text-white">
        <Grid size={20} />
      </div>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold text-sidebar-foreground">IB Prep</span>
        <span className="truncate text-xs text-muted-foreground">Enterprise</span>
      </div>
    </Link>
  )
}

