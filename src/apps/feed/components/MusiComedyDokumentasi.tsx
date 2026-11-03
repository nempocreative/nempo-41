import logoAsset from '@/assets/musicomedy-night-logo.png.asset.json';

// Rundown page 3 — photo & video reference for the documentation team.
// The wording is a draft for the owner to adjust; every fact inside it (times, venue,
// performers, WhatsApp, handles) is the same one used on pages 1–2 and on the site.

export type DocCard = { label: string; lines: string[]; note: string };

export const rundownDoc: DocCard[] = [
  {
    label: 'Sebelum acara · 15.00 – 19.00',
    lines: [
      'Foto venue, banner, dan meja kasir saat masih kosong.',
      'Foto kursi, dekor, dan papan nama acara.',
      'Rekam suasana gerbang dibuka dan tamu pertama datang.',
    ],
    note: 'Cari titik cahaya paling terang di ruangan.',
  },
  {
    label: 'Saat pertunjukan · 19.20 – 23.00',
    lines: [
      'Rekam satu video utuh untuk tiap sesi, jangan dipotong-potong.',
      'Foto dari sisi panggung, jangan dari tengah penonton.',
      'Ambil reaksi penonton saat tepuk tangan.',
    ],
    note: 'Rekam lebih lama dari yang perlu — sisanya dipakai waktu edit.',
  },
  {
    label: 'Wajib kepotret',
    lines: [
      'Solo Vokal · Berlin, Musik Etnik, dan Opening Tari Mojang.',
      'Tari Jaipong · Melodi dan Guest Star · Saduli Ragap.',
      'Pencungan serta suasana ruangan saat penuh.',
    ],
    note: 'Kalau ada sesi yang terlewat, kabari PIC segera.',
  },
  {
    label: 'Video pendek · reels & story',
    lines: [
      'Tiap sesi ambil 10–15 detik: wajah, tangan, suasana.',
      'Rekam suara suasana ±30 detik untuk latar video.',
      'Tutup dengan papan nama acara dan handle @nempo.id.',
    ],
    note: 'Simpan file mentah, jangan dihapus sebelum serah terima.',
  },
  {
    label: 'Serah terima & unggah',
    lines: [
      'File dikumpulkan ke PIC lewat WhatsApp 0857-2498-1356.',
      'Jangan unggah sebelum boleh dari PIC.',
      'Caption menyebut NEMPO GARUT × Kala Muda × Good Story Cafe, @nempo.id, @kalamudacom.',
    ],
    note: 'Unggah setelah acara selesai.',
  },
];

export const rundownDocRules: string[] = [
  'Tanpa flash saat pertunjukan berlangsung.',
  'Jangan menghalangi pandangan penonton.',
  'Jangan unggah sebelum boleh dari PIC.',
  'Ragu? Hubungi PIC: WhatsApp 0857-2498-1356.',
];

export function MusiComedyDokumentasi() {
  return (
    <main
      className="mc-a5 mc-doc relative w-[min(96vw,1100px)] overflow-hidden"
      style={{ aspectRatio: '210 / 148', fontFamily: "'DM Sans', 'Inter', sans-serif" }}
      aria-label="Acuan dokumentasi foto dan video MusiComedy Night"
    >
      <header className="mc-a5-head">
        <img src={logoAsset.url} alt="MusiComedy Night" className="mc-a5-logo" />
        <div className="mc-a5-title">
          <span className="mc-a5-kicker">Halaman 3</span>
          <b>ACUAN DOKUMENTASI</b>
          <span>Tim Foto &amp; Video · MusiComedy Night</span>
        </div>
        <div className="mc-a5-info">
          <b>Rabu, 4 November 2026</b>
          <span>Good Story Cafe, Jl. Sudirman Copong No. 11</span>
          <span>Gerbang 15.00 · acara 19.20 · selesai 23.00 WIB</span>
          <span className="mc-a5-anchor">Patokan adzan: Ashar 14.49 · Maghrib 17.47 · Isya 18.56</span>
        </div>
      </header>

      <div className="mc-doc-grid">
        {rundownDoc.map((card) => (
          <section key={card.label} className="mc-doc-card">
            <h2>{card.label}</h2>
            <ul>
              {card.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <p className="mc-doc-note">{card.note}</p>
          </section>
        ))}
      </div>

      <div className="mc-doc-rules">
        {rundownDocRules.map((rule) => (
          <span key={rule}>{rule}</span>
        ))}
      </div>

      <footer className="mc-a5-foot">
        <span>NEMPO GARUT × Kala Muda × Good Story Cafe</span>
        <span>Halaman 3 dari 3 · acuan dokumentasi foto &amp; video</span>
      </footer>
    </main>
  );
}
