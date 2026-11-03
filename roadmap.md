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
- [x] Migration Drizzle hasil copy dibersihkan dan set migration kosong disiapkan; 21 tabel database proyek baru jadi baseline, drizzle-kit check lolos.
- [x] Rundown MusiComedy (kertas A5 mendatar) diberi jam detail + kolom menit berpatokan adzan Ashar 14.49, Maghrib 17.47, Isya 18.56; footer medsos berupa logo/ikon (IG, TikTok, web, WA) dalam dua kelompok — NEMPO (@nempo.id, nempo.id, WA) dan KALA MUDA (@kalamudacom, kalamuda.com); jam, menit, baris jeda salat dan tautan sosial diuji.
- [x] Cetak rundown: rules @media print menyembunyikan chrome aplikasi dan mengunci kertas ke satu halaman A5 mendatar (210×148 mm) — tabel, baris logo medsos dan baris footer bawah ikut tercetak; diverifikasi lewat PDF A5 (1 halaman, semua terbaca).
- [x] Dekor budaya rundown: pita siluet penari + wayang punokawan + gunungan di celah antara tabel dan baris medsos, plus bayangan gunungan samar di latar; digambar inline sebagai SVG (tajam di cetak), diverifikasi lewat screenshot dan PDF A5.

## Terbuka
- [x] Data event saat ini disinkronkan setelah remix: MusiComedy Night aktif, API dan halaman detail terbaca; lima dataset lama tetap kosong.
- [ ] Unduh ekspor database lengkap terbaru: menunggu pengguna menjalankan Export data di More → Database → Manage → Settings.
- [ ] Pindahkan data ke Supabase milik pengguna: file salinan `nempo-database-salinan.sql` sudah siap di Files (teruji jalan di database tiruan) — jalankan di SQL Editor tujuan; akun admin dibuat ulang di tujuan lalu baris `user_roles` ditambahkan.
- [ ] Verifikasi koneksi Vercel ke Supabase pengguna: menunggu pengaturan tujuan di Vercel dan deploy.
- [ ] Unggah foto dari `/cms` belum aktif.
- [ ] Kompres foto unggahan baru ke WebP.
