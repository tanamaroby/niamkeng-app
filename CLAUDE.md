# CLAUDE.md

Project context for Claude Code (or any AI agent) working in this repo.

## What this app is

A chant companion for the Flourishing Buddhist Center (FBC). Each chant
(Aksobhyabuddha, Buddha-35, Om A Hung, Ta Cia Che Yin, Xiong Cher San Hua)
gets its own page where a user reads transliterated lines while an audio
recording plays, optionally tapping a counter to track repetitions. It's a
reading-along practice tool, not a media library — the text and the audio
are meant to be consumed together.

## Stack

- Next.js 16 (App Router, Turbopack — the default bundler for both `dev`
  and `build`, do not add webpack-only tooling without checking compatibility)
- React 19.2, TypeScript 6
- Tailwind CSS v4 (CSS-first config via `@theme` in `globals.css`, no
  `tailwind.config.js`) + shadcn/ui-style components in `src/components/ui`
- `react-h5-audio-player` for chant audio playback
- ESLint flat config (`eslint.config.mjs`) using `eslint-config-next`

## Structure

- `src/app/<chant-slug>/page.tsx` — one route per chant. Each renders a
  background image, `BackLink`, `ChantTitle`, one or more `Audio` players,
  a list of `NiamCard`s (the chant text, line by line), a `Counter`, and a
  `ScrollToTopButton`.
- `src/lib/constants.ts` — all chant text content (Tibetan/Chinese phonetic
  transliterations) and per-chant cookie keys for the repetition counter.
  This is the file to edit when adding/editing chant text.
- `src/components/niam-card.tsx` — renders one chant's text lines.
- `src/components/static-card.tsx` — renders non-repeating reference text
  (e.g. dedication prayers) with optional repetition counts per line.
- `src/components/counter.tsx` — per-chant tap counter, persisted via
  `js-cookie` using the chant's cookie key from `constants.ts`.
- `src/components/audio-player.tsx` — wraps `react-h5-audio-player` with a
  playback-speed selector.
- `src/components/app-sidebar.tsx`, `navbar.tsx` — site chrome and nav
  (built on the shadcn `Sidebar` primitive in `src/components/ui/sidebar.tsx`).

## Adding a new chant

1. Add the chant text array + cookie key constant to `src/lib/constants.ts`.
2. Add audio file(s) and any background/portrait image to `public/`.
3. Create `src/app/<slug>/page.tsx` following the pattern of an existing
   chant page (see `src/app/aksobhyabuddha/page.tsx`).
4. Add a nav entry in `src/components/app-sidebar.tsx` if it should be
   reachable from the sidebar.

## PWA / offline

- `src/app/manifest.ts` — web app manifest (Next.js special file, served at
  `/manifest.webmanifest`). Icons live in `public/icon-*.png` (standard +
  maskable variants), generated from `public/Logo.png`.
- `public/sw.js` — hand-rolled service worker (no Workbox/next-pwa/Serwist —
  those inject via a webpack build step, which conflicts with Turbopack
  being the default bundler in Next.js 16). Strategy: network-first for
  page navigations with an `/offline` fallback, cache-first for
  `_next/static/*`, audio, and images — assets are cached the first time
  they're actually used ("cache-on-play"), not precached in bulk, since
  the chant audio files run 0.6–8MB each.
- `src/components/service-worker-register.tsx` — registers the SW, but
  only in production (`NODE_ENV === "production"`) to avoid interfering
  with Turbopack dev/HMR.
- If you change the caching strategy, bump `CACHE_NAME` in `sw.js` so old
  caches get cleaned up on activate.

## Capacitor (mobile native shell)

`@capacitor/*` packages are dependencies and `capacitor.config.ts` exists,
but there are no `android/`/`ios/` native project folders checked into this
repo, and `next.config.ts` does not set `output: "export"` (which
`capacitor.config.ts`'s `webDir: "build"` would need). Treat the Capacitor
setup as not currently wired up — don't assume native builds work without
checking with whoever maintains that side, and don't let PWA/service-worker
work leak into it (they're separate distribution channels).

## Things to know before changing code

- Tailwind v4's preflight sets `height: auto` on all `<img>`/`<video>`
  tags. Any `next/image` with fixed `width`/`height` props needs matching
  explicit Tailwind size classes (e.g. `w-9 h-9`) plus `object-cover` if the
  source file's intrinsic aspect ratio doesn't match — otherwise Next logs
  an aspect-ratio mismatch warning and the image renders at the wrong size.
- `next lint` was removed in Next.js 16; lint runs via `eslint .` directly.
- A handful of pre-existing ESLint `react-hooks` findings (state-set-in-effect
  in `counter.tsx`/`use-mobile.ts`) are known and intentionally left as-is
  unless asked to fix — they're behavior-affecting hook patterns, not
  mechanical fixes. (The `ui/sidebar.tsx` skeleton-width `Math.random()`
  purity violation was fixed by moving it into a lazy `useState` initializer
  instead of `useMemo`.)
