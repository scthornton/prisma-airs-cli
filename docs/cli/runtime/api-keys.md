# runtime api-keys

### runtime api-keys list

List API keys

```text
airs runtime api-keys list [options]
```

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--limit <n>` | No | `100` | Max results |
| `--output <format>` | No | `pretty` | Output format: pretty, table, csv, json, yaml |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### runtime api-keys create

Create a new API key

```text
airs runtime api-keys create [options]
```

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--config <path>` | Yes | — | JSON file with API key configuration |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### runtime api-keys regenerate

Regenerate an API key

```text
airs runtime api-keys regenerate [options] <apiKeyId>
```

#### Arguments

- `apiKeyId` (required) —

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--interval <n>` | Yes | — | Rotation time interval |
| `--unit <unit>` | Yes | — | Rotation time unit (hours, days, months) |
| `--updated-by <email>` | No | — | Email of user performing regeneration |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### runtime api-keys delete

Delete an API key

```text
airs runtime api-keys delete [options] <apiKeyName>
```

#### Arguments

- `apiKeyName` (required) —

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--updated-by <email>` | Yes | — | Email of user performing deletion |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.
