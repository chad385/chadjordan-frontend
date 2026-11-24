const EMPLOYER = /\b(inizio(?:\s+evoke)?|evoke|ai trailblazers)\b/i;

/** Drop employer mentions from a public string. Other sentences stay. */
export function scrubEmployerText(value: string): string {
  if (!EMPLOYER.test(value)) return value;
  return value
    .replace(/[^.!?\n]*\b(Inizio(?:\s+Evoke)?|Evoke|AI Trailblazers)\b[^.!?\n]*[.!?]?/gi, " ")
    .replace(/[ \t]{2,}/g, " ")
    .replace(/\s+([.!?])/g, "$1")
    .replace(/[ \t]*\n[ \t]*/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function scrubPublicTree<T>(value: T): T {
  if (typeof value === "string") return scrubEmployerText(value) as T;
  if (Array.isArray(value)) return value.map((item) => scrubPublicTree(item)) as T;
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [key, item] of Object.entries(value as Record<string, unknown>)) {
      const next = scrubPublicTree(item);
      if (typeof next === "string" && next.length === 0 && (key === "description" || key === "content")) continue;
      out[key] = next;
    }
    return out as T;
  }
  return value;
}
