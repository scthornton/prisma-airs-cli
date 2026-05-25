# CLI Docs — Live Examples Implementation Plan

> **For agentic workers:** This is an orchestration plan executed from the `orchestrator` tmux window. It dispatches work to `agent-primary`, `agent-secondary`, and `documentation` tmux windows and reviews their PRs. Steps use checkbox (`- [ ]`) syntax. Spec: `docs/superpowers/specs/2026-05-25-cli-docs-examples-design.md`.

**Goal:** Replace every `!!! warning "Example needed"` placeholder on every CLI doc page with live, redacted input/output examples, shipped as 13 PRs under one parent epic.

**Architecture:** One parent epic issue → 13 native sub-issues. PREP issue (#1) blocks the rest; #2–#13 parallelize across three tmux agents in five dispatch waves. Each agent: branches, runs `airs` from `~/development/cdot65/prisma-airs-cli`, captures outputs, redacts, files bug admonitions for upstream/CLI/SDK defects, opens PR, pings orchestrator with `" " + <enter>`.

**Tech Stack:** GitHub CLI (`gh`), tmux, `airs` CLI v2.9.0, MkDocs Material admonitions.

---

## Phase 0 — Setup

### Task 0: Confirm environment

**Files:** none.

- [ ] **Step 1: Verify cwd and tools**

```bash
cd ~/development/cdot65/prisma-airs-cli && pwd
which airs && airs --version
gh auth status
tmux list-windows -t prisma-airs-cli
```

Expected: cwd `~/development/cdot65/prisma-airs-cli`; `airs 2.9.0`; gh authenticated; four windows present (`orchestrator`, `agent-primary`, `agent-secondary`, `documentation`, `source-code`).

- [ ] **Step 2: Verify `.env` loads credentials**

```bash
cd ~/development/cdot65/prisma-airs-cli && set -a && source .env && set +a && \
  echo "AI_SEC_API_KEY: $([ -n "$PANW_AI_SEC_API_KEY" ] && echo SET || echo UNSET)" && \
  echo "MGMT_CLIENT_ID: $([ -n "$PANW_MGMT_CLIENT_ID" ] && echo SET || echo UNSET)"
```

Expected: both `SET`. If `UNSET`, stop — credentials missing; check `.env.cdot65` / `.env.dus`.

- [ ] **Step 3: Verify no existing branch collisions**

```bash
cd ~/development/cdot65/prisma-airs-cli && git fetch --prune origin && \
  git branch -a | grep cdot65/docs-examples- || echo "no collisions"
```

Expected: `no collisions`.

---

## Phase 1 — Open the epic

### Task 1: Create parent epic issue

**Files:** none (GitHub API).

- [ ] **Step 1: Ensure `epic` label exists**

```bash
cd ~/development/cdot65/prisma-airs-cli && \
  gh label list | grep -q '^epic' || gh label create epic --color BFD4F2 --description "Tracks a multi-issue initiative"
```

- [ ] **Step 2: Create the epic body**

Write to `/tmp/epic-body.md`:

```markdown
## Goal
Replace every `!!! warning "Example needed"` placeholder on every CLI doc page with live, redacted input/output examples (pretty + JSON + YAML where applicable).

## Why
Project rule: every command must show a real input and a real output. Currently only 7 pages site-wide satisfy this. The 4 DLP pages flagged most recently are part of a wider gap.

## Scope
All `docs/cli/runtime/*`, `docs/cli/runtime/dlp/*`, `docs/cli/redteam/*`, and `docs/cli/model-security/*` pages that contain the `Example needed` placeholder.

## Approach
- Spec: `docs/superpowers/specs/2026-05-25-cli-docs-examples-design.md`
- Plan: `docs/superpowers/plans/2026-05-25-cli-docs-examples.md`
- 13 sub-issues, end-to-end per command group. PREP issue blocks the rest; others parallelize across 3 tmux agents.

## Sub-issues
(populated after creation; see linked sub-issues panel below)

## Definition of done
- All 13 sub-issue PRs merged.
- `grep -r "Example needed" docs/cli/` returns nothing (or only justified `!!! bug` placeholders).
- Every newly-discovered CLI/SDK/upstream defect filed as its own issue with `bug` or `upstream-bug` label.
```

- [ ] **Step 3: Create the epic issue**

```bash
cd ~/development/cdot65/prisma-airs-cli && \
  gh issue create \
    --title "Epic: Add live input/output examples to all CLI docs" \
    --label epic \
    --label documentation \
    --body-file /tmp/epic-body.md
```

Capture the returned issue number → call it `$EPIC` from here on.

```bash
EPIC=<number>; echo "EPIC=$EPIC"
```

### Task 2: Create the 13 sub-issues

**Files:** none (GitHub API).

- [ ] **Step 1: Create issue bodies**

Write the body template once to `/tmp/sub-body-template.md`:

```markdown
Part of epic #__EPIC__.

## Pages
__PAGES__

## Workflow (per spec)
1. `cd ~/development/cdot65/prisma-airs-cli` (required for `.env` auto-load).
2. Branch `cdot65/docs-examples-__SLUG__` from `main`.
3. Gap audit on listed pages.
4. Author fixtures under `docs/cli/examples/__AREA__/` for write ops needing `--body-file`.
5. Live capture: pretty + JSON + YAML for list/get; JSON only for create/update/replace/patch/delete.
6. Redact: tenant IDs → `<tenant-id>`, UUIDs → `00000000-0000-0000-0000-000000000001`, emails → `user@example.com`, customer app names → `example-app`.
7. On upstream/CLI/SDK defects: file a tracking issue (label `bug` or `upstream-bug`); add `!!! bug` admonition on doc page with link.
8. Add `.changeset/<slug>.md` as `patch` with user-facing description.
9. Open PR titled `docs(__SLUG__): add live input/output examples`; post summary as PR comment.
10. Notify orchestrator (see spec dispatch template).

## Format contract
See spec for exact example block layout. List/get → 3 formats; write ops → JSON only.

## Definition of done
- All `Example needed` warnings on listed pages replaced (or `!!! bug` with tracking link).
- Changeset present.
- PR open, summary commented, orchestrator pinged.
```

- [ ] **Step 2: Create each sub-issue**

Run the following one at a time so issue numbers are captured in order:

```bash
cd ~/development/cdot65/prisma-airs-cli

# helper
mk_sub() {
  local title="$1"; local slug="$2"; local pages="$3"; local area="$4"
  local body="$(sed -e "s|__EPIC__|$EPIC|" -e "s|__SLUG__|$slug|" -e "s|__AREA__|$area|" -e "s|__PAGES__|$pages|" /tmp/sub-body-template.md)"
  gh issue create --title "$title" --label documentation --body "$body" | tail -1
}

I1=$(mk_sub "docs(prep): example template + fixture conventions" "prep" "(cross-cutting prep)" "n/a")
I2=$(mk_sub "docs(dlp/dictionaries): add live input/output examples" "dlp-dictionaries" "docs/cli/runtime/dlp/dictionaries.md" "dlp/dictionaries")
I3=$(mk_sub "docs(dlp/patterns): add live input/output examples" "dlp-patterns" "docs/cli/runtime/dlp/patterns.md" "dlp/patterns")
I4=$(mk_sub "docs(dlp/profiles): add live input/output examples" "dlp-profiles" "docs/cli/runtime/dlp/profiles.md" "dlp/profiles")
I5=$(mk_sub "docs(dlp/filtering-profiles): add live input/output examples" "dlp-filtering-profiles" "docs/cli/runtime/dlp/filtering-profiles.md" "dlp/filtering-profiles")
I6=$(mk_sub "docs(runtime/profiles): add live input/output examples" "runtime-profiles" "docs/cli/runtime/profiles.md" "runtime/profiles")
I7=$(mk_sub "docs(runtime/topics): add live input/output examples" "runtime-topics" "docs/cli/runtime/topics.md" "runtime/topics")
I8=$(mk_sub "docs(runtime/api-keys + customer-apps): add live input/output examples" "runtime-api-customer" "docs/cli/runtime/api-keys.md, docs/cli/runtime/customer-apps.md" "runtime")
I9=$(mk_sub "docs(runtime/{deployment-profiles,dlp-profiles,scan-logs,resume-poll}): add live input/output examples" "runtime-misc" "docs/cli/runtime/deployment-profiles.md, dlp-profiles.md, scan-logs.md, resume-poll.md" "runtime")
I10=$(mk_sub "docs(redteam/scan-lifecycle): add live input/output examples" "redteam-scan-lifecycle" "docs/cli/redteam/{abort,status,report}.md" "redteam")
I11=$(mk_sub "docs(redteam/prompts): add live input/output examples" "redteam-prompts" "docs/cli/redteam/{prompt-sets,prompts}.md" "redteam")
I12=$(mk_sub "docs(redteam/targets-config): add live input/output examples" "redteam-targets" "docs/cli/redteam/{targets,devices,eula,registry-credentials,instances,properties}.md" "redteam")
I13=$(mk_sub "docs(model-security): add live input/output examples" "model-security" "docs/cli/model-security/{groups,rules,rule-instances,scans,labels,pypi-auth}.md" "model-security")

echo "PREP=$I1"
echo "Sub: $I2 $I3 $I4 $I5 $I6 $I7 $I8 $I9 $I10 $I11 $I12 $I13"
```

The trailing `tail -1` returns the issue URL; extract the number with `${url##*/}` if needed. Save these numbers — they parameterize every subsequent dispatch.

- [ ] **Step 3: Attach as native sub-issues**

GitHub's native sub-issue API:

```bash
# Get parent node-id
PARENT_NODE=$(gh api repos/cdot65/prisma-airs-cli/issues/$EPIC --jq .node_id)

