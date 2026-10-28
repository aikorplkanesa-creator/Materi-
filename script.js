const curriculum = {
  python: {
    name: "Python",
    lessons: [
      [
        "Mulai dari nol",
        "Dasar",
        "Python adalah bahasa pemrograman yang mudah dibaca dan sering digunakan untuk otomasi, data, backend, dan pembelajaran logika.",
        'print("Halo, dunia!")',
        "print() menampilkan teks atau nilai ke layar. Teks ditulis di antara tanda kutip."
      ],
      [
        "Variabel dan tipe data",
        "Dasar",
        "Variabel menyimpan nilai. Python memiliki tipe string, integer, float, dan boolean.",
        'nama = "Aiko"\numur = 16\ntinggi = 165.5\naktif = True\nprint(nama, umur)',
        "Nama variabel sebaiknya jelas. Python membedakan huruf besar dan kecil."
      ],
      [
        "Input dan konversi",
        "Dasar",
        "input() menerima masukan pengguna dan menghasilkan string. Gunakan int() atau float() untuk konversi angka.",
        'nama = input("Nama kamu: ")\numur = int(input("Umur: "))\nprint(f"Halo {nama}, tahun depan umurmu {umur + 1}.")',
        "f-string menyisipkan nilai variabel ke dalam teks."
      ],
      [
        "Operator dan kondisi",
        "Dasar",
        "Operator matematika meliputi +, -, *, /, //, %, dan **. if/elif/else membuat program memilih tindakan.",
        'nilai = 87\nif nilai >= 85:\n    print("Bagus, target tercapai")\nelse:\n    print("Terus berlatih")',
        "Indentasi empat spasi umum digunakan untuk menandai blok kode Python."
      ],
      [
        "Perulangan",
        "Dasar",
        "for menelusuri kumpulan data atau rentang angka. while mengulang selama kondisi benar.",
        'for angka in range(1, 6):\n    print(angka)\n\njumlah = 0\nfor angka in range(1, 4):\n    jumlah += angka\nprint("Total:", jumlah)',
        "range(1, 6) menghasilkan angka 1 sampai 5."
      ],
      [
        "List dan dictionary",
        "Menengah",
        "List menyimpan urutan nilai. Dictionary menyimpan pasangan kunci dan nilai.",
        'hobi = ["coding", "musik", "membaca"]\nprint(hobi[0])\n\nprofil = {"nama": "Aiko", "kelas": 10}\nprint(profil["nama"])',
        "Indeks list dimulai dari 0. Dictionary diakses menggunakan kunci."
      ],
      [
        "Fungsi",
        "Menengah",
        "Fungsi membungkus kode agar dapat digunakan ulang. Parameter menerima masukan dan return mengembalikan hasil.",
        'def luas_persegi(panjang, lebar):\n    return panjang * lebar\n\nhasil = luas_persegi(5, 3)\nprint(hasil)',
        "Pisahkan fungsi berdasarkan tugasnya agar program mudah diuji."
      ],
      [
        "File dan penanganan kesalahan",
        "Menengah",
        "with open() digunakan untuk bekerja dengan file. try/except membantu menangani kesalahan.",
        'try:\n    with open("catatan.txt", "w", encoding="utf-8") as file:\n        file.write("Belajar Python hari ini")\nexcept OSError as error:\n    print("File gagal diproses:", error)',
        "Mode w menulis ulang isi file, sedangkan mode a menambahkan isi."
      ],
      [
        "Modul dan paket",
        "Lanjutan",
        "Modul memisahkan kode ke file yang bisa diimpor. Paket mengelompokkan beberapa modul.",
        'import math\n\nprint(math.sqrt(81))\nprint(math.pi)',
        "Gunakan pustaka standar sebelum menambahkan dependensi."
      ],
      [
        "Pemrograman berorientasi objek",
        "Lanjutan",
        "Class mendefinisikan jenis objek. Objek menyimpan data dan perilaku.",
        'class Siswa:\n    def __init__(self, nama):\n        self.nama = nama\n\n    def sapa(self):\n        return f"Halo, saya {self.nama}"\n\nsiswa = Siswa("Aiko")\nprint(siswa.sapa())',
        "Pelajari class, objek, atribut, metode, komposisi, dan pewarisan."
      ],
      [
        "Pengujian dan kualitas kode",
        "Lanjutan",
        "Program yang baik memerlukan pengujian, struktur jelas, dan perhatian terhadap kompleksitas algoritma.",
        'def tambah(a, b):\n    return a + b\n\nassert tambah(2, 3) == 5\nprint("Pengujian sederhana lolos")',
        "Lanjutkan ke unittest, pytest, type hints, logging, dan virtual environment."
      ],
      [
        "String dan operasi teks",
        "Dasar",
        "String adalah data teks. Kamu dapat menggabungkan, memotong, dan mengubah huruf.",
        'nama = "Aiko Anail"\nprint(nama.upper())\nprint(nama.lower())\nprint(len(nama))\nprint(nama[0:4])',
        "Irisan [0:4] mengambil karakter pada indeks 0 sampai 3."
      ],
      [
        "Boolean dan logika",
        "Dasar",
        "Boolean memiliki nilai True atau False. Operator and, or, dan not digunakan untuk logika.",
        'umur = 16\npunya_kartu = True\nprint(umur >= 15 and punya_kartu)\nprint(not punya_kartu)',
        "Gunakan tanda kurung pada kondisi kompleks agar mudah dibaca."
      ],
      [
        "List lebih dalam",
        "Menengah",
        "List dapat diubah setelah dibuat. append menambah item, remove menghapus nilai, dan sort mengurutkan data.",
        'buah = ["apel", "jeruk"]\nbuah.append("mangga")\nbuah.remove("jeruk")\nbuah.sort()\nprint(buah)',
        "Periksa keberadaan item sebelum menghapusnya."
      ],
      [
        "Tuple dan set",
        "Menengah",
        "Tuple menyimpan urutan yang tidak dapat diubah. Set menyimpan nilai unik.",
        'koordinat = (10, 20)\nangka_unik = set([1, 2, 2, 3, 3])\nprint(koordinat[0])\nprint(angka_unik)',
        "Set cocok untuk menghilangkan duplikat."
      ],
      [
        "Dictionary dan perulangan data",
        "Menengah",
        "items() memungkinkan kamu membaca kunci dan nilai dictionary sekaligus.",
        'profil = {"nama": "Aiko", "kelas": "X RPL"}\nfor kunci, nilai in profil.items():\n    print(kunci, "=", nilai)',
        "Gunakan get() jika suatu kunci mungkin belum tersedia."
      ],
      [
        "List comprehension",
        "Menengah",
        "List comprehension membuat list baru dengan sintaks ringkas.",
        'angka = [1, 2, 3, 4, 5]\nkuadrat = [n * n for n in angka]\ngenap = [n for n in angka if n % 2 == 0]\nprint(kuadrat, genap)',
        "Jika logikanya terlalu panjang, gunakan loop biasa."
      ],
      [
        "Argumen fungsi dan nilai default",
        "Menengah",
        "Fungsi dapat memiliki nilai default dan beberapa parameter.",
        'def sapa(nama, sapaan="Halo"):\n    return f"{sapaan}, {nama}!"\n\nprint(sapa("Aiko"))\nprint(sapa("Rani", "Selamat pagi"))',
        "Hindari nilai default mutable seperti list jika belum memahami perilakunya."
      ],
      [
        "Fungsi bawaan",
        "Menengah",
        "len, sum, min, max, sorted, dan enumerate membantu mengolah data.",
        'nilai = [78, 90, 85]\nprint(sum(nilai) / len(nilai))\nfor nomor, skor in enumerate(nilai, start=1):\n    print(nomor, skor)',
        "Pilih fungsi bernama biasa jika lambda mulai sulit dibaca."
      ],
      [
        "Membaca JSON",
        "Lanjutan",
        "JSON adalah format umum untuk menyimpan dan bertukar data.",
        'import json\n\nprofil = {"nama": "Aiko", "skill": ["HTML", "CSS"]}\nteks = json.dumps(profil, ensure_ascii=False, indent=2)\nprint(teks)\nkembali = json.loads(teks)',
        "Saat membaca JSON dari luar, tangani kesalahan format dan validasi datanya."
      ],
      [
        "Virtual environment dan pip",
        "Lanjutan",
        "Virtual environment memisahkan pustaka setiap proyek. pip memasang paket Python.",
        '# Jalankan di terminal:\n# python -m venv .venv\n# Windows: .venv\\Scripts\\activate\n# macOS/Linux: source .venv/bin/activate\n# python -m pip install requests',
        "Pasang hanya dependensi yang diperlukan dan gunakan sumber tepercaya."
      ],
      [
        "Debugging dan traceback",
        "Lanjutan",
        "Debugging adalah proses menemukan penyebab kesalahan program.",
        'angka = "12"\ntry:\n    hasil = int(angka) + 3\n    print(hasil)\nexcept ValueError:\n    print("Masukkan angka yang valid")',
        "Baca pesan kesalahan dan periksa nilai variabel yang terlibat."
      ],
      [
        "Algoritma dan kompleksitas dasar",
        "Lanjutan",
        "Algoritma adalah langkah-langkah untuk menyelesaikan masalah.",
        'def cari(daftar, target):\n    for indeks, nilai in enumerate(daftar):\n        if nilai == target:\n            return indeks\n    return -1\n\nprint(cari([4, 8, 2], 8))',
        "Pencarian linear memeriksa item satu per satu."
      ]
    ]
  },

  html: {
    name: "HTML",
    lessons: [
      [
        "Struktur dokumen",
        "Dasar",
        "HTML memberi struktur dan makna pada konten website.",
        '<!doctype html>\n<html lang="id">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>Halaman Pertamaku</title>\n</head>\n<body>\n  <h1>Halo, dunia!</h1>\n  <p>Ini halaman pertamaku.</p>\n</body>\n</html>',
        "Elemen head menyimpan metadata, sedangkan body berisi konten halaman."
      ],
      [
        "Heading, paragraf, dan teks",
        "Dasar",
        "Gunakan heading sesuai hierarki, p untuk paragraf, strong untuk kepentingan, dan em untuk penekanan.",
        '<h1>Profil Saya</h1>\n<h2>Hobi</h2>\n<p>Saya suka <strong>membuat website</strong>.</p>\n<p><em>Belajar sedikit setiap hari.</em></p>',
        "Gunakan heading berdasarkan struktur konten, bukan hanya ukuran huruf."
      ],
      [
        "Tautan, gambar, dan daftar",
        "Dasar",
        "a membuat tautan, img menampilkan gambar, dan ul/ol membuat daftar.",
        '<a href="https://developer.mozilla.org/">Belajar di MDN</a>\n<img src="foto.jpg" alt="Foto profil" width="200">\n<ul><li>HTML</li><li>CSS</li></ul>',
        "Teks alt membantu pengguna pembaca layar dan saat gambar gagal dimuat."
      ],
      [
        "Formulir dan input",
        "Menengah",
        "Form mengumpulkan data. Hubungkan label ke input menggunakan for dan id.",
        '<form>\n  <label for="email">Email:</label>\n  <input id="email" type="email" required>\n  <button type="submit">Kirim</button>\n</form>',
        "Gunakan tipe input yang sesuai dengan data yang diminta."
      ],
      [
        "Elemen semantik",
        "Menengah",
        "Elemen semantik menjelaskan fungsi bagian halaman.",
        '<header>Bagian atas</header>\n<nav>Navigasi</nav>\n<main>\n  <article>Artikel</article>\n  <section>Bagian konten</section>\n</main>\n<footer>Bagian bawah</footer>',
        "Semantik membantu aksesibilitas dan pemahaman struktur dokumen."
      ],
      [
        "Tabel HTML",
        "Menengah",
        "Tabel digunakan untuk menyajikan data tabular, bukan untuk membuat tata letak halaman.",
        '<table>\n  <thead><tr><th>Nama</th><th>Kelas</th></tr></thead>\n  <tbody><tr><td>Aiko</td><td>X RPL</td></tr></tbody>\n</table>',
        "Gunakan th untuk sel judul dan td untuk data."
      ],
      [
        "Audio dan video",
        "Menengah",
        "Elemen audio dan video menampilkan media langsung di halaman.",
        '<audio controls src="musik.mp3"></audio>\n<video controls width="400" poster="poster.jpg">\n  <source src="video.mp4" type="video/mp4">\n  Browser tidak mendukung video.\n</video>',
        "Sediakan kontrol dan teks alternatif jika diperlukan."
      ],
      [
        "Metadata dan SEO dasar",
        "Menengah",
        "Metadata membantu browser dan mesin pencari memahami halaman.",
        '<meta name="description" content="Belajar pemrograman web untuk pemula.">\n<title>Belajar HTML | KodingKita</title>',
        "Buat judul dan deskripsi yang relevan dengan isi halaman."
      ],
      [
        "Aksesibilitas HTML",
        "Lanjutan",
        "HTML yang aksesibel membantu pengguna dengan beragam kebutuhan.",
        '<label for="nama">Nama lengkap</label>\n<input id="nama" name="nama" autocomplete="name">\n<button type="button">Lihat detail</button>',
        "Pastikan elemen interaktif bisa digunakan dengan keyboard."
      ],
      [
        "Atribut data",
        "Lanjutan",
        "Atribut data-* menyimpan informasi tambahan pada elemen HTML.",
        '<button data-produk="mobil" data-harga="250000">Lihat produk</button>',
        "JavaScript dapat membaca atribut tersebut menggunakan dataset."
      ],
      [
        "Struktur proyek HTML",
        "Lanjutan",
        "Pisahkan file HTML, CSS, JavaScript, dan aset agar proyek mudah dikelola.",
        '<link rel="stylesheet" href="style.css">\n<script src="script.js" defer></script>',
        "Gunakan nama file yang jelas dan konsisten."
      ],
      [
        "Tautan internal dan navigasi",
        "Dasar",
        "Tautan internal mengarahkan pengguna ke bagian tertentu pada halaman.",
        '<nav><a href="#tentang">Tentang</a></nav>\n<section id="tentang"><h2>Tentang Saya</h2></section>',
        "Pastikan nilai href cocok dengan id tujuan."
      ],
      [
        "Komentar dan karakter khusus",
        "Dasar",
        "Komentar membantu memberi catatan pada kode. Entitas HTML digunakan untuk karakter khusus.",
        '<!-- Bagian profil -->\n<p>HTML &amp; CSS</p>\n<p>&lt;tag&gt;</p>',
        "Komentar tidak ditampilkan sebagai konten biasa di halaman."
      ],
      [
        "Video responsif",
        "Menengah",
        "Konten media perlu menyesuaikan lebar layar agar tidak meluap.",
        '<video controls style="max-width:100%;height:auto">\n  <source src="video.mp4" type="video/mp4">\n</video>',
        "Untuk proyek besar, atur tampilan media melalui CSS terpisah."
      ],
      [
        "Validasi formulir",
        "Menengah",
        "HTML memiliki atribut validasi sederhana seperti required, minlength, maxlength, dan type.",
        '<form>\n  <label for="username">Username</label>\n  <input id="username" name="username" minlength="3" required>\n  <button>Kirim</button>\n</form>',
        "Validasi browser membantu pengguna, tetapi data tetap perlu divalidasi di server."
      ],
      [
        "Elemen details dan summary",
        "Menengah",
        "details dan summary membuat bagian yang dapat dibuka dan ditutup tanpa JavaScript.",
        '<details>\n  <summary>Lihat jawaban</summary>\n  <p>Ini adalah penjelasan.</p>\n</details>',
        "Gunakan untuk informasi tambahan yang tidak harus selalu terlihat."
      ],
      [
        "Gambar responsif",
        "Lanjutan",
        "picture dan srcset dapat membantu browser memilih gambar yang sesuai.",
        '<picture>\n  <source media="(max-width: 600px)" srcset="foto-kecil.jpg">\n  <img src="foto-besar.jpg" alt="Pemandangan" style="max-width:100%">\n</picture>',
        "Sediakan alt yang bermakna untuk gambar informatif."
      ],
      [
        "Atribut loading dan decoding",
        "Lanjutan",
        "Atribut gambar dapat membantu browser memuat konten dengan lebih efisien.",
        '<img src="galeri.jpg" alt="Galeri proyek" loading="lazy" decoding="async">',
        "Gunakan lazy loading untuk gambar di luar area awal halaman."
      ],
      [
        "HTML dan keamanan tautan",
        "Lanjutan",
        "Tautan eksternal perlu ditulis dengan jelas dan atribut keamanan yang sesuai.",
        '<a href="https://example.com" target="_blank" rel="noopener noreferrer">Buka situs</a>',
        "Beritahu pengguna jika tautan membuka tab baru."
      ]
    ]
  },

  css: {
    name: "CSS",
    lessons: [
      [
        "Dasar CSS",
        "Dasar",
        "CSS mengatur warna, ukuran, jarak, tata letak, dan tampilan elemen HTML.",
        'body {\n  font-family: Arial, sans-serif;\n  background: #f4f6f8;\n  color: #202938;\n}\nh1 {\n  color: #2563eb;\n}',
        "CSS dapat ditulis di file terpisah dan dihubungkan menggunakan link."
      ],
      [
        "Selector dan properti",
        "Dasar",
        "Selector memilih elemen yang akan diberi gaya.",
        'p { color: #334155; }\n.kartu { padding: 16px; }\n#judul { font-size: 32px; }',
        "Gunakan class untuk gaya yang dipakai oleh banyak elemen."
      ],
      [
        "Warna dan satuan",
        "Dasar",
        "CSS mendukung warna hex, RGB, HSL, dan satuan seperti px, rem, em, %, vw, dan vh.",
        ':root { --warna-utama: #2563eb; }\nbutton { background: var(--warna-utama); padding: 0.75rem 1rem; }',
        "rem berguna untuk ukuran yang mengikuti ukuran font root."
      ],
      [
        "Box model",
        "Dasar",
        "Box model terdiri dari content, padding, border, dan margin.",
        '* { box-sizing: border-box; }\n.kartu {\n  width: 300px;\n  padding: 20px;\n  border: 1px solid #ddd;\n  margin: 12px;\n}',
        "border-box membuat width mencakup padding dan border."
      ],
      [
        "Typography",
        "Dasar",
        "Typography mengatur jenis font, ukuran, ketebalan, tinggi baris, dan jarak huruf.",
        'body { font-family: Arial, sans-serif; line-height: 1.6; }\nh1 { font-size: clamp(2rem, 5vw, 4rem); }',
        "Pilih ukuran dan kontras yang nyaman dibaca."
      ],
      [
        "Flexbox",
        "Menengah",
        "Flexbox membantu menyusun elemen dalam satu dimensi, secara horizontal atau vertikal.",
        '.wadah {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}',
        "Gunakan gap untuk memberi jarak antarelemen."
      ],
      [
        "CSS Grid",
        "Menengah",
        "Grid mengatur layout dua dimensi dengan baris dan kolom.",
        '.grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 20px;\n}',
        "Grid cocok untuk galeri, daftar kartu, dan dashboard."
      ],
      [
        "Responsive design",
        "Menengah",
        "Media query menyesuaikan tampilan berdasarkan lebar layar atau fitur perangkat.",
        '.grid { display: grid; grid-template-columns: repeat(3, 1fr); }\n@media (max-width: 700px) {\n  .grid { grid-template-columns: 1fr; }\n}',
        "Mulailah dari layar kecil lalu tambahkan aturan untuk layar lebih besar."
      ],
      [
        "Pseudo-class dan hover",
        "Menengah",
        "Pseudo-class seperti hover, focus-visible, dan checked mengatur keadaan elemen.",
        'button:hover { filter: brightness(0.9); }\nbutton:focus-visible { outline: 3px solid #93c5fd; outline-offset: 3px; }',
        "Pastikan keadaan fokus terlihat ketika navigasi memakai keyboard."
      ],
      [
        "Transisi",
        "Menengah",
        "transition membuat perubahan gaya berjalan lebih halus.",
        '.kartu { transition: transform 180ms ease, box-shadow 180ms ease; }\n.kartu:hover { transform: translateY(-4px); }',
        "Hindari animasi berlebihan yang mengganggu pengguna."
      ],
      [
        "Animasi keyframes",
        "Lanjutan",
        "Keyframes mendefinisikan tahapan animasi CSS.",
        '@keyframes muncul {\n  from { opacity: 0; transform: translateY(12px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n.konten { animation: muncul 400ms ease both; }',
        "Sediakan pilihan reduced motion untuk pengguna yang membutuhkan."
      ],
      [
        "Variabel CSS",
        "Menengah",
        "Custom properties menyimpan nilai yang bisa digunakan ulang.",
        ':root {\n  --warna-utama: #2563eb;\n  --radius-kartu: 16px;\n}\n.kartu {\n  background: white;\n  border-radius: var(--radius-kartu);\n}',
        "Variabel memudahkan perubahan tema dan konsistensi desain."
      ],
      [
        "Position dan z-index",
        "Menengah",
        "position mengatur penempatan elemen, sedangkan z-index mengatur tumpukan dalam konteks yang sesuai.",
        '.wadah { position: relative; }\n.badge { position: absolute; top: 8px; right: 8px; }\n.header { position: sticky; top: 0; }',
        "z-index dipengaruhi stacking context, bukan hanya angka besar."
      ],
      [
        "Overflow dan ukuran",
        "Menengah",
        "Properti overflow mengatur konten yang melebihi ukuran elemen.",
        '.panel {\n  max-width: 100%;\n  overflow-wrap: anywhere;\n}\n.gambar { max-width: 100%; height: auto; }',
        "Uji teks panjang dan gambar besar agar layout tidak meluap."
      ],
      [
        "Shadow dan border",
        "Dasar",
        "Border dan box-shadow membantu memberi batas dan kedalaman visual.",
        '.kartu {\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  box-shadow: 0 8px 24px rgb(15 23 42 / 8%);\n}',
        "Gunakan shadow seperlunya agar konten tetap jelas."
      ],
      [
        "Pseudo-element",
        "Menengah",
        "before dan after membuat dekorasi tanpa menambahkan elemen HTML baru.",
        '.judul::after {\n  content: "";\n  display: block;\n  width: 60px;\n  height: 4px;\n  margin-top: 8px;\n  background: #2563eb;\n}',
        "Untuk konten penting, tetap gunakan HTML agar dapat diakses."
      ],
      [
        "Dark mode",
        "Lanjutan",
        "CSS dapat menggunakan class tema atau prefers-color-scheme untuk menyesuaikan warna.",
        ':root { color-scheme: light; }\nbody.dark { background: #0f172a; color: #f8fafc; }\n@media (prefers-color-scheme: dark) {\n  body.auto-theme { background: #0f172a; color: #f8fafc; }\n}',
        "Periksa kontras teks dan kontrol pada kedua tema."
      ],
      [
        "Container queries",
        "Lanjutan",
        "Container queries memungkinkan komponen menyesuaikan diri dengan ukuran wadahnya.",
        '.kartu-wadah { container-type: inline-size; }\n@container (min-width: 500px) {\n  .kartu { display: grid; grid-template-columns: 1fr 2fr; }\n}',
        "Berguna untuk komponen yang ditempatkan di berbagai layout."
      ],
      [
        "Debugging CSS",
        "Lanjutan",
        "Developer Tools membantu memeriksa selector, computed styles, box model, dan layout.",
        '/* Gunakan outline sementara untuk memeriksa elemen */\n* { outline: 1px solid rgb(255 0 0 / 10%); }',
        "Hapus aturan debug sebelum mempublikasikan website."
      ],
      [
        "Organisasi CSS",
        "Lanjutan",
        "Struktur CSS yang konsisten membuat proyek lebih mudah dirawat.",
        ':root { --space: 1rem; }\n.kartu { padding: var(--space); }\n.kartu__judul { margin-block: 0 0.5rem; }\n.kartu--utama { border-color: #2563eb; }',
        "Gunakan penamaan yang konsisten dan hindari selector yang terlalu spesifik."
      ]
    ]
  },

  javascript: {
    name: "JavaScript",
    lessons: [
      [
        "Dasar JavaScript",
        "Dasar",
        "JavaScript menambahkan logika dan interaksi pada website.",
        'console.log("Halo, dunia!");\nalert("Selamat belajar!");',
        "Gunakan console untuk melihat hasil saat belajar."
      ],
      [
        "Variabel",
        "Dasar",
        "const digunakan untuk binding yang tidak di-assign ulang. let digunakan untuk nilai yang berubah.",
        'const nama = "Aiko";\nlet skor = 0;\nskor += 10;\nconsole.log(nama, skor);',
        "Utamakan const jika variabel tidak perlu di-assign ulang."
      ],
      [
        "Tipe data dan operator",
        "Dasar",
        "JavaScript memiliki string, number, boolean, null, undefined, object, dan tipe lainnya.",
        'const nama = "Aiko";\nconst umur = 16;\nconst aktif = true;\nconsole.log(umur + 1, aktif);',
        "Gunakan === untuk perbandingan ketat pada umumnya."
      ],
      [
        "Kondisi",
        "Dasar",
        "if, else if, dan else menjalankan kode sesuai kondisi.",
        'const nilai = 87;\nif (nilai >= 85) {\n  console.log("Bagus");\n} else {\n  console.log("Terus belajar");\n}',
        "Kondisi harus menghasilkan nilai truthy atau falsy sesuai maksud program."
      ],
      [
        "Perulangan",
        "Dasar",
        "for dan while mengulang blok kode.",
        'for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}',
        "Pastikan kondisi perulangan dapat berhenti."
      ],
      [
        "Fungsi",
        "Dasar",
        "Fungsi membungkus logika agar bisa digunakan ulang.",
        'function tambah(a, b) {\n  return a + b;\n}\nconsole.log(tambah(3, 4));',
        "Parameter adalah masukan fungsi dan return mengembalikan hasil."
      ],
      [
        "Array",
        "Menengah",
        "Array menyimpan urutan nilai dan memiliki metode untuk mengolahnya.",
        'const skill = ["HTML", "CSS", "JavaScript"];\nskill.push("Python");\nconsole.log(skill.length, skill[0]);',
        "Indeks array dimulai dari 0."
      ],
      [
        "Objek",
        "Menengah",
        "Objek menyimpan properti dalam bentuk pasangan kunci dan nilai.",
        'const siswa = { nama: "Aiko", kelas: "X RPL" };\nconsole.log(siswa.nama);\nsiswa.hobi = "coding";',
        "Gunakan dot notation atau bracket notation untuk mengakses properti."
      ],
      [
        "DOM",
        "Menengah",
        "DOM memungkinkan JavaScript membaca dan mengubah elemen halaman.",
        'const judul = document.querySelector("h1");\nif (judul) judul.textContent = "Belajar JavaScript";',
        "Pastikan elemen tersedia sebelum memanipulasinya."
      ],
      [
        "Event",
        "Menengah",
        "Event listener menjalankan fungsi ketika suatu kejadian terjadi.",
        'const tombol = document.querySelector("#tombol");\ntombol?.addEventListener("click", () => {\n  console.log("Tombol diklik");\n});',
        "Gunakan addEventListener agar pengelolaan event lebih rapi."
      ],
      [
        "Validasi formulir",
        "Menengah",
        "JavaScript dapat memeriksa masukan sebelum memprosesnya.",
        'const form = document.querySelector("form");\nform?.addEventListener("submit", (event) => {\n  const input = document.querySelector("#nama");\n  if (!input?.value.trim()) {\n    event.preventDefault();\n    alert("Nama wajib diisi");\n  }\n});',
        "Validasi di browser tidak menggantikan validasi di server."
      ],
      [
        "Array map, filter, dan reduce",
        "Menengah",
        "Metode array membantu mengubah, menyaring, dan merangkum data.",
        'const angka = [1, 2, 3, 4];\nconsole.log(angka.map(n => n * 2));\nconsole.log(angka.filter(n => n % 2 === 0));\nconsole.log(angka.reduce((total, n) => total + n, 0));',
        "Pilih metode sesuai tujuan dan utamakan kode yang mudah dibaca."
      ],
      [
        "Local storage",
        "Menengah",
        "localStorage menyimpan data sederhana di browser sebagai string.",
        'localStorage.setItem("tema", "gelap");\nconst tema = localStorage.getItem("tema");\nconsole.log(tema);',
        "Jangan simpan password atau data rahasia di localStorage."
      ],
      [
        "JSON",
        "Menengah",
        "JSON.stringify mengubah nilai menjadi teks JSON, sedangkan JSON.parse membaca teks JSON.",
        'const siswa = { nama: "Aiko", kelas: "X" };\nconst teks = JSON.stringify(siswa);\nconst data = JSON.parse(teks);\nconsole.log(data.nama);',
        "Tangani error saat membaca JSON yang berasal dari sumber tidak tepercaya."
      ],
      [
        "Fetch dan API",
        "Lanjutan",
        "fetch meminta data melalui jaringan dan mengembalikan Promise.",
        'async function muat() {\n  try {\n    const respons = await fetch("https://jsonplaceholder.typicode.com/posts/1");\n    if (!respons.ok) throw new Error("HTTP gagal");\n    const data = await respons.json();\n    console.log(data.title);\n  } catch (error) {\n    console.error(error);\n  }\n}\nmuat();',
        "Periksa response.ok karena status HTTP gagal tidak selalu menolak Promise."
      ],
      [
        "Date dan waktu",
        "Menengah",
        "Objek Date membaca waktu saat ini dan memformat tanggal.",
        'const sekarang = new Date();\nconsole.log(sekarang.getFullYear());\nconsole.log(sekarang.toLocaleDateString("id-ID", { dateStyle: "long" }));',
        "Zona waktu dapat memengaruhi tampilan tanggal."
      ],
      [
        "Destructuring dan spread",
        "Lanjutan",
        "Destructuring mengambil nilai dari array atau objek. Spread membantu menyalin atau menggabungkan nilai.",
        'const siswa = { nama: "Aiko", kelas: "X" };\nconst { nama, kelas } = siswa;\nconst skillAwal = ["HTML", "CSS"];\nconst semuaSkill = [...skillAwal, "JavaScript"];\nconsole.log(nama, kelas, semuaSkill);',
        "Spread membuat salinan dangkal, bukan salinan mendalam untuk objek bersarang."
      ],
      [
        "Error handling dan debugging",
        "Lanjutan",
        "try/catch menangani error yang dapat diperkirakan. Developer Tools menyediakan breakpoint dan pemeriksaan variabel.",
        'try {\n  const data = JSON.parse("{teks tidak valid}");\n  console.log(data);\n} catch (error) {\n  console.error("Data tidak dapat dibaca:", error.message);\n}',
        "Jangan menampilkan detail teknis sensitif kepada pengguna akhir."
      ],
      [
        "Modul JavaScript",
        "Lanjutan",
        "Modul memecah kode ke file terpisah. export membagikan fungsi dan import menggunakannya.",
        '// matematika.js\nexport function tambah(a, b) { return a + b; }\n\n// file utama.js\nimport { tambah } from "./matematika.js";\nconsole.log(tambah(2, 3));',
        "Contoh ini membutuhkan lingkungan yang mendukung ES modules."
      ],
      [
        "Keamanan DOM dasar",
        "Lanjutan",
        "Perlakukan konten dari pengguna sebagai data. textContent lebih aman untuk teks biasa daripada memasukkan HTML mentah.",
        'const inputPengguna = "<img src=x onerror=alert(1)>";\nconst hasil = document.querySelector("#hasil");\nif (hasil) hasil.textContent = inputPengguna;',
        "Hindari memasukkan data tidak tepercaya ke innerHTML."
      ],
      [
        "Scope dan hoisting",
        "Menengah",
        "Scope menentukan tempat variabel dapat diakses. let dan const memiliki block scope.",
        'function contoh() {\n  const pesan = "Halo";\n  if (true) {\n    let jumlah = 1;\n    console.log(pesan, jumlah);\n  }\n}\ncontoh();',
        "Deklarasikan variabel dekat dengan tempat penggunaannya."
      ],
      [
        "Callback dan Promise",
        "Lanjutan",
        "Callback adalah fungsi yang diberikan kepada fungsi lain. Promise mewakili hasil operasi asynchronous.",
        'function tunggu() {\n  return Promise.resolve("Selesai");\n}\ntunggu().then(hasil => console.log(hasil));',
        "Pelajari Promise sebelum melanjutkan ke async/await."
      ],
      [
        "Class dan objek",
        "Lanjutan",
        "Class menyediakan sintaks untuk membuat objek dengan properti dan metode.",
        'class Siswa {\n  constructor(nama) {\n    this.nama = nama;\n  }\n  sapa() {\n    return `Halo, ${this.nama}`;\n  }\n}\nconsole.log(new Siswa("Aiko").sapa());',
        "Pahami prototype dan pewarisan sebelum membangun hierarki class yang kompleks."
      ]
    ]
  }
};

