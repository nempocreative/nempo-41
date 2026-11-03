import logoAsset from '@/assets/musicomedy-night-logo.png.asset.json';

// Rundown page 2 — greeting reference for the reception team (penerima tamu).
// The wording is a draft for the owner to adjust; every fact inside it (times, venue,
// WhatsApp, handles) is the same one used on page 1 and on the site.

export type GreetingCard = { label: string; lines: string[]; note: string; accent?: boolean };

export const rundownGreeting: GreetingCard[] = [
  {
    label: 'Tamu datang · gerbang 15.00',
    lines: [
      'Sampurasun, selamat datang di MusiComedy Night, Good Story Cafe.',
      'Nama dan jumlah tamunya berapa, Kak?',
      'Sudah reservasi atau belum, ya?',
    ],
    note: 'Senyum, sapa, lalu arahkan ke kasir.',
  },
  {
    label: 'Setelah disapa · arahkan ke kasir',
    lines: [
      'Silakan ke kasir dulu ya, untuk pesan menu.',
      'Dari kasir nanti Kak dapat nomor meja.',
      'Kalau sudah pesan, kami antarkan ke meja sesuai nomor.',
    ],
    note: 'Nomor meja keluar dari kasir — jangan menjanjikan lebih dulu.',
    accent: true,
  },
  {
    label: 'Sudah reservasi',
    lines: [
      'Baik, kami cek dulu ya.',
      'Sudah tercatat atas nama … — silakan, ini kursi Kak.',
      'Acara mulai 19.20 WIB. Selamat menikmati.',
    ],
    note: 'Sebut nama tamu saat mengantar, jangan ditinggal.',
  },
  {
    label: 'Belum reservasi',
    lines: [
      'Boleh, kami catat dulu nama dan jumlah tamunya.',
      'Kursi sedang penuh — kami masukkan daftar tunggu, ya.',
      'Atau bisa simpan kursi lewat WhatsApp 0857-2498-1356.',
    ],
    note: 'Jangan menjanjikan kursi yang belum tentu ada.',
  },
  {
    label: 'Sering ditanya',
    lines: [
      'Masuknya gratis, tanpa tiket.',
      'Mulai 19.20 WIB, selesai 23.00 WIB.',
      'Jeda salat: Maghrib 17.47, Isya 18.56 — ±25 menit.',
    ],
    note: 'Kalau ragu soal jam, cek rundown halaman 1.',
  },
  {
    label: 'Tamu datang terlambat',
    lines: [
      'Silakan, acaranya masih berjalan.',
      'Kami carikan kursi di pinggir supaya tidak mengganggu.',
    ],
    note: 'Jangan menyapa keras saat pertunjukan sedang jalan.',
  },
  {
    label: 'Tamu pulang',
    lines: [
      'Terima kasih sudah hadir, mohon maaf kalau ada yang kurang.',
      'Jangan lupa follow @nempo.id dan @kalamudacom, ya.',
    ],
    note: 'Antar sampai pintu, jangan hanya dari jauh.',
  },
];

export const rundownGreetingRules: string[] = [
  'Selalu sebut nama acara: MusiComedy Night.',
  'Jangan menjanjikan kursi, makanan, atau jam yang belum pasti.',
  'Jam acara bisa maju/mundur ±10 menit.',
  'Ragu? Hubungi PIC: WhatsApp 0857-2498-1356.',
];

export function MusiComedySapaan() {
  return (
    <main
      className="mc-a5 mc-sapaan relative w-[min(96vw,1100px)] overflow-hidden"
      style={{ aspectRatio: '210 / 148', fontFamily: "'DM Sans', 'Inter', sans-serif" }}
      aria-label="Acuan sapaan penerima tamu MusiComedy Night"
    >
      <header className="mc-a5-head">
        <img src={logoAsset.url} alt="MusiComedy Night" className="mc-a5-logo" />
        <div className="mc-a5-title">
          <span className="mc-a5-kicker">Halaman 2</span>
          <b>ACUAN SAPAAN</b>
          <span>Penerima Tamu · MusiComedy Night</span>
        </div>
        <div className="mc-a5-info">
          <b>Rabu, 4 November 2026</b>
          <span>Good Story Cafe, Jl. Sudirman Copong No. 11</span>
          <span>Gerbang 15.00 · acara 19.20 · selesai 23.00 WIB</span>
          <span className="mc-a5-anchor">Patokan adzan: Ashar 14.49 · Maghrib 17.47 · Isya 18.56</span>
        </div>
      </header>

      <div className="mc-sapaan-grid">
        {rundownGreeting.map((card) => (
          <section key={card.label} className={'mc-sapaan-card' + (card.accent ? ' is-key' : '')}>
            <h2>{card.label}</h2>
            <ul>
              {card.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <p className="mc-sapaan-note">{card.note}</p>
          </section>
        ))}
      </div>

      <div className="mc-sapaan-rules">
        {rundownGreetingRules.map((rule) => (
          <span key={rule}>{rule}</span>
        ))}
      </div>

      <footer className="mc-a5-foot">
        <span>NEMPO GARUT × Kala Muda × Good Story Cafe</span>
        <span>Halaman 2 dari 2 · acuan sapaan penerima tamu</span>
      </footer>
    </main>
  );
}
