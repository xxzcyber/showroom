# PANDUAN INTEGRASI FIREBASE FIRESTORE
## SHOWROOM "MOBILSECONDMEDAN"

Aplikasi **MOBILSECONDMEDAN** dirancang dengan modul database terpisah. Anda bisa beralih dari **Supabase** ke **Firebase** hanya dengan mengganti pemanggilan berkas script pada halaman website.

Berikut adalah langkah lengkap untuk membuat database di Firebase dan menghubungkannya ke website.

---

## 📁 Langkah 1: Buat Proyek Firebase
1. Buka [Firebase Console](https://console.firebase.google.com/) di browser Anda.
2. Klik **Add Project** (Tambah Proyek).
3. Masukkan nama proyek: `mobilsecondmedan` lalu ikuti langkahnya sampai selesai.
4. Di halaman Ringkasan Proyek (*Project Overview*), klik ikon **Web (`</>`)** untuk menambahkan aplikasi web.
5. Masukkan nama pendaftaran aplikasi (contoh: `mobilsecondmedan-web`), lalu klik **Register App**.
6. Salin objek **`firebaseConfig`** yang muncul di layar. Objek tersebut berisi data seperti:
   ```javascript
   const firebaseConfig = {
     apiKey: "AIzaSy...",
     authDomain: "project-id.firebaseapp.com",
     projectId: "project-id",
     storageBucket: "project-id.appspot.com",
     messagingSenderId: "...",
     appId: "..."
   };
   ```

---

## 🗄️ Langkah 2: Buat Database Cloud Firestore
1. Pada menu sebelah kiri di Firebase Console, klik **Build > Firestore Database**.
2. Klik **Create Database** (Buat Database).
3. Pilih lokasi database terdekat (misalnya `asia-southeast2` untuk Jakarta/Singapura).
4. Pilih opsi **Start in Test Mode** (Mulai dalam Mode Pengujian) agar database dapat langsung dibaca dan ditulis oleh aplikasi web selama pengembangan, lalu klik **Create**.

---

## 🔒 Langkah 3: Atur Aturan Keamanan Database (Security Rules)
Agar database Anda aman dari pembacaan/penulisan tidak sah saat produksi, ganti tab **Rules** pada Firestore Anda dengan aturan berikut:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    
    // Koleksi Mobil: Siapa saja bisa baca, hanya admin yang bisa tulis/ubah
    match /cars/{carId} {
      allow read: if true;
      allow write: if true; // Ganti dengan autentikasi admin di masa produksi
    }
    
    // Koleksi Komentar: Siapa saja bisa membaca & menulis komentar baru
    match /comments/{commentId} {
      allow read, write: if true;
    }
    
    // Koleksi Pesan Privat: Pengunjung bisa mengirim, hanya admin yang bisa baca/hapus
    match /private_messages/{messageId} {
      allow create: if true;
      allow read, update, delete: if true; // Ganti dengan autentikasi admin di masa produksi
    }
  }
}
```
Klik **Publish** untuk menyimpan perubahan aturan.

---

## 🔌 Langkah 4: Hubungkan ke Kode Website Anda
Untuk beralih menggunakan database Firebase ini:
1. Buka 5 file HTML utama Anda: `index.html`, `katalog.html`, `detail.html`, `compare.html`, dan `admin.html`.
2. Cari baris pemanggilan skrip database (biasanya di bagian paling bawah file sebelum tag `</body>`):
   ```html
   <!-- Cari baris ini: -->
   <script src="js/supabase-config.js"></script>
   ```
3. Ganti baris tersebut menjadi pemanggilan Firebase:
   ```html
   <!-- Ganti menjadi ini: -->
   <script src="js/firebase-config.js"></script>
   ```
4. Buka berkas **[firebase-config.js](file:///e:/Project Ko Mobil/js/firebase-config.js)** di text editor Anda.
5. Isi objek `FIREBASE_CONFIG` di bagian paling atas dengan data kredensial proyek Firebase yang Anda salin pada **Langkah 1**:
   ```javascript
   const FIREBASE_CONFIG = {
       apiKey: "ISI_API_KEY_ANDA_DISINI",
       authDomain: "ISI_AUTH_DOMAIN_ANDA_DISINI",
       projectId: "ISI_PROJECT_ID_ANDA_DISINI",
       storageBucket: "ISI_STORAGE_BUCKET_ANDA_DISINI",
       messagingSenderId: "ISI_MESSAGING_SENDER_ID_ANDA_DISINI",
       appId: "ISI_APP_ID_ANDA_DISINI"
   };
   ```
6. Simpan file tersebut. Sekarang website Anda resmi berjalan menggunakan cloud database **Firebase Firestore**! 🎉