const state = {
  language: "python",
  lesson: 0,
  query: "",
  selectedAnswer: null,
  answered: false,
  question: 0,
  score: 0
};

const quiz = [
  {
    q: "Tag HTML mana yang digunakan untuk tautan?",
    options: ["<img>", "<a>", "<p>", "<link>"],
    answer: 1,
    why: "Elemen <a> membuat hyperlink. Atribut href berisi tujuan tautan."
  },
  {
    q: "Properti CSS apa yang umum dipakai untuk membuat tata letak Flexbox?",
    options: ["position: flex", "display: flex", "flex: display", "layout: row"],
    answer: 1,
    why: "display: flex mengaktifkan Flexbox pada sebuah elemen."
  },
  {
    q: "Kata kunci JavaScript mana yang cocok untuk nilai yang tidak ditetapkan ulang?",
    options: ["var saja", "change", "const", "repeat"],
    answer: 2,
    why: "const mencegah variabel di-assign ulang, meskipun properti objek masih bisa berubah."
  },
  {
    q: "Apa keluaran kode Python print(2 + 3)?",
    options: ["23", "5", "2 + 3", "Error selalu"],
    answer: 1,
    why: "Operator + menjumlahkan dua bilangan, sehingga hasilnya 5."
  }
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function escapeHTML(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function practiceFor(language, index) {
  const tasks = {
    python: [
      "Tampilkan nama kamu dengan print().",
      "Buat variabel kota dan tampilkan bersama namamu.",
      "Minta pengguna memasukkan angka lalu tampilkan angka + 1.",
      "Ubah kondisi agar pesan muncul saat nilai minimal 90.",
      "Gunakan range() untuk mencetak angka 1 sampai 10.",
      "Tambahkan satu hobi ke list dan cetak item terakhir.",
      "Buat fungsi yang mengembalikan dua angka dikalikan.",
      "Ubah contoh agar catatan ditambahkan, bukan menimpa file.",
      "Gunakan modul random untuk membuat angka acak.",
      "Tambahkan metode lain yang menampilkan nama siswa.",
      "Tulis satu tes tambahan untuk fungsi tambah."
    ],
    html: [
      "Ubah judul halaman dan paragrafnya.",
      "Buat heading h2 untuk bagian hobi.",
      "Tambahkan dua item daftar dan tautan lain.",
      "Tambahkan label dan input nama yang wajib diisi.",
      "Buat header, main, article, dan footer semantik.",
      "Buat tabel dua kolom dengan dua baris data.",
      "Tulis deskripsi halaman yang sesuai.",
      "Tambahkan gambar responsif dengan alt yang jelas."
    ],
    css: [
      "Ubah warna judul dan ukuran font.",
      "Buat class .sorotan lalu gunakan di HTML.",
      "Atur padding 16px dan border-radius 12px.",
      "Susun tiga kartu menggunakan grid.",
      "Uji layout satu kolom di layar kecil.",
      "Buat variabel warna utama lalu gunakan.",
      "Tambahkan hover dan dukungan reduced motion.",
      "Buat aturan komponen dengan nama class konsisten."
    ],
    javascript: [
      "Cetak nama kamu ke console.",
      "Buat variabel const untuk nama dan let untuk skor.",
      "Tampilkan pesan berbeda sesuai nilai.",
      "Buat array tiga angka lalu kalikan setiap angka dengan 2.",
      "Tambahkan properti hobi ke objek siswa.",
      "Buat tombol yang mengubah teks saat diklik.",
      "Tampilkan pesan ramah jika permintaan fetch gagal.",
      "Tolak input kosong dan tampilkan pesan yang aman.",
      "Tambahkan tes untuk kasus nilai negatif."
    ]
  };

  return tasks[language][index] ||
    "Buat contoh kecil sendiri, jalankan, lalu jelaskan cara kerjanya.";
}

function renderLessons() {
  const lessons = curriculum[state.language].lessons;

  const filtered = lessons
    .map((lesson, index) => ({ lesson, index }))
    .filter(({ lesson }) =>
      (lesson[0] + " " + lesson[1] + " " + lesson[2])
        .toLowerCase()
        .includes(state.query.toLowerCase())
    );

  $("#lessonCount").textContent = filtered.length;

  $("#lessonList").innerHTML = filtered.length
    ? filtered.map(({ lesson, index }) => `
        <button
          class="lesson-item ${index === state.lesson ? "active" : ""}"
          data-lesson="${index}"
        >
          <span>${String(index + 1).padStart(2, "0")} · ${escapeHTML(lesson[1])}</span>
          ${escapeHTML(lesson[0])}
        </button>
      `).join("")
    : '<p style="padding:12px;color:var(--muted);font-size:12px">Materi tidak ditemukan.</p>';

  $("#lessonList").querySelectorAll("[data-lesson]").forEach((button) => {
    button.addEventListener("click", () => {
      state.lesson = Number(button.dataset.lesson);
      renderLessons();
    });
  });

  const lesson = lessons[state.lesson];

  $("#lessonDetail").innerHTML = `
    <div class="lesson-meta">
      <span class="pill">${state.language.toUpperCase()}</span>
      <span>${escapeHTML(lesson[1])}</span>
      <span>Materi ${state.lesson + 1} dari ${lessons.length}</span>
    </div>

    <h3>${escapeHTML(lesson[0])}</h3>
    <p>${escapeHTML(lesson[2])}</p>

    <h4>Contoh kode</h4>
    <pre><code id="lessonCode"></code></pre>

    <p class="explain">${escapeHTML(lesson[4])}</p>

    <h4>Latihan mandiri</h4>
    <p>${escapeHTML(practiceFor(state.language, state.lesson))}</p>

    <h4>Target penguasaan</h4>
    <ul>
      <li>Pahami fungsi setiap baris kode.</li>
      <li>Ketik ulang contoh dan ubah nilainya.</li>
      <li>Jalankan, amati hasil, lalu perbaiki kesalahan.</li>
    </ul>

    <button id="nextLesson" class="button primary">
      ${state.lesson === lessons.length - 1 ? "Ulangi jalur ini" : "Materi berikutnya"} →
    </button>
  `;

  $("#lessonCode").textContent = lesson[3];

  $("#nextLesson").addEventListener("click", () => {
    state.lesson = (state.lesson + 1) % lessons.length;
    renderLessons();
  });
}

function chooseLanguage(language) {
  if (!curriculum[language]) return;

  state.language = language;
  state.lesson = 0;

  $$(".lang-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.language === language);
  });

  renderLessons();

  $("#materi").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

$$("[data-language]").forEach((button) => {
  button.addEventListener("click", () => {
    chooseLanguage(button.dataset.language);
  });
});

$("#topicSearch").addEventListener("input", (event) => {
  state.query = event.target.value;
  renderLessons();
});

function renderQuiz() {
  const question = quiz[state.question];

  $("#quizNumber").textContent =
    `PERTANYAAN ${state.question + 1} DARI ${quiz.length}`;

  $("#quizScore").textContent = `Skor: ${state.score}`;
  $("#quizQuestion").textContent = question.q;

  $("#quizOptions").innerHTML = question.options
    .map((option, index) => `
      <button
        class="quiz-option ${state.selectedAnswer === index ? "selected" : ""}"
        data-answer="${index}"
        ${state.answered ? "disabled" : ""}
      >
        <span class="letter">${String.fromCharCode(65 + index)}</span>
        <span>${escapeHTML(option)}</span>
      </button>
    `)
    .join("");

  $("#quizOptions").querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      if (state.answered) return;

      state.selectedAnswer = Number(button.dataset.answer);
      renderQuiz();
    });
  });

  $("#quizFeedback").textContent = state.answered
    ? (state.selectedAnswer === question.answer ? "Benar! " : "Belum tepat. ") + question.why
    : "";

  $("#checkAnswer").hidden = state.answered;

  $("#nextQuestion").hidden =
    !state.answered || state.question === quiz.length - 1;

  $("#restartQuiz").hidden =
    !(state.answered && state.question === quiz.length - 1);

  if (state.answered) {
    $$(".quiz-option").forEach((button, index) => {
      if (index === question.answer) {
        button.classList.add("correct");
      } else if (index === state.selectedAnswer) {
        button.classList.add("wrong");
      }
    });
  }
}

