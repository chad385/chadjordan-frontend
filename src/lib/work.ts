// Case-study content, ported from the old site's case pages into structured
// data. The /work/[slug] route renders these; the homepage grid links to them.

export type GalleryBlock = { images: string[]; caption: string; num?: string };
export type MetaRow = { label: string; value: string };
export type Step = { title: string; body: string };

export type Case = {
  slug: string;
  num: string;            // "01 — Spec Campaign"
  category: string;       // short tag e.g. "Spec"
  titleLead: string;      // first line
  titlePivot: string;     // gold-italic second line
  subtitle: string;
  heroImg: string;
  briefLead: string;      // brief heading lead
  briefPivot: string;     // gold-italic part of heading
  briefBody: string[];
  meta: MetaRow[];
  steps: Step[];
  gallery: GalleryBlock[];
  insight: string;
  next: string;           // slug of next case
};

const P = '/work';

export const CASES: Record<string, Case> = {
  nasa: {
    slug: 'nasa',
    num: '01 — Spec Campaign',
    category: 'Spec',
    titleLead: 'NASA × Ralph Lauren',
    titlePivot: 'Black Label — Artemis',
    subtitle: 'Fashion Editorial · Kennedy Space Center · AI Production · 2025',
    heroImg: `${P}/nasa/nasa_01.png`,
    briefLead: 'A complete fashion editorial',
    briefPivot: 'at the most restricted location on earth.',
    briefBody: [
      'The brief was simple: what if Ralph Lauren Black Label partnered with NASA on the Artemis program — a prestige collection for the people who build missions? The Artemis patch, the wool overcoat, the hand-polished dress shoes on launch tower grating.',
      'No location permit. No casting director. No production crew. No travel budget. One creative director, a clear visual brief, and a 7-layer AI direction system. Nine campaign-ready images delivered as a complete fashion editorial.',
    ],
    meta: [
      { label: 'Project Type', value: 'Spec Campaign — Fashion Editorial' },
      { label: 'Brand', value: 'NASA × Ralph Lauren Black Label' },
      { label: 'Location', value: 'Kennedy Space Center (AI-directed)' },
      { label: 'Deliverables', value: '9-image campaign, print & digital ready' },
      { label: 'Tools', value: 'Gemini Flash · CSG PRO Framework' },
      { label: 'Year', value: '2025' },
    ],
    steps: [
      { title: 'Concept & Brief', body: 'Established the brand collision — prestige menswear meets space program. Defined the emotional territory: gravity, precision, legacy. The Artemis mission patch as the product hero.' },
      { title: 'Location Direction', body: 'Mapped KSC landmarks — the VAB, launch pad 39B, the crawler path, the access tower grating. Each location chosen for its visual weight and what it communicates about the brand.' },
      { title: 'Shot Architecture', body: 'Built a 9-shot sequence — hero editorial, wide establishing, character studies, detail work, ensemble. Each frame directed with specific lens specs, lighting conditions, and talent direction.' },
      { title: 'Production', body: 'Executed through the CSG PRO 7-layer system — Scene Foundation through Render Parameters. Character consistency maintained across all nine frames without a single re-cast.' },
    ],
    gallery: [
      { images: [`${P}/nasa/nasa_01.png`], caption: 'Campaign Hero — Artemis patch detail, launch pad 39B', num: '01 / 06' },
      { images: [`${P}/nasa/nasa_03.png`], caption: 'Establishing Shot — The approach, crawler path, SLS at golden hour', num: '02 / 06' },
      { images: [`${P}/nasa/nasa_02.png`, `${P}/nasa/nasa_04.png`], caption: 'Character Studies — Pre-launch transport / VAB Door 7', num: '03–04 / 06' },
      { images: [`${P}/nasa/nasa_06.png`], caption: 'Detail — Hand-polished Black Label oxfords, launch access tower grating', num: '05 / 06' },
      { images: [`${P}/nasa/nasa_05.png`], caption: 'Complete Campaign — 9 images, print and digital ready', num: '06 / 06' },
    ],
    insight: 'No location permit. No talent agency. No production crew. No six-figure budget. A complete fashion editorial — built with a brief and a system.',
    next: 'gshock',
  },

  gshock: {
    slug: 'gshock',
    num: '02 — Spec Campaign',
    category: 'Spec',
    titleLead: 'G-Shock DW5600',
    titlePivot: 'New England Fisherman',
    subtitle: 'Product Campaign · 5-Shot Series · Print Ad · 2025',
    heroImg: `${P}/gshock/gs_01.png`,
    briefLead: 'One product image.',
    briefPivot: 'A complete campaign.',
    briefBody: [
      'The brief: G-Shock DW5600 — a watch built for conditions where everything else fails. The concept: a New England commercial fisherman, 4AM, North Atlantic. No crew, no location, no talent agency.',
      'Started with a single product reference pulled online, upscaled it to 4K, then used it as a reference image to build five distinct campaign shots — each with specific lens specs, lighting conditions, and a consistent character across every frame. Finished with a complete print ad including headline and body copy.',
    ],
    meta: [
      { label: 'Project Type', value: 'Spec Campaign — Product' },
      { label: 'Brand', value: 'G-Shock / Casio DW5600' },
      { label: 'Concept', value: 'New England Fisherman, North Atlantic' },
      { label: 'Deliverables', value: '5 campaign shots + full print ad' },
      { label: 'Tools', value: 'Gemini Flash · CSG PRO Framework' },
      { label: 'Year', value: '2025' },
    ],
    steps: [
      { title: 'Product Reference', body: 'Sourced a clean product image online. Prompted a 4K high-resolution upscale and loaded it as a reference image — establishing the exact colorway, face, and proportions to maintain across every shot.' },
      { title: 'Character & World', body: 'Established the character brief: rugged 45-year-old New England crabber, pre-dawn, North Atlantic. Defined the emotional territory — grit, reliability, zero tolerance for failure — then built the world around it.' },
      { title: 'Shot Architecture', body: 'Built a five-shot sequence with specific lens specs for each: 35mm wide establishing, 85mm close detail, interior cabin scene, helm in storm, underwater submersion. Each frame a different emotional beat.' },
      { title: 'Print Ad', body: 'Finished with a complete print ad — headline, body copy, product integration, and logo placement. Campaign-ready for any media format without a single day on location.' },
    ],
    gallery: [
      { images: [`${P}/gshock/gs_01.png`], caption: 'Hero Shot — 35mm Arri Master Prime, North Atlantic, pre-dawn', num: '01 / 06' },
      { images: [`${P}/gshock/gs_02.png`, `${P}/gshock/gs_05.png`], caption: 'Detail Shots — 85mm close / underwater submersion', num: '02–03 / 06' },
      { images: [`${P}/gshock/gs_03.png`, `${P}/gshock/gs_04.png`], caption: 'Environmental Shots — Cabin interior / helm in storm', num: '04–05 / 06' },
      { images: [`${P}/gshock/gs_ad.png`], caption: 'The Print Ad — headline, body copy, campaign-ready', num: '06 / 06' },
    ],
    insight: 'One product reference image. Five cinematic campaign shots. A finished print ad. Built in a single session.',
    next: 'panerai',
  },

  panerai: {
    slug: 'panerai',
    num: '03 — Case Study',
    category: 'Spec',
    titleLead: 'Panerai Luminor Marina',
    titlePivot: 'Open Water.',
    subtitle: 'Luxury Watch · Lifestyle Campaign · AI Direction · 2025',
    heroImg: `${P}/panerai/pan_hero.png`,
    briefLead: 'Five frames.',
    briefPivot: 'One watch earning its place in the world.',
    briefBody: [
      'Panerai doesn’t need an introduction. The Luminor Marina has been worn by navy divers and design obsessives for decades — the case bold enough to clear a room, the movement precise enough to trust your life to. The question isn’t what the watch is. It’s where it belongs.',
      'The brief was to find that location. Not a studio. Not a velvet box. Somewhere the watch earns its keep — where the yellow strap reads as intention, not accident. A windswept Atlantic coast in late autumn. Golden light at a low angle. A character who doesn’t need to prove anything.',
    ],
    meta: [
      { label: 'Project Type', value: 'Luxury Watch Lifestyle Campaign' },
      { label: 'Brand', value: 'Panerai — Luminor Marina' },
      { label: 'Format', value: 'Spec / AI Direction' },
      { label: 'Deliverables', value: '5-shot campaign, print & digital' },
      { label: 'Tools', value: 'Gemini Flash · Adobe Firefly · CSG PRO' },
      { label: 'Year', value: '2025' },
    ],
    steps: [
      { title: 'Character First', body: 'Built the archetype before the watch. Someone who’s made enough decisions he doesn’t need to prove anything. Orange beanie, grey hoodie, yellow-lens aviators. The accessories define the strap before the strap defines the watch.' },
      { title: 'Environment as Argument', body: 'CSG PRO locked the scene foundation to Atlantic-facing coastline in late autumn — geological texture, lichen rock, salt grass. Lighting specified as low-angle raking sun, maximum three hours before golden hour.' },
      { title: 'Editorial Sequencing', body: 'Built the sequence wide-to-tight: establishing landscape, mid lifestyle, portrait, wrist establishing, macro close-up. The watch becomes a conclusion, not an introduction. Each frame earns the next.' },
      { title: 'The Close-Up Last', body: 'The macro dial shots came after the lifestyle was locked. Once the character and environment were established, the close-up language was already defined — same light, same texture, same weight.' },
    ],
    gallery: [
      { images: [`${P}/panerai/pan_hero.png`, `${P}/panerai/pan_overlook.png`], caption: 'Shot 01 — Establishing / Coastal Overlook. Character, environment, watch secondary.', num: '01–02 / 06' },
      { images: [`${P}/panerai/pan_walk.png`, `${P}/panerai/pan_portrait.png`], caption: 'Shot 05 — Cinematic walk / Shot 04 — Portrait. Yellow strap in dialogue with yellow lenses.', num: '03–04 / 06' },
      { images: [`${P}/panerai/pan_macro_horiz.png`, `${P}/panerai/pan_macro_vert.png`], caption: 'Shot 01A — Macro / Crown guard, sub-seconds detail, strap texture. Final frame in the sequence.', num: '05–06 / 06' },
    ],
    insight: 'A luxury object earns its close-up only after you’ve earned the wider frame. The watch is the last thing you notice — and the only thing you remember.',
    next: 'durindal',
  },

  durindal: {
    slug: 'durindal',
    num: '04 — Brand System',
    category: 'System',
    titleLead: 'Durindal',
    titlePivot: 'Tactical Luxury',
    subtitle: 'DefenseTech GTM · Full Brand System · Cinematic Identity · 2024',
    heroImg: `${P}/durindal/dur_hero.png`,
    briefLead: 'Where defense meets',
    briefPivot: 'precision luxury.',
    briefBody: [
      'Durindal is a DefenseTech go-to-market firm. The brief began as a website. It expanded into something larger: a complete brand world that had to operate in both the boardroom and the field without blinking.',
      'Tactical Luxury became the brand system — identity, cinematic founder imagery, moodboards, site redesign, and a strategic decision-filter framework. Everything built to communicate that this is a firm where precision is non-negotiable and the aesthetic matches the capability.',
    ],
    meta: [
      { label: 'Project Type', value: 'Full Brand System' },
      { label: 'Client', value: 'Durindal — DefenseTech GTM' },
      { label: 'Positioning', value: 'Tactical Luxury' },
      { label: 'Deliverables', value: 'Identity · Imagery · Site · Brand Framework' },
      { label: 'Tools', value: 'Gemini Flash · Midjourney · CSG PRO' },
      { label: 'Year', value: '2024' },
    ],
    steps: [
      { title: 'Brand Positioning', body: 'Established Tactical Luxury as the brand territory — the intersection where defense-grade precision meets high-end aesthetic sensibility. A filter for every creative decision that followed.' },
      { title: 'Cinematic Identity', body: 'Built the visual language around glass, concrete, low light, and controlled motion. Every image directed to communicate authority without aggression — the posture of a firm that doesn’t need to announce itself.' },
      { title: 'Brand Extension', body: 'Extended the system into product territory — a branded duffel in six environments, a logo translated into a machined metal carabiner, and a tactical operational map as brand collateral. The world, fully inhabited.' },
      { title: 'Decision Framework', body: 'Delivered a brand decision filter — a strategic tool the founders use to evaluate whether any creative, messaging, or positioning decision is on-brand. Tactical Luxury as a living operating system.' },
    ],
    gallery: [
      { images: [`${P}/durindal/dur_hero.png`], caption: 'Brand Hero — The posture of authority. GRID 42T / REV 1.2', num: '01 / 07' },
      { images: [`${P}/durindal/dur_briefing.png`, `${P}/durindal/dur_window.png`], caption: 'Founder Imagery — The briefing / Field intelligence', num: '02–03 / 07' },
      { images: [`${P}/durindal/dur_dossier.png`, `${P}/durindal/dur_map.png`], caption: 'Brand Collateral — Tactical dossier, carbon fiber, GRID 42T markings', num: '04–05 / 07' },
      { images: [`${P}/durindal/dur_carabiner.png`, `${P}/durindal/dur_duffel.png`], caption: 'Brand Extensions — Identity as object / Product in world', num: '06–07 / 07' },
    ],
    insight: 'The brief was a website. The output was a complete brand world — identity, imagery, collateral, and a decision filter the founders still use today.',
    next: 'porsche',
  },

  porsche: {
    slug: 'porsche',
    num: '05 — Personal Exploration',
    category: 'Exploration',
    titleLead: 'Porsche 928',
    titlePivot: 'The Forgotten Grand Tourer',
    subtitle: 'Automotive Editorial · Mood Direction · Personal Work · 2025',
    heroImg: `${P}/porsche/p_sleeping.png`,
    briefLead: 'The Porsche that',
    briefPivot: 'history got wrong.',
    briefBody: [
      'The 928 was supposed to replace the 911. Instead it became the most misunderstood car Porsche ever built — too grand for the purists, too unconventional for everyone else. It ended production in 1995 with a devoted following and almost no cultural moment of its own.',
      'This is a personal project. No brief, no client. Just four shots built to give the 928 the editorial it never had — cinematic, restrained, and honest about what it actually is: a front-engined V8 grand tourer that aged into something genuinely beautiful.',
    ],
    meta: [
      { label: 'Project Type', value: 'Personal Exploration' },
      { label: 'Subject', value: 'Porsche 928 — 1977–1995' },
      { label: 'Concept', value: 'The Forgotten Grand Tourer' },
      { label: 'Deliverables', value: '4-shot editorial series' },
      { label: 'Tools', value: 'Midjourney · Gemini Flash · CSG PRO' },
      { label: 'Year', value: '2025' },
    ],
    steps: [],
    gallery: [
      { images: [`${P}/porsche/p_sleeping.png`], caption: 'The Sleeping Grand Tourer — Rear symmetry, industrial warehouse', num: '01 / 04' },
      { images: [`${P}/porsche/p_garage.png`], caption: 'The Sweeping Profile — Three-quarter front, brick warehouse, diffused light', num: '02 / 04' },
      { images: [`${P}/porsche/p_cockpit.png`, `${P}/porsche/p_profile.png`], caption: 'Analog Cockpit / The Glass Hatch — Interior detail and clean profile', num: '03–04 / 04' },
    ],
    insight: 'No brief. No client. No budget. Just a car that deserved better than the editorial history gave it.',
    next: 'nasa',
  },
};

