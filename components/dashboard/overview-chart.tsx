"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "1월", revenue: 3200, orders: 210 },
  { month: "2월", revenue: 3980, orders: 240 },
  { month: "3월", revenue: 3540, orders: 226 },
  { month: "4월", revenue: 4210, orders: 268 },
  { month: "5월", revenue: 4680, orders: 289 },
  { month: "6월", revenue: 4832, orders: 301 },
]

const chartConfig = {
  revenue: {
    label: "매출 (만원)",
    color: "var(--chart-1)",
  },
  orders: {
    label: "주문 건수",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function OverviewChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>월별 매출 추이</CardTitle>
        <CardDescription>최근 6개월간 매출과 주문 건수</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-72 w-full">
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
            <Bar dataKey="orders" fill="var(--color-orders)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
