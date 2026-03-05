# BraveMind

BraveMind is a CBT-based journal MVP built with Next.js (App Router) and TypeScript.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Main app entry is in `src/app`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run format
npm run format:check
```

## Project Architecture

The codebase follows a small, scalable feature-oriented structure:

```text
src/
  app/                    # Next.js App Router (routes, layouts, pages)
  components/
    ui/                   # Reusable UI primitives (button, input, card, etc.)
    shared/               # Reusable app-level components
    entries/              # Components related to entry creation/editing
    timeline/             # Components related to timeline/history views
  api/                    # API client calls (centralized data fetching/mutations)
  state/                  # Global/client state management
  models/                 # Domain models and validation schemas (TypeScript + Zod)
  lib/                    # Generic utilities and helpers
```

### Boundaries

1. Feature UI lives in `components/<feature>/` (`entries`, `timeline`, etc.).
2. UI primitives live only in `components/ui/`.
3. Reusable app-level blocks live in `components/shared/`.
4. Types and validation schemas belong to `models/`, not inside React components.
5. API calls are centralized in `api/`, not called inline inside components.
6. Keep `lib/` framework-agnostic when possible.

## Formatting (VS Code)

Use Prettier format-on-save for consistent code style.

1. Install extension: `Prettier - Code formatter` (`esbenp.prettier-vscode`)
2. Enable `Editor: Format On Save`
3. Set default formatter to Prettier

`.vscode/settings.json` example:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```
