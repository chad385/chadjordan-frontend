import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Reveal from '@/components/compound/Reveal';
import { CASES, CASE_SLUGS } from '@/lib/work';

export function generateStaticParams() {
  return CASE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = CASES[slug];
  if (!c) return { title: 'Work — Chad Jordan · Studio' };
  return {
    title: `${c.titleLead} ${c.titlePivot} — Chad Jordan · Studio`,
    description: c.briefBody[0],
  };
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = CASES[slug];
  if (!c) notFound();
  const next = CASES[c.next];

  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={c.heroImg} alt={`${c.titleLead} ${c.titlePivot}`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(13,27,46,0.5) 0%, rgba(13,27,46,0.25) 45%, rgba(13,27,46,0.94) 100%)' }} />
        <Link href="/#work" className="label absolute top-28 left-6 md:left-12 !text-[0.58rem] text-text-accent hover:text-white transition-colors z-10">
          ← All work
        </Link>
        <div className="relative max-w-[1200px] mx-auto w-full px-6 md:px-12 pb-16">
          <p className="label" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 28, height: 1, background: 'var(--brand-accent)', display: 'inline-block' }} />
            {c.num}
          </p>
          <h1 className="font-heading text-white mt-5 leading-[1.05]" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.6rem)', fontWeight: 400 }}>
            {c.titleLead}<br /><em>{c.titlePivot}</em>
          </h1>
          <p className="label mt-4 !text-[0.6rem] text-white/45">{c.subtitle}</p>
        </div>
      </section>

      {/* BRIEF */}
      <section className="px-6 md:px-12 py-20 md:py-24 hairline" style={{ borderBottom: '0.5px solid var(--border-hairline)' }}>
        <Reveal className="max-w-[1200px] mx-auto grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-heading text-white leading-snug" style={{ fontSize: 'clamp(1.4rem, 2.4vw, 2rem)', fontWeight: 400 }}>
              {c.briefLead} <em>{c.briefPivot}</em>
            </h2>
            <div className="mt-6 space-y-4">
              {c.briefBody.map((p, i) => (
                <p key={i} className="text-text-muted leading-relaxed text-[0.95rem]">{p}</p>
              ))}
            </div>
          </div>
          <div className="lg:pl-16 lg:border-l flex flex-col justify-center" style={{ borderColor: 'var(--border-hairline)' }}>
            {c.meta.map((m) => (
              <div key={m.label} className="py-4 hairline" style={{ borderBottom: '0.5px solid var(--border-hairline)' }}>
                <div className="label !text-[0.55rem] text-text-accent/70">{m.label}</div>
                <div className="text-text-muted text-sm mt-1">{m.value}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* PROCESS */}
      {c.steps.length > 0 && (
        <section className="px-6 md:px-12 py-20 md:py-24 hairline" style={{ borderBottom: '0.5px solid var(--border-hairline)', background: 'var(--surface-card)' }}>
          <Reveal className="max-w-[1200px] mx-auto">
            <p className="label mb-10" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              Creative Process
              <span style={{ flex: 1, height: 1, background: 'var(--border-hairline)', display: 'inline-block' }} />
            </p>
            <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ background: 'var(--border-hairline)' }}>
              {c.steps.map((s, i) => (
                <div key={s.title} className="p-6" style={{ background: 'var(--surface-card)' }}>
                  <div className="font-heading text-text-accent text-2xl">{String(i + 1).padStart(2, '0')}</div>
                  <h3 className="font-heading text-white text-lg mt-3">{s.title}</h3>
                  <p className="text-text-muted text-[0.85rem] leading-relaxed mt-2">{s.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>
      )}

      {/* GALLERY */}
      <section className="px-6 md:px-12 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto space-y-16">
          {c.gallery.map((block, i) => (
            <Reveal key={i}>
              <div className={block.images.length > 1 ? 'grid gap-4 sm:grid-cols-2' : ''}>
                {block.images.map((img) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={img} src={img} alt={block.caption}
                    className="w-full hairline" style={{ border: '0.5px solid var(--border-hairline)' }} loading="lazy" />
                ))}
              </div>
              <div className="flex items-baseline justify-between mt-3 gap-4">
                <span className="text-text-muted text-[0.82rem]">{block.caption}</span>
                {block.num && <span className="label !text-[0.55rem] whitespace-nowrap">{block.num}</span>}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INSIGHT */}
      <section className="px-6 md:px-12 py-20 md:py-28 hairline" style={{ borderTop: '0.5px solid var(--border-hairline)', borderBottom: '0.5px solid var(--border-hairline)', background: 'var(--surface-card)' }}>
        <Reveal className="max-w-[900px] mx-auto text-center">
          <p className="label text-text-accent">The Proof</p>
          <p className="font-heading text-white mt-6 leading-[1.3]" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', fontWeight: 400 }}>
            “{c.insight}”
          </p>
        </Reveal>
      </section>

      {/* NEXT PROJECT */}
      <Link href={`/work/${next.slug}`} className="group relative flex items-end overflow-hidden min-h-[46vh]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={next.heroImg} alt={`${next.titleLead} ${next.titlePivot}`}
          className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:opacity-60 transition-opacity duration-500" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(13,27,46,0.6) 0%, rgba(13,27,46,0.9) 100%)' }} />
        <div className="relative max-w-[1200px] mx-auto w-full px-6 md:px-12 py-16">
          <p className="label text-text-accent">Next project →</p>
          <p className="font-heading text-white mt-3 leading-tight" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', fontWeight: 400 }}>
            {next.titleLead} <span className="text-white/60">{next.titlePivot}</span>
          </p>
        </div>
      </Link>
    </main>
  );
}
