const RETIRED_SLUGS = new Set([
  "brand-stack-platform-risk-audit",
  "deplatforming-business-risk-founders-guide",
  "website-ownership-source-code-competitive-moat",
]);

function slugFromHref(href: string): string {
  const trimmed = href.trim();
  if (!trimmed) return "";
  try {
    const path = /^https?:\/\//i.test(trimmed) ? new URL(trimmed).pathname : trimmed.split(/[?#]/)[0];
    return path.replace(/\/+$/, "").split("/").pop() || "";
  } catch {
    return "";
  }
}

/**
 * Retired posts 301 to /blog, so an in-article link looks live and then
 * dumps the reader on the index. Unwrap those anchors to their text.
 */
export function unlinkRetiredArticles(html: string): string {
  return html.replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi, (full, attrs: string, inner: string) => {
    const hrefMatch = attrs.match(/\bhref\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i);
    const href = hrefMatch?.[1] ?? hrefMatch?.[2] ?? hrefMatch?.[3] ?? "";
    if (!RETIRED_SLUGS.has(slugFromHref(href))) return full;
    return inner;
  });
}
