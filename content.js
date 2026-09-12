/**
 * Database Rangkuman Khusus MABA Ilmu Komunikasi 2026
 */
const contentData = [
  {
    id: "bab-1",
    judulBab: "🎮 BAB 1: Aturan Main, Jenis Tugas, & AI AIDA YUNIKA 🤖",
    deskripsi: "Panduan lengkap sistem perkuliahan Tuton vs Tuweb, jenis tugas LMS, AI pemantau integritas AIDA YUNIKA, 6 pilar jawaban, & syarat maut UAS!",
    kataKunci: ["Tuton", "Tuweb", "LMS", "AIDA YUNIKA", "Tugas", "UAS", "Evaluasi Tutor"],
    subBab: [
      {
        id: "sub-1-1",
        judul: "⚔️ 1.1 Tuton vs Tuweb (Pilih Mana, Nih? 🤔)",
        isiTeks: `
          <p><b>💻 Tuton (Tutorial Online):</b> Ini sistem <i>default</i> GRATIS yang langsung aktif pas kamu daftar UT 🥳. Sifatnya 100% mandiri, gak ada Zoom-zooman, dan pengerjaannya santai berbasis <i>deadline</i> mingguan!</p>
          <br>
          <p><b>🎥 Tuweb / TTM (Tatap Muka):</b> Pakai Zoom atau ketemu <i>offline</i> 🏫. Harus diajukan manual (bayar ± Rp 150.000 per matkul & minimal ada 20 anak). Kalau ambil ini, Tuton kamu tetap aktif (<i>double system</i>)! ⚡</p>
        `,
        gambar: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
        captionGambar: "Gambar 1.1: Perbandingan Tuton Mandiri vs Tuweb Zoom 📊"
      },
      {
        id: "sub-1-2",
        judul: "📝 1.2 Dua Jenis Tugas di LMS UT 🎯",
        isiTeks: `
          <ul>
            <li><b>💬 Tugas Umum (Diskusi Mingguan - Sesi 1 s.d. 8):</b> Forum terbuka bersama tutor dan teman sekelas 👥. Kamu dikasih 1 topik buat ditanggapi pakai sudut pandang sendiri plus referensi. Deadline-nya 1 minggu per sesi dan jawabanmu bisa dibaca serta disaling-tanggapin sama teman sekelas! 🔥</li>
            <li><b>📑 Tugas Mata Kuliah / Pribadi (Tugas 1, 2, 3 - Sesi 3, 5, 7):</b> Tugas pribadi yang cuma bisa diakses kamu dan tutor 🔒. Waktu pengerjaannya lebih panjang (<b>2 minggu</b>) dan bobotnya RAKSASA (<b>50% dari total nilai Tuton! 😱</b>). File dikirim format PDF/Word pakai cover identitas lengkap (Logo UT, Nama, NIM, Prodi, UT Daerah, & Nama Dosen).</li>
          </ul>
        `,
        gambar: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80",
        captionGambar: "Gambar 1.2: Pengelolaan Tugas & Portofolio Perkuliahan 📁"
      },
      {
        id: "sub-1-3",
        judul: "🤖 1.3 Mengenal AI AIDA YUNIKA & Evaluasi Tutor ⚖️",
        isiTeks: `
          <p><b>🕵️‍♂️ Siapa AIDA YUNIKA?</b> AIDA YUNIKA itu sistem AI pemantau integritas akademik di LMS UT 🤖. Inget ya, AIDA <b>BUKAN</b> dosen pengganti dan <b>BUKAN</b> penentu nilai kamu! Yang nentuin nilai tetap tutor manusia 👨‍🏫. Jadi, sekadar lolos <i>AI detector</i> gak jamin nilaimu otomatis 100 kalau jawabanmu gak berbobot!</p>
          <br>
          <p><b>🚨 Update Penting: Evaluasi Tutor Jadi 2 Kali!</b> Mulai semester ini, angket Evaluasi Tutor wajib kamu isi di <b>Sesi 3</b> (evaluasi tengah) dan <b>Sesi 7</b> (evaluasi akhir) langsung di portal LMS 📝.</p>
        `,
        gambar: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80",
        captionGambar: "Gambar 1.3: Pengawasan Integritas Berbasis Teknologi AI AIDA YUNIKA 🛡️"
      },
      {
        id: "sub-1-4",
        judul: "🌟 1.4 Enam Pilar Jawaban Nilai Auto 100 💯",
        isiTeks: `
          <ol>
            <li><b>✍️ Parafrase:</b> Tulis ulang kalimat dari modul pakai gaya bahasamu sendiri biar gak kena skor plagiarisme.</li>
            <li><b>📚 Cantumkan Referensi:</b> Wajib tulis sumber rujukan (nama modul, bab, halaman, atau buku) di akhir jawaban.</li>
            <li><b>💬 Interaksi Aktif:</b> Jangan cuma ngejawab kaku! Tanggapi pendapat temen sekelas dan tanya ke tutor kalau bingung. Ini bikin tutor <i>notice</i> keaktifanmu! ✨</li>
            <li><b>🎯 Pahami Maksud Soal:</b> Baca instruksi dan kemauan dosen baik-baik sebelum ngetik.</li>
            <li><b>🚀 Jangan Menunda:</b> Sesi buka langsung sikat biar gak numpuk di akhir minggu.</li>
            <li><b>🛑 Anti SKS (Sistem Kebut Semalam):</b> Ngerjain dadakan cuma bikin otak <i>burnout</i> dan jawaban asal-asalan.</li>
          </ol>
        `
      },
      {
        id: "sub-1-5",
        judul: "📊 1.5 Rumus Bobot Nilai & Syarat Maut UAS ☠️",
        isiTeks: `
          <p><b>🧮 Komposisi Bobot Tuton:</b> Absen (<b>20%</b>) + Diskusi (<b>30%</b>) + Tugas (<b>50%</b>).</p>
          <br>
          <p><b>☠️ Syarat Maut UAS:</b> Kamu <b>WAJIB dapet benar minimal 30% di UAS</b>! Kalau di bawah 30%, seluruh nilai Tuton setinggi apa pun bakal <b>HANGUS OTOMATIS (dapat nilai E/D)! 😭</b></p>
          <br>
          <p><b>🚫 Sanksi Akademik:</b> Copas/Menjiplak = Nilai 0 ❌. Pakai Joki = Auto Drop Out Tuton 1 Semester ⛔. Bolos absen/diskusi Sesi 1–3 berturut-turut = Akun Tuton mati otomatis di Sesi 4 💀.</p>
        `
      }
    ]
  },
  {
    id: "bab-2",
    judulBab: "🗺️ BAB 2: Trik Katalog, Kode Matkul, & Teman Sekelas 👥",
    deskripsi: "Navigasi pemetaan kode mata kuliah katalog vs LMS, serta tips berinteraksi dengan teman sekelas se-Indonesia!",
    kataKunci: ["Katalog", "Kode Matkul", "BMP", "RAT", "SAT", "Forum Perkenalan"],
    subBab: [
      {
        id: "sub-2-1",
        judul: "🔑 2.1 Kode LMS vs Modul (Katalog Adalah Kunci! 🗝️)",
        isiTeks: `
          Kode matkul di web LMS kadang beda sama kode Buku Materi Pokok (BMP/Modul) 📑. Gak usah bingung, kuncinya ada di <b>Katalog Kurikulum UT</b>. Selama materi modul sesuai dengan Katalog resmi, berarti acuan kamu udah 100% bener! 👌
        `
      },
      {
        id: "sub-2-2",
        judul: "🇮🇩 2.2 Teman Sekelas Acak Se-Indonesia & Cara Kenalan 🤝",
        isiTeks: `
          Teman sekelas kamu di LMS itu gabungan mahasiswa lintas semester, lintas prodi, dan berasal dari seluruh UT Daerah se-Indonesia sampai SALUT Luar Negeri 🌐.
          <br><br>
          <b>🙋‍♂️ Cara Kenalan:</b> Buka LMS &rarr; Pilih Matkul &rarr; Bagian <i>Pendahuluan</i> &rarr; <i>Forum Perkenalan</i>. Sapa tutor dan teman sekelasmu di sana! ✨
        `
      },
      {
        id: "sub-2-3",
        judul: "📋 2.3 Wajib Cek RAT & SAT 🛣️",
        isiTeks: `
          Download RAT (Rancangan Acara Tutorial) & SAT (Satuan Acara Tutorial) di bagian Pendahuluan matkul biar kamu tahu roadmap bahasan 8 sesi ke depan 🎯.
        `
      }
    ]
  },
  {
    id: "bab-3",
    judulBab: "🗓️ BAB 3: Kalender & Jadwal Resmi Tuton Ganjil 2026 ⏰",
    deskripsi: "Jadwal presensi, diskusi mingguan Sesi 1-8, serta batas pengerjaan Tugas 1, 2, dan 3. Jangan sampai kelewatan! 🔥",
    kataKunci: ["Jadwal", "Kalender 2026", "Sesi 1-8", "Deadline", "Tugas 1 2 3"],
    subBab: [
      {
        id: "sub-3-1",
        judul: "📌 3.1 Aturan Presensi & Jadwal Diskusi Mingguan 📅",
        isiTeks: `
          <p><b>⚡ Rules Absen:</b> Absen terbuka tiap Senin jam 00:01 WIB. Cukup klik <b>1 kali saja</b> per matkul tiap sesi! ☝️</p>
          <br>
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr><th>Sesi 📌</th><th>Rentang Waktu Diskusi ⏳</th><th>Keterangan Khusus 🚨</th></tr>
              </thead>
              <tbody>
                <tr><td>Sesi 1</td><td>14 – 20 September 2026</td><td>🚀 Awal Perkuliahan</td></tr>
                <tr><td>Sesi 2</td><td>21 – 27 September 2026</td><td>💬 Diskusi Regular</td></tr>
                <tr><td>Sesi 3</td><td>28 Sep – 4 Okt 2026</td><td>📝 Wajib isi Evaluasi Tutor Tahap 1</td></tr>
                <tr><td>Sesi 4</td><td>5 – 11 Oktober 2026</td><td>💬 Diskusi Regular</td></tr>
                <tr><td>Sesi 5</td><td>12 – 18 Oktober 2026</td><td>💬 Diskusi Regular</td></tr>
                <tr><td>Sesi 6</td><td>19 – 25 Oktober 2026</td><td>💬 Diskusi Regular</td></tr>
                <tr><td>Sesi 7</td><td>26 Okt – 1 Nov 2026</td><td>📝 Wajib isi Evaluasi Tutor Tahap 2</td></tr>
                <tr><td>Sesi 8</td><td>2 – 8 November 2026</td><td>🎉 Sesi Penutup</td></tr>
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
                <tr><th>Tugas 📑</th><th>Sesi LMS 📌</th><th>Batas Pengerjaan ⌛</th></tr>
              </thead>
              <tbody>
                <tr><td><b>Tugas 1 💥</b></td><td>Sesi 3</td><td>28 September – 12 Oktober 2026</td></tr>
                <tr><td><b>Tugas 2 💥</b></td><td>Sesi 5</td><td>12 Oktober – 26 Oktober 2026</td></tr>
                <tr><td><b>Tugas 3 💥</b></td><td>Sesi 7</td><td>26 Oktober – 9 November 2026</td></tr>
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
    deskripsi: "Daftar akronim dan istilah penting yang sering digunakan dalam ekosistem perkuliahan UT 🎓.",
    kataKunci: ["LMS", "SIA", "BMP", "RBAV", "SUO", "KTPU", "RPS", "RAT"],
    subBab: [
      {
        id: "sub-4-1",
        judul: "🔍 4.1 Glosarium Istilah Penting UT ✨",
        isiTeks: `
          <ul>
            <li><b>💻 LMS:</b> Web utama buat kuliah, absen, & kumpul tugas (<i>elearning.ut.ac.id</i>).</li>
            <li><b>💳 SIA UT:</b> Web portal administrasi buat bayar UKT & cek nilai akhir (<i>my.ut.ac.id</i>).</li>
            <li><b>📚 BMP & RBAV:</b> BMP itu modul buku fisik, RBAV itu perpustakaan digital di HP/laptop (<i>pustaka.ut.ac.id</i>).</li>
            <li><b>🤖 AIDA YUNIKA:</b> AI penjaga integritas akademik di LMS UT.</li>
            <li><b>🖥️ SUO & KTPU:</b> SUO itu Ujian Online di lab komputer kantor UT, KTPU itu Kartu Ujian kamu.</li>
            <li><b>📜 RPS & RAT:</b> RPS acuan materi modul buat UAS, RAT acuan kalender kerja 8 sesi di LMS.</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "bab-5",
    judulBab: "⚡ BAB 5: Rutinitas Belajar 2 Jam/Hari & Hacks Alumni 🚀",
    deskripsi: "Metode manajemen waktu Pomodoro, alokasi cicilan harian, serta teknik belajar efektif alumni UT 🎓!",
    kataKunci: ["Pomodoro", "Rutinitas", "Feynman", "Blurting", "RBAV", "Cicil Matkul"],
    subBab: [
      {
        id: "sub-5-1",
        judul: "⏱️ 5.1 Formula Pomodoro Harian (120 Menit = 4 Siklus) 🍅",
        isiTeks: `
          <p><b>🎯 Blok 1 - Output LMS (60 Mnt):</b> Absen, draf diskusi (<i>Feynman Technique</i>), dan submit tugas.</p>
          <br>
          <p><b>📖 Blok 2 - Retensi Modul (60 Mnt):</b> Baca cepat 1 Kegiatan Belajar (KB) + uji memori (<i>Blurting</i>) buat modal UAS!</p>
        `
      },
      {
        id: "sub-5-2",
        judul: "📅 5.2 Jadwal Cicil Mingguan (6-7 Matkul) 🗓️",
        isiTeks: `
          <ul>
            <li><b>🔴 Senin:</b> Klik absen semua matkul + Bereskan Diskusi & Modul Matkul A & B.</li>
            <li><b>🟠 Selasa:</b> Bereskan Diskusi & Modul Matkul C & D.</li>
            <li><b>🟡 Rabu:</b> Bereskan Diskusi & Modul Matkul E & F <i>(Diskusi minggu ini kelar 100%! 🎉)</i>.</li>
            <li><b>🟢 Kamis:</b> Cek masukan tutor ATAU Kerjakan Tugas Pribadi Matkul A, B, C.</li>
            <li><b>🔵 Jumat:</b> Cek masukan tutor ATAU Kerjakan Tugas Pribadi Matkul D, E, F & Upload File.</li>
            <li><b>🟣 Sabtu (Buffer Time):</b> Slot cadangan buat bereskan sisa diskusi tertunda + latihan soal acak UAS.</li>
            <li><b>⚪ Minggu (Rest Total):</b> Libur total dari LMS & modul! Istirahat biar gak <i>burnout</i> 🧘‍♂️✨.</li>
          </ul>
        `
      },
      {
        id: "sub-5-3",
        judul: "🤫 5.3 Hacks Rahasia Alumni UT 💎",
        isiTeks: `
          <ul>
            <li><b>🌅 Absen Pas Subuh:</b> Server LMS super lancar, gak bakalan loading muter-muter!</li>
            <li><b>🌙 Upload Tugas Pas Malam:</b> Mencegah file error akibat trafik server padat pas jam kerja.</li>
            <li><b>🗣️ Teknik Feynman:</b> Baca 1 paragraf modul, lalu tulis ulang pakai gaya bahasamu sendiri seolah lagi cerita ke temen.</li>
            <li><b>📱 Skimming RBAV Mobile:</b> Manfaatkan waktu luang di jalan atau pas nongkrong buat buka Rangkuman KB di aplikasi RBAV HP.</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "bab-6",
    judulBab: "🚨 BAB 6: Skenario Darurat (Gimana Kalau... 😱)",
    deskripsi: "Solusi cepat saat mengalami sakit, sibuk lembur kerja, atau mengalami penumpukan tugas (backlog) 🔥.",
    kataKunci: ["Darurat", "Mager", "Lembur", "Backlog", "Presensi 2 Menit"],
    subBab: [
      {
        id: "sub-6-1",
        judul: "🆘 6.1 Penanganan Kondisi Darurat & Backlog 🛠️",
        isiTeks: `
          <p><b>🤒 Lagi Mager / Sakit / Lembur:</b> Sempatkan <b>Presensi 2 Menit</b> pas subuh lewat HP biar nilai hadir 20% aman! Pindahkan tugas diskusinya ke hari <b>Sabtu (Buffer Time)</b> 🧘‍♀️.</p>
          <br>
          <p><b>💥 Ketinggalan Parah (Backlog):</b> Gak usah panik. Abaikan diskusi lama yang deadline-nya mepet, <b>FOKUS 100% di Tugas 1, 2, 3 & Presensi</b> karena bobot tugas gede banget (<b>50%!</b>) 🔥.</p>
        `
      }
    ]
  },
  {
    id: "bab-7",
    judulBab: "📚 BAB 7: Peta Materi Mata Kuliah (RPS Shortcut) 🎓",
    deskripsi: "Ringkasan acuan pokok bahasan mata kuliah utama MABA Ilmu Komunikasi & MKDU 🚀.",
    kataKunci: ["RPS", "FSIK4101", "FSIK4102", "FSIK4103", "Public Speaking", "KAP"],
    subBab: [
      {
        id: "sub-7-1",
        judul: "🎯 7.1 Peta Bahasan Matkul Ilkom & MKDU 📖",
        isiTeks: `
          <ul>
            <li><b>📡 Pengantar Ilmu Komunikasi (FSIK4101):</b> Dasar manusia berkomunikasi, sejarah ilmunya, motif interaksi, fungsi, teknik, hingga komunikasi massa.</li>
            <li><b>💬 Komunikasi Personal Bermedia / KAP (FSIK4102):</b> Interaksi antarpribadi, media digital, manajemen konflik, dan teori relasi.</li>
            <li><b>🎤 Public Speaking (FSIK4103):</b> Etika bicara di depan umum, olah materi, alat bantu visual, dan praktik presentasi.</li>
            <li><b>📰 Komunikasi Massa (SKOM4315):</b> Industri media massa, etika, literasi media, konvergensi digital, dan dampak globalisasi.</li>
            <li><b>🕌 Pendidikan Agama Islam (MKDU4221):</b> Penerapan ajaran Islam di masyarakat plural, Ketuhanan, HAM, kesadaran hukum, dan IPTEK.</li>
            <li><b>🇮🇩 Pendidikan Kewarganegaraan (MKWN4109):</b> Hak & kewajiban warga negara, demokrasi, HAM, dan negara-konstitusi.</li>
          </ul>
        `
      }
    ]
  }
];