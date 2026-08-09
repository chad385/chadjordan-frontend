import Link from 'next/link';
import { createAdminClient } from '@/lib/supabase/server';

function formatDate(s: string) {
  const d = new Date(s);
  return isNaN(d.getTime()) ? '' : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function readingTime(body: string | null) {
  const words = (body || '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

/** Latest 3 published articles, shown as a teaser on the homepage. Renders
 *  nothing until the Journal has content, so the section never sits empty. */
export default async function JournalPreview() {
  let articles: Array<{ slug: string; title: string; excerpt: string | null; published_at: string | null; featured_image_url: string | null; body: string | null }> = [];
  try {
    const supabase = createAdminClient();
    const { data } = await supabase
      .from('content_objects')
      .select('slug, title, excerpt, published_at, featured_image_url, body')
      .eq('status', 'published')
      .in('content_type', ['article', 'guide'])
      .order('published_at', { ascending: false, nullsFirst: false })
      .limit(3);
    articles = data || [];
  } catch {
    articles = [];
  }

  if (articles.length === 0) return null;

  return (
    <section id="journal" className="px-6 py-24 md:py-28 hairline" style={{ borderTop: '0.5px solid var(--border-hairline)' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="label">From the Journal</p>
            <h2 className="font-heading text-white mt-4" style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3rem)', fontWeight: 400 }}>
              Point of <em>view.</em>
            </h2>
          </div>
          <Link href="/blog" className="label !text-[0.6rem] text-text-accent hover:text-white transition-colors whitespace-nowrap">
            Read the Journal →
          </Link>
        </div>

        <div className="grid gap-5 mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}`}
              className="group block hairline"
              style={{ border: '0.5px solid var(--border-hairline)' }}
            >
              {a.featured_image_url && (
                <div className="aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={a.featured_image_url}
                    alt={a.title}
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="font-heading text-white text-lg leading-snug group-hover:text-text-accent transition-colors">
                  {a.title}
                </h3>
                {a.excerpt && (
                  <p
                    className="text-text-muted text-[0.9rem] leading-relaxed mt-2"
                    style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                  >
                    {a.excerpt}
                  </p>
                )}
                <p className="label !text-[0.55rem] mt-4">
                  {[formatDate(a.published_at || ''), `${readingTime(a.body)} min read`].filter(Boolean).join(' · ')}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
