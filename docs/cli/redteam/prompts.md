# redteam prompts

### redteam prompts list

List prompts in a prompt set

```text
airs redteam prompts list [options] <setUuid>
```

#### Arguments

- `setUuid` (required) —

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--limit <n>` | No | `50` | Max results |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### redteam prompts get

Get prompt details

```text
airs redteam prompts get [options] <setUuid> <promptUuid>
```

#### Arguments

- `setUuid` (required) —
- `promptUuid` (required) —

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### redteam prompts add

Add a prompt to a prompt set

```text
airs redteam prompts add [options] <setUuid>
```

#### Arguments

- `setUuid` (required) —

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--prompt <text>` | Yes | — | Prompt text |
| `--goal <text>` | No | — | Prompt goal |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### redteam prompts update

Update a prompt

```text
airs redteam prompts update [options] <setUuid> <promptUuid>
```

#### Arguments

- `setUuid` (required) —
- `promptUuid` (required) —

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--prompt <text>` | No | — | New prompt text |
| `--goal <text>` | No | — | New goal |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### redteam prompts delete

Delete a prompt

```text
airs redteam prompts delete [options] <setUuid> <promptUuid>
```

#### Arguments

- `setUuid` (required) —
- `promptUuid` (required) —

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.
