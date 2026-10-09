# Components

Potongan markup HTML yang dapat digunakan ulang (reusable) untuk portofolio ini.

Karena situs ini sepenuhnya berjalan di sisi klien tanpa build tool, framework, atau
backend (sesuai aturan proyek), "komponen" di sini berbentuk **blok markup yang
terdokumentasi dan konsisten** di dalam `index.html`, bukan file `.jsx`/`.vue` terpisah.

Setiap bagian berikut dirancang sebagai unit mandiri yang mudah disalin, dipindah,
atau diduplikasi:

| Komponen        | Lokasi di `index.html` | Kelas utama        |
| --------------- | ---------------------- | ------------------ |
| Navbar          | `<header class="navbar">` | `.nav`, `.nav__link` |
| Tombol          | di seluruh dokumen     | `.btn`, `.btn--primary`, `.btn--ghost` |
| Kartu Glass     | di seluruh dokumen     | `.glass`           |
| Skill Card      | section `#skills`      | `.skill-card`      |
| Project Card    | section `#projects`    | `.project-card`    |
| Timeline Item   | section `#experience`  | `.timeline__item`  |
| Contact Card    | section `#contact`     | `.contact__list li`|
| Footer          | `<footer class="footer">` | `.footer`       |

## Cara menambah project card baru

Salin satu blok `<article class="project-card glass reveal"> ... </article>`
pada section `#projects`, lalu ubah judul, deskripsi, tag, dan warna `--accent`.

Styling masing-masing komponen berada di `assets/css/components.css` dan
`assets/css/layout.css`.
