# model-security groups

### model-security groups list

List security groups

```text
airs model-security groups list [options]
```

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--source-types <types>` | No | — | Filter by source types (comma-separated) |
| `--search <query>` | No | — | Search by name or UUID |
| `--sort-field <field>` | No | — | Sort field (created_at, updated_at) |
| `--sort-dir <dir>` | No | — | Sort direction (asc, desc) |
| `--enabled-rules <uuids>` | No | — | Filter by enabled rule UUIDs (comma-separated) |
| `--limit <n>` | No | `20` | Max results |
| `--output <format>` | No | `pretty` | Output format: pretty, table, csv, json, yaml |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### model-security groups get

Get security group details

```text
airs model-security groups get [options] <uuid>
```

#### Arguments

- `uuid` (required) —

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### model-security groups create

Create a security group

```text
airs model-security groups create [options]
```

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--config <path>` | Yes | — | JSON file with group configuration |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### model-security groups update

Update a security group

```text
airs model-security groups update [options] <uuid>
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

### model-security groups delete

Delete a security group

```text
airs model-security groups delete [options] <uuid>
```

#### Arguments

- `uuid` (required) —

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.
