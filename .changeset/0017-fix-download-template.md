---
"@cdot65/prisma-airs-cli": patch
---

Fix `airs redteam prompt-sets download` crashing with `Cannot read properties of undefined (reading 'getToken')`. The previous workaround reached into SDK internals that no longer exist. With `@cdot65/prisma-airs-sdk` 0.8.3 the SDK now returns CSV correctly, so the workaround is removed and the method delegates straight to `customAttacks.downloadTemplate()`.
