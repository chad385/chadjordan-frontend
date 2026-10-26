import Link from 'next/link';
import Reveal from '@/components/compound/Reveal';
import JournalPreview from '@/components/compound/JournalPreview';
import LeadForm from '@/components/compound/LeadForm';
import { WORK_CARDS } from '@/lib/work';

// Rendered per request so the "From the Journal" teaser reflects the latest
// published articles without a redeploy.
export const dynamic = 'force-dynamic';

const METHOD = [
  { n: '01', k: 'Find the dissonance.', v: 'Where what you\u2019re saying and what you are stop matching. It\u2019s usually in language you borrowed because it felt safer than your own.' },
  { n: '02', k: 'Dig for what\u2019s actually true.', v: 'A long conversation, not a questionnaire. The thing that was there at the beginning, before someone told you to make it more accessible.' },
  { n: '03', k: 'Cut until only that\u2019s left.', v: 'This is most of the work, and the part that feels like losing something.' },
  { n: '04', k: 'Build it so you can live in it.', v: 'Identity, image world, the site, the system that keeps it running. Built by hand, on infrastructure you own.' },
];

const DELIVERABLES = [
  { k: 'The brand brain.', v: 'Everything true about you, written down — voice, positioning, proof, the words you\u2019ll never say. The document every other asset is built from, and the one almost nobody has.' },
  { k: 'Identity.', v: 'Logo, type, color, and the rules for using them.' },
  { k: 'Image world.', v: 'A visual DNA locked once, then applied for close to free. Every image after the first one costs you almost nothing and stays on brand.' },
  { k: 'The site.', v: 'Built by hand as a commissioned piece. Yours, on infrastructure you own.' },
  { k: 'The system.', v: 'Content, capture, and the quiet automation that keeps it running.' },
];

const OFFERS = [
  { n: '1', name: 'The Strategic Session', price: '$1,500', note: 'credited toward what comes next', body: 'Ninety minutes. One decision. A one-page brief in your hands within 48 hours.' },
  { n: '2', name: 'The Commission', price: 'By commission', note: '', body: 'The full build. Identity, image world, site, and system, made so your team can live inside it.' },
  { n: '3', name: 'The Standing Engagement', price: 'Monthly', note: '', body: 'I keep it running and growing, month over month, so what you built doesn\u2019t go stale.' },
];

const DURINDAL_QUOTES = [
  {
    q: 'It feels alive because we can live it. It\u2019s like walking into a house.',
    name: 'Garrath L. Robinson',
    role: 'COO & Co-Founder, Durindal',
  },
  {
    q: 'Design that drives results is basically a form of engineering. Chad isn\u2019t the cheapest designer that way, and that\u2019s fine, because if you want outcomes over looks, even $25,000 is a bargain.',
    name: 'Sebastian D.P. Hidalgo',
    role: 'CSO & Co-Founder, Durindal',
  },
];

const STATS = [
  ['2×', 'Webby National Honoree'],
  ['20+', 'Years Creative Direction'],
  ['26M', 'Thrillist Video Views'],
  ['$2B+', 'Brand Revenue Scale'],
];