$("#checkAnswer").addEventListener("click", () => {
  if (state.selectedAnswer === null) {
    $("#quizFeedback").textContent =
      "Pilih salah satu jawaban terlebih dahulu.";
    return;
  }

  state.answered = true;

  if (state.selectedAnswer === quiz[state.question].answer) {
    state.score++;
  }

  renderQuiz();
});

$("#nextQuestion").addEventListener("click", () => {
  state.question++;
  state.selectedAnswer = null;
  state.answered = false;
  renderQuiz();
});

$("#restartQuiz").addEventListener("click", () => {
  state.question = 0;
  state.score = 0;
  state.selectedAnswer = null;
  state.answered = false;
  renderQuiz();
});

$("#themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light");

  $("#themeToggle").textContent =
    document.body.classList.contains("light") ? "☾" : "☼";
});

$("#menuToggle").addEventListener("click", () => {
  const open = $("#mainNav").classList.toggle("open");

  $("#menuToggle").setAttribute("aria-expanded", String(open));
  $("#menuToggle").textContent = open ? "×" : "☰";
});

$("#mainNav a").forEach?.(() => {});

$$('#mainNav a').forEach((link) => {
  link.addEventListener("click", () => {
    $("#mainNav").classList.remove("open");
    $("#menuToggle").setAttribute("aria-expanded", "false");
    $("#menuToggle").textContent = "☰";
  });
});

