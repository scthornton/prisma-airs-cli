# redteam scan

## redteam scan

Execute a red team scan against a target

```text
airs redteam scan [options]
```

### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--target <uuid>` | Yes | — | Target UUID |
| `--name <name>` | Yes | — | Scan name |
| `--type <type>` | No | `STATIC` | Job type: STATIC, DYNAMIC, or CUSTOM |
| `--categories <json>` | No | — | Category filter JSON (STATIC scans) |
| `--prompt-sets <uuids>` | No | — | Comma-separated prompt set UUIDs (CUSTOM scans) |
| `--goals <file>` | No | — | JSON file or inline JSON array of attack goals (DYNAMIC scans) |
| `--depth <number>` | No | `10` | Max conversation turns per goal (DYNAMIC scans) |
| `--breadth <number>` | No | `6` | Parallel agents per goal (DYNAMIC scans) |
| `--no-wait` | No | — | Submit scan without waiting for completion |

### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.
