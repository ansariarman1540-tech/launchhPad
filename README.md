# LaunchhPad

The marketing site for **LaunchhPad** — design, dev, and growth in one platform.

> Brand spelling rule: the company name is **LaunchhPad** (double **h**, capital **P**). Never "Launchpad".

## Stack

- **Next.js 15** (App Router, React 19, Server Components by default)
- **TypeScript 5** (strict)
- **Tailwind CSS v4** (CSS-first config via `@theme` in `app/globals.css`)
- **shadcn/ui-style primitives** wired manually (`class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`)
- **Framer Motion** via the `motion` package
- **next-mdx-remote** + **gray-matter** for MDX content
- **Zod** for runtime validation
- **ESLint** (flat config) + **Prettier** + `prettier-plugin-tailwindcss`
- **Vitest** + `@testing-library/react` + `jsdom` for unit tests
- **Playwright** for smoke tests
- **Husky** + **lint-staged** for pre-commit hooks
- **npm** as the package manager

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Next dev server on `http://localhost:3000` |
| `npm run build` | Production build |
| `npm run start` | Start the production server (after `build`) |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run `tsc --noEmit` |
| `npm test` | Run Vitest unit tests |
| `npm run test:e2e` | Run Playwright smoke tests (requires `npm run build` first) |
| `npm run format` | Format the codebase with Prettier |
| `npm run format:check` | Check formatting without writing changes |

## Project layout

```
app/                  Next.js App Router entrypoints (layout, pages, metadata routes)
components/           Shared UI primitives (Button, ThemeProvider, ...)
content/              Authored copy: site.ts, seo.ts, MDX case studies and blog posts
lib/                  Small utilities (cn, siteUrl, ...)
tests/                Vitest setup + Playwright smoke specs
.github/workflows/    CI pipeline
```

## Environment variables

| Var | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Optional. Override the canonical site URL used in metadata, OG tags, sitemap, and robots. Defaults to `https://www.launchhpad.com`. |

Vercel previews automatically expose `VERCEL_URL`, which `lib/site-url.ts` picks up if `NEXT_PUBLIC_SITE_URL` is unset.

## Deploying

Designed to deploy to **Vercel**.

1. Connect the repo on Vercel.
2. Framework preset: **Next.js**. Build command: `npm run build`. Output: managed by the Next.js plugin.
3. Set `NEXT_PUBLIC_SITE_URL` to the canonical production URL (`https://www.launchhpad.com`).
4. Push to `main` to deploy to production. Pull requests get preview URLs automatically.

## Authoring content

Content lives in `content/`:

- `content/site.ts` — nav, hero, services, process, testimonials, FAQs, footer, contact copy
- `content/seo.ts` — SEO and metadata defaults, OG, JSON-LD
- `content/case-studies/*.mdx` — case studies
- `content/blog/*.mdx` — long-form writing

Authored content is the source of truth. Engineering does not edit those files without sign-off from the brand and content owner.

## License

MIT. See [LICENSE](./LICENSE).
