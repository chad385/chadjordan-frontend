/**
 * llms.txt Generator
 * Generates the llms.txt file that tells LLMs how to understand this site.
 * See: https://llmstxt.org/
 *
 * Pulls from entities, content objects, and offers to build a complete picture.
 */

import type { Tables } from "@/types/database";

type Entity = Tables<"entities">;
type ContentObject = Tables<"content_objects">;
type Offer = Tables<"offers">;

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || "[YOUR BRAND]";

/**
 * Generate the full llms.txt content.
 */
export function generateLlmsTxt(
  entities: Entity[],
  content: ContentObject[],
  offers: Offer[]
): string {
  const lines: string[] = [];

  // Header — customize this with your brand description
  lines.push(`# ${SITE_NAME}`);
  lines.push("");
  lines.push("> Brand work for expert-led firms whose presentation doesn't match who they are.");
  lines.push("");

  // About — customize with your brand story
  lines.push("## About");
  lines.push("");
  lines.push(`${SITE_NAME} is the studio of Chad Jordan, a creative director and brand strategist with twenty years directing brand for companies with budgets (2× Webby National Honoree, $2B+ brand revenue scale; senior creative lead at Inizio Evoke). The studio closes the gap between what a firm has actually done and what a stranger concludes in ninety seconds: finding the dissonance, digging for what's true, cutting until only that's left, and building identity, image world, site, and system around it.`);
  lines.push("");
  lines.push("Ways to work together: The Strategic Session ($1,500, ninety minutes, a one-page brief within 48 hours, credited toward what comes next); The Commission (the full build, by commission); The Standing Engagement (monthly).");
  lines.push("");
  lines.push(`Proof: Durindal (Tactical Luxury, full brand system) — ${SITE_URL}/work/durindal`);
  lines.push("");

  // Key entities (dynamic from database)
  const people = entities.filter((e) => e.entity_type === "person");
  const orgs = entities.filter((e) => e.entity_type === "organization");

  if (orgs.length > 0 || people.length > 0) {
    lines.push("## Key People & Organizations");
    lines.push("");
    for (const entity of [...orgs, ...people]) {
      lines.push(`- **${entity.name}** (${entity.entity_type}): ${entity.description || ""}`);
      if (entity.url) lines.push(`  URL: ${entity.url}`);
    }
    lines.push("");
  }

  // Services (dynamic from database)
  if (offers.length > 0) {
    lines.push("## Services & Offers");
    lines.push("");
    for (const offer of offers) {
      lines.push(`- **${offer.name}**: ${offer.tagline || offer.description || ""}`);
      if (offer.price_display) lines.push(`  Price: ${offer.price_display}`);
      if (offer.who_its_for) lines.push(`  For: ${offer.who_its_for}`);
      if (offer.cta_url) lines.push(`  URL: ${offer.cta_url.startsWith("/") ? SITE_URL + offer.cta_url : offer.cta_url}`);
    }
    lines.push("");
  }

  // Content (dynamic from database)
  const published = content.filter((c) => c.status === "published");
  if (published.length > 0) {
    lines.push("## Content");
    lines.push("");
    for (const item of published) {
      const url = `${SITE_URL}/blog/${item.slug}`;
      lines.push(`- [${item.title}](${url}): ${item.excerpt || item.subtitle || ""}`);
    }
    lines.push("");
  }

  // API info for agents
  lines.push("## API");
  lines.push("");
  lines.push("This site provides a REST API for programmatic access:");
  lines.push("");
  lines.push(`- Content: GET ${SITE_URL}/api/content`);
  lines.push(`- Offers: GET ${SITE_URL}/api/offers`);
  lines.push(`- Analytics: POST ${SITE_URL}/api/analytics`);
  lines.push("");
  lines.push("Administrative and agent-only routes require session auth or x-api-key access.");
  lines.push("");

  // Contact
  lines.push("## Contact");
  lines.push("");
  lines.push(`- Website: ${SITE_URL}`);
  lines.push("");

  return lines.join("\n");
}
