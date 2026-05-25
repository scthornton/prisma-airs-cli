import { describe, expect, it } from 'vitest';
import type { CommandNode, ExampleMap, PageNode } from '../../../scripts/cli-docs/model.js';
import { renderGroupPage, renderIndex } from '../../../scripts/cli-docs/render.js';

const scan: CommandNode = {
  path: 'runtime scan',
  name: 'scan',
  description: 'Scan a prompt',
  usage: 'airs runtime scan [options] <prompt>',
  args: [{ name: 'prompt', required: true, variadic: false, description: 'the prompt' }],
  options: [
    { flags: '--profile <name>', description: 'profile name', required: true },
    {
      flags: '--response <text>',
      description: 'response text',
      required: false,
      defaultValue: undefined,
    },
  ],
  subcommands: [],
  isLeaf: true,
};

const examples: ExampleMap = {
  'runtime scan': [
    { input: 'airs runtime scan --profile p "hi"', output: 'Action: ALLOW', note: 'Allowed' },
  ],
};

describe('renderGroupPage', () => {
  const page: PageNode = {
    slug: 'runtime/scan',
    title: 'runtime scan',
    groupPath: 'runtime scan',
    commands: [scan],
  };
  const md = renderGroupPage(page, examples);

  it('renders title, synopsis, options table and the example', () => {
    expect(md).toContain('# runtime scan');
    expect(md).toContain('airs runtime scan [options] <prompt>');
    expect(md).toContain('| `--profile <name>` | Yes |');
    expect(md).toContain('| `--response <text>` | No |');
    expect(md).toContain('airs runtime scan --profile p "hi"');
    expect(md).toContain('Action: ALLOW');
  });

  it('emits a warning admonition when no example exists', () => {
    const md2 = renderGroupPage(page, {});
    expect(md2).toContain('!!! warning "Example needed"');
  });
});

describe('renderIndex', () => {
  it('links each page by slug', () => {
    const idx = renderIndex([
      { slug: 'runtime/scan', title: 'runtime scan', groupPath: 'runtime scan', commands: [scan] },
    ]);
    expect(idx).toContain('# CLI Reference');
    expect(idx).toContain('runtime/scan.md');
  });
});
