![MyQuran hero](public/myquran-og.png)

# MyQuran — React Quran Explorer

MyQuran is a modern, responsive Quran explorer built with React 19, TypeScript, and Vite. It fetches live data from the [equran.id REST API](https://equran.id/apidev) to deliver a polished reading experience that includes searchable surah lists, detailed surah pages, tafsir per ayat, and animated hero/landing sections inspired by contemporary marketing sites.

## Highlights

- **Dynamic Surah Directory** – Search by latin name, Arabic script, or translation. Incremental “Muat lebih banyak” pagination keeps the grid fast on low-end devices.
- **Rich Detail & Tafsir Views** – Dedicated pages for surah metadata, audio links, and tafsir ayat-per-ayat with HTML-safe rendering.
- **Smooth UX** – Framer Motion transitions, Swiper hero carousel, and shared loading overlays ensure polished navigation between lazy-loaded routes.
- **Reliable Data Layer** – TanStack Query caches `/surat`, `/surat/:id`, and `/tafsir/:id` responses from equran.id with axios, error boundaries, and global spinners for resilience.
- **Production-ready Tooling** – Vite 7 + TypeScript 5.9, Tailwind CSS v4 (via `@tailwindcss/vite`), React Router 7 data routers, ESLint 9, and React 19 features.

## Tech Stack

| Layer         | Tools                                                         |
| ------------- | ------------------------------------------------------------- |
| Framework     | React 19 + TypeScript + Vite 7                                |
| Routing       | React Router 7 (`createBrowserRouter`, lazy routes, Suspense) |
| Data fetching | Axios + TanStack React Query 5                                |
| Styling       | Tailwind CSS v4, custom gradients, responsive layouts         |
| Motion/UI     | Framer Motion 12, Swiper 12, React Icons, React Spinners      |
| State & Utils | React hooks + memoization, optional Zustand store (reserved)  |

## Project Structure

```
src/
├── components/
│   ├── home/            # Navbar, Hero, About, Footer, etc.
│   └── shared/          # LoadingSpinner and shared UI
├── features/
│   ├── quran/           # Surah list page, grid, filter bar, API hook
│   ├── detail/          # Detail page, ayat cards, navigation
│   ├── tafsir/          # Tafsir page, header, item cards, API hook
│   └── error/           # Error boundary page
├── layouts/             # Home layout with header/footer + spinner overlay
├── pages/               # Landing page composition
├── providers/           # (reserved for React Query / theme providers)
├── routes/router.tsx    # React Router v7 configuration
├── styles/              # Global CSS (tailwind utilities, fonts)
├── utils/api.ts         # Axios instance targeting https://equran.id/api/v2
└── main.tsx / App.tsx   # Entry + Suspense shell
```

## API Surface

All data comes from [`https://equran.id/api/v2`](https://equran.id/apidev):

| Endpoint         | Usage in app                                                       |
| ---------------- | ------------------------------------------------------------------ |
| `/surat`         | Fetch complete list of surah for the Quran grid (`fetchAllSurah`). |
| `/surat/:nomor`  | Surah detail (metadata, ayat) rendered on Detail page.             |
| `/tafsir/:nomor` | Tafsir metadata + `tafsir[]` collection rendered per ayat.         |

The shared axios client (`src/utils/api.ts`) sets a 10s timeout and JSON headers. React Query handles caching, loading, and error states with suspense-friendly hooks in each feature folder.

## Getting Started

**Prerequisites**

- Node.js ≥ 18.18 (recommend 20 LTS)
- npm ≥ 10

**Installation & Local Dev**

```bash
npm install
npm run dev
```

`npm run dev` starts Vite on http://localhost:5173 with hot module replacement.

## Available Scripts

| Command           | Description                                                        |
| ----------------- | ------------------------------------------------------------------ |
| `npm run dev`     | Start Vite dev server with HMR.                                    |
| `npm run build`   | Type-check via `tsc -b` then generate production assets (`dist/`). |
| `npm run preview` | Serve the production build locally.                                |
| `npm run lint`    | Run ESLint (TS-aware) across the repo.                             |

> Tip: Always run `npm run build` before pushing to ensure both TypeScript and Vite builds succeed.

## Deployment

1. `npm run build` produces static assets in `dist/`.
2. Deploy the `dist` directory to any static hosting provider (Vercel, Netlify, Cloudflare Pages, etc.).
3. Configure the host for SPA fallback so React Router works on deep links (e.g., `/_redirects` with `/* /index.html 200`).

## Development Notes

- **Lazy routes + Suspense:** Every top-level page is loaded via `React.lazy` to keep initial bundle size small. `LoadingSpinner` doubles as Suspense fallback and router transition overlay.
- **Memoization:** Surah grid, filter bar, and cards are wrapped in `React.memo`, and `QuranPage` slices filtered data incrementally to minimize re-render cost.
- **Error handling:** `ErrorBoundaryPage` catches router and data errors, showing user-friendly messaging.
- **Styling:** Tailwind CSS v4 (via the `@tailwindcss/vite` plugin) is configured globally in `src/styles/App.css`, while components rely on utility classes + custom gradients.

## Testing & Quality

- **Type-checking:** Automatically executed during `npm run build`. Run `tsc -b` manually if needed.
- **Linting:** `npm run lint` enforces React Query rules, hooks constraints, and base JS/TS style.
- **Manual QA checklist:**
  1. Landing page hero + Swiper interactions.
  2. Search/filter in Quran list (ensure load-more still works after filtering).
  3. Detail + Tafsir routes load data and handle network failures gracefully.
  4. Mobile nav toggles correctly after navigation.

## Contributing

1. Create a feature branch.
2. Run `npm run lint` and `npm run build` before committing.
3. Submit a PR describing the change plus screenshots/gifs for UI adjustments.

Feel free to open issues for feature ideas (dark mode, bookmarking, audio players, etc.).

## License

This project does not yet declare a license. If you plan to redistribute it, please add one or consult the maintainers first.
