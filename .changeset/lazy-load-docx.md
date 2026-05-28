---
"@cdot65/prisma-airs-cli": patch
---

Lazy-load the `docx` dependency so it only loads when generating DOCX output. Previously `docx` was imported eagerly, pulling in browserify polyfills whose `util-deprecate` shim reads `localStorage` at import time and triggered a Node Web Storage warning (`--localstorage-file was provided without a valid path`) on every command. The import is now deferred into the DOCX builders, so unrelated commands (scan, profiles, etc.) no longer emit the warning and start slightly faster.
