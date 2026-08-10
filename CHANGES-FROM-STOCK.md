# Changes From Stock

Tracks every deviation from the upstream template (`upstream` remote:
https://github.com/lukesbrave/digital-home-frontend) so upstream updates can
be pulled in cleanly later. No branding, styling, or content-corpus changes
belong in this repo — see the standing prompt in the root runbook.

## wrangler.jsonc

- `vars.SUPABASE_URL` and `vars.SUPABASE_ANON_KEY` replaced with this
  project's real Supabase project URL / publishable key (was the stock
  `your-project.supabase.co` / `your-anon-key` placeholders). Project-specific
  — every clone must set its own.

## .env.local (gitignored, not committed)

- Created from `.env.local.example`. Filled with this project's Supabase
  URL/anon/service_role keys, a generated `API_SECRET_KEY`, and Resend keys.
  Site identity fields (`NEXT_PUBLIC_SITE_NAME`, blog label/title/description)
  left as stock placeholders — no branding applied yet.

## Cloudflare Worker secrets (not in repo)

Set via `wrangler secret put`: `SUPABASE_SERVICE_ROLE_KEY`, `API_SECRET_KEY`,
`RESEND_API_KEY`, `RESEND_WEBHOOK_SECRET` (placeholder value — real Resend
webhook not yet configured, pending domain verification).

## Theming mechanism (template upgrade, still generic)

Wired `design-system/tokens.json` as the single source of truth for color
and typography — previously it existed but was disconnected; `globals.css`
hardcoded its own `:root` values that had already drifted from it (different
accent color, light-mode surface values on a dark site). Mechanism only,
committed `tokens.json` values are unchanged in spirit from stock (same dark
neutral scale, same accent blue) — no brand applied.

- **`src/lib/theme/tokens.ts`** (new) — reads `tokens.json`, exports
  `buildRootCssVariables()` (renders tokens into CSS custom properties) and
  `googleFontsHref()` (builds a Google Fonts URL from whatever family names
  are set in `typography.fontFamily` — swapping a font is now a `tokens.json`
  edit, not a code change).
- **`src/app/layout.tsx`** — removed the `next/font` Geist/Geist Mono
  imports (which were hardcoded regardless of `tokens.json`) and now injects
  the token CSS variables via a server-rendered `<style>` tag, plus a
  `<link>` to the token-driven Google Fonts URL. **Visual side effect:** the
  live font changes from Geist to Inter, since `tokens.json` had always
  declared Inter/JetBrains Mono as the intended stock font — this makes that
  pre-existing declaration real instead of dead documentation. Trade-off:
  loses `next/font`'s build-time self-hosting/optimization in exchange for
  the font genuinely being config-driven at runtime (required for Part 2 —
  an instance needs to set Bricolage Grotesque etc. by editing `tokens.json`
  alone).
- **`src/app/globals.css`** — removed the hardcoded `:root` values (now
  injected). Added `--color-white: var(--neutral-50)` and
  `--color-black: var(--neutral-950)` inside the existing `@theme inline`
  block, rebinding Tailwind's built-in `white`/`black` utilities to the
  neutral scale. This is why `text-white`, `bg-black`, `border-white/10` etc.
  across every page/component are now token-driven with **zero per-usage
  rewrites** — editing `tokens.json`'s `neutral.50`/`neutral.950` propagates
  everywhere those utilities are used.
- **`design-system/tokens.json`** — fixed `colors.surface.*` to the actual
  dark values already live on the site (was light-mode placeholder values,
  disconnected/unused). Fixed `colors.brand.accent` to match the blue already
  live in `.article-body blockquote` (was a different, unused pink).
- **`src/app/blog/page.tsx`**, **`src/app/blog/[slug]/page.tsx`** — the only
  color usages that didn't use the `white`/`black` keyword (raw
  `rgba(255,255,255,X)` inside arbitrary-value gradient classes) converted to
  `color-mix(in srgb, var(--neutral-50) X%, transparent)` so they're
  token-driven too.
