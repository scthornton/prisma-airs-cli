---
"@cdot65/prisma-airs-cli": patch
---

Fix `airs redteam prompt-sets upload` failing with `File must be a CSV` (400). The upload now sends a `File` (with filename) instead of a bare `Blob`, so the server can identify the content type from the multipart header.
