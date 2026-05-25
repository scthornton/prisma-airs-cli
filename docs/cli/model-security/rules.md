# model-security rules

### model-security rules list

List available security rules

```text
airs model-security rules list [options]
```

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--source-type <type>` | No | — | Filter by source type |
| `--search <query>` | No | — | Search by name or UUID |
| `--limit <n>` | No | `20` | Max results |
| `--output <format>` | No | `pretty` | Output format: pretty, table, csv, json, yaml |

#### Examples

*List security rules*

```bash
airs model-security rules list
```

```text
Security Rules:

550e8400-e29b-41d4-a716-44665544000b
  Known Framework Operators Check  type: ARTIFACT  default: BLOCKING
  Model artifacts should only contain known safe TensorFlow operators
  Sources: ALL
550e8400-e29b-41d4-a716-446655440008
  Load Time Code Execution Check  type: ARTIFACT  default: BLOCKING
  Model artifacts should not contain unsafe operators that are run upon deserialization
  Sources: ALL
550e8400-e29b-41d4-a716-446655440009
  Suspicious Model Components Check  type: ARTIFACT  default: BLOCKING
  Model artifacts should not contain suspicious components
  Sources: ALL
```

---

### model-security rules get

Get security rule details

```text
airs model-security rules get [options] <uuid>
```

#### Arguments

- `uuid` (required) —

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.