export const CASE_SLUGS = Object.keys(CASES);

// Homepage grid — 5 internal case studies + CSG PRO linking to its live app.
export type WorkCard = { img: string; title: string; sub: string; tag: string; href: string; external?: boolean };
export const WORK_CARDS: WorkCard[] = [
  { img: '/work/nasa.png', title: 'NASA × Ralph Lauren', sub: 'Artemis Collection · Kennedy Space Center', tag: 'Spec', href: '/work/nasa' },
  { img: '/work/durindal.png', title: 'Durindal', sub: 'Tactical Luxury · DefenseTech GTM · Full Identity', tag: 'System', href: '/work/durindal' },
  { img: '/work/gshock.png', title: 'G-Shock DW5600', sub: 'New England Fisherman · 5-Shot Series', tag: 'Spec', href: '/work/gshock' },
  { img: '/work/panerai.png', title: 'Panerai Luminor Marina', sub: 'Open Water · Lifestyle Campaign', tag: 'Spec', href: '/work/panerai' },
  { img: '/work/porsche.png', title: 'Porsche 928', sub: 'The Forgotten Grand Tourer · Mood Direction', tag: 'Exploration', href: '/work/porsche' },
  { img: '/work/csgpro.png', title: 'CSG PRO', sub: 'Visual Direction System · 7-Layer Framework', tag: 'Product', href: 'https://csgpro.app', external: true },
];
