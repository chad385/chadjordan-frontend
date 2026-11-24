import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/compound/Reveal';
import LeadForm from '@/components/compound/LeadForm';
import { CsgFeature, MosaicPlaceholder } from '@/components/compound/FeaturedWork';
import { absoluteUrl, configuredSiteUrl, DEFAULT_OG_PATH } from '@/lib/site-url';

const SITE = configuredSiteUrl();
const TITLE = 'Sample Audit — Chad Jordan · Studio';
const DESCRIPTION =
  'Brand worlds for firms that do serious, discreet work. The Sample Audit is one page and two stills. The Strategic Session ($1,500, credited) is the paid next step.';
const OG_IMAGE = absoluteUrl(DEFAULT_OG_PATH, SITE);

const OFFERS = [
  {
    n: '1',
    name: 'The Sample Audit',
    price: '',
    note: '',
    body: 'How I see your firm next to how a stranger sees it. One page, two stills.',
  },
  {
    n: '2',
    name: 'The Strategic Session',
    price: '$1,500',
    note: 'credited toward what comes next',
    body: 'Ninety minutes. One decision. A one-page brief in your hands within 48 hours.',
  },
];

const METHOD = [
  { n: '01', k: 'Find the dissonance.', v: 'Where what you\u2019re saying and what you are stop matching. It\u2019s usually in language you borrowed because it felt safer than your own.' },
  { n: '02', k: 'Dig for what\u2019s actually true.', v: 'A long conversation, not a questionnaire. The thing that was there at the beginning, before someone told you to make it more accessible.' },
  { n: '03', k: 'Cut until only that\u2019s left.', v: 'This is most of the work, and the part that feels like losing something.' },
  { n: '04', k: 'Build it so you can live in it.', v: 'Identity, image world, the site, the system that keeps it running. Built by hand, on infrastructure you own.' },
];

const STATS = [
  ['2×', 'Webby National Honoree'],
  ['20+', 'Years Creative Direction'],
];

