# DevCard

DevCard adalah aplikasi kartu profil digital interaktif yang dirancang untuk menampilkan identitas serta keahlian anggota tim secara visual, elegan, dan dinamis. Dilengkapi dengan fitur pergantian tema (*Dark/Light Mode*) yang mulus, sistem *like counter* interaktif beranimasi mikro dengan persistensi data di browser (*localStorage*), tata letak responsif untuk berbagai resolusi layar (mobile, tablet, desktop), serta navigasi multi-anggota tanpa reload halaman (*Single Page Experience*). Proyek ini dikembangkan sebagai studi kasus kolaboratif pada Workshop Git & GitHub BNCC 2026.

---

## Visualisasi


---

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- Git & GitHub

---

## Fitur Utama

- [x] Toggle Dark Mode (tersimpan otomatis di `localStorage`)
- [x] Like Counter interaktif (per anggota dengan persistensi `localStorage` & animasi transisi)
- [x] Responsive layout (tampilan fleksibel untuk mobile, tablet, dan desktop)
- [x] Navigasi multi-profil antar anggota tim yang dinamis
- [x] CI/CD: Deploy otomatis via GitHub Actions ke GitHub Pages

---

## Contribution

| Nama | Role | Kontribusi |
|---|---|---|
| Ivriel Dei Gratia Gunawan | Project Initiator | Inisialisasi repository, manajemen akses kolaborator, struktur dasar `index.html`, dan dokumentasi |
| Raffy Reshaina Pasha | Styling Engineer | Membuat branch `feature/css`, mendesain tampilan `style.css`, tema kartu, dan responsivitas layout |
| Dinda Octaviani Sofyan | Script Engineer | Membuat branch `scripting`, mengembangkan interaktivitas `script.js`, data profil dinamis, dan integrasi `localStorage` |

---

## What I Learned

Hal-hal yang dipelajari selama pengerjaan study case Workshop Git & GitHub:

- **Alur Kerja Git & GitHub**: Memahami alur kerja kolaboratif melalui branch (`main`, `feature/css`, `scripting`), commit bertahap, dan sinkronisasi remote repository.
- **Manajemen Kolaborasi & Izin**: Mengatur hak akses collaborator di GitHub dan menyelesaikan kendala perizinan push branch.
- **Pull Request & Code Review**: Praktik membuat Pull Request (PR), mereview perubahan kode, serta melakukan merge ke default branch (`main`).
- **Pemisahan Peran Kode**: Menerapkan pemisahan tugas secara modular antara struktur (HTML), visualisasi (CSS), dan logika interaksi (JavaScript).
- **Client-Side Storage**: Memanfaatkan Web Storage API (`localStorage`) untuk menjaga konsistensi data like dan preferensi tema saat halaman dimuat ulang.
- **CI/CD & Otomasi Deployment**: Menerapkan GitHub Actions untuk otomatisasi build dan deploy situs web statis ke GitHub Pages saat terjadi update di branch `main`.

---

## How to Run

### Cara 1: Akses Live Demo
Website ini telah ter-deploy secara otomatis ke GitHub Pages dan dapat diakses langsung melalui:  
👉 **[Live Demo DevCard](https://ivriel.github.io/project-gitready-bncc-2026/)**

### Cara 2: Menjalankan di Komputer Lokal
1. Clone repository ini:
   ```bash
   git clone https://github.com/Ivriel/project-gitready-bncc-2026.git
   ```
2. Buka folder hasil clone:
   ```bash
   cd project-gitready-bncc-2026
   ```
3. Buka file `index.html` langsung di browser (klik dua kali atau klik kanan → *Open with* → Browser pilihan Anda).

---

## Feature Improvement

Ide pengembangan lanjutan untuk proyek ini:

- Menambahkan animasi mikro / transisi halus saat berpindah antar profil anggota
- Menambahkan efek animasi partikel/konfeti saat tombol like ditekan
- Menambahkan tautan sosial media (GitHub, LinkedIn, Instagram) untuk setiap anggota
- Menambahkan filter pencarian atau tag keahlian interaktif pada daftar skill

