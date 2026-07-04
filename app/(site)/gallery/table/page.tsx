import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DataTable } from "@/components/table/data-table"
import { columns, type Member } from "./columns"

const MEMBERS: Member[] = [
  { id: "1", name: "김민준", email: "minjun@example.com", role: "개발자", status: "활성", joinedAt: "2024-01-12" },
  { id: "2", name: "이서연", email: "seoyeon@example.com", role: "디자이너", status: "활성", joinedAt: "2024-02-03" },
  { id: "3", name: "박도윤", email: "doyoon@example.com", role: "기획자", status: "대기", joinedAt: "2024-02-20" },
  { id: "4", name: "최지우", email: "jiwoo@example.com", role: "개발자", status: "비활성", joinedAt: "2023-11-08" },
  { id: "5", name: "정하은", email: "haeun@example.com", role: "디자이너", status: "활성", joinedAt: "2024-03-15" },
  { id: "6", name: "강시우", email: "siwoo@example.com", role: "개발자", status: "대기", joinedAt: "2024-04-02" },
  { id: "7", name: "조은서", email: "eunseo@example.com", role: "기획자", status: "활성", joinedAt: "2023-09-27" },
  { id: "8", name: "윤아인", email: "ain@example.com", role: "개발자", status: "비활성", joinedAt: "2023-12-19" },
]

export default function GalleryTablePage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>구성원 목록</CardTitle>
        <CardDescription>
          @tanstack/react-table로 정렬, 검색, 페이지네이션이 동작하는 테이블
          예제입니다. 열 제목을 클릭하면 정렬되고, 검색창에 입력하면 전체
          컬럼에서 필터링됩니다.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable
          columns={columns}
          data={MEMBERS}
          searchColumnId="구성원"
          searchPlaceholder="이름, 이메일로 검색..."
        />
      </CardContent>
    </Card>
  )
}