// Unlinked landing. Not in the nav, not in the sitemap.
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: false, follow: false },
  alternates: { canonical: '/audit' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE}/audit`,
    images: [{ url: OG_IMAGE, alt: 'Chad Jordan · Studio' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [OG_IMAGE] },
};

export default function AuditPage() {
  return (
    <main>
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-hall.webp"
          alt="An empty stone hall in low afternoon light, one closed door."
          className="absolute inset-0 w-full h-full object-cover object-[55%_center] md:object-center"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(13,27,46,0.25) 0%, rgba(13,27,46,0.1) 40%, rgba(13,27,46,0.92) 100%)' }}
        />
        <div className="relative max-w-[1200px] mx-auto w-full px-6 pb-20 pt-40">
          <p className="label">Creative Director / Brand Strategist</p>
          <h1 className="font-heading text-white mt-6 leading-[1.04] max-w-[22ch]"
            style={{ fontSize: 'clamp(2.4rem, 5.2vw, 4.4rem)', fontWeight: 400 }}>
            Brand worlds for firms that do serious, discreet work.
          </h1>
          <p className="text-text-muted mt-7 max-w-[56ch] text-[1.05rem] leading-relaxed">
            I close the gap between what you&rsquo;ve actually done and what a stranger concludes in ninety seconds.
          </p>
          <p className="label mt-8 !text-[0.6rem] text-white/55">
            2× Webby National Honoree · 20+ years creative direction
          </p>
          <div className="mt-8">
            <Link href="/audit#audit"
              className="label !text-[0.62rem] inline-block border border-[color:var(--border-accent-soft)] !text-text-accent px-6 py-3.5 hover:bg-[color:var(--brand-accent)] hover:!text-[color:var(--surface-page)] transition-colors">
              Start with the Sample Audit →
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:py-40">
        <Reveal className="max-w-[1000px] mx-auto">
          <p className="label" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 28, height: 1, background: 'var(--brand-accent)', display: 'inline-block' }} />
            The dissonance
          </p>
          <h2 className="font-heading text-white mt-4 max-w-[22ch] leading-[1.05]"
            style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3rem)', fontWeight: 400 }}>
            Your work comes by referral. Then the referral looks you up.
          </h2>
          <div className="mt-10 max-w-[58ch] space-y-6 text-text-muted text-[1.05rem] md:text-[1.15rem] leading-[1.8]">
            <p>
              You know what you&rsquo;re capable of. The people who refer you know it. The stranger they send does not.
              They look you up and decide in ninety seconds, from a website you&rsquo;ve been meaning to fix.
            </p>
            <p>
              So you over-explain. You watch the referral cool off. Louder firms get the call because they look like
              they&rsquo;ve been doing it longer.
            </p>
          </div>
        </Reveal>
      </section>

      <section id="audit" className="px-6 py-24 md:py-28 hairline"
        style={{ borderTop: '0.5px solid var(--border-hairline)', background: 'var(--surface-card)' }}>
        <Reveal className="max-w-[1200px] mx-auto">
          <p className="label">How to start</p>
          <h2 className="font-heading text-white mt-4 max-w-[18ch] leading-[1.05]"
            style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3rem)', fontWeight: 400 }}>
            The Sample Audit. Then the session.
          </h2>
          <div className="grid gap-px mt-12 lg:grid-cols-2" style={{ background: 'var(--border-hairline)' }}>
            {OFFERS.map((o) => (
              <div key={o.name} className="p-8 md:p-10 flex flex-col" style={{ background: 'var(--surface-card)' }}>
                <span className="label !text-[0.6rem] text-text-accent">{o.n}</span>
                <h3 className="font-heading text-white text-2xl mt-4">{o.name}</h3>
                <p className="text-text-muted mt-3 text-[0.95rem] leading-relaxed flex-1">{o.body}</p>
                {o.price ? (
                  <div className="mt-6 pt-5" style={{ borderTop: '0.5px solid var(--border-hairline)' }}>
                    <div className="font-heading text-white text-xl">{o.price}</div>
                    {o.note && <div className="label !text-[0.58rem] mt-1">{o.note}</div>}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
          <div className="mt-12">
            <LeadForm source="audit" />
          </div>
        </Reveal>
      </section>

      <section id="work" className="px-6 py-24 md:py-32 hairline"
        style={{ borderTop: '0.5px solid var(--border-hairline)' }}>
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <p className="label">Selected work</p>
            <h2 className="font-heading text-white mt-4 leading-[1.05]"
              style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3rem)', fontWeight: 400 }}>
              Work
            </h2>
          </Reveal>
          <div className="grid gap-5 mt-12 lg:grid-cols-2">
            <MosaicPlaceholder />
            <CsgFeature />
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:py-40 hairline"
        style={{ borderTop: '0.5px solid var(--border-hairline)' }}>
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <p className="label">The method</p>
            <h2 className="font-heading text-white mt-4 max-w-[22ch] leading-[1.05]"
              style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.1rem)', fontWeight: 400 }}>
              Nothing invented. Only what&rsquo;s <em>true.</em>
            </h2>
          </Reveal>
          <ol className="mt-16" style={{ borderTop: '0.5px solid var(--border-hairline)' }}>
            {METHOD.map((m) => (
              <li key={m.n} style={{ borderBottom: '0.5px solid var(--border-hairline)' }}>
                <Reveal className="grid gap-5 md:gap-x-10 py-12 md:py-16 md:grid-cols-[7rem_minmax(0,1fr)] items-baseline">
                  <span className="text-text-accent"
                    style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', letterSpacing: '0.22em' }}>
                    {m.n}
                  </span>
                  <div>
                    <h3 className="font-heading text-white leading-[1.1]"
                      style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 400 }}>
                      {m.k}
                    </h3>
                    <p className="text-text-muted text-[1.05rem] md:text-[1.15rem] leading-[1.7] max-w-[50ch] mt-4">
                      {m.v}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-24 md:py-28 hairline"
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
              identities. A decade of that overlapped with a real estate license, which taught me how deals actually
              close and what people are really afraid of when they&rsquo;re about to commit money.
            </p>
            <p className="text-text-muted mt-4 leading-relaxed max-w-[60ch]">
              I take on a small number of commissions at a time, so each one gets my full attention.
            </p>
            <div className="grid grid-cols-2 gap-px mt-10 max-w-md" style={{ background: 'var(--border-hairline)' }}>
              {STATS.map(([num, label]) => (
                <div key={label} className="p-5" style={{ background: 'var(--surface-card)' }}>
                  <div className="font-heading text-text-accent text-3xl">{num}</div>
                  <div className="label !text-[0.55rem] mt-2 leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ border: '0.5px solid var(--border-hairline)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/media/home/about-chad.webp" alt="Chad Jordan directing at the desk — storyboards, lenses, lamp glow"
              className="w-full h-full object-cover" style={{ objectPosition: '38% 50%' }} />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
