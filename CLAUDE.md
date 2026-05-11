# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The marketing + public documentation site for **VoiceGateway** (deployed at https://voicegateway.mahimai.ca). Next.js 15+ (App Router) + Tailwind 4 + Fumadocs, served from Cloudflare Workers via the `@opennextjs/cloudflare` adapter (`@cloudflare/next-on-pages` is deprecated and does not support Next 16). The previous Astro source lives under `legacy/` and will be removed in a follow-up commit on main after a one-week soak post-merge. CLAUDE.md gets a full rewrite in web-v0.2.0 T31.

The repo was just bootstrapped from `npm create astro@latest --template basics` and then had Starlight, Tailwind, and the Cloudflare adapter layered on. The default Astro welcome page (`src/pages/index.astro` + `src/components/Welcome.astro` + `src/layouts/Layout.astro`) is still in place and will be replaced as real content lands. The Starlight docs content directory (`src/content/docs/`) does not exist yet, so the `autogenerate` sidebar entries in `astro.config.mjs` (getting-started, guides, api) are currently dangling: building docs pages means creating that directory tree first.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Local Astro dev server on http://localhost:4321 |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Build then run Astro's preview server (not wrangler) |
| `npm run deploy` | `astro build && wrangler deploy` (publishes to Cloudflare) |
| `npm run generate-types` / `npm run cf-typegen` | Regenerate `worker-configuration.d.ts` from `wrangler.jsonc` |
| `npm run astro check` | Type-check Astro + TS (no separate `tsc` script) |

Node 22.12+ is required (see `engines` in package.json).

## Architecture notes

- **Cloudflare Worker entrypoint is not in this repo.** `wrangler.jsonc` points `main` at `@astrojs/cloudflare/entrypoints/server` (inside `node_modules`), and `assets.directory` is `./dist`. Do not look for a hand-written worker; the adapter generates the runtime. If you need to extend request handling, do it through Astro middleware or endpoints under `src/pages/`, not by editing the worker entry.
- **`worker-configuration.d.ts` is generated**, large (~500 KB), and committed. Regenerate with `npm run cf-typegen` after touching `wrangler.jsonc` bindings. It is referenced explicitly in `tsconfig.json` `compilerOptions.types`, so removing it breaks the type-check.
- **`compatibility_flags: ["global_fetch_strictly_public"]`** is set in `wrangler.jsonc`. This blocks `fetch()` from the worker to private or internal IPs. Any new backend calls have to go to public hostnames.
- **Tailwind 4 is wired via the Vite plugin** (`@tailwindcss/vite`), not the PostCSS / `tailwind.config.js` path. The only entry is `@import "tailwindcss";` in `src/styles/global.css`; that file has to be imported from a layout for styles to land on a page.
- **Vite is pinned via `overrides`** (`"vite": "^7"`) in `package.json`. Astro / Starlight bring their own Vite range; if you bump Astro, re-check this pin.
- **TS strict mode** comes from `astro/tsconfigs/strict`. The `**/*` include and `dist` exclude are intentional: build output must stay out of the type graph.

## House conventions

- Site URL is set in `astro.config.mjs` (`site: "https://voicegateway.mahimai.ca"`). Update there, not in env files, when the canonical URL changes; Starlight uses it to build canonical / OG tags.
- Starlight sidebar lives in `astro.config.mjs`. New top-level sections need both a sidebar entry there and a matching directory under `src/content/docs/`.
- `.agents/` (TODO.md, design.md, journal.md, prompt.md) is gitignored scratch space for agent work, not source. Treat it as ephemeral.
