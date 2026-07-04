"use client"

import { useState } from "react"
import { toast } from "sonner"
import { BellIcon, InfoIcon, UserIcon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function ShowcaseSection({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap items-start gap-6">
        {children}
      </CardContent>
    </Card>
  )
}

export default function GalleryShowcasePage() {
  const [sliderValue, setSliderValue] = useState([40])
  const [progressValue] = useState(66)
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="flex flex-col gap-6">
      <ShowcaseSection
        title="기초 입력 컴포넌트"
        description="Input, Select, Checkbox 등 폼에서 가장 많이 쓰이는 요소들입니다."
      >
        <Field className="w-64">
          <FieldLabel htmlFor="showcase-input">이름</FieldLabel>
          <Input id="showcase-input" placeholder="홍길동" />
          <FieldDescription>실시간으로 값이 반영됩니다.</FieldDescription>
        </Field>

        <Field className="w-64">
          <FieldLabel htmlFor="showcase-textarea">메모</FieldLabel>
          <Textarea id="showcase-textarea" placeholder="자유롭게 입력하세요" />
        </Field>

        <Field className="w-48">
          <FieldLabel>역할</FieldLabel>
          <Select defaultValue="developer">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="developer">개발자</SelectItem>
              <SelectItem value="designer">디자이너</SelectItem>
              <SelectItem value="pm">기획자</SelectItem>
            </SelectContent>
          </Select>
        </Field>

        <div className="flex flex-col gap-3">
          <Field orientation="horizontal">
            <Checkbox id="showcase-checkbox" defaultChecked />
            <FieldLabel htmlFor="showcase-checkbox">이용약관에 동의합니다</FieldLabel>
          </Field>

          <RadioGroup defaultValue="monthly" className="grid-flow-col gap-4">
            <Field orientation="horizontal">
              <RadioGroupItem value="monthly" id="showcase-monthly" />
              <FieldLabel htmlFor="showcase-monthly">월간</FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <RadioGroupItem value="yearly" id="showcase-yearly" />
              <FieldLabel htmlFor="showcase-yearly">연간</FieldLabel>
            </Field>
          </RadioGroup>

          <Field orientation="horizontal">
            <Switch id="showcase-switch" defaultChecked />
            <FieldLabel htmlFor="showcase-switch">알림 받기</FieldLabel>
          </Field>
        </div>

        <div className="flex w-56 flex-col gap-2">
          <FieldLabel>
            음량 <span className="text-muted-foreground">{sliderValue[0]}</span>
          </FieldLabel>
          <Slider
            value={sliderValue}
            onValueChange={(value) =>
              setSliderValue(Array.isArray(value) ? [...value] : [value])
            }
            max={100}
            step={1}
          />
        </div>

        <div className="flex flex-col gap-2">
          <FieldLabel>정렬</FieldLabel>
          <ToggleGroup defaultValue={["left"]} variant="outline">
            <ToggleGroupItem value="left">왼쪽</ToggleGroupItem>
            <ToggleGroupItem value="center">가운데</ToggleGroupItem>
            <ToggleGroupItem value="right">오른쪽</ToggleGroupItem>
          </ToggleGroup>
          <Toggle aria-label="즐겨찾기 토글" className="w-fit">
            즐겨찾기
          </Toggle>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="피드백 컴포넌트"
        description="상태, 진행률, 알림을 사용자에게 전달합니다."
      >
        <Alert className="w-full max-w-sm">
          <InfoIcon />
          <AlertTitle>업데이트 안내</AlertTitle>
          <AlertDescription>
            새로운 기능이 추가되었습니다. 자세한 내용을 확인해보세요.
          </AlertDescription>
        </Alert>

        <div className="flex flex-wrap items-center gap-2">
          <Badge>기본</Badge>
          <Badge variant="secondary">보조</Badge>
          <Badge variant="outline">아웃라인</Badge>
          <Badge variant="destructive">위험</Badge>
        </div>

        <div className="flex w-56 flex-col gap-2">
          <FieldLabel>진행률 {progressValue}%</FieldLabel>
          <Progress value={progressValue} />
        </div>

        <div className="flex flex-col gap-2">
          <FieldLabel>스켈레톤</FieldLabel>
          <div className="flex items-center gap-3">
            <Skeleton className="size-10 rounded-full" />
            <div className="flex flex-col gap-1.5">
              <Skeleton className="h-3 w-32" />
              <Skeleton className="h-3 w-20" />
            </div>
          </div>
        </div>

        <Button
          variant="outline"
          onClick={() =>
            toast.success("저장되었습니다", {
              description: "변경 사항이 정상적으로 반영되었습니다.",
            })
          }
        >
          토스트 알림 띄우기
        </Button>
      </ShowcaseSection>

      <ShowcaseSection
        title="오버레이 컴포넌트"
        description="Dialog, Popover, Tooltip 등 사용자 흐름을 잠시 멈추거나 보조 정보를 보여줍니다."
      >
        <Dialog>
          <DialogTrigger render={<Button variant="outline" />}>
            다이얼로그 열기
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>프로필 수정</DialogTitle>
              <DialogDescription>
                변경 사항은 저장 버튼을 눌러야 반영됩니다.
              </DialogDescription>
            </DialogHeader>
            <Field>
              <FieldLabel htmlFor="dialog-name">이름</FieldLabel>
              <Input id="dialog-name" defaultValue="홍길동" />
            </Field>
            <DialogFooter showCloseButton>
              <Button>저장</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <AlertDialog>
          <AlertDialogTrigger render={<Button variant="destructive" />}>
            계정 삭제
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>정말 삭제하시겠습니까?</AlertDialogTitle>
              <AlertDialogDescription>
                이 작업은 되돌릴 수 없습니다.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>취소</AlertDialogCancel>
              <AlertDialogAction>삭제</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Popover>
          <PopoverTrigger render={<Button variant="outline" />}>
            팝오버 열기
          </PopoverTrigger>
          <PopoverContent>
            <p className="text-sm">
              팝오버 안에는 어떤 콘텐츠든 자유롭게 배치할 수 있습니다.
            </p>
          </PopoverContent>
        </Popover>

        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="outline" size="icon">
                <BellIcon />
              </Button>
            }
          />
          <TooltipContent>알림 확인</TooltipContent>
        </Tooltip>

        <HoverCard>
          <HoverCardTrigger
            render={
              <Button variant="link" className="px-0">
                @nextjs
              </Button>
            }
          />
          <HoverCardContent>
            <div className="flex gap-3">
              <Avatar>
                <AvatarFallback>N</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-medium">Next.js</p>
                <p className="text-sm text-muted-foreground">
                  The React Framework for the Web.
                </p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </ShowcaseSection>

      <ShowcaseSection
        title="네비게이션 컴포넌트"
        description="위치 안내와 메뉴 탐색을 돕는 컴포넌트입니다."
      >
        <div className="flex w-full flex-col gap-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">홈</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/gallery">갤러리</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>쇼케이스</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Separator />

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrentPage((p) => Math.max(1, p - 1))
                  }}
                />
              </PaginationItem>
              {[1, 2, 3].map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === page}
                    onClick={(e) => {
                      e.preventDefault()
                      setCurrentPage(page)
                    }}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrentPage((p) => Math.min(3, p + 1))
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>

          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="outline" className="w-fit">
                  <UserIcon />
                  계정 메뉴
                </Button>
              }
            />
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuLabel>내 계정</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>프로필</DropdownMenuItem>
                <DropdownMenuItem>설정</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  로그아웃
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </ShowcaseSection>
    </div>
  )
}
