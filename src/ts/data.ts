/* =========================================================
   data.ts — SEMUA ISI SITUS ADA DI SINI.
   Ubah teks, proyek, pengalaman, email, dan tautan di file ini,
   lalu jalankan `npm run build` untuk memperbarui js/data.js.
   ========================================================= */
(() => {
  const AZ = (window.AZ = window.AZ || ({} as AZNamespace));
  AZ.reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const GH = 'https://github.com/azrullio/';
  const IO = 'https://azrullio.github.io/';

  /* ---------- Tangkapan layar proyek (assets/shots) + keterangannya ---------- */
  const shot = (file: string, caption: string): Shot => ({ src: 'assets/shots/' + file + '.webp', caption });
  const SHOTS: Record<string, Shot[]> = {
    jetis: [
      shot('jetis-judul', 'Layar judul dengan maskot burung merak di gapura Kampung Batik Jetis, lengkap dengan tombol Mulai dan Pengaturan.'),
      shot('jetis-peta', 'Peta kampung: pemain berjalan ke Rumah Canting, Dapur Malam, Rumah Warna, sampai Galeri Motif. Setiap tempat berisi soal.'),
      shot('jetis-avatar', 'Pemain menulis nama dan memilih avatar anak perempuan atau laki-laki sebelum petualangan dimulai.'),
      shot('jetis-cerita', 'Pembuka cerita bergaya sepia tentang awal mula batik di Kampung Jetis tahun 1675.'),
    ],
    selo: [
      shot('selo-beranda', 'Beranda dengan ilustrasi batu yang menyerupai gajah tidur dan tombol menuju cerita serta lokasi.'),
      shot('selo-sejarah', 'Bagian sejarah dan asal nama, dengan ringkasan fakta: jenis wisata, ciri khas, letak, dan status.'),
      shot('selo-daya-tarik', 'Enam daya tarik utama: panorama puncak, batu gajah ikonik, jalur trekking, udara sejuk, sunrise, dan wisata minim keramaian.'),
      shot('selo-info', 'Info kunjungan: jam operasional, tiket masuk, barang yang perlu dibawa, dan tips berkunjung.'),
    ],
    tpq: [
      shot('tpq-beranda', 'Beranda penuh warna yang menyapa anak-anak dan menjelaskan apa saja yang bisa dipelajari.'),
      shot('tpq-sholat', 'Tata cara sholat dalam kartu bergambar, dari niat sampai salam.'),
      shot('tpq-asmaul-husna', 'Kartu 99 Asmaul Husna dengan tulisan Arab, latin, dan artinya.'),
      shot('tpq-kisah-nabi', 'Daftar 25 nabi dan rasul. Setiap nama membuka halaman kisahnya sendiri.'),
      shot('tpq-kuis', 'Kuis pilihan ganda untuk menguji pemahaman setelah belajar.'),
    ],
    masjid: [
      shot('masjid-beranda', 'Beranda website masjid: sambutan, tentang kami, dan galeri foto masjid serta kegiatannya.'),
      shot('masjid-profil', 'Halaman profil berisi sejarah dari mushola kecil hingga menjadi masjid, serta visi dan misi.'),
    ],
    retail: [
      shot('retail-dashboard', 'Dashboard toko: jumlah transaksi, penjualan, laba rugi, pengeluaran, dan produk terlaris, dengan menu samping bertingkat.'),
      shot('retail-kasir', 'Halaman kasir untuk memilih produk, mengisi jumlah, dan memproses transaksi.'),
      shot('retail-produk', 'Manajemen produk: tambah produk per kategori dan laporan stok.'),
      shot('retail-transaksi', 'Rekap transaksi harian, bulanan, dan tahunan.'),
      shot('retail-login', 'Halaman login sebelum masuk ke aplikasi.'),
    ],
    quinn: [
      shot('quinn-toko', 'Etalase toko dengan pencarian, filter kategori, dan slider promo.'),
      shot('quinn-detail', 'Detail produk berisi harga, kategori, stok, deskripsi, dan tombol beli di Shopee, Tokopedia, atau Lazada.'),
      shot('quinn-admin-barang', 'Panel admin: daftar barang beserta harga dan stok, dengan tombol edit dan hapus.'),
      shot('quinn-admin-keuangan', 'Rekap keuangan: total pemasukan, pengeluaran, saldo, dan form tambah transaksi.'),
      shot('quinn-login', 'Halaman login admin.'),
    ],
    ar: [
      shot('ar-mulai', 'Layar pembuka sebelum kamera aktif. Setelah Mulai AR ditekan, model 3D tengkorak muncul di atas marker.'),
    ],
    azr: [
      shot('azr-beranda', 'Beranda bergaya Spotify: album unggulan, rilisan terbaru, artis populer, antrean lagu, dan pemutar di bawah.'),
      shot('azr-artis', 'Halaman artis berisi profil, daftar lagu, artis serupa, dan riwayat putar.'),
    ],
    lapor: [
      shot('lapor-kurva-s', 'Kurva-S rencana vs realisasi proyek gedung kantor 2 lantai. Di minggu ke-6 realisasi 33,54% dari rencana 30,41%, deviasi +3,14%.'),
      shot('lapor-ringkasan', 'Ringkasan dashboard: minggu berjalan, rencana, realisasi, SPI 1,103, jumlah item yang perlu direview, dan status kontrak.'),
      shot('lapor-review', 'Antrian Review AI: volume tidak wajar dan pekerjaan di luar RAB (potensi CCO) ditahan sampai disetujui pengawas.'),
      shot('lapor-progres', 'Progres per item RAB: bobot, volume kontrak, volume terpasang, dan persentase progres.'),
      shot('lapor-evaluasi', 'Evaluasi terhadap data berlabel manual: precision 0,98, recall 1,00, dan F1 0,99 pada data contoh minggu 1–6.'),
    ],
    nara: [
      shot('nara-topup', 'Kasus top up belum masuk: Nara mengecek transaksi, menemukan dana tertahan di settlement, lalu langsung memasukkan saldonya. Diagram di kanan menyala mengikuti langkah agent.'),
      shot('nara-pesanan', 'Kasus pesanan makanan terlambat: Nara menghubungi resto, menjelaskan penyebabnya, lalu menawarkan pilihan tunggu dengan voucher atau batal dengan refund.'),
      shot('nara-flow', 'Editor flow: input, parsing, otak AI, database, aksi keuangan, keamanan, operasional, dan output, mirip workflow n8n.'),
      shot('nara-database', 'Tab Database: data dummy pengguna dan saldo, tiket, voucher, audit log setiap aksi agent, dan mitra driver.'),
    ],
    porto: [
      shot('porto-beranda', 'Beranda situs ini: perkenalan singkat, tombol kontak, dan foto profil di atas lingkaran biru.'),
      shot('porto-proyek', 'Daftar proyek dengan filter. Setiap kartu bisa dibuka untuk melihat gambar dan detailnya.'),
    ],
  };

  AZ.data = {
    name: 'Muhammad Azrul Wicaksono',
    email: '', // isi dengan email Anda, mis. 'nama@gmail.com' (kosong = baris email disembunyikan)
    location: 'Jawa Timur, Indonesia',
    photo: 'assets/azrul.webp',
    study: 'Teknik Informatika',
    campus: 'Universitas Muhammadiyah Sidoarjo',

    nav: [
      { id: 'beranda', label: 'Beranda' },
      { id: 'tentang', label: 'Tentang Saya' },
      { id: 'proyek', label: 'Proyek' },
      { id: 'desain', label: 'Desain' },
      { id: 'pengalaman', label: 'Pengalaman' },
      { id: 'pendidikan', label: 'Pendidikan' },
      { id: 'kontak', label: 'Kontak' },
    ],

    // angka di beranda dihitung otomatis dari daftar proyek (lihat app.ts)
    highlights: [],

    about: [
      'Saya Azrul, mahasiswa Teknik Informatika di Universitas Muhammadiyah Sidoarjo. Saya senang membangun hal yang bisa langsung dipakai orang: website, aplikasi, game edukasi, dan belakangan ini AI.',
      'Banyak karya saya lahir dari kebutuhan di sekitar: game edukasi Batik Jetis untuk siswa SD, website wisata Bukit Selo Gajah, web belajar Islam untuk anak TPQ, dan website masjid. Saya juga membuat aplikasi PHP dan Laravel seperti kasir retail dan panel admin toko online.',
      'Di bidang AI, saya membuat Lapor-AI untuk mengubah laporan harian proyek konstruksi menjadi kurva-S, dan Nara, AI agent customer care yang bisa mengecek data dan mengambil tindakan. Saat ini saya juga menyelesaikan skripsi tentang klasifikasi kepuasan pengguna Mobile JKN.',
    ],

    skills: [
      { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'Bootstrap'] },
      { title: 'Backend & Database', items: ['PHP', 'Laravel', 'Node.js', 'MySQL / MariaDB'] },
      { title: 'AI & Data', items: ['Claude API', 'AI agent & tools', 'n8n', 'Python', 'Streamlit', 'pandas', 'Scikit-learn'] },
      { title: 'Desain', items: ['Canva', 'Figma', 'Figma Make'] },
      { title: 'Game, 3D & AR', items: ['Unity (C#)', 'HTML5 Canvas', 'GSAP', 'A-Frame', 'AR.js'] },
    ],

    filters: [
      { id: 'all', label: 'Semua' },
      { id: 'ai', label: 'AI' },
      { id: 'web', label: 'Web' },
      { id: 'app', label: 'Aplikasi' },
      { id: 'play', label: 'Game & AR' },
      { id: 'data', label: 'Data' },
    ],

    projects: [
      {
        id: 'lapor', featured: true, status: 'Prototipe', kind: 'AI · Manajemen konstruksi', cats: ['ai', 'data'],
        title: 'Lapor-AI',
        text: 'Mengubah laporan harian proyek konstruksi dari chat WhatsApp menjadi progres fisik, kurva-S, deviasi, dan SPI secara otomatis.',
        points: ['AI (Claude) mengekstrak volume, satuan, dan lokasi, lalu memetakannya ke kode RAB', 'Validasi aturan teknik sipil dan review manusia sebelum masuk kurva-S', 'Dua mesin (AI dan aturan) untuk dibandingkan, plus evaluasi precision, recall, F1', 'Ekspor laporan Excel lengkap dengan grafik'],
        tags: ['Python', 'Streamlit', 'Claude API', 'pandas'],
        repo: GH + 'lapor-ai', shots: SHOTS.lapor,
      },
      {
        id: 'nara', featured: true, status: 'Prototipe', kind: 'AI agent · Customer care', cats: ['ai', 'web'],
        title: 'Nara · AI Agent Customer Care',
        text: 'AI agent layanan pelanggan (simulasi ojol & e-wallet) yang mengecek data, mencari penyebab masalah, lalu mengambil tindakan sendiri.',
        points: ['Tools di simulasi: refund, voucher, rekonsiliasi saldo, amankan akun, laporkan mitra, eskalasi', 'Mendeteksi emosi dan niat pengguna, serta mengingat konteks percakapan', 'Mode offline berbasis aturan dan mode Claude, plus workflow n8n siap impor', 'Simulator web ala WhatsApp dengan diagram alur yang menyala langkah demi langkah'],
        tags: ['Node.js', 'Claude API', 'n8n'],
        repo: GH + 'nara-ai-agent', shots: SHOTS.nara,
      },
      {
        id: 'jetis', featured: true, kind: 'Game edukasi · Web', cats: ['play', 'web'],
        title: 'Petualangan Batik Jetis',
        text: 'Game edukasi untuk siswa SD yang memadukan Batik Jetis Sidoarjo dengan IPA, dari canting sampai makna motif.',
        points: ['Alur cerita dengan dialog dan level bertahap', 'Bisa dimainkan di browser HP dan laptop, termasuk layar penuh', 'Budaya lokal sebagai konteks belajar sains'],
        tags: ['HTML5', 'JavaScript', 'Gamifikasi'],
        demo: IO + 'Jetis/', repo: GH + 'Jetis', shots: SHOTS.jetis,
      },
      {
        id: 'selo', featured: true, kind: 'Website wisata', cats: ['web'],
        title: 'Selo Gajah · Wisata Bukit Kediri',
        text: 'Website promosi wisata Bukit Selo Gajah, bukit dengan batu besar yang dari kejauhan menyerupai gajah tidur.',
        points: ['Sejarah dan asal nama, daya tarik, lokasi, fasilitas', 'Informasi kunjungan untuk calon wisatawan'],
        tags: ['HTML', 'CSS', 'JavaScript'],
        demo: IO + 'Wisata-Selogajah/', repo: GH + 'Wisata-Selogajah', shots: SHOTS.selo,
      },
      {
        id: 'tpq', featured: true, kind: 'Web edukasi anak', cats: ['web'],
        title: 'Belajar Islam Anak · TPQ Al-Amin',
        text: 'Website belajar Islam yang ramah anak: rukun iman, tata cara sholat, kisah 25 nabi, Asmaul Husna, dan kuis.',
        points: ['Rukun Iman, Rukun Islam, tata cara wudhu dan sholat', 'Kisah 25 nabi, nama malaikat, dan Asmaul Husna', 'Kuis untuk menguji pemahaman'],
        tags: ['HTML', 'CSS', 'JavaScript'],
        demo: IO + 'TPQ_Al-Amin/', repo: GH + 'TPQ_Al-Amin', shots: SHOTS.tpq,
      },
      {
        id: 'masjid', kind: 'Website komunitas', cats: ['web'],
        title: 'Website Masjid Baitul Taibin',
        text: 'Profil masjid, sejarah, jadwal acara, dokumentasi kegiatan, dan kontak.',
        tags: ['HTML', 'CSS', 'AOS'],
        demo: IO + 'Masjid-Baitut-Taibin/', repo: GH + 'Masjid-Baitut-Taibin', shots: SHOTS.masjid,
      },
      {
        id: 'retail', kind: 'Aplikasi web', cats: ['app'],
        title: 'Retail · Aplikasi Kasir',
        text: 'Aplikasi kasir dengan dashboard, manajemen produk dan kategori, serta rekap transaksi harian sampai tahunan.',
        tags: ['PHP', 'MySQL'],
        repo: GH + 'Retail', shots: SHOTS.retail,
      },
      {
        id: 'quinn', kind: 'E-commerce', cats: ['app'],
        title: 'Quinn Fashion',
        text: 'Toko online fashion dengan etalase produk dan panel admin untuk barang, kategori, slider promo, dan keuangan.',
        tags: ['PHP', 'MySQL', 'Bootstrap'],
        repo: GH + 'Quinn_Fashion', shots: SHOTS.quinn,
      },
      {
        id: 'ar', kind: 'WebAR edukasi', cats: ['play'],
        title: 'Tengkorak AR',
        text: 'Model 3D tengkorak manusia muncul saat kamera diarahkan ke marker, lengkap dengan info bagiannya.',
        tags: ['A-Frame', 'AR.js'],
        demo: IO + 'skul_ar/', repo: GH + 'skul_ar', shots: SHOTS.ar,
      },
      {
        id: 'azr', kind: 'Frontend', cats: ['web'],
        title: 'AZR Studio · Streaming Musik',
        text: 'Tampilan depan web streaming musik ala Spotify: album, artis, antrean, dan pemutar lagu.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        demo: IO + 'azrstudio/', repo: GH + 'azrstudio', shots: SHOTS.azr,
      },
      {
        id: 'jkn', status: 'Sedang berjalan', kind: 'Skripsi · Machine learning', cats: ['data', 'ai'], icon: 'chart',
        title: 'Klasifikasi Kepuasan Pengguna Mobile JKN',
        text: 'Membandingkan Random Forest, SVM, dan CatBoost untuk mengklasifikasikan kepuasan pengguna Mobile JKN, dengan validasi statistik.',
        tags: ['Python', 'Scikit-learn', 'CatBoost'],
      },
      {
        id: 'debt', status: 'Dalam pengembangan', kind: 'Game simulasi PC', cats: ['play'], icon: 'game',
        title: 'Debt Collector Simulator',
        text: 'Game simulasi bergaya Landlord Simulator: mengelola modal, menyalurkan pinjaman, dan menagih utang.',
        tags: ['Unity', 'C#'],
      },
      {
        id: 'kost', status: 'Dalam pengembangan', kind: 'Aplikasi web', cats: ['app'], icon: 'home',
        title: 'Kost · Manajemen Kamar',
        text: 'Aplikasi Laravel dengan autentikasi untuk mengelola kamar kos. Fitur kelola kamar masih dikerjakan.',
        tags: ['Laravel', 'Blade'],
        repo: GH + 'kost',
      },
      {
        id: 'porto', kind: 'Website pribadi', cats: ['web'], shots: SHOTS.porto,
        title: 'Website Portofolio Ini',
        text: 'Satu halaman yang ringan dan responsif, dibangun dengan Vue.js, TypeScript, dan GSAP.',
        tags: ['Vue.js', 'TypeScript', 'GSAP'],
      },
    ],

    /* ---------- Desain (Canva & Figma) ---------- */
    designs: [
      {
        id: 'kkn-idcard', title: 'ID Card & Publikasi KKN-P 64', kind: 'Desain grafis · Divisi PDD',
        tools: ['Canva'],
        text: 'Desain ID card untuk DPL dan seluruh anggota KKN-P 64 Desa Tiron, ditambah banner "Meet Our Team" untuk publikasi. Setiap kartu memakai tata letak yang sama: nama divisi besar bertumpuk, foto potongan dengan garis putih, dan label nama, dalam warna biru khas kelompok.',
        points: ['13 desain: 1 banner tim, 1 kartu DPL, dan 11 kartu anggota per divisi', 'Satu sistem visual yang konsisten untuk semua divisi: Ketua, Sekretaris, Bendahara, Acara, Humas, Logistik, dan PDD'],
        shots: [
          { src: 'assets/desain/kkn64-meet-our-team.webp', caption: 'Banner "Meet Our Team": official line up KKN-P 64 2026 dengan tagline "Bersama, Berkarya, Berdampak".' },
          { src: 'assets/desain/idcard-dpl.webp', caption: 'ID card Dosen Pembimbing Lapangan (DPL): Ali Akbar, S.T., M.T.' },
          { src: 'assets/desain/idcard-ketua-nicho.webp', caption: 'ID card Ketua: Nicho.' },
          { src: 'assets/desain/idcard-pdd-azrul.webp', caption: 'ID card divisi PDD: Azrul (saya).' },
          { src: 'assets/desain/idcard-sekretaris-caca.webp', caption: 'ID card Sekretaris: Caca.' },
          { src: 'assets/desain/idcard-bendahara-imel.webp', caption: 'ID card Bendahara: Imel.' },
          { src: 'assets/desain/idcard-acara-sania.webp', caption: 'ID card divisi Acara: Sania.' },
          { src: 'assets/desain/idcard-acara-bila.webp', caption: 'ID card divisi Acara: Bila.' },
          { src: 'assets/desain/idcard-humas-ilma.webp', caption: 'ID card divisi Humas: Ilma.' },
          { src: 'assets/desain/idcard-humas-iqbal.webp', caption: 'ID card divisi Humas: Iqbal.' },
          { src: 'assets/desain/idcard-logistik-jihan.webp', caption: 'ID card divisi Logistik: Jihan.' },
          { src: 'assets/desain/idcard-logistik-dhimas.webp', caption: 'ID card divisi Logistik: Dhimas.' },
          { src: 'assets/desain/idcard-pdd-kevin.webp', caption: 'ID card divisi PDD: Kevin.' },
        ],
      },
      {
        id: 'figma-ehealth', title: 'E-Health Desa', kind: 'Desain UI · Sistem informasi kesehatan desa',
        tools: ['Figma'], layout: 'screens',
        text: 'Rancangan antarmuka sistem kesehatan desa untuk tiga peran: Admin desa, Dokter, dan Warga. Warga bisa mendaftar berobat, mengambil antrian, berkonsultasi online, dan melihat resep serta data kesehatannya, sementara dokter mencatat pemeriksaan dan admin mengelola data, jadwal, dan laporan.',
        points: ['21 layar: login, registrasi, dan dashboard untuk tiap peran', 'Admin: data warga dan dokter, jadwal, antrian, rekam medis, laporan, pengaturan', 'Warga: daftar berobat, antrian, konsultasi dan chat dokter, resep, data kesehatan, keluarga'],
        shots: [
          { src: 'assets/desain/ehealth/admin-dashboard.webp', caption: 'Admin · Dashboard: kartu statistik, aktivitas terbaru, dan jadwal mendatang.' },
          { src: 'assets/desain/ehealth/warga-dashboard.webp', caption: 'Warga · Dashboard: ringkasan, menu layanan utama, dan data kesehatan terkini.' },
          { src: 'assets/desain/ehealth/admin-data-dokter.webp', caption: 'Admin · Data Dokter: kartu profil dokter dengan spesialisasi, kontak, dan rating.' },
          { src: 'assets/desain/ehealth/admin-jadwal-dokter.webp', caption: 'Admin · Jadwal Dokter: kalender mingguan jam praktik setiap dokter.' },
          { src: 'assets/desain/ehealth/warga-konsultasi-online.webp', caption: 'Warga · Konsultasi Online: daftar dokter dan tenaga kesehatan yang bisa dihubungi.' },
          { src: 'assets/desain/ehealth/login.webp', caption: 'Halaman login dengan pilihan peran pengguna.' },
          { src: 'assets/desain/ehealth/registrasi.webp', caption: 'Registrasi pasien bertahap, dimulai dari data pribadi.' },
          { src: 'assets/desain/ehealth/admin-data-warga.webp', caption: 'Admin · Data Warga: statistik warga dan tabel warga terdaftar beserta status kesehatannya.' },
          { src: 'assets/desain/ehealth/dokter-dashboard.webp', caption: 'Dokter · Dashboard: pasien hari ini, jadwal mendatang, riwayat konsultasi, dan rating.' },
          { src: 'assets/desain/ehealth/admin-antrian.webp', caption: 'Admin · Manajemen Antrian: nomor yang sedang dipanggil dan daftar pasien menunggu.' },
          { src: 'assets/desain/ehealth/admin-rekam-medis.webp', caption: 'Admin · Rekam Medis: statistik dan tabel rekam medis pasien.' },
          { src: 'assets/desain/ehealth/admin-laporan.webp', caption: 'Admin · Laporan Kesehatan: filter periode, ringkasan kunjungan, grafik, dan penyakit terbanyak.' },
          { src: 'assets/desain/ehealth/admin-pengaturan.webp', caption: 'Admin · Pengaturan Sistem: profil desa dan manajemen pengguna.' },
          { src: 'assets/desain/ehealth/dokter-pemeriksaan.webp', caption: 'Dokter · Pemeriksaan & Konsultasi: form keluhan, diagnosis, rencana pengobatan, dan catatan.' },
          { src: 'assets/desain/ehealth/dokter-riwayat.webp', caption: 'Dokter · Riwayat Konsultasi: gejala, diagnosis, pengobatan, dan catatan per pasien.' },
          { src: 'assets/desain/ehealth/warga-daftar-berobat.webp', caption: 'Warga · Daftar Berobat: pilih poli, tanggal dan jam, lalu isi data pasien.' },
          { src: 'assets/desain/ehealth/warga-chat.webp', caption: 'Warga · Chat konsultasi langsung dengan dokter.' },
          { src: 'assets/desain/ehealth/warga-antrian.webp', caption: 'Warga · Antrian Berobat: nomor antrian aktif dan daftar antrian hari ini.' },
          { src: 'assets/desain/ehealth/warga-resep.webp', caption: 'Warga · Resep Obat: resep aktif dan detail resep terbaru.' },
          { src: 'assets/desain/ehealth/warga-data-kesehatan.webp', caption: 'Warga · Data Kesehatan: metrik kesehatan terkini dan tren 30 hari.' },
          { src: 'assets/desain/ehealth/warga-keluarga.webp', caption: 'Warga · Keluarga: anggota keluarga dan pohon keluarga.' },
        ],
        link: 'https://www.figma.com/design/LL3wJE5jBgtOmhrVEGN2yr/Untitled',
        linkLabel: 'Buka di Figma',
      },
      {
        id: 'figma-retail', title: 'Retail Inventory Management System', kind: 'Desain UI · Prototipe',
        tools: ['Figma Make'],
        text: 'Prototipe antarmuka sistem manajemen inventaris retail yang dibuat di Figma Make. Buka di Figma untuk melihat dan mencoba prototipenya.',
        shots: [],
        link: 'https://www.figma.com/make/ogoSWui23mafxlt81Gk6tq/Retail-Inventory-Management-System--Community-',
        linkLabel: 'Buka di Figma',
      },
    ],

    experience: [
      {
        type: 'Pengabdian', title: 'KKN Pencerahan Kelompok 64', org: 'Divisi PDD · Universitas Muhammadiyah Sidoarjo',
        place: 'Desa Tiron, Kec. Banyakan, Kab. Kediri', period: 'Agustus 2026',
        text: 'Bersama Kelompok 64, saya tinggal dan berkegiatan di Desa Tiron, menjalankan program bersama warga, perangkat desa, dan sekolah.',
        points: ['Anggota divisi PDD: membuat desain ID card dan publikasi tim di Canva', 'Pemberdayaan UMKM: menjadi pemateri sosialisasi e-commerce di balai desa', 'Kegiatan ecoprint bersama siswa sekolah dasar: mencetak motif daun dan bunga di atas kain', 'Kunjungan dan kegiatan bersama guru di sekolah sekitar desa'],
        media: [
          { src: 'assets/kegiatan/kkn-ecoprint.webp', caption: 'Kegiatan ecoprint bersama siswa: kain bermotif daun dan bunga hasil karya anak-anak.' },
          { src: 'assets/kegiatan/kkn-pembukaan.webp', caption: 'Kelompok 64 bersama warga Desa Tiron di balai desa.' },
          { src: 'assets/kegiatan/kkn-sekolah-2.webp', caption: 'Foto bersama para guru saat kegiatan di sekolah.' },
          { src: 'assets/kegiatan/kkn-posko.webp', caption: 'Di posko KKN-P 64 Tiron.' },
          { src: 'assets/kegiatan/kkn-ibu-ibu.webp', caption: 'Bersama ibu-ibu warga Desa Tiron.' },
          { src: 'assets/kegiatan/kkn-sekolah-1.webp', caption: 'Kelompok 64 bersama guru di halaman sekolah.' },
        ],
      },
      {
        type: 'Pemateri', title: 'Sosialisasi E-commerce untuk UMKM', org: 'Program pemberdayaan UMKM · KKN-P 64',
        place: 'Balai Desa Tiron, Kab. Kediri', period: '2 Agustus 2026',
        text: 'Menjadi pemateri sosialisasi e-commerce di depan warga dan pelaku UMKM Desa Tiron, mengenalkan cara memasarkan produk secara online agar pembelinya menjangkau lebih luas.',
        points: ['Membawakan materi langsung di depan warga, dibantu tayangan di layar'],
        media: [
          { src: 'assets/kegiatan/umkm-ecommerce-3.webp', video: 'assets/kegiatan/umkm-ecommerce-3.mp4', caption: 'Saya membawakan materi sosialisasi e-commerce di balai desa (video).' },
          { src: 'assets/kegiatan/umkm-ecommerce-2.webp', video: 'assets/kegiatan/umkm-ecommerce-2.mp4', caption: 'Menjelaskan materi di depan warga dan pelaku UMKM (video).' },
          { src: 'assets/kegiatan/umkm-ecommerce-1.webp', video: 'assets/kegiatan/umkm-ecommerce-1.mp4', caption: 'Suasana sosialisasi, materi ditayangkan di layar (video).' },
          { src: 'assets/kegiatan/kkn-pembukaan-2.webp', caption: 'Foto bersama warga peserta di balai desa usai kegiatan.' },
        ],
      },
      {
        type: 'Magang', title: 'Magang Web Developer', org: 'Quinn Fashion',
        place: 'Jawa Timur', period: 'Juli – Agustus 2025',
        text: 'Mengikuti program magang sebagai web developer selama satu bulan, 21 Juli sampai 21 Agustus 2025.',
        points: [],
        media: [{ src: 'assets/sertifikat/magang-quinn-fashion.webp', caption: 'Sertifikat magang Web Developer di Quinn Fashion.' }],
      },
      {
        type: 'Kerja', title: 'Staff Kitchen', org: 'Usaha katering',
        place: 'Jawa Timur', period: '2022 – 2023',
        text: 'Bekerja sebagai staf dapur di usaha katering.',
        points: [],
        media: [],
      },
      {
        type: 'PKL', title: 'Praktik Kerja Lapangan', org: 'Arga Computer',
        place: 'Mojoanyar, Mojokerto', period: 'Juli – November 2021',
        text: 'PKL saat SMK di bidang Teknik Komputer dan Jaringan, dengan predikat Sangat Memuaskan.',
        points: ['Perakitan PC dan pengenalan hardware dan software', 'Instalasi sistem operasi, driver, dan aplikasi', 'Pembuatan jaringan LAN dan jaringan nirkabel'],
        media: [],
      },
    ],

    education: [
      {
        school: 'Universitas Muhammadiyah Sidoarjo', degree: 'S1 Teknik Informatika', period: 'Semester 7 · 2026',
        text: 'Skripsi: perbandingan Random Forest, SVM, dan CatBoost dengan validasi statistik untuk klasifikasi kepuasan pengguna aplikasi Mobile JKN.',
        points: ['KKN Pencerahan Kelompok 64 di Desa Tiron, Kediri (2026)'],
      },
      {
        school: 'SMK Raden Rahmat Mojosari', degree: 'Teknik Komputer dan Jaringan', period: 's.d. 2023',
        text: 'Jurusan Teknik Komputer dan Jaringan di Mojokerto.',
        points: ['PKL di Arga Computer (2021), predikat Sangat Memuaskan', 'Uji Kompetensi Keahlian (2023), nilai 87, Sangat Kompeten'],
      },
    ],

    certs: [
      {
        id: 'magang', title: 'Magang Web Developer', issuer: 'Quinn Fashion', date: '21 Juli – 21 Agustus 2025',
        text: 'Menyelesaikan program magang sebagai web developer selama satu bulan.',
        shots: [{ src: 'assets/sertifikat/magang-quinn-fashion.webp', caption: 'Sertifikat magang Web Developer di Quinn Fashion, 21 Juli – 21 Agustus 2025.' }],
      },
      {
        id: 'mubes', title: 'Panitia Mubes HIMAMEGMA 2026', issuer: 'Himpunan Mahasiswa Prodi Teknik Mesin · UMSIDA', date: '11 Juli 2026',
        text: 'Menjadi panitia Musyawarah Besar Himpunan Mahasiswa Teknik Mesin.',
        shots: [{ src: 'assets/sertifikat/mubes-himamegma-2026.webp', caption: 'Sertifikat panitia Mubes HIMAMEGMA 2026 dari SIPRESMAWA UMSIDA.' }],
      },
      {
        id: 'ukk', title: 'Uji Kompetensi Keahlian: Teknik Komputer dan Jaringan', issuer: 'UPT Balai Latihan Kerja Mojokerto', date: '27 Februari – 9 Maret 2023',
        text: 'Diuji pada desain jaringan, pengkabelan LAN dan fiber optik, access point, serta MikroTik (DHCP, hotspot, limit bandwidth, web proxy).',
        grade: 'Nilai 87 · Sangat Kompeten',
        shots: [
          { src: 'assets/sertifikat/ukk-tkj.webp', caption: 'Sertifikat Uji Kompetensi Keahlian (UKK) Teknik Komputer dan Jaringan.' },
          { src: 'assets/sertifikat/ukk-tkj-nilai.webp', caption: 'Daftar nilai UKK: nilai akhir 87, predikat Sangat Kompeten.' },
        ],
      },
      {
        id: 'pkl', title: 'Praktik Kerja Lapangan (PKL)', issuer: 'Arga Computer · SMK Raden Rahmat Mojosari', date: '12 Juli – 16 November 2021',
        text: 'Perakitan PC, instalasi sistem operasi dan driver, serta pembuatan jaringan LAN dan nirkabel.',
        grade: 'Rata-rata 88 · Sangat Memuaskan',
        shots: [
          { src: 'assets/sertifikat/pkl-arga-computer.webp', caption: 'Sertifikat PKL / On Job Training di Arga Computer.' },
          { src: 'assets/sertifikat/pkl-arga-computer-nilai.webp', caption: 'Daftar nilai PKL: rata-rata 88, predikat Sangat Memuaskan.' },
        ],
      },
    ],
    showCerts: true,

    socials: [
      { label: 'GitHub', url: 'https://github.com/azrullio' },
      // isi url di bawah, mis. 'https://www.linkedin.com/in/nama-anda' (kosong = disembunyikan)
      { label: 'LinkedIn', url: '' },
      { label: 'Instagram', url: '' },
    ],
  };
})();
