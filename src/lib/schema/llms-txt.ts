/**
 * llms.txt Generator
 * Generates the llms.txt file that tells LLMs how to understand this site.
 * See: https://llmstxt.org/
 *
 * Pulls from entities, content objects, and offers to build a complete picture.
 */

import type { Tables } from "@/types/database";
import { scrubEmployerText } from "@/lib/public-text";

type Entity = Tables<"entities">;
type ContentObject = Tables<"content_objects">;
type Offer = Tables<"offers">;

function siteName(): string {
  const raw = (process.env.NEXT_PUBLIC_SITE_NAME || "").trim();
  if (!raw || raw === "[YOUR BRAND]" || raw === "Your Brand Name" || raw === "Digital Home") {
    return "Chad Jordan Studio";
  }
  return raw;
}

function line(value: string | null | undefined): string {
  return scrubEmployerText(value || "");
}

/**
 * Generate the full llms.txt content.
 * `siteUrl` must be the public origin (never localhost).
 */
export function generateLlmsTxt(
  entities: Entity[],
  content: ContentObject[],
  offers: Offer[],
  siteUrl: string
): string {
  const SITE_URL = siteUrl.replace(/\/+$/, "");
  const SITE_NAME = siteName();
  const lines: string[] = [];

  lines.push(`# ${SITE_NAME}`);
  lines.push("");
  lines.push("> Brand worlds for firms that do serious, discreet work.");
  lines.push("");

  lines.push("## About");
  lines.push("");
  lines.push(`${SITE_NAME} is the studio of Chad Jordan, a creative director and brand strategist. 2× Webby National Honoree. 20+ years of creative direction. He takes on a small number of commissions at a time. The studio builds brand worlds for firms that do serious, discreet work: investigations, forensics, incident response, and high-stakes advisory. Nothing invented. Only what's true.`);
  lines.push("");
  lines.push("Ways to work together: The Sample Audit (how the firm reads to Chad, next to how it reads to a stranger; one page, two stills); The Strategic Session ($1,500, ninety minutes, a one-page brief within 48 hours, credited toward what comes next); The Commission (the full build, by commission); The Standing Engagement (monthly).");
  lines.push("");
  lines.push(`Proof: Durindal (Tactical Luxury, full brand system) — ${SITE_URL}/work/durindal`);
  lines.push("Durindal MOSAIC: a 30-second spot for MOSAIC, Durindal's behavioral briefing software.");
  lines.push("CSG PRO: an image system that locks a brand's visual DNA once, then produces on-brand assets for close to free. Durindal uses it. https://csgpro.app");
  lines.push("");

  const people = entities.filter((e) => e.entity_type === "person");
  const orgs = entities.filter((e) => e.entity_type === "organization");

  if (orgs.length > 0 || people.length > 0) {
    lines.push("## Key People & Organizations");
    lines.push("");
    for (const entity of [...orgs, ...people]) {
      const description = line(entity.description);
      const name = line(entity.name);
      if (!name) continue;
      if (description) lines.push(`- **${name}** (${entity.entity_type}): ${description}`);
      else lines.push(`- **${name}** (${entity.entity_type})`);
      if (entity.url) lines.push(`  URL: ${entity.url}`);
    }
    lines.push("");
  }

  if (offers.length > 0) {
    lines.push("## Services & Offers");
    lines.push("");
    for (const offer of offers) {
      const summary = line(offer.tagline || offer.description || "");
      const name = line(offer.name);
      if (!name) continue;
      lines.push(summary ? `- **${name}**: ${summary}` : `- **${name}**`);
      if (offer.price_display) lines.push(`  Price: ${line(offer.price_display)}`);
      if (offer.who_its_for) lines.push(`  For: ${line(offer.who_its_for)}`);
      if (offer.cta_url) lines.push(`  URL: ${offer.cta_url.startsWith("/") ? SITE_URL + offer.cta_url : offer.cta_url}`);
    }
    lines.push("");
  }

  const published = content.filter((c) => c.status === "published");
  if (published.length > 0) {
    lines.push("## Content");
    lines.push("");
    for (const item of published) {
      const url = `${SITE_URL}/blog/${item.slug}`;
      const summary = line(item.excerpt || item.subtitle || "");
      const title = line(item.title);
      if (!title) continue;
      lines.push(summary ? `- [${title}](${url}): ${summary}` : `- [${title}](${url})`);
    }
    lines.push("");
  }

  lines.push("## Contact");
  lines.push("");
  lines.push(`- Website: ${SITE_URL}`);
  lines.push("- Inquiries are confidential. NDA on request. Nothing is published without written OK.");
  lines.push("");

  return lines.join("\n");
}
