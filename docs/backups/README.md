# Supabase backups

Snapshots of database settings taken before they were changed, so the old
values survive outside a chat session. Neither file contains secrets.

- `trend_scan_config.pre-rebuild-2026-10-24.json` — `backend_settings` row
  `trend_scan_config` before the positioning rebuild retargeted it (it aimed
  the trend scan at own-vs-rent / platform-risk topics). To restore, write this
  JSON back as that row's `value`.
- `brand_context.pre-rebuild-2026-10-24.json` — every `brand_context` row
  (the Compound-era corpus) before the 2026-10-24 rewrite. The same text is
  also in git history under `content-corpus/` before commit 5c046d1.
