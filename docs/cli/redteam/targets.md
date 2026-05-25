# redteam targets

### redteam targets list

List configured red team targets

```text
airs redteam targets list [options]
```

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--output <format>` | No | `pretty` | Output format: pretty, table, csv, json, yaml |

#### Examples

*List all targets*

```bash
airs redteam targets list
```

```text
Targets:

89e2374c-7bac-4c5c-a291-9392ae919e14
  litellm.cdot.io - no guardrails - REST APIv2  active  type: APPLICATION
f2953fa2-943c-47aa-814d-0f421f6e071b
  AWS Bedrock - Claude 4.6  active  type: MODEL
b9e2861d-73ac-48b5-a56f-f43039cfc4a1
  postman  inactive  type: AGENT
```

---

### redteam targets get

Get target details

```text
airs redteam targets get [options] <uuid>
```

#### Arguments

- `uuid` (required) —

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### redteam targets create

Create a new red team target

```text
airs redteam targets create [options]
```

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--config <path>` | Yes | — | JSON file with target configuration |
| `--validate` | No | — | Validate target connection before saving |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### redteam targets update

Update a red team target

```text
airs redteam targets update [options] <uuid>
```

#### Arguments

- `uuid` (required) —

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--config <path>` | Yes | — | JSON file with target updates |
| `--validate` | No | — | Validate target connection before saving |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### redteam targets delete

Delete a red team target

```text
airs redteam targets delete [options] <uuid>
```

#### Arguments

- `uuid` (required) —

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### redteam targets probe

Test target connection without saving

```text
airs redteam targets probe [options]
```

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--config <path>` | Yes | — | JSON file with connection params |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### redteam targets profile

View target profile

```text
airs redteam targets profile [options] <uuid>
```

#### Arguments

- `uuid` (required) —

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### redteam targets update-profile

Update target profile

```text
airs redteam targets update-profile [options] <uuid>
```

#### Arguments

- `uuid` (required) —

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--config <path>` | Yes | — | JSON file with profile updates |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### redteam targets validate-auth

Validate target auth credentials

```text
airs redteam targets validate-auth [options]
```

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--auth-type <type>` | Yes | — | Auth type: HEADERS, BASIC_AUTH, OAUTH2 |
| `--config <path>` | Yes | — | JSON file with auth_config |
| `--target-id <uuid>` | No | — | Existing target UUID |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### redteam targets metadata

Get target field metadata

```text
airs redteam targets metadata [options]
```

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### redteam targets init

Scaffold a target config JSON from a provider template

```text
airs redteam targets init [options] <provider>
```

#### Arguments

- `provider` (required) —

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--output <file>` | No | — | Output file path |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### redteam targets templates

Get provider-specific target templates

```text
airs redteam targets templates [options]
```

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### redteam targets backup

Backup red team targets to local JSON/YAML files

```text
airs redteam targets backup [options]
```

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--output-dir <path>` | No | — | Output directory |
| `--format <format>` | No | `json` | Output format: json or yaml |
| `--name <targetName>` | No | — | Backup a single target by name |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### redteam targets restore

Restore red team targets from local JSON/YAML backup files

```text
airs redteam targets restore [options]
```

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--input-dir <path>` | No | — | Directory containing backup files |
| `--file <path>` | No | — | Single backup file to restore |
| `--overwrite` | No | — | Update existing targets with same name (default: skip) |
| `--validate` | No | — | Validate target connection before saving |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.
