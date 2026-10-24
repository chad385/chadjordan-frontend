# Positioning rebuild — change log

The studio stopped selling "the Compound" (own vs. rent, hold the deed). The
homepage now argues one thing: expert-led firms whose presentation doesn't
match who they are. Correction, not inflation. Sovereignty survives only as a
build principle (one clause in the Method, one in What You Get).

Visual system unchanged: tokens, type, hairlines, gold-italic pivot, motion.
Copy source: `copy.md` (verbatim) + the rebuild brief.

Everything removed is recorded here with its exact copy, so nothing is lost.
The pre-rebuild state is also in git: commit `0b0dc1d`.

---

## Stage 1 — Hero + The Dissonance (2026-10-24)

### Removed

**Hero headline + subhead** (`src/app/page.tsx`)
- Was: "Own the house. / *Hold the deed.*"
- Was: "A Compound is your whole business behind your own gates — the brand,
  the content, the CRM, and the infrastructure it runs on — on ground you own,
  not rent. Built by hand. Made unmistakable."
- Why: sovereignty headline; the studio no longer sells this.

**Hero CTA**
- Was: "Start with one decision →" → `/#session`
- Now: "See the work →" → `/#work`

**Rent-vs-own section + calculator** (`src/app/page.tsx`)
- Eyebrow: "Rent or own"
- H2: "Rent compounds against you. A Compound compounds *for you.*"
- Body: "Every month on a rented platform is money out that builds someone
  else's asset. Every month in your Compound builds yours. Give it a few
  years and the gap is the whole point."
- Calculator: `<Divergence />` — interactive 10-year cumulative-cost chart
  (rent $500/mo escalating 6%/yr vs. $18k build + $150/mo upkeep), slider,
  break-even marker, "own nothing / own it all" end labels.
- Disclaimer: "Illustrative. Rent shown at $500/mo across a typical stack,
  rising 6% a year; Compound as one build plus light upkeep. Your numbers,
  your asset."
- Why: the section was the old positioning's main argument.
- **Kept for reuse:** moved, not deleted →
  `src/components/_archive/Divergence.tsx` + `src/components/_archive/divergence.css`
  (the `.dv-range` slider styles, moved out of `globals.css`). Not imported
  anywhere, so it adds nothing to the build.

### Changed

**Credentials strip** — unchanged from before. `copy.md` added
"NASA, Porsche, G-Shock"; cut by decision because that work is spec and
personal, and in a credentials strip it reads as a client list.

### Added

- Hero: "The story you tell isn't the company you're *building.*" + subhead.
- **01 — The Dissonance** (`#dissonance`): text-only, extra vertical room,
  closing line in display type with the gold-italic pivot on "*open.*"

---

## Stage 2 — Hero revision, Durindal, Selected Work (2026-10-24)

### Changed

