---
title: Data Patterns
---

# Data Patterns

Manage Data Patterns on the DLP service. Patterns define detection techniques (regex, weighted_regex, dictionary, EDM, classifier, etc.) and matching rules. Full CRUD is available: list, create, get, replace (full PUT), patch (JSON Merge Patch), delete.

## Commands

| Command | Description | Exit Code |
|---------|-------------|-----------|
| `list` | List all data patterns with optional pagination and sorting | 1 on error |
| `create` | Create a new pattern | 1 on error |
| `get` | Fetch a single pattern by ID | 1 on error |
| `replace` | Full PUT: update all fields of a pattern | 1 on error |
| `patch` | JSON Merge Patch: update only specified fields | 1 on error |
| `delete` | Soft-delete a pattern (status becomes 'deleted', still resolvable by get) | 1 on error |

## list

List all patterns with optional pagination and sorting.

```bash
airs runtime dlp patterns list
airs runtime dlp patterns list --page 0 --size 50 --sort name,asc --output json
```

**Output (`--output json`)** — curated `{items, page}` projection (not the raw SDK envelope):

```json
{
  "items": [
    {
      "id": "6990...",
      "name": "IPv4",
      "type": "custom",
      "status": "active",
      "technique": "regex",
      "version": 1
    },
    {
      "id": "6900...",
      "name": "Passport - Australia",
      "type": "predefined",
      "status": "disabled",
      "technique": "regex",
      "version": 1
    }
  ],
  "page": { "number": 0, "size": 25, "total": 1123, "returned": 2 }
}
```

`pretty` and `table` formats render columns ID, Name, Type, Status, Technique, Version. Use `get <id>` for full nested fields (`detection_config`, `matching_rules`, `tags`, `audit_metadata`).

!!! note "Nullable fields"
    Underlying API responses include `null` values on `matching_rules` nested fields — `delimiter`, `proximity_keywords`, `regexes`, `metadata_criteria` are each independently nullable depending on the detection technique. CLI requires `@cdot65/prisma-airs-sdk@^0.9.2` or newer to parse this surface; older SDK pins fail Zod validation.

## create

Create a new data pattern using structured CLI flags (`--name` is the only required flag; `--type` defaults to `custom`, `--technique` defaults to `regex`):

```bash
airs runtime dlp patterns create \
  --name "cc-numbers-weighted" \
  --description "Credit-card numbers, weighted by proximity to card-related keywords" \
  --technique weighted_regex \
  --confidence-levels "low,medium,high" \
  --proximity-distance 30 \
  --proximity-keyword card --proximity-keyword credit \
  --proximity-keyword visa --proximity-keyword mastercard --proximity-keyword amex \
  --weighted-regex "\\b\\d{16}\\b|1.0" \
  --weighted-regex "\\b\\d{15}\\b|0.8" \
  --tag "classification=PCI" \
  --tag "compliance=PCI-DSS-3.2.1" \
  --tag "geography=US,EU" \
  --output json
```

Flag reference:

| Flag | Notes |
|------|-------|
| `--name <s>` | Required (unless `--body-file`) |
| `--type <s>` | `predefined`, `custom`, `file_property` (default `custom`) |
| `--description <s>` | Optional |
| `--technique <s>` | Detection technique (default `regex`) |
| `--confidence-levels <csv>` | e.g. `high,low` |
| `--regex <pattern>` | Repeatable, weight=1 |
| `--weighted-regex <PATTERN\|N>` | Repeatable; splits on LAST `\|` so the pattern may contain pipes |
| `--delimiter <s>` | For proximity matching |
| `--proximity-distance <n>` | 2..1000 |
| `--proximity-keyword <s>` | Repeatable |
| `--tag <k=v>` | Repeatable; value may be CSV (`classification=pab,endpoint`) |

**Output (`--output json`)** — curated ack:

