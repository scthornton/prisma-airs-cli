# model-security scans

### model-security scans list

List model security scans

```text
airs model-security scans list [options]
```

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--eval-outcome <outcome>` | No | — | Filter by eval outcome |
| `--source-type <type>` | No | — | Filter by source type |
| `--scan-origin <origin>` | No | — | Filter by scan origin |
| `--search <query>` | No | — | Search scans |
| `--limit <n>` | No | `20` | Max results |
| `--output <format>` | No | `pretty` | Output format: pretty, table, csv, json, yaml |

#### Examples

*List model security scans*

```bash
airs model-security scans list
```

```text
Model Security Scans:

7a7e1cdf-a6b1-4743-a5f2-a7bd96ec7bab
  BLOCKED  HUGGING_FACE  2026-03-03T22:32:12.344402Z
  https://huggingface.co/microsoft/DialoGPT-medium
  Rules: 10 passed  1 failed  / 11 total
ee71b4da-64ce-4d6c-96fb-2bced1154a06
  ALLOWED  MODEL_SECURITY_SDK  2026-03-03T22:21:44.130386Z
  /Users/cdot/models/qwen3-0.6b-saffron-merged
  Rules: 6 passed  0 failed  / 6 total
```

---

### model-security scans get

Get scan details

```text
airs model-security scans get [options] <uuid>
```

#### Arguments

- `uuid` (required) —

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### model-security scans create

Create a model security scan

```text
airs model-security scans create [options]
```

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--config <path>` | Yes | — | JSON file with scan configuration |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### model-security scans evaluations

List rule evaluations for a scan

```text
airs model-security scans evaluations [options] <scanUuid>
```

#### Arguments

- `scanUuid` (required) —

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--limit <n>` | No | `20` | Max results |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### model-security scans evaluation

Get evaluation details

```text
airs model-security scans evaluation [options] <uuid>
```

#### Arguments

- `uuid` (required) —

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### model-security scans violations

List violations for a scan

```text
airs model-security scans violations [options] <scanUuid>
```

#### Arguments

- `scanUuid` (required) —

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--limit <n>` | No | `20` | Max results |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### model-security scans violation

Get violation details

```text
airs model-security scans violation [options] <uuid>
```

#### Arguments

- `uuid` (required) —

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### model-security scans files

List scanned files

```text
airs model-security scans files [options] <scanUuid>
```

#### Arguments

- `scanUuid` (required) —

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--type <type>` | No | — | Filter by file type |
| `--result <result>` | No | — | Filter by result |
| `--limit <n>` | No | `20` | Max results |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.
