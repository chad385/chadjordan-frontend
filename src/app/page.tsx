import Link from 'next/link';
import Divergence from '@/components/compound/Divergence';
import Reveal from '@/components/compound/Reveal';
import LeadForm from '@/components/compound/LeadForm';
import { WORK_CARDS } from '@/lib/work';

const ROOMS = [
  { k: 'The gate', v: 'A site built as a commissioned piece, not skinned from a template. It captures the lead instead of losing it.' },
  { k: 'The vault', v: 'Your CRM, your list, your pipeline — on a system nobody can price-gouge or repossess.' },
  { k: 'The press', v: 'Campaign-grade content, directed frame by frame, published on a schedule. Not the slop everyone else ships.' },
  { k: 'The grounds', v: 'The quiet automation that keeps the place running while you do the work only you can do.' },
];

const OFFERS = [
  { n: '1', name: 'The Strategic Session', price: '$1,500', note: 'credited toward what comes next', body: 'Ninety minutes. One decision. A one-page brief in your hands within 48 hours.' },
  { n: '2', name: 'The Compound', price: 'By commission', note: 'you hold the deed', body: 'The commissioned build. Brand, content, and owned infrastructure, made unmistakable — a place nobody could mistake for anyone else’s.' },
  { n: '3', name: 'The Standing Engagement', price: 'Monthly', note: 'the part most people skip', body: 'I keep the content coming and the Compound compounding, month over month, so what you built keeps growing instead of going stale.' },
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
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay muted loop playsInline preload="auto"
          poster="/compound-hero-poster.jpg"
        >
          <source src="/compound-hero.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(13,27,46,0.55) 0%, rgba(13,27,46,0.35) 40%, rgba(13,27,46,0.92) 100%)' }}
        />
        <div className="relative max-w-[1200px] mx-auto w-full px-6 pb-20 pt-40">
          <p className="label">Creative Director / Brand Strategist</p>
          <h1 className="font-heading text-white mt-6 leading-[1.04] max-w-[18ch]"
            style={{ fontSize: 'clamp(2.4rem, 5.2vw, 4.6rem)', fontWeight: 400 }}>
            Own the house.<br /><em>Hold the deed.</em>
          </h1>
          <p className="text-text-muted mt-7 max-w-[56ch] text-[1.05rem] leading-relaxed">
            A Compound is your whole business behind your own gates — the brand, the content, the CRM, and the
            infrastructure it runs on — on ground you own, not rent. Built by hand. Made unmistakable.
          </p>
          <p className="label mt-8 !text-[0.6rem] text-white/55">
            2× Webby National Honoree · $2B+ brand revenue scale · AI Trailblazers, Inizio Evoke
          </p>
          <div className="mt-8">
            <Link href="/#session"
              className="label !text-[0.62rem] inline-block px-6 py-3.5 transition-colors"
              style={{ background: 'var(--brand-accent)', color: 'var(--surface-page)' }}>
              Start with one decision →
            </Link>
          </div>
        </div>
      </section>

      {/* ── THE ARGUMENT + DIVERGENCE ────────────────────────── */}
      <section className="px-6 py-24 md:py-32">
        <Reveal className="max-w-[1000px] mx-auto">
          <p className="label" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 28, height: 1, background: 'var(--brand-accent)', display: 'inline-block' }} />
            Rent or own
          </p>
          <h2 className="font-heading text-white mt-4 max-w-[20ch] leading-[1.05]"
            style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3rem)', fontWeight: 400 }}>
            Rent compounds against you. A Compound compounds <em>for you.</em>
          </h2>
          <p className="text-text-muted mt-5 max-w-[58ch] leading-relaxed">
            Every month on a rented platform is money out that builds someone else&rsquo;s asset. Every month in your
            Compound builds yours. Give it a few years and the gap is the whole point.
          </p>
          <Divergence />
        </Reveal>
      </section>

      {/* ── THE COMPOUND (approach) ──────────────────────────── */}
      <section id="approach" className="px-6 py-24 md:py-28 hairline"
        style={{ borderTop: '0.5px solid var(--border-hairline)', background: 'var(--surface-card)' }}>
        <Reveal className="max-w-[1200px] mx-auto">
          <p className="label">The Compound</p>
          <h2 className="font-heading text-white mt-4 max-w-[22ch] leading-[1.05]"
            style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.1rem)', fontWeight: 400 }}>
            One Compound. Everything behind your <em>gates.</em>
          </h2>
          <p className="text-text-muted mt-5 max-w-[62ch] leading-relaxed">
            Most businesses are scattered across platforms they rent — a site here, a list there, a CRM somewhere else,
            every piece someone else&rsquo;s to price, throttle, or shut off. A Compound puts all of it on ground you own,
            behind your own walls.
          </p>
          <div className="grid gap-px mt-12 sm:grid-cols-2 lg:grid-cols-4"
            style={{ background: 'var(--border-hairline)' }}>
            {ROOMS.map((r) => (
              <div key={r.k} className="p-7" style={{ background: 'var(--surface-card)' }}>
                <h3 className="font-heading text-white text-xl">{r.k}</h3>
                <p className="text-text-muted mt-3 text-[0.95rem] leading-relaxed">{r.v}</p>
              </div>
            ))}
          </div>
          <p className="text-white mt-12 max-w-[46ch] font-heading text-xl md:text-2xl leading-snug">
            Same materials everyone has. The difference is who&rsquo;s directing — and who holds the <em>deed.</em>
          </p>
        </Reveal>
      </section>

      {/* ── SELECTED WORK ────────────────────────────────────── */}
      <section id="work" className="px-6 py-24 md:py-28">
        <div className="max-w-[1200px] mx-auto">
          <p className="label">Selected Work</p>
          <div className="grid gap-5 mt-10 sm:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </section>

      {/* ── HOW TO WORK WITH ME (session) ────────────────────── */}
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
                  <div className="label !text-[0.58rem] mt-1">{o.note}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14">
            <p className="text-white font-heading text-2xl mb-6">Start with one decision.</p>
            <LeadForm source="session" />
          </div>
        </Reveal>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────── */}
      <section id="about" className="px-6 py-24 md:py-28 hairline"
        style={{ borderTop: '0.5px solid var(--border-hairline)', background: 'var(--surface-card)' }}>
        <Reveal className="max-w-[1200px] mx-auto grid gap-14 lg:grid-cols-[1.4fr_1fr] items-start">
          <div>
            <p className="label">About</p>
            <h2 className="font-heading text-white mt-4 max-w-[16ch] leading-[1.08]"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.7rem)', fontWeight: 400 }}>
              Made with intent. <em>Every frame.</em>
            </h2>
            <p className="text-text-muted mt-6 leading-relaxed max-w-[60ch]">
              Twenty years directing brand — national broadcast campaigns, Webby-winning digital platforms, DefenseTech
              identities, AI-powered production systems. A decade of that overlapped with a real estate license, which is
              where I learned what ownership is actually worth. The tools change. The discipline doesn&rsquo;t.
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
    </main>
  );
}
