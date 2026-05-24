---
"@cdot65/prisma-airs-cli": minor
---

DLP UX overhaul. `dlp patterns|profiles|filtering-profiles` now accept structured CLI flags (`--name`, `--regex`, `--pattern-id`, `--file-based`, …) instead of forcing `--body-file pattern.json`. All output formats now route through a curated projection — `--output json` returns `{items, page}` and ack `{action,id,name,…}` instead of the raw SDK envelope.
