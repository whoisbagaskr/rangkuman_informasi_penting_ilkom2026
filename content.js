/**
 * Database Rangkuman Khusus MABA Ilmu Komunikasi 2026 (Semester 1 / Ganjil 2026)
 * Sumber: Grup WA Ilkom + RAT, SAT, & RPS Resmi UT
 */
const contentData = [
  {
    id: "bab-1",
    judulBab: "🎮 BAB 1: Sistem Kerja Pertemuan, Tugas, & Aturan Main 🤖",
    deskripsi: "Info utuh dari WA Group tentang absen mingguan, Tuton vs TTM, detail lengkap tugas, profil LMS, sampai trik cari teman!",
    kataKunci: ["Sesi", "Absen", "Tuton", "Tuweb", "TTM", "Tugas Umum", "Tugas Pribadi", "Profil LMS"],
    subBab: [
      {
        id: "sub-1-1",
        judul: "⏰ 1.1 Aturan Sesi, Jam Buka Absen, & Sistem Belajar",
        isiTeks: `
          <p><b>📅 Aturan 1 Pertemuan Sesi (Contoh 14–20 September):</b> Rentang tanggal tersebut adalah satu jendela waktu utuh (<i>window time</i>) buat kita menyelesaikan 3 hal wajib sekaligus: <b>isi absen, kerjain tugas/diskusi, dan kumpulin tugas/diskusi</b>[cite: 1].</p>
          <br>
          <p><b>⏰ Jam Buka Absen:</b> Absen sesi baru itu udah bisa diakses mulai hari pertama sesi (contoh: tanggal 14) tepat <b>jam 00.01 WIB di subuh hari</b>[cite: 1]!</p>
          <br>
          <p><b>✅ Ketentuan Absen Matkul:</b> Misal kamu ngambil 7 mata kuliah, berarti di minggu tersebut kamu harus klik absen di ke-7 matkul itu[cite: 1]. Asyiknya, absen ini cukup dilakukan <b>1 KALI SAJA per mata kuliah di setiap pertemuannya</b>[cite: 1].</p>
          <br>
          <p><b>💻 Tidak Ada Zoom / Meet Routine:</b> <i>FYI</i> nih, di UT itu nggak ada agenda nge-Zoom atau Google Meet rutin sama dosen[cite: 1]. Pembelajaran full jalan via web <span class="tooltip" data-title="Learning Management System: Portal kuliah online UT">LMS</span>[cite: 1].</p>
          <br>
          <p><b>🔥 Prinsip Kemandirian 100%:</b> Kesimpulannya, kita klik absen sendiri, ngerjain diskusi/tugas sendiri, baca modul sendiri[cite: 1]. Intinya <b>APAPUN ITU DILAKUKAN SECARA MANDIRI!</b>[cite: 1]</p>
          <br>
          <p><b>🕰️ Fleksibilitas Pengerjaan Harian:</b> Kamu bebas ngatur waktu! Mau borongan ngerjain semua tugas dalam 1 hari? Boleh! Mau nyicil 1 hari 1 matkul? Boleh banget![cite: 1] Yang paling krusial adalah <b>semua pengerjaan nggak boleh lewat dari batas maksimal deadline di sesi tersebut</b>[cite: 1].</p>
        `
      },
      {
        id: "sub-1-2",
        judul: "⚔️ 1.2 Pilihan Sistem Belajar: Tuton vs TTM / Tuweb",
        isiTeks: `
          <p><b>💻 <span class="tooltip" data-title="Tutorial Online: Sistem belajar mandiri via web">Tuton (Tutorial Online)</span>:</b> Ini adalah sistem <i>default</i> gratis yang otomatis aktif begitu kamu terdaftar di UT[cite: 1]. Gak ada Zoom, gak ada jam terikat, super fleksibel dengan batas pengerjaan 1 minggu per sesi[cite: 1]. Suka atau nggak suka, kamu bakal tetap terjaring sistem Tuton ini[cite: 1].</p>
          <br>
          <p><b>🎥 <span class="tooltip" data-title="Tutorial Tatap Muka: Belajar offline di kelas">TTM</span> & <span class="tooltip" data-title="Tutorial Webinar: Belajar tatap muka via Zoom">Tuweb</span>:</b> Ini perkuliahan berbasis Zoom (<i>online</i>) atau tatap muka (<i>offline</i>)[cite: 1]. Cara ngajuinnya: Tunggu info resmi dari IG UT daerah masing-masing, dan bayar sekitar Rp 150.000 per matkul untuk 1 semester[cite: 1]. Syaratnya minimal harus diajukan oleh 20 mahasiswa[cite: 1]. Kalau kamu ngajuin Tuweb/TTM, akun Tuton kamu <b>tetap akan aktif</b> (jadi <i>double system</i> belajarnya)[cite: 1]! Rekomendasi ini cocok banget buat mahasiswa yang <i>hardolin</i> (nggak sibuk/banyak waktu luang)[cite: 1].</p>
        `,
        gambar: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
        captionGambar: "Perbandingan Sistem Tuton Mandiri vs Tuweb Webinar 📊"
      },
      {
        id: "sub-1-3",
        judul: "📝 1.3 Detail 2 Jenis Tugas di LMS & Cara Uploadnya!",
        isiTeks: `
          <p><b>💬 Tugas Umum (Diskusi Mingguan - Sesi 1 s.d. 8):</b></p>
          <ul>
            <li>Sifatnya <i>open discussion</i> (diskusi terbuka) bareng tutor dan seluruh temen sekelas[cite: 1].</li>
            <li>Tutor ngasih 1 bahan topik/kasus, lalu kita kasih sudut pandang pribadi yang wajib diperkuat dengan <b>sumber referensi yang jelas</b>[cite: 1].</li>
            <li>Asyiknya, diskusi ini bisa dibaca sama semua orang di kelas, jadi bisa saling koreksi, nanggapin, atau nambahin jawaban[cite: 1].</li>
            <li><i>Deadline</i> pengerjaannya <b>1 MINGGU</b> per sesi[cite: 1]. Karena kita pegang 6-7 matkul, berarti seminggu kita wajib kumpul 6-7 diskusi![cite: 1]</li>
            <li><b>Cara Upload (Jika diizinkan tutor upload file):</b> Klik <b>Reply</b> di kolom diskusi &rarr; Klik <b>Advanced</b> di pojok kanan bawah &rarr; Unggah file kamu di kotak lampiran[cite: 1]. <i>(Catatan: Gak semua diskusi boleh unggah file ya)</i>[cite: 1].</li>
          </ul>
          <br>
          <p><b>📑 Tugas Mata Kuliah / Pribadi (Tugas 1, 2, 3 di Sesi 3, 5, 7):</b></p>
          <ul>
            <li>Ini tugas pribadi yang sifatnya tertutup (cuma kamu dan tutor yang bisa lihat)[cite: 1].</li>
            <li>Masa pengerjaannya lebih santai, yaitu <b>2 MINGGU</b>[cite: 1].</li>
            <li>Dikirim bentuk PDF atau Word sesuai instruksi dosen[cite: 1].</li>
            <li><i>Tipe 1:</i> Dosen kasih template/soal di LMS, tinggal kita edit dan isi[cite: 1].</li>
            <li><i>Tipe 2:</i> Dosen cuma ngasih teks soal, jadi kita harus susun dokumen manual dari nol di laptop! (Wajib pakai cover lengkap: Logo UT, Nama, Jurusan, NIM, Nama Dosen, UT Daerah)[cite: 1].</li>
            <li><b>Cara Upload Tugas Pribadi:</b> Masuk menu Tugas Sesi 3/5/7 &rarr; Klik tombol biru <b>Add Submission</b> &rarr; Seret (<i>drag & drop</i>) file PDF/Word kamu &rarr; Klik <b>Simpan Perubahan</b>[cite: 1].</li>
          </ul>
        `
      },
      {
        id: "sub-1-4",
        judul: "🖼️ 1.4 Aturan Profil LMS & Tata Cara Chat Tutor",
        isiTeks: `
          <p><b>📸 Aturan Upload Foto Profil LMS:</b></p>
          <ul>
            <li><b>DO (BOLEH):</b> Foto selfie, foto formal (KTM), foto non-formal (asal sopan), pakai filter, atau foto full body (di pantai, gunung, mall, dll.)[cite: 1].</li>
            <li><b>DON'T (DILARANG):</b> Pakai foto yang bukan wajah kamu (ayah, ibu, mantan, HTS), foto hewan kiyut (kucing, capybara), karakter anime, bias K-Pop, manhwa, atau hero Mobile Legends![cite: 1]</li>
          </ul>
          <br>
          <p><b>🔍 Cara Lihat Teman Sekelas & Tutor:</b><br>
          Klik Mata Kuliah di dashboard &rarr; Klik <b>Course Dashboard</b> (ikon gerigi) &rarr; Klik <b>Participants</b>[cite: 1]. Buat kirim pesan, klik nama profilnya lalu pilih <b>Send Message</b>[cite: 1].</p>
          <br>
          <p><b>✉️ Template Chat Resmi ke Tutor (Wajib Ditiru!):</b><br>
          <i>Selamat pagi/siang, Pak/Bu Tutor<br>
          Nama: [Nama Lengkap]<br>
          NIM: [NIM Kamu]<br>
          Nama Matkul: [Nama Mata Kuliah]<br>
          Kode Kelas: [Kode Kelas di LMS - Contoh: MKWN4110.2367]<br>
          Mohon izin bertanya..... [Isi Pertanyaan Kamu]<br>
          Sekian, terima kasih Pak/Bu.</i><br>
          <b>Catatan:</b> WAJIB sebutin Kode Kelas, soalnya mayoritas tutor ngajar 2-3 kelas beda sekaligus![cite: 1]</p>
        `
      },
      {
        id: "sub-1-5",
        judul: "🌟 1.5 Enam Pilar Jawaban Nilai Bagus (Auto A!)",
        isiTeks: `
          <ol>
            <li><b>✍️ Pastikan Paraphrase:</b> Tulis ulang materi modul pakai susunan bahasamu sendiri (kayak lagi cerita ke temen) biar gak kena plagiarisme[cite: 1]. <i>(Contoh sapaan: "Halo Pak/Bu, izin menjawab. Menurut referensi X...")</i>[cite: 1].</li>
            <li><b>📚 Cantumkan Referensi:</b> Wajib tulis sumber jelas (nama modul, bab, halaman, link jurnal) di akhir jawaban sebagai bukti keaslian[cite: 1].</li>
            <li><b>🎯 Pahami Maksud Soal:</b> Baca instruksi, batasan masalah, dan kriteria nilai dosen pelan-pelan sebelum ngetik[cite: 1].</li>
            <li><b>💬 Jangan Malu Bertanya:</b> Pakai fitur <i>Send Message</i> pakai template tadi kalau ada instruksi modul yang bikin pusing[cite: 1].</li>
            <li><b>🚀 Jangan Menunda:</b> Langsung eksekusi pas sesi dibuka biar tugas gak numpuk di akhir minggu[cite: 1].</li>
            <li><b>🛑 Anti <span class="tooltip" data-title="Sistem Kebut Semalam">SKS</span>:</b> Jangan ngerjain semua mendadak 1 malam! Kualitas jawaban bakal hancur dan kamu gampang <i>burnout</i>[cite: 1].</li>
          </ol>
        `
      },
      {
        id: "sub-1-6",
        judul: "🤝 1.6 Cara Cari Teman Resmi & Kode Katalog",
        isiTeks: `
          <ul>
            <li><b>🚫 Gak Perlu Repot di Grup Unofficial:</b> Gak usah buang waktu nyari teman di grup WA gak resmi, karena belum tentu mereka masuk di kelas LMS yang sama denganmu[cite: 1].</li>
            <li><b>🙋‍♂️ Akses Resmi di eLearning:</b> Tunggu sampai LMS update maksimal 14 Sep 2026. Masuk ke Matkul &rarr; <b>Pendahuluan</b> &rarr; <b>Forum Perkenalan</b>. Sapa tutor dan temanmu di sana![cite: 1] Teman sekelasmu itu diacak dari seluruh prodi, semester, dan UT Daerah se-Indonesia bahkan luar negeri (<span class="tooltip" data-title="Sentra Layanan UT Luar Negeri">SALUT</span>)[cite: 1].</li>
            <li><b>📋 Wajib Baca RAT & SAT:</b> Download <span class="tooltip" data-title="Rancangan Aktivitas Tutorial">RAT</span> dan <span class="tooltip" data-title="Satuan Acara Tutorial">SAT</span> di menu Pendahuluan. Dua dokumen itu adalah kunci topik bahasan 8 sesi ke depan[cite: 1]!</li>
            <li><b>🔑 Kode LMS vs Katalog:</b> Kode matkul di web LMS kadang beda sama kode buku/modul (<span class="tooltip" data-title="Buku Materi Pokok">BMP</span>)[cite: 1]. Ingat! Selama kodenya sesuai sama <b>Katalog Resmi UT</b>, materinya pasti udah 100% bener![cite: 1]</li>
            <li><b>🔥 Komunikasi Interaktif:</b> Jangan kaku kalau diskusi di LMS! Keaktifan kamu nanggapin orang lain bakal ngasih kesan positif ke sudut pandang tutor pas ngasih nilai[cite: 1].</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "bab-2",
    judulBab: "🤖 BAB 2: Info AI AIDA YUNIKA, Evaluasi, & Sanksi Akademik ⚖️",
    deskripsi: "Detail tentang peran AIDA YUNIKA, aturan baru evaluasi tutor, rumus bobot nilai, hingga sanksi drop out UT.",
    kataKunci: ["AIDA YUNIKA", "Evaluasi Tutor", "Bobot Nilai", "UAS", "Sanksi", "Joki"],
    subBab: [
      {
        id: "sub-2-1",
        judul: "🕵️‍♂️ 2.1 Fakta AIDA YUNIKA di Kelas Tuton",
        isiTeks: `
          <p>Kalau kamu lihat notifikasi atau nama <b><span class="tooltip" data-title="Artificial Intelligence pemantau integritas akademik di LMS UT">AIDA YUNIKA</span></b>, jangan panik! Dia <b>BUKAN</b> dosen atau tutor manusia pengganti[cite: 1]. Notifikasinya juga gak muncul di semua kelas[cite: 1].</p>
          <br>
          <p><b>Peran AIDA YUNIKA:</b> Dia cuma AI untuk jaga integritas akademik mahasiswa (anti-nyontek)[cite: 1]. Penilai tetap tutor manusia[cite: 1]. Kriteria nilai itu murni dari kesesuaian jawaban, pemahaman, referensi, dan keaslian[cite: 1]. Jadi ingat, sekadar "lolos AI detector" gak bakal jamin nilaimu tinggi kalau jawabanmu gak berbobot![cite: 1]</p>
        `
      },
      {
        id: "sub-2-2",
        judul: "📝 2.2 Update Evaluasi Tutor (Semester Ganjil 2026/2027)",
        isiTeks: `
          <p>Dulu evaluasi tutor cuma dibuka 1 kali di Sesi 7[cite: 1]. TAPI, mulai semester 2026/2027 Ganjil (TERBARU), Forum Evaluasi Tutor resmi dibuka di <b>2 SESI</b>, yaitu pada <b>SESI 3 (Tengah)</b> dan <b>SESI 7 (Penutup)</b>[cite: 1]!</p>
          <br>
          <p><b>Instruksi Wajib:</b> Cek terus sesi Tuton kamu dan isi angket penilaian tutor ini secara jujur dan objektif ya![cite: 1]</p>
        `
      },
      {
        id: "sub-2-3",
        judul: "📊 2.3 Rumus Bobot Nilai & Syarat Maut UAS!",
        isiTeks: `
          <p><b>🧮 Rumus Bobot Nilai Tuton:</b></p>
          <ul>
            <li><b>Presensi (Sesi 1-8):</b> Bobot 20% (dihitung dari keaktifan klik absen mingguan)[cite: 1].</li>
            <li><b>Diskusi (Sesi 1-8):</b> Bobot 30% (Total nilai 1-8 <b>TETAP dibagi 8</b>, walau kamu ngerjainnya kurang dari 8)[cite: 1].</li>
            <li><b>Tugas Tutorial (Sesi 3, 5, 7):</b> Bobot 50% (Total nilai Tugas 1-3 <b>TETAP dibagi 3</b>, walau kamu ngirim kurang dari 3!)[cite: 1].</li>
          </ul>
          <br>
          <p><b>☠️ Aturan Maut <span class="tooltip" data-title="Ujian Akhir Semester">UAS</span>:</b> Kamu <b>WAJIB menjawab benar minimal 30% di soal UAS!</b>[cite: 1] Kalau skor UAS kamu di bawah 30%, seluruh nilai Tuton kamu setinggi apa pun bakal <b>hangus otomatis (dapat nilai E/D)! 😭</b>[cite: 1]</p>
        `
      },
      {
        id: "sub-2-4",
        judul: "🚫 2.4 Sanksi Akademik Resmi UT",
        isiTeks: `
          <ul>
            <li><b>Deaktivasi Tuton:</b> Kalau kamu bolos absen dari Minggu 1 sampai Minggu 3 berturut-turut, kelas Tuton matkul itu bakal <b>mati otomatis mulai Minggu ke-4!</b>[cite: 1]</li>
            <li><b>Teguran Resmi:</b> Buat mahasiswa yang ketahuan plagiat atau gak sopan bahasanya di forum[cite: 1].</li>
            <li><b>Nilai NOL (0):</b> Diberikan ke pihak yang <b>menjiplak MAUPUN yang memberi jiplakan!</b>[cite: 1]</li>
            <li><b>Drop Out / Penghentian 1 Semester:</b> Mahasiswa yang ketahuan pakai <b>JOKI</b> bakal langsung dikeluarkan dari <b>SELURUH KESERTAAN TUTON</b> untuk semua matkul di semester itu! ⛔[cite: 1]</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "bab-3",
    judulBab: "🗓️ BAB 3: Kalender & Tanggal Lengkap Tuton (Ganjil 2026) ⏰",
    deskripsi: "Tanggal pasti presensi, deadline diskusi mingguan, serta batas pengerjaan Tugas 1, 2, dan 3.",
    kataKunci: ["Jadwal", "Kalender 2026", "Sesi", "Deadline", "Tugas 1 2 3"],
    subBab: [
      {
        id: "sub-3-1",
        judul: "📌 3.1 Jadwal Sesi 1 s.d 4 & Rincian Wajib",
        isiTeks: `
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr><th>Sesi 📌</th><th>Tanggal & Deadline ⏳</th><th>Rincian Aktivitas Wajib 🚨</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>Sesi 1</b></td>
                  <td>Buka: 14 Sep (00.01 WIB)<br>Tutup: 20 Sep 2026 (23.59 WIB)[cite: 1]</td>
                  <td>Klik Absen, masuk Forum Perkenalan, Unduh <span class="tooltip" data-title="Rancangan Aktivitas Tutorial">RAT</span>/<span class="tooltip" data-title="Satuan Acara Tutorial">SAT</span>, dan Kumpul Diskusi 1 untuk 6-7 matkul[cite: 1].</td>
                </tr>
                <tr>
                  <td><b>Sesi 2</b></td>
                  <td>Buka: 21 Sep (00.01 WIB)<br>Tutup: 27 Sep 2026 (23.59 WIB)[cite: 1]</td>
                  <td>Klik Absen, Kumpul Diskusi 2, Cek nilai/masukan tutor buat Diskusi 1 yang udah dinilai[cite: 1].</td>
                </tr>
                <tr>
                  <td><b>Sesi 3</b><br><i>(Minggu Tugas)</i></td>
                  <td>Buka: 28 Sep (00.01 WIB)<br>Tutup: 4 Okt 2026 (23.59 WIB)[cite: 1]</td>
                  <td>Klik Absen, Kumpul Diskusi 3, <b>WAJIB isi Evaluasi Tutor 1</b>, Mulai kerjain <b>Tugas Matkul 1</b> via Add Submission (deadline 12 Okt)[cite: 1].</td>
                </tr>
                <tr>
                  <td><b>Sesi 4</b></td>
                  <td>Buka: 5 Okt (00.01 WIB)<br>Tutup: 11 Okt 2026 (23.59 WIB)[cite: 1]</td>
                  <td>Klik Absen, Kumpul Diskusi 4, Pastikan Tugas 1 udah ter-upload semua sebelum 12 Okt![cite: 1]</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        id: "sub-3-2",
        judul: "📌 3.2 Jadwal Sesi 5 s.d 8 & Rincian Wajib",
        isiTeks: `
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr><th>Sesi 📌</th><th>Tanggal & Deadline ⏳</th><th>Rincian Aktivitas Wajib 🚨</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>Sesi 5</b><br><i>(Minggu Tugas)</i></td>
                  <td>Buka: 12 Okt (00.01 WIB)<br>Tutup: 18 Okt 2026 (23.59 WIB)[cite: 1]</td>
                  <td>Klik Absen, Kumpul Diskusi 5, Mulai unduh & kerjain <b>Tugas Matkul 2</b> (deadline 26 Okt)[cite: 1].</td>
                </tr>
                <tr>
                  <td><b>Sesi 6</b></td>
                  <td>Buka: 19 Okt (00.01 WIB)<br>Tutup: 25 Okt 2026 (23.59 WIB)[cite: 1]</td>
                  <td>Klik Absen, Kumpul Diskusi 6, Pastikan Tugas 2 udah ter-upload semua sebelum 26 Okt![cite: 1]</td>
                </tr>
                <tr>
                  <td><b>Sesi 7</b><br><i>(Minggu Tugas)</i></td>
                  <td>Buka: 26 Okt (00.01 WIB)<br>Tutup: 1 Nov 2026 (23.59 WIB)[cite: 1]</td>
                  <td>Klik Absen, Kumpul Diskusi 7, <b>WAJIB isi Evaluasi Tutor 2</b>, Mulai kerjain <b>Tugas Matkul 3</b> (deadline 9 Nov)[cite: 1].</td>
                </tr>
                <tr>
                  <td><b>Sesi 8</b><br><i>(Sesi Penutup)</i></td>
                  <td>Buka: 2 Nov (00.01 WIB)<br>Tutup: 8 Nov 2026 (23.59 WIB)[cite: 1]</td>
                  <td>Klik Absen terakhir, Kumpul Diskusi 8, Pastikan Tugas 3 beres upload 100%, Mulai fokus baca rangkuman untuk UAS![cite: 1]</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    ]
  },
  {
    id: "bab-4",
    judulBab: "📚 BAB 4: Rincian Penuh RAT (Roadmap Materi) 6 Matkul 🎓",
    deskripsi: "Pemetaan seluruh materi dari dokumen resmi Rancangan Aktivitas Tutorial (RAT) untuk 6 mata kuliah MABA.",
    kataKunci: ["RAT", "RPS", "FSIK4101", "FSIK4102", "FSIK4103", "SKOM4315", "MKDU4221", "MKWN4109"],
    subBab: [
      {
        id: "sub-4-1",
        judul: "📡 4.1 RAT Pengantar Ilmu Komunikasi (FSIK4101)",
        isiTeks: `
          <p><b>Fokus:</b> Fondasi dasar yang ngebekalin konsep manusia berkomunikasi, motif, elemen, teori, sampai isu penelitian[cite: 1].</p>
          <ul>
            <li><b>Sesi 1–2:</b> Modul 1 (Hakikat manusia & komunikasi, motif manusia berkomunikasi)[cite: 1].</li>
            <li><b>Sesi 3 (Tugas 1):</b> Modul 4 (Elemen, model-model komunikasi, dan tradisi teori komunikasi)[cite: 1].</li>
            <li><b>Sesi 4–5 (Tugas 2):</b> Modul 5 (Fungsi, teknik, dan media komunikasi)[cite: 1].</li>
            <li><b>Sesi 6–7 (Tugas 3):</b> Modul 7 & 8 (Komunikasi antarmanusia, kelompok, organisasi, massa, komunikasi tradisional, antarbudaya, serta isu-isu dalam penelitian komunikasi)[cite: 1].</li>
            <li><b>Sesi 8:</b> Review materi keseluruhan & persiapan UAS[cite: 1].</li>
          </ul>
        `
      },
      {
        id: "sub-4-2",
        judul: "💬 4.2 RAT Komunikasi Personal Bermedia / <span class="tooltip" data-title="Komunikasi Antarpribadi">KAP</span> (FSIK4102 / SKOM4313)",
        isiTeks: `
          <p><b>Fokus:</b> Ngulas persepsi diri, cara dengerin orang, hubungan personal, sampai manajemen konflik bermedia[cite: 1].</p>
          <ul>
            <li><b>Sesi 1–2:</b> Modul 1 & 2 (Konsep dasar KAP & persepsi diri dalam komunikasi antarpribadi)[cite: 1].</li>
            <li><b>Sesi 3 (Tugas 1):</b> Modul 3 (Definisi mendengarkan, tahapan, hambatan, & menjadi pendengar efektif)[cite: 1].</li>
            <li><b>Sesi 4–5 (Tugas 2):</b> Modul 4–6 (Komunikasi verbal, non-verbal, & pengembangan hubungan personal)[cite: 1].</li>
            <li><b>Sesi 6–7 (Tugas 3):</b> Modul 7 (Pengertian & mitos konflik, karakteristik konflik KAP, jenis budaya, gender, serta konflik di media online)[cite: 1].</li>
            <li><b>Sesi 8:</b> Modul 8 & 9 (Strategi manajemen konflik, teori hubungan, siklus & manajemen hubungan antarpribadi)[cite: 1].</li>
          </ul>
        `
      },
      {
        id: "sub-4-3",
        judul: "🎤 4.3 RAT Public Speaking (FSIK4103)",
        isiTeks: `
          <p><b>Fokus:</b> Skill ngomong di depan umum, mulai dari gali ide, analisis pendengar, alat visual, sampai eksekusi![cite: 1]</p>
          <ul>
            <li><b>Sesi 1–2:</b> Modul 1–3 (Prinsip dasar public speaking, eksplorasi ide/gagasan, & teknik menentukan topik)[cite: 1].</li>
            <li><b>Sesi 3 (Tugas 1):</b> Modul 3-5 (Memilih topik, klasifikasi/analisis publik, & menentukan data pendukung)[cite: 1].</li>
            <li><b>Sesi 4–5 (Tugas 2):</b> Modul 6 (Menyusun struktur isi PS, serta teknik pembukaan yang menarik!)[cite: 1].</li>
            <li><b>Sesi 6–7 (Tugas 3):</b> Modul 7 & 8 (Nyiapin alat bantu visual, bahasa verbal/nonverbal, & eksekusi nyampein materi di hadapan publik)[cite: 1].</li>
            <li><b>Sesi 8:</b> Modul 9 (Bentuk-bentuk public speaking & teknik hubungan dengan media)[cite: 1].</li>
          </ul>
        `
      },
      {
        id: "sub-4-4",
        judul: "📰 4.4 RAT Komunikasi Massa (SKOM4315 / FSIK4104)",
        isiTeks: `
          <p><b>Fokus:</b> Cara sebar info ke khalayak luas, tren TIK, media baru, konvergensi digital era globalisasi[cite: 1].</p>
          <ul>
            <li><b>Sesi 1–2:</b> Hakikat, sejarah, & karakteristik media massa[cite: 1].</li>
            <li><b>Sesi 3 (Tugas 1):</b> Industri media massa (buku, surat kabar, majalah, radio, film, TV)[cite: 1].</li>
            <li><b>Sesi 4–5 (Tugas 2):</b> Perkembangan TIK, internet, & media baru (<i>new media</i>)[cite: 1].</li>
            <li><b>Sesi 6–7 (Tugas 3):</b> Dampak media massa, etika, literasi media, & konvergensi di era globalisasi[cite: 1].</li>
            <li><b>Sesi 8:</b> Rangkuman materi media massa & persiapan UAS[cite: 1].</li>
          </ul>
        `
      },
      {
        id: "sub-4-5",
        judul: "🕌 4.5 RAT Pendidikan Agama Islam (MKDU4221)",
        isiTeks: `
          <p><b>Fokus:</b> Penerapan ajaran Islam di masyarakat plural, bahas Ketuhanan, HAM, kesadaran hukum, IPTEKS & IMTAQ[cite: 1].</p>
          <ul>
            <li><b>Sesi 1–2:</b> Modul 1 & 2 (Keimanan, Ketuhanan Yang Maha Esa, hakikat, martabat, & tanggung jawab manusia)[cite: 1].</li>
            <li><b>Sesi 3 (Tugas 1):</b> Modul 3 (Masyarakat beradab & sejahtera, peran umat, HAM, & demokrasi)[cite: 1].</li>
            <li><b>Sesi 4–5 (Tugas 2):</b> Modul 4 & 5 (Kesadaran taat hukum, fungsi agama, moral/akhlak mulia, serta sinergi IPTEKS-IMTAQ)[cite: 1].</li>
            <li><b>Sesi 6–7 (Tugas 3):</b> Modul 6 & 7 (Peran Islam dalam IPTEKS, seni, budaya akademik, etos kerja, politik Islam)[cite: 1].</li>
            <li><b>Sesi 8:</b> Modul 8 & 9 (Islam Rahmatan lil 'Alamin, kerukunan pluralis, & UAS)[cite: 1].</li>
          </ul>
        `
      },
      {
        id: "sub-4-6",
        judul: "🇮🇩 4.6 RAT Pendidikan Kewarganegaraan (MKWN4109)",
        isiTeks: `
          <p><b>Fokus:</b> Matkul wajib bela negara, wawasan nusantara, ketahanan nasional, & konstitusi hukum[cite: 1].</p>
          <ul>
            <li><b>Sesi 1–2:</b> Modul 1 & 2 (Hakikat & tujuan PKn, hakikat warga negara, kewarganegaraan, & identitas nasional)[cite: 1].</li>
            <li><b>Sesi 3 (Tugas 1):</b> Modul 3 (Pelaksanaan demokrasi dan Hak Asasi Manusia di Indonesia)[cite: 1].</li>
            <li><b>Sesi 4–5 (Tugas 2):</b> Modul 4 & 5 (Negara, konstitusi, penegakan hukum, serta implementasi Integrasi Nasional & Wawasan Nusantara)[cite: 1].</li>
            <li><b>Sesi 6–7 (Tugas 3):</b> Modul 6 & 7 (Implementasi Wawasan Nusantara, Integrasi Nasional, & Ketahanan Nasional di era globalisasi)[cite: 1].</li>
            <li><b>Sesi 8:</b> Review ketahanan nasional, dampak globalisasi, & persiapan UAS[cite: 1].</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "bab-5",
    judulBab: "⚡ BAB 5: Sistem Belajar Harian 2 Jam & Hacks Alumni Rahasia 🚀",
    deskripsi: "Metode Pomodoro 120 menit, eksekusi rotasi 6 matkul per minggu, SQ3R versi ngebut, dan hacks server UT.",
    kataKunci: ["Pomodoro", "SQ3R", "Feynman", "Blurting", "Subuh", "Rotasi Harian", "Batching"],
    subBab: [
      {
        id: "sub-5-1",
        judul: "⏱️ 5.1 Pembagian Blok Harian (120 Menit = 4 Siklus Pomodoro)",
        isiTeks: `
          <p><b>🎯 BLOK 1: OUTPUT LMS (60 MENIT - Presensi & Tugas)</b></p>
          <ul>
            <li><i>Siklus 1 (25 Mnt):</i> Absen portal LMS + Ketik draf Diskusi pakai <span class="tooltip" data-title="Tulis ulang materi pakai gaya bahasa sehari-hari">Feynman Technique</span>[cite: 1].</li>
            <li><i>Istirahat (5 Mnt):</i> Rehat sejenak.</li>
            <li><i>Siklus 2 (25 Mnt):</i> Posting jawaban Diskusi / Kerjakan Tugas Tutorial[cite: 1].</li>
            <li><i>Istirahat (5 Mnt):</i> Rehat sejenak.</li>
          </ul>
          <br>
          <p><b>📖 BLOK 2: RETENSI MODUL (60 MENIT - Penguasaan Modul & UAS)</b></p>
          <ul>
            <li><i>Siklus 3 (25 Mnt):</i> Bedah 1 Kegiatan Belajar (KB) pakai <span class="tooltip" data-title="Metode baca cepat: Survey, Question, Read & Recite, Review">SQ3R Versi Cepat</span>[cite: 1].</li>
            <li><i>Istirahat (5 Mnt):</i> Rehat sejenak.</li>
            <li><i>Siklus 4 (25 Mnt):</i> Uji ingatan tanpa ngintip modul (<span class="tooltip" data-title="Metode tuangin semua ingatan ke kertas kosong">Blurting Method</span>) + latihan Tes Formatif[cite: 1].</li>
          </ul>
        `
      },
      {
        id: "sub-5-2",
        judul: "📅 5.2 Eksekusi Rotasi Mingguan (Untuk 6-7 Matkul)",
        isiTeks: `
          <ul>
            <li><b>🔴 Senin (Matkul A & B):</b> Klik absen <b>semua matkul sekaligus</b> jam 00:01 Subuh &rarr; Ketik & submit Diskusi Matkul A & B &rarr; Baca 1 KB Matkul A + 1 KB Matkul B[cite: 1].</li>
            <li><b>🟠 Selasa (Matkul C & D):</b> Ketik & submit Diskusi Matkul C & D &rarr; Baca 1 KB Matkul C + 1 KB Matkul D[cite: 1].</li>
            <li><b>🟡 Rabu (Matkul E & F):</b> Ketik & submit Diskusi Matkul E & F <i>(Beres! Seluruh diskusi mingguan tuntas 100% hari ini!)</i> &rarr; Baca 1 KB Matkul E + 1 KB Matkul F[cite: 1].</li>
            <li><b>🟢 Kamis:</b>
              <br><i>- Minggu Biasa (Sesi 1, 2, 4, 6, 8):</i> Cek nilai, masukan tutor, atau balas komentar diskusi Matkul A, B, C[cite: 1].
              <br><i>- Minggu TUGAS (Sesi 3, 5, 7):</i> Eksekusi pengerjaan <b>Tugas Pribadi (PDF/Word)</b> Matkul A, B, C[cite: 1].
            </li>
            <li><b>🔵 Jumat:</b>
              <br><i>- Minggu Biasa:</i> Cek nilai/balas komentar Matkul D, E, F[cite: 1].
              <br><i>- Minggu TUGAS:</i> Eksekusi <b>Tugas Pribadi</b> Matkul D, E, F + Cek format + Upload semua tugas ke LMS[cite: 1].
            </li>
            <li><b>🟣 Sabtu (Buffer Time):</b> Blok 1 (60 mnt) beresin tugas sisa. Blok 2 (60 mnt) <span class="tooltip" data-title="Latihan mengulang materi dengan jeda waktu">Spaced Repetition</span> latihan soal formatif acak dari 6 matkul[cite: 1].</li>
            <li><b>⚪ Minggu (Rest Total):</b> Libur total dari LMS & modul! Main, nongkrong, istirahat mental[cite: 1]! 🧘‍♂️✨</li>
          </ul>
        `
      },
      {
        id: "sub-5-3",
        judul: "🤫 5.3 Hacks Rahasia Alumni UT yang Jarang Orang Tahu",
        isiTeks: `
          <ul>
            <li><b>🌅 Absen di Subuh Hari:</b> Klik absen pas jam 04:00 - 06:00 WIB. Server LMS super lancar, bye-bye loading lama![cite: 1]</li>
            <li><b>🌙 Upload Tugas di Malam Hari:</b> Upload file Tugas Pribadi pas malam buat hindari gagal upload karena lonjakan trafik server siang hari[cite: 1].</li>
            <li><b>🗣️ Anti-Plagiarisme Feynman:</b> Baca 1 paragraf modul, tutup, lalu ketik pakai bahasa sehari-hari seolah lagi ngerumpi bahas materi ke temen! Tutor sangat suka jawaban orisinal ini dan auto ngasih nilai 85–100[cite: 1].</li>
            <li><b>⚡ SQ3R Versi Cepat (Cuma 30 Mnt!):</b> <i>Survey (2 mnt)</i> langsung baca Rangkuman di akhir modul &rarr; <i>Question (1 mnt)</i> ubah sub-judul jadi pertanyaan &rarr; <i>Read & Recite (22 mnt)</i> baca modul TAPI fokus nyari jawaban pertanyaannya aja &rarr; <i>Review (5 mnt)</i> gas kerjain Tes Formatif[cite: 1].</li>
            <li><b>🛑 Prinsip Batching:</b> Matikan semua notif HP pas jalanin 25 menit Pomodoro. Selesaiin 1 jenis kerjaan sampai tuntas sebelum pindah ke tugas lain[cite: 1].</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "bab-6",
    judulBab: "🚨 BAB 6: Prosedur Kontingensi (Skenario Darurat & Penyelamatan) 🛠️",
    deskripsi: "Rencana cadangan jitu kalau kamu selesai lebih awal, cuti kantor, sakit, mager, atau keteteran tugas parah (backlog).",
    kataKunci: ["Darurat", "Mager", "Lembur", "Backlog", "Triase Nilai", "Batching System"],
    subBab: [
      {
        id: "sub-6-1",
        judul: "🆘 6.1 Rencana Cadangan (Skenario A & B)",
        isiTeks: `
          <ul>
            <li><b>✨ Skenario A (Selesai Lebih Awal / Ada Sisa Waktu):</b>
              <br><i>- Tabung Draf:</i> Buka LMS minggu depan, intip pertanyaan diskusi berikutnya, dan catat ide jawabannya di Note HP[cite: 1].
              <br><i>- Investasi UAS:</i> Baca Rangkuman modul matkul yang paling susah di aplikasi <span class="tooltip" data-title="Ruang Baca Virtual">RBAV</span> Mobile pas lagi di jalan[cite: 1].
            </li>
            <li><b>📦 Skenario B (Tanggal Merah / Cuti / Kantor Kebakaran):</b>
              <br><i>- Batching System:</i> Mumpung libur, langsung borong ngerjain Tugas Tutorial (Sesi 3/5/7) untuk 3–4 matkul sekaligus biar 1-2 minggu ke depan hidup lu damai sejahtera[cite: 1].
            </li>
          </ul>
        `
      },
      {
        id: "sub-6-2",
        judul: "💥 6.2 Penyelamatan Darurat (Skenario C & D)",
        isiTeks: `
          <ul>
            <li><b>🤒 Skenario C (Lembur Mendadak / Sakit / Mager / Capek):</b>
              <br><i>- Wajib Presensi 2 Menit:</i> Walau sakit/mager, TETAP buka LMS di HP pas subuh dan klik tombol <b>Absen</b> biar nilai kehadiran 20% tetep aman[cite: 1].
              <br><i>- Shift to Saturday:</i> Geser jadwal ngerjain diskusinya ke slot <b>Sabtu (Buffer Time)</b>[cite: 1].
            </li>
            <li><b>💀 Skenario D (Ketinggalan Parah / <span class="tooltip" data-title="Tugas yang menumpuk">Backlog</span> Berhari-hari):</b>
              <br><i>- Langkah 1 (<span class="tooltip" data-title="Sistem pemilahan prioritas korban darurat">Triase Nilai</span>):</i> Berhenti nangis, abaikan modul dan diskusi lama yang deadline-nya mepet! <b>FOKUS 100% HANYA KERJAIN TUGAS (Sesi 3, 5, 7) & PRESENSI</b>. Kenapa? Karena bobot Tugas Tutorial itu raksasa banget (50%!) 🔥[cite: 1].
              <br><i>- Langkah 2 (Marathon Catch-Up):</i> Pakai Sabtu & Minggu (2 jam pagi + 2 jam malam) KHUSUS buat ngetik berkas tugas[cite: 1].
              <br><i>- Langkah 3 (Penyelamat UAS):</i> Jangan baca modul dari awal. Langsung loncat baca "Rangkuman" di akhir kegiatan belajar dan kerjain Tes Formatif di portal UT[cite: 1].
            </li>
          </ul>
        `
      }
    ]
  },
  {
    id: "bab-7",
    judulBab: "💡 BAB 7: Glosarium & Kamus Gaul UT 📖",
    deskripsi: "Kumpulan singkatan penting dan metode belajar kekinian yang wajib banget dihafal sama anak UT.",
    kataKunci: ["LMS", "SIA UT", "BMP", "RBAV", "AIDA YUNIKA", "SUO", "KTPU", "RPS", "RAT", "Active Recall", "Blurting"],
    subBab: [
      {
        id: "sub-7-1",
        judul: "🔍 7.1 Kamus Istilah Sistem & Administrasi",
        isiTeks: `
          <ul>
            <li><b>💻 <span class="tooltip" data-title="Learning Management System">LMS</span>:</b> Portal web utama buat kita kuliah online, absen tiap minggu, dan ngumpulin tugas diskusi/pribadi (<i>elearning.ut.ac.id</i>)[cite: 1].</li>
            <li><b>💳 <span class="tooltip" data-title="Sistem Informasi Akademik UT">SIA UT</span>:</b> Portal buat ngurus administrasi kayak registrasi matkul, bayar UKT, dan ngecek nilai akhir (<i>my.ut.ac.id</i>)[cite: 1].</li>
            <li><b>📚 <span class="tooltip" data-title="Buku Materi Pokok">BMP</span> & <span class="tooltip" data-title="Ruang Baca Virtual">RBAV</span>:</b> BMP itu buku modul tebal fisiknya, sedangkan RBAV itu perpustakaan digitalnya yang bisa dibuka di HP atau laptop (<i>pustaka.ut.ac.id</i>)[cite: 1].</li>
            <li><b>🤖 <span class="tooltip" data-title="Artificial Intelligence pemantau integritas akademik">AIDA YUNIKA</span>:</b> Asisten robot pintar/AI di LMS UT yang tugasnya ngelacak kalau ada indikasi plagiat/nyontek antar mahasiswa[cite: 1].</li>
            <li><b>🖥️ <span class="tooltip" data-title="Sentra Ujian Online">SUO</span> & <span class="tooltip" data-title="Kartu Tanda Peserta Ujian">KTPU</span>:</b> SUO itu ujian di ruangan lab komputer kantor UT, sedangkan KTPU itu tiket sakti alias Kartu Tanda Peserta Ujian kamu[cite: 1].</li>
          </ul>
        `
      },
      {
        id: "sub-7-2",
        judul: "🧠 7.2 Kamus Istilah Akademik & Metode Belajar",
        isiTeks: `
          <ul>
            <li><b>📜 <span class="tooltip" data-title="Rencana Pembelajaran Semester">RPS</span> & <span class="tooltip" data-title="Rancangan Aktivitas Tutorial">RAT</span>:</b> RPS itu dokumen acuan materi makro buat nyusun soal UAS, sedangkan RAT itu kalender kerja detail topik per sesi di Tuton[cite: 1].</li>
            <li><b>🧠 <span class="tooltip" data-title="Teknik mengingat paksa tanpa melihat buku">Active Recall</span> & <span class="tooltip" data-title="Mencatat semua ingatan secara acak di kertas kosong">Blurting</span>:</b> Ini metode dewa buat nginget materi UAS! Caranya: baca materi, tutup bukunya, lalu paksa otak buat ngingat dan tulis ulang semua materi itu di kertas kosong tanpa ngintip buku sama sekali[cite: 1].</li>
          </ul>
        `
      }
    ]
  }
];

// Pastikan variabel terbaca secara global agar tidak blank!
window.contentData = contentData;
