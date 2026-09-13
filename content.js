/**
 * Database Rangkuman Khusus MABA Ilmu Komunikasi 2026 (Semester 1 / Ganjil 2026)
 * Sumber: Grup WA Ilkom + RAT, SAT, & RPS Resmi UT
 */
const contentData = [
  {
    id: "bab-1",
    judulBab: "🎮 BAB 1: Sistem Kerja Pertemuan, Tugas, & Aturan Main 🤖",
    deskripsi: "Info utuh dari WA Group mengenai cara kerja absen mingguan, Tuton vs TTM, detail 2 jenis tugas, hingga pilar jawaban nilai A.",
    kataKunci: ["Sesi", "Absen", "Tuton", "Tuweb", "TTM", "Tugas Umum", "Tugas Pribadi"],
    subBab: [
      {
        id: "sub-1-1",
        judul: "⚔️ 1.1 Aturan Pertemuan Sesi & Sistem Belajar (Tuton vs TTM)",
        isiTeks: `
          <p><b>⏰ Jam Buka Absen:</b> Satu sesi adalah satu jendela waktu utuh (1 minggu) untuk absen, diskusi, dan kumpul tugas. Absen dibuka tepat <b>hari pertama sesi jam 00.01 WIB (Subuh)</b>[cite: 1]. Cukup klik absen <b>1 KALI SAJA</b> per mata kuliah di setiap pertemuannya[cite: 1]. Ingat, di UT sifatnya mandiri 100%, <b>TIDAK ADA Zoom/Meet rutin</b>[cite: 1]!</p>
          <br>
          <p><b>💻 <span class="tooltip" data-title="Tutorial Online: Sistem belajar default 100% mandiri via web">Tuton</span>:</b> Sistem gratis otomatis. Fleksibel, tanpa Zoom, batas pengerjaan 1 minggu per sesi[cite: 1].</p>
          <br>
          <p><b>🎥 <span class="tooltip" data-title="Tutorial Tatap Muka (Offline) & Tutorial Webinar (Zoom)">TTM / Tuweb</span>:</b> Belajar via Zoom/Offline. Bayar ± Rp 150.000/matkul (minimal diajukan 20 mahasiswa). Cocok buat yang <i>hardolin</i> (banyak waktu luang). Walau ambil Tuweb, Tuton kamu <b>tetap aktif</b> (<i>double system</i>)[cite: 1]!</p>
        `,
        gambar: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
        captionGambar: "Perbandingan Sistem Tuton Mandiri vs Tuweb Webinar 📊"
      },
      {
        id: "sub-1-2",
        judul: "📝 1.2 Detail 2 Jenis Tugas di LMS (Wajib Paham!)",
        isiTeks: `
          <ul>
            <li><b>💬 Tugas Umum / Diskusi (Sesi 1 s.d. 8):</b> Forum terbuka bareng tutor & kelas[cite: 1]. Diberikan topik untuk ditanggapi pakai argumen pribadi + referensi[cite: 1]. Deadline <b>1 minggu per sesi</b>[cite: 1]. Kalau punya 7 matkul = wajib kumpul 7 diskusi per minggu[cite: 1]!</li>
            <li><b>📑 Tugas Mata Kuliah / Pribadi (Sesi 3, 5, 7):</b> Tugas tertutup rahasia (hanya kamu & tutor) dengan masa pengerjaan <b>2 MINGGU</b>[cite: 1]. Bobot nilainya RAKSASA (50% dari total nilai)[cite: 1]. Kirim format PDF/Word pakai cover identitas lengkap (Logo UT, Nama, NIM, Prodi, UT Daerah, Nama Dosen)[cite: 1].</li>
          </ul>
        `
      },
      {
        id: "sub-1-3",
        judul: "🌟 1.3 Enam Pilar Jawaban Nilai Bagus (Auto 85-100) 💯",
        isiTeks: `
          <ol>
            <li><b>✍️ Parafrase Wajib:</b> Tulis ulang materi dari modul pakai susunan kalimat/gaya bahasamu sendiri biar bebas plagiarisme[cite: 1].</li>
            <li><b>📚 Cantumkan Referensi:</b> Wajib tulis sumber jelas (nama modul, bab, link jurnal) di akhir jawaban[cite: 1].</li>
            <li><b>🎯 Pahami Maksud Soal:</b> Baca instruksi dan kriteria penilaian tutor secara cermat[cite: 1].</li>
            <li><b>💬 Tanya Dosen:</b> Kalau bingung, jangan ragu chat dosen via fitur pesan <span class="tooltip" data-title="Learning Management System: Web utama kuliah (elearning.ut.ac.id)">LMS</span> pakai template resmi (Sebutkan Nama, NIM, Matkul, dan Kode Kelas!)[cite: 1].</li>
            <li><b>🚀 Jangan Menunda:</b> Langsung gas kerjakan saat sesi dibuka[cite: 1].</li>
            <li><b>🛑 Anti <span class="tooltip" data-title="Sistem Kebut Semalam: Ngerjain tugas dadakan dalam satu malam">SKS</span>:</b> Hindari ngerjain tugas mendadak 1 malam agar kualitas jawaban tidak hancur dan mental gak <i>burnout</i>[cite: 1].</li>
          </ol>
        `
      }
    ]
  },
  {
    id: "bab-2",
    judulBab: "🤖 BAB 2: Info AI AIDA YUNIKA, Evaluasi Tutor & Sanksi ⚖️",
    deskripsi: "Detail tentang peran AIDA YUNIKA, evaluasi tutor terbaru, rumus bobot nilai, dan sanksi akademik UT.",
    kataKunci: ["AIDA YUNIKA", "Evaluasi Tutor", "Bobot Nilai", "UAS", "Sanksi", "Joki"],
    subBab: [
      {
        id: "sub-2-1",
        judul: "🕵️‍♂️ 2.1 Peran AI AIDA YUNIKA di Kelas Tuton",
        isiTeks: `
          <p>Jika melihat nama <b><span class="tooltip" data-title="Sistem AI Pemantau Integritas Akademik di LMS UT">AIDA YUNIKA</span></b>, jangan panik! Dia <b>BUKAN</b> dosen pengganti dan <b>BUKAN</b> penentu nilaimu[cite: 1]. AIDA adalah sistem AI pemantau integritas akademik[cite: 1]. Penilai tetap tutor manusia[cite: 1]. Lolos deteksi AI tidak menjamin nilai 100 kalau jawabanmu gak berbobot[cite: 1]!</p>
        `
      },
      {
        id: "sub-2-2",
        judul: "📊 2.2 Rumus Bobot Nilai & Sanksi Akademik (Aturan Maut!)",
        isiTeks: `
          <p><b>🧮 Bobot Tuton:</b> Presensi (20%) + Diskusi Sesi 1-8 (30%) + Tugas Tutorial Sesi 3, 5, 7 (50%)[cite: 1].</p>
          <br>
          <p><b>☠️ Syarat Kunci <span class="tooltip" data-title="Ujian Akhir Semester">UAS</span>:</b> Kamu <b>WAJIB menjawab benar minimal 30%</b> di soal UAS[cite: 1]! Jika skor di bawah 30%, seluruh nilai Tuton setinggi apa pun akan <b>HANGUS OTOMATIS (dapat E/D)</b>[cite: 1]! 😭</p>
          <br>
          <p><b>🚫 Sanksi Akademik Resmi:</b>
            <br>• <i>Deaktivasi:</i> Bolos absen Sesi 1–3 berturut-turut = Tuton mati otomatis mulai Sesi 4[cite: 1].
            <br>• <i>Nilai NOL:</i> Menjiplak ATAU memberi jiplakan tugas = Nilai 0[cite: 1].
            <br>• <i>Drop Out:</i> Pakai <b>JOKI</b> = Dikeluarkan dari SELURUH kesertaan Tuton selama 1 semester[cite: 1]! ⛔
          </p>
        `
      }
    ]
  },
  {
    id: "bab-3",
    judulBab: "🗓️ BAB 3: Kalender & Jadwal Sesi Tuton (Ganjil 2026) ⏰",
    deskripsi: "Tanggal pasti presensi, deadline diskusi mingguan, batas pengerjaan Tugas 1, 2, dan 3.",
    kataKunci: ["Jadwal", "Kalender 2026", "Sesi", "Deadline", "Tugas 1 2 3"],
    subBab: [
      {
        id: "sub-3-1",
        judul: "📌 3.1 Jadwal Sesi 1 s.d 8 & Aktivitas Wajib",
        isiTeks: `
          <p><b>⚡ UPDATE EVALUASI:</b> Evaluasi Tutor sekarang dibuka 2 kali: <b>SESI 3</b> (Tengah) dan <b>SESI 7</b> (Akhir)[cite: 1]!</p>
          <br>
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr><th>Sesi 📌</th><th>Rentang Waktu ⏳</th><th>Aktivitas Wajib 🚨</th></tr>
              </thead>
              <tbody>
                <tr><td>Sesi 1</td><td>14 – 20 Sep 2026</td><td>Klik Absen, Forum Perkenalan, Unduh <span class="tooltip" data-title="Rancangan Aktivitas Tutorial">RAT</span>, Submit Diskusi 1[cite: 1]</td></tr>
                <tr><td>Sesi 2</td><td>21 – 27 Sep 2026</td><td>Klik Absen, Submit Diskusi 2, Cek Nilai[cite: 1]</td></tr>
                <tr><td>Sesi 3</td><td>28 Sep – 4 Okt 2026</td><td>Klik Absen, Diskusi 3, <b>Isi Evaluasi Tutor 1</b>, Mulai Tugas 1[cite: 1]</td></tr>
                <tr><td>Sesi 4</td><td>5 – 11 Okt 2026</td><td>Klik Absen, Diskusi 4, Pastikan Tugas 1 Ter-upload[cite: 1]</td></tr>
                <tr><td>Sesi 5</td><td>12 – 18 Okt 2026</td><td>Klik Absen, Diskusi 5, Mulai Tugas 2[cite: 1]</td></tr>
                <tr><td>Sesi 6</td><td>19 – 25 Okt 2026</td><td>Klik Absen, Diskusi 6, Pastikan Tugas 2 Ter-upload[cite: 1]</td></tr>
                <tr><td>Sesi 7</td><td>26 Okt – 1 Nov 2026</td><td>Klik Absen, Diskusi 7, <b>Isi Evaluasi Tutor 2</b>, Mulai Tugas 3[cite: 1]</td></tr>
                <tr><td>Sesi 8</td><td>2 – 8 Nov 2026</td><td>Klik Absen, Diskusi 8, Final Prep UAS[cite: 1]</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        id: "sub-3-2",
        judul: "🔥 3.2 Deadline Tugas Mata Kuliah (Tugas Pribadi)",
        isiTeks: `
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr><th>Tugas 📑</th><th>Masa Pengerjaan ⌛</th></tr>
              </thead>
              <tbody>
                <tr><td><b>Tugas 1 (Sesi 3) 💥</b></td><td>28 September – 12 Oktober 2026 (23:59 WIB)[cite: 1]</td></tr>
                <tr><td><b>Tugas 2 (Sesi 5) 💥</b></td><td>12 Oktober – 26 Oktober 2026 (23:59 WIB)[cite: 1]</td></tr>
                <tr><td><b>Tugas 3 (Sesi 7) 💥</b></td><td>26 Oktober – 9 November 2026 (23:59 WIB)[cite: 1]</td></tr>
              </tbody>
            </table>
          </div>
        `
      }
    ]
  },
  {
    id: "bab-4",
    judulBab: "📚 BAB 4: Rincian RAT (Roadmap Materi) 6 Matkul 🎓",
    deskripsi: "Pemetaan materi dari Rancangan Aktivitas Tutorial (RAT) untuk 6 mata kuliah Ilmu Komunikasi.",
    kataKunci: ["RAT", "RPS", "FSIK4101", "FSIK4102", "FSIK4103", "SKOM4315", "MKDU4221", "MKWN4109"],
    subBab: [
      {
        id: "sub-4-1",
        judul: "📡 4.1 Ilmu Komunikasi, KAP, & Public Speaking",
        isiTeks: `
          <ul>
            <li><b>Pengantar Ilmu Komunikasi (FSIK4101):</b> Modul 1-8 bahas hakikat, elemen komunikasi, tradisi teori, hingga komunikasi massa & organisasi[cite: 1].</li>
            <li><b>KAP / Komunikasi Personal (FSIK4102):</b> Modul 1-9 bahas persepsi diri, hambatan mendengarkan, pengembangan hubungan, hingga manajemen konflik online[cite: 1].</li>
            <li><b>Public Speaking (FSIK4103):</b> Modul 1-9 bahas analisis audiens, alat bantu visual, teknik pembukaan, hingga hubungan media[cite: 1].</li>
          </ul>
        `
      },
      {
        id: "sub-4-2",
        judul: "📰 4.2 Komunikasi Massa, Agama Islam & PKn",
        isiTeks: `
          <ul>
            <li><b>Komunikasi Massa (SKOM4315):</b> Bahas industri media, sejarah, konvergensi digital era global, dan literasi media baru[cite: 1].</li>
            <li><b>Pendidikan Agama Islam (MKDU4221):</b> Bahas HAM, demokrasi, IPTEKS-IMTAQ, politik Islam, dan kerukunan pluralis[cite: 1].</li>
            <li><b>Pend. Kewarganegaraan (MKWN4109):</b> Bahas identitas nasional, konstitusi hukum, Wawasan Nusantara, dan Ketahanan Nasional global[cite: 1].</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "bab-5",
    judulBab: "⚡ BAB 5: Rutinitas 2 Jam/Hari & Hacks Alumni Rahasia 🚀",
    deskripsi: "Metode Pomodoro 120 menit, rotasi 6 matkul per minggu, SQ3R cepat, dan hacks anti-loading.",
    kataKunci: ["Pomodoro", "SQ3R", "Feynman", "Blurting", "Subuh", "Rotasi Harian"],
    subBab: [
      {
        id: "sub-5-1",
        judul: "⏱️ 5.1 Siklus Pomodoro Harian (120 Menit)",
        isiTeks: `
          <p><b>🎯 BLOK 1: OUTPUT LMS (60 Mnt)</b><br>
          <i>Siklus 1 (25 Mnt):</i> Absen + Draf Diskusi (<span class="tooltip" data-title="Teknik menulis ulang pakai bahasa sendiri">Feynman</span>)[cite: 1].<br>
          <i>Siklus 2 (25 Mnt):</i> Posting Diskusi / Kumpul Tugas[cite: 1].</p>
          <br>
          <p><b>📖 BLOK 2: RETENSI MODUL (60 Mnt)</b><br>
          <i>Siklus 3 (25 Mnt):</i> Bedah 1 Kegiatan Belajar via <span class="tooltip" data-title="Survey, Question, Read & Recite, Review">SQ3R Versi Cepat</span>[cite: 1].<br>
          <i>Siklus 4 (25 Mnt):</i> Uji ingatan tanpa lihat buku (<span class="tooltip" data-title="Metode mencatat semua yang diingat ke kertas kosong">Blurting Method</span>) buat modal UAS[cite: 1].</p>
        `
      },
      {
        id: "sub-5-2",
        judul: "📅 5.2 Jadwal Eksekusi Rotasi Mingguan",
        isiTeks: `
          <ul>
            <li><b>Senin-Rabu:</b> Fokus tuntaskan absensi dan seluruh Tugas Umum/Diskusi untuk 6-7 Matkul (Sehari cicil 2 matkul)[cite: 1].</li>
            <li><b>Kamis-Jumat:</b> Cek nilai dari tutor ATAU eksekusi pengumpulan <b>Tugas Pribadi</b> (PDF/Word)[cite: 1].</li>
            <li><b>Sabtu (Buffer Time):</b> Bereskan tugas sisa & latihan soal UAS[cite: 1].</li>
            <li><b>Minggu (Rest Total):</b> Libur total dari portal kuliah biar gak stres 🧘‍♂️✨[cite: 1].</li>
          </ul>
        `
      },
      {
        id: "sub-5-3",
        judul: "🤫 5.3 Hacks Rahasia Alumni UT",
        isiTeks: `
          <ul>
            <li><b>🌅 Absen Subuh (04:00-06:00 WIB):</b> Server super lancar, gak pakai loading[cite: 1].</li>
            <li><b>🌙 Upload Tugas Malam:</b> Hindari gagal upload saat jam sibuk kantor[cite: 1].</li>
            <li><b>📱 Skimming <span class="tooltip" data-title="Ruang Baca Virtual: Perpustakaan digital UT">RBAV</span> Mobile:</b> Manfaatkan HP untuk baca rangkuman materi di sela-sela nongkrong atau di kendaraan[cite: 1].</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "bab-6",
    judulBab: "🚨 BAB 6: Skenario Darurat & Penyelamatan (Kontingensi) 🛠️",
    deskripsi: "Langkah jitu saat sibuk kerja, sakit, atau mengalami penumpukan tugas (backlog).",
    kataKunci: ["Darurat", "Mager", "Lembur", "Backlog", "Triase Nilai"],
    subBab: [
      {
        id: "sub-6-1",
        judul: "🆘 6.1 Skenario Lembur, Sakit, & Backlog Parah",
        isiTeks: `
          <ul>
            <li><b>📦 Skenario Cuti/Lembur (Batching System):</b> Kerjakan Tugas Tutorial 3-4 matkul sekaligus di awal waktu agar minggu depan santai[cite: 1].</li>
            <li><b>🤒 Skenario Mager/Sakit (Presensi 2 Menit):</b> Wajib buka HP pas subuh buat klik <b>Kehadiran</b> supaya nilai 20% tetap masuk. Pindah jadwal nugas ke hari Sabtu[cite: 1].</li>
            <li><b>💥 Ketinggalan Parah (<span class="tooltip" data-title="Tugas yang menumpuk tak terselesaikan">Backlog</span>):</b> Gunakan strategi <b><span class="tooltip" data-title="Sistem pemilahan prioritas kondisi darurat">Triase Nilai</span></b>! Abaikan diskusi lama yang mepet. <b>FOKUS 100% KUMPULKAN TUGAS TUTORIAL (Sesi 3, 5, 7) & Presensi</b> karena bobot tugas sangat raksasa (50%!) 🔥[cite: 1].</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "bab-7",
    judulBab: "💡 BAB 7: Kamus Gaul UT (Glosarium Akademik) 📖",
    deskripsi: "Kumpulan singkatan penting yang sering diucapkan mahasiswa dan pihak kampus UT.",
    kataKunci: ["LMS", "SIA", "BMP", "RBAV", "SUO", "KTPU", "RPS", "RAT"],
    subBab: [
      {
        id: "sub-7-1",
        judul: "🔍 7.1 Istilah Penting Sistem UT",
        isiTeks: `
          <ul>
            <li><b>💻 <span class="tooltip" data-title="Learning Management System">LMS</span>:</b> Web utama buat kuliah, absen, & kumpul tugas (<i>elearning.ut.ac.id</i>)[cite: 1].</li>
            <li><b>💳 <span class="tooltip" data-title="Sistem Informasi Akademik UT">SIA UT</span>:</b> Portal administrasi bayar UKT & cek nilai akhir (<i>my.ut.ac.id</i>)[cite: 1].</li>
            <li><b>📚 <span class="tooltip" data-title="Buku Materi Pokok">BMP</span> & <span class="tooltip" data-title="Ruang Baca Virtual">RBAV</span>:</b> BMP adalah modul fisik, RBAV adalah perpustakaan digital[cite: 1].</li>
            <li><b>🖥️ <span class="tooltip" data-title="Sentra Ujian Online">SUO</span> & <span class="tooltip" data-title="Kartu Tanda Peserta Ujian">KTPU</span>:</b> Ujian di lab komputer (SUO) dan Kartu Ujian (KTPU)[cite: 1].</li>
            <li><b>📜 <span class="tooltip" data-title="Rencana Pembelajaran Semester">RPS</span> & <span class="tooltip" data-title="Rancangan Aktivitas Tutorial">RAT</span>:</b> Acuan materi UAS (RPS) dan Kalender 8 Sesi (RAT)[cite: 1].</li>
          </ul>
        `
      }
    ]
  }
];

// Jangan hapus baris ini, dipakai oleh app.js untuk membaca data!
window.contentData = contentData;
