// biome-ignore-all lint/suspicious/noExplicitAny: test payloads use arbitrary SDK shapes
import { describe, expect, it, vi } from 'vitest';
import {
  dlpDictionaries,
  dlpFilteringProfiles,
  dlpPatterns,
  dlpProfiles,
} from '../../../src/cli/renderer/dlp.js';

describe('dlpFilteringProfiles renderer', () => {
  it('renderList json emits curated items + page meta (not raw SDK envelope)', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});
    dlpFilteringProfiles.renderList(
      {
        content: [{ id: 'a', name: 'p', type: 'custom', is_parent_managed: false }],
        totalElements: 1,
        pageable: { pageNumber: 0, pageSize: 25 },
      } as any,
      'json',
    );
    const out = String(spy.mock.calls[0]?.[0]);
    expect(out).toContain('"items"');
    expect(out).toContain('"page"');
    expect(out).toContain('"total": 1');
    expect(out).not.toContain('is_parent_managed');
    spy.mockRestore();
  });

  it('renderGet json emits curated fields only', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});
    dlpFilteringProfiles.renderGet(
      { id: 'a', name: 'p', type: 'custom', tenant_id: 'X', is_parent_managed: false } as any,
      'json',
    );
    const out = String(spy.mock.calls[0]?.[0]);
    expect(out).toContain('"id": "a"');
    expect(out).toContain('"name": "p"');
    expect(out).not.toContain('tenant_id');
    expect(out).not.toContain('is_parent_managed');
    spy.mockRestore();
  });

  it('renderReplaced pretty emits confirmation line', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});
    dlpFilteringProfiles.renderReplaced({ id: 'a' } as any, 'pretty');
    expect(spy).toHaveBeenCalledWith(expect.stringContaining('replaced'));
    spy.mockRestore();
  });

  it('renderReplaced json emits curated ack object', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});
    dlpFilteringProfiles.renderReplaced(
      { id: 'a', name: 'p', version: 2, tenant_id: 'X' } as any,
      'json',
    );
    const out = String(spy.mock.calls[0]?.[0]);
    expect(out).toContain('"action": "replaced"');
    expect(out).toContain('"id": "a"');
    expect(out).toContain('"version": 2');
    expect(out).not.toContain('tenant_id');
    spy.mockRestore();
  });
});

describe('dlpPatterns renderer', () => {
  it('renderArchived prints "archived <id>"', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});
    dlpPatterns.renderArchived('p1');
    expect(spy).toHaveBeenCalledWith(expect.stringContaining('archived'));
    expect(spy).toHaveBeenCalledWith(expect.stringContaining('p1'));
    spy.mockRestore();
  });

  it('renderCreated/Patched/Replaced json emit curated ack objects', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});
    dlpPatterns.renderCreated({ id: 'p1', name: 'x', version: 1 } as any, 'json');
    dlpPatterns.renderPatched({ id: 'p1', name: 'x', version: 2 } as any, 'json');
    dlpPatterns.renderReplaced({ id: 'p1', name: 'x', version: 3 } as any, 'json');
    expect(spy.mock.calls.every((c) => String(c[0]).includes('"id": "p1"'))).toBe(true);
    expect(String(spy.mock.calls[0]?.[0])).toContain('"action": "created"');
    expect(String(spy.mock.calls[1]?.[0])).toContain('"action": "patched"');
    expect(String(spy.mock.calls[2]?.[0])).toContain('"action": "replaced"');
    spy.mockRestore();
  });
});

describe('dlpProfiles renderer', () => {
  it('renderList json emits curated items + page', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});
    dlpProfiles.renderList(
      {
        content: [{ id: 'dp', name: 'n', tenant_id: 'X' }],
        totalElements: 1,
        pageable: { pageNumber: 0 },
      } as any,
      'json',
    );
    const out = String(spy.mock.calls[0]?.[0]);
    expect(out).toContain('"id": "dp"');
    expect(out).toContain('"total": 1');
    expect(out).not.toContain('tenant_id');
    spy.mockRestore();
  });
});

describe('dlpDictionaries renderer', () => {
  it('renderDeleted prints "deleted <id>"', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});
    dlpDictionaries.renderDeleted('d1');
    expect(spy).toHaveBeenCalledWith(expect.stringContaining('deleted'));
    expect(spy).toHaveBeenCalledWith(expect.stringContaining('d1'));
    spy.mockRestore();
  });

  it('renderReplaced204Fallback', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});
    dlpDictionaries.renderReplaced204Fallback('d1');
    expect(spy).toHaveBeenCalledWith(expect.stringContaining('replaced'));
    expect(spy).toHaveBeenCalledWith(expect.stringContaining('d1'));
    expect(spy).toHaveBeenCalledWith(expect.stringContaining('state not echoed'));
    spy.mockRestore();
  });
});
