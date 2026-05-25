# redteam prompt-sets

### redteam prompt-sets list

List custom prompt sets

```text
airs redteam prompt-sets list [options]
```

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--output <format>` | No | `pretty` | Output format: pretty, table, csv, json, yaml |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### redteam prompt-sets get

Get prompt set details

```text
airs redteam prompt-sets get [options] <uuid>
```

#### Arguments

- `uuid` (required) —

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### redteam prompt-sets create

Create a new prompt set

```text
airs redteam prompt-sets create [options]
```

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--name <name>` | Yes | — | Prompt set name |
| `--description <desc>` | No | — | Prompt set description |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### redteam prompt-sets update

Update a prompt set

```text
airs redteam prompt-sets update [options] <uuid>
```

#### Arguments

- `uuid` (required) —

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--name <name>` | No | — | New name |
| `--description <desc>` | No | — | New description |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### redteam prompt-sets archive

Archive a prompt set

```text
airs redteam prompt-sets archive [options] <uuid>
```

#### Arguments

- `uuid` (required) —

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--unarchive` | No | — | Unarchive instead |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### redteam prompt-sets download

Download CSV template for a prompt set

```text
airs redteam prompt-sets download [options] <uuid>
```

#### Arguments

- `uuid` (required) —

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--output <path>` | No | — | Output file path |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### redteam prompt-sets upload

Upload CSV prompts to a prompt set

```text
airs redteam prompt-sets upload [options] <uuid> <file>
```

#### Arguments

- `uuid` (required) —
- `file` (required) —

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.
