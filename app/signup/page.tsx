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
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const signupSchema = z
  .object({
    email: z
      .string()
      .min(1, "이메일을 입력해주세요")
      .email("올바른 이메일 주소를 입력해주세요"),
    password: z.string().min(8, "비밀번호는 8자 이상 입력해주세요"),
    passwordConfirm: z.string().min(1, "비밀번호를 다시 입력해주세요"),
  })
  .refine((values) => values.password === values.passwordConfirm, {
    message: "비밀번호가 일치하지 않습니다",
    path: ["passwordConfirm"],
  })

type SignupValues = z.infer<typeof signupSchema>

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: { email: "", password: "", passwordConfirm: "" },
  })

  async function onSubmit(values: SignupValues) {
    await new Promise((resolve) => setTimeout(resolve, 400))
    toast.success("회원가입이 완료되었습니다", {
      description: `${values.email}(으)로 가입되었습니다.`,
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
            <CardTitle className="text-xl">회원 가입</CardTitle>
            <CardDescription>
              이메일과 비밀번호를 입력해 계정을 만드세요.
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
                  <FieldLabel htmlFor="signup-email">이메일</FieldLabel>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    {...register("email")}
                  />
                  <FieldError errors={[errors.email]} />
                </Field>

                <Field data-invalid={!!errors.password}>
                  <FieldLabel htmlFor="signup-password">비밀번호</FieldLabel>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="********"
                    autoComplete="new-password"
                    aria-invalid={!!errors.password}
                    {...register("password")}
                  />
                  <FieldError errors={[errors.password]} />
                </Field>

                <Field data-invalid={!!errors.passwordConfirm}>
                  <FieldLabel htmlFor="signup-password-confirm">
                    비밀번호 확인
                  </FieldLabel>
                  <Input
                    id="signup-password-confirm"
                    type="password"
                    placeholder="********"
                    autoComplete="new-password"
                    aria-invalid={!!errors.passwordConfirm}
                    {...register("passwordConfirm")}
                  />
                  <FieldError errors={[errors.passwordConfirm]} />
                </Field>

                <Field>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "가입 중..." : "회원가입 하기"}
                  </Button>
                  <FieldDescription className="text-center">
                    이미 계정이 있으신가요?{" "}
                    <Link href="/login">로그인</Link>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
