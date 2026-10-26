# Portofolio Muhammad Azrul Wicaksono

Portofolio satu halaman bergaya terang dan bersih dengan aksen biru lembut: Beranda, Tentang Saya, Proyek, Desain, Pengalaman, Pendidikan (dengan sertifikat), dan Kontak.

## Cara membuka

Klik dua kali `index.html`, atau jalankan server lokal:

```bash
npm run serve
```

Semua library sudah ada di folder `vendor/`, jadi situs tidak bergantung pada CDN. Hanya font (Google Fonts) yang dimuat dari internet.

## Struktur folder

```
azrul-portfolio/
├── index.html            ← struktur halaman + template Vue
├── css/
│   ├── base.css          ← warna, huruf, reset
│   ├── layout.css        ← navigasi, bagian, footer
│   ├── components.css    ← tombol, chip, kartu, galeri, toast
│   ├── sections.css      ← isi tiap bagian
│   └── responsive.css    ← tablet & ponsel
├── src/ts/               ← KODE SUMBER TypeScript (edit di sini)
│   ├── globals.d.ts      ← tipe data
│   ├── data.ts           ← SEMUA ISI: proyek, pengalaman, pendidikan, email
│   ├── effects.ts        ← gerak halus (GSAP, Flip, Motion)
│   └── app.ts            ← aplikasi Vue 3
├── js/                   ← hasil kompilasi TypeScript (dipakai browser)
├── vendor/               ← Vue, GSAP, Motion (salinan lokal)
├── favicon.svg, 404.html, .nojekyll
├── assets/azrul.webp     ← foto profil tanpa latar
├── assets/shots/         ← tangkapan layar proyek
├── assets/kegiatan/      ← foto & video kegiatan
├── assets/desain/        ← desain Canva & Figma
├── assets/sertifikat/    ← sertifikat & daftar nilai
├── tsconfig.json
└── package.json
```

## Library

| Library | Peran |
|---|---|
| Vue 3 | Navigasi, filter proyek, galeri dan detail proyek, salin email |
| TypeScript | Seluruh logika di `src/ts`, dikompilasi ke `js/` |
| GSAP + ScrollTrigger + Flip | Animasi masuk, muncul saat scroll, kartu bergeser saat filter |
| Motion | Kartu sedikit terangkat dengan efek pegas saat disorot |

## Mengubah isi

1. Ubah `src/ts/data.ts`: email, proyek, pengalaman, pendidikan, tautan sosial.
2. Jalankan `npm install` lalu `npm run build`. Tanpa Node.js, Anda bisa langsung mengedit `js/data.js`.

### Gambar proyek
Simpan tangkapan layar di `assets/shots/` (WebP 1280×800), lalu tambahkan `shot('nama-file', 'Keterangan')` ke bagian `SHOTS` di `data.ts` dan pasang di proyeknya (`shots: SHOTS.namaproyek`).

### Pengalaman (foto & video)
Tambahkan ke `experience`. Isi `media` dengan `{ src: 'assets/kegiatan/foto.webp', caption: 'Keterangan' }`. Untuk video, tambahkan `video: 'assets/kegiatan/video.mp4'` dan pakai gambar sampul di `src`. Simpan juga versi `.webm` dengan nama yang sama agar bisa diputar di semua browser.

### Sertifikat
Simpan gambar sertifikat di `assets/sertifikat/` (WebP, lebar 1400 px), lalu tambahkan ke `certs` di `data.ts`: `title`, `issuer`, `date`, `text`, `grade` (opsional), dan `shots` (halaman sertifikat dan daftar nilai). Set `showCerts: false` untuk menyembunyikan bagian ini.

### Desain
Tambahkan ke `designs` di `data.ts`. Gambar disimpan di `assets/desain/`. Pakai `layout: 'screens'` untuk tangkapan layar UI (lanskap).

## Sebelum hosting

1. Di `src/ts/data.ts`, isi `email` dan url `LinkedIn` / `Instagram` (jika kosong, otomatis disembunyikan), lalu jalankan `npm run build`. Tanpa Node.js, ubah langsung di `js/data.js`.
2. Setelah situs online, ganti isi `og:image` di `index.html` menjadi alamat lengkap, mis. `https://azrullio.github.io/portfolioo/assets/og-image.png` (sudah diisi untuk repositori portfolioo), agar gambar pratinjau muncul saat link dibagikan.

## Hosting di GitHub Pages (gratis)

**Alamat utama `https://azrullio.github.io/`**
1. Buat repositori bernama persis `azrullio.github.io` (jika sudah ada, gunakan repositori itu).
2. Unggah **isi** folder ini (bukan foldernya) ke repositori: `index.html`, `404.html`, `favicon.svg`, `.nojekyll`, `css/`, `js/`, `vendor/`, `assets/`. Folder `src/`, `package.json`, dan `tsconfig.json` boleh ikut.
3. Settings → Pages → Source: **Deploy from a branch**, Branch: `main`, folder `/ (root)` → Save.
4. Tunggu 1–2 menit, lalu buka `https://azrullio.github.io/`.

**Atau di alamat `https://azrullio.github.io/portfolio/`**: buat repositori bernama `portfolio`, lalu ikuti langkah 2–4. Semua tautan di situs memakai alamat relatif, jadi tetap berfungsi di subfolder. Proyek lain seperti `/Jetis/` tetap aman.

## Alternatif: Netlify

Masuk ke app.netlify.com → **Add new site → Deploy manually** → seret folder `azrul-portfolio` ke halaman itu.
