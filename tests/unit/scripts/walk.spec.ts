import { Command } from 'commander';
import { describe, expect, it } from 'vitest';
import { collectPages, leafCommands, walkProgram } from '../../../scripts/cli-docs/walk.js';

function fixture(): Command {
  const program = new Command().name('airs');

  const runtime = program.command('runtime').description('Runtime');
  runtime
    .command('scan')
    .description('Scan a prompt')
    .argument('<prompt>', 'the prompt')
    .requiredOption('--profile <name>', 'profile name')
    .option('--response <text>', 'response text');

  const profiles = runtime.command('profiles').description('Manage profiles');
  profiles.command('list').description('List profiles').option('--limit <n>', 'limit', '100');
  profiles.command('get').description('Get a profile').argument('<nameOrId>', 'name or id');

  const dlp = runtime.command('dlp').description('DLP');
  const patterns = dlp.command('patterns').description('Patterns');
  patterns.command('list').description('List patterns');
  patterns.command('create').description('Create a pattern');

  return program;
}

describe('walkProgram', () => {
  it('builds a nested node tree skipping the help command', () => {
    const nodes = walkProgram(fixture());
    expect(nodes.map((n) => n.name)).toEqual(['runtime']);
    const runtime = nodes[0];
    expect(runtime.isLeaf).toBe(false);
    const scan = runtime.subcommands.find((n) => n.name === 'scan')!;
    expect(scan.isLeaf).toBe(true);
    expect(scan.path).toBe('runtime scan');
    expect(scan.usage).toBe('airs runtime scan [options] <prompt>');
    expect(scan.options.find((o) => o.flags === '--profile <name>')?.required).toBe(true);
    expect(scan.options.find((o) => o.flags === '--response <text>')?.required).toBe(false);
    expect(scan.args[0]).toMatchObject({ name: 'prompt', required: true, variadic: false });
  });
});

describe('leafCommands', () => {
  it('flattens to only leaf commands', () => {
    const leaves = leafCommands(walkProgram(fixture()))
      .map((n) => n.path)
      .sort();
    expect(leaves).toEqual(
      [
        'runtime dlp patterns create',
        'runtime dlp patterns list',
        'runtime profiles get',
        'runtime profiles list',
        'runtime scan',
      ].sort(),
    );
  });
});

describe('collectPages', () => {
  it('makes a page per leaf, per group-of-leaves, and recurses nested groups', () => {
    const pages = collectPages(walkProgram(fixture()));
    const slugs = pages.map((p) => p.slug).sort();
    expect(slugs).toEqual(['runtime/dlp/patterns', 'runtime/profiles', 'runtime/scan'].sort());

    const profiles = pages.find((p) => p.slug === 'runtime/profiles')!;
    expect(profiles.commands.map((c) => c.name).sort()).toEqual(['get', 'list']);

    const scan = pages.find((p) => p.slug === 'runtime/scan')!;
    expect(scan.commands.map((c) => c.name)).toEqual(['scan']);
  });
});
