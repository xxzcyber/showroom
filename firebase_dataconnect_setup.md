# PANDUAN INTEGRASI FIREBASE DATA CONNECT (SQL CONNECT)
## SHOWROOM "MOBILSECONDMEDAN"

Link Referensi: [Firebase Data Connect Quickstart](https://firebase.google.com/docs/sql-connect/quickstart?hl=id)

---

## 💡 Apa itu Firebase Data Connect?
**Firebase Data Connect** (sebelumnya disebut Firebase SQL Connect) adalah layanan backend modern dari Firebase yang memungkinkan Anda menghubungkan aplikasi langsung ke database **PostgreSQL (Google Cloud SQL)** menggunakan **GraphQL**.

Layanan ini secara otomatis akan **membuat tabel SQL** berdasarkan skema GraphQL Anda, dan **menghasilkan (generate) SDK klien** yang aman dan bertipe kuat (*strongly-typed*) untuk aplikasi frontend Anda.

Saya telah membuatkan seluruh konfigurasi skema, query, dan mutasi GraphQL di folder proyek Anda:
* Berkas konfigurasi utama: **[dataconnect.yaml](file:///e:/Project%20Ko%20Mobil/dataconnect/dataconnect.yaml)**
* Skema database PostgreSQL: **[schema.gql](file:///e:/Project%20Ko%20Mobil/dataconnect/schema/schema.gql)**
* Definisi Query (baca data): **[queries.gql](file:///e:/Project%20Ko%20Mobil/dataconnect/default-connector/queries.gql)**
* Definisi Mutation (tambah/edit/hapus data): **[mutations.gql](file:///e:/Project%20Ko%20Mobil/dataconnect/default-connector/mutations.gql)**

---

## 🛠️ Langkah-Langkah Pemasangan (Setup)

### 1. Prasyarat Lingkungan Kerja
Karena Firebase Data Connect menghasilkan SDK kode klien secara dinamis, layanan ini memerlukan **Node.js** dan **Firebase CLI** untuk melakukan kompilasi (*build*).
1. Pastikan Anda menginstal Node.js di komputer Anda.
2. Instal Firebase Tools (CLI) secara global melalui terminal/command prompt:
   ```bash
   npm install -g firebase-tools
   ```

### 2. Inisialisasi Firebase di Folder Proyek
1. Buka terminal pada folder `e:/Project Ko Mobil`.
2. Lakukan login ke akun Google Firebase Anda:
   ```bash
   firebase login
   ```
3. Jalankan inisialisasi Data Connect:
   ```bash
   firebase init dataconnect
   ```
   * *Pilih proyek Firebase Anda (misalnya `mobilsecondmedan`).*
   * *Firebase CLI akan membaca folder `dataconnect/` yang sudah saya buat dan menghubungkannya dengan instance **Cloud SQL untuk PostgreSQL** di Google Cloud Platform Anda.*

### 3. Jalankan Local Emulator (Pengembangan Lokal)
Untuk menguji database PostgreSQL secara lokal tanpa biaya Cloud SQL:
1. Pastikan Anda menginstal ekstensi **Firebase** di VS Code.
2. Jalankan perintah emulator Firebase di terminal:
   ```bash
   firebase emulators:start
   ```
   * *Emulator akan menjalankan database PostgreSQL lokal menggunakan **PGlite**.*
   * *Firebase secara otomatis akan mengompilasi skema GraphQL Anda dan membuat berkas SDK klien di folder `js/generated-sdk/`.*

### 4. Menggunakan Generated SDK di Web App
Setelah SDK terbuat secara otomatis di folder `js/generated-sdk/`, Anda dapat mengimpor fungsi-fungsinya langsung pada kode frontend Anda.

**Contoh pemanggilan di halaman Javascript:**
```javascript
import { initializeApp } from 'firebase/app';
import { getDataConnect } from 'firebase/data-connect';
import { listCars, createCar } from '@mobilsecondmedan/dataconnect'; // SDK yang dihasilkan

// Inisialisasi Data Connect
const app = initializeApp(firebaseConfig);
const dataConnect = getDataConnect(app);

// Membaca data mobil dari PostgreSQL
async function fetchCars() {
  const response = await listCars(dataConnect);
  console.log("Daftar mobil dari SQL:", response.data.cars);
}
```

---

## ⚠️ Catatan Penting untuk Arsitektur Website Anda Saat Ini:
* **Firebase Data Connect** dirancang khusus untuk aplikasi modern yang menggunakan pembungkus/bundler modul (seperti **Next.js, React, Vite, atau Webpack**) karena membutuhkan proses kompilasi kode SDK yang dihasilkan.
* Karena website Anda saat ini berupa halaman HTML statis tanpa bundler (`index.html`, `katalog.html`, dll.), cara terbaik dan paling mudah untuk menyambungkan cloud database Anda tanpa instalasi Node/CLI adalah menggunakan **Cloud Firestore** yang sudah kita buat sebelumnya di berkas **[firebase-config.js](file:///e:/Project%20Ko%20Mobil/js/firebase-config.js)** (cukup panggil lewat tag script biasa).
* Jika di masa depan Anda memutuskan untuk memindahkan website ini ke framework **Next.js** atau **React (Vite)**, seluruh berkas konfigurasi Data Connect (PostgreSQL) di folder `dataconnect/` ini sudah **100% siap digunakan** dan dideploy!
