import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Cta() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <div className="flex flex-col items-center gap-4 rounded-2xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
        <h2 className="text-3xl font-semibold tracking-tight text-balance">
          지금 바로 프로젝트를 시작해보세요
        </h2>
        <p className="max-w-md text-primary-foreground/80 text-balance">
          갤러리 페이지에서 모든 컴포넌트를 직접 조작해보고, 필요한 부분만
          가져다 쓰세요.
        </p>
        <Button
          size="lg"
          variant="secondary"
          nativeButton={false}
          render={<Link href="/gallery" />}
        >
          갤러리 보러가기
          <ArrowRightIcon />
        </Button>
      </div>
    </section>
  )
}
