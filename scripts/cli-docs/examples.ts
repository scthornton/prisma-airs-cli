import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import yaml from 'js-yaml';
import type { CommandExample, ExampleMap } from './model.js';

interface RawEntry {
  examples?: CommandExample[];
}

export function loadExamples(dir: string): ExampleMap {
  let files: string[];
  try {
    files = readdirSync(dir).filter((f) => f.endsWith('.yaml') || f.endsWith('.yml'));
  } catch {
    return {};
  }
  const map: ExampleMap = {};
  for (const file of files) {
    const raw = yaml.load(readFileSync(join(dir, file), 'utf-8')) as Record<
      string,
      RawEntry
    > | null;
    if (!raw) continue;
    for (const [path, entry] of Object.entries(raw)) {
      if (entry?.examples?.length) map[path] = entry.examples;
    }
  }
  return map;
}

export function missingExamples(leafPaths: string[], examples: ExampleMap): string[] {
  return leafPaths.filter((p) => !examples[p]?.length);
}
