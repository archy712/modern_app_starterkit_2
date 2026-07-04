import { TrendingDownIcon, TrendingUpIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const STATS = [
  {
    label: "총 매출",
    value: "₩48,320,000",
    delta: "+12.4%",
    trend: "up" as const,
    caption: "지난달 대비 상승",
  },
  {
    label: "신규 가입자",
    value: "1,284명",
    delta: "+4.1%",
    trend: "up" as const,
    caption: "이번 달 누적 가입자",
  },
  {
    label: "활성 사용자",
    value: "9,842명",
    delta: "-1.8%",
    trend: "down" as const,
    caption: "최근 7일 기준",
  },
  {
    label: "전환율",
    value: "3.2%",
    delta: "+0.6%",
    trend: "up" as const,
    caption: "방문 대비 결제 전환",
  },
]

export function StatCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {STATS.map((stat) => (
        <Card key={stat.label}>
          <CardHeader>
            <CardDescription>{stat.label}</CardDescription>
            <CardTitle className="text-2xl">{stat.value}</CardTitle>
            <CardAction>
              <Badge variant={stat.trend === "up" ? "secondary" : "destructive"}>
                {stat.trend === "up" ? (
                  <TrendingUpIcon />
                ) : (
                  <TrendingDownIcon />
                )}
                {stat.delta}
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter>
            <p className="text-xs text-muted-foreground">{stat.caption}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