$("#year").textContent = new Date().getFullYear();

renderLessons();
renderQuiz();

const contohMateri = [
  {
    bahasa: "HTML",
    judul: "Membuat Judul dan Paragraf",
    kode: `<h1>Halo, Dunia!</h1>
<p>Saya sedang belajar HTML.</p>`,
    output: "Halo, Dunia!\nSaya sedang belajar HTML.",
    penjelasan: "Tag h1 digunakan untuk judul utama, sedangkan tag p digunakan untuk paragraf."
  },
  {
    bahasa: "HTML",
    judul: "Membuat Tombol",
    kode: `<button>Klik Saya</button>`,
    output: "[ Klik Saya ]",
    penjelasan: "Tag button digunakan untuk membuat tombol yang bisa diklik."
  },
  {
    bahasa: "HTML",
    judul: "Membuat Tautan",
    kode: `<a href="https://www.google.com">Buka Google</a>`,
    output: "Buka Google",
    penjelasan: "Tag a digunakan untuk membuat tautan menuju halaman lain."
  },
  {
    bahasa: "HTML",
    judul: "Membuat Daftar",
    kode: `<h2>Hobi Saya</h2>
<ul>
  <li>Membaca</li>
  <li>Ngoding</li>
  <li>Bermain game</li>
</ul>`,
    output: "Hobi Saya\n• Membaca\n• Ngoding\n• Bermain game",
    penjelasan: "Tag ul membuat daftar tanpa nomor, sedangkan li membuat setiap item daftar."
  },
  {
    bahasa: "CSS",
    judul: "Mengubah Warna Teks",
    kode: `h1 {
  color: blue;
}`,
    output: "Teks judul berwarna biru.",
    penjelasan: "Properti color digunakan untuk mengatur warna teks."
  },
  {
    bahasa: "CSS",
    judul: "Mengubah Warna Latar",
    kode: `body {
  background-color: lightyellow;
}`,
    output: "Latar halaman berwarna kuning muda.",
    penjelasan: "Properti background-color digunakan untuk mengatur warna latar."
  },
  {
    bahasa: "CSS",
    judul: "Membuat Kartu",
    kode: `.card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px #0002;
}`,
    output: "Sebuah kartu putih dengan sudut membulat dan bayangan.",
    penjelasan: "Padding memberi ruang di dalam kartu, border-radius membulatkan sudut, dan box-shadow memberi bayangan."
  },
  {
    bahasa: "CSS",
    judul: "Membuat Tata Letak Flexbox",
    kode: `.container {
  display: flex;
  gap: 10px;
  justify-content: center;
}`,
    output: "Elemen tersusun mendatar dan berada di tengah.",
    penjelasan: "Flexbox membantu mengatur posisi elemen secara fleksibel."
  },
  {
    bahasa: "JavaScript",
    judul: "Menampilkan Pesan",
    kode: `console.log("Halo, Dunia!");`,
    output: "Halo, Dunia!",
    penjelasan: "console.log() digunakan untuk menampilkan informasi di console browser."
  },
  {
    bahasa: "JavaScript",
    judul: "Menggunakan Variabel",
    kode: `const nama = "Aiko";
console.log("Halo, " + nama);`,
    output: "Halo, Aiko",
    penjelasan: "Variabel menyimpan data. const digunakan untuk variabel yang tidak akan ditetapkan ulang."
  },
  {
    bahasa: "JavaScript",
    judul: "Operasi Matematika",
    kode: `const a = 10;
const b = 5;

console.log(a + b);
console.log(a * b);`,
    output: "15\n50",
    penjelasan: "Operator + digunakan untuk penjumlahan, sedangkan * digunakan untuk perkalian."
  },
  {
    bahasa: "JavaScript",
    judul: "Percabangan If Else",
    kode: `const nilai = 85;

if (nilai >= 75) {
  console.log("Lulus");
} else {
  console.log("Belum lulus");
}`,
    output: "Lulus",
    penjelasan: "If else menjalankan kode berbeda berdasarkan kondisi."
  },
  {
    bahasa: "Python",
    judul: "Menampilkan Teks",
    kode: `print("Halo, Dunia!")`,
    output: "Halo, Dunia!",
    penjelasan: "Fungsi print() digunakan untuk menampilkan teks atau nilai."
  },
  {
    bahasa: "Python",
    judul: "Membuat Variabel",
    kode: `nama = "Aiko"
umur = 16

print(nama)
print(umur)`,
    output: "Aiko\n16",
    penjelasan: "Variabel digunakan untuk menyimpan data seperti teks dan angka."
  },
  {
    bahasa: "Python",
    judul: "Input dari Pengguna",
    kode: `nama = input("Masukkan nama: ")
print("Halo,", nama)`,
    output: "Masukkan nama: Aiko\nHalo, Aiko",
    penjelasan: "input() menerima masukan dari pengguna. Contoh output menunjukkan pengguna memasukkan nama Aiko."
  },
  {
    bahasa: "Python",
    judul: "Perulangan For",
    kode: `for angka in range(1, 6):
    print(angka)`,
    output: "1\n2\n3\n4\n5",
    penjelasan: "Perulangan for menjalankan kode berulang kali. range(1, 6) menghasilkan angka 1 sampai 5."
  },
  {
    bahasa: "Python",
    judul: "Membuat Fungsi",
    kode: `def sapa(nama):
    print("Halo,", nama)

sapa("Aiko")`,
    output: "Halo, Aiko",
    penjelasan: "Fungsi membantu mengelompokkan kode agar dapat digunakan kembali."
  },
  {
    bahasa: "Python",
    judul: "Membuat Kalkulator Sederhana",
    kode: `angka1 = 10
angka2 = 5

print("Tambah:", angka1 + angka2)
print("Kurang:", angka1 - angka2)
print("Kali:", angka1 * angka2)
print("Bagi:", angka1 / angka2)`,
    output: "Tambah: 15\nKurang: 5\nKali: 50\nBagi: 2.0",
    penjelasan: "Program ini menggunakan operator matematika untuk mengolah dua angka."
  }
];

const daftarContoh = document.querySelector("#daftarContoh");

if (daftarContoh) {
  daftarContoh.innerHTML = contohMateri.map((materi, index) => `
    <article class="example-card">
      <span class="example-language">${materi.bahasa}</span>
      <h3>${materi.judul}</h3>
      <p>${materi.penjelasan}</p>

      <h4>Contoh Kode</h4>
      <pre><code>${escapeHTML(materi.kode)}</code></pre>

      <h4>Output</h4>
      <pre class="example-output">${escapeHTML(materi.output)}</pre>

      <button class="copy-example" data-index="${index}">
        Salin Kode
      </button>
    </article>
  `).join("");

  daftarContoh.addEventListener("click", async (event) => {
    const tombol = event.target.closest(".copy-example");

    if (!tombol) return;

    const materi = contohMateri[Number(tombol.dataset.index)];

    try {
      await navigator.clipboard.writeText(materi.kode);
      tombol.textContent = "Kode Tersalin!";
    } catch {
      tombol.textContent = "Gagal Menyalin";
    }

    setTimeout(() => {
      tombol.textContent = "Salin Kode";
    }, 2000);
  });
}

function escapeHTML(teks) {
  return teks.replace(/[&<>"']/g, (karakter) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[karakter]);
}