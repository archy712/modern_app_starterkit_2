import {
  BlocksIcon,
  MoonStarIcon,
  RocketIcon,
  ShieldCheckIcon,
  TableIcon,
  WandSparklesIcon,
} from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const FEATURES = [
  {
    icon: BlocksIcon,
    title: "폭넓은 UI 컴포넌트",
    description:
      "Input, Select, Dialog, Sidebar 등 30여 개의 shadcn/ui 컴포넌트가 base-nova 스타일로 미리 설치되어 있습니다.",
  },
  {
    icon: MoonStarIcon,
    title: "다크모드 내장",
    description:
      "next-themes 기반 다크모드 토글이 레이아웃에 연결되어 있어 별도 설정 없이 바로 사용할 수 있습니다.",
  },
  {
    icon: WandSparklesIcon,
    title: "검증된 폼 처리",
    description:
      "react-hook-form과 zod 조합으로 타입 안전한 폼 검증 예제를 제공합니다.",
  },
  {
    icon: TableIcon,
    title: "실전 데이터 테이블",
    description:
      "@tanstack/react-table로 정렬·필터·페이지네이션이 동작하는 테이블 예제를 확인할 수 있습니다.",
  },
  {
    icon: RocketIcon,
    title: "대시보드 레이아웃",
    description:
      "Sidebar 컴포넌트를 활용한 대시보드 예제 페이지로 실제 서비스 구조를 빠르게 참고할 수 있습니다.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Next.js 16 준비 완료",
    description:
      "App Router, Turbopack 기본값 등 Next.js 16의 최신 규칙을 따르는 라우트 구조로 구성되어 있습니다.",
  },
] as const

export function Features() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight">
          이 스타터킷에 포함된 것들
        </h2>
        <p className="mt-2 text-muted-foreground">
          바퀴를 다시 발명하지 않도록, 검증된 라이브러리와 패턴만 골라
          담았습니다.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <Card key={title}>
            <CardHeader>
              <div className="mb-2 flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
