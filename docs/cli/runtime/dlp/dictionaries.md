# runtime dlp dictionaries

### runtime dlp dictionaries list

List dictionaries

```text
airs runtime dlp dictionaries list [options]
```

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--page <n>` | No | — | — |
| `--size <n>` | No | — | — |
| `--sort <field,dir>` | No | — | (repeatable) |
| `--keywords` | No | — | Include keyword list in response |
| `--include-keywords` | No | — | Alias for --keywords |
| `--output <fmt>` | No | `pretty` | Output format |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### runtime dlp dictionaries create

Create dictionary via multipart upload

```text
airs runtime dlp dictionaries create [options]
```

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--name <s>` | No | — | — |
| `--category <s>` | No | — | — |
| `--region <s>` | No | — | — |
| `--description <s>` | No | — | — |
| `--classification <s>` | No | — | — |
| `--file <path>` | No | — | Keyword file |
| `--metadata-file <path>` | No | — | JSON metadata file (overrides --name/--category/...) |
| `--include-keywords` | No | — | Include keywords in response |
| `--output <fmt>` | No | `pretty` | Output format |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### runtime dlp dictionaries get

```text
airs runtime dlp dictionaries get [options] <id>
```

#### Arguments

- `id` (required) —

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--keywords` | No | — | — |
| `--include-keywords` | No | — | Alias for --keywords |
| `--output <fmt>` | No | `pretty` | Output format |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### runtime dlp dictionaries replace

Full-replace via multipart upload. --file required. May return 200 (body) or 204 (re-get; falls back to "(state not echoed)" on transient failure).

```text
airs runtime dlp dictionaries replace [options] <id>
```

#### Arguments

- `id` (required) —

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--name <s>` | No | — | — |
| `--category <s>` | No | — | — |
| `--region <s>` | No | — | — |
| `--description <s>` | No | — | — |
| `--classification <s>` | No | — | — |
| `--file <path>` | No | — | Keyword file (required) |
| `--metadata-file <path>` | No | — | JSON metadata file |
| `--include-keywords` | No | — | — |
| `--output <fmt>` | No | `pretty` | Output format |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### runtime dlp dictionaries patch

```text
airs runtime dlp dictionaries patch [options] <id>
```

#### Arguments

- `id` (required) —

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--body-file <path>` | No | — | — |
| `--set <k=v...>` | No | — | (repeatable) |
| `--clear <key...>` | No | — | (repeatable) |
| `--output <fmt>` | No | `pretty` | Output format |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### runtime dlp dictionaries delete

Delete a dictionary

```text
airs runtime dlp dictionaries delete [options] <id>
```

#### Arguments

- `id` (required) —

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.