- **Pass condition verified live:** changed `tokens.json`'s `neutral.50` to
  a test color, confirmed it propagated across headings, pills, borders, and
  buttons with no stragglers, then reverted.

**Flagged, not touched — resisted this pass:**
- `src/app/blog/blog.module.css` and `src/app/blog/[slug]/article.module.css`
  are **dead code** (not imported by any live component) but contain real
  hardcoded branding: a font named `'TXC Pearl'` (not a Google Font — likely
  licensed/purchased) and a specific accent blue `#BBDCEF`. Since they don't
  affect the live site, left as-is rather than guessing at deletion — worth a
  decision on whether to delete them, since an unused file with someone
  else's baked-in branding sitting in an open-source "neutral" template is
  exactly the kind of thing this exercise is trying to eliminate.
- Spacing and border-radius are **not** rewired to `tokens.json`'s
  `spacing`/`borderRadius` scales — components still use Tailwind's standard
  spacing scale and arbitrary radius values (`rounded-[1.5rem]` etc.).
  Judgment call: spacing/radii aren't brand-differentiating the way
  color/typography are, and a full mechanical rewrite of every `px-6`/`gap-4`
  across every file would be large, low-value churn. The token values exist
  in `tokens.json` and are exposed as CSS variables
  (`--radius-token-sm..3xl`) for future use if this changes.

## No other changes

No content-corpus files have been modified, and no brand colors/fonts/copy
were applied — the site still renders on a stock, generic theme (Inter font,
black/white neutral palette, blue accent). Only the *mechanism* by which that
theme is expressed changed, per the standing prompt: mechanism belongs in
the template, brand values belong on an instance.

---

# INSTANCE LAYER — chadjordan.studio (the Compound)

*Everything below is instance branding, NOT template. When merging upstream
template updates, expect conflicts only in these files; keep the instance side.*

## Brand tokens
- **`design-system/tokens.json`** — replaced with the merged Compound tokens:
  navy ground (`#0d1b2e`), warm bone text (`#ede8dc`), gold accent (`#c9a96e`);
  Bricolage Grotesque / DM Sans / DM Mono; radius scale zeroed (sharp corners),
  shadows `none` (flat). Template *structural* keys (`spacing`, `breakpoints`,
  `animation`, full `borderRadius`/`shadows` key set) were PRESERVED — the raw
  brand tokens omitted them and `tokens.ts` dereferences them, so a naive
  replace would crash render. Added `colors.text`/`colors.border` blocks.

## Theme pipeline
- **`src/lib/theme/tokens.ts`** — `buildRootCssVariables()` now also emits
  `--text-primary/muted/faint/accent` and `--border-hairline/accent-soft`
  (guarded so the base template, which lacks `colors.text/border`, still builds).
- **`src/app/globals.css`** — mapped the new text/hairline vars into `@theme`;
  added the four brand signatures globally: sharp corners (neutralises Tailwind
  `rounded-*` via `[class*="rounded"]:not(.is-round)`), gold-italic pivot (`em`
  in headings + `.pivot`), DM Mono `.label`, gold `.hairline` rules; plus
  `.reveal` scroll-in and the `.dv-range` slider (gold thumb).

## New components (all instance brand)
- **`src/components/compound/Divergence.tsx`** — the compounding-divergence
  interactive, ported from the standalone oxide/Fraunces mockup to navy/gold.
- **`src/components/compound/Reveal.tsx`** — scroll-reveal wrapper.
- **`src/components/compound/LeadForm.tsx`** — real lead capture wired to the
  stock `POST /api/leads` (the starter shipped no front-end form; wiring intact,
  UI added). Honeypot `website` field.
- **`src/components/layout/Footer.tsx`** — Compound footer.

## Rebranded pages/components (were stock placeholders)
- **`src/app/page.tsx`** — full Compound homepage (video hero, the argument +
  divergence, gate/vault/press/grounds, selected work, three offers + lead form,
  about + stats). Copy from `chadjordan-homepage-copy-compound.md`.
- **`src/components/layout/NavBar.tsx`** — Compound nav (Work/Approach/Session/
  Contact) + "Start with one decision" CTA.
