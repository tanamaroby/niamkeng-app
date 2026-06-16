# Flourishing Buddhist Center — Chant App

A reading-along chant companion for the Flourishing Buddhist Center. Each
chant has its own page with the transliterated text alongside an audio
recording, so you can follow along while it plays, plus a tap counter for
tracking repetitions.

Installable as a PWA — works offline for any chant you've already opened.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build (Turbopack)
npm run start   # serve the production build
npm run lint    # eslint .
```

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- React 19 / TypeScript
- Tailwind CSS v4 + shadcn/ui-style components
- `react-h5-audio-player` for chant audio
- A hand-rolled service worker for offline support (see below) — no
  next-pwa/Serwist, since both require a webpack build step that conflicts
  with Turbopack being the default bundler

## Adding a chant

1. Add the chant's text lines and a cookie key for its counter to
   `src/lib/constants.ts`.
2. Drop the audio file(s) and any artwork into `public/`.
3. Add `src/app/<slug>/page.tsx`, following an existing chant page (e.g.
   `src/app/aksobhyabuddha/page.tsx`) as a template.
4. Link it from the sidebar in `src/components/app-sidebar.tsx`.

## PWA / offline support

- The manifest (`src/app/manifest.ts`) and icon set (`public/icon-*.png`,
  generated from `public/Logo.png`) make the app installable on mobile and
  desktop.
- `public/sw.js` caches each chant's page and audio the first time you open
  it ("cache on play"), so it's available offline afterward, without a big
  upfront download — chant audio files run several MB each. Pages you
  haven't visited yet fall back to an `/offline` page when there's no
  network.
- The service worker only registers in production builds (`npm run build`
  + `npm run start`, or a deployed instance) — it's intentionally disabled
  under `npm run dev`.

## Mobile native shell (Capacitor)

`@capacitor/*` is in `package.json` and `capacitor.config.ts` exists, but
the native `android/`/`ios/` project folders aren't checked into this repo,
and the Next.js build isn't currently configured for static export. If
you're working on the native app, you'll need to set that up first — it's
separate from the PWA/offline support above.

## More on Next.js

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
