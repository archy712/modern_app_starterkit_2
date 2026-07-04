import Link from "next/link"

import { Separator } from "@/components/ui/separator"
import { NAV_ITEMS } from "@/components/layout/nav-items"

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <span className="text-sm font-medium text-foreground">
            Starter Kit
          </span>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <Separator />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Starter Kit. Next.js, TypeScript,
          Tailwind CSS, shadcn/ui로 제작되었습니다.
        </p>
      </div>
    </footer>
  )
}
