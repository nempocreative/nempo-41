import { describe, expect, it } from 'vitest';
import { musicomedyRundown, rundownDuration, rundownSocial } from './MusiComedyRundown';

// "17.00 – 17.40" / "17.47" -> minutes after midnight.
function minutes(value: string): number {
  const [h, m] = value.trim().split('.');
  return Number(h) * 60 + Number(m);
}

function span(time: string): { start: number; end: number } {
  const [from, to] = time.split('–');
  return { start: minutes(from), end: minutes(to ?? from) };
}

describe('MusiComedy Night rundown times', () => {
  it('gives every row a concrete clock time', () => {
    expect(musicomedyRundown.every((row) => /^\d{2}\.\d{2}( – \d{2}\.\d{2})?$/.test(row.time))).toBe(true);
  });

  it('shows a length in minutes for every row, adzan gaps included', () => {
    expect(musicomedyRundown.map((_, i) => rundownDuration(i))).toEqual([
      115, 40, 23, 40, 24, 10, 25, 15, 25, 20, 45, 30, 50,
    ]);
  });

  it('points readers to NEMPO and Kala Muda channels, website and event WhatsApp', () => {
    expect(rundownSocial.map((s) => s.href)).toEqual([
      'https://instagram.com/nempo.id',
      'https://tiktok.com/@nempo.id',
      'https://nempo.id',
      'https://wa.me/6285724981356',
      'https://www.instagram.com/kalamudacom/',
      'https://www.kalamuda.com/',
    ]);
    expect(rundownSocial.map((s) => s.brand)).toEqual([
      'nempo', 'nempo', 'nempo', 'nempo', 'kalamuda', 'kalamuda',
    ]);
  });

  it('uses the adzan times the owner gave as the prayer-break anchors', () => {
    const breaks = musicomedyRundown.filter((row) => row.kind === 'pray').map((row) => row.time);
    expect(breaks).toEqual(['17.47', '18.56']);
  });

  it('keeps every item inside the 15.00–23.00 event window and in order', () => {
    const spans = musicomedyRundown.map((row) => span(row.time));
    expect(spans[0].start).toBe(15 * 60);
    expect(spans[spans.length - 1].end).toBe(23 * 60);
    spans.forEach((s) => {
      expect(s.start).toBeGreaterThanOrEqual(15 * 60);
      expect(s.end).toBeLessThanOrEqual(23 * 60);
      expect(s.end).toBeGreaterThanOrEqual(s.start);
    });
    for (let i = 1; i < spans.length; i += 1) {
      expect(spans[i].start).toBeGreaterThanOrEqual(spans[i - 1].start);
    }
  });

  it('sits the Maghrib set after the 17.47 adzan and the main show after Isya', () => {
    const at = (title: string) => span(musicomedyRundown.find((r) => r.title === title)!.time).start;
    expect(at('Solo Vokal (Sesi 1)')).toBeLessThan(minutes('17.47'));
    expect(at('Solo Vokal (Sesi 2)')).toBeGreaterThan(minutes('17.47'));
    expect(at('Solo Vokal (Sesi 2)')).toBeLessThan(minutes('18.56'));
    expect(at('Opening Bumper')).toBeGreaterThan(minutes('18.56'));
  });
});
