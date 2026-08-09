import Link from 'next/link';

// The admin OS lives on its own Worker/host. Env-driven so it resolves to
// localhost:3001 in dev and the backend URL in production (set in wrangler.jsonc).
const ADMIN_URL = process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3001';

export default function Footer() {
  return (
    <footer className="px-6 pt-16 pb-12 hairline" style={{ borderTop: '0.5px solid var(--border-hairline)' }}>
      <div className="max-w-[1200px] mx-auto">
        <p className="font-heading text-3xl md:text-4xl text-white max-w-[16ch] leading-[1.1]">
          Stop renting. Build the <em>Compound.</em>
        </p>
        <div className="mt-8">
          <Link
            href="/#session"
            className="label !text-[0.62rem] inline-block border px-5 py-3 text-text-accent hover:bg-[color:var(--brand-accent)] hover:text-[color:var(--surface-page)] transition-colors"
            style={{ borderColor: 'var(--border-accent-soft)' }}
          >
            Start with one decision →
          </Link>
        </div>

        <div
          className="mt-14 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 hairline"
          style={{ borderTop: '0.5px solid var(--border-hairline)' }}
        >
          <span className="font-heading text-white">
            Chad Jordan <span className="text-text-accent">·</span> Studio
          </span>
          <p className="label !tracking-[0.16em] !text-[0.62rem] text-white/45">
            You don&rsquo;t get a website. You get the deed.
          </p>
          <ul className="flex gap-6 text-[0.85rem] text-white/55">
            <li><Link className="hover:text-white transition-colors" href="/blog">Journal</Link></li>
            <li><a className="hover:text-white transition-colors" href="https://csgpro.app" target="_blank" rel="noreferrer">csgpro.app</a></li>
            <li><a className="hover:text-white transition-colors" href="https://linkedin.com/in/chad-jordan-388ab624" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a className="hover:text-text-accent transition-colors" href={ADMIN_URL}>Admin</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
