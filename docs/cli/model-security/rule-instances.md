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

*List rule instances in a group*

```bash
airs model-security rule-instances list <groupUuid>
```

```text
Rule Instances:

16b310b7-5bc3-472a-928b-a80d751ea8b0
  Known Framework Operators Check  BLOCKING
1f46e5ab-d7cf-4dba-98c5-e93eab4c280c
  Load Time Code Execution Check  BLOCKING
d90c57bb-8ee5-41dc-94db-c7e3e23bd0dd
  Model Architecture Backdoor Check  BLOCKING
8960246d-fe50-4a40-9df4-11732cd5ec85
  Stored In Approved File Format  BLOCKING
```

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
