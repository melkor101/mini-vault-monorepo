# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands are run from the repo root via Yarn + Turborepo.

```bash
yarn dev          # Start all apps in development mode (web: :3000, docs: :3001)
yarn build        # Build all apps and packages
yarn lint         # Lint all packages
yarn check-types  # TypeScript type-checking across all packages
yarn format       # Format with Prettier
```

To run a command scoped to a single workspace:

```bash
yarn workspace @repo/ui lint
yarn workspace web check-types
```

For the mobile app specifically:

```bash
yarn workspace mini-vault start    # Start Expo dev server
yarn workspace mini-vault ios      # Run on iOS simulator
yarn workspace mini-vault android  # Run on Android emulator
yarn workspace mini-vault web      # Run in browser
```

There is no test framework configured in this repo yet.

## Architecture

This is a **Turborepo + Yarn Workspaces** monorepo for **Mini Vault** — a collection management app for tabletop miniature painters. It tracks miniatures through a 5-stage painting pipeline (Backlog → Unpainted → Primed → In Progress → Completed), organizes them into storage boxes, and awards XP/achievements for progress.

Task dependencies are declared in `turbo.json` — `build`, `lint`, and `check-types` all cascade through `^` dependencies (packages before apps). `dev` is persistent and uncached.

### Apps

| App | Port | Description |
|-----|------|-------------|
| `apps/web` | 3000 | Next.js companion web app |
| `apps/docs` | 3001 | Documentation site (placeholder) |
| `apps/mobile` | N/A | Expo Router mobile app — primary production app |
| `apps/api` | N/A | Backend API for sync (placeholder) |

The web and docs apps consume shared packages via workspace imports (e.g., `@repo/ui`). The mobile app (workspace name: `mini-vault`) uses Expo-specific tooling and does not consume `@repo/ui`.

### Shared Packages

| Package | Description |
|---------|-------------|
| `@repo/ui` | React component library — Button, Card, Code components |
| `@repo/eslint-config` | ESLint configs: `./base`, `./next-js`, `./react-internal` |
| `@repo/typescript-config` | TypeScript configs: `base.json`, `nextjs.json`, `react-library.json` |

`@repo/ui` uses subpath exports (e.g., `@repo/ui/button`) — add new components with `turbo gen react-component` from inside the `packages/ui` directory.

All ESLint configs use `eslint-plugin-only-warn`, so all lint violations surface as warnings rather than errors. The `--max-warnings 0` flag in each app's lint script still fails on any warning.

### Web App (`apps/web`)

Next.js 16 app with React 19 and **Tailwind CSS v4** (PostCSS). Uses `@/` as a path alias for the project root.

`check-types` runs `next typegen` before `tsc --noEmit` — run via `yarn workspace web check-types`, not `tsc` directly.

Shared lib files:
- `lib/types.ts` — domain types: `Miniature`, `StorageBox`, `Location`, `Achievement`, `PaintStatus`, `RewardData`
- `lib/mock-data.ts` — mock data (no backend yet)
- `lib/theme.ts` — `AppColors` const with brand colors and per-status colors; use this for all color values
- `lib/miniature-options.ts` — `TYPE_OPTIONS`, `BRAND_OPTIONS`, `PAINT_STATUS_OPTIONS`, `STORAGE_BOX_OPTIONS`; use these in all forms

**Routes:** `/` redirects to `/dashboard`. Active routes: `/dashboard`, `/collection`, `/collection/[id]`, `/add`, `/boxes`, `/boxes/[id]`, `/rewards`

**Components** follow the same folder convention as mobile: `components/my-component/my-component.tsx`. The sidebar layout lives at `components/layout/sidebar.tsx` and wraps all main pages via `app/layout.tsx`.

**Component exports:** Use named `export function ComponentName` for components. Route pages use `export default async function PageName`. Only add `'use client'` when the component uses hooks or browser APIs.

**Icons:** Inline SVGs are used throughout — do not introduce an icon library.

**Design references:** `apps/web/design/` contains reference screenshots (e.g. `dashbord.png`) — consult these when building or modifying UI.

### Mobile App (`apps/mobile`)

Production-ready Expo Router app with **local-first persistence** via WatermelonDB (SQLite). Uses React Hook Form + Zod for forms and React Native Reanimated for animations. See `apps/mobile/CLAUDE.md` for the full mobile-specific conventions.

Key mobile conventions (abbreviated):
- **Components:** Named arrow functions with `export const`. Route screens use `export default`.
- **Styles:** Always in a separate `component-name.styles.ts` file using `StyleSheet.create()`. No inline styles except dynamic runtime values (e.g. `{ backgroundColor: item.color }`).
- **File structure:** `components/my-component/my-component.tsx` + `my-component.styles.ts`. Route screens: `app/(tabs)/screen-name/index.tsx` + `screen-name.styles.ts`.
- **Platform files:** `.ios.tsx` / `.web.ts` variants are resolved automatically by Expo.
- **Path alias:** `@/` maps to the project root.
- **Inline objects:** Object literals passed to non-`style` props (e.g. `options={{ headerShown: false }}`) must be extracted to named constants at the top of the file, not written inline.

### Commit Messages

Format: `type(scope): description`

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
Scopes: `api-core`, `web-client`, `mobile-client`, `api-contracts`, `e2e-tests`

Description must be lowercase — no sentence-case, start-case, or upper-case.

### Comments

Do not add comments to code unless explicitly asked. Write clean, self-explanatory code without inline comments or section labels.
