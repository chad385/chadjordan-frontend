import { headers } from "next/headers";

/**
 * Canonical production origin. Public files (sitemap, robots, llms.txt,
 * canonical, Open Graph) use this whenever the configured URL is missing
 * or still pointed at localhost.
 */
export const PRODUCTION_SITE_URL = "https://chadjordan.studio";

export const DEFAULT_OG_PATH = "/og-hall.jpg";

function isLocalHost(hostname: string): boolean {
  const host = hostname.split(",")[0]?.trim().toLowerCase() ?? "";
  return host === "localhost" || host.startsWith("localhost:") || host === "127.0.0.1" || host.startsWith("127.0.0.1:");
}

function isLocalOrigin(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return true;
  try {
    const withProto = /^https?:\/\//i.test(trimmed) ? trimmed : `http://${trimmed}`;
    return isLocalHost(new URL(withProto).host);
  } catch {
    return /localhost|127\.0\.0\.1/i.test(trimmed);
  }
}

/**
 * Build-time / module-scope origin. Ignores a localhost NEXT_PUBLIC_SITE_URL
 * so a stale env value cannot publish localhost into metadata.
 */
export function configuredSiteUrl(): string {
  const explicit = (process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "").trim().replace(/\/+$/, "");
  if (explicit && !isLocalOrigin(explicit)) return explicit;
  return PRODUCTION_SITE_URL;
}

export function absoluteUrl(path: string, site: string = configuredSiteUrl()): string {
  if (!path) return site;
  if (/^https?:\/\//i.test(path)) {
    if (!isLocalOrigin(path)) return path;
    try {
      const url = new URL(path);
      return `${site}${url.pathname}${url.search}`;
    } catch {
      return `${site}${DEFAULT_OG_PATH}`;
    }
  }
  return `${site}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * The public origin of this site (e.g. "https://chadjordan.studio").
 *
 * Prefers a non-local NEXT_PUBLIC_SITE_URL. Otherwise uses the incoming
 * request host when that host is public, so a workers.dev preview stays
 * on its own origin. Localhost is never returned.
 */
export async function getSiteUrl(): Promise<string> {
  const explicit = (process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "").trim().replace(/\/+$/, "");
  if (explicit && !isLocalOrigin(explicit)) return explicit;

  try {
    const h = await headers();
    const host = (h.get("x-forwarded-host") ?? h.get("host") ?? "").split(",")[0]?.trim();
    if (host && !isLocalHost(host)) {
      const proto = h.get("x-forwarded-proto") ?? "https";
      return `${proto}://${host}`;
    }
  } catch {
    // headers() is unavailable outside a request scope (e.g. build time).
  }

  return PRODUCTION_SITE_URL;
}
