import type { RefObject } from 'react';
import { SlideThirtyOneBackground } from './SlideThirtyOneBackground';

// MusiComedy Night rundown — own feed tab, same frame and palette as slides 31–33.
export const musicomedyRundown: { time: string; title: string; note?: string }[] = [
  { time: '17.00', title: 'Solo Vokal', note: 'Berlin · Sesi 1' },
  { time: "Ba'da Maghrib", title: 'Solo Vokal', note: 'Berlin · Sesi 2' },
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
      className="musicomedy-s33 relative aspect-[3/4] h-[min(92vh,900px)] w-auto max-w-full overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.34)] max-[640px]:h-auto max-[640px]:w-full"
      style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
      aria-label="Rundown MusiComedy Night"
    >
      <SlideThirtyOneBackground mode="plain" />
      <div className="absolute inset-0 z-[4]">
        <div className="musicomedy-s33-ribbon absolute left-1/2 top-[31%] w-fit -translate-x-1/2">
          <p className="musicomedy-s33-ribbon-text" style={{ whiteSpace: 'nowrap', fontSize: '2.4cqw' }}>
            <span className="musicomedy-s33-stamp-inner">RUNDOWN</span>
            Susunan acara malam ini
          </p>
        </div>
        <ol className="mc-rundown absolute left-1/2 top-[40%] -translate-x-1/2">
          {musicomedyRundown.map((item, i) => (
            <li key={i} className={item.title === 'Guest Star' ? 'mc-rundown-item is-star' : 'mc-rundown-item'}>
              <span className="mc-rundown-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="mc-rundown-text">
                {item.time && <small>{item.time}</small>}
                <b>{item.title}</b>
                {item.note && <em>{item.note}</em>}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