```json
{
  "action": "created",
  "id": "6a12...",
  "name": "cc-numbers-weighted",
  "type": "custom",
  "status": "active",
  "version": 1
}
```

### Escape hatch — `--body-file`

For shapes the flags don't cover (e.g. unusual `metadata_criteria` on `matching_rules`), pass a JSON file:

```bash
airs runtime dlp patterns create --body-file pattern.json --output json
```

Body shape matches the API request — `{ name, type, detection_config, matching_rules, tags }`.

## get

Retrieve a single pattern by ID.

```bash
airs runtime dlp patterns get 6990...
airs runtime dlp patterns get 6990... --output json
```

**Output** — same shape as a single `content[]` entry from `list`.

!!! warning "Known issue (2026-05-23)"
    The DLP API currently returns HTTP 400 for `GET /v2/api/data-patterns/{id}` against live tenants, even with valid IDs from the `list` response. This is a server-side issue, not a CLI or SDK bug — reproducible via `curl` with the same credentials. Use `list` and filter client-side until the upstream is fixed.

## replace

Full PUT — the entire body becomes the desired state. Uses the same `writeFlags` as `create`:

```bash
airs runtime dlp patterns replace 6990... \
  --name "cc-numbers-weighted" \
  --technique weighted_regex \
  --confidence-levels "low,medium,high" \
  --proximity-distance 30 \
  --proximity-keyword card --proximity-keyword credit \
  --weighted-regex "\\b\\d{16}\\b|1.0" \
  --weighted-regex "\\b\\d{15}\\b|0.8" \
  --weighted-regex "\\b\\d{13}\\b|0.6" \
  --tag "classification=PCI" \
  --output json
```

`--body-file pattern-update.json` is also accepted.

**Output (`--output json`)** — curated ack `{action: "replaced", id, name, type, status, version}` with incremented version.

## patch

JSON Merge Patch. Use `--set k=v` and `--clear k` for scalar tweaks; `--body-file` for nested fields. Required fields even on patch: `name`, `type`, `detection_config` — include them via `--set` if your patch touches anything else.

`--set/--clear` values are coerced: numbers stay numeric, `true`/`false` become booleans, `null` clears, and JSON literals parse. To force a string that looks numeric, quote: `--set count='"5"'`.

```bash
# Scalar tweaks
airs runtime dlp patterns patch 6990... \
  --set name='"cc-numbers-weighted"' \
  --set type='"custom"' \
  --clear description

# Nested fields via JSON file
airs runtime dlp patterns patch 6990... --body-file pattern-patch.json --output json
```

`--body-file` is mutually exclusive with `--set/--clear`.

**Output (`--output json`)** — curated ack `{action: "patched", id, name, type, status, version}`.

## delete

Soft-delete a pattern. The pattern becomes invisible to `list` but remains resolvable via `get` with `status: 'deleted'`.

```bash
airs runtime dlp patterns delete 6990...
```

**Exit code** — 0 on success, 1 on error.

## Tips

- **Merge Patch semantics**: On PATCH, `name`, `type`, and `detection_config` are required even if unchanged. Arrays and objects are replaced wholesale (not merged) — re-send the entire `matching_rules` if you modify any part. Omit fields to preserve them; send `null` to clear.
- **Detection techniques**: Valid techniques include `regex`, `weighted_regex`, `dictionary`, `edm`, `document_fingerprint`, `trainable_classifier`, `ml_document`, `ml`, `titus_tag`, `wildfire`, `file_property`, `pab`, and `document_classifier`.
- **Soft delete**: DELETE archives the pattern server-side. Fetching a deleted pattern via `get` returns `status: 'deleted'`.

## See also

- [Data Profiles](profiles.md) — profiles compose patterns via detection rules
- [Data Dictionaries](dictionaries.md) — keyword lists for `dictionary` detection technique
- [Data Filtering Profiles](filtering-profiles.md) — binds profiles to scanning policy
