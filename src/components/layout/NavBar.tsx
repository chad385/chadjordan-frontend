'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { href: '/#work', label: 'Work' },
  { href: '/#approach', label: 'Approach' },
  { href: '/#session', label: 'Session' },
  { href: '/contact', label: 'Contact' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 transition-all duration-300 ${
        scrolled
          ? 'bg-[color:var(--surface-page)]/90 backdrop-blur-md hairline-b'
          : ''
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between h-[72px]">
        <Link href="/" className="font-heading text-lg tracking-tight text-white">
          Chad Jordan <span className="text-text-accent">·</span> Studio
        </Link>

        <div className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.9rem] text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#session"
            className="label !text-[0.62rem] border border-[color:var(--border-accent-soft)] text-text-accent px-4 py-2.5 hover:bg-[color:var(--brand-accent)] hover:text-[color:var(--surface-page)] transition-colors"
          >
            Start with one decision →
          </Link>
        </div>

        <button
          className="md:hidden text-white flex flex-col gap-[5px] p-2"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-6 h-[1.5px] bg-white" />
          <span className="block w-6 h-[1.5px] bg-white" />
          <span className="block w-6 h-[1.5px] bg-white" />
        </button>
      </div>

      {open && (
        <div className="md:hidden hairline-b bg-[color:var(--surface-page)]/95 backdrop-blur-md -mx-6 px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-white/75 hover:text-white text-base"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
