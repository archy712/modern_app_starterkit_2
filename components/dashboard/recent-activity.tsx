import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const ACTIVITIES = [
  { id: "ORD-1042", customer: "김민준", amount: "₩128,000", status: "완료" as const },
  { id: "ORD-1041", customer: "이서연", amount: "₩64,000", status: "처리중" as const },
  { id: "ORD-1040", customer: "박도윤", amount: "₩256,000", status: "완료" as const },
  { id: "ORD-1039", customer: "최지우", amount: "₩32,000", status: "취소" as const },
  { id: "ORD-1038", customer: "정하은", amount: "₩96,000", status: "완료" as const },
]

const STATUS_VARIANT = {
  완료: "secondary",
  처리중: "outline",
  취소: "destructive",
} as const

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>최근 주문</CardTitle>
        <CardDescription>가장 최근 접수된 주문 5건입니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>주문번호</TableHead>
              <TableHead>고객명</TableHead>
              <TableHead>금액</TableHead>
              <TableHead className="text-right">상태</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ACTIVITIES.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell className="font-medium">{activity.id}</TableCell>
                <TableCell>{activity.customer}</TableCell>
                <TableCell>{activity.amount}</TableCell>
                <TableCell className="text-right">
                  <Badge variant={STATUS_VARIANT[activity.status]}>
                    {activity.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
