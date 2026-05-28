---
'@cdot65/prisma-airs-cli': minor
---

Add `airs runtime customer-apps consumption [appName]` for per-app token consumption + violation breakdown, sourced from the SCM AI Security > Runtime > API Applications dashboard endpoints (via the new `mgmt.dashboard` SDK namespace).

```
# pretty (default): per-app sections with tokens, sessions, firing detectors
airs runtime customer-apps consumption chatbot

# all apps in tenant (omit appName)
airs runtime customer-apps consumption

# 60-day window instead of default 30
airs runtime customer-apps consumption chatbot --time-interval 60

# structured outputs (table / csv / json / yaml) — one row per detector per app
airs runtime customer-apps consumption --output csv > consumption.csv
```

The API enforces an enum for `--time-interval`: only `7`, `30`, and `60` are accepted (verified live 2026-05-28; the CLI validates client-side before calling). The dashboard endpoints require both `appId` and `appName`, so the CLI resolves the UUID from the `customer-apps list` endpoint internally - users only supply the human-readable app name.

Closes #222.
