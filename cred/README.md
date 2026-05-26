# CRED Clone — React + Vite

A premium dark NeoPOP UI clone of the CRED website built with React, Vite, Tailwind CSS, Framer Motion, GSAP, and React Icons.

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run dev server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

---

## 📦 Tech Stack

| Library | Purpose |
|---------|---------|
| React 18 | UI framework |
| Vite | Build tool |
| Tailwind CSS | Utility styling |
| Framer Motion | Scroll & entrance animations |
| GSAP | Floating orb animations |
| React Icons | Icon library |
| Swiper.js | Carousel (available to extend) |

---

## 🗂️ Project Structure

```
src/
 ├── components/
 │    ├── Navbar.jsx          # Sticky nav with blur + mobile menu
 │    ├── Hero.jsx            # Fullscreen hero with GSAP floating orbs
 │    ├── About.jsx           # Trust section with animated credit score card
 │    ├── Features.jsx        # 6-feature grid with hover effects
 │    ├── NeoPopCards.jsx     # NeoPOP 3D step cards
 │    ├── Testimonials.jsx    # Infinite-scroll testimonials
 │    ├── Security.jsx        # Security feature cards
 │    ├── Footer.jsx          # Full footer
 │    ├── Loader.jsx          # Fullscreen loader animation
 │    └── ScrollProgress.jsx  # Top progress bar
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

## 🎨 Design System

- **Colors**: Dark (#0a0a0a), Gold (#c9a84c), Cream (#f5f0e8)
- **Fonts**: Syne (headings), Space Grotesk (body)
- **Style**: NeoPOP — thick offset shadows, sharp edges, no rounded corners
- **Animations**: Framer Motion (scroll reveal, stagger), GSAP (floating elements)

---

## 📱 Responsive

- Mobile first
- Breakpoints: sm (640px), md (768px), lg (1024px)
- All sections adapt to single-column on mobile
