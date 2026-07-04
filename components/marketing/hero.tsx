import Link from "next/link"
import { ArrowRightIcon, SparklesIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 sm:py-28">
      <Badge variant="secondary" className="gap-1.5">
        <SparklesIcon className="size-3" />
        Next.js 16 + shadcn/ui 스타터킷
      </Badge>
      <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        빠르게 시작하는 모던 웹 애플리케이션
      </h1>
      <p className="max-w-xl text-lg text-muted-foreground text-balance">
        기초 UI 컴포넌트, 레이아웃, 다크모드, 폼과 테이블 예제까지 미리
        갖춰진 스타터킷으로 새 프로젝트를 바로 시작하세요.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          size="lg"
          nativeButton={false}
          render={<Link href="/gallery" />}
        >
          컴포넌트 둘러보기
          <ArrowRightIcon />
        </Button>
        <Button
          size="lg"
          variant="outline"
          nativeButton={false}
          render={<Link href="/dashboard" />}
        >
          대시보드 예제 보기
        </Button>
      </div>
    </section>
  )
}
