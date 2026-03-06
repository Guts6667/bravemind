# Engineering Standards

## 1) Purpose
This document defines coding standards for BraveMind to keep the codebase maintainable, type-safe, and consistent.

## 2) Stack and Core Principles
- Next.js App Router + TypeScript strict mode.
- Prefer simple, readable, testable code.
- Keep clear boundaries between UI, domain, and data layers.
- Avoid heavy dependencies unless clearly justified.

## 3) Folder Boundaries
- `src/app`: routes, layouts, route-level pages.
- `src/components/ui`: reusable UI primitives.
- `src/components/shared`: reusable app-level components.
- `src/components/entries`, `src/components/timeline`: feature components.
- `src/models`: domain types and Zod schemas.
- `src/api`: API calls and server communication logic.
- `src/state`: client state management.
- `src/lib`: generic utilities.

Rules:
- Do not call APIs directly inside UI components.
- Do not place domain schemas/types inside React components.
- Keep feature code grouped by feature folder.

## 4) TypeScript Rules
- `strict: true` is required.
- No `any` unless explicitly justified in code comment.
- Prefer explicit types at module boundaries (props, function inputs/outputs).
- Use `@/*` imports for cross-folder imports.
- Centralize env access in `src/lib/env.ts` (no scattered `process.env`).

## 5) Validation and Error Handling
- Validate external input with Zod on server side.
- Return predictable error shapes from server actions/API.
- Show user-friendly error messages in UI.

## 6) UI/UX Quality Baseline
- Handle loading, empty, and error states.
- Basic accessibility by default: labels, focus, keyboard support.
- Reusable UI states (disabled, loading, error) should be consistent.

## 7) Component Guidelines
- Keep components small and focused.
- Extract complex logic into hooks or lib functions.
- Avoid deep prop drilling; prefer composition.
- Prefer server components by default, add `"use client"` only when needed.

## 8) Naming Conventions
- Components: `PascalCase` (`EntryCard.tsx`)
- Variables/functions: `camelCase`
- Constants: `UPPER_SNAKE_CASE` for true constants
- Route folders: kebab-case (`new-entry`)
- Files: keep names aligned with exported symbol when possible

## 9) Commits and PRs
Commit style:
- `feat: ...`
- `fix: ...`
- `chore: ...`
- `docs: ...`
- `refactor: ...`
- `test: ...`

Rules:
- One logical change per commit when possible.
- Commit message should explain intent, not implementation detail.
- PR should include: summary, risks, and test notes.

## 10) Definition of Done (per ticket)
- TypeScript and lint pass.
- Architecture boundaries respected.
- UI states handled where relevant.
- Docs updated if conventions or behavior changed.
