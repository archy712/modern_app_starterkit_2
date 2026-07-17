"use client"

import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { SquareIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const loginSchema = z.object({
  email: z.string().min(1, "이메일을 입력해주세요").email("올바른 이메일 주소를 입력해주세요"),
  password: z.string().min(8, "비밀번호는 8자 이상 입력해주세요"),
})

type LoginValues = z.infer<typeof loginSchema>

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  })

  async function onSubmit(values: LoginValues) {
    await new Promise((resolve) => setTimeout(resolve, 400))
    toast.success("로그인되었습니다", {
      description: `${values.email}(으)로 로그인했습니다.`,
    })
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center bg-muted/30 p-4 sm:p-6">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 font-heading font-semibold"
        >
          <SquareIcon className="size-5 fill-primary text-primary" />
          <span>Starter Kit</span>
        </Link>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">로그인</CardTitle>
            <CardDescription>
              이메일과 비밀번호를 입력해 로그인하세요.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="flex flex-col gap-6"
            >
              <FieldGroup>
                <Field data-invalid={!!errors.email}>
                  <FieldLabel htmlFor="login-email">이메일</FieldLabel>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    {...register("email")}
                  />
                  <FieldError errors={[errors.email]} />
                </Field>

                <Field data-invalid={!!errors.password}>
                  <FieldLabel htmlFor="login-password">비밀번호</FieldLabel>
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="********"
                    autoComplete="current-password"
                    aria-invalid={!!errors.password}
                    {...register("password")}
                  />
                  <FieldError errors={[errors.password]} />
                </Field>

                <Field className="gap-3">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "로그인 중..." : "로그인 하기"}
                  </Button>
                  <Button
                    variant="outline"
                    nativeButton={false}
                    render={<Link href="/signup" />}
                  >
                    회원 가입
                  </Button>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
