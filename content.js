/**
 * Database Rangkuman Khusus MABA Ilmu Komunikasi 2026 (Semester 1 / Ganjil 2026)
 * Sumber: Salinan Utuh Info WA Group + RAT, SAT, & RPS Resmi UT
 */
const contentData = [
  {
    id: "bab-1",
    judulBab: "🎮 BAB 1: Sistem Kerja Pertemuan, Detail Tugas, & Aturan Main 🤖",
    deskripsi: "Panduan utuh mengenai aturan 1 pertemuan sesi, jam buka absen, Tuton vs TTM, detail 2 jenis tugas, foto profil LMS, template chat tutor, 6 pilar jawaban, hingga cara cari teman resmi.",
    kataKunci: ["Sesi", "Absen", "Tuton", "Tuweb", "TTM", "Tugas Umum", "Tugas Pribadi", "Profil LMS", "Template Chat", "Katalog UT"],
    subBab: [
      {
        id: "sub-1-1",
        judul: "⏰ 1.1 Aturan Sesi, Jam Buka Absen, & Prinsip Kemandirian 100%",
        isiTeks: `
          <p><b>📅 Aturan 1 Pertemuan Sesi (Contoh 14–20 September):</b> Rentang tanggal tersebut adalah satu jendela waktu utuh (<i>window time</i>) untuk menyelesaikan 3 hal wajib sekaligus: <b>isi absen, kerjain tugas/diskusi, dan kumpulin tugas/diskusi</b>[cite: 1].</p>
          <br>
          <p><b>⏰ Jam Buka Absen:</b> Absen pada setiap sesi baru sudah bisa diakses mulai hari pertama sesi (tanggal 14) tepat <b>jam 00.01 WIB di subuh hari</b>[cite: 1]!</p>
          <br>
          <p><b>✅ Ketentuan Absen Matkul:</b> Misal kamu mengambil 7 mata kuliah, berarti pada rentang minggu tersebut kamu harus klik tombol absen di ke-7 mata kuliah itu[cite: 1]. Asyiknya, <b>absen ini cukup dilakukan 1 KALI SAJA per mata kuliah di setiap pertemuannya</b>[cite: 1].</p>
          <br>
          <p><b>💻 Tidak Ada Zoom / Meet Routine:</b> <i>FYI</i> nih, di UT tidak ada agenda nge-Zoom atau Google Meet rutin dengan dosen[cite: 1]. Pembelajaran berjalan penuh via web <span class="tooltip" data-title="Learning Management System: Web utama kuliah online UT (elearning.ut.ac.id)">LMS</span>[cite: 1].</p>
          <br>
          <p><b>🔥 Prinsip Kemandirian 100%:</b> Kesimpulannya, kita klik absen sendiri, kerjain diskusi/tugas sendiri, membaca modul sendiri, dan <b>APAPUN ITU DILAKUKAN SECARA MANDIRI</b>[cite: 1].</p>
          <br>
          <p><b>🕰️ Fleksibilitas Pengerjaan Harian:</b> Bebas mengatur waktu! Kalau mau borongan menyelesaikan seluruh tugas dalam 1 hari boleh, kalau mau mencicil 1 hari 1 mata kuliah juga boleh[cite: 1]. Yang paling krusial adalah <b>semua pengerjaan tidak boleh melebihi batas maksimal deadline di sesi tersebut</b>[cite: 1].</p>
        `
      },
      {
        id: "sub-1-2",
        judul: "⚔️ 1.2 Pilihan Sistem Belajar: Tuton vs TTM / Tuweb",
        isiTeks: `
          <p><b>💻 <span class="tooltip" data-title="Tutorial Online: Sistem belajar mandiri gratis via web LMS">Tuton (Tutorial Online)</span>:</b> Ini adalah sistem <i>default</i> gratis yang otomatis aktif begitu kamu terdaftar di UT[cite: 1]. Tidak ada Zoom, tidak ada ketentuan jam terikat, sifatnya fleksibel dengan batas pengerjaan 1 minggu per sesi[cite: 1]. Suka atau tidak suka, kamu akan tetap terjaring sistem Tuton[cite: 1].</p>
          <br>
          <p><b>🎥 <span class="tooltip" data-title="Tutorial Tatap Muka: Belajar offline di ruang kelas">TTM</span> & <span class="tooltip" data-title="Tutorial Webinar: Belajar tatap muka secara online via Zoom">Tuweb</span>:</b> Ini adalah sistem perkuliahan berbasis Zoom (<i>online</i>) atau tatap muka (<i>offline</i>)[cite: 1]. Cara mengajukannya: Tunggu info resmi dari IG UT daerah masing-masing, bayar ≈Rp 150.000 per mata kuliah untuk 1 semester, dengan syarat minimal diajukan oleh 20 mahasiswa[cite: 1]. Jika mengajukan Tuweb/TTM, akun Tuton kamu <b>tetap akan aktif</b> (<i>double system</i> belajar)[cite: 1]. Rekomendasi ini sangat cocok untuk mahasiswa yang <i>hardolin</i> (alias tidak sibuk/banyak waktu luang)[cite: 1].</p>
        `
      },
      {
        id: "sub-1-3",
        judul: "📝 1.3 Detail 2 Jenis Tugas di LMS & Petunjuk Teknis Upload File",
        isiTeks: `
          <p><b>💬 Tugas Umum (Diskusi Mingguan - Sesi 1 s.d. 8):</b></p>
          <ul>
            <li>Sifatnya <i>open discussion</i> (diskusi terbuka) bersama tutor dan seluruh teman sekelas[cite: 1].</li>
            <li>Tutor akan memberikan 1 bahan topik/kasus, lalu mahasiswa memberikan sudut pandang/pendapat pribadi yang wajib diperkuat dengan <b>sumber referensi yang jelas</b>[cite: 1].</li>
            <li>Diskusi ini bisa dibaca oleh seluruh mahasiswa di kelas tersebut, serta bisa saling dikoreksi, ditanggapi, atau ditambahkan satu sama lain[cite: 1].</li>
            <li>Memiliki <i>deadline</i> pengerjaan <b>1 MINGGU</b> di setiap sesinya[cite: 1]. Karena kita memegang 6–7 mata kuliah, maka dalam 1 minggu kita wajib mengumpulkan 6–7 tugas diskusi![cite: 1]</li>
            <li><b>Cara Upload File Jawaban Diskusi (Jika diizinkan tutor):</b> Klik <b>Reply</b> &rarr; Klik <b>Advanced</b> di pojok kanan bawah &rarr; Unggah file dokumen jawaban kamu di kotak lampiran[cite: 1]. <i>(Catatan: Tidak semua jawaban diskusi bisa/boleh diunggah berupa file)</i>[cite: 1].</li>
          </ul>
          <br>
          <p><b>📑 Tugas Mata Kuliah / Pribadi (Tugas 1, 2, 3 di Sesi 3, 5, dan 7):</b></p>
          <ul>
            <li>Penugasan pribadi yang sifatnya tertutup (hanya kamu dan tutor yang bisa mengakses berkasnya)[cite: 1].</li>
            <li>Memiliki masa pengerjaan lebih panjang, yaitu <b>2 MINGGU</b>[cite: 1].</li>
            <li>Dikirim dalam bentuk file PDF atau Word sesuai permintaan dan instruksi dari tutor[cite: 1].</li>
            <li><i>Tipe 1:</i> Dosen memberikan file soal/template langsung di LMS, lalu kita tinggal mengedit dan mengisinya[cite: 1].</li>
            <li><i>Tipe 2:</i> Dosen memberikan instruksi berupa teks soal, lalu kita harus menyusun dokumennya secara manual dari nol di laptop (Wajib memakai cover lengkap: Logo UT, Nama Lengkap, Jurusan/Prodi, NIM, Nama Dosen/Tutor, UT Daerah, dll.)[cite: 1].</li>
            <li><b>Cara Upload Berkas Tugas Pribadi:</b> Masuk ke menu Tugas Sesi 3, 5, atau 7 &rarr; Klik tombol biru <b>Add Submission</b> &rarr; Seret (<i>drag & drop</i>) atau pilih file PDF/Word kamu &rarr; Klik <b>Simpan Perubahan</b> (<i>Save changes</i>)[cite: 1].</li>
          </ul>
        `
      },
      {
        id: "sub-1-4",
        judul: "🖼️ 1.4 Ketentuan Profil LMS & Tata Cara Chat Tutor / Teman Sekelas",
        isiTeks: `
          <p><b>📸 Aturan Upload Foto Profil LMS:</b></p>
          <ul>
            <li><b>DO (BOLEH):</b> Foto selfie, foto formal (foto KTM), foto non-formal (asal sopan), foto menggunakan filter, foto satu badan (di pantai, gunung, mall, dapur, gedung DPR, dll.)[cite: 1].</li>
            <li><b>DON'T (DILARANG):</b> Menggunakan foto yang bukan wajah kamu (ayah, ibu, mantan, pacar, HTS, tetangga), foto hewan imut/kiyut (kucing, capybara, burung, tikus, dll.), foto karakter anime, foto bias K-Pop, foto manhwa, atau foto karakter Mobile Legends[cite: 1].</li>
          </ul>
          <br>
          <p><b>🔍 Langkah Navigasi Melihat Teman Sekelas & Tutor:</b><br>
          Klik Mata Kuliah di dashboard LMS &rarr; Klik <b>Course Dashboard</b> (ikon gerigi/setting di pojok kanan) &rarr; Klik menu <b>Participants</b> untuk melihat seluruh daftar teman sekelas dan tutor pengampu[cite: 1]. Untuk mengirim pesan pribadi, klik nama/profil yang dituju, lalu klik tombol <b>Send Message</b>[cite: 1].</p>
          <br>
          <p><b>✉️ Template Chat Resmi ke Dosen/Tutor (Sangat Wajib Ditiru):</b><br>
          <i>Selamat pagi/siang, Pak/Bu Tutor<br>
          Nama: [Nama Lengkap]<br>
          NIM: [NIM Kamu]<br>
          Nama Matkul: [Nama Mata Kuliah]<br>
          Kode Kelas: [Kode Kelas di LMS - Contoh: MKWN4110.2367]<br>
          Mohon izin untuk bertanya..... [Isi Pertanyaan Kamu]<br>
          Sekian pertanyaan saya, terima kasih Pak/Bu Tutor.</i><br>
          <b>Catatan Penting:</b> WAJIB menyebutkan Kode Kelas saat menghubungi tutor, karena mayoritas tutor mengampu 2 sampai 3 kelas yang berbeda sekaligus[cite: 1].</p>
        `
      },
      {
        id: "sub-1-5",
        judul: "🌟 1.5 Enam Pilar Wajib Pengerjaan Tugas & Diskusi (Auto A!)",
        isiTeks: `
          <ol>
            <li><b>✍️ Pastikan Paraphrase Setiap Jawaban:</b> Memuat ulang kalimat atau materi dari modul/buku rujukan menggunakan susunan kata dan gaya bahasa sendiri (seolah-olah menceritakan ulang ke teman) agar tidak terdeteksi plagiarisme[cite: 1]. <i>(Contoh sapaan sopan: "Halo Pak/Bu, izin memberikan jawaban. Menurut referensi [nama sumber], dinyatakan bahwa...")</i>[cite: 1].</li>
            <li><b>📚 Cantumkan Sumber Referensi:</b> Wajib menyertakan sumber rujukan yang jelas di akhir jawaban (misal: sebutkan nama modul, bab, halaman, atau link jurnal resmi) sebagai bukti keaslian akademis[cite: 1].</li>
            <li><b>🎯 Pahami Maksud SOAL:</b> Baca instruksi, batasan masalah, dan kriteria penilaian tutor secara cermat sebelum mengetik[cite: 1].</li>
            <li><b>💬 Jangan Malu Bertanya kepada Dosen:</b> Manfaatkan fitur <i>Send Message</i> di LMS dengan format template resmi di atas jika ada instruksi yang membingungkan[cite: 1].</li>
            <li><b>🚀 Jangan Menunda-nunda Pengerjaan Tugas:</b> Langsung eksekusi begitu sesi atau tugas dibuka agar beban kerja tidak menumpuk di akhir minggu[cite: 1].</li>
            <li><b>🛑 Jangan <span class="tooltip" data-title="Sistem Kebut Semalam: Mengerjakan tugas dadakan dalam satu malam">SKS (Sistem Kebut Semalam)</span>:</b> Hindari mengerjakan seluruh tugas/diskusi secara mendadak dalam satu malam karena akan menurunkan kualitas jawaban dan memicu kelelahan mental (<i>burnout</i>)[cite: 1].</li>
          </ol>
        `
      },
      {
        id: "sub-1-6",
        judul: "🤝 1.6 Cara Cari Teman Resmi, Integrasi Kelas, & Katalog UT",
        isiTeks: `
          <ul>
            <li><b>🚫 Tidak Perlu Mencari di Grup Unofficial:</b> Kamu tidak perlu menghabiskan waktu mencari teman sekelas di grup WhatsApp <i>unofficial</i> karena belum tentu mereka masuk di kelas LMS yang sama denganmu[cite: 1].</li>
            <li><b>🙋‍♂️ Akses Resmi di eLearning:</b> Pembaruan daftar mata kuliah di eLearning dilakukan oleh pusat secara bertahap hingga tanggal <b>14 September 2026</b>[cite: 1]. Masuk ke LMS &rarr; Pilih Mata Kuliah &rarr; Bagian <b>Pendahuluan</b> &rarr; <b>Forum Perkenalan</b> untuk menyapa tutor dan teman sekelas[cite: 1].</li>
            <li><b>📋 Wajib Baca RAT dan SAT:</b> Wajib mengunduh dan membaca <span class="tooltip" data-title="Rancangan Aktivitas Tutorial: Roadmap bahasan 8 sesi di LMS">RAT</span> dan <span class="tooltip" data-title="Satuan Acara Tutorial: Rincian aktivitas di setiap pertemuan sesi">SAT</span> pada bagian Pendahuluan, karena dua dokumen itu adalah kunci untuk mengetahui topik apa yang akan dibahas selama 8 sesi ke depan[cite: 1].</li>
            <li><b>🔑 Aturan Kode Matkul vs Kode Bahan Ajar:</b> Kode mata kuliah di portal eLearning/LMS tidak selalu sama dengan kode <span class="tooltip" data-title="Buku Materi Pokok: Modul buku cetak fisik UT">BMP</span> (Modul)[cite: 1]. Selama kode bahan ajar tersebut sesuai dengan yang tercantum di Katalog Resmi UT, maka materi tersebut dipastikan sudah benar[cite: 1]. Kunci utamanya adalah <b>Katalog</b>, kita harus selalu membaca dan mengecek Katalog Kurikulum UT[cite: 1].</li>
            <li><b>🔥 Komunikasi Interaktif di LMS:</b> Sering-seringlah berkomunikasi dan berdiskusi secara aktif, baik dengan tutor maupun sesama mahasiswa di eLearning[cite: 1]. Usahakan gaya berdiskusi jangan kaku atau monoton! Manfaatkan fitur eLearning sebaik mungkin untuk saling menanggapi, karena keaktifan dan kualitas diskusimu bisa memberikan kesan positif serta mempengaruhi sudut pandang penilaian tutor[cite: 1].</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "bab-2",
    judulBab: "🤖 BAB 2: Detail AIDA YUNIKA, Evaluasi Tutor, & Aturan Akademik UT ⚖️",
    deskripsi: "Penjelasan utuh mengenai peran AIDA YUNIKA, kebijakan baru evaluasi tutor 2 sesi, rumus bobot nilai, syarat maut UAS, dan sanksi akademik.",
    kataKunci: ["AIDA YUNIKA", "Evaluasi Tutor", "Bobot Nilai", "UAS", "Sanksi", "Joki", "Plagiarisme"],
    subBab: [
      {
        id: "sub-2-1",
        judul: "🕵️‍♂️ 2.1 Mengenai AIDA YUNIKA di Kelas Tuton",
        isiTeks: `
          <p><b>Apa itu AIDA YUNIKA?</b> Jika melihat nama <span class="tooltip" data-title="Artificial Intelligence Pemantau Integritas Akademik di LMS UT">AIDA YUNIKA</span> di kelas Tuton, tidak perlu menganggap bahwa AIDA YUNIKA adalah dosen atau tutor manusia pengganti[cite: 1]. Notifikasi AIDA YUNIKA tidak muncul di semua kelas[cite: 1].</p>
          <br>
          <p><b>Peran AIDA YUNIKA:</b> AIDA YUNIKA merupakan bagian dari pengembangan teknologi/AI dalam ekosistem UT untuk mendukung proses pembelajaran dan menjaga integritas akademik mahasiswa[cite: 1]. <b>AIDA YUNIKA tidak menggantikan peran tutor manusia</b> dalam memberikan bimbingan dan penilaian[cite: 1].</p>
          <br>
          <p><b>Apakah Nilai Ditentukan AIDA YUNIKA?</b> Penilaian tetap dilakukan oleh tutor manusia[cite: 1]. Kriteria nilai berasal dari: <i>Kesesuaian jawaban dengan pertanyaan, pemahaman materi/modul, ketepatan & kualitas jawaban, penggunaan sumber referensi relevan, keaslian jawaban & integritas akademik, serta keaktifan mengikuti Tuton</i>[cite: 1].</p>
          <br>
          <p><b>Ingat:</b> Jangan beranggapan cukup "lolos AI detector" maka nilai pasti tinggi[cite: 1]. Kualitas dan ketepatan jawaban tetap menjadi hal utama[cite: 1].</p>
        `
      },
      {
        id: "sub-2-2",
        judul: "📝 2.2 Update Kebijakan Evaluasi Tutor (Semester 2026/2027 Ganjil)",
        isiTeks: `
          <p><b>Semester Sebelumnya:</b> Forum Evaluasi Tutor hanya dibuka 1 kali di Sesi 7[cite: 1].</p>
          <br>
          <p><b>Semester 2026/2027 Ganjil (TERBARU):</b> Forum Evaluasi Tutor resmi dibuka di <b>2 Sesi</b>, yaitu pada <b>SESI 3</b> (evaluasi tengah) dan <b>SESI 7</b> (evaluasi penutup)[cite: 1].</p>
          <br>
          <p><b>Instruksi Wajib:</b> Selalu cek setiap sesi Tuton dan manfaatkan forum evaluasi pada Sesi 3 dan Sesi 7 untuk mengisi angket penilaian tutor secara jujur dan objektif[cite: 1].</p>
        `
      },
      {
        id: "sub-2-3",
        judul: "📊 2.3 Rumus Bobot Nilai & Syarat Kunci UAS (Aturan Maut!)",
        isiTeks: `
          <p><b>🧮 Rumus Bobot Nilai Tuton:</b></p>
          <ul>
            <li><b>Presensi/Kehadiran (Sesi 1–8):</b> <b>Bobot 20%</b> (Dihitung dari keaktifan klik presensi tiap minggu)[cite: 1].</li>
            <li><b>Nilai Diskusi (Sesi 1–8):</b> <b>Bobot 30%</b> (Total nilai Diskusi 1–8 <b>tetap dibagi 8</b>, meskipun kamu mengerjakan kurang dari 8 diskusi)[cite: 1].</li>
            <li><b>Nilai Tugas Tutorial (Sesi 3, 5, 7):</b> <b>Bobot 50%</b> (Total nilai Tugas 1–3 <b>tetap dibagi 3</b>, meskipun kamu mengirim kurang dari 3 tugas)[cite: 1].</li>
          </ul>
          <br>
          <p><b>☠️ Syarat Kunci <span class="tooltip" data-title="Ujian Akhir Semester">UAS</span> (Aturan Maut):</b> Kamu <b>wajib menjawab benar minimal 30%</b> pada soal Ujian Akhir Semester (UAS)[cite: 1]. Jika skor UAS di bawah 30%, seluruh nilai Tuton setinggi apa pun akan <b>hangus otomatis (dapat nilai E/D)</b>[cite: 1].</p>
        `
      },
      {
        id: "sub-2-4",
        judul: "🚫 2.4 Sanksi Akademik Resmi UT",
        isiTeks: `
          <ul>
            <li><b>Deaktivasi Tuton:</b> Tidak aktif mengisi presensi atau diskusi sejak Minggu 1 hingga Minggu 3 berturut-turut menyebabkan kesertaan Tuton matkul tersebut <b>dinonaktifkan otomatis mulai Minggu ke-4 dan seterusnya</b>[cite: 1].</li>
            <li><b>Teguran Resmi:</b> Diberikan kepada mahasiswa yang melakukan plagiarisme atau tidak mengindahkan kesantunan dalam berbahasa[cite: 1].</li>
            <li><b>Nilai NOL (0):</b> Diberikan pada nilai diskusi dan tugas bagi <b>pihak yang menjiplak MAUPUN pihak yang memberikan jiplakan</b>[cite: 1].</li>
            <li><b>Drop Out / Penghentian Tuton 1 Semester:</b> Mahasiswa yang terdeteksi atau diketahui menggunakan <b>JOKI</b> dalam keaktifan, diskusi, maupun tugas akan <b>dikenai penghentian kesertaan Tuton untuk SELURUH mata kuliah</b> yang diikuti dalam semester tersebut ⛔[cite: 1].</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "bab-3",
    judulBab: "🗓️ BAB 3: Kalender & Rincian Aktivitas Sesi (Ganjil 2026) ⏰",
    deskripsi: "Jadwal resmi tanggal buka absen, deadline diskusi, dan batas waktu pengerjaan Tugas 1, 2, dan 3 dari Sesi 1 sampai Sesi 8.",
    kataKunci: ["Jadwal", "Kalender 2026", "Sesi 1-8", "Deadline", "Tugas 1 2 3", "Evaluasi Tutor"],
    subBab: [
      {
        id: "sub-3-1",
        judul: "📌 3.1 Rincian Sesi 1 s.d. Sesi 4",
        isiTeks: `
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr><th>Sesi 📌</th><th>Waktu & Deadline ⏳</th><th>Rincian Aktivitas Wajib 🚨</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>Sesi 1</b></td>
                  <td><b>Buka:</b> 14 Sep 2026 (00:01 WIB)<br><b>Deadline:</b> 20 Sep 2026 (23:59 WIB)[cite: 1]</td>
                  <td>Klik <b>Presensi/Kehadiran</b> 6–7 matkul (1x per matkul). Masuk Pendahuluan &rarr; <b>Forum Perkenalan</b>. Unduh <b>RAT & SAT</b>. Ketik & kumpulkan <b>Tugas Umum / Diskusi 1</b> di forum[cite: 1].</td>
                </tr>
                <tr>
                  <td><b>Sesi 2</b></td>
                  <td><b>Buka:</b> 21 Sep 2026 (00:01 WIB)<br><b>Deadline:</b> 27 Sep 2026 (23:59 WIB)[cite: 1]</td>
                  <td>Klik <b>Presensi/Kehadiran</b> Sesi 2 seluruh matkul. Ketik & kumpulkan <b>Tugas Umum / Diskusi 2</b>. Cek nilai atau masukan dari tutor untuk Diskusi 1 yang sudah dinilai[cite: 1].</td>
                </tr>
                <tr>
                  <td><b>Sesi 3</b><br><i>(Minggu Tugas 1)</i></td>
                  <td><b>Buka:</b> 28 Sep 2026 (00:01 WIB)<br><b>Deadline Diskusi 3 & Evaluasi:</b> 4 Okt 2026 (23:59 WIB)<br><b>Deadline Tugas 1:</b> 12 Okt 2026 (23:59 WIB)[cite: 1]</td>
                  <td>Klik <b>Presensi</b> Sesi 3. Kumpulkan <b>Diskusi 3</b>. <b>WAJIB:</b> Buka angket & isi <b>Forum Evaluasi Tutor Tahap 1</b>[cite: 1]. Mulai unduh & unggah <b>Tugas Mata Kuliah 1</b> (PDF/Word via Add Submission, bobot 50%)[cite: 1].</td>
                </tr>
                <tr>
                  <td><b>Sesi 4</b></td>
                  <td><b>Buka:</b> 5 Okt 2026 (00:01 WIB)<br><b>Deadline:</b> 11 Okt 2026 (23:59 WIB)[cite: 1]</td>
                  <td>Klik <b>Presensi</b> Sesi 4. Kumpulkan <b>Diskusi 4</b>. Selesaikan & pastikan <b>Tugas Pribadi 1</b> sudah terunggah sebelum 12 Oktober[cite: 1].</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        id: "sub-3-2",
        judul: "📌 3.2 Rincian Sesi 5 s.d. Sesi 8",
        isiTeks: `
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr><th>Sesi 📌</th><th>Waktu & Deadline ⏳</th><th>Rincian Aktivitas Wajib 🚨</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>Sesi 5</b><br><i>(Minggu Tugas 2)</i></td>
                  <td><b>Buka:</b> 12 Okt 2026 (00:01 WIB)<br><b>Deadline Diskusi 5:</b> 18 Okt 2026 (23:59 WIB)<br><b>Deadline Tugas 2:</b> 26 Okt 2026 (23:59 WIB)[cite: 1]</td>
                  <td>Klik <b>Presensi</b> Sesi 5. Kumpulkan <b>Diskusi 5</b>. Mulai unduh, kerjakan, & unggah <b>Tugas Mata Kuliah 2</b> (PDF/Word)[cite: 1].</td>
                </tr>
                <tr>
                  <td><b>Sesi 6</b></td>
                  <td><b>Buka:</b> 19 Okt 2026 (00:01 WIB)<br><b>Deadline:</b> 25 Okt 2026 (23:59 WIB)[cite: 1]</td>
                  <td>Klik <b>Presensi</b> Sesi 6. Kumpulkan <b>Diskusi 6</b>. Selesaikan & pastikan <b>Tugas Pribadi 2</b> sudah terunggah sebelum 26 Oktober[cite: 1].</td>
                </tr>
                <tr>
                  <td><b>Sesi 7</b><br><i>(Minggu Tugas 3)</i></td>
                  <td><b>Buka:</b> 26 Okt 2026 (00:01 WIB)<br><b>Deadline Diskusi 7 & Evaluasi:</b> 1 Nov 2026 (23:59 WIB)<br><b>Deadline Tugas 3:</b> 9 Nov 2026 (23:59 WIB)[cite: 1]</td>
                  <td>Klik <b>Presensi</b> Sesi 7. Kumpulkan <b>Diskusi 7</b>. <b>WAJIB:</b> Buka angket & isi <b>Forum Evaluasi Tutor Tahap 2</b>[cite: 1]. Mulai unduh & unggah <b>Tugas Mata Kuliah 3</b> (PDF/Word)[cite: 1].</td>
                </tr>
                <tr>
                  <td><b>Sesi 8</b><br><i>(Sesi Penutup)</i></td>
                  <td><b>Buka:</b> 2 Nov 2026 (00:01 WIB)<br><b>Deadline Diskusi 8:</b> 8 Nov 2026 (23:59 WIB)<br><b>Final Upload Tugas 3:</b> 9 Nov 2026 (23:59 WIB)[cite: 1]</td>
                  <td>Klik <b>Presensi</b> Sesi 8 (penutup Tuton). Kumpulkan <b>Diskusi 8</b>[cite: 1]. Pastikan seluruh <b>Tugas Pribadi 3</b> sudah ter-upload 100% sebelum 9 November[cite: 1]. Mulai fokus penuh membaca rangkuman modul dan latihan soal untuk persiapan UAS[cite: 1].</td>
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
    judulBab: "📚 BAB 4: Rincian RAT (Rancangan Aktivitas Tutorial) 6 Matkul 🎓",
    deskripsi: "Pemetaan seluruh materi 8 sesi dari dokumen resmi Rancangan Aktivitas Tutorial (RAT) untuk 6 mata kuliah utama MABA Ilmu Komunikasi.",
    kataKunci: ["RAT", "RPS", "FSIK4101", "FSIK4102", "FSIK4103", "SKOM4315", "MKDU4221", "MKWN4109"],
    subBab: [
      {
        id: "sub-4-1",
        judul: "📡 4.1 RAT Pengantar Ilmu Komunikasi (FSIK4101)",
        isiTeks: `
          <p><b>Deskripsi & Fokus:</b> Fondasi dasar ilmu komunikasi yang membekali mahasiswa dengan konsep manusia berkomunikasi, motif, elemen, model, teori, hingga teknik komunikasi[cite: 1].</p>
          <ul>
            <li><b>Sesi 1–2:</b> Modul 1 (Hakikat manusia & komunikasi, motif manusia berkomunikasi)[cite: 1].</li>
            <li><b>Sesi 3 (Tugas 1):</b> Modul 4 (Elemen, model-model komunikasi, dan tradisi teori komunikasi)[cite: 1].</li>
            <li><b>Sesi 4–5 (Tugas 2):</b> Modul 5 (Fungsi, teknik, dan media komunikasi)[cite: 1].</li>
            <li><b>Sesi 6–7 (Tugas 3):</b> Modul 7 & 8 (Komunikasi antarmanusia, kelompok, organisasi, massa, komunikasi tradisional, antarbudaya, serta isu-isu dalam penelitian komunikasi)[cite: 1].</li>
            <li><b>Sesi 8:</b> <i>Review</i> materi keseluruhan & persiapan Tes Sumatif/UAS[cite: 1].</li>
          </ul>
        `
      },
      {
        id: "sub-4-2",
        judul: "💬 4.2 RAT Komunikasi Personal Bermedia / KAP (FSIK4102 / SKOM4313)",
        isiTeks: `
          <p><b>Deskripsi & Fokus:</b> Mengulas pengertian komunikasi antarpribadi, persepsi diri, proses mendengarkan efektif, hingga dinamika hubungan & manajemen konflik bermedia[cite: 1].</p>
          <ul>
            <li><b>Sesi 1–2:</b> Modul 1 & 2 (Konsep dasar <span class="tooltip" data-title="Komunikasi Antarpribadi">KAP</span> & persepsi diri dalam komunikasi antarpribadi)[cite: 1].</li>
            <li><b>Sesi 3 (Tugas 1):</b> Modul 3 (Definisi mendengarkan, tahapan, hambatan, & menjadi pendengar efektif dalam KAP)[cite: 1].</li>
            <li><b>Sesi 4–5 (Tugas 2):</b> Modul 4–6 (Komunikasi verbal, non-verbal, & pengembangan hubungan personal)[cite: 1].</li>
            <li><b>Sesi 6–7 (Tugas 3):</b> Modul 7 (Pengertian & mitos konflik dalam KAP, prinsip/karakteristik konflik KAP, jenis budaya, gender, serta konflik di media online)[cite: 1].</li>
            <li><b>Sesi 8:</b> Modul 8 & 9 (Definisi manajemen konflik, perilaku bermasalah selama konflik, strategi manajemen konflik, teori pengembangan hubungan KAP, siklus & manajemen hubungan antarpribadi)[cite: 1].</li>
          </ul>
        `
      },
      {
        id: "sub-4-3",
        judul: "🎤 4.3 RAT Public Speaking (FSIK4103)",
        isiTeks: `
          <p><b>Deskripsi & Fokus:</b> Pembekalan keterampilan praktik berbicara di depan publik, mulai dari penggalian ide, analisis pendengar, penggunaan alat bantu visual, hingga eksekusi presentasi[cite: 1].</p>
          <ul>
            <li><b>Sesi 1–2:</b> Modul 1–3 (Prinsip dasar public speaking, eksplorasi ide/gagasan, & teknik menentukan topik PS)[cite: 1].</li>
            <li><b>Sesi 3 (Tugas 1 Tutorial):</b> Modul 3, 4, 5 (Memilih topik PS, mengklasifikasikan/analisis publik, & menentukan data/data pendukung untuk PS)[cite: 1].</li>
            <li><b>Sesi 4–5 (Tugas 2 Tutorial):</b> Modul 6 (Menyusun materi PS, struktur dan isi PS, serta teknik pembukaan PS yang menarik)[cite: 1].</li>
            <li><b>Sesi 6–7 (Tugas 3 Tutorial):</b> Modul 7 & 8 (Menyiapkan & mempresentasikan alat bantu visual, bahasa verbal dan nonverbal, serta menyampaikan materi PS di hadapan publik)[cite: 1].</li>
            <li><b>Sesi 8:</b> Modul 9 (Menjelaskan bentuk-bentuk public speaking & teknik hubungan dengan media)[cite: 1].</li>
          </ul>
        `
      },
      {
        id: "sub-4-4",
        judul: "📰 4.4 RAT Komunikasi Massa (SKOM4315 / FSIK4104)",
        isiTeks: `
          <p><b>Deskripsi & Fokus:</b> Pembahasan cara menyebarkan informasi ke khalayak luas via media massa, peran <span class="tooltip" data-title="Teknologi Informasi dan Komunikasi">TIK</span>, konvergensi media baru, hingga perubahan kultur masyarakat di era globalisasi[cite: 1].</p>
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
          <p><b>Deskripsi & Fokus:</b> Penerapan ajaran Islam dalam masyarakat plural, mencakup konsep Ketuhanan, hakikat manusia, masyarakat beradab, <span class="tooltip" data-title="Hak Asasi Manusia">HAM</span>, kesadaran hukum, serta sinergi <span class="tooltip" data-title="Ilmu Pengetahuan, Teknologi dan Seni">IPTEKS</span> & <span class="tooltip" data-title="Iman dan Taqwa">IMTAQ</span>[cite: 1].</p>
          <ul>
            <li><b>Sesi 1–2:</b> Modul 1 & 2 (Keimanan & Ketakwaan, Ketuhanan Yang Maha Esa, serta Hakikat, martabat, & tanggung jawab manusia)[cite: 1].</li>
            <li><b>Sesi 3 (Tugas 1):</b> Modul 3 (Masyarakat beradab dan sejahtera, peran umat beragama, HAM, & demokrasi)[cite: 1].</li>
            <li><b>Sesi 4–5 (Tugas 2):</b> Modul 4 & 5 (Kesadaran taat hukum, fungsi agama, moral & akhlak mulia, serta Iman, IPTEKS, dan Amal sebagai kesatuan)[cite: 1].</li>
            <li><b>Sesi 6–7 (Tugas 3):</b> Modul 6 & 7 (Peran Islam dalam IPTEKS, seni, budaya akademik, etos kerja, sikap terbuka, keadilan, & prinsip kekuasaan/politik Islam)[cite: 1].</li>
            <li><b>Sesi 8:</b> Modul 8 & 9 (Islam Rahmatan lil 'Alamin, kerukunan antarumat beragama dalam kehidupan pluralistik, & Tes Sumatif/UAS)[cite: 1].</li>
          </ul>
        `
      },
      {
        id: "sub-4-6",
        judul: "🇮🇩 4.6 RAT Pendidikan Kewarganegaraan (MKWN4109)",
        isiTeks: `
          <p><b>Deskripsi & Fokus:</b> Mata kuliah wajib (2 SKS) untuk membekali hubungan warga negara dengan negara, bela negara, wawasan nusantara, ketahanan nasional, serta penegakan hukum & konstitusi[cite: 1].</p>
          <ul>
            <li><b>Sesi 1–2:</b> Modul 1 & 2 (Hakikat & tujuan Pendidikan Kewarganegaraan, hakikat warga negara, kewarganegaraan, & identitas nasional)[cite: 1].</li>
            <li><b>Sesi 3 (Tugas 1):</b> Modul 3 (Pelaksanaan demokrasi dan Hak Asasi Manusia di Indonesia)[cite: 1].</li>
            <li><b>Sesi 4–5 (Tugas 2):</b> Modul 4 & 5 (Negara, konstitusi, penegakan hukum, serta implementasi Integrasi Nasional & Wawasan Nusantara)[cite: 1].</li>
            <li><b>Sesi 6–7 (Tugas 3):</b> Modul 6 & 7 (Implementasi Wawasan Nusantara, Integrasi Nasional, & Ketahanan Nasional di era globalisasi)[cite: 1].</li>
            <li><b>Sesi 8:</b> <i>Review</i> materi ketahanan nasional, dampak globalisasi, & persiapan UAS tertulis[cite: 1].</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "bab-5",
    judulBab: "⚡ BAB 5: Sistem Belajar Harian 2 Jam/Hari & Hacks Alumni 🚀",
    deskripsi: "Pembagian 4 siklus Pomodoro 120 menit, rotasi mingguan 6-7 matkul, SQ3R cepat, dan trik alumni.",
    kataKunci: ["Pomodoro", "SQ3R", "Feynman", "Blurting", "Subuh", "Rotasi Harian", "Batching"],
    subBab: [
      {
        id: "sub-5-1",
        judul: "⏱️ 5.1 Pembagian Blok Harian (120 Menit = 4 Siklus Pomodoro)",
        isiTeks: `
          <p><b>BLOK 1: OUTPUT LMS (60 MENIT - Presensi, Diskusi LMS, & Tugas)</b>[cite: 1]</p>
          <ul>
            <li><i>Siklus 1 (25 Mnt):</i> Absen portal LMS + Ketik draf Diskusi menggunakan <span class="tooltip" data-title="Teknik menulis ulang materi pakai bahasa sendiri seolah menceritakan ke teman">Feynman Technique</span>[cite: 1].</li>
            <li><i>Istirahat (5 Mnt):</i> Rehat sejenak[cite: 1].</li>
            <li><i>Siklus 2 (25 Mnt):</i> Posting jawaban Diskusi / Kerjakan Tugas Tutorial[cite: 1].</li>
            <li><i>Istirahat (5 Mnt):</i> Rehat sejenak[cite: 1].</li>
          </ul>
          <br>
          <p><b>BLOK 2: RETENSI MODUL (60 MENIT - Penguasaan Modul & Uji Memori UAS)</b>[cite: 1]</p>
          <ul>
            <li><i>Siklus 3 (25 Mnt):</i> Bedah 1 Kegiatan Belajar (KB) menggunakan <span class="tooltip" data-title="Metode membaca cepat: Survey, Question, Read & Recite, Review">SQ3R Versi Cepat</span>[cite: 1].</li>
            <li><i>Istirahat (5 Mnt):</i> Rehat sejenak[cite: 1].</li>
            <li><i>Siklus 4 (25 Mnt):</i> Uji ingatan tanpa intip modul (<span class="tooltip" data-title="Metode menuliskan semua yang diingat ke kertas kosong tanpa ngintip buku">Blurting Method</span>) + latihan Tes Formatif[cite: 1].</li>
          </ul>
        `
      },
      {
        id: "sub-5-2",
        judul: "📅 5.2 Eksekusi Rotasi Mingguan (6-7 Mata Kuliah)",
        isiTeks: `
          <ul>
            <li><b>Senin (Matkul A & B):</b> Klik presensi seluruh matkul sekaligus jam 00:01/Subuh &rarr; Ketik & submit Diskusi Matkul A & B &rarr; SQ3R 1 KB Matkul A + 1 KB Matkul B[cite: 1].</li>
            <li><b>Selasa (Matkul C & D):</b> Ketik & submit Diskusi Matkul C & D &rarr; SQ3R 1 KB Matkul C + 1 KB Matkul D[cite: 1].</li>
            <li><b>Rabu (Matkul E & F):</b> Ketik & submit Diskusi Matkul E & F <i>(Seluruh diskusi minggu berjalan tuntas 100%)</i> &rarr; SQ3R 1 KB Matkul E + 1 KB Matkul F[cite: 1].</li>
            <li><b>Kamis:</b>
              <br><i>- Minggu Biasa (Sesi 1, 2, 4, 6, 8):</i> Cek nilai, masukan tutor, atau balas komentar diskusi Matkul A, B, C[cite: 1].
              <br><i>- Minggu TUGAS (Sesi 3, 5, 7):</i> Eksekusi pengerjaan <b>Tugas Mata Kuliah Pribadi</b> Matkul A, B, C[cite: 1].
            </li>
            <li><b>Jumat:</b>
              <br><i>- Minggu Biasa:</i> Cek nilai, masukan tutor, atau balas komentar diskusi Matkul D, E, F[cite: 1].
              <br><i>- Minggu TUGAS:</i> Eksekusi pengerjaan <b>Tugas Mata Kuliah Pribadi</b> Matkul D, E, F + Periksa format PDF/Word + Upload seluruh file tugas ke LMS[cite: 1].
            </li>
            <li><b>Sabtu (Buffer Time & Persiapan UAS):</b>
              <br><i>- Blok 1 (60 Mnt):</i> Slot cadangan menyelesaikan sisa diskusi/tugas tertunda[cite: 1].
              <br><i>- Blok 2 (60 Mnt):</i> <span class="tooltip" data-title="Latihan mengulang materi dengan jeda waktu tertentu">Spaced Repetition</span> (Latihan Tes Formatif acak dari 6 matkul)[cite: 1].
            </li>
            <li><b>Minggu (Rest Total):</b> Libur total dari LMS dan modul untuk menjaga stamina fisik dan mental 🧘‍♂️✨[cite: 1].</li>
          </ul>
        `
      },
      {
        id: "sub-5-3",
        judul: "🤫 5.3 Hacks & Trik Rahasia Alumni UT",
        isiTeks: `
          <ul>
            <li><b>Absen di Subuh Hari:</b> Klik tombol presensi saat subuh (jam 04:00 - 06:00 WIB). Server LMS sangat lancar dan bebas dari risiko <i>loading</i> lambat[cite: 1].</li>
            <li><b>Upload Tugas di Malam Hari:</b> Mengunggah berkas Tugas Pribadi (PDF/Word) pada malam hari meminimalisir kegagalan unggah akibat lonjakan trafik server[cite: 1].</li>
            <li><b>Anti-Plagiarisme Feynman:</b> Baca 1 paragraf modul, lalu tulis ulang memakai bahasa sehari-hari seolah menjelaskan ke teman. Tutor menyukai jawaban orisinal ini dan sering memberi nilai 85–100[cite: 1].</li>
            <li><b>SQ3R Versi Cepat (30 Menit):</b> <i>Survey (2 mnt)</i> langsung baca Rangkuman di akhir KB &rarr; <i>Question (1 mnt)</i> ubah sub-judul jadi pertanyaan &rarr; <i>Read & Recite (22 mnt)</i> baca fokus mencari jawaban &rarr; <i>Review (5 mnt)</i> kerjakan Tes Formatif[cite: 1].</li>
            <li><b>Prinsip Batching:</b> Matikan notifikasi HP saat menjalankan 25 menit Pomodoro. Selesaikan 1 jenis pekerjaan hingga tuntas sebelum pindah ke tugas lain[cite: 1].</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "bab-6",
    judulBab: "🚨 BAB 6: Prosedur Kontingensi (Side Scenarios / Rencana Cadangan) 🛠️",
    deskripsi: "Skenario A, B, C, D untuk mengatasi selesai lebih awal, cuti kantor, sakit, mager, hingga penumpukan tugas (backlog).",
    kataKunci: ["Darurat", "Mager", "Lembur", "Backlog", "Triase Nilai", "Batching System"],
    subBab: [
      {
        id: "sub-6-1",
        judul: "🆘 6.1 Skenario A & B (Sisa Waktu & Batching Cuti)",
        isiTeks: `
          <p><b>Skenario A: Selesai Lebih Awal / Ada Waktu Sisa</b>[cite: 1]</p>
          <ul>
            <li><i>Tabung Draf:</i> Buka LMS minggu depan, baca <i>prompt</i> diskusi berikutnya, catat ide jawaban di HP[cite: 1].</li>
            <li><i>Investasi UAS:</i> Baca Rangkuman KB matkul tersulit di <span class="tooltip" data-title="Ruang Baca Virtual">RBAV</span> Mobile[cite: 1].</li>
          </ul>
          <br>
          <p><b>Skenario B: Tanggal Merah / Cuti / Kantor Kebakaran</b>[cite: 1]</p>
          <ul>
            <li><i>Batching System:</i> Kerjakan Tugas Tutorial (Sesi 3, 5, 7) sekaligus untuk 3–4 matkul agar 1–2 minggu ke depan lebih santai[cite: 1].</li>
          </ul>
        `
      },
      {
        id: "sub-6-2",
        judul: "💥 6.2 Skenario C & D (Sakit/Mager & Backlog Parah)",
        isiTeks: `
          <p><b>Skenario C: Lembur Mendadak / Sakit / Mager / Capek (Hilang 1–2 Hari)</b>[cite: 1]</p>
          <ul>
            <li><i>Wajib Presensi 2 Menit:</i> Buka LMS via HP di waktu subuh, cukup klik <b>Kehadiran/Absen</b> agar nilai 20% aman[cite: 1].</li>
            <li><i>Shift to Saturday:</i> Pindahkan beban pengerjaan diskusi ke slot <b>Sabtu (Buffer Time)</b>[cite: 1].</li>
          </ul>
          <br>
          <p><b>Skenario D: Ketinggalan Parah / <span class="tooltip" data-title="Tugas yang menumpuk tak terselesaikan">Backlog</span> Berhari-hari (Ketinggalan 1 Sesi Penuh)</b>[cite: 1]</p>
          <ul>
            <li><i>Langkah 1 (<span class="tooltip" data-title="Sistem pemilahan prioritas kondisi darurat">Triase Nilai</span>):</i> Abaikan modul dan diskusi lama yang mepet. <b>Fokus 100% pada Tugas Tutorial (Sesi 3, 5, 7) dan Presensi</b>[cite: 1]. Kenapa? Karena bobot Tugas Tutorial itu raksasa banget (50%!) 🔥[cite: 1].</li>
            <li><i>Langkah 2 (Marathon Catch-Up):</i> Gunakan Sabtu & Minggu (2 jam Pagi + 2 jam Malam) khusus pengerjaan berkas tugas[cite: 1].</li>
            <li><i>Langkah 3 (Penyelamat UAS):</i> Pelajari Rangkuman di akhir KB dan kerjakan Tes Formatif di portal UT[cite: 1].</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "bab-7",
    judulBab: "💡 BAB 7: Glosarium & Kamus Gaul UT 📖",
    deskripsi: "Penjelasan lengkap mengenai singkatan, akronim, dan istilah teknis di Universitas Terbuka.",
    kataKunci: ["LMS", "SIA UT", "BMP", "RBAV", "AIDA YUNIKA", "SUO", "KTPU", "RPS", "RAT", "Active Recall", "Blurting"],
    subBab: [
      {
        id: "sub-7-1",
        judul: "🔍 7.1 Kamus Istilah Sistem & Administrasi Kampus",
        isiTeks: `
          <ul>
            <li><b><span class="tooltip" data-title="Learning Management System">LMS (Learning Management System)</span>:</b> Portal utama kuliah online UT (<i>elearning.ut.ac.id</i>)[cite: 1].</li>
            <li><b><span class="tooltip" data-title="Sistem Informasi Akademik UT">SIA UT</span>:</b> Portal administrasi (<i>my.ut.ac.id</i>) untuk registrasi, UKT, dan nilai akhir[cite: 1].</li>
            <li><b><span class="tooltip" data-title="Buku Materi Pokok">BMP</span> & <span class="tooltip" data-title="Ruang Baca Virtual">RBAV</span>:</b> BMP itu modul fisik, RBAV itu perpustakaan digital (<i>pustaka.ut.ac.id</i> / aplikasi HP)[cite: 1].</li>
            <li><b><span class="tooltip" data-title="Artificial Intelligence Pemantau Integritas">AIDA YUNIKA</span>:</b> Asisten teknologi/AI di LMS UT untuk menjaga integritas akademik[cite: 1].</li>
            <li><b><span class="tooltip" data-title="Sentra Ujian Online">SUO</span> & <span class="tooltip" data-title="Kartu Tanda Peserta Ujian">KTPU</span>:</b> Sentra Ujian Online (lab komputer UT) dan Kartu Tanda Peserta Ujian[cite: 1].</li>
            <li><b><span class="tooltip" data-title="Rencana Pembelajaran Semester">RPS</span> & <span class="tooltip" data-title="Rancangan Aktivitas Tutorial">RAT</span>:</b> RPS (Acuan makro modul untuk UAS) dan RAT (Kalender kerja 8 sesi Tuton)[cite: 1].</li>
          </ul>
        `
      },
      {
        id: "sub-7-2",
        judul: "🧠 7.2 Kamus Istilah Metode Belajar Modern",
        isiTeks: `
          <ul>
            <li><b><span class="tooltip" data-title="Mengingat materi tanpa melihat buku">Active Recall</span> & <span class="tooltip" data-title="Mencatat ingatan di kertas kosong tanpa ngintip">Blurting</span>:</b> Metode mengingat materi tanpa melihat modul untuk menguji pemahaman persiapan UAS[cite: 1].</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "bab-8",
    judulBab: "🎯 BAB 8: Ringkasan Pokok Bahasan 6 Mata Kuliah (RPS Summary) 📜",
    deskripsi: "Ringkasan acuan pokok bahasan makro modul untuk 6 mata kuliah Ilmu Komunikasi sebagai persiapan UAS.",
    kataKunci: ["RPS Summary", "FSIK4101", "FSIK4102", "FSIK4103", "SKOM4315", "MKDU4221", "MKWN4109"],
    subBab: [
      {
        id: "sub-8-1",
        judul: "📖 8.1 Pokok Bahasan Matkul Komunikasi & MKDU",
        isiTeks: `
          <ul>
            <li><b>Pengantar Ilmu Komunikasi (FSIK4101):</b> Membedah konsep dasar manusia dan komunikasi, motif interaksi, fungsi, teknik, hingga komunikasi massa & isu-isu penelitian[cite: 1].</li>
            <li><b>Komunikasi Personal Bermedia / KAP (FSIK4102 / SKOM4313):</b> Membahas dinamika interaksi antarpribadi, komunikasi media online, manajemen konflik, hingga teori pengembangan hubungan[cite: 1].</li>
            <li><b>Public Speaking (FSIK4103):</b> Mempelajari etika berbicara di depan publik, eksplorasi ide, penyusunan materi, penggunaan alat bantu visual, hingga praktik presentasi[cite: 1].</li>
            <li><b>Komunikasi Massa (SKOM4315 / FSIK4104):</b> Membahas industri media massa, etika, literasi media, konvergensi media digital, dan dampak globalisasi[cite: 1].</li>
            <li><b>Pendidikan Agama Islam (MKDU4221):</b> Penerapan ajaran Islam dalam masyarakat pluralis, meliputi konsep Ketuhanan, HAM, kesadaran hukum, moral, hingga IPTEKS & IMTAQ[cite: 1].</li>
            <li><b>Pendidikan Kewarganegaraan (MKWN4109):</b> Mempelajari hak & kewajiban warga negara, demokrasi, HAM, geostrategi, hingga negara dan konstitusi[cite: 1].</li>
          </ul>
        `
      }
    ]
  }
];

// Pastikan variabel terbaca secara global agar tidak blank!
window.contentData = contentData;
