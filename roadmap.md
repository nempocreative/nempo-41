# Roadmap

## Selesai
- [x] MusiComedy Night dipulihkan setelah remix: aktif di database; klik Event Mendatang, daftar event dan detail diverifikasi langsung.
- [x] Poster Event Mendatang: hilangkan animasi yang mengaburkan tulisan dan sediakan WebP sesuai ukuran layar tanpa menunda pemuatan.
- [x] Panduan deploy Vercel diperiksa: impor GitHub, gunakan NITRO_PRESET=vercel dan pengaturan koneksi Cloud; deploy sungguhan belum diuji.
- [x] Migrasi dari nempo-34: hanya situs NEMPO Organizer dan dashboard admin `/cms`; aplikasi lain dihapus.
- [x] Database dibuat ulang (20 tabel konten + peran admin) dengan pengaman akses; `/cms` membaca/menulis langsung ke database.
- [x] Semua foto/audio disimpan sebagai file asli di proyek, sehingga ikut terbawa saat deploy ke Vercel.
- [x] Event MusiComedy Night dipulihkan (poster, QRIS saweran, peta, reservasi Good Story Cafe).
- [x] Contoh pengaturan deploy di `.env.example`.

- [x] Akun admin admin@nempogarut.com dibuat; 109 data situs (wisata, kuliner, penginapan, lomba, kamus Sunda) dimasukkan ke database.
- [x] Data impor lama tidak dipertahankan: setelah remix, wisata, kuliner, penginapan, perlombaan, dan kamus Sunda diverifikasi kosong; jangan impor ulang.
- [x] Migration Drizzle hasil copy dibersihkan dan set migration kosong disiapkan; 21 tabel database proyek baru jadi baseline, drizzle-kit check lolos. Semua 42 referensi foto/audio/video sudah dipindah ke penyimpanan proyek ini (video slide 32 dipulihkan lewat host yang masih menyajikan filenya) — 0 foto rusak di beranda/feed/komunitas, 249 tes lolos.
- [x] Rundown MusiComedy (kertas A5 mendatar) diberi jam detail + kolom menit berpatokan adzan Ashar 14.49, Maghrib 17.47, Isya 18.56; baris medsos berisi ikon + alamat, dua kelompok — NEMPO (@nempo.id IG & TikTok, www.nempogarut.com, WA 0857-2498-1356) dan KALA MUDA (@kalamudacom); jam, menit, baris jeda salat dan tautan sosial diuji.
- [x] Cetak rundown: rules @media print menyembunyikan chrome aplikasi dan mengunci kertas ke satu halaman A5 mendatar (210×148 mm) — tabel, baris logo medsos dan baris footer bawah ikut tercetak; diverifikasi lewat PDF A5 (1 halaman, semua terbaca).
- [x] Dekor rundown dicabut: siluet penari/wayang maupun deretan ikon sama-sama ditolak, kertas A5 dibiarkan polos; diverifikasi lewat screenshot dan PDF A5 (1 halaman, semua terbaca).
- [x] Halaman 2 rundown: acuan sapaan penerima tamu — tiga kartu (tamu datang yang sekaligus mengarahkan ke kasir untuk pesan menu & nomor meja, kalau sudah reservasi, tamu pulang) plus empat aturan singkat; kalimat sapaan sudah dikoreksi pemilik, tamu dipanggil "Kak". Cetak = 3 halaman A5 mendatar (diverifikasi PDF).
- [x] Halaman 3 rundown: acuan dokumentasi — dua kolom berjarak dan bergaris pemisah, FOTO (sebelum acara, saat pertunjukan, wajib kepotret) di kiri dan VIDEO (sebelum acara, saat pertunjukan, video pendek reels & story) di kanan; kartu serah terima & unggah melebar di bawah, plus empat aturan; kalimatnya masih draf yang menunggu koreksi pemilik. Cetak = 3 halaman A5 mendatar (diverifikasi PDF).

## Terbuka
- [ ] Revisi bumper: pembukaan wayang bergerak, judul acara muncul besar di tengah; render ulang MP4 3:4.
- [x] Bumper Acara MusiComedy: tombol di Nempo Feed, animasi 3:4 dan MP4 1080×1440, 12 detik, 30 fps; tombol jeda/ulang dan tampilan ponsel diperiksa. Ukuran dijelaskan kepada pengguna.
- [x] Data event saat ini disinkronkan setelah remix: MusiComedy Night aktif, API dan halaman detail terbaca; lima dataset lama tetap kosong.
- [ ] Unduh ekspor database lengkap terbaru: menunggu pengguna menjalankan Export data di More → Database → Manage → Settings.
- [ ] Pindahkan data ke Supabase milik pengguna: file salinan `nempo-database-salinan.sql` sudah siap di Files (teruji jalan di database tiruan) — jalankan di SQL Editor tujuan; akun admin dibuat ulang di tujuan lalu baris `user_roles` ditambahkan.
- [ ] Verifikasi koneksi Vercel ke Supabase pengguna: menunggu pengaturan tujuan di Vercel dan deploy.
- [ ] Unggah foto dari `/cms` belum aktif.
- [ ] Kompres foto unggahan baru ke WebP.
