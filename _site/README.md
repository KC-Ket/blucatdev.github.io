# Blu Cat Dev — Official Website

> Indie game developer & writer based in Newcastle, NSW, Australia.

**Live site:** [blucatdev.com](https://blucatdev.com) · **GitHub Pages:** [KC-Ket.github.io/blucatdev.github.io](https://KC-Ket.github.io/blucatdev.github.io)

---

## 🗂 Project Structure

```
blucatdev.github.io/
├── index.html              # Main site (single-page, all pages via JS)
├── 404.html                # Custom 404 error page
├── README.md               # This file
│
├── css/
│   ├── variables.css       # Design tokens — colours, spacing, typography
│   ├── base.css            # Reset, typography, utility classes
│   ├── components.css      # Nav, cards, buttons, forms, press, about
│   └── responsive.css      # Media queries (tablet ≤900px, mobile ≤640px)
│
├── js/
│   └── main.js             # Navigation, tabs, newsletter forms, mobile menu
│
└── assets/
    ├── images/
    │   ├── logo-nav.png            # Nav bar logo (transparent, ~120px tall)
    │   ├── favicon-32.png          # Browser favicon 32×32
    │   ├── favicon-16.png          # Browser favicon 16×16
    │   ├── apple-touch-icon.png    # iOS home screen icon 180×180
    │   ├── og-image.png            # Social sharing image 1200×630
    │   └── avatar.jpg              # Profile photo (About page)
    └── fonts/                      # (empty — fonts loaded from Google Fonts CDN)
```

---

## 🎨 Colour Palette

| Name | Hex | Use |
|---|---|---|
| Brand Navy | `#0a1227` | Primary background |
| Brand Cyan | `#43d1e3` | Primary accent — games/tech/CTA |
| Ember Orange | `#f0855a` | Secondary accent — writing/creative |
| Warm White | `#fefcfb` | Primary text |
| Cool Silver | `#b0b8c4` | Secondary/muted text |
| Alert Red | `#e05a4e` | Error/warning states only |

---

## 🖼 Assets to Add

Before the site looks complete, add the following files to `assets/images/`:

| File | Description | Source |
|---|---|---|
| `logo-nav.png` | Transparent logo, ~240px wide | `Logo_Transparent.png` from brand assets |
| `favicon-32.png` | 32×32 favicon | Crop from `Cat_Logo_Transparent.png` |
| `favicon-16.png` | 16×16 favicon | Crop from `Cat_Logo_Transparent.png` |
| `apple-touch-icon.png` | 180×180 iOS icon | `Logo_512x512.png` cropped/resized |
| `og-image.png` | 1200×630 social share image | Use `Banner_2048x1152_Transparent.png` |
| `avatar.jpg` | Profile photo for About page | Your choice |

---

## 🚀 Deploying to GitHub Pages

This is a static site — no build step required. GitHub Pages serves it directly.

### First deploy
```bash
# Clone your repo
git clone https://github.com/KC-Ket/blucatdev.github.io.git
cd blucatdev.github.io

# Copy these files into the repo
# (replace any existing index.html)

git add .
git commit -m "feat: initial site launch"
git push origin main
```

### Enable GitHub Pages
1. Go to your repo on GitHub
2. Settings → Pages
3. Source: **Deploy from a branch**
4. Branch: `main` / `/ (root)`
5. Save — live in ~60 seconds at `KC-Ket.github.io/blucatdev.github.io`

### Custom domain (blucatdev.com)
1. Add a `CNAME` file to the repo root containing: `blucatdev.com`
2. In your domain registrar, add DNS records:
   - `A` record → `185.199.108.153`
   - `A` record → `185.199.109.153`
   - `A` record → `185.199.110.153`
   - `A` record → `185.199.111.153`
   - `CNAME` `www` → `KC-Ket.github.io`
3. In GitHub Pages settings, enter `blucatdev.com` as custom domain
4. Tick **Enforce HTTPS**

---

## ✏️ Updating Content

All placeholder content is in `index.html`. Search for `[` to find all placeholders:

| Placeholder | What to replace |
|---|---|
| `[Game Title One]` | Your first released game title |
| `[Game Title Two]` | Your second released game title |
| `[Current WIP]` | Your work-in-progress title |
| `[Game Jam Entry]` | Your jam game title |
| `[Poem Title One/Two/Three]` | Your poem titles |
| `[Award Name — Year]` | University awards |
| `[Event / Certificate — Year]` | Programming events/certs |
| `hello@blucatdev.com` | Your actual contact email |
| `press@blucatdev.com` | Your actual press email |
| Social links in footer | Your actual social URLs |
| Steam wishlist link | Your actual Steam page |

### Adding a new blog post
Add a new `<article class="blog-card">` block inside the blog grid in `#page-writing`.

### Adding a new game
Add a new `<article class="game-card">` block inside the relevant grid in `#page-games`.

---

## 📋 Tech Stack

- **Pure HTML5 / CSS3 / Vanilla JS** — no frameworks, no build tools
- **Google Fonts** — Playfair Display, DM Mono, DM Sans
- **GitHub Pages** — free static hosting
- Fully responsive (desktop → tablet → mobile)
- WCAG 2.1 AA compliant colour contrast throughout
- Semantic HTML with ARIA labels

---

## 📅 Changelog

| Date | Version | Notes |
|---|---|---|
| 26/04/2026 | 1.0.0 | Initial launch — structure, colours, all 5 pages |

---

*Built with love, chronic back pain, and two cats on the keyboard.*
*© Blu Cat Dev 2026 · Newcastle, NSW, Australia*
