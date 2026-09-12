/**
 * Database Rangkuman Khusus MABA Ilmu Komunikasi 2026 (Semester 1 / Ganjil 2026)
 * Sumber: Grup WA Ilkom + RAT, SAT, & RPS Resmi UT
 */
const contentData = [
  {
    id: "bab-1",
    judulBab: "🎮 BAB 1: Aturan Main, Jenis Tugas, & AI AIDA YUNIKA 🤖",
    deskripsi: "Sistem Tuton vs Tuweb, rincian 2 jenis tugas LMS, AI AIDA YUNIKA, 6 pilar jawaban, rumus bobot nilai, dan sanksi akademik.",
    kataKunci: ["Tuton", "Tuweb", "LMS", "AIDA YUNIKA", "Tugas", "UAS", "Evaluasi Tutor", "Sanksi"],
    subBab: [
      {
        id: "sub-1-1",
        judul: "⚔️ 1.1 Tuton vs Tuweb / TTM (Pilih Mana? 🤔)",
        isiTeks: `
          <p><b>💻 Tuton (Tutorial Online):</b> Sistem <i>default</i> GRATIS yang otomatis aktif pas pendaftaran UT 🥳. Sifatnya 100% mandiri, tanpa Zoom rutin, dan pengerjaannya berbasis <i>deadline</i> mingguan.</p>
          <br>
          <p><b>🎥 Tuweb / TTM (Tatap Muka):</b> Perkuliahan via Zoom atau tatap muka <i>offline</i> 🏫. Harus diajukan manual (bayar ≈Rp 150.000 per matkul & minimal 20 mahasiswa). Jika ambil ini, Tuton tetap aktif (<i>double system</i>)! Sangat cocok untuk yang punya banyak waktu luang (<i>hardolin</i>).</p>
        `,
        gambar: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
        captionGambar: "Gambar 1.1: Perbandingan Sistem Tuton Mandiri vs Tuweb Webinar 📊"
      },
      {
        id: "sub-1-2",
        judul: "📝 1.2 Dua Jenis Tugas di LMS UT (Wajib Paham! 🎯)",
        isiTeks: `
          <ul>
            <li><b>💬 Tugas Umum / Diskusi Mingguan (Sesi 1 s.d. 8):</b> Forum terbuka bersama tutor dan teman sekelas 👥. Diberikan 1 topik/kasus untuk ditanggapi dengan sudut pandang pribadi + referensi. Deadline <b>1 minggu per sesi</b>. Ada 6–7 matkul, berarti 1 minggu wajib kumpul 6–7 diskusi!</li>
            <li><b>📑 Tugas Mata Kuliah / Pribadi (Tugas 1, 2, 3 di Sesi 3, 5, 7):</b> Tugas pribadi tertutup (cuma kamu dan tutor) 🔒. Waktu pengerjaan <b>2 minggu</b> dengan bobot raksasa (<b>50% dari total nilai Tuton! 😱</b>). File dikirim format PDF/Word.
              <br><i>- Tipe 1:</i> Dosen kasih template/soal di LMS, tinggal edit.
              <br><i>- Tipe 2:</i> Susun manual dari nol di laptop pakai cover identitas lengkap (Logo UT, Nama, NIM, Prodi, UT Daerah, & Nama Dosen).
            </li>
          </ul>
        `,
        gambar: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80",
        captionGambar: "Gambar 1.2: Pengelolaan Tugas Pribadi & Cover Akademik 📁"
      },
      {
        id: "sub-1-3",
        judul: "🤖 1.3 Peran AI AIDA YUNIKA & Update Evaluasi Tutor ⚖️",
        isiTeks: `
          <p><b>🕵️‍♂️ Apa itu AIDA YUNIKA?</b> AIDA YUNIKA adalah sistem AI pemantau integritas akademik di LMS UT 🤖. AIDA <b>BUKAN</b> dosen pengganti dan <b>BUKAN</b> penentu nilai! Penentu nilai tetap tutor manusia 👨‍🏫. Sekadar "lolos AI detector" tidak menjamin nilai 100 jika jawaban tidak berbobot!</p>
          <br>
          <p><b>🚨 Update Kebijakan Evaluasi Tutor:</b> Mulai semester ini, angket Evaluasi Tutor resmi dibuka di <b>2 Sesi</b>, yaitu <b>SESI 3</b> (evaluasi tengah) dan <b>SESI 7</b> (evaluasi penutup) di portal LMS 📝.</p>
        `,
        gambar: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80",
        captionGambar: "Gambar 1.3: Pengawasan Integritas Berbasis Teknologi AI 🛡️"
      },
      {
        id: "sub-1-4",
        judul: "🌟 1.4 Enam Pilar Jawaban Nilai Bagus (Auto 85-100) 💯",
        isiTeks: `
          <ol>
            <li><b>✍️ Parafrase Wajib:</b> Tulis ulang materi modul pakai gaya bahasamu sendiri seolah menceritakan ulang ke teman agar terhindar dari plagiarisme.</li>
            <li><b>📚 Cantumkan Referensi:</b> Wajib tulis sumber rujukan (nama modul, bab, halaman, atau jurnal) di akhir jawaban.</li>
            <li><b>🎯 Pahami Maksud Soal:</b> Baca instruksi, batasan masalah, dan kriteria penilaian tutor secara cermat.</li>
            <li><b>💬 Jangan Malu Bertanya:</b> Gunakan fitur <i>Private Message</i> LMS jika ada instruksi modul yang membingungkan.</li>
            <li><b>🚀 Jangan Menunda:</b> Eksekusi langsung saat sesi dibuka agar beban tidak menumpuk di akhir minggu.</li>
            <li><b>🛑 Anti SKS (Sistem Kebut Semalam):</b> Hindari ngerjain mendadak dalam 1 malam karena merusak kualitas jawaban dan memicu <i>burnout</i>.</li>
          </ol>
        `
      },
      {
        id: "sub-1-5",
        judul: "📊 1.5 Rumus Bobot Nilai & Syarat Maut UAS ☠️",
        isiTeks: `
          <p><b>🧮 Rumus Bobot Nilai Tuton:</b> Presensi (<b>20%</b>) + Diskusi Sesi 1-8 (<b>30%</b>, total nilai tetap dibagi 8) + Tugas Tutorial Sesi 3, 5, 7 (<b>50%</b>, total nilai tetap dibagi 3).</p>
          <br>
          <p><b>☠️ Aturan Maut UAS:</b> Mahasiswa <b>WAJIB menjawab benar minimal 30% di UAS</b>! Jika skor UAS di bawah 30%, seluruh nilai Tuton setinggi apa pun akan <b>HANGUS OTOMATIS (dapat nilai E/D)! 😭</b></p>
          <br>
          <p><b>🚫 Sanksi Akademik Resmi:</b>
            <br>• <i>Deaktivasi Tuton:</i> Bolos presensi/diskusi Sesi 1–3 berturut-turut = Akun Tuton nonaktif otomatis mulai Sesi 4.
            <br>• <i>Nilai NOL (0):</i> Menjiplak ATAU memberi jiplakan diskusi/tugas = Nilai 0.
            <br>• <i>Drop Out Tuton:</i> Menggunakan <b>JOKI</b> = Penghentian kesertaan Tuton untuk SELURUH mata kuliah 1 semester! ⛔
          </p>
        `
      }
    ]
  },
  {
    id: "bab-2",
    judulBab: "🗺️ BAB 2: Trik Katalog, Kode Matkul, & Teman Sekelas 👥",
    deskripsi: "Navigasi pemetaan kode mata kuliah katalog vs LMS, serta tips berinteraksi dengan teman sekelas se-Indonesia.",
    kataKunci: ["Katalog", "Kode Matkul", "BMP", "RAT", "SAT", "Forum Perkenalan", "SALUT"],
    subBab: [
      {
        id: "sub-2-1",
        judul: "🔑 2.1 Kode LMS vs Kode Modul (Katalog Adalah Kunci! 🗝️)",
        isiTeks: `
          Kode matkul di web LMS tidak selalu sama dengan kode Buku Materi Pokok (BMP/Modul) 📑. Selama kode bahan ajar tersebut sesuai dengan yang tercantum di <b>Katalog Resmi UT</b>, maka materi dipastikan 100% benar! 👌
        `
      },
      {
        id: "sub-2-2",
        judul: "🇮🇩 2.2 Teman Sekelas Acak (Nationwide & Abroad) 🤝",
        isiTeks: `
          Rekan satu kelas di LMS adalah gabungan mahasiswa dari seluruh UT Daerah se-Indonesia, lintas prodi, dan lintas semester, bahkan ada yang dari luar negeri (SALUT) 🌐.
          <br><br>
          <b>🙋‍♂️ Cara Cari Teman Resmi:</b> Gak perlu repot nyari di grup WA <i>unofficial</i>. Buka LMS &rarr; Pilih Matkul &rarr; Bagian <i>Pendahuluan</i> &rarr; <i>Forum Perkenalan</i>. Sapa tutor dan teman 1 kelasmu di sana! ✨
        `
      },
      {
        id: "sub-2-3",
        judul: "📋 2.3 Wajib Cek RAT & SAT 🛣️",
        isiTeks: `
          Unduh dokumen <b>RAT (Rancangan Aktivitas Tutorial)</b> & <b>SAT (Satuan Acara Tutorial)</b> pada bagian Pendahuluan matkul karena dua dokumen itu adalah kunci untuk mengetahui roadmap bahasan selama 8 sesi ke depan 🎯.
        `
      }
    ]
  },
  {
    id: "bab-3",
    judulBab: "🗓️ BAB 3: Kalender & Jadwal Resmi Tuton Ganjil 2026 ⏰",
    deskripsi: "Jadwal presensi, diskusi mingguan Sesi 1-8, serta batas pengerjaan Tugas 1, 2, dan 3.",
    kataKunci: ["Jadwal", "Kalender 2026", "Sesi 1-8", "Deadline", "Tugas 1 2 3"],
    subBab: [
      {
        id: "sub-3-1",
        judul: "📌 3.1 Rules Presensi & Jadwal Diskusi Sesi 1–8 📅",
        isiTeks: `
          <p><b>⚡ Rules Presensi:</b> Absen terbuka setiap hari Senin jam 00:01 WIB. Cukup klik <b>1 kali saja</b> per mata kuliah setiap pertemuannya! ☝️</p>
          <br>
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr><th>Sesi 📌</th><th>Rentang Waktu Diskusi ⏳</th><th>Rincian Aktivitas Wajib 🚨</th></tr>
              </thead>
              <tbody>
                <tr><td>Sesi 1</td><td>14 – 20 September 2026</td><td>Klik Absen, Forum Perkenalan, Unduh RAT/SAT, Submit Diskusi 1</td></tr>
                <tr><td>Sesi 2</td><td>21 – 27 September 2026</td><td>Klik Absen, Submit Diskusi 2, Cek Nilai/Masukan Diskusi 1</td></tr>
                <tr><td>Sesi 3</td><td>28 Sep – 4 Okt 2026</td><td>Klik Absen, Submit Diskusi 3, <b>Wajib Isi Evaluasi Tutor Tahap 1</b></td></tr>
                <tr><td>Sesi 4</td><td>5 – 11 Oktober 2026</td><td>Klik Absen, Submit Diskusi 4, Pastikan Tugas 1 Ter-upload</td></tr>
                <tr><td>Sesi 5</td><td>12 – 18 Oktober 2026</td><td>Klik Absen, Submit Diskusi 5, Unduh & Pikirkan Tugas 2</td></tr>
                <tr><td>Sesi 6</td><td>19 – 25 Oktober 2026</td><td>Klik Absen, Submit Diskusi 6, Pastikan Tugas 2 Ter-upload</td></tr>
                <tr><td>Sesi 7</td><td>26 Okt – 1 Nov 2026</td><td>Klik Absen, Submit Diskusi 7, <b>Wajib Isi Evaluasi Tutor Tahap 2</b></td></tr>
                <tr><td>Sesi 8</td><td>2 – 8 November 2026</td><td>Klik Absen Sesi Penutup, Submit Diskusi 8, Final Prep UAS</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        id: "sub-3-2",
        judul: "🔥 3.2 Jadwal Tugas Pribadi (Deadline 2 Minggu!) ⏰",
        isiTeks: `
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr><th>Tugas 📑</th><th>Sesi LMS 📌</th><th>Batas Waktu Pengerjaan ⌛</th></tr>
              </thead>
              <tbody>
                <tr><td><b>Tugas 1 💥</b></td><td>Sesi 3</td><td>28 September – 12 Oktober 2026 (23:59 WIB)</td></tr>
                <tr><td><b>Tugas 2 💥</b></td><td>Sesi 5</td><td>12 Oktober – 26 Oktober 2026 (23:59 WIB)</td></tr>
                <tr><td><b>Tugas 3 💥</b></td><td>Sesi 7</td><td>26 Oktober – 9 November 2026 (23:59 WIB)</td></tr>
              </tbody>
            </table>
          </div>
        `
      }
    ]
  },
  {
    id: "bab-4",
    judulBab: "💡 BAB 4: Kamus Gaul UT (Glosarium Akademik) 📖",
    deskripsi: "Daftar akronim dan istilah penting ekosistem UT beserta metode belajar modern.",
    kataKunci: ["LMS", "SIA", "BMP", "RBAV", "SUO", "KTPU", "RPS", "RAT", "Active Recall", "Blurting"],
    subBab: [
      {
        id: "sub-4-1",
        judul: "🔍 4.1 Glosarium Istilah Penting UT ✨",
        isiTeks: `
          <ul>
            <li><b>💻 LMS (Learning Management System):</b> Web utama perkuliahan online, presensi, & kumpul tugas (<i>elearning.ut.ac.id</i>).</li>
            <li><b>💳 SIA UT:</b> Portal administrasi untuk registrasi, UKT, & cek nilai akhir (<i>my.ut.ac.id</i>).</li>
            <li><b>📚 BMP & RBAV:</b> BMP adalah modul fisik, RBAV adalah Ruang Baca Virtual / perpustakaan digital (<i>pustaka.ut.ac.id</i>).</li>
            <li><b>🤖 AIDA YUNIKA:</b> Asisten teknologi/AI di LMS UT untuk menjaga integritas akademik.</li>
            <li><b>🖥️ SUO & KTPU:</b> SUO (Sentra Ujian Online di lab komputer UT) dan KTPU (Kartu Tanda Peserta Ujian).</li>
            <li><b>📜 RPS & RAT:</b> RPS acuan makro modul untuk UAS; RAT kalender kerja 8 sesi Tuton.</li>
            <li><b>🧠 Active Recall & Blurting:</b> Metode mengingat materi tanpa melihat modul untuk menguji pemahaman persiapan UAS.</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "bab-5",
    judulBab: "⚡ BAB 5: Rutinitas 2 Jam/Hari & Hacks Alumni 🚀",
    deskripsi: "Pembagian 4 siklus Pomodoro, rotasi harian 6-7 matkul, SQ3R cepat, dan hacks rahasia alumni.",
    kataKunci: ["Pomodoro", "SQ3R", "Feynman", "Blurting", "RBAV", "Subuh", "Rotasi Harian"],
    subBab: [
      {
        id: "sub-5-1",
        judul: "⏱️ 5.1 Pembagian 4 Siklus Pomodoro Harian (120 Menit) 🍅",
        isiTeks: `
          <p><b>🎯 BLOK 1: OUTPUT LMS (60 MENIT)</b></p>
          <ul>
            <li><i>Siklus 1 (25 Mnt):</i> Absen LMS + Ketik draf Diskusi (<i>Feynman Technique</i>).</li>
            <li><i>Rehat (5 Mnt)</i></li>
            <li><i>Siklus 2 (25 Mnt):</i> Posting Diskusi / Kerjakan Tugas Tutorial.</li>
            <li><i>Rehat (5 Mnt)</i></li>
          </ul>
          <br>
          <p><b>📖 BLOK 2: RETENSI MODUL (60 MENIT)</b></p>
          <ul>
            <li><i>Siklus 3 (25 Mnt):</i> Bedah 1 Kegiatan Belajar (KB) via <i>SQ3R Versi Cepat</i>.</li>
            <li><i>Rehat (5 Mnt)</i></li>
            <li><i>Siklus 4 (25 Mnt):</i> Uji ingatan (<i>Blurting Method</i>) + Tes Formatif modal UAS.</li>
          </ul>
        `
      },
      {
        id: "sub-5-2",
        judul: "📅 5.2 Eksekusi Rotasi Mingguan (6-7 Matkul) 🗓️",
        isiTeks: `
          <ul>
            <li><b>🔴 Senin:</b> Absen semua matkul jam 00:01/Subuh &rarr; Submit Diskusi Matkul A & B &rarr; SQ3R 1 KB Matkul A & B.</li>
            <li><b>🟠 Selasa:</b> Submit Diskusi Matkul C & D &rarr; SQ3R 1 KB Matkul C & D.</li>
            <li><b>🟡 Rabu:</b> Submit Diskusi Matkul E & F <i>(Diskusi minggu berjalan tuntas 100%! 🎉)</i>.</li>
            <li><b>🟢 Kamis:</b> Cek masukan tutor (Minggu Biasa) ATAU Kerjakan <b>Tugas Pribadi</b> Matkul A, B, C (Minggu Tugas).</li>
            <li><b>🔵 Jumat:</b> Cek masukan tutor (Minggu Biasa) ATAU Kerjakan <b>Tugas Pribadi</b> Matkul D, E, F & Upload.</li>
            <li><b>🟣 Sabtu (Buffer Time):</b> Slot cadangan sisa diskusi tertunda + <i>Spaced Repetition</i> latihan soal UAS.</li>
            <li><b>⚪ Minggu (Rest Total):</b> Libur total dari LMS & modul untuk menjaga stamina fisik & mental 🧘‍♂️✨.</li>
          </ul>
        `
      },
      {
        id: "sub-5-3",
        judul: "🤫 5.3 SQ3R Cepat & Hacks Rahasia Alumni UT 💎",
        isiTeks: `
          <p><b>⚡ SQ3R Versi Cepat (30 Menit):</b> <i>Survey (2 mnt)</i> baca Rangkuman KB &rarr; <i>Question (1 mnt)</i> ubah sub-judul jadi pertanyaan &rarr; <i>Read & Recite (22 mnt)</i> cari jawaban &rarr; <i>Review (5 mnt)</i> kerjakan Tes Formatif.</p>
          <br>
          <ul>
            <li><b>🌅 Absen Pas Subuh (04:00-06:00 WIB):</b> Server LMS sangat lancar dan bebas loading muter-muter.</li>
            <li><b>🌙 Upload Tugas Malam Hari:</b> Meminimalisir gagal unggah akibat trafik server padat.</li>
            <li><b>🗣️ Anti-Plagiarisme Feynman:</b> Tulis ulang modul pakai bahasa sehari-hari seolah menjelaskan ke teman (Tutor suka ini & sering beri nilai 85–100!).</li>
            <li><b>📱 Skimming RBAV Mobile:</b> Manfaatkan waktu luang di jalan untuk membaca Rangkuman KB di aplikasi RBAV HP.</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "bab-6",
    judulBab: "🚨 BAB 6: Skenario Darurat & Prosedur Kontingensi 🛠️",
    deskripsi: "Langkah penyelamatan saat lembur, mager, sakit, atau ketinggalan materi (backlog).",
    kataKunci: ["Darurat", "Mager", "Lembur", "Backlog", "Presensi 2 Menit", "Triase Nilai"],
    subBab: [
      {
        id: "sub-6-1",
        judul: "🆘 6.1 Prosedur Rencana Cadangan (Side Scenarios) 🛠️",
        isiTeks: `
          <ul>
            <li><b>✨ Skenario Sisa Waktu (Tabung Draf):</b> Buka LMS minggu depan, baca prompt diskusi berikutnya, catat draf di HP + baca Rangkuman KB di RBAV Mobile.</li>
            <li><b>📦 Skenario Cuti / Lembur (Batching System):</b> Kerjakan Tugas Tutorial sekaligus untuk 3-4 matkul agar minggu depan lebih santai.</li>
            <li><b>🤒 Skenario Mager / Sakit / Lembur (Presensi 2 Menit):</b> Sempatkan <b>Presensi 2 Menit</b> via HP pas subuh agar nilai 20% aman. Pindahkan diskusi ke hari <b>Sabtu (Buffer Time)</b>.</li>
            <li><b>💥 Skenario Ketinggalan Parah / Backlog (Triase Nilai):</b> Abaikan diskusi lama yang deadline-nya mepet! <b>FOKUS 100% pada Tugas Tutorial (Sesi 3, 5, 7) & Presensi</b> karena bobot tugas gede banget (<b>50%!</b>) 🔥. Pelajari Rangkuman KB & Tes Formatif buat modal UAS.</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "bab-7",
    judulBab: "📚 BAB 7: Rincian RAT & RPS 6 Mata Kuliah Utama 🎓",
    deskripsi: "Pemetaan rincian modul dan bahasan 8 sesi untuk 6 mata kuliah utama semester 1.",
    kataKunci: ["RAT", "RPS", "FSIK4101", "FSIK4102", "FSIK4103", "SKOM4315", "MKDU4221", "MKWN4109"],
    subBab: [
      {
        id: "sub-7-1",
        judul: "📡 7.1 RAT Pengantar Ilmu Komunikasi (FSIK4101)",
        isiTeks: `
          <p><b>Fokus:</b> Fondasi dasar ilmu komunikasi (hakikat, motif, elemen, model, teori, & teknik).</p>
          <ul>
            <li><b>Sesi 1–2:</b> Modul 1 (Hakikat manusia & komunikasi, motif berkomunikasi).</li>
            <li><b>Sesi 3 (Tugas 1):</b> Modul 4 (Elemen, model-model komunikasi, & tradisi teori).</li>
            <li><b>Sesi 4–5 (Tugas 2):</b> Modul 5 (Fungsi, teknik, & media komunikasi).</li>
            <li><b>Sesi 6–7 (Tugas 3):</b> Modul 7 & 8 (Komunikasi kelompok, organisasi, massa, antarbudaya, & penelitian).</li>
            <li><b>Sesi 8:</b> Review materi keseluruhan & persiapan UAS.</li>
          </ul>
        `
      },
      {
        id: "sub-7-2",
        judul: "💬 7.2 RAT Komunikasi Personal Bermedia / KAP (FSIK4102 / SKOM4313)",
        isiTeks: `
          <p><b>Fokus:</b> Komunikasi antarpribadi, persepsi diri, mendengarkan efektif, & manajemen konflik online.</p>
          <ul>
            <li><b>Sesi 1–2:</b> Modul 1 & 2 (Konsep dasar KAP & persepsi diri).</li>
            <li><b>Sesi 3 (Tugas 1):</b> Modul 3 (Mendengarkan efektif & hambatan KAP).</li>
            <li><b>Sesi 4–5 (Tugas 2):</b> Modul 4–6 (Komunikasi verbal, non-verbal, & pengembangan hubungan).</li>
            <li><b>Sesi 6–7 (Tugas 3):</b> Modul 7 (Konflik KAP, jenis budaya, gender, & konflik media online).</li>
            <li><b>Sesi 8:</b> Modul 8 & 9 (Strategi manajemen konflik & siklus hubungan antarpribadi).</li>
          </ul>
        `
      },
      {
        id: "sub-7-3",
        judul: "🎤 7.3 RAT Public Speaking (FSIK4103)",
        isiTeks: `
          <p><b>Fokus:</b> Keterampilan praktik berbicara publik, penyusunan materi, & alat bantu visual.</p>
          <ul>
            <li><b>Sesi 1–2:</b> Modul 1–3 (Prinsip dasar, eksplorasi ide, & teknik topik PS).</li>
            <li><b>Sesi 3 (Tugas 1):</b> Modul 3–5 (Analisis pendengar & data pendukung PS).</li>
            <li><b>Sesi 4–5 (Tugas 2):</b> Modul 6 (Struktur isi PS & teknik pembukaan menarik).</li>
            <li><b>Sesi 6–7 (Tugas 3):</b> Modul 7 & 8 (Alat bantu visual, bahasa nonverbal, & eksekusi presentasi).</li>
            <li><b>Sesi 8:</b> Modul 9 (Bentuk-bentuk public speaking & media relation).</li>
          </ul>
        `
      },
      {
        id: "sub-7-4",
        judul: "📰 7.4 RAT Komunikasi Massa (SKOM4315 / FSIK4104)",
        isiTeks: `
          <p><b>Fokus:</b> Industri media massa, TIK, media baru, etika, & konvergensi digital.</p>
          <ul>
            <li><b>Sesi 1–2:</b> Hakikat, sejarah, & karakteristik media massa.</li>
            <li><b>Sesi 3 (Tugas 1):</b> Industri media massa (buku, koran, radio, TV, film).</li>
            <li><b>Sesi 4–5 (Tugas 2):</b> Perkembangan TIK, internet, & media baru (<i>new media</i>).</li>
            <li><b>Sesi 6–7 (Tugas 3):</b> Dampak media massa, etika, literasi media, & konvergensi global.</li>
            <li><b>Sesi 8:</b> Rangkuman media massa & persiapan UAS.</li>
          </ul>
        `
      },
      {
        id: "sub-7-5",
        judul: "🕌 7.5 RAT Pendidikan Agama Islam (MKDU4221)",
        isiTeks: `
          <p><b>Fokus:</b> Penerapan ajaran Islam dalam masyarakat plural, HAM, hukum, & IPTEKS.</p>
          <ul>
            <li><b>Sesi 1–2:</b> Modul 1 & 2 (Keimanan, Ketuhanan, & hakikat manusia).</li>
            <li><b>Sesi 3 (Tugas 1):</b> Modul 3 (Masyarakat beradab, peran umat, HAM, & demokrasi).</li>
            <li><b>Sesi 4–5 (Tugas 2):</b> Modul 4 & 5 (Kesadaran hukum, akhlak mulia, & sinergi IPTEKS-IMTAQ).</li>
            <li><b>Sesi 6–7 (Tugas 3):</b> Modul 6 & 7 (Peran Islam dalam seni, etos kerja, & politik Islam).</li>
            <li><b>Sesi 8:</b> Modul 8 & 9 (Islam Rahmatan lil 'Alamin & kerukunan pluralis).</li>
          </ul>
        `
      },
      {
        id: "sub-7-6",
        judul: "🇮🇩 7.6 RAT Pendidikan Kewarganegaraan (MKWN4109)",
        isiTeks: `
          <p><b>Fokus:</b> Hubungan warga negara, bela negara, wawasan nusantara, & konstitusi.</p>
          <ul>
            <li><b>Sesi 1–2:</b> Modul 1 & 2 (Hakikat PKn, warga negara, & identitas nasional).</li>
            <li><b>Sesi 3 (Tugas 1):</b> Modul 3 (Demokrasi & Hak Asasi Manusia di Indonesia).</li>
            <li><b>Sesi 4–5 (Tugas 2):</b> Modul 4 & 5 (Negara, konstitusi, hukum, & integrasi nasional).</li>
            <li><b>Sesi 6–7 (Tugas 3):</b> Modul 6 & 7 (Wawasan Nusantara & Ketahanan Nasional era global).</li>
            <li><b>Sesi 8:</b> Review ketahanan nasional & persiapan UAS.</li>
          </ul>
        `
      }
    ]
  }
];
