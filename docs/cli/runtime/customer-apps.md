# runtime customer-apps

### runtime customer-apps list

List customer apps

```text
airs runtime customer-apps list [options]
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

### runtime customer-apps get

Get customer app details

```text
airs runtime customer-apps get [options] <appName>
```

#### Arguments

- `appName` (required) —

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### runtime customer-apps update

Update a customer app

```text
airs runtime customer-apps update [options] <appId>
```

#### Arguments

- `appId` (required) —

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--config <path>` | Yes | — | JSON file with app updates |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### runtime customer-apps delete

Delete a customer app

```text
airs runtime customer-apps delete [options] <appName>
```

#### Arguments

- `appName` (required) —

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--updated-by <email>` | Yes | — | Email of user performing deletion |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.
