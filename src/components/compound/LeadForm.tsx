'use client';

import { useState, type FormEvent } from 'react';

/** Real lead capture wired to the starter's POST /api/leads. Adds the
 *  front-end the starter shipped without. Honeypot `website` silently drops bots. */
export default function LeadForm({ source = 'home' }: { source?: string }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [error, setError] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get('website')) return; // honeypot
    const email = String(data.get('email') || '').trim();
    const name = String(data.get('name') || '').trim();
    if (!email) return;

    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          first_name: name || undefined,
          source,
          capture_page: typeof window !== 'undefined' ? window.location.pathname : undefined,
          tags: ['compound-inquiry'],
        }),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || 'Something went wrong.');
      setStatus('done');
      form.reset();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  if (status === 'done') {
    return (
      <div className="hairline pt-6" style={{ borderTop: '0.5px solid var(--border-hairline)' }}>
        <p className="font-heading text-2xl text-white">The brief is on its way.</p>
        <p className="text-text-muted mt-2 text-[0.95rem]">
          You&rsquo;ll hear from me within 48 hours — one page, one decision.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-center max-w-xl">
      <input type="text" name="website" tabIndex={-1} autoComplete="off"
        className="hidden" aria-hidden="true" />
      <input
        type="text" name="name" placeholder="Name"
        className="is-round flex-1 bg-transparent px-4 py-3 text-white placeholder:text-white/40 focus:outline-none"
        style={{ border: '0.5px solid var(--border-hairline)' }}
      />
      <input
        type="email" name="email" required placeholder="Email"
        className="is-round flex-1 bg-transparent px-4 py-3 text-white placeholder:text-white/40 focus:outline-none"
        style={{ border: '0.5px solid var(--border-hairline)' }}
      />
      <button
        type="submit" disabled={status === 'sending'}
        className="label !text-[0.62rem] whitespace-nowrap px-5 py-3 transition-colors disabled:opacity-60"
        style={{ background: 'var(--brand-accent)', color: 'var(--surface-page)' }}
      >
        {status === 'sending' ? 'Sending…' : 'Start with one decision →'}
      </button>
      {status === 'error' && (
        <span className="text-[color:var(--color-error)] text-sm sm:hidden">{error}</span>
      )}
    </form>
  );
}
