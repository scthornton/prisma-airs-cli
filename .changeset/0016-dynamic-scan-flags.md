---
"@cdot65/prisma-airs-cli": minor
---

Add `--goals`, `--depth`, and `--breadth` flags to `airs redteam scan --type DYNAMIC` for human-augmented agent scans. `--goals` accepts an inline JSON array or a path to a JSON file of goal strings. Inputs are validated (positive integers; non-empty string array). Without `--goals`, DYNAMIC scans still run in fully automated mode (no behavior change).
