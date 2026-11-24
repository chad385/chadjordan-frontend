const PRIVATE_KEYS = [
  "created_by",
  "view_count",
  "unique_visitors",
  "avg_time_on_page",
  "conversion_count",
  "engagement_score",
] as const;

function isContentAgent(value: unknown): boolean {
  return typeof value === "string" && value.trim().toLowerCase() === "content agent";
}

/** Public content responses omit operator fields and the agent byline. */
export function toPublicContent<T extends Record<string, unknown>>(row: T): T {
  const next: Record<string, unknown> = { ...row };
  for (const key of PRIVATE_KEYS) delete next[key];
  if (isContentAgent(next.author_name)) delete next.author_name;
  return next as T;
}
