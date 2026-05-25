# runtime dlp profiles

### runtime dlp profiles list

List data profiles

```text
airs runtime dlp profiles list [options]
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

### runtime dlp profiles create

Create a data profile

```text
airs runtime dlp profiles create [options]
```

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--name <s>` | No | — | Profile name (required unless --body-file) |
| `--profile-type <s>` | No | — | Profile type: basic|advanced (default: advanced) |
| `--description <s>` | No | — | Description |
| `--granular` | No | — | Granular data profile |
| `--pattern-id <id>` | No | — | Data pattern ID to include (repeatable). Builds a simple expression_tree. |
| `--combinator <op>` | No | — | Combinator for --pattern-id: or|and|not|and_not|or_not (default: or) |
| `--confidence <level>` | No | — | Confidence level for --pattern-id leaves (default: high) |
| `--body <json|->` | No | — | Raw JSON body (escape hatch; or "-" for stdin) |
| `--body-file <path>` | No | — | Raw JSON body file (escape hatch; required for complex rule trees) |
| `--output <fmt>` | No | `pretty` | Output format |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### runtime dlp profiles get

Get a data profile by id

```text
airs runtime dlp profiles get [options] <id>
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

### runtime dlp profiles replace

Full-replace a data profile (PUT)

```text
airs runtime dlp profiles replace [options] <id>
```

#### Arguments

- `id` (required) —

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--name <s>` | No | — | Profile name (required unless --body-file) |
| `--profile-type <s>` | No | — | Profile type: basic|advanced (default: advanced) |
| `--description <s>` | No | — | Description |
| `--granular` | No | — | Granular data profile |
| `--pattern-id <id>` | No | — | Data pattern ID to include (repeatable). Builds a simple expression_tree. |
| `--combinator <op>` | No | — | Combinator for --pattern-id: or|and|not|and_not|or_not (default: or) |
| `--confidence <level>` | No | — | Confidence level for --pattern-id leaves (default: high) |
| `--body <json|->` | No | — | Raw JSON body (escape hatch; or "-" for stdin) |
| `--body-file <path>` | No | — | Raw JSON body file (escape hatch; required for complex rule trees) |
| `--output <fmt>` | No | `pretty` | Output format |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### runtime dlp profiles patch

JSON Merge Patch. body must include name + profile_type. Use --body-file for nested fields. --set/--clear coerce values: numbers/booleans/JSON literals. To force a string, quote: --set count='"5"'.

```text
airs runtime dlp profiles patch [options] <id>
```

#### Arguments

- `id` (required) —

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--body-file <path>` | No | — | JSON merge-patch body file |
| `--set <k=v...>` | No | — | Set scalar field (repeatable) |
| `--clear <key...>` | No | — | Clear field via merge-patch null (repeatable) |
| `--output <fmt>` | No | `pretty` | Output format |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### runtime dlp profiles delete

Not supported — prints the patch idiom and exits 2

```text
airs runtime dlp profiles delete [options] <id>
```

#### Arguments

- `id` (required) —

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.
