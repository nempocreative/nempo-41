import type { RefObject } from 'react';
import logoAsset from '@/assets/musicomedy-night-logo.png.asset.json';

// MusiComedy Night rundown — A5 landscape paper sheet (210×148 mm) in the slide 31–33 palette.
// Times are anchored to the adzan schedule the owner gave for 4 Nov 2026:
// Ashar 14.49 · Maghrib 17.47 · Isya 18.56 WIB.
export type RundownKind = 'show' | 'pray';

export const musicomedyRundown: {
  time: string;
  title: string;
  note?: string;
  kind?: RundownKind;
}[] = [
  { time: '15.00 – 16.55', title: 'Gerbang dibuka · tamu datang', note: 'setelah Ashar (14.49)' },
  { time: '17.00 – 17.40', title: 'Solo Vokal (Sesi 1)', note: 'Berlin · 40 menit' },
  { time: '17.47', title: 'Maghrib · jeda salat', note: 'adzan 17.47', kind: 'pray' },
  { time: '18.10 – 18.50', title: 'Solo Vokal (Sesi 2)', note: 'Berlin · 40 menit' },
  { time: '18.56', title: 'Isya · jeda salat', note: 'adzan 18.56', kind: 'pray' },
  { time: '19.20 – 19.30', title: 'Opening Bumper', note: 'penanda acara utama' },
  { time: '19.30 – 19.55', title: 'Musik Etnik Pembuka', note: '3–5 lagu' },
  { time: '19.55 – 20.10', title: 'Opening Tari Mojang', note: 'selamat datang tamu' },
  { time: '20.10 – 20.35', title: 'Tari Jaipong', note: 'Melodi' },
  { time: '20.35 – 20.55', title: 'Musik Etnik', note: '2 lagu' },
  { time: '20.55 – 21.40', title: 'Guest Star', note: 'Saduli Ragap · 45 menit' },
  { time: '21.40 – 22.10', title: 'Pencungan', note: '30 menit' },
  { time: '22.10 – 23.00', title: 'Musik Bebas', note: 'penutup · 50 menit' },
];

export function MusiComedyRundown({ exportRef }: { exportRef: RefObject<HTMLElement | null> }) {
  let no = 0;
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
          <span className="mc-a5-anchor">15.00 – 23.00 WIB · patokan adzan: Ashar 14.49, Maghrib 17.47, Isya 18.56</span>
        </div>
      </header>
      <table className="mc-a5-table">
        <thead>
          <tr><th>No</th><th>Waktu</th><th>Acara</th><th>Keterangan</th></tr>
        </thead>
        <tbody>
          {musicomedyRundown.map((item, i) => {
            const pray = item.kind === 'pray';
            if (!pray) no += 1;
            return (
              <tr
                key={i}
                className={pray ? 'is-pray' : item.title === 'Guest Star' ? 'is-star' : undefined}
              >
                <td>{pray ? '•' : String(no).padStart(2, '0')}</td>
                <td>{item.time}</td>
                <td>{item.title}</td>
                <td>{item.note ?? ''}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <footer className="mc-a5-foot">
        <span>NEMPO GARUT × Good Story Cafe</span>
        <span>Jam dapat maju/mundur ±10 menit</span>
      </footer>
    </main>
  );
}
