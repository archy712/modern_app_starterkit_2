"use client"

import type { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { DataTableColumnHeader } from "@/components/table/data-table-column-header"

export type Member = {
  id: string
  name: string
  email: string
  role: "개발자" | "디자이너" | "기획자"
  status: "활성" | "대기" | "비활성"
  joinedAt: string
}

export const columns: ColumnDef<Member>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="이름" />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="이메일" />
    ),
  },
  {
    accessorKey: "role",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="역할" />
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="상태" />
    ),
    cell: ({ row }) => {
      const status = row.getValue<Member["status"]>("status")
      const variant =
        status === "활성"
          ? "default"
          : status === "대기"
            ? "secondary"
            : "outline"
      return <Badge variant={variant}>{status}</Badge>
    },
  },
  {
    accessorKey: "joinedAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="가입일" />
    ),
  },
]
