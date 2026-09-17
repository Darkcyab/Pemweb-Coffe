# ☕ Coffee Shop Website

A modern coffee shop website with a **minimalist, warm, and slightly premium** visual style.

Website ini dibuat untuk memperkenalkan coffee shop, menampilkan menu, menjelaskan layanan, serta memberikan informasi kontak dan lokasi kepada pengunjung.

## ✨ About The Website

Coffee Shop Website merupakan website **company/profile untuk coffee shop** yang berfokus pada pengalaman visual dan kemudahan navigasi.

Desain menggunakan kombinasi warna gelap, coffee brown, dan gold untuk menciptakan suasana yang hangat dan elegan. Foto kopi berukuran besar digunakan sebagai salah satu elemen visual utama untuk memperkuat identitas coffee shop.

Website ini memiliki **4 halaman utama**:

* **Home** — Menampilkan hero section, informasi singkat coffee shop, menu unggulan, dan CTA.
* **Menu** — Menampilkan pilihan coffee, non-coffee, dan food.
* **Services** — Menampilkan layanan seperti Dine In, Take Away, Coffee Catering, dan Private Event.
* **Contact Us** — Menampilkan informasi kontak, jam operasional, lokasi, dan contact form.

---

## 🎨 Design Concept

Website menggunakan konsep:

**Minimalist · Warm · Slightly Premium**

### Color Palette

| Color        | Hex       | Usage                           |
| ------------ | --------- | ------------------------------- |
| Dark         | `#1A1A1A` | Main background, navbar, footer |
| Coffee Brown | `#4A2E1B` | Sections, cards, backgrounds    |
| Gold         | `#D4AF37` | Accent, button, highlight       |
| Cream        | `#F5F0E8` | Light background and text       |

### Visual Style

* Minimalist layout
* Spacious whitespace
* Large coffee photography
* Warm lighting
* Dark and brown tones
* Gold accent
* Elegant typography
* Subtle animations
* Responsive design

---

## 📄 Pages

### Home

The landing page of the website.

Sections include:

* Hero section
* About coffee shop
* Featured coffee
* Call-to-action section

Hero section menggunakan foto kopi berukuran besar dengan headline:

> **Crafted Coffee, Warm Moments.**

---

### Menu

Halaman untuk melihat menu coffee shop.

Categories:

**Coffee**

* Espresso
* Americano
* Cappuccino
* Café Latte
* Mocha
* Manual Brew

**Non-Coffee**

* Chocolate
* Matcha
* Tea
* Lemon Tea

**Food**

* Croissant
* Toast
* Sandwich
* Cake

Setiap menu menampilkan foto, nama produk, deskripsi singkat, dan harga.

---

### Services

Menampilkan layanan yang tersedia di coffee shop.

**Dine In**
Menikmati kopi langsung di coffee shop.

**Take Away**
Membawa kopi untuk dinikmati di tempat lain.

**Coffee Catering**
Layanan coffee catering untuk meeting, gathering, dan acara khusus.

**Private Event**
Layanan dan tempat untuk acara kecil atau private event.

---

### Contact Us

Halaman untuk memberikan informasi kepada pelanggan mengenai coffee shop.

Informasi yang ditampilkan:

* Address
* Opening Hours
* Phone
* Email
* Instagram
* Contact Form
* Location / Map

---

## 🛠️ Tech Stack

Project ini dibuat menggunakan:

* **Next.js**
* **React.js**
* **Tailwind CSS**
* **JavaScript**
* **Next.js App Router**
* **Lucide React** untuk icon

### HTML

Website tetap menggunakan elemen HTML seperti `section`, `nav`, `h1`, `p`, `img`, `button`, `form`, dan `footer`.

Namun, elemen tersebut ditulis menggunakan **JSX melalui React**, bukan menggunakan file HTML terpisah untuk setiap halaman.

---

## 📱 Responsive Design

Website dirancang agar dapat digunakan pada berbagai ukuran layar:

* Desktop
* Laptop
* Tablet
* Mobile

Layout, typography, navigation, image, dan card akan menyesuaikan ukuran layar menggunakan responsive utilities dari Tailwind CSS.

---

## 🧩 Reusable Components

Website menggunakan reusable components untuk menjaga kode tetap terstruktur dan mudah dikembangkan.

Contoh components:

```text
Navbar
Footer
Button
SectionTitle
CoffeeCard
ServiceCard
```

Komponen tersebut digunakan kembali pada halaman yang membutuhkan.

---

## 📁 Project Structure

```text
coffee-shop/
│
├── public/
│   ├── images/
│   │   ├── hero-coffee.jpg
│   │   ├── coffee-1.jpg
│   │   ├── coffee-2.jpg
│   │   ├── coffee-3.jpg
│   │   ├── cafe-interior.jpg
│   │   ├── pastry.jpg
│   │   └── service.jpg
│   │
│   └── logo.png
│
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── globals.css
│   │   │
│   │   ├── menu/
│   │   │   └── page.js
│   │   │
│   │   ├── services/
│   │   │   └── page.js
│   │   │
│   │   └── contact/
│   │       └── page.js
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── CoffeeCard.jsx
│   │   └── ServiceCard.jsx
│   │
│   ├── data/
│   │   ├── menu.js
│   │   └── services.js
│   │
│   └── lib/
│       └── constants.js
│
├── .gitignore
├── jsconfig.json
├── next.config.js
├── package.json
├── postcss.config.mjs
└── README.md
```

---

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open the website at:

```text
http://localhost:3000
```

---

## 🧭 Routes

| Page       | Route       |
| ---------- | ----------- |
| Home       | `/`         |
| Menu       | `/menu`     |
| Services   | `/services` |
| Contact Us | `/contact`  |

---

## 🎯 MVP Scope

Versi MVP website mencakup:

* 4 halaman utama
* Responsive design
* Navbar dan mobile navigation
* Hero section
* Menu showcase
* Services showcase
* Contact information
* Contact form UI
* Location / Map section
* Reusable React components
* Basic animations

### Tidak termasuk dalam MVP

* Backend
* Database
* Authentication
* Payment Gateway
* Shopping Cart
* Online Ordering
* Admin Dashboard

Project ini memang dibuat sebagai **simple frontend website**, sehingga tidak membutuhkan sistem backend pada tahap MVP.

---

## 👥 Collaborators

### Nabil Mursyid Yukinata

Developer

### Rijal

Collaborator

Rijal

## 📌 Project Goals

Project ini bertujuan untuk membangun website coffee shop yang:

* Modern
* Minimalist
* Responsive
* Warm
* Slightly premium
* Easy to navigate
* Easy to maintain

Fokus utama project adalah **frontend development, responsive design, UI/UX, dan component-based development dengan React dan Next.js**.
