# Maria Popescu - Psiholog Clinician Website

**Production Website:** https://www.popescumaria.ro/  
**Project Type:** React + TypeScript + Vite SPA  
**Developer:** alecsdesign.xyz  
**Date:** November 2025

---

## Project Overview

Professional psychology practice website for Maria Popescu, a clinical psychologist in București, Romania. The website features 6 pages showcasing services, professional background, educational articles, and FAQ section.

### Key Features:
- 🎨 Professional design with psychology-appropriate colors
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast loading with optimized assets
- 🔍 SEO optimized (sitemap, meta tags, structured data)
- ✨ Smooth GSAP animations
- 📞 WhatsApp contact button
- ♿ Accessible and GDPR compliant

---

## Technology Stack

### Core:
- **React 18.3.1** - UI library
- **TypeScript 5.6.2** - Type safety
- **Vite 7.1.9** - Build tool
- **React Router 7.9.3** - Client-side routing

### Styling:
- **Tailwind CSS 3.4.17** - Utility-first CSS
- **Custom colors:** Teal (#C4E0D9), Coral (#E8A298)
- **Google Fonts:** Playfair Display, Montserrat, Brittany Signature

### Animation:
- **GSAP 3.13.0** - Professional animations
- **ScrollTrigger** - Scroll-based effects

### Tools:
- **ESLint** - Code quality
- **PostCSS + Autoprefixer** - CSS processing

---

## Getting Started

### Prerequisites:
- **Node.js 18+** (tested with Node 18 and 20)
- **npm 9+** (or yarn/pnpm)

### Installation:

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
# Server runs at http://localhost:5173

# 3. Build for production
npm run build
# Output in /dist directory

# 4. Preview production build
npm run preview
```

### Available Scripts:

```bash
npm run dev      # Start dev server with hot reload
npm run build    # Production build
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

---

## Project Structure

```
/
├── public/
│   ├── assets/           # Images and media
│   │   ├── logo-complete.png
│   │   ├── header_vid.mp4
│   │   ├── maria-popescu-portrait.jpg
│   │   └── [service images]
│   ├── robots.txt        # SEO
│   └── sitemap.xml       # SEO
│
├── src/
│   ├── components/       # Reusable components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── WhatsappButton.tsx
│   │   └── ScrollToTopButton.tsx
│   │
│   ├── pages/            # Page components
│   │   ├── HomePage.tsx
│   │   ├── DesprePage.tsx
│   │   ├── ServiciiPage.tsx
│   │   ├── ArticolePage.tsx
│   │   ├── FAQPage.tsx
│   │   ├── PrivacyPage.tsx
│   │   └── NotFoundPage.tsx
│   │
│   ├── App.tsx           # Main app with routing
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
│
├── index.html            # HTML template with SEO
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── tailwind.config.js    # Tailwind config
└── vite.config.ts        # Vite config
```

---

## Pages

### 1. Home `/`
Landing page with hero video, services overview, gallery, FAQ preview, contact section.

### 2. About `/despre`
Professional background, experience (10+ years), credentials, specializations.

### 3. Services `/servicii`
Detailed service descriptions: individual therapy, counseling, evaluations, ABA therapy, couple/family therapy.

### 4. Articles `/articole`
Educational blog content (3 articles): parenting challenges, building self-esteem, sleep problems.

### 5. FAQ `/intrebari-frecvente`
15 frequently asked questions with accordion UI.

### 6. Privacy `/privacy`
GDPR-compliant privacy policy.

---

## Key Configuration

### Colors (Tailwind)
```javascript
primary: '#C4E0D9'  // Teal - calm, trust
accent: '#E8A298'   // Coral - warmth, empathy
```

### Fonts
- Playfair Display (headings)
- Montserrat (body text)
- Brittany Signature (decorative)

### Contact Information
- **Phone:** +40 772 246 316
- **WhatsApp:** Same number
- **Hours:** Mo-Fr 09:00-18:00

---

## SEO Setup

### Included:
- ✅ Sitemap.xml (6 pages)
- ✅ Robots.txt
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags (Facebook, WhatsApp)
- ✅ Twitter Card tags
- ✅ Structured data (JSON-LD Schema.org)
- ✅ Canonical URLs

### Target Keywords:
- psiholog bucurești
- psihoterapeut cognitiv-comportamental
- consiliere psihologică bucurești
- cabinet psihologic
- terapie copii/adulți

See **SEO-SETUP.md** for Google Search Console submission instructions.

---

## Development Notes

### Common Tasks:

#### Update Phone Number:
Files to edit:
- `src/components/Footer.tsx`
- `src/components/Header.tsx`
- `src/components/WhatsappButton.tsx`
- `index.html` (line 151 - structured data)

#### Add New Article:
1. Add image to `/public/assets/`
2. Edit `src/pages/ArticolePage.tsx`
3. Add article object to articles array

#### Change Service Info:
Edit:
- `src/pages/HomePage.tsx` (service cards)
- `src/pages/ServiciiPage.tsx` (full descriptions)

#### Update Images:
1. Add new image to `/public/assets/`
2. Optimize (WebP recommended, <200KB)
3. Update path in component
4. Remove old image
5. Rebuild

### Performance:
- Bundle size: ~442 KB JS, ~37 KB CSS (gzipped: ~141 KB JS, ~7 KB CSS)
- First load: ~2-3 seconds
- All images optimized (WebP where possible)
- Video: header_vid.mp4 (optimized by client)

### Browser Support:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS 14+, Android)

---

## Deployment

### Build Output:
```bash
npm run build
# Creates /dist directory with optimized files
```

### Hosting Requirements:
- Static file hosting
- Server rewrite: all routes → index.html (for React Router)
- HTTPS/SSL certificate
- Gzip compression enabled

### Current Setup:
- Domain: www.popescumaria.ro
- Hosting: Managed by developer
- SSL: Active
- DNS: Configured

---

## Documentation

Three comprehensive documents included:

1. **README.md** (this file) - Quick start and development guide
2. **TECHNICAL-HANDOVER.md** - Complete technical documentation for future developers
3. **DOCUMENT-CLIENT-ROMANIAN.md** - Client-facing document in Romanian
4. **SEO-SETUP.md** - Google Search Console submission guide

---

## Maintenance

### Content Updates:
All content updates require code changes. To update:
1. Edit the relevant component file
2. Run `npm run build`
3. Deploy updated `/dist` folder

### Dependency Updates:
```bash
npm update           # Update to latest compatible versions
npm audit fix        # Fix security vulnerabilities
```

### Regular Checks:
- Monthly: Test all links, verify contact info
- Quarterly: Update dependencies, check browser compatibility
- Annually: Major version upgrades, domain renewal

---

## Known Limitations

- **No backend:** Static site only
- **No contact form:** Contact via WhatsApp/phone only
- **No CMS:** Articles must be added via code
- **No analytics:** Google Analytics not installed (can be added)
- **No booking system:** Manual appointment scheduling

### Future Enhancements:
- Contact form with email backend
- CMS integration for article management
- Google Analytics
- Appointment booking system
- Testimonials section
- Multi-language (Romanian + English)

---

## Security & Privacy

- ✅ HTTPS only
- ✅ GDPR compliant
- ✅ No tracking without consent
- ✅ No sensitive data stored
- ✅ Privacy policy page included

---

## Support

### Developer:
**alecsdesign.xyz**  
Website: https://www.alecsdesign.xyz

### Client:
**Maria Popescu - Psiholog Clinician**  
Phone: +40 772 246 316  
Website: https://www.popescumaria.ro/

---

## License

This is a proprietary project developed for Maria Popescu. All rights reserved.

---

**Project Status:** ✅ Complete and in production  
**Last Updated:** November 12, 2025
