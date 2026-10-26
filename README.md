# Bo'Bo' — Quiet Knowledge, Deep Growth

**Bo'Bo' adalah dapur konten AzurInsight.** Satu buku diringkas jadi **maksimal 8 bab, masing-masing ±1 menit**. Format 1 menit itu pas untuk Reels, TikTok, Shorts, dan postingan Telegram.

> Satu buku → 8 gagasan → 8 konten pendek → satu seri AzurInsight.

---

## Alur kerja: dari buku ke konten AzurInsight

| Tahap | Di Bo'Bo' | Hasil untuk AzurInsight |
|---|---|---|
| **1. Pilih buku** | **Minta buku** (anggota/audiens) atau tombol **+** (admin) | Topik seri minggu ini |
| **2. Ringkas** | Sunting buku → **Ringkas dengan AI** (8 bab, 120–150 kata per bab) | 8 naskah 1 menit yang siap dibacakan |
| **3. Suarakan** | **Studio Suara** → pilih suara & gaya → **Susun 8 bab** | 8 voiceover MP3 dari Google AI Studio |
| **4. Kurasi** | **Bekal hari ini** & **Penanda → kutipan** | Hook, caption, kutipan kartu |
| **5. Rangkum** | **Resume hari ini → Salin resume** | Caption carousel / postingan Telegram |
| **6. Terbitkan** | **Terbitkan** buku di Bo'Bo' | Tautan "dengar versi lengkapnya" untuk audiens |

### 1 buku = 1 seri konten
- **Bab 1** → video pembuka seri ("Buku yang mengubah cara saya …").
- **Bab 2–7** → satu video per hari, satu gagasan per video.
- **Bab 8** → video penutup + ajakan membuka Bo'Bo' untuk mendengar seluruh buku.
- **Poin inti** tiap bab (2–3 baris) → teks di layar / subtitle tebal.
- **Sinopsis** → caption pengumuman seri.

### Rumus naskah 1 menit (sudah tertanam di prompt AI)
- 120–150 kata, 2–3 paragraf pendek, kalimat pendek yang enak didengar.
- Tanpa daftar dan tanpa emoji di dalam narasi; poin inti dipisah di `points`.
- Bahasa sendiri, bukan salinan isi buku.

---

## Fitur yang paling sering dipakai untuk konten

**Studio Suara (Admin → Studio Suara, atau di halaman Sunting buku)**
- Memakai API key Gemini dari **Admin → AI**. Model ringkasan & model suara dipilih lewat **dropdown** yang diisi otomatis dari akun Google AI Studio.
- **Coba suara** → **Susun N bab** → audio otomatis dikompres ke MP3 (±360 KB/menit) dan langsung bisa diputar semua anggota.
- Untuk konsistensi brand, pakai satu suara dan satu gaya untuk seluruh seri (mis. *Charon · Tenang*).
- Tanpa API key: **Naskah untuk AI Studio** → buat di aistudio.google.com → unggah WAV `bab-1.wav … bab-8.wav` sekaligus.

**Bekal hari ini** (Beranda)
Satu gagasan pilihan per hari, sama untuk semua pengguna. Tombol **Salin** menghasilkan kutipan siap tempel, lengkap dengan judul bab dan buku.

**Resume hari ini** (Beranda / chip target di kanan atas)
Daftar bab yang selesai hari itu beserta poin intinya. **Salin resume** → langsung jadi caption carousel atau postingan Telegram t.me/azurinsight.

**Penanda & kutipan**
Saat membaca, pilih kalimat → **Simpan kutipan**. Halaman Penanda menjadi bank kutipan untuk kartu Instagram.

**Permintaan buku**
Audiens yang mendaftar bisa meminta buku. Daftar permintaan = riset topik gratis untuk seri AzurInsight berikutnya. Dari Admin → Permintaan, tekan **Buat buku** untuk langsung meringkasnya.

---

## Ritme mingguan yang disarankan

| Hari | Kegiatan |
|---|---|
| Senin | Pilih buku dari **Permintaan**, ringkas 8 bab, periksa |
| Selasa | **Susun suara** 8 bab, terbitkan di Bo'Bo' |
| Rabu–Minggu | 1 bab = 1 video/hari; caption dari **Resume** & **Bekal hari ini** |

---

## Isi folder

```
index.html            aplikasi
firebase-config.js    koneksi ke Firebase proyek bo-bo-31
sw.js, manifest.webmanifest, ikon *.png, lame.min.js (kompres MP3)
firestore.rules       aturan keamanan (admin dikunci ke UID)
contoh-buku-meditations.json   contoh format impor 8 bab
```
