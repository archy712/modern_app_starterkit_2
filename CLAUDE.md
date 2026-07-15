# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## 프로젝트 개요

Next.js App Router 기반 모던 스타터킷. TypeScript, Tailwind CSS v4, shadcn/ui(`base-nova` 스타일) 조합. 한국어(`lang="ko"`) UI가 기본이며 컴포넌트 라벨/카피는 한글로 작성한다.

핵심 의존성 버전(2026-07 기준, 최신 여부는 `package.json` 확인): `next@16.2.10`, `react@19.2.4`, `@base-ui/react@1.6.0`, `tailwindcss@4`. 학습 데이터 시점보다 최신 메이저 버전일 수 있으므로, API 사용법이 기억과 다르면 `node_modules/next/dist/docs/`나 실제 소스를 우선 신뢰한다(`AGENTS.md` 참고).

## 명령어

```bash
npm run dev     # 개발 서버 (next dev)
npm run build   # 프로덕션 빌드
npm run start   # 빌드 결과 실행
npm run lint    # ESLint (eslint.config.mjs, flat config)
```

- 테스트 러너는 구성되어 있지 않다(테스트 스크립트/설정 없음). 테스트를 추가할 경우 러너 선택부터 필요하다.
- shadcn 컴포넌트는 `shadcn` CLI(components.json 설정 참고, style: `base-nova`, baseColor: `neutral`)로 추가/갱신한다.

## 아키텍처 핵심

### base-ui 기반 — Radix 아님

`components/ui/*`는 shadcn/ui의 겉모습이지만 내부적으로 **Radix UI가 아닌 `@base-ui/react` 프리미티브**를 감싼다(예: `components/ui/button.tsx`가 `@base-ui/react/button`을 사용). 학습 데이터에 있는 일반적인 shadcn/Radix 지식과 다음이 다르므로 주의:

- 다형성(polymorphism)은 `asChild`가 아니라 **`render` prop**으로 처리한다. 예: `<Button render={<Link href="/" />}>`, `<SidebarMenuButton render={<Link href={item.href} />}>`, `<DropdownMenuTrigger render={<SidebarMenuButton size="lg" />}>` (`components/layout/app-sidebar.tsx`, `app/(site)/gallery/layout.tsx` 참고).
- `nativeButton={false}` 같은 base-ui 전용 prop이 등장한다.
- 새 UI 프리미티브를 추가/수정할 때는 기존 `components/ui/*` 파일에서 해당 base-ui 패키지(`@base-ui/react/*`)의 사용 패턴을 먼저 확인할 것.

### Tailwind v4 + shadcn CSS 패키지

`app/globals.css`는 `@import "shadcn/tailwind.css"`로 `shadcn` npm 패키지가 제공하는 베이스 스타일을 가져온 뒤, `@theme inline`으로 디자인 토큰(`--color-*`, `--radius-*`)을 CSS 변수에 매핑한다. 색상은 라이트(`:root`)/다크(`.dark`) 블록에서 OKLCH 값으로 정의되고 `next-themes`(`components/theme-provider.tsx`, `attribute="class"`)가 `.dark` 클래스를 토글한다. 새 색상 토큰을 추가할 때는 `:root`/`.dark` 양쪽과 `@theme inline` 매핑을 함께 갱신해야 한다.

### 라우트 구조

- `app/(site)/*` — 공개 마케팅/갤러리 영역. 그룹 레이아웃(`app/(site)/layout.tsx`)이 `Header`/`Footer`를 감싼다.
  - `app/(site)/gallery/*` — 컴포넌트 쇼케이스. `gallery/layout.tsx`가 탭 내비게이션(쇼케이스/폼 예제/테이블 예제)을 그리고, 각 페이지가 실전 예제(`forms/page.tsx`: react-hook-form + zod, `table/page.tsx`: TanStack Table)를 담당한다.
- `app/dashboard/*` — 사이드바 레이아웃 예제. `SidebarProvider` + `AppSidebar`(`components/layout/app-sidebar.tsx`) + `SidebarInset` 조합으로 앱형 대시보드 셸을 구성한다. 페이지 본문은 `components/dashboard/*`의 `StatCards` / `OverviewChart`(recharts 기반 `components/ui/chart.tsx` 사용) / `RecentActivity` 3개를 조합한다.
- 두 영역의 내비게이션 항목은 각각 `components/layout/nav-items.ts`(공개 헤더용)와 `app-sidebar.tsx` 내부 `NAV_ITEMS`(대시보드 사이드바용)로 **별도 관리**된다. 메뉴 항목을 추가/변경할 때 두 곳을 모두 확인할 것.

### 폼 & 테이블 패턴

- 폼: `react-hook-form` + `zodResolver` + `components/ui/field.tsx`(`Field`, `FieldLabel`, `FieldError` 등)로 검증 UI를 구성한다. `Controller`는 네이티브 `<input>`이 아닌 커스텀 컨트롤(Select, RadioGroup, Switch, Checkbox)에만 사용한다. 참고 구현: `app/(site)/gallery/forms/page.tsx`.
- 테이블: `@tanstack/react-table`을 얇게 감싼 제네릭 `components/table/data-table.tsx`(정렬/전역 필터/페이지네이션)가 있고, 컬럼 정의는 페이지별로 분리한 `columns.tsx`에 둔다(`app/(site)/gallery/table/columns.tsx`). 새 테이블은 이 두 파일 분리 패턴을 따른다.

### 경로 별칭

`tsconfig.json`의 `@/*` 별칭과 `components.json`의 `aliases`(`@/components`, `@/components/ui`, `@/lib`, `@/hooks`, `@/lib/utils`)가 일치해야 하며, import는 항상 이 별칭을 사용한다(상대 경로 지양).

## 코드 리뷰

코드를 작성하거나 수정하는 작업을 완료했다면, 사용자가 별도로 요청하지 않아도 `code-reviewer` 서브에이전트(`.claude/agents/code-reviewer.md`)를 호출해 리뷰를 받은 뒤 결과를 사용자에게 요약해서 보고한다.
