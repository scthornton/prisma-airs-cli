import { lorem } from '../lorem.js';
import { makeRng } from '../rng.js';
import type { PayloadValue, Technique } from '../types.js';

const join = (p: PayloadValue[]): string => p.map((v) => `${v.category}: ${v.value}`).join(' | ');

interface Core {
  title?: string;
  subject?: string;
  keywords?: string;
}

/** Technique-specific body content, constructed lazily once docx is loaded. */
type Extra =
  | { kind: 'none' }
  | { kind: 'hidden'; text: string }
  | { kind: 'visible'; text: string };

async function build(extra: Extra, core: Core = {}): Promise<Buffer> {
  // Lazy-load docx: importing it eagerly pulls in browserify polyfills whose
  // util-deprecate shim reads localStorage at import time, triggering a Node
  // Web Storage warning on every CLI command. Deferring the import to here
  // means docx (and the warning) only loads when DOCX output is actually built.
  const { Document, HeadingLevel, Packer, Paragraph, TextRun } = await import('docx');

  const body = lorem(makeRng(1), 2)
    .split('\n\n')
    .map((t) => new Paragraph({ children: [new TextRun(t)] }));

  const extraParagraphs =
    extra.kind === 'hidden'
      ? [new Paragraph({ children: [new TextRun({ text: extra.text, vanish: true })] })]
      : extra.kind === 'visible'
        ? [new Paragraph({ children: [new TextRun(extra.text)] })]
        : [];

  const doc = new Document({
    title: core.title,
    subject: core.subject,
    keywords: core.keywords,
    sections: [
      {
        children: [
          new Paragraph({ text: 'Generated Document', heading: HeadingLevel.HEADING_1 }),
          ...body,
          ...extraParagraphs,
        ],
      },
    ],
  });
  return Packer.toBuffer(doc);
}

export const docxTechniques: Record<string, Technique> = {
  'core-props': {
    id: 'core-props',
    format: 'docx',
    label: 'core document properties',
    embed: (_clean, p) =>
      build({ kind: 'none' }, { title: join(p), subject: join(p), keywords: join(p) }),
  },
  'hidden-run': {
    id: 'hidden-run',
    format: 'docx',
    label: 'hidden (vanish) run',
    embed: (_clean, p) => build({ kind: 'hidden', text: join(p) }),
  },
  visible: {
    id: 'visible',
    format: 'docx',
    label: 'visible body line',
    embed: (_clean, p) => build({ kind: 'visible', text: join(p) }),
  },
};
