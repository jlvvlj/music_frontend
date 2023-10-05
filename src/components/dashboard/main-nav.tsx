import Link from "next/link"

import { cn } from "@/lib/utils"

export default function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Dashboard
      </Link>
      <Link
        href="/contracts/creation_modal"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Create Track
      </Link>
      <Link
        href="/music/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Your Tracks
      </Link>
      <Link
        href="/settings"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Settings
      </Link>
    </nav>
  )
}
