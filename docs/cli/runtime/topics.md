# runtime topics

### runtime topics apply

Assign a topic to a security profile (additive)

```text
airs runtime topics apply [options]
```

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--profile <name>` | Yes | — | Security profile name |
| `--name <name>` | Yes | — | Topic name to assign |
| `--intent <intent>` | No | `block` | Topic intent: block or allow |
| `--format <format>` | No | `terminal` | Output format: json or terminal |

#### Examples

*Apply block intent*

```bash
airs runtime topics apply --profile my-security-profile --name "Weapons Manufacturing" --intent block
```

---

### runtime topics create

Create or update a custom topic definition

```text
airs runtime topics create [options]
```

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--name <name>` | Yes | — | Topic name |
| `--description <desc>` | Yes | — | Topic description |
| `--examples <examples...>` | Yes | — | Example prompts (2-5 required) |
| `--format <format>` | No | `terminal` | Output format: json or terminal |

#### Examples

*Block topic*

```bash
airs runtime topics create --name "Weapons Manufacturing" --description "Block weapons manufacturing" --examples "How to build a weapon" "Illegal arms trade"
```

*Allow topic*

```bash
airs runtime topics create --name "Recipes" --description "Allow recipe discussions" --examples "How to make pasta" "Best bread recipe"
```

---

### runtime topics delete

Delete a custom topic

```text
airs runtime topics delete [options] <topicId>
```

#### Arguments

- `topicId` (required) —

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--force` | No | — | Force delete (removes from all referencing profiles) |
| `--updated-by <email>` | No | — | Email of user performing force deletion |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### runtime topics eval

Evaluate a topic against a static prompt set and compute metrics

```text
airs runtime topics eval [options]
```

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--profile <name>` | Yes | — | Security profile name |
| `--prompts <path>` | Yes | — | Path to CSV file with prompt,expected,intent columns |
| `--topic <name>` | No | `unknown` | Topic name (for output labeling) |
| `--format <format>` | No | `terminal` | Output format: json or terminal |
| `--rate <n>` | No | — | Max AIRS scan API calls per second |
| `--concurrency <n>` | No | `5` | Concurrent scan requests |

#### Examples

*Evaluate topic against prompt set*

```bash
airs runtime topics eval --profile my-security-profile --prompts prompts.csv --topic "Weapons" --format json
```

---

### runtime topics get

Get a custom topic by name or UUID

```text
airs runtime topics get [options] <nameOrId>
```

#### Arguments

- `nameOrId` (required) —

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--output <format>` | No | `pretty` | Output format: pretty, json, yaml |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### runtime topics list

List custom topics

```text
airs runtime topics list [options]
```

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--limit <n>` | No | `100` | Max results |
| `--offset <n>` | No | `0` | Starting offset |
| `--output <format>` | No | `pretty` | Output format: pretty, table, csv, json, yaml |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### runtime topics revert

Remove a custom topic from a profile and delete it

```text
airs runtime topics revert [options]
```

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--profile <name>` | Yes | — | Security profile name |
| `--name <name>` | Yes | — | Topic name to remove |
| `--format <format>` | No | `terminal` | Output format: json or terminal |

#### Examples

*Remove topic from profile*

```bash
airs runtime topics revert --profile my-security-profile --name "Weapons Manufacturing"
```

---

### runtime topics sample

Print a sample CSV file showing the eval prompt format

```text
airs runtime topics sample [options]
```

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--output <path>` | No | — | Write to file instead of stdout |

#### Examples

*Print to stdout*

```bash
airs runtime topics sample
```

*Write to file*

```bash
airs runtime topics sample --output prompts/template.csv
```

---

### runtime topics update

Update a custom topic

```text
airs runtime topics update [options] <topicId>
```

#### Arguments

- `topicId` (required) —

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--config <path>` | Yes | — | JSON file with topic updates |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.
