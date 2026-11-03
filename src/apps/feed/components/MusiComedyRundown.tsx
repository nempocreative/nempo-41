import type { RefObject } from 'react';
import logoAsset from '@/assets/musicomedy-night-logo.png.asset.json';

// MusiComedy Night rundown — A5 landscape paper sheet (210×148 mm) in the slide 31–33 palette.
export const musicomedyRundown: { time: string; title: string; note?: string }[] = [
  { time: '17.00', title: 'Solo Vokal (Sesi 1)', note: 'Berlin' },
  { time: "Ba'da Maghrib", title: 'Solo Vokal (Sesi 2)', note: 'Berlin' },
  { time: "Ba'da Isya", title: 'Opening Bumper' },
  { time: '', title: 'Musik Etnik Pembuka', note: '3–5 lagu' },
  { time: '', title: 'Opening Tari Mojang' },
  { time: '', title: 'Tari Jaipong', note: 'Melodi' },
  { time: '', title: 'Musik Etnik', note: '2 lagu' },
  { time: '', title: 'Guest Star', note: 'Saduli Ragap' },
  { time: '', title: 'Pencungan' },
  { time: '', title: 'Musik Bebas' },
];

export function MusiComedyRundown({ exportRef }: { exportRef: RefObject<HTMLElement | null> }) {
  return (
    <main
      ref={exportRef}
      className="mc-a5 relative w-[min(96vw,1100px)] overflow-hidden"
      style={{ aspectRatio: '210 / 148', fontFamily: "'DM Sans', 'Inter', sans-serif" }}
      aria-label="Rundown MusiComedy Night"
    >
      <header className="mc-a5-head">
        <img src={logoAsset.url} alt="MusiComedy Night" className="mc-a5-logo" />
        <div className="mc-a5-title">
          <b>RUNDOWN ACARA</b>
          <span>Rabu, 4 November 2026 · Good Story Cafe, Jl. Sudirman Copong No. 11</span>
        </div>
      </header>
      <table className="mc-a5-table">
        <thead>
          <tr><th>No</th><th>Waktu</th><th>Acara</th><th>Keterangan</th></tr>
        </thead>
        <tbody>
          {musicomedyRundown.map((item, i) => (
            <tr key={i} className={item.title === 'Guest Star' ? 'is-star' : undefined}>
              <td>{String(i + 1).padStart(2, '0')}</td>
              <td>{item.time || '—'}</td>
              <td>{item.title}</td>
              <td>{item.note ?? ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer className="mc-a5-foot">NEMPO GARUT × Good Story Cafe</footer>
    </main>
  );
}
