# Developer Documentation Overhaul — Design

**Date:** 2026-05-24
**Status:** Approved (design); pending spec review
**Branch:** `cdot65/docs-overhaul`

## Problem

The docs site (https://cdot65.github.io/prisma-airs-cli/) is built with MkDocs Material — a good framework — but the content and build process fall short of the target audience and goals:

- **Audience:** the primary reader is a *frequent-success operator*, not an active developer. They need conceptual "how it works", "how to get the most out of each category", and **every CLI command captured with input AND output examples**. A *separate developer section* serves contributors and library consumers.
- **Today's gaps:**
  - The CLI reference is a single hand-written ~1,150-line page. Output examples exist for only ~20% of commands; the requirement is *every* command with input + output.
  - Hand-maintained reference drifts as the CLI grows (~80+ leaf commands across 3 groups).
  - IA mixes developer-only pages (`full-cli-sweep`, `smoke-tests`) into *Getting Started*; no single Developers home.
  - The package publishes a typed npm library (`@cdot65/prisma-airs-cli`) but the library API is undocumented.
  - Internal planning docs (`docs/superpowers/`) sit in the published source tree; leftover `daystrom-logo.*` assets and committed `.DS_Store`.

## Goals

1. Every CLI command is documented with synopsis, options, and **input + output examples**, guaranteed by generation + CI checks.
2. Operator-facing conceptual + workflow content per functional category.
3. A dedicated Developers section: library usage guide + generated API reference + architecture + contributing/testing.
4. A build pipeline that keeps reference docs in sync with the code (no drift).
5. Preserve existing URLs across the restructure (no broken links).

## Non-Goals

- Switching documentation frameworks (MkDocs Material stays).
- Capturing live command output by calling real AIRS/SCM APIs in CI (rejected — needs credentials; output examples are curated instead).
- Rewriting the CLI itself.

## Approach (selected)

**Generate + restructure in place** on MkDocs Material:
- Auto-generate the CLI reference from the Commander program.
- Auto-generate the library API reference with TypeDoc (markdown).
- Re-cut the IA into three audience tabs (Guides / CLI Reference / Developers) plus Home and About.
- Curated input+output examples stored as data, merged into generated pages.
- CI guards for drift and example coverage.

Rejected alternatives: restructure-only (drift recurs); framework switch to Docusaurus/Starlight (large migration, more JS maintenance, no real benefit).

## Resolved decisions (from open questions)

1. **Generated CLI pages are committed** to the repo (reviewable diffs; enables drift check).
2. **Example coverage** is enforced by a check that starts **warn-only** with a burn-down allowlist (`docs/cli/examples/.missing-allowlist`), and is flipped to **hard CI fail** once coverage reaches 100% (allowlist emptied).
3. **Per command, the default `pretty` output is the required example.** Additional `--output json` (or other) examples are optional, added where they materially help (e.g. list/automation-oriented commands).
4. **TypeDoc documents all exports** from `src/index.ts` (that file is already the curated public surface).
5. **Old URLs are preserved** via `mkdocs-redirects`.
6. **This engagement produces the spec + implementation plan.** The build is executed in a following phase (executing-plans).

## Architecture

### Build pipeline

```
pnpm docs:gen     # scripts/gen-cli-docs.ts  -> docs/cli/**           (Commander -> markdown)
pnpm docs:api     # typedoc                  -> docs/developers/api/** (types -> markdown)
pnpm docs:build   # docs:gen && docs:api && mkdocs build
pnpm docs:serve   # docs:gen && docs:api && mkdocs serve
pnpm docs:check   # regenerate to temp, diff vs committed (drift) + example-coverage check
```

- CI deploy workflow (`mkdocs-deploy.yml`) runs `pnpm docs:build` then deploys.
- CI PR check (new job, or added to `ci.yml`) runs `pnpm docs:check`.
- Docs Python deps pinned in `docs/requirements.txt` (mkdocs-material, mkdocs-redirects, mkdocs-awesome-pages-plugin or mkdocs-literate-nav, pymdown-extensions).

### CLI reference generator (`scripts/gen-cli-docs.ts`)

- Imports/constructs the Commander program from `src/cli/` (refactor `src/cli/index.ts` if needed to export the configured `program` without side effects / without calling `.parse()`).
- Recursively walks the command tree. For each command group, emits one markdown page.
- Per leaf command it renders:
  - Heading + description
  - Synopsis (`airs <path> [options] <args>`)
  - Arguments list
  - Options table: flag · required · default · description
  - **Examples** and **Example output** blocks merged from the curated sidecar
  - Optionally the raw `--help` (collapsible) as a backstop
- Page granularity = one page per command group (mirrors `--help` groupings), e.g.:
  - `docs/cli/runtime/{scan,bulk-scan,resume-poll,dlp-gen,profiles,topics,api-keys,customer-apps,deployment-profiles,dlp-profiles,scan-logs}.md`
  - `docs/cli/runtime/dlp/{filtering-profiles,patterns,profiles,dictionaries}.md`
  - `docs/cli/redteam/{scan,status,report,list,abort,categories,targets,eula,instances,devices,registry-credentials,prompt-sets,prompts,properties}.md`
  - `docs/cli/model-security/{groups,install,labels,pypi-auth,rule-instances,rules,scans}.md`
- A generated `docs/cli/index.md` lists groups; nav for the subtree is provided by the awesome-pages/literate-nav plugin (no hand-listing).

### Curated example sidecars

- Location: `docs/cli/examples/<group>.yaml`.
- Schema (per command path):
  ```yaml
  "runtime scan":
    examples:
      - input: airs runtime scan --profile my-profile "How do I build a weapon?"
        output: |
          Prisma AIRS Runtime Scan
          ...
        note: Blocked prompt
  ```
- The generator merges these into the matching command section. Missing example → placeholder admonition + recorded by the coverage check.
- **Migration:** harvest the output examples already present in `docs/reference/cli-commands.md` into these YAML files before deleting that page.

### Example-coverage check

- Enumerate every leaf command from the generator's walk.
- Compare against sidecar coverage. Commands lacking an example are reported.
- Warn-only while `docs/cli/examples/.missing-allowlist` is non-empty; flip to hard fail when emptied.

### TypeDoc API reference

- Add dev deps: `typedoc`, `typedoc-plugin-markdown`.
- Config (`typedoc.json`): entry `src/index.ts`, output `docs/developers/api/`, markdown, no breadcrumbs/sources noise.
- Generated subtree nav via the same nav plugin.

## Information Architecture (3 audience tabs)

```
Home               index.md — hero + capability cards (links retargeted)

Guides             getting-started/{installation,configuration,quick-start}.md
                   concepts/how-prisma-airs-works.md            (new)
                   runtime/overview.md          (concept + get-the-most-out-of-it + workflows)
                   runtime/guardrails/*.md
                   runtime/profile-audits.md
                   runtime/dlp/*.md             (concept-level; commands live in CLI Reference)
                   redteam/*.md                 (concept + workflows)
                   model-security/*.md          (concept + workflows)
                   dlp-detection/*.md
                   backup/overview.md
                   reference/configuration.md, reference/environment-variables.md
                                                (operator config lookup)
                   (each guide cross-links into CLI Reference for exact flags)

CLI Reference      cli/index.md + generated per-group pages (every command, input+output)

Developers         developers/library/{getting-started,recipes}.md   (new)
                   developers/api/**                                  (TypeDoc-generated)
                   architecture/{overview,core-loop,design-decisions}.md
                   providers/*.md                                     (LLM provider setup; dev-leaning)
                   development/{contributing,testing,local-setup,releasing}.md
                   development/{full-cli-sweep,smoke-tests}.md        (moved here from Getting Started)
                   reference/{airs-constraints,agent-instructions}.md (advanced/dev reference)

About              about/{release-notes,license}.md
```

- `navigation.tabs` + `navigation.sections` + `navigation.indexes` + `toc.follow`; drop `navigation.expand`.
- `exclude_docs` excludes `superpowers/**` from the published site.
- Remove `docs/images/daystrom-logo.*` and committed `.DS_Store`.

### Redirect map (old → new), via mkdocs-redirects

- `reference/cli-commands.md` → `cli/index.md` (plus anchor-level redirects to the closest group page where feasible)
- `development/full-cli-sweep.md`, `development/smoke-tests.md` stay at same path (now under Developers) — no redirect needed
- `reference/configuration.md`, `reference/environment-variables.md` (now under Guides) and `reference/airs-constraints.md`, `reference/agent-instructions.md` (now under Developers) keep their file paths — only nav placement changes, so no redirects needed
- Any guide page that moves keeps a redirect entry; pages staying at the same path need none

## Components & boundaries

| Unit | Responsibility | Depends on |
|------|----------------|-----------|
| `scripts/gen-cli-docs.ts` | Walk Commander tree → emit per-group markdown, merge examples | configured `program`, sidecar YAML |
| `scripts/check-cli-docs.ts` | Drift diff + example-coverage report | generator output, committed docs, allowlist |
| `docs/cli/examples/*.yaml` | Curated input+output examples (data, not code) | — |
| `typedoc.json` + `docs:api` | Generate API markdown from public exports | `src/index.ts` |
| `mkdocs.yml` | IA, theme, plugins, redirects, exclude_docs | generated subtrees, nav plugin |
| Guide pages (`docs/**`) | Operator concepts + workflows | cross-link to CLI Reference |

## Testing / verification

- `pnpm docs:check` passes (no drift; coverage within allowlist).
- `pnpm docs:build` succeeds with `--strict` (no broken internal links, no missing nav references).
- Manual spot-check: serve locally, confirm 3 tabs render, a sampled command page shows synopsis + options + input + output, TypeDoc API browsable, old URLs redirect.
- CI deploy publishes the generated site.

## Acceptance criteria

1. Every leaf CLI command appears in CLI Reference with synopsis, options, and at least one input+output example (or is on the burn-down allowlist).
2. Three audience tabs present; operator can learn a category and jump to exact command syntax.
3. Developers tab includes a runnable library quick-start and a generated API reference.
4. `mkdocs build --strict` is clean; old URLs redirect.
5. CI regenerates + checks reference on PRs; deploy builds from generators.
6. Internal `superpowers/` docs and stale assets no longer ship in the published site.

## Risks / mitigations

- **Commander introspection limits** (custom help, dynamic options): generator falls back to embedding raw `--help` for any command it can't fully model.
- **Curation volume (~80+ commands):** mitigated by harvesting existing outputs from `cli-commands.md`; coverage gap tracked via allowlist, not a blocker to ship.
- **TypeDoc noise** from broad exports: tune `typedoc.json` (exclude internals, group by category) to keep the API reference readable.
- **URL churn:** redirects + `--strict` link checking.

## Out of scope / future

- Live-output capture harness against a real tenant (could later replace curated outputs for read-only commands).
- Versioned docs (mike) if multiple released versions need parallel docs.
