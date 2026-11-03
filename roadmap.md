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

## Terbuka
- [x] Data event saat ini disinkronkan setelah remix: MusiComedy Night aktif, API dan halaman detail terbaca; lima dataset lama tetap kosong.
- [ ] Unduh ekspor database lengkap terbaru: menunggu pengguna menjalankan Export data di More → Database → Manage → Settings.
- [ ] Pindahkan data ke Supabase milik pengguna: file salinan `nempo-database-salinan.sql` sudah siap di Files (teruji jalan di database tiruan) — jalankan di SQL Editor tujuan; akun admin dibuat ulang di tujuan lalu baris `user_roles` ditambahkan.
- [ ] Verifikasi koneksi Vercel ke Supabase pengguna: menunggu pengaturan tujuan di Vercel dan deploy.
- [ ] Unggah foto dari `/cms` belum aktif.
- [ ] Kompres foto unggahan baru ke WebP.
