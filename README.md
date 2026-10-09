# Portofolio — Yon Sri Naqsya Bandi

Website portofolio personal modern untuk **Yon Sri Naqsya Bandi**, seorang
**Full Stack AI Engineer** yang berbasis di Sidoarjo, Indonesia.

> _"Membangun pengalaman digital cerdas dengan AI dan teknologi web modern."_

Desain bertema **dark modern developer portfolio** dengan sentuhan futuristik:
latar gradient beranimasi, kartu glassmorphism, aksen glow lembut, transisi
halus, dan tata letak yang profesional dan responsif.

![status](https://img.shields.io/badge/status-production--ready-7c5cff)
![stack](https://img.shields.io/badge/stack-HTML%20%2B%20CSS%20%2B%20JS-22d3ee)
![backend](https://img.shields.io/badge/backend-none%20(client--side)-ec4899)

---

## ✨ Fitur

- **Single-page scroll** dengan navigasi atas yang melompat ke setiap section.
- **Animated gradient background** (aurora blobs + grid + noise halus).
- **Glassmorphism cards** dengan efek blur dan border lembut.
- **Hero beranimasi**: teks gradient bergerak, typing effect, floating code card.
- **Floating UI effects** dan **hover animation** di seluruh komponen.
- **Soft glowing accent** pada tombol, kartu, dan ikon.
- **Reveal on scroll**, **animated counters**, dan **skill bars** interaktif.
- **3D tilt** pada kartu keahlian (perangkat dengan pointer).
- **Scroll progress bar**, **scroll spy**, dan tombol **back to top**.
- **Form kontak** sisi klien (membuka aplikasi email via `mailto`, tanpa backend).
- **Responsif penuh**: Mobile, Tablet, Desktop.
- **Aksesibilitas**: label ARIA, dukungan keyboard, dan `prefers-reduced-motion`.

---

## 🧱 Tech Stack

- **HTML5** — struktur & markup semantik.
- **CSS3** — styling, layout (Grid/Flexbox), animasi, variabel desain.
- **JavaScript (Vanilla)** — interaktivitas, tanpa framework.
- **Tanpa backend, tanpa API** — sepenuhnya berjalan di browser.

---

## 📁 Struktur Folder

```
Portofolio/
├── index.html              # Halaman utama (single page)
├── README.md               # Dokumen ini
├── components/             # Dokumentasi blok markup reusable
│   └── README.md
├── pages/                  # Dokumentasi pemetaan "halaman" / section
│   └── README.md
└── assets/
    ├── README.md
    ├── css/
    │   ├── base.css        # Design tokens, reset, tipografi
    │   ├── components.css  # Tombol, navbar, kartu, form
    │   ├── layout.css      # Tata letak section
    │   ├── animations.css  # Keyframes & background aurora
    │   └── responsive.css  # Breakpoint responsif
    └── js/
        └── main.js         # Seluruh interaktivitas
```

---

## 🚀 Cara Menjalankan

Karena situs ini 100% statis, cukup buka `index.html` di browser.

**Opsi A — langsung:**
Klik dua kali `index.html`.

**Opsi B — server lokal (disarankan agar font & path optimal):**

```bash
# Python 3
python -m http.server 5500

# atau Node.js
npx serve .
```

Lalu buka `http://localhost:5500`.

---

## 🎨 Kustomisasi

- **Warna & tema**: ubah variabel di `:root` pada `assets/css/base.css`
  (`--accent`, `--accent-2`, `--grad-primary`, dll).
- **Teks typing**: edit array `words` di `assets/js/main.js`.
- **Proyek**: duplikasi blok `.project-card` di section `#projects`.
- **Statistik & skill**: ubah atribut `data-count` dan `data-level` di `index.html`.

---

## 📬 Kontak

- **Email**: naqsya81@gmail.com
- **Telepon**: 08512345678
- **Website**: [www.naqsya81.dev](https://www.naqsya81.dev)
- **GitHub**: [github.com/naqsya81-sys](https://github.com/naqsya81-sys)
- **LinkedIn**: [linkedin.com/in/naqsya81](https://linkedin.com/in/naqsya81)
- **Twitter/X**: [x.com/naqsya81](https://x.com/naqsya81)

---

© Yon Sri Naqsya Bandi — Sidoarjo, Indonesia.
