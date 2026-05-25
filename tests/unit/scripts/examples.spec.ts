import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { loadExamples, missingExamples } from '../../../scripts/cli-docs/examples.js';

function tmpDir(files: Record<string, string>): string {
  const dir = mkdtempSync(join(tmpdir(), 'examples-'));
  for (const [name, body] of Object.entries(files)) writeFileSync(join(dir, name), body);
  return dir;
}

describe('loadExamples', () => {
  it('merges keyed example arrays from all yaml files', () => {
    const dir = tmpDir({
      'runtime.yaml': [
        '"runtime scan":',
        '  examples:',
        '    - input: airs runtime scan --profile p "hi"',
        '      output: |',
        '        Action: ALLOW',
        '      note: Allowed',
      ].join('\n'),
    });
    const map = loadExamples(dir);
    expect(map['runtime scan']).toHaveLength(1);
    expect(map['runtime scan'][0].input).toContain('runtime scan');
    expect(map['runtime scan'][0].output).toContain('ALLOW');
    expect(map['runtime scan'][0].note).toBe('Allowed');
  });

  it('returns {} when the directory does not exist', () => {
    expect(loadExamples(join(tmpdir(), 'does-not-exist-xyz'))).toEqual({});
  });
});

describe('missingExamples', () => {
  it('lists leaf paths that have no example', () => {
    const map = { 'runtime scan': [{ input: 'x' }] };
    expect(missingExamples(['runtime scan', 'runtime profiles list'], map)).toEqual([
      'runtime profiles list',
    ]);
  });
});
