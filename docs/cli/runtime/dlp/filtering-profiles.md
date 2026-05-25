# runtime dlp filtering-profiles

### runtime dlp filtering-profiles list

List filtering profiles

```text
airs runtime dlp filtering-profiles list [options]
```

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--page <n>` | No | — | Zero-indexed page number |
| `--size <n>` | No | — | Page size |
| `--sort <field,dir>` | No | — | Sort criteria (repeatable) |
| `--output <fmt>` | No | `pretty` | Output format |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### runtime dlp filtering-profiles get

Get a filtering profile by id

```text
airs runtime dlp filtering-profiles get [options] <id>
```

#### Arguments

- `id` (required) —

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--output <fmt>` | No | `pretty` | Output format |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### runtime dlp filtering-profiles replace

Full-replace a filtering profile (PUT)

```text
airs runtime dlp filtering-profiles replace [options] <id>
```

#### Arguments

- `id` (required) —

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--file-based` | No | — | Apply to file-based scans (boolean) |
| `--non-file-based` | No | — | Apply to non-file-based scans (boolean) |
| `--description <s>` | No | — | Description |
| `--direction <s>` | No | — | Direction: BOTH|UPLOAD|DOWNLOAD |
| `--log-severity <s>` | No | — | Severity: CRITICAL|HIGH|MEDIUM|LOW|INFORMATIONAL |
| `--scan-type <s>` | No | — | Scan type: include|exclude |
| `--data-profile-id <n>` | No | — | Data profile ID |
| `--euc-template-id <s>` | No | — | EUC template ID |
| `--end-user-coaching` | No | — | Enable end-user coaching |
| `--granular` | No | — | Granular profile |
| `--file-type <s>` | No | — | File type (repeatable) |
| `--body <json|->` | No | — | Raw JSON body (escape hatch; or "-" for stdin) |
| `--body-file <path>` | No | — | Raw JSON body file (escape hatch) |
| `--output <fmt>` | No | `pretty` | Output format |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.