**Hero headline + subhead** (Chad's revision after the Stage 1 preview)
- Was (Stage 1): "The story you tell isn't the company you're *building.*" /
  "I close that gap. Twenty years directing brand for companies with budgets,
  applied to firms that don't have one yet."
- Now: "You're better than you *look.*" / "I close the gap between what
  you've actually done and what a stranger concludes in ninety seconds."
- Open question: the Dissonance line "So you over-explain. You discount to
  compensate…" now overlaps the subhead. Kept as is; Chad decides after seeing
  both together on the preview.

**Hero image** (Chad supplied the replacement)
- Was: looping video `compound-hero.mp4` (poster `compound-hero-poster.jpg`),
  the aerial estate-at-dusk cut made for the house metaphor.
- Now: still `public/hero-late-night.webp` — a founder alone at a laptop late
  at night. Overlay lightened at the top (the still is already dark); framed at
  `object-position: 42% 30%` so the face clears the copy on phones. On phones
  the laptop falls out of frame; the face carries it.
- The two video files stay in `public/` for now, unused. Delete them in the
  Stage 4 cleanup to keep them out of the deploy.

**Hero CTA style**
- Was: solid gold filled block (gold background, navy text) — the brightest
  object on the page.
- Now: gold outline + gold text, fills gold only on hover — the same treatment
  as the nav CTA. Gold stays an accent, not a block.
- Fix found along the way: the shared `.label` style was overriding the gold
  text on outlined buttons (they rendered bone). Nav and hero CTAs now force
  gold text.

**Nav** (`src/components/layout/NavBar.tsx`) — pulled forward from Stage 4.
- Was: Work · Journal · Approach · Session · Contact, CTA
  "Start with one decision →" → `/#session`.
- Now: Work · Method · Journal · Contact, CTA "Start a conversation →" →
  `/contact`. ("Method" points at `#method`, which arrives in Stage 3.)

**Selected Work** (`#work`)
- Moved up: now directly after Durindal (was after the Compound section).
- Was: eyebrow "Selected Work" only, no heading.
- Now: eyebrow "Selected work" + H2 "Twenty years of knowing what big
  *looks like.*" + closing line under the grid. Grid, cards and
  Spec/System/Exploration/Product tags unchanged.

### Added

**02 — Durindal** (`#durindal`) — the proof section.
- Full-bleed opener (`dur_hero`), eyebrow "The proof", H2 "Garrath came in
  needing a website."
- Body opens with both founders' names (Chad's edit, so the second quote
  isn't from someone unintroduced): "Durindal was Garrath and Sebastian — two
  founders and a thesis. …"
- Two founder quotes (Garrath L. Robinson, Sebastian D.P. Hidalgo), cleared
  by both, including the $25,000 line.
- Image strip: `dur_dossier`, `dur_carabiner`, `dur_window` (the duffel
  image was tried and dropped — it's a six-photo collage and read busy).
- "Read the case study →" → `/work/durindal`.
- All images come from the existing case study; no new assets.

---

## Stage 3 — The Method + What You Get (2026-10-24)

### Removed

**The Compound section** (`#approach`, `src/app/page.tsx`)
- Eyebrow: "The Compound"
- H2: "One Compound. Everything behind your *gates.*"
- Body: "Most businesses are scattered across platforms they rent — a site here,
  a list there, a CRM somewhere else, every piece someone else's to price,
  throttle, or shut off. A Compound puts all of it on ground you own, behind
  your own walls."
- Four-up (`ROOMS` data):
  - The gate — "A site built as a commissioned piece, not skinned from a
    template. It captures the lead instead of losing it."
  - The vault — "Your CRM, your list, your pipeline — on a system nobody can
    price-gouge or repossess."
  - The press — "Campaign-grade content, directed frame by frame, published on
    a schedule. Not the slop everyone else ships."
  - The grounds — "The quiet automation that keeps the place running while you
    do the work only you can do."
- Closing line: "Same materials everyone has. The difference is who's
  directing — and who holds the *deed.*"
- Why: the sovereignty argument as a section. Ownership now survives only as
  one clause each in the Method (04) and What You Get (The site).

### Added

**04 — The Method** (`#method`, the nav "Method" link now lands here)
- Reuses the old section's four-up hairline grid and surface; content fully
  replaced. "Nothing invented. Everything *excavated.*" + four numbered steps
  (DM Mono 01–04 in gold, no icons).

**05 — What You Get** (`#deliverables`)
- "What you *get.*" + five deliverables as hairline-ruled rows: number, term,
  one or two sentences. Fixed-width term column on desktop so each row scans
  as one line; stacks term-over-description on phones.

---

## Stage 4 — The tail, meta, and cleanup (2026-10-24)

### Removed

**Offer tier 2 + 3 copy** (`OFFERS` in `src/app/page.tsx`)
- "The Compound" — "By commission" / note "you hold the deed" / "The
  commissioned build. Brand, content, and owned infrastructure, made
  unmistakable — a place nobody could mistake for anyone else's."
- "The Standing Engagement" — note "the part most people skip" / "I keep the
  content coming and the Compound compounding, month over month, so what you
  built keeps growing instead of going stale."

**Inline lead form on the homepage** (under "Three ways in")
- Was: heading "Start with one decision." + `<LeadForm source="session" />`.
- Now: "Start a conversation →" button to `/contact`. The form and its wiring
  are untouched and still live on `/contact`. (Homepage leads were tagged
  `source: "session"`; all leads now arrive with `source: "contact"`.)

**About** — "…which is where I learned what ownership is actually worth. The
tools change. The discipline doesn't."

**Footer** — close "Stop renting. Build the *Compound.*", CTA "Start with one
decision →" → `/#session`, tagline "You don't get a website. You get the
deed."

**Meta** — title "Chad Jordan · Studio — Own the Compound"; description "A
Compound is your whole business behind your own gates — brand, content, CRM,
and infrastructure on ground you own, not rent. Built by hand. Made
unmistakable."

**Journal rail** — the platform-risk post no longer surfaces. All five
own-vs-rent posts are excluded by slug in `JournalPreview.tsx`; they stay live
at their URLs. The rail shows the two brand-voice posts and fills back to three
as new on-thesis posts publish.

**Placeholder pages** — `/about` ("This page needs your story") and
`/services` ("This page needs your offers"), both template stubs linking to the
BraveBrand community. Now permanent (308) redirects to `/#about` and
`/#session`. Removed from the sitemap.

**Hero video files** — `public/compound-hero.mp4`, `compound-hero-poster.jpg`
(unused since Stage 2). Still in git history.

### Changed

- **06 Three ways in:** tier 2 → "The Commission" (By commission), tier 3 body
  rewritten. Tier 1 unchanged. Notes shown only where the copy has one.
- **07 About:** new real-estate line; heading pivot now on "*frame.*" only, per
  `copy.md` (was "*Every frame.*").
- **Close (footer, every page):** "Look like what you already *are.*" +
  "Start a conversation →" → `/contact`.
- **Footer tagline:** "Nothing invented. Everything excavated."
- **`<title>`:** "Chad Jordan · Studio — Brand work for firms that look smaller
  than they are". New meta description. Added Open Graph/Twitter tags (there
  were none) and `metadataBase`.
- **Share tags per page:** blog articles and case studies now set their own
  OG title/description, so they don't inherit the homepage's.
- **Sitemap:** adds the five `/work/*` case studies.
- **`llms.txt`:** placeholder header/about replaced with the studio
  description, offers, and the Durindal case link.
- **`robots.txt`:** header comment "# Digital Home" → "# Chad Jordan · Studio".
- **Backend admin** (`chadjordan-backend/src/app/guide/page.tsx`): "How this
  Compound works" → "How this studio works". Ships on the next backend deploy.

### Left as is (flagged)

- ~~`/contact` deed line + "Start with one decision"~~ — fixed, see
  post-Stage-4 revisions. Leads still tagged `compound-inquiry` (by request).
- Code paths `src/components/compound/` — not visible to visitors.

---

## Post-Stage-4 revisions (2026-10-24)

**The Method — rebuilt as a sequence.** The four-up grid is gone (four equal
small boxes read as four separate things). Now four full-width rows stacked in
order, hairline between: large gold DM Mono number (32px, 0.22em tracking) far
left, step title at section-heading scale in Bricolage, description below the
title at a readable measure. Generous row padding, so the section takes real
scroll length like the Dissonance. A three-column version (description to the
right) was tried and dropped — the eye had to jump a wide gap.

**What You Get — names promoted.** Deliverable name now at heading scale
(Bricolage), description below it. The 01–05 numbers are dropped (they
competed with the Method's and this isn't a sequence).

**What You Get — second pass: grid, not rows.** Still read too close to the
Method (both were stacked name-over-text rows). Now a hairline grid in the
existing offers/old-four-up vocabulary: The brand brain spans the full width
on top (name left, description right on desktop — it's the document
everything else is built from), the other four in a 2×2 below. Icons were
considered and not used: the site has no icon vocabulary, and the brief rules
out introducing one.

**What You Get — third pass.**
- Grid borders: was a 1px gap grid with an outer frame (read as boxes). Now
  the same 0.5px rules as the Method rows — a rule under each row and one
  vertical rule between the two columns on desktop, no outer frame. Phones
  get rules between stacked items only.
- Description size: both sections' descriptions were already identical
  (17.6px) but read small under the larger names. Raised together, Method and
  What You Get, to 20px on desktop (17.6px on phones), so they stay matched.

**Backgrounds swapped:** Method on the ground, What You Get on the raised
surface (`#152338`), so the two back-to-back text sections don't flatten.

**Contact page** (`/contact` + `LeadForm`):
- Heading "Start with one *decision.*" → "Start a *conversation.*"
- Meta description now opens "Start a conversation." instead of "Start with
  one decision."
- Form button "Start with one decision →" → "Start a conversation →"
- Removed "You don't get a website. You get the deed."
- Unchanged by request: form wiring, `compound-inquiry` tag, the post-submit
  message ("one page, one decision"), and the form's solid gold submit button.

---

## Follow-ups (outside this rebuild)

- ~~Hero video replacement~~ — done in Stage 2 (new still).
- Content engine pass (brand_context + `content-corpus/`) after Stage 4.
  The 9 queued own-vs-rent topics in `content_calendar` are on hold — do not
  approve.

---

# Content corpus update (2026-10-24)

Brief: `corpus-update-brief.md`. The corpus in `content-corpus/` is what the
content engine reads (synced to Supabase `brand_context`, one row per file,
keyed by file name). Without this pass the engine would keep writing for the
old thesis.

## Corpus files

| File | Change |
|---|---|
| `positioning/core-positioning.md` | Full rewrite: the gap, its cost, correction not inflation. Compound, own-vs-rent, and the Squarespace/GHL competitor map removed. |
| `positioning/offers.md` | New. Strategic Session / The Commission / Standing Engagement. "The Compound" retired as an offer name. |
| `positioning/competitive-landscape.md` | New. Competition is studios, freelancers, agencies, in-house; differentiator is twenty years of agency-scale direction + the excavation method. |
| `voice/voice-guide.md` | Register kept ("landlords" dropped). Own-vs-rent signature moves and all four Compound tone examples removed. Added: plain sentences over aphorisms, one turn of phrase per section, X-not-Y limited to once per piece. Tone examples now from the live homepage copy. |
| `voice/vocabulary.md` | Full rewrite. Old terms (Compound, deed, gate/vault/press/grounds, compounds for you) moved to a "retired, never use" list. |
| `voice/banned-phrases.md` | Added: own the house, hold the deed, your own gates, stop renting, digital sovereignty (any public use), X-not-Y as a default, elevate, unlock, bring your brand to life, level up. |
| `voice/content-hooks.md` | New. Ninety-second judgment, good firms losing to worse-looking ones, the brand brain, excavation vs. invention, addition by subtraction, big-brand lessons for small firms, AI slop + brand voice. Platform-risk/ownership hooks retired. |
| `proof/case-studies.md` | Durindal rewritten as the lead case and a commercial outcome. Spec work marked as spec. Origin story and Narrative Alchemists removed (below). |
| `proof/testimonials.md` | New. Both Durindal quotes, verbatim. |
| `seo/keyword-clusters.md` | Four new pillars (brand-gap, brand-strategy, brand-voice, creative-direction), each with a signature story. Platform risk, website ownership, platform alternatives, and the Compound model dropped. |
| `content/image_avoid.md` | Added: stock-photo gloss, every light on, manicured hospitality interiors, smiling at camera, any text in image, collage. |
| `content/image_style.md` | Unchanged in this pass. The cold-navy doctrine (already live in the DB since Aug 10, previously uncommitted) is now committed. The brief's "warm-neutral grade" was dropped by Chad's decision: cold navy matches the site palette and hero. |

## Removed deliberately

- **Origin story** (the cloud platform that switched the work off, twice).
  Still true, still why the work is built by hand on infrastructure the client
  owns, but no longer the sales argument. Moved to
  `content-corpus/_internal/origin-story.md`. That folder is never synced to the
  engine.
- **Narrative Alchemists** (listed as "first commissioned Compound — in build").
  Inaccurate: the build didn't happen and the client is working with someone
  else. Removed from proof entirely.

## Outside the corpus (Supabase, not in git)

- **`backend_settings.trend_scan_config`** rewritten: search domains, include
  terms, keyword clusters, and audience description all targeted own-vs-rent
  (clusters included `compound`, include terms `own`/`rent`). Now targets the
  four new pillars; platform-risk terms added to the exclude list. Previous
  value backed up outside the repo.
- **`content_calendar`**: the 9 held own-vs-rent topics set to `archived`, each
  note prefixed "[REJECTED 2026-10-24 …]". Not deleted.
- **Published posts**: untouched. The five own-vs-rent posts stay live at their
  URLs and are excluded from the homepage rail. Article pages have no
  related-posts section, so nothing else surfaces them.

## Corpus pass 2 + verification (2026-10-24)

**Test 1** (engine blog draft "Why Good Firms Lose Pitches…", one-off social
post): no ownership/Compound argument anywhere. Failed on X-not-Y (~10 in the
blog, 3 in the post), used "compound" as a verb twice, and misstated Durindal
("a thesis about tactical luxury", "an identity system they called Tactical
Luxury").

Partly the corpus's own fault: pass 1 defined its core ideas as contrasts
("correction, not inflation", "nothing invented", "excavation vs. invention"),
which the model copied. **Pass 2:** rewrote those as plain statements; made
X-not-Y the top voice rule with concrete before/after rewrites and a
count-before-finishing check; banned "compound" in any sense, three-beat
closers, symptom/disease; pinned Durindal's facts (Tactical Luxury is the
studio's name for the system; exactly four deliverables); kept the footer
tagline out of articles.

**Test 2** (engine blog draft "What a Brand Brain Is…", second post): X-not-Y
down only slightly (~8 in the blog, 2 in the post). The blog also ignored the
pinned Durindal facts ("the brand brain was the first deliverable"). Conclusion:
the corpus is now clean; what's left comes from the article writer's hardcoded
prompt (provocative hook + "the reframe" step, 2,000-word minimum, "anchor in the
signature story") and needs an engine change, not more corpus.

**Also found:** the writer appends one of five hardcoded "compositions" to every
image prompt ("monumental subject dwarfing the frame, god rays", "surreal
landscape", "colossal space… cathedral of the idea") that contradict the image
doctrine. And on the live Worker, hero-image generation failed silently on both
test drafts (local OpenAI key and both image models check out).

**Test artifacts:** two drafts (unpublished) and their two calendar entries,
notes marked "TEST 2026-10-24".

## Article writer fixes + test 3 (2026-10-24)

Backend commit 7d09293 on `writer-fixes` (deployed, Worker version 39bac014):
plain opening instead of a provocative hook, no "reframe" step, 900–1,400
words, client facts limited to the proof section; an editing pass that cuts
X-not-Y lines and holds any draft with unsupported client claims (flagged on
the content board, publish asks for confirmation); image compositions from
`content/image_compositions` (new corpus file) instead of hardcoded
"monumental / god rays / surreal" lines; image errors now reported.

**Test 3** (same topic as test 1): ~1,360 words of article text (was ~2,600).
Durindal facts and quotes correct; one sentence flagged and the draft held
(a mild embellishment of the method, correctly caught). The editor reported
0 contrast lines kept, but ~5 milder "not X, but Y" forms remain, so its
self-count isn't reliable. Also exposed a corpus slip of mine: pass 2 described
Durindal's thesis as "about defense go-to-market", which isn't in the proof;
fixed (b5c9a02).

**Image failures explained:** the live Worker's OpenAI key returns "The model
'gpt-image-1' does not exist" (the local key has access). Every engine image
since that key was set has silently failed.

**Published images checked:** 4 of 7 off-doctrine — two show the old
hardcoded compositions (website-ownership: monumental slab + god rays;
deplatforming: tiny figure before a big building), two are all-warm amber from
before the cold-navy doctrine (brand-stack audit, SaaS pricing). All four are on
the off-thesis posts that no longer appear on the homepage. The two rail posts'
images are on-doctrine but nearly the same shot.

**Test artifacts:** three unpublished drafts and their calendar entries, all
notes marked "TEST 2026-10-24".

## Code-level contrast check + test 4 (2026-10-24)

Backend f1668da / 59b665e (deployed, Worker version 9322af63):
`src/lib/content/contrast.ts` counts "not X, it's Y" constructions
deterministically, including the softer forms (", not", "not… but",
"rather than", "instead of", "isn't X — it's Y", two-sentence turns), ignoring
quoted speech and blockquotes (`npm run test:contrast`, 20 tests). Over the
limit of one after the editing pass → the model gets the exact sentences to
rewrite (client-claim sentences frozen), up to two rounds with a recount; still
over → held, with the remaining sentences listed on the content board.

Recounted with the detector: test 1 had 15, test 2 had 16, test 3 had 8 (the
editor had reported 0).

**Test 4** (same topic): editor self-reported 0, code found 5, one rewrite
round → 1 (within limit). Held on one real embellishment ("the gap… was costing
them in the first impression", not in the proof). The editor also listed a
supported claim and then said it was fine; tightened in 59b665e.

**OpenAI key, diagnosed:** the live Worker's key and the local key (…TNwA,
project `proj_9GRp…`) are both in org `personal-vhrf4u`. The local key passes
the `gpt-image-1` model check, so the org is verified. The Worker's key is a
different key in that org — most likely a different project, or a project with
model limits. Not changed yet.