for ISSUE in $I1 $I2 $I3 $I4 $I5 $I6 $I7 $I8 $I9 $I10 $I11 $I12 $I13; do
  NUM="${ISSUE##*/}"
  SUB_ID=$(gh api repos/cdot65/prisma-airs-cli/issues/$NUM --jq .id)
  gh api -X POST repos/cdot65/prisma-airs-cli/issues/$EPIC/sub_issues \
    -f sub_issue_id="$SUB_ID" >/dev/null && echo "linked $NUM"
done
```

Expected: 13 `linked <N>` lines. Verify on the epic issue page that the sub-issues panel shows all 13.

---

## Phase 2 — Wave 1: PREP (sequential)

### Task 3: Dispatch PREP issue to `agent-primary`

**Files:** none.

- [ ] **Step 1: Build the dispatch message**

Save to `/tmp/dispatch-prep.txt`:

```
You are working issue #__I1__ — docs(prep): example template + fixture conventions. Part of epic #__EPIC__.

Read first:
  - Repo: ~/development/cdot65/prisma-airs-cli
  - Spec: docs/superpowers/specs/2026-05-25-cli-docs-examples-design.md
  - Plan: docs/superpowers/plans/2026-05-25-cli-docs-examples.md

Task:
  1. cd ~/development/cdot65/prisma-airs-cli  (REQUIRED — .env auto-loads here)
  2. git checkout -b cdot65/docs-examples-prep
  3. Author the example-block snippet template (the exact format from the spec) and place it at docs/cli/examples/README.md. Include the bug-admonition variant.
  4. Create docs/cli/examples/ subdirectories: dlp/{dictionaries,patterns,profiles,filtering-profiles}/, runtime/, redteam/, model-security/, each with a .gitkeep.
  5. Add docs/cli/examples/REDACTION.md documenting the redaction rules verbatim from the spec.
  6. Add .changeset/docs-prep-example-template.md (patch): "Adds the live-examples template, redaction rules, and fixture directory layout used by all CLI docs."
  7. Open PR titled "docs(prep): example template + fixture conventions" against main; body links epic #__EPIC__ and issue #__I1__.
  8. Post the same summary as a PR comment on your PR.
  9. Then run:
       tmux send-keys -t prisma-airs-cli:orchestrator "Issue #__I1__ done — PR <url>. PREP template + redaction doc + dir layout shipped." Enter
       tmux send-keys -t prisma-airs-cli:orchestrator " " Enter

