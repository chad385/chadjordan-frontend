import type { Metadata } from 'next';
import LeadForm from '@/components/compound/LeadForm';

export const metadata: Metadata = {
  title: 'Contact — Chad Jordan · Studio',
  description: 'Start with one decision. A 90-minute Strategic Session, and a one-page brief in your hands within 48 hours.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 pt-40 pb-28">
      <div className="max-w-[900px] mx-auto w-full">
        <p className="label">Contact</p>
        <h1 className="font-heading text-white mt-5 leading-[1.05] max-w-[18ch]"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 400 }}>
          Start with one <em>decision.</em>
        </h1>
        <p className="text-text-muted mt-6 max-w-[56ch] text-[1.05rem] leading-relaxed">
          Ninety minutes. One decision. A one-page brief in your hands within 48 hours — credited toward whatever
          comes next. Leave your details and I&rsquo;ll be in touch.
        </p>

        <div className="mt-10">
          <LeadForm source="contact" />
        </div>

        <div className="grid gap-px mt-16 sm:grid-cols-2" style={{ background: 'var(--border-hairline)' }}>
          <div className="p-6" style={{ background: 'var(--surface-page)' }}>
            <span className="label !text-[0.6rem] text-text-accent">Direct</span>
            <p className="text-text-muted mt-3 text-[0.95rem] leading-relaxed">
              Prefer email? Reach me at{' '}
              <a className="text-white hover:text-text-accent transition-colors" href="mailto:hello@chadjordan.studio">
                hello@chadjordan.studio
              </a>.
            </p>
          </div>
          <div className="p-6" style={{ background: 'var(--surface-page)' }}>
            <span className="label !text-[0.6rem] text-text-accent">Elsewhere</span>
            <p className="text-text-muted mt-3 text-[0.95rem] leading-relaxed">
              <a className="text-white hover:text-text-accent transition-colors" href="https://csgpro.app" target="_blank" rel="noreferrer">csgpro.app</a>
              {' · '}
              <a className="text-white hover:text-text-accent transition-colors" href="https://linkedin.com/in/chad-jordan-388ab624" target="_blank" rel="noreferrer">LinkedIn</a>
            </p>
          </div>
        </div>

        <p className="label !tracking-[0.16em] !text-[0.6rem] text-white/45 mt-16">
          You don&rsquo;t get a website. You get the deed.
        </p>
      </div>
    </main>
  );
}
