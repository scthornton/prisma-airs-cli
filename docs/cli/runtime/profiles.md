# runtime profiles

### runtime profiles list

List security profiles

```text
airs runtime profiles list [options]
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

### runtime profiles get

Get a security profile by name or UUID

```text
airs runtime profiles get [options] <nameOrId>
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

### runtime profiles create

Create a new security profile

```text
airs runtime profiles create [options]
```

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--name <name>` | Yes | — | Profile name |
| `--no-active` | No | — | Create profile as inactive |
| `--prompt-injection <action>` | No | — | Prompt injection action (block/allow/alert) |
| `--toxic-content <action>` | No | — | Toxic content action (e.g. "high:block, moderate:block") |
| `--contextual-grounding <action>` | No | — | Contextual grounding action (block/allow/alert) |
| `--malicious-code <action>` | No | — | Malicious code protection action (block/allow/alert) |
| `--url-action <action>` | No | — | URL detected action (block/allow/alert) |
| `--allow-url-categories <list>` | No | — | Comma-separated URL categories to allow |
| `--block-url-categories <list>` | No | — | Comma-separated URL categories to block |
| `--alert-url-categories <list>` | No | — | Comma-separated URL categories to alert |
| `--agent-security <action>` | No | — | Agent security action (block/allow/alert) |
| `--dlp-action <action>` | No | — | Data leak detection action (block/allow/alert) |
| `--dlp-profiles <list>` | No | — | Comma-separated DLP profile names |
| `--mask-data-inline` | No | — | Mask detected data inline |
| `--db-security-create <action>` | No | — | Database create action (block/allow/alert) |
| `--db-security-read <action>` | No | — | Database read action (block/allow/alert) |
| `--db-security-update <action>` | No | — | Database update action (block/allow/alert) |
| `--db-security-delete <action>` | No | — | Database delete action (block/allow/alert) |
| `--inline-timeout-action <action>` | No | — | Inline timeout action (block/allow) |
| `--max-inline-latency <n>` | No | — | Max inline latency in seconds |
| `--mask-data-in-storage` | No | — | Mask data in storage |
| `--config <path>` | No | — | JSON file with profile configuration (legacy) |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### runtime profiles update

Update a security profile by name or UUID

```text
airs runtime profiles update [options] <nameOrId>
```

#### Arguments

- `nameOrId` (required) —

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--name <name>` | No | — | Update profile name |
| `--no-active` | No | — | Set profile as inactive |
| `--active` | No | — | Set profile as active |
| `--prompt-injection <action>` | No | — | Prompt injection action (block/allow/alert) |
| `--toxic-content <action>` | No | — | Toxic content action (e.g. "high:block, moderate:block") |
| `--contextual-grounding <action>` | No | — | Contextual grounding action (block/allow/alert) |
| `--malicious-code <action>` | No | — | Malicious code protection action (block/allow/alert) |
| `--url-action <action>` | No | — | URL detected action (block/allow/alert) |
| `--allow-url-categories <list>` | No | — | Comma-separated URL categories to allow |
| `--block-url-categories <list>` | No | — | Comma-separated URL categories to block |
| `--alert-url-categories <list>` | No | — | Comma-separated URL categories to alert |
| `--agent-security <action>` | No | — | Agent security action (block/allow/alert) |
| `--dlp-action <action>` | No | — | Data leak detection action (block/allow/alert) |
| `--dlp-profiles <list>` | No | — | Comma-separated DLP profile names |
| `--mask-data-inline` | No | — | Mask detected data inline |
| `--db-security-create <action>` | No | — | Database create action (block/allow/alert) |
| `--db-security-read <action>` | No | — | Database read action (block/allow/alert) |
| `--db-security-update <action>` | No | — | Database update action (block/allow/alert) |
| `--db-security-delete <action>` | No | — | Database delete action (block/allow/alert) |
| `--inline-timeout-action <action>` | No | — | Inline timeout action (block/allow) |
| `--max-inline-latency <n>` | No | — | Max inline latency in seconds |
| `--mask-data-in-storage` | No | — | Mask data in storage |
| `--config <path>` | No | — | JSON file with profile updates (legacy) |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### runtime profiles delete

Delete a security profile by name or UUID

```text
airs runtime profiles delete [options] <nameOrId>
```

#### Arguments

- `nameOrId` (required) —

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--force` | No | — | Force delete (removes from referencing policies) |
| `--updated-by <email>` | No | — | Email of user performing force deletion |

#### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.

---

### runtime profiles cleanup

Delete old profile revisions, keeping only the latest per name

```text
airs runtime profiles cleanup [options]
```

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--force` | No | — | Skip confirmation — proceed with deletion |
| `--updated-by <email>` | No | — | Email for deletion audit (default: git user.email) |
| `--output <format>` | No | `pretty` | Output format: pretty or json |

#### Examples

*Dry run (preview)*

```bash
airs runtime profiles cleanup
```

*Delete old revisions*

```bash
airs runtime profiles cleanup --force
```

*Specify email for audit trail*

```bash
airs runtime profiles cleanup --force --updated-by user@example.com
```

*JSON output*

```bash
airs runtime profiles cleanup --force --output json
```

---

### runtime profiles audit

Evaluate all topics in a security profile

```text
airs runtime profiles audit [options] <profileName>
```

#### Arguments

- `profileName` (required) —

#### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--max-tests-per-topic <n>` | No | `20` | Max tests per topic |
| `--format <format>` | No | `terminal` | Output format: terminal, json, html |
| `--output <path>` | No | — | Output file path (json/html) |
| `--provider <provider>` | No | — | LLM provider override |
| `--model <model>` | No | — | LLM model override |

#### Examples

*Audit all topics in a profile*

```bash
airs runtime profiles audit my-security-profile
```

*JSON export*

```bash
airs runtime profiles audit my-security-profile --format json
```

*HTML report*

```bash
airs runtime profiles audit my-security-profile --format html --output audit-report.html
```