- **`src/app/layout.tsx`** — metadata + Footer mounted.
- **`src/app/contact/page.tsx`** — rebuilt with the lead form + brand copy.

## Public assets (instance)
- `public/compound-hero.mp4`, `public/compound-hero-poster.jpg` (aerial dusk
  hero), `public/work/*` (case images), `public/chad-portrait.png`.
- `reference-old-site/` — read-only design reference, gitignored.

## Integration preserved & verified
- `POST /api/leads` end-to-end tested live (HTTP 201, row in Supabase, then
  removed). All other API routes / data wiring untouched by the reskin.

## Case-study system (instance content)
- **`src/lib/work.ts`** (new) — structured case content + homepage card data.
- **`src/app/work/[slug]/page.tsx`** (new) — dynamic case template (hero, brief +
  spec panel, process steps, gallery, "The Proof" insight, next-project chaining);
  `generateStaticParams` over the case slugs.
- **`src/app/page.tsx`** — Selected Work cards now link to `/work/[slug]`
  (CSG PRO links out to csgpro.app).
- `public/work/{nasa,durindal,gshock,panerai,porsche}/*` — case gallery images.

## Homepage refinements
- **`src/app/page.tsx`** — hero headline → "Own the house. / Hold the deed."
  (two-line couplet, gold-italic payoff); About photo → `public/about-chad.jpg`
  (desaturated −15% director shot).
- `public/compound-hero.mp4` + `-poster.jpg` — swapped to the final dusk cut.

## Footer Admin link
- **`src/components/layout/Footer.tsx`** — env-driven "Admin" link
  (`NEXT_PUBLIC_ADMIN_URL`). Set in `wrangler.jsonc` vars (prod backend URL) and
  `.env.local` (localhost:3001 for dev). Baked at build via inline env override.

## Production custom domain
- **`wrangler.jsonc`** — `routes: [{ pattern: "chadjordan.studio", custom_domain: true }]`
  plus `workers_dev: true` (kept alive; the backend references the workers.dev URL).
  NOTE: adding `routes` without `workers_dev:true` disables the workers.dev URL.

## Content corpus (instance voice — force-committed; content-corpus is gitignored)
- `content-corpus/voice/{voice-guide,banned-phrases,vocabulary}.md`,
  `positioning/core-positioning.md`, `proof/case-studies.md`,
  `seo/keyword-clusters.md` — built from Chad's six authored voice files.
- `content-corpus/content/{image_style,image_avoid}.md` — the image Visual DNA
  the backend injects into generated images.
- All seeded into Supabase `brand_context` (the backend reads it at write time).

## Journal (blog) surfaced
- **`src/components/layout/NavBar.tsx`** + **`Footer.tsx`** — added a "Journal"
  link to `/blog` (nav + footer).
- **`src/components/compound/JournalPreview.tsx`** (new) — async server component
  that shows the latest 3 published articles as a "From the Journal" teaser
  ("Point of view."); renders nothing until the Journal has content.
- **`src/app/page.tsx`** — renders `<JournalPreview />` after About, and is now
  `export const dynamic = 'force-dynamic'` so the teaser reflects new articles
  without a redeploy.
- **`.env.local`** — `NEXT_PUBLIC_BLOG_TITLE=Journal` (the page heading);
  `NEXT_PUBLIC_BLOG_LABEL` kept as "Point of View" (the eyebrow/tagline).
- **`src/app/blog/page.tsx`** — metadata `<title>` now uses `BLOG_TITLE` (was
  `BLOG_LABEL`) so the browser tab matches the heading ("Journal").

## Still stock (not yet rebranded — optional polish)
- `src/app/about/page.tsx`, `src/app/services/page.tsx` — inherit the navy theme
  via tokens but retain template placeholder copy; not linked from the nav.
- `src/app/blog/*` — now linked as "Journal" and env-labeled; the blog layout
  is otherwise the stock template structure (fine as-is). Removed the stock
  "Keep shaping the starter / Customize the starter" placeholder CTA from the
  bottom of `blog/[slug]/page.tsx` — articles now close into the real footer.
