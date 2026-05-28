import { lorem } from '../lorem.js';

/** Generate a valid DOCX (zip) filled with lorem ipsum. */
export async function docx(rng: () => number): Promise<Buffer> {
  // Lazy-load docx: importing it eagerly pulls in browserify polyfills whose
  // util-deprecate shim reads localStorage at import time, triggering a Node
  // Web Storage warning on every CLI command. Deferring the import to here
  // means docx (and the warning) only loads when DOCX output is actually built.
  const { Document, HeadingLevel, Packer, Paragraph, TextRun } = await import('docx');
  const paragraphs = lorem(rng, 3)
    .split('\n\n')
    .map((p) => new Paragraph({ children: [new TextRun(p)] }));
  const doc = new Document({
    sections: [
      {
        children: [
          new Paragraph({ text: 'Generated Document', heading: HeadingLevel.HEADING_1 }),
          ...paragraphs,
        ],
      },
    ],
  });
  return Packer.toBuffer(doc);
}
