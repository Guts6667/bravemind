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
