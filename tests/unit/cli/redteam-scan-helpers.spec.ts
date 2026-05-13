import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { parseAttackGoals, parsePositiveInt } from '../../../src/cli/commands/redteam.js';

describe('parseAttackGoals', () => {
  let tmpDir: string;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'goals-'));
  });

  afterEach(() => {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  it('parses inline JSON array', () => {
    expect(parseAttackGoals('["a","b"]')).toEqual(['a', 'b']);
  });

  it('parses inline JSON with leading whitespace', () => {
    expect(parseAttackGoals('   ["a"]')).toEqual(['a']);
  });

  it('reads goals from file when input is a path', () => {
    const file = path.join(tmpDir, 'goals.json');
    fs.writeFileSync(file, '["x","y","z"]');
    expect(parseAttackGoals(file)).toEqual(['x', 'y', 'z']);
  });

  it('throws on invalid JSON', () => {
    expect(() => parseAttackGoals('[not json')).toThrow(/--goals: invalid JSON/);
  });

  it('throws when array contains non-strings', () => {
    expect(() => parseAttackGoals('["a", 42]')).toThrow(/array of non-empty strings/);
  });

  it('throws when array contains empty string', () => {
    expect(() => parseAttackGoals('["a", ""]')).toThrow(/array of non-empty strings/);
  });
});

describe('parsePositiveInt', () => {
  it('parses a positive integer', () => {
    expect(parsePositiveInt('10', '--depth')).toBe(10);
  });

  it('throws on non-numeric input', () => {
    expect(() => parsePositiveInt('abc', '--depth')).toThrow(
      /--depth: expected a positive integer, got "abc"/,
    );
  });

  it('throws on zero', () => {
    expect(() => parsePositiveInt('0', '--breadth')).toThrow(
      /--breadth: expected a positive integer, got "0"/,
    );
  });

  it('throws on negative', () => {
    expect(() => parsePositiveInt('-5', '--depth')).toThrow(
      /--depth: expected a positive integer, got "-5"/,
    );
  });
});
