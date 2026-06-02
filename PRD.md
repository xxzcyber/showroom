# PRODUCT REQUIREMENT DOCUMENT (PRD)
## PROYEK: WEBSITE PORTAL & SHOWROOM "MOBILSECONDMEDAN"

---

## 📌 1. IDENTITAS WEBSITE & PROFIL BISNIS

| Komponen | Deskripsi |
| :--- | :--- |
| **Nama Website** | **MOBILSECONDMEDAN** |
| **Jenis Bisnis** | Showroom Mobil Bekas (Second) Premium & Tepercaya |
| **Target Wilayah** | Medan & Sekitarnya (Deli Serdang, Binjai, Langkat, Karo, dsb.) |
| **Lokasi Showroom** | **Mobil Second Medan (CANGKIR)**<br>Jl. Cangkir No.24, Sei Putih Tengah, Kec. Medan Petisah, Kota Medan, Sumatera Utara 20113 |
| **Integrasi Medsos** | - **Instagram**: [@mobilsecondmedan](https://www.instagram.com/mobilsecondmedan/)<br>- **TikTok**: [@mobilsecond.medan](https://www.tiktok.com/@mobilsecond.medan) |
| **Tipografi Utama** | Font **Inter** (Google Fonts) untuk estetika bersih, mewah, dan modern |

### 📞 Kontak WhatsApp Admin & Sales (Rotasi / Pilihan Langsung)
Sistem harus menyediakan akses cepat ke kontak perwakilan showroom berikut:
1. **Wendy**: `082361207557`
2. **Ivan**: `085173038781`
3. **Bayu**: `081246818167`
4. **Erik**: `081269317353`
5. **Felix**: `087786378284`

---

## 🔐 2. SISTEM AUTENTIKASI (HANYA UNTUK ADMIN)

Sistem ini didesain tanpa registrasi pengunjung (pengunjung umum dapat mengakses seluruh fitur publik tanpa perlu login). Akses masuk hanya diperuntukkan bagi Admin Showroom melalui halaman khusus.

### 2.1. Spesifikasi Login
- **URL Login**: `/admin/login` (atau URL tersembunyi demi keamanan)
- **Kredensial Single-Account (Hardcoded/Seeded)**:
  - **Email**: `ko@mobil.com`
  - **Password**: `mobilsecondmedan`
- **Hak Akses Admin (Full Access)**:
  - Tambah unit mobil baru (beserta foto multi-angle dan spesifikasi lengkap).
  - Edit data unit mobil yang sudah terdaftar.
  - Ubah status unit mobil (Tersedia, Booking, Terjual).
  - Hapus unit mobil dari database.
  - Kelola komentar pengunjung di forum mobil (Hapus & tandai sebagai spam).
  - Membaca, membalas, dan mengelola pesan/chat privat dari pengunjung.
  - Membuat postingan/pengumuman ke forum diskusi internal website.

---

## 🏠 3. STRUKTUR HALAMAN UTAMA (HOME)

Halaman utama dirancang dengan UI mewah, minimalis, dan profesional yang menonjolkan kredibilitas serta keaslian showroom.

### 3.1. Header & Navigasi
- **Logo Web**: Logo representatif "MOBILSECONDMEDAN" yang jika diklik mengarah ke halaman utama atau langsung menautkan postingan promo ke Instagram/TikTok resmi.
- **Menu Navigasi**: Home, Katalog Mobil, Bandingkan, Lokasi & Kontak, dan Forum.

### 3.2. Hero Section (Premium Banner)
- Banner visual berkualitas tinggi yang menampilkan mobil-mobil andalan di showroom.
- CTA (Call to Action) utama: "Jelajahi Katalog" dan "Hubungi WhatsApp".

### 3.3. Jaminan Rasa Aman (Trust Elements Badge)
Bagian khusus yang menerangkan keunggulan unit di showroom:
*   **❌ Bebas Tabrak & Banjir**: Jaminan bahwa semua unit telah diinspeksi secara ketat.
*   **📄 Dokumen 100% Lengkap**: Keabsahan surat-surat kendaraan (STNK, BPKB, dan Faktur Pembelian Asli).
*   **🔍 Garansi Mesin**: Ketersediaan opsi garansi mesin (tergantung kesepakatan unit).
*   **🚗 Inspeksi Pihak Ketiga**: Pembeli dipersilakan membawa mekanik pribadi atau menggunakan jasa inspeksi independen (seperti Otospector).

### 3.4. Daftar Mobil Terbaru (Latest Listings Grid)
- Menampilkan 4–8 unit mobil terbaru yang baru saja diunggah oleh admin.
- Setiap kartu mobil menampilkan foto utama, harga, tahun, transmisi, jarak tempuh, serta label status (Tersedia 🟢, Booking 🟡, Terjual 🔴).

### 3.5. Testimoni Pelanggan
- Galeri foto serah terima unit (foto asli pelanggan bersama mobil barunya di depan showroom) untuk membangun kepercayaan sosial (*social proof*).
- Ulasan singkat dari pembeli asli mengenai keramahan sales, kondisi unit, dan kemudahan proses administrasi.

### 3.6. Instagram Feed Widget
- Layout grid dinamis yang menampilkan 4–6 postingan Instagram terbaru dari akun `@mobilsecondmedan`.
- Tautan langsung ke masing-masing postingan di Instagram resmi.

### 3.7. Google Maps Integration & Footer
- Peta interaktif Google Maps yang menunjuk ke Jl. Cangkir No.24, Sei Putih Tengah, Kec. Medan Petisah, Medan.
- Jam operasional showroom dan kontak sales yang tersemat rapi.

---

## 📚 4. HALAMAN KATALOG & FITUR PENCARIAN

Halaman ini berfungsi sebagai portal utama bagi pengunjung untuk mencari kendaraan impian secara spesifik.

### 4.1. Panel Filter Detail (Sidebar / Collapsible Filter)
Pengunjung dapat memfilter mobil berdasarkan kriteria berikut:
1.  **Merek & Model**: Teks pencarian atau dropdown dinamis (contoh: Toyota Avanza, Honda Civic).
2.  **Rentang Harga**: Slider interaktif dengan nilai minimum dan maksimum (contoh: Rp 50 Juta - Rp 1 Miliar).
3.  **Tahun Produksi**: Rentang tahun (contoh: 2015 s.d. 2026).
4.  **Jenis Bahan Bakar**: Pilihan checkbox/radio (Bensin, Diesel, Listrik, Hybrid).
5.  **Transmisi**: Pilihan Manual atau Matik (Automatic).
6.  **Kondisi**: Baru / Bekas (Second).
7.  **Jarak Tempuh (Kilometer)**: Slider atau pilihan batas kilometer (contoh: < 50.000 km).

### 4.2. Opsi Pengurutan (Sorting)
- Harga Terendah (Lowest Price)
- Harga Tertinggi (Highest Price)
- Tahun Terbaru (Newest Year)
- Rekomendasi Terbaik (Featured/Best Match)

### 4.3. Status Unit
Setiap mobil wajib memiliki penanda visual status yang jelas:
-   **🟢 Tersedia**: Unit siap dilihat langsung di showroom Cangkir atau dibawa pulang.
-   **🟡 Booking / Titip**: Unit telah dipanjar atau dalam proses transaksi pembayaran.
-   **🔴 Terjual**: Unit yang sudah dibeli pelanggan. **Catatan Penting**: Unit yang sudah terjual tidak boleh dihapus dari katalog agar tetap membangun portofolio kredibilitas showroom, namun diberi tanda "TERJUAL" yang kontras dan tombol aksi dinonaktifkan.

---

## 🖼️ 5. HALAMAN DETAIL MOBIL

Halaman detail mobil merupakan fokus utama konversi penjualan. Struktur halaman ini harus menyajikan data selengkap mungkin.

### 5.1. Galeri Multi-Angle Premium
- Menampilkan **minimal 10 - 15 foto** yang mencakup:
  - *Eksterior*: Depan, Belakang, Samping Kanan/Kiri, Detail Velg/Ban, Mesin.
  - *Interior*: Dashboard keseluruhan, Jok depan/belakang, Bagasi, Kilometer aktual (ODOMETER).
- Dilengkapi dengan fitur Zoom / Lightbox dan slider sentuh yang responsif di perangkat seluler.

### 5.2. Spesifikasi Teknis (Tabel Rapi)
Spesifikasi disajikan dalam tabel bergaya minimalis:
- Merek & Model
- Tahun Pembuatan
- Transmisi & Kapasitas Mesin (cc)
- Warna Eksterior & Interior
- Jenis Bahan Bakar
- Jarak Tempuh (KM)
- Masa Berlaku Pajak STNK
- Plat Nomor (Medan / luar daerah)

### 5.3. Sticky Call-to-Action (Seluler & Desktop)
Tombol WhatsApp yang menempel di bagian bawah layar ponsel (*sticky mobile button*) dengan fungsi:
-   **Aksi 1: Chat WhatsApp Langsung (Tanya Ketersediaan)**
    Mengirim pesan otomatis yang disesuaikan dengan unit yang dilihat:
    > *"Halo admin Mobil Second Medan, saya tertarik dengan unit [NAMA MOBIL] (Harga: Rp [HARGA]) yang ada di website. Apakah masih tersedia?"*
-   **Aksi 2: Jadwalkan Test Drive**
    Membuka form popup atau langsung mengarahkan ke WhatsApp sales dengan pesan otomatis:
    > *"Halo admin Mobil Second Medan, saya ingin menjadwalkan test drive untuk unit [NAMA MOBIL] pada tanggal [TANGGAL] jam [WAKTU]. Apakah unit sedang berada di showroom Cangkir?"*

### 5.4. Simulasi Kredit Otomatis
Perhitungan angsuran instan untuk membantu calon pembeli:
-   **Input**:
    - Nilai Uang Muka / DP (Rupiah atau persentase dari harga mobil).
    - Tenor (Pilihan dropdown: 12, 24, 36, 48, atau 60 bulan).
-   **Rumus Sederhana (Estimasi Kasar untuk Simulasi)**:
    - Sisa Pokok Hutang = Harga Mobil - DP.
    - Bunga Tahunan Estimasi (contoh: 5% - 8% flat per tahun).
    - Total Bunga = Sisa Pokok Hutang × Bunga Tahunan × (Tenor / 12).
    - Angsuran per Bulan = (Sisa Pokok Hutang + Total Bunga) / Tenor.
-   *Disertai catatan kaki hukum*: "Estimasi angsuran di atas bersifat simulasi kasar. Angsuran resmi dapat bervariasi sesuai penyedia pembiayaan/leasing resmi partner kami."

### 5.5. Fitur Komentar Publik & Chat Privat Internal
Di bagian bawah detail unit, terdapat dua tab interaksi:
1.  **Komentar Publik (Forum Unit)**:
    - Pengunjung umum dapat menuliskan nama, isi komentar, dan mengirimkannya.
    - Komentar langsung tampil secara publik di bawah detail mobil tersebut setelah divalidasi anti-spam dasar oleh sistem.
2.  **Pesan Privat Internal**:
    - Pengunjung dapat mengirim pesan langsung ke admin tanpa melalui WhatsApp (misalnya jika tidak ingin langsung berpindah aplikasi).
    - Membutuhkan input: Nama, No. HP, dan Isi Pesan.
    - Pesan ini akan masuk ke **Admin Panel** di bagian inbox pesan privat agar admin dapat menindaklanjutinya.

---

## ⚖️ 6. FITUR BANDINGKAN MOBIL (COMPARE)

Memungkinkan pengunjung membandingkan spesifikasi teknis beberapa mobil secara visual side-by-side untuk membantu pengambilan keputusan.

-   **Maksimum Unit**: Pengguna dapat memilih maksimal **3 mobil** untuk dibandingkan sekaligus.
-   **Mekanisme**:
    - Tombol "Bandingkan" (Checkbox / Add to Compare) di setiap kartu mobil pada halaman katalog.
    - Widget melayang (*floating widget*) yang menampilkan mobil yang sedang dipilih untuk dibandingkan.
-   **Tabel Perbandingan Side-by-Side**:
    - Baris 1: Foto Utama & Judul Mobil.
    - Baris 2: Harga Jual.
    - Baris 3: Tahun Produksi & Kondisi.
    - Baris 4: Transmisi & Jenis Bahan Bakar.
    - Baris 5: Jarak Tempuh (Kilometer).
    - Baris 6: Kapasitas Mesin & Fitur Utama.

---

## ⚡ 7. KECEPATAN & OPTIMASI GAMBAR (NON-FUNCTIONAL REQUIREMENTS)

Karena website showroom sangat bergantung pada kekuatan visual (10-15 foto per mobil), optimasi performa adalah prioritas utama untuk mencegah waktu muat halaman yang lambat.

1.  **Lazy Loading**: Gambar hanya akan dimuat ketika area viewport pengguna mendekati posisi gambar tersebut saat digulir (*scroll*).
2.  **Format Gambar Modern**: Semua gambar yang diunggah oleh admin dikonversi dan disimpan secara otomatis ke dalam format `.webp` atau `.avif` untuk kompresi maksimal.
3.  **Kompresi Gambar Otomatis**: Server/sistem backend melakukan kompresi otomatis (reduksi ukuran file tanpa menurunkan kualitas visual yang terlihat secara signifikan/lossy acceptable) sebelum disimpan ke penyimpanan media.

---

## 🔧 8. ADMIN PANEL (SIMPLE & RESPONSIVE DASHBOARD)

Admin Panel didesain sesederhana mungkin namun tetap tangguh untuk kebutuhan operasional harian.

### 8.1. Form Tambah & Edit Mobil
Input form terstruktur yang mempermudah admin memperbarui stok unit:
- Nama / Judul Mobil (contoh: Toyota Avanza Veloz 1.5 Q CVT)
- Harga Jual (Rupiah)
- Tahun Pembuatan
- Pilihan Transmisi (Manual / Otomatis)
- Pilihan Bahan Bakar (Bensin / Diesel / Listrik / Hybrid)
- Jarak Tempuh (KM)
- Status Unit (Dropdown: Tersedia, Booking, Terjual)
- Deskripsi Lengkap & Tambahan Informasi (Spesifikasi opsional, catatan khusus)
- **Modul Upload Multi-Foto**: Area drag-and-drop untuk mengunggah 10-15 foto sekaligus dengan pengaturan foto utama (*thumbnail*).

### 8.2. Moderasi Komentar Publik
- Daftar seluruh komentar publik yang ditulis oleh pengunjung.
- Opsi tindakan:
  - **Hapus**: Menghapus komentar dari basis data.
  - **Spam**: Memblokir komentar sejenis secara otomatis.

### 8.3. Inbox Pesan Privat (Private Chat Reader)
- Menampilkan daftar pesan privat yang masuk dari pengunjung di halaman detail mobil.
- Menampilkan Nama, No. HP, Tanggal Pengiriman, Mobil yang Ditanyakan, dan Detail Pesan.
- Opsi membalas via WhatsApp langsung (tombol klik untuk membuka obrolan WhatsApp ke nomor pengirim dengan template balasan showroom).

---

## 🧪 9. DATA MOBIL AWAL (SEEDER / INITIAL DATA)

Sistem wajib diinisialisasi dengan data dummy berikut untuk kepentingan testing awal:

1.  **Toyota Avanza 2018**
    - Transmisi: Matic
    - Bahan Bakar: Bensin
    - Harga: Rp 110.000.000,-
    - Jarak Tempuh: 45.000 KM
    - Status: Tersedia 🟢
2.  **Honda Civic 2020**
    - Transmisi: Matic
    - Bahan Bakar: Bensin
    - Harga: Rp 280.000.000,-
    - Jarak Tempuh: 30.000 KM
    - Status: Booking 🟡
3.  **Mitsubishi Xpander 2019**
    - Transmisi: Manual
    - Bahan Bakar: Bensin
    - Harga: Rp 160.000.000,-
    - Jarak Tempuh: 50.000 KM
    - Status: Terjual 🔴
