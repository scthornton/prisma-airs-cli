# CLI Docs — Live Input/Output Examples

**Date**: 2026-05-25
**Status**: approved (brainstorming)
**Owner**: orchestrator (this session) + agent-primary / agent-secondary / documentation tmux agents

## Problem

Nearly every CLI doc page under `docs/cli/runtime/`, `docs/cli/redteam/`, and `docs/cli/model-security/` carries the placeholder:

```markdown
!!! warning "Example needed"
    No curated input/output example for this command yet.
```

Only 7 pages site-wide have real examples (`bulk-scan.md`, `dlp-gen.md`, `scan.md`, redteam `categories/list/scan`, model-security `install`). Project rule: every command must have a real input + real output. Current state contradicts that rule.

User flagged the four DLP pages specifically:
- `docs/cli/runtime/dlp/dictionaries.md`
- `docs/cli/runtime/dlp/filtering-profiles.md`
- `docs/cli/runtime/dlp/patterns.md`
- `docs/cli/runtime/dlp/profiles.md`

…but the gap spans the whole CLI docs surface.

## Goals

1. Replace every `!!! warning "Example needed"` with a live example block.
2. Each command page shows **Pretty + JSON + YAML** for list/get; **JSON only** for write ops (create/update/replace/patch/delete).
3. When live execution hits an upstream API, CLI, or SDK defect, surface it as a `!!! bug` admonition with a tracking-issue link — never fabricate output.
4. Ship as parallelizable per-command-group issues under one native parent epic.

## Hard constraint: CLI cwd

All `airs` invocations during capture **must** run from `~/development/cdot65/prisma-airs-cli`. The repo-local `.env` (or `.env.cdot65` / `.env.dus` for alternate tenants) is what supplies `PANW_AI_SEC_API_KEY`, `PANW_MGMT_*`, and `PANW_DLP_ENDPOINT`. Running from anywhere else fails with missing-credential errors. Every dispatch message must include `cd ~/development/cdot65/prisma-airs-cli` before any CLI command.

## Non-goals

- Not refactoring the example structure on the 7 pages that already have examples.
- Not adding new CLI features or fixing CLI/SDK/upstream bugs in scope of this epic — only filing them.
- Not authoring tutorials, only command-reference examples.

## Example block format (the contract)

Replaces each placeholder. For list/get commands:

````markdown
#### Examples

**Input**
```bash
airs runtime dlp dictionaries list
```

**Output (pretty / default)**
```text
<live capture, redacted>
```

**JSON**
```bash
airs runtime dlp dictionaries list --output json
```
```json
<live capture, redacted>
```

**YAML**
```bash
airs runtime dlp dictionaries list --output yaml
```
```yaml
<live capture, redacted>
```
````

For write ops (create/replace/patch/delete), only the JSON capture appears (and the body/fixture if applicable).

For bug-blocked commands:

````markdown
#### Examples

**Input**
```bash
airs runtime dlp patterns get <id>
```

