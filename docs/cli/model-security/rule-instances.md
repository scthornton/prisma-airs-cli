# model-security rule-instances

### model-security rule-instances list

List rule instances in a security group

```text
airs model-security rule-instances list [options] <groupUuid>
```

#### Arguments

- `groupUuid` (required) —

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--security-rule-uuid <uuid>` | No | — | Filter by security rule UUID |
| `--state <state>` | No | — | Filter by state (DISABLED, ALLOWING, BLOCKING) |
| `--limit <n>` | No | `20` | Max results |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### model-security rule-instances get

Get rule instance details

```text
airs model-security rule-instances get [options] <groupUuid> <instanceUuid>
```

#### Arguments

- `groupUuid` (required) —
- `instanceUuid` (required) —

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### model-security rule-instances update

Update a rule instance

```text
airs model-security rule-instances update [options] <groupUuid> <instanceUuid>
```

#### Arguments

- `groupUuid` (required) —
- `instanceUuid` (required) —

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--config <path>` | Yes | — | JSON file with rule instance updates |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.