export default function HomePage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-late-night.webp"
          alt="A founder alone at her desk late at night, studying her own website on a laptop"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '42% 30%' }}
          fetchPriority="high"
        />
        {/* The still is already dark, so the overlay is lighter up top than it
            was over the video; it only deepens where the copy sits. */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(13,27,46,0.25) 0%, rgba(13,27,46,0.1) 40%, rgba(13,27,46,0.92) 100%)' }}
        />
        <div className="relative max-w-[1200px] mx-auto w-full px-6 pb-20 pt-40">
          <p className="label">Creative Director / Brand Strategist</p>
          <h1 className="font-heading text-white mt-6 leading-[1.04] max-w-[28ch]"
            style={{ fontSize: 'clamp(2.4rem, 5.2vw, 4.6rem)', fontWeight: 400 }}>
            You&rsquo;re better than you <em>look.</em>
          </h1>
          <p className="text-text-muted mt-7 max-w-[56ch] text-[1.05rem] leading-relaxed">
            I close the gap between what you&rsquo;ve actually done and what a stranger concludes in ninety seconds.
          </p>
          <p className="label mt-8 !text-[0.6rem] text-white/55">
            2× Webby National Honoree · $2B+ brand revenue scale · AI Trailblazers, Inizio Evoke
          </p>
          <div className="mt-8">
            <Link href="/#work"
              className="label !text-[0.62rem] inline-block border border-[color:var(--border-accent-soft)] !text-text-accent px-6 py-3.5 hover:bg-[color:var(--brand-accent)] hover:!text-[color:var(--surface-page)] transition-colors">
              See the work →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 01 THE DISSONANCE ────────────────────────────────── */}
      {/* Text only, deliberately roomy: this has to land before anything else can. */}
      <section id="dissonance" className="px-6 py-28 md:py-44">
        <Reveal className="max-w-[1000px] mx-auto">
          <p className="label" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 28, height: 1, background: 'var(--brand-accent)', display: 'inline-block' }} />
            The dissonance
          </p>
          <h2 className="font-heading text-white mt-4 max-w-[26ch] leading-[1.05]"
            style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3rem)', fontWeight: 400 }}>
            You feel it every time you pitch.
          </h2>
          <div className="mt-10 max-w-[58ch] space-y-6 text-text-muted text-[1.05rem] md:text-[1.15rem] leading-[1.8]">
            <p>
              You know what you&rsquo;re capable of. Your clients know it after six months of working with you. But
              the people who haven&rsquo;t met you yet are deciding in ninety seconds, from a website you&rsquo;ve
              been meaning to fix.
            </p>
            <p>
              So you over-explain. You discount to compensate. You watch worse firms win the work because they look
              like they&rsquo;ve been doing it longer.
            </p>
          </div>
          <p className="text-white mt-14 md:mt-20 pt-10 max-w-[30ch] font-heading text-2xl md:text-[2rem] leading-snug hairline">
            The gap costs you money every quarter it stays <em className="pivot">open.</em>
          </p>
        </Reveal>
      </section>

      {/* ── 02 DURINDAL (the proof) ─────────────────────────── */}
      {/* The proof the page rests on: full-bleed image, story, two founder
          quotes, image strip, link to the case study. */}
      <section id="durindal" style={{ background: 'var(--surface-card)' }}>
        <div className="relative min-h-[72vh] flex items-end overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/work/durindal/dur_hero.png" alt="Durindal brand imagery — a gloved hand on a black dossier"
            className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(21,35,56,0.35) 0%, rgba(21,35,56,0.2) 45%, rgba(21,35,56,0.96) 100%)' }} />
          <div className="relative max-w-[1200px] mx-auto w-full px-6 pb-14 md:pb-16">
            <p className="label" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 28, height: 1, background: 'var(--brand-accent)', display: 'inline-block' }} />
              The proof
            </p>
            <h2 className="font-heading text-white mt-4 max-w-[18ch] leading-[1.05]"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)', fontWeight: 400 }}>
              Garrath came in needing a website.
            </h2>
            <p className="label mt-4 !text-[0.6rem] text-white/50">Durindal · Tactical Luxury · Full brand system</p>
          </div>
        </div>

        <div className="px-6 pt-16 md:pt-24 pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto">
            <Reveal className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20 items-center">
              <div className="space-y-6 text-text-muted text-[1.05rem] md:text-[1.1rem] leading-[1.8] max-w-[54ch]">
                <p>
                  Durindal was Garrath and Sebastian — two founders and a thesis. No product yet. They were selling
                  judgment to people who wire eight figures, and their presentation said they were new.
                </p>
                <p>
                  We built Tactical Luxury — a complete identity, an image world, a site, and a decision filter their
                  team still uses daily. By the time we were finished they looked like a firm with a history.
                </p>
              </div>
              <div style={{ border: '0.5px solid var(--border-hairline)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/work/durindal/dur_briefing.png" alt="Durindal founder imagery — the briefing"
                  className="w-full block" loading="lazy" />
              </div>
            </Reveal>

            {/* Founder quotes — same hairline-grid pattern as the offers. */}
            <Reveal className="mt-20 md:mt-28">
              <div className="grid gap-px lg:grid-cols-2"
                style={{ background: 'var(--border-hairline)', border: '0.5px solid var(--border-hairline)' }}>
              {DURINDAL_QUOTES.map((t) => (
                <figure key={t.name} className="flex flex-col p-8 md:p-12" style={{ background: 'var(--surface-card)' }}>
                  <span aria-hidden className="font-heading text-text-accent leading-none" style={{ fontSize: '3.5rem' }}>&ldquo;</span>
                  <blockquote className="font-heading text-white leading-[1.35] flex-1 mt-1"
                    style={{ fontSize: 'clamp(1.25rem, 2.1vw, 1.65rem)', fontWeight: 400 }}>
                    {t.q}
                  </blockquote>
                  <figcaption className="mt-10 pt-5" style={{ borderTop: '0.5px solid var(--border-hairline)' }}>
                    <div className="label !text-[0.62rem] text-white/85">{t.name}</div>
                    <div className="label !text-[0.55rem] mt-1.5">{t.role}</div>
                  </figcaption>
                </figure>
              ))}
              </div>
            </Reveal>

            <Reveal className="grid gap-4 mt-20 md:mt-28 grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
              {[
                ['/work/durindal/dur_dossier.png', 'Durindal brand imagery — the lobby after hours', 'col-span-2 lg:col-span-1 aspect-[16/9]'],
                ['/work/durindal/dur_carabiner.png', 'Durindal identity as object — machined carabiner', 'aspect-[4/5]'],
                ['/work/durindal/dur_window.png', 'Durindal founder imagery — field intelligence, through glass', 'aspect-[4/5]'],
              ].map(([src, alt, shape]) => (
                <div key={src} className={`overflow-hidden lg:aspect-auto lg:h-[340px] ${shape}`}
                  style={{ border: '0.5px solid var(--border-hairline)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </Reveal>

            <div className="mt-14">
              <Link href="/work/durindal"
                className="label !text-[0.62rem] inline-block border px-5 py-3 text-text-accent hover:bg-[color:var(--brand-accent)] hover:text-[color:var(--surface-page)] transition-colors"
                style={{ borderColor: 'var(--border-accent-soft)' }}>
                Read the case study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 SELECTED WORK ─────────────────────────────────── */}
      <section id="work" className="px-6 py-24 md:py-32 hairline"
        style={{ borderTop: '0.5px solid var(--border-hairline)' }}>
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <p className="label">Selected work</p>
            <h2 className="font-heading text-white mt-4 max-w-[22ch] leading-[1.05]"
              style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3rem)', fontWeight: 400 }}>
              Twenty years of knowing what big <em>looks like.</em>
            </h2>
          </Reveal>
          <div className="grid gap-5 mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {WORK_CARDS.map((w) => {
              const inner = (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={w.img} alt={w.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500" />
                  <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(180deg, rgba(13,27,46,0.1) 30%, rgba(13,27,46,0.92) 100%)' }} />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="font-heading text-white text-xl leading-tight">{w.title}</h3>
                    <span className="text-text-muted text-[0.82rem] mt-1.5">{w.sub}</span>
                    <span className="label !text-[0.55rem] text-text-accent mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      {w.external ? 'Open csgpro.app →' : 'View case study →'}
                    </span>
                  </div>
                  <span className="label absolute top-4 right-4 !text-[0.55rem] text-text-accent px-2 py-1"
                    style={{ border: '0.5px solid var(--border-accent-soft)' }}>{w.tag}</span>
                </>
              );
              const cls = 'group relative block overflow-hidden aspect-[4/5]';
              const style = { border: '0.5px solid var(--border-hairline)' };
              return (
                <Reveal key={w.title}>
                  {w.external ? (
                    <a href={w.href} target="_blank" rel="noreferrer" className={cls} style={style}>{inner}</a>
                  ) : (
                    <Link href={w.href} className={cls} style={style}>{inner}</Link>
                  )}
                </Reveal>
              );
            })}
          </div>
          <Reveal>
            <p className="text-white mt-14 max-w-[44ch] font-heading text-xl md:text-2xl leading-snug">
              Most of what I know about making a small company look inevitable, I learned making large ones look that
              way first.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 04 THE METHOD ────────────────────────────────────── */}
      {/* A sequence, so it reads as one: four full-width rows stacked in order,
          hairline between. Big number, heading-scale step, readable body.
          Sits on the ground; What You Get sits on the raised surface. */}
      <section id="method" className="px-6 py-28 md:py-44 hairline"
        style={{ borderTop: '0.5px solid var(--border-hairline)' }}>
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <p className="label">The method</p>
            <h2 className="font-heading text-white mt-4 max-w-[22ch] leading-[1.05]"
              style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.1rem)', fontWeight: 400 }}>
              Nothing invented. Everything <em>excavated.</em>
            </h2>
          </Reveal>
          <ol className="mt-16 md:mt-24" style={{ borderTop: '0.5px solid var(--border-hairline)' }}>
            {METHOD.map((m) => (
              <li key={m.n} style={{ borderBottom: '0.5px solid var(--border-hairline)' }}>
                <Reveal className="grid gap-5 md:gap-x-10 lg:gap-x-14 py-12 md:py-20 md:grid-cols-[7rem_minmax(0,1fr)] lg:grid-cols-[9rem_minmax(0,1fr)] items-baseline">
                  <span className="text-text-accent"
                    style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', letterSpacing: '0.22em' }}>
                    {m.n}
                  </span>
                  <div>
                    <h3 className="font-heading text-white leading-[1.1]"
                      style={{ fontSize: 'clamp(1.7rem, 3.4vw, 2.6rem)', fontWeight: 400 }}>
                      {m.k}
                    </h3>
                    <p className="text-text-muted text-[1.1rem] md:text-[1.25rem] leading-[1.7] max-w-[50ch] mt-5">
                      {m.v}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 05 WHAT YOU GET ──────────────────────────────────── */}
      {/* The conversion section. Not a sequence, so no numbers, and a grid
          rather than rows so it doesn't echo the Method above it. */}
      <section id="deliverables" className="px-6 py-28 md:py-40 hairline"
        style={{ borderTop: '0.5px solid var(--border-hairline)', background: 'var(--surface-card)' }}>
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <p className="label">Deliverables</p>
            <h2 className="font-heading text-white mt-4 leading-[1.05]"
              style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.1rem)', fontWeight: 400 }}>
              What you <em>get.</em>
            </h2>
          </Reveal>
          {/* The brand brain spans the top (everything else is built from it);
              the other four sit in a 2×2 below. Hairline grid, no icons. */}
          <Reveal className="mt-16 md:mt-24">
            {/* Same 0.5px rules as the Method rows: a rule under each row and
                one between the two columns. No outer frame. */}
            <dl className="grid md:grid-cols-2" style={{ borderTop: '0.5px solid var(--border-hairline)' }}>
              {DELIVERABLES.map((d, i) => {
                const feature = i === 0;
                const leftCol = i === 1 || i === 3;
                return (
                  <div key={d.k}
                    className={feature
                      ? 'md:col-span-2 py-12 md:py-16 grid gap-5 lg:grid-cols-2 lg:gap-16 items-baseline'
                      : `py-12 md:py-14 ${leftCol ? 'md:pr-12 md:[border-right:0.5px_solid_var(--border-hairline)]' : 'md:pl-12'}`}
                    style={{ borderBottom: '0.5px solid var(--border-hairline)' }}>
                    <dt className="font-heading text-white leading-[1.1]"
                      style={{ fontSize: feature ? 'clamp(2rem, 4vw, 3rem)' : 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 400 }}>
                      {d.k}
                    </dt>
                    <dd className={`text-text-muted text-[1.1rem] md:text-[1.25rem] leading-[1.7] max-w-[46ch] ${feature ? '' : 'mt-4'}`}>
                      {d.v}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── 06 THREE WAYS IN ─────────────────────────────────── */}
      <section id="session" className="px-6 py-24 md:py-28 hairline"
        style={{ borderTop: '0.5px solid var(--border-hairline)' }}>
        <Reveal className="max-w-[1200px] mx-auto">
          <p className="label">How to work with me</p>
          <h2 className="font-heading text-white mt-4"
            style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3rem)', fontWeight: 400 }}>
            Three ways <em>in.</em>
          </h2>
          <div className="grid gap-px mt-12 lg:grid-cols-3" style={{ background: 'var(--border-hairline)' }}>
            {OFFERS.map((o) => (
              <div key={o.name} className="p-8 flex flex-col" style={{ background: 'var(--surface-page)' }}>
                <span className="label !text-[0.6rem] text-text-accent">{o.n}</span>
                <h3 className="font-heading text-white text-2xl mt-4">{o.name}</h3>
                <p className="text-text-muted mt-3 text-[0.95rem] leading-relaxed flex-1">{o.body}</p>
                <div className="mt-6 pt-5 hairline" style={{ borderTop: '0.5px solid var(--border-hairline)' }}>
                  <div className="font-heading text-white text-xl">{o.price}</div>
                  {o.note && <div className="label !text-[0.58rem] mt-1">{o.note}</div>}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <LeadForm source="home" />
          </div>
        </Reveal>
      </section>

      {/* ── 07 ABOUT ─────────────────────────────────────────── */}
      <section id="about" className="px-6 py-24 md:py-28 hairline"
        style={{ borderTop: '0.5px solid var(--border-hairline)', background: 'var(--surface-card)' }}>
        <Reveal className="max-w-[1200px] mx-auto grid gap-14 lg:grid-cols-[1.4fr_1fr] items-start">
          <div>
            <p className="label">About</p>
            <h2 className="font-heading text-white mt-4 max-w-[16ch] leading-[1.08]"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.7rem)', fontWeight: 400 }}>
              Made with intent. Every <em>frame.</em>
            </h2>
            <p className="text-text-muted mt-6 leading-relaxed max-w-[60ch]">
              Twenty years directing brand — national broadcast campaigns, Webby-winning digital platforms, DefenseTech
              identities, AI-powered production systems. A decade of that overlapped with a real estate license, which
              taught me how deals actually close and what people are really afraid of when they&rsquo;re about to commit
              money.
            </p>
            <p className="text-text-muted mt-4 leading-relaxed max-w-[60ch]">
              Currently senior creative lead at Inizio Evoke, a top-10 global healthcare agency, and a member of its AI
              Trailblazers group.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px mt-10" style={{ background: 'var(--border-hairline)' }}>
              {STATS.map(([num, label]) => (
                <div key={label} className="p-5" style={{ background: 'var(--surface-card)' }}>
                  <div className="font-heading text-text-accent text-3xl">{num}</div>
                  <div className="label !text-[0.55rem] mt-2 leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hairline" style={{ border: '0.5px solid var(--border-hairline)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/about-chad.jpg" alt="Chad Jordan directing at the desk — storyboards, lenses, lamp glow"
              className="w-full h-full object-cover" style={{ objectPosition: '38% 50%' }} />
          </div>
        </Reveal>
      </section>

      {/* ── 08 JOURNAL ───────────────────────────────────────── */}
      <JournalPreview />
    </main>
  );
}