!!! bug "Upstream API returns 400"
    The DLP `/v2/api/data-patterns/{id}` endpoint currently returns HTTP 400 for all
    pattern UUIDs. Tracking: [cdot65/prisma-airs-cli#80](https://github.com/cdot65/prisma-airs-cli/issues/80).
    Example will be backfilled once the upstream API is fixed.

**Workaround**
```bash
airs runtime dlp patterns list --output json | jq '.[] | select(.id=="...")'
```
````

## Redaction rules

Before committing any captured output:
- Tenant service group ID → `<tenant-id>`
- UUIDs → `00000000-0000-0000-0000-000000000001` (increment last digit per distinct entity)
- Real API keys / client secrets → MUST be absent (they're never in CLI output, but spot-check anyway)
- Real dictionary keyword content → if sensitive (PII regexes, customer terms), swap for innocuous fixture
- User emails → `user@example.com`
- Real customer app names → `example-app`

Fixtures committed under `docs/cli/examples/<area>/<command>.json` use the same redaction.

## Epic structure (GitHub)

**Parent**: regular issue titled `Epic: Add live input/output examples to all CLI docs`. Each sub-issue attached via the native sub-issue API.

**Sub-issues** (each is end-to-end: gap audit → fixtures → live capture → doc edit → PR):

| # | Issue | Pages | Blocks |
|---|---|---|---|
| 1 | docs(prep): example template + fixture conventions + capture helper | (cross-cutting) | all others |
| 2 | docs(dlp/dictionaries): live examples | `runtime/dlp/dictionaries.md` | — |
| 3 | docs(dlp/patterns): live examples (+ document #80 bug) | `runtime/dlp/patterns.md` | — |
| 4 | docs(dlp/profiles): live examples (+ document #80 bug + soft-delete idiom) | `runtime/dlp/profiles.md` | — |
| 5 | docs(dlp/filtering-profiles): live examples | `runtime/dlp/filtering-profiles.md` | — |
| 6 | docs(runtime/profiles): live examples | `runtime/profiles.md` | — |
| 7 | docs(runtime/topics): live examples | `runtime/topics.md` | — |
| 8 | docs(runtime/api-keys + customer-apps): live examples | 2 pages | — |
| 9 | docs(runtime/{deployment-profiles,dlp-profiles,scan-logs,resume-poll}): live examples | 4 pages | — |
| 10 | docs(redteam/scan-lifecycle): live examples | redteam/{abort,status,report}.md | — |
| 11 | docs(redteam/prompts): live examples | redteam/{prompt-sets,prompts}.md | — |
| 12 | docs(redteam/targets-config): live examples | redteam/{targets,devices,eula,registry-credentials,instances,properties}.md | — |
| 13 | docs(model-security): live examples | model-security/{groups,rules,rule-instances,scans,labels,pypi-auth}.md | — |

#1 is the only blocker. #2–#13 parallelize freely once #1 lands.

**Tracking**: parent issue labeled `epic`; no milestone (repo doesn't use them). Sub-issues labeled `documentation`.

## Per-issue workflow (agent recipe)

Every per-group issue follows the same nine steps:

1. **Branch** `cdot65/docs-examples-<group>` from `main`.
2. **Gap audit**: list every command on the assigned page(s); confirm placeholder presence.
3. **Fixture creation**: minimal valid JSON fixtures under `docs/cli/examples/<area>/<command>.json` for any write op needing `--body-file`.
4. **Live capture**: run each command up to three times (`--output` pretty, `json`, `yaml`); save outputs locally.
5. **Redact** per the rules above.
6. **Bug detection**:
   - Upstream API defect → `!!! bug` admonition; if no tracking issue exists, file one in `cdot65/prisma-airs-cli` labeled `upstream-bug`; link from page.
   - CLI defect → file in `cdot65/prisma-airs-cli` labeled `bug`; link from page; admonition only.
   - SDK defect → file in `cdot65/prisma-airs-sdk` labeled `bug`; link from page; admonition only.
7. **Doc edit**: swap placeholder for example block per the format contract.
8. **Changeset**: add `.changeset/<slug>.md` as `patch` with user-facing description.
9. **PR**: `gh pr create`, title `docs(<group>): add live input/output examples`, body links the parent issue. Post the same summary as a PR comment.

## PREP issue (#1) deliverables

- A snippet template file (or doc section) showing the exact example block format above.
- The `docs/cli/examples/` directory layout documented.
- Redaction convention captured as a short doc.

No helper script — three direct `airs` invocations per command is fine; a wrapper adds complexity without saving time.

## Agent dispatch plan

Four tmux windows in the `prisma-airs-cli` session: `orchestrator` (me), `agent-primary`, `agent-secondary`, `documentation`.

**Wave 1** (sequential, blocks everything): issue #1 → `agent-primary`.
**Wave 2** (parallel, after #1 merges):
- `agent-primary` → #2 dictionaries
- `agent-secondary` → #3 patterns
- `documentation` → #4 profiles

**Wave 3** (as agents free up): #5 filtering-profiles, #6 runtime/profiles, #7 runtime/topics.
**Wave 4** (as agents free up): #8 api-keys+customer-apps, #9 deployment-profiles+dlp-profiles+scan-logs+resume-poll.
**Wave 5** (final batch): #10 redteam/scan-lifecycle, #11 redteam/prompts, #12 redteam/targets-config, #13 model-security.

## Dispatch message template

Sent via `tmux send-keys -t prisma-airs-cli:<window> "<text>" Enter`:

```
You are working issue #N: <title>. Branch: cdot65/docs-examples-<group>.

Read first:
  - Repo: ~/development/cdot65/prisma-airs-cli
  - Spec: docs/superpowers/specs/2026-05-25-cli-docs-examples-design.md
  - Prep output from issue #1: see template + helper script.

Task:
  1. cd ~/development/cdot65/prisma-airs-cli  (REQUIRED — .env auto-loads here)
  2. Gap audit on: <pages>
  3. Build fixtures for write ops (commit under docs/cli/examples/<area>/)
  4. Live capture: pretty + JSON + YAML for list/get; JSON only for write ops
  5. Redact per spec (tenant IDs, UUIDs, emails, customer app names)
  6. Add bug admonition + file CLI/SDK/upstream bug if hit
  7. Update doc page; add .changeset/<slug>.md (patch)
  8. Open PR; post summary as PR comment.
  9. Then from your tmux window:
       tmux send-keys -t prisma-airs-cli:orchestrator "Issue #N done — PR <url>. <one-line summary>." Enter
       tmux send-keys -t prisma-airs-cli:orchestrator " " Enter

Do NOT touch any file outside: the listed doc pages, docs/cli/examples/, and .changeset/.
```

## Review loop (orchestrator)

On the space-enter ping:
1. Read agent's summary line in `orchestrator` scrollback.
2. `gh pr view <url>` + `gh pr diff <url>` — verify scope.
3. Verify checklist:
   - Every placeholder on assigned pages replaced (or `!!! bug` justifies absence).
   - Pretty/JSON/YAML present for list/get; JSON for write ops.
   - Redaction rules followed (no real tenant ID, UUIDs, keys).
   - Changeset present, scoped to user-facing impact.
   - Only allowed files touched.
4. **Aligned** → `gh pr merge --squash --delete-branch`, close issue, dispatch next from the queue to that tmux window.
5. **Misaligned** → `tmux send-keys -t prisma-airs-cli:<window> "Revise: <specific gaps>. Push to same branch." Enter`. Do not merge.

## Failure modes

| Symptom | Response |
|---|---|
| Agent silent >20 min after dispatch | Check window with `tmux capture-pane`; if blocked on credentials/missing fixture, send fix; if hung, kill and reassign issue. |
| CI failure on PR | Bounce to agent with link to failed check; don't merge. |
| Two PRs touch the same fixture path | Reject the later PR, ask for rebase. |
| Agent files an over-broad PR (touches code, refactors) | Reject; require revert + redo within scope. |

## Resolved decisions

- No capture helper script — three direct `airs` calls per command, no wrapper.
- Wave 4/5 sub-issue split decided up front: redteam splits into scan-lifecycle / prompts / targets-config; model-security stays one issue.
- Parent epic uses `epic` label; no milestone.
