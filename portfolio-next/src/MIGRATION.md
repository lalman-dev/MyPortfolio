# Vite → Next.js migration

Drop these into your existing Next.js (App Router) project root, then follow
the steps below. Nothing here assumes a fresh `create-next-app` — it merges
into what you already have.

## 1. Copy files in

```
components/   → merge into ./components
context/      → merge into ./context
lib/          → merge into ./lib
app/          → merge into ./app (this OVERWRITES page.tsx, layout.tsx,
                globals.css — back them up first if you already customized
                the scaffold Next generated)
public/*      → merge into ./public
```

If your project doesn't use the `@/` import alias yet, add it to
`tsconfig.json`:

```json
"compilerOptions": {
  "paths": { "@/*": ["./*"] }
}
```
(`create-next-app` sets this up by default, so you likely already have it.)

## 2. Install dependencies

Your Next app almost certainly already has `react`, `react-dom`, `next`,
`tailwindcss`. Add what the portfolio itself needs:

```bash
npm install framer-motion lucide-react react-icons@5.5.0 emailjs-com
```

**Pin `react-icons` to `5.5.0`.** `lib/data.ts` imports `SiOpenai` — newer
`react-icons` (5.6+) dropped that export when simple-icons renamed the
OpenAI glyph, so `npm install react-icons@latest` will break the build
with a type error. This isn't a migration bug, it exists in your Vite
`package.json` too (`^5.5.0`) — it just hasn't bitten you yet because your
lockfile pinned the old version. If you want to run latest anyway, swap
`SiOpenai` in `lib/data.ts` for whatever the current export is named.

## 3. Tailwind v4 setup

The CSS uses Tailwind v4's `@import "tailwindcss";` syntax (no config file
required). If your Next project was scaffolded with Tailwind v4, this
matches what you already have — just make sure `postcss.config.mjs` has:

```js
export default {
  plugins: { "@tailwindcss/postcss": {} },
};
```

## 4. Environment variables

Vite exposed `VITE_*` vars via `import.meta.env`; Next.js needs
`NEXT_PUBLIC_*` vars for anything read in a client component. Create
`.env.local`:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

(pull the actual values from your old `.env` — same EmailJS account, just
a renamed variable.)

## 5. Run it

```bash
npm run dev
```

Check both themes (light is the default; toggle dark and refresh — there
should be no flash of the wrong theme) and each section's scroll-to-anchor
links from the navbar.

## What actually changed (not just moved)

- **`ThemeContext`** — `localStorage` used to run at `useState` init time,
  which throws during SSR (`localStorage is not defined` on the server).
  Now it defaults to `"light"` on first render and syncs from
  `localStorage` in `useEffect`. `layout.tsx` adds a tiny inline script
  that sets the `.dark` class before hydration so dark-mode users don't
  see a light flash.
- **Images** — `<img>` → `next/image` (`HeroSection`, `ProjectCard`) for
  automatic optimization/lazy-loading. Project/OG images live in
  `/public` and are referenced by path in `lib/data.ts` rather than
  imported as bundler assets.
- **Fonts** — Syne / DM Mono / DM Sans now load through `next/font/google`
  in `layout.tsx` instead of a `@import url(fonts.googleapis.com...)` in
  CSS. Self-hosted at build time, no external request, no layout shift.
  Same CSS variable names, so `globals.css` didn't need restructuring.
- **`import.meta.env.VITE_*`** → `process.env.NEXT_PUBLIC_*` in
  `ContactSection`.
- **Every interactive component gets `"use client"`** — anything using
  `useState`, `useEffect`, `framer-motion`, or DOM APIs. `app/page.tsx`
  itself stays a server component; it just composes client children.
- **`TextInput.tsx`** — wasn't imported anywhere in the original app
  (dead code), so it's not included here. Say the word if you actually
  need it and I'll port it over.
- Dropped the Vite-only files: `vite.config.ts`, `index.html`,
  `main.tsx`, `eslint.config.js` (App Router doesn't use any of these).
  Your test files (`setupTests.ts`, `test-utils.tsx`, `__tests__/`)
  weren't converted — say the word if you want Vitest wired up for
  Next too (it works fine there, config just changes slightly).
