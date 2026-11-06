# Theoryca

An early-stage web app for learning music through short, game-like daily lessons. This repository is named `site-a02`; Theoryca is the product name used on the landing page.

## Project status

Theoryca is in development. The lessons described on the landing page aren't built yet.

**Working in the code today:**

- Landing page
- Sign-up and sign-in with email and password
- Protected dashboard page, which is still a placeholder

**Modeled in the database, but not yet used by the app:**

- A skill tree with prerequisites
- Exercises, attempts, and practice sessions
- Spaced-repetition review state and skill progress

## Tech stack

- **Web:** Next.js 16, React, Tailwind CSS, shadcn/ui
- **API:** Fastify on Node.js
- **Database:** PostgreSQL with Prisma
- **Authentication:** Better Auth
- **Environment variables:** Varlock
- **Monorepo:** Turborepo and pnpm workspaces

The project was scaffolded with [Better-T-Stack](https://github.com/AmanVarshney01/create-better-t-stack).

## Project structure

```text
apps/
  web/        Next.js frontend
  server/     Fastify API
packages/
  auth/       Better Auth configuration
  config/     Shared TypeScript configuration
  db/         Prisma schema and client
  ui/         Shared shadcn/ui components and styles
```

## Getting started

You need Node.js, pnpm, and a PostgreSQL database.

1. Install the dependencies:

   ```bash
   pnpm install
   ```

2. Create `apps/server/.env`:

   ```bash
   DATABASE_URL=postgresql://user:password@localhost:5432/theoryca
   BETTER_AUTH_SECRET=replace-with-at-least-32-characters
   BETTER_AUTH_URL=http://localhost:3000
   CORS_ORIGIN=http://localhost:3001
   ```

3. Create `apps/web/.env`:

   ```bash
   NEXT_PUBLIC_SERVER_URL=http://localhost:3000
   ```

4. Generate the Prisma client and apply the schema:

   ```bash
   pnpm db:generate
   pnpm db:push
   ```

5. Start the apps:

   ```bash
   pnpm dev
   ```

The web app runs at <http://localhost:3001> and the API at <http://localhost:3000>.

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start all apps in development mode |
| `pnpm dev:web` | Start only the web app |
| `pnpm dev:server` | Start only the API |
| `pnpm build` | Build all apps |
| `pnpm check-types` | Check types across the monorepo |
| `pnpm db:generate` | Generate the Prisma client |
| `pnpm db:push` | Push the schema to the database |
| `pnpm db:migrate` | Run database migrations |
| `pnpm db:studio` | Open the database UI |
| `pnpm env:generate` | Regenerate typed environment files after changing an `.env.schema` |

## Adding UI components

To add shared components to `packages/ui`, run this from the repository root:

```bash
npx shadcn@latest add accordion dialog -c packages/ui
```

Then import them like this:

```tsx
import { Button } from "@site-a02/ui/components/button";
```
