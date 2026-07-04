"use client"

import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"

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
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  name: z.string().min(2, "이름은 2자 이상 입력해주세요"),
  email: z.string().email("올바른 이메일 주소를 입력해주세요"),
  bio: z.string().max(200, "200자 이내로 입력해주세요").optional(),
  role: z.enum(["developer", "designer", "pm"]),
  plan: z.enum(["monthly", "yearly"]),
  notifications: z.boolean(),
  terms: z.boolean().refine((value) => value === true, {
    message: "약관에 동의해야 제출할 수 있습니다",
  }),
})

type FormValues = z.infer<typeof formSchema>

export default function GalleryFormsPage() {
  const [submitted, setSubmitted] = useState<FormValues | null>(null)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      bio: "",
      role: "developer",
      plan: "monthly",
      notifications: true,
      terms: false,
    },
  })

  async function onSubmit(values: FormValues) {
    await new Promise((resolve) => setTimeout(resolve, 400))
    setSubmitted(values)
    toast.success("제출되었습니다", {
      description: `${values.name}님, 신청이 정상적으로 접수되었습니다.`,
    })
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <Card>
        <CardHeader>
          <CardTitle>회원 가입 신청</CardTitle>
          <CardDescription>
            react-hook-form과 zod로 검증되는 실전 폼 예제입니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-6"
          >
            <FieldGroup>
              <Field data-invalid={!!errors.name}>
                <FieldLabel htmlFor="form-name">이름</FieldLabel>
                <Input
                  id="form-name"
                  placeholder="홍길동"
                  aria-invalid={!!errors.name}
                  {...register("name")}
                />
                <FieldError errors={[errors.name]} />
              </Field>

              <Field data-invalid={!!errors.email}>
                <FieldLabel htmlFor="form-email">이메일</FieldLabel>
                <Input
                  id="form-email"
                  type="email"
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                  {...register("email")}
                />
                <FieldError errors={[errors.email]} />
              </Field>

              <Field data-invalid={!!errors.bio}>
                <FieldLabel htmlFor="form-bio">자기소개</FieldLabel>
                <Textarea
                  id="form-bio"
                  placeholder="간단한 소개를 남겨주세요 (선택)"
                  aria-invalid={!!errors.bio}
                  {...register("bio")}
                />
                <FieldDescription>최대 200자까지 입력할 수 있습니다.</FieldDescription>
                <FieldError errors={[errors.bio]} />
              </Field>

              <Field>
                <FieldLabel>역할</FieldLabel>
                <Controller
                  control={control}
                  name="role"
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="developer">개발자</SelectItem>
                        <SelectItem value="designer">디자이너</SelectItem>
                        <SelectItem value="pm">기획자</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </Field>

              <Field>
                <FieldLabel>구독 플랜</FieldLabel>
                <Controller
                  control={control}
                  name="plan"
                  render={({ field }) => (
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                      className="grid-flow-col gap-4"
                    >
                      <Field orientation="horizontal">
                        <RadioGroupItem value="monthly" id="form-plan-monthly" />
                        <FieldLabel htmlFor="form-plan-monthly">월간</FieldLabel>
                      </Field>
                      <Field orientation="horizontal">
                        <RadioGroupItem value="yearly" id="form-plan-yearly" />
                        <FieldLabel htmlFor="form-plan-yearly">연간</FieldLabel>
                      </Field>
                    </RadioGroup>
                  )}
                />
              </Field>

              <Field orientation="horizontal">
                <Controller
                  control={control}
                  name="notifications"
                  render={({ field }) => (
                    <Switch
                      id="form-notifications"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
                <FieldLabel htmlFor="form-notifications">
                  이메일 알림 받기
                </FieldLabel>
              </Field>

              <FieldSeparator />

              <Field data-invalid={!!errors.terms} orientation="horizontal">
                <Controller
                  control={control}
                  name="terms"
                  render={({ field }) => (
                    <Checkbox
                      id="form-terms"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
                <FieldLabel htmlFor="form-terms">
                  (필수) 이용약관 및 개인정보 처리방침에 동의합니다
                </FieldLabel>
                <FieldError errors={[errors.terms]} />
              </Field>
            </FieldGroup>

            <Button type="submit" disabled={isSubmitting} className="w-fit">
              {isSubmitting ? "제출 중..." : "제출하기"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="h-fit">
        <CardHeader>
          <CardTitle>제출 결과</CardTitle>
          <CardDescription>
            제출된 값이 여기에 JSON 형태로 표시됩니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {submitted ? (
            <pre className="overflow-x-auto rounded-lg bg-muted p-3 text-xs">
              {JSON.stringify(submitted, null, 2)}
            </pre>
          ) : (
            <p className="text-sm text-muted-foreground">
              아직 제출된 데이터가 없습니다.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
