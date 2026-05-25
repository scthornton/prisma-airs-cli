# runtime dlp-gen

## runtime dlp-gen

Generate clean + dirty DLP test files (synthetic sensitive data) across PDF/PNG/JPEG/SVG/DOCX

```text
airs runtime dlp-gen [options]
```

### Options

| Flag | Required | Default | Description |
|------|:--------:|---------|-------------|
| `--types <list>` | No | `all` | Comma list: pdf,png,jpeg,svg,docx (or all) |
| `--count <n>` | No | `1` | Clean files per type |
| `--out <dir>` | No | `./temp` | Output base directory |
| `--techniques <list>` | No | `all` | all or comma list of technique ids |
| `--seed <n>` | No | — | Seed for reproducible payloads |
| `--output <format>` | No | `pretty` | Summary format: pretty or json |

### Examples

!!! warning "Example needed"
    No curated input/output example for this command yet.
