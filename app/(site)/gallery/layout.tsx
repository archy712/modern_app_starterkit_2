"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ArrowUpRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const GALLERY_TABS = [
  { href: "/gallery", label: "쇼케이스" },
  { href: "/gallery/forms", label: "폼 예제" },
  { href: "/gallery/table", label: "테이블 예제" },
] as const

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const activeTab =
    GALLERY_TABS.find((tab) => tab.href === pathname)?.href ??
    GALLERY_TABS[0].href

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 py-10 sm:px-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          컴포넌트 갤러리
        </h1>
        <p className="text-muted-foreground">
          설치된 컴포넌트를 카테고리별로 직접 조작해볼 수 있습니다.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Tabs
          value={activeTab}
          onValueChange={(value) => router.push(String(value))}
        >
          <TabsList>
            {GALLERY_TABS.map((tab) => (
              <TabsTrigger key={tab.href} value={tab.href}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <Button
          variant="outline"
          size="sm"
          nativeButton={false}
          render={<Link href="/dashboard" />}
        >
          대시보드 예제 보기
          <ArrowUpRightIcon />
        </Button>
      </div>

      {children}
    </div>
  )
}