Do NOT touch any file outside docs/cli/examples/ and .changeset/.
```

Substitute `__I1__` and `__EPIC__` with the real numbers.

- [ ] **Step 2: Send to agent-primary**

```bash
DISPATCH=$(cat /tmp/dispatch-prep.txt | sed "s|__I1__|$I1|g; s|__EPIC__|$EPIC|g")
tmux send-keys -t prisma-airs-cli:agent-primary "$DISPATCH" Enter
```

- [ ] **Step 3: Wait for ping**

When `agent-primary` finishes, it will print a summary line into `orchestrator` then `" " + Enter`, which wakes this session. Do not poll.

### Task 4: Review PREP PR

**Files:** none.

- [ ] **Step 1: Verify scope**

```bash
PR_URL=<from-ping>
gh pr view $PR_URL
gh pr diff $PR_URL
```

Checklist:
- Files changed: only `docs/cli/examples/**` and `.changeset/**`.
- `docs/cli/examples/README.md` contains the exact example-block format from the spec.
- `docs/cli/examples/REDACTION.md` matches the spec's redaction rules.
- Directory layout present with `.gitkeep`s.
- Changeset present.

- [ ] **Step 2: Merge or bounce**

If aligned:

```bash
gh pr merge $PR_URL --squash --delete-branch
gh issue close $I1
```

If misaligned:

```bash
tmux send-keys -t prisma-airs-cli:agent-primary "Revise PR $PR_URL: <specific gaps>. Push to same branch and re-ping when done." Enter
```

Wait for re-ping; loop until merged.

---

## Phase 3 — Wave 2: three parallel issues

### Task 5: Dispatch issues #2, #3, #4 in parallel

**Files:** none.

- [ ] **Step 1: Build the three dispatch messages**

Generic template — save to `/tmp/dispatch-sub.txt`:

```
You are working issue #__N__ — __TITLE__. Part of epic #__EPIC__.

Read first:
  - Repo: ~/development/cdot65/prisma-airs-cli
  - Spec: docs/superpowers/specs/2026-05-25-cli-docs-examples-design.md
  - Plan: docs/superpowers/plans/2026-05-25-cli-docs-examples.md
  - Template (from merged PREP): docs/cli/examples/README.md
  - Redaction rules: docs/cli/examples/REDACTION.md

Task:
  1. cd ~/development/cdot65/prisma-airs-cli   (REQUIRED — .env auto-loads here)
  2. git fetch origin && git checkout -b cdot65/docs-examples-__SLUG__ origin/main
  3. Gap audit on: __PAGES__
  4. For any write op needing --body-file, author a minimal valid fixture under docs/cli/examples/__AREA__/<command>.json
  5. Live capture per command (run from this cwd so .env loads):
       - list/get: airs <cmd> ... ; airs <cmd> ... --output json ; airs <cmd> ... --output yaml
       - create/replace/patch/delete: JSON only
  6. Redact per docs/cli/examples/REDACTION.md
  7. If a command returns an upstream/CLI/SDK error:
       - upstream → file issue in cdot65/prisma-airs-cli labeled `upstream-bug` (search existing first; #80 already covers DLP patterns/profiles get 400)
       - CLI → file issue in cdot65/prisma-airs-cli labeled `bug`
       - SDK → file issue in cdot65/prisma-airs-sdk labeled `bug`
     Replace the placeholder with the `!!! bug` admonition + tracking-issue link + workaround if any.
  8. Replace each `!!! warning "Example needed"` block per the format contract.
  9. Add .changeset/docs-__SLUG__-examples.md (patch) describing what got examples.
  10. gh pr create --title "docs(__SLUG__): add live input/output examples" --body "Closes #__N__. Part of epic #__EPIC__."
  11. Post the same summary as a PR comment on your PR.
  12. Then run:
        tmux send-keys -t prisma-airs-cli:orchestrator "Issue #__N__ done — PR <url>. <one-line summary>." Enter
        tmux send-keys -t prisma-airs-cli:orchestrator " " Enter

Do NOT touch any file outside: the listed doc pages, docs/cli/examples/__AREA__/, and .changeset/.
```

- [ ] **Step 2: Dispatch issue #2 to agent-primary**

```bash
T="docs(dlp/dictionaries): add live input/output examples"; SLUG="dlp-dictionaries"; AREA="dlp/dictionaries"; PAGES="docs/cli/runtime/dlp/dictionaries.md"
DISPATCH=$(cat /tmp/dispatch-sub.txt | sed "s|__N__|$I2|g; s|__EPIC__|$EPIC|g; s|__TITLE__|$T|g; s|__SLUG__|$SLUG|g; s|__AREA__|$AREA|g; s|__PAGES__|$PAGES|g")
tmux send-keys -t prisma-airs-cli:agent-primary "$DISPATCH" Enter
```

- [ ] **Step 3: Dispatch issue #3 to agent-secondary**

```bash
T="docs(dlp/patterns): add live input/output examples"; SLUG="dlp-patterns"; AREA="dlp/patterns"; PAGES="docs/cli/runtime/dlp/patterns.md"
DISPATCH=$(cat /tmp/dispatch-sub.txt | sed "s|__N__|$I3|g; s|__EPIC__|$EPIC|g; s|__TITLE__|$T|g; s|__SLUG__|$SLUG|g; s|__AREA__|$AREA|g; s|__PAGES__|$PAGES|g")
tmux send-keys -t prisma-airs-cli:agent-secondary "$DISPATCH" Enter
```

- [ ] **Step 4: Dispatch issue #4 to documentation**

```bash
T="docs(dlp/profiles): add live input/output examples"; SLUG="dlp-profiles"; AREA="dlp/profiles"; PAGES="docs/cli/runtime/dlp/profiles.md"
DISPATCH=$(cat /tmp/dispatch-sub.txt | sed "s|__N__|$I4|g; s|__EPIC__|$EPIC|g; s|__TITLE__|$T|g; s|__SLUG__|$SLUG|g; s|__AREA__|$AREA|g; s|__PAGES__|$PAGES|g")
tmux send-keys -t prisma-airs-cli:documentation "$DISPATCH" Enter
```

### Task 6: Review each Wave 2 PR as it pings back

**Files:** none.

For each ping (they will arrive in arbitrary order), do:

- [ ] **Step 1: Verify the PR**

```bash
PR_URL=<from-ping>
gh pr view $PR_URL
gh pr diff $PR_URL
```

Checklist (per PR):
- Only files under the assigned doc page(s), `docs/cli/examples/<area>/`, and `.changeset/` changed.
- All `Example needed` placeholders on the assigned page removed (or replaced with `!!! bug` + tracking link).
- For list/get commands: pretty + JSON + YAML present. For write ops: JSON present.
- No real tenant IDs, real UUIDs, real customer emails, real keyword content.
- Changeset present and accurate.
- CI green (`gh pr checks $PR_URL`).

- [ ] **Step 2: Merge or bounce**

Aligned:

```bash
gh pr merge $PR_URL --squash --delete-branch
gh issue close <issue-number>
```

Misaligned — tell the SAME window that originally got the issue:

```bash
WINDOW=<agent-primary|agent-secondary|documentation>
tmux send-keys -t prisma-airs-cli:$WINDOW "Revise PR $PR_URL: <specific gaps>. Push to same branch and re-ping." Enter
```

- [ ] **Step 3: Dispatch the next queued issue to the now-free window**

Per Wave-3 assignment below.

---

## Phase 4 — Waves 3, 4, 5: dispatch as windows free up

### Task 7: Issue queue and assignment policy

**Files:** none.

The remaining queue (in priority order):

```
WAVE 3:  $I5 dlp-filtering-profiles, $I6 runtime-profiles, $I7 runtime-topics
WAVE 4:  $I8 runtime-api-customer,    $I9 runtime-misc
WAVE 5:  $I10 redteam-scan-lifecycle, $I11 redteam-prompts, $I12 redteam-targets, $I13 model-security
```

Assignment rule: when any agent window's PR merges (Task 6), pop the next queue entry and dispatch to that same window using the same `/tmp/dispatch-sub.txt` template (Task 5, Step 1).

- [ ] **Step 1: For each pop, build the dispatch and send**

Pattern (substitute values from the queue):

```bash
N=$I5; T="docs(dlp/filtering-profiles): add live input/output examples"; SLUG="dlp-filtering-profiles"; AREA="dlp/filtering-profiles"; PAGES="docs/cli/runtime/dlp/filtering-profiles.md"
DISPATCH=$(cat /tmp/dispatch-sub.txt | sed "s|__N__|$N|g; s|__EPIC__|$EPIC|g; s|__TITLE__|$T|g; s|__SLUG__|$SLUG|g; s|__AREA__|$AREA|g; s|__PAGES__|$PAGES|g")
tmux send-keys -t prisma-airs-cli:<free-window> "$DISPATCH" Enter
```

Repeat for each issue. The mapping of `T`/`SLUG`/`AREA`/`PAGES` matches the values in Task 2 Step 2.

- [ ] **Step 2: Continue Task 6 review cycle for every PR**

Same checklist, same merge/bounce decision tree.

- [ ] **Step 3: Stop when all 13 sub-issues closed**

```bash
gh issue list --label epic --state open
gh api repos/cdot65/prisma-airs-cli/issues/$EPIC/sub_issues --jq '.[] | "\(.number) \(.state) \(.title)"'
```

All sub-issues should be `closed`.

---

## Phase 5 — Close out

### Task 8: Verify zero gaps remain

**Files:** none.

- [ ] **Step 1: Grep for surviving placeholders**

```bash
cd ~/development/cdot65/prisma-airs-cli && \
  grep -rn 'Example needed' docs/cli/ || echo "no gaps"
```

Expected: `no gaps`. If any survive, they must be inside a `!!! bug` block; otherwise reopen the relevant sub-issue.

- [ ] **Step 2: Tally any bug issues filed during this epic**

```bash
gh issue list --label upstream-bug --search "created:>=2026-05-25"
gh issue list --label bug --search "created:>=2026-05-25"
```

Note these in the epic close comment.

### Task 9: Close the epic

**Files:** none.

- [ ] **Step 1: Comment summary on epic and close**

```bash
gh issue comment $EPIC --body "All 13 sub-issues merged. Doc placeholders cleared. Bug tracking issues filed: <list>. Closing."
gh issue close $EPIC
```

- [ ] **Step 2: Drop a note in `~/Documents/ccr/Software/Projects/prisma-airs-cli/`**

Update `README.md` in the vault folder to point at the epic and the merged PR list. (One-line entry per PR, like the existing handoff notes.)

---

## Failure-mode quick reference

| Symptom | Response |
|---|---|
| Agent silent >20 min after dispatch | `tmux capture-pane -t prisma-airs-cli:<window> -p \| tail -30` — if blocked on creds/path, re-dispatch with fix; if hung, kill (`tmux send-keys -t <window> C-c`) and reassign. |
| CI red on PR | `gh pr checks <url>` → bounce to agent with link to failing run. |
| Two PRs touch same fixture file | Reject later one, ask for rebase. |
| Agent over-scopes (touches code) | Reject, require `git restore` + redo within scope. |
| Upstream/CLI/SDK bug discovered with no tracking issue | Agent must file one before posting the `!!! bug` admonition. Reject PR if missing. |
