# Technical Handover Document - Maria Popescu Psychology Website

**Project:** Maria Popescu - Psiholog Clinician Website  
**Domain:** www.popescumaria.ro  
**Date:** November 12, 2025  
**Developer:** alecsdesign.xyz  
**Project Delivery:** Archived and delivered via Google Drive

---

## Project Overview

Professional psychology practice website built with modern web technologies, fully optimized for SEO, mobile-responsive, and performance-optimized. This document is intended for future developers who may need to maintain or update the website.

**Important:** This project is archived. The client does not have access to the source code or deployment infrastructure. All updates must be coordinated through the original developer or a new developer receiving this handover package.

---

## Technical Stack

### Frontend Framework:

- **React 18.3.1** - Modern UI library with hooks
- **TypeScript 5.6.2** - Type-safe JavaScript development
- **Vite 7.1.9** - Fast build tool and development server
- **React Router 7.9.3** - Client-side routing

### Styling & UI:

- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Custom color palette:**
  - Primary (Teal): `#C4E0D9`
  - Accent (Coral): `#E8A298`
  - Text: Stone palette (50-900)
- **Font Awesome 6.5.2** - Icon library
- **Google Fonts (CDN):**
  - Playfair Display (headings)
  - Montserrat (body text)
  - Brittany Signature (decorative accents)

### Animation & Effects:

- **GSAP 3.13.0** - Professional animation library
- **@gsap/react 2.1.2** - React integration
- **ScrollTrigger (GSAP plugin)** - Scroll-based animations
- Hero content fade-in (1.2s duration, 0.3s delay)
- Service cards scroll-triggered animations
- Gallery hover interactions

### Development Tools:

- **ESLint 9.16.0** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **PostCSS 8.4.49** - CSS processing
- **Autoprefixer 10.4.20** - Browser compatibility

### Build Output:

- **Gzip compression** enabled
- **Code splitting** automatic via Vite
- **Bundle sizes:**
  - CSS: ~37 KB (~7 KB gzipped)
  - JS (main): ~398 KB (~125 KB gzipped)
  - JS (React vendor): ~12 KB (~4 KB gzipped)
  - JS (Router vendor): ~32 KB (~12 KB gzipped)

---

## Dependencies (package.json)

### Production Dependencies:

```json
{
  "@fortawesome/fontawesome-svg-core": "^6.5.2",
  "@fortawesome/free-brands-svg-icons": "^6.5.2",
  "@fortawesome/free-solid-svg-icons": "^6.5.2",
  "@fortawesome/react-fontawesome": "^0.2.2",
  "@gsap/react": "^2.1.2",
  "gsap": "^3.13.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router": "^7.9.3",
  "react-router-dom": "^7.9.3"
}
```

### Development Dependencies:

```json
{
  "@eslint/js": "^9.16.0",
  "@types/react": "^18.3.17",
  "@types/react-dom": "^18.3.5",
  "@vitejs/plugin-react": "^4.3.4",
  "autoprefixer": "^10.4.20",
  "eslint": "^9.16.0",
  "eslint-plugin-react-hooks": "^5.0.0",
  "eslint-plugin-react-refresh": "^0.4.16",
  "globals": "^15.13.0",
  "postcss": "^8.4.49",
  "tailwindcss": "^3.4.17",
  "typescript": "~5.6.2",
  "typescript-eslint": "^8.15.0",
  "vite": "^7.1.9"
}
```

---

## Project Structure

```
/
├── public/                          # Static assets (served as-is)
│   ├── assets/                      # Images and media
│   │   ├── logo-complete.png        # Logo (44.28 KB)
│   │   ├── header_vid.mp4           # Hero background video (optimized)
│   │   ├── maria-popescu-portrait.jpg  # About page portrait (85.54 KB)
│   │   ├── kids-drawing.webp        # Service image (43.72 KB)
│   │   ├── kids-playing.webp        # Service image (101.89 KB)
│   │   ├── kids-therapy.webp        # Service image (24.35 KB)
│   │   ├── therapy-session.webp     # Service image (27.18 KB)
│   │   ├── self-esteem.webp         # Article image (96.09 KB)
│   │   └── sleep-struggle.jpg       # Article image (181.67 KB)
│   ├── robots.txt                   # Search engine crawler instructions
│   ├── sitemap.xml                  # SEO sitemap (6 pages)
│   └── social-card.html             # Social sharing preview card
│
├── src/
│   ├── components/                  # React components
│   │   ├── Header.tsx               # Navigation header with mobile menu
│   │   ├── Footer.tsx               # Footer with links and credits
│   │   ├── ScrollToTop.tsx          # Scroll to top on route change
│   │   ├── ScrollToTopButton.tsx    # Floating scroll to top button
│   │   └── WhatsappButton.tsx       # Fixed WhatsApp contact button
│   │
│   ├── pages/                       # Page components (React Router)
│   │   ├── HomePage.tsx             # Landing page (/)
│   │   ├── DesprePage.tsx           # About page (/despre)
│   │   ├── ServiciiPage.tsx         # Services page (/servicii)
│   │   ├── ArticolePage.tsx         # Articles page (/articole)
│   │   ├── FAQPage.tsx              # FAQ page (/intrebari-frecvente)
│   │   ├── PrivacyPage.tsx          # Privacy policy (/privacy)
│   │   └── NotFoundPage.tsx         # 404 error page
│   │
│   ├── App.tsx                      # Main app component with routing
│   ├── main.tsx                     # Application entry point
│   ├── index.css                    # Global styles, GSAP visibility
│   └── App.css                      # App-specific styles
│
├── index.html                       # HTML template with SEO meta tags
├── package.json                     # Dependencies and scripts
├── package-lock.json                # Locked dependency versions
├── tsconfig.json                    # TypeScript config (main)
├── tsconfig.app.json                # TypeScript config (app)
├── tsconfig.node.json               # TypeScript config (Vite)
├── tailwind.config.js               # Tailwind CSS configuration
├── postcss.config.js                # PostCSS configuration
├── vite.config.ts                   # Vite build configuration
├── eslint.config.js                 # ESLint configuration
│
└── Documentation/                   # Project documentation
    ├── TECHNICAL-HANDOVER.md        # This file
    ├── DOCUMENT-CLIENT-ROMANIAN.md  # Client-facing document
    └── SEO-SETUP.md                 # Google Search Console guide
```

---

## Getting Started (For Developers)

### Prerequisites:

- **Node.js 18+** (tested with Node 18 and 20)
- **npm 9+** or **yarn** or **pnpm**
- Code editor (VS Code recommended)

### Installation:

```bash
# 1. Extract the project archive
# 2. Navigate to project directory
cd maria-popescu

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

# Development server runs at http://localhost:5173
```

### Available Scripts:

```bash
# Development server with hot reload
npm run dev

# Production build (outputs to /dist)
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

### Build Output:

- All files output to `/dist` directory
- Ready for static hosting
- Includes index.html and optimized assets

---

## Page Structure & Routes

### 1. HomePage `/`

**File:** `src/pages/HomePage.tsx`

**Purpose:** Landing page showcasing services and driving conversions

**Sections:**

- Hero section with background video
- Services overview (6 cards with images)
- Gallery section (6 images)
- FAQ preview (3 questions)
- Contact section

**Key Features:**

- GSAP animation: `.hero-content-wrapper` fades in (1.2s, 0.3s delay)
- ScrollTrigger animations on service cards
- Modal interactions for service details
- WhatsApp and phone contact CTAs

**Important Elements:**

- Line 18-28: Hero animation setup
- Service cards: Lines 100-250
- Gallery: Lines 280-350

---

### 2. DesprePage `/despre`

**File:** `src/pages/DesprePage.tsx`

**Purpose:** Professional background, credentials, and experience

**Sections:**

- Hero with professional portrait
- Professional bio
- Experience and qualifications
- Credentials and specializations
- Contact CTA

**Key Info:**

- 10+ years experience highlighted
- Cognitive-behavioral therapy specialization
- Contact button at bottom

---

### 3. ServiciiPage `/servicii`

**File:** `src/pages/ServiciiPage.tsx`

**Purpose:** Detailed service offerings

**Services Listed:**

1. Psihoterapie individuală
2. Consiliere psihologică
3. Evaluări psihologice
4. Terapie ABA
5. Psihoterapie de cuplu
6. Psihoterapie de familie

**Features:**

- Modal popups with full service descriptions
- Contact information in each modal
- Image for each service
- Pricing: "Contactează-mă pentru detalii"

---

### 4. ArticolePage `/articole`

**File:** `src/pages/ArticolePage.tsx`

**Purpose:** Educational blog content

**Current Articles (3):**

1. **Provocările în creșterea copiilor** - Parenting challenges
2. **Cum să construim stima de sine** - Building self-esteem
3. **Problemele de somn la copii** - Sleep problems in children

**Structure:**

- Article cards with images
- Summaries and full content
- No backend - articles hardcoded
- To add articles: Edit `ArticolePage.tsx` and add to articles array

---

### 5. FAQPage `/intrebari-frecvente`

**File:** `src/pages/FAQPage.tsx`

**Purpose:** Answer common client questions

**Questions:** 15 comprehensive FAQs covering:

- Services and specializations
- Pricing and insurance
- Session process
- Confidentiality
- Online/in-person options
- Appointment booking

**UI:** Accordion-style (expand/collapse)

- Uses React state to manage open/closed
- One question open at a time

---

### 6. PrivacyPage `/privacy`

**File:** `src/pages/PrivacyPage.tsx`

**Purpose:** GDPR compliance and data protection

**Required:** Legal compliance for Romanian websites
**Content:** Data collection, usage, rights, contact

---

### 7. NotFoundPage `/404`

**File:** `src/pages/NotFoundPage.tsx`

**Purpose:** 404 error page
**Features:** Link back to homepage

---

## Component Details

### Header.tsx

**Purpose:** Main navigation with mobile menu

**Features:**

- Desktop: Horizontal navigation
- Mobile: Hamburger menu with slide-in overlay
- Active page highlighting
- GSAP animation for mobile menu
- Sticky header (optional)

**Important Code:**

- Lines 77-78: Null check to prevent GSAP errors
- Line 116: Safe GSAP animation with null check
- Mobile menu uses refs for animation targets

**Client Contact:** +40 772 246 316 (displayed in header)

---

### Footer.tsx

**Purpose:** Site footer with links and credits

**Sections:**

- Contact information
- Quick links navigation
- Privacy policy link
- Designer credit (alecsdesign.xyz)

**Important:**

- Line 162: Designer credit link
- Phone number: +40 772 246 316

---

### WhatsappButton.tsx

**Purpose:** Fixed floating WhatsApp contact button

**Features:**

- Always visible (fixed bottom-right)
- Green WhatsApp brand color
- Opens WhatsApp chat with preset number
- Mobile and desktop compatible

**Contact Number:** +40 772 246 316

---

### ScrollToTop.tsx

**Purpose:** Scroll to top on route change

**Behavior:**

- Automatically scrolls to top when navigating to new page
- Uses React Router's useLocation hook
- No UI - utility component

---

### ScrollToTopButton.tsx

**Purpose:** Floating "back to top" button

**Features:**

- Appears after scrolling down 300px
- Smooth scroll to top on click
- Positioned bottom-left (not conflicting with WhatsApp)
- Hover effects

---

## Styling System

### Tailwind Configuration (tailwind.config.js)

```javascript
theme: {
  extend: {
    colors: {
      primary: '#C4E0D9',    // Teal (calm, trust)
      accent: '#E8A298',     // Coral (warmth, empathy)
    },
    fontFamily: {
      playfair: ['Playfair Display', 'serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      brittany: ['Brittany Signature', 'cursive'],
    }
  }
}
```

### Global Styles (index.css)

- GSAP visibility control classes
- Smooth scroll behavior
- Base font and color settings
- Custom scrollbar styling

### Key CSS Classes:

- `.hero-content-wrapper` - Hero animation target
- `.service-card` - Service card animations (ScrollTrigger)
- `.gallery-item` - Gallery image hover effects

---

## Animation System (GSAP)

### Hero Animation (HomePage.tsx)

```typescript
// Lines 18-28
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.fromTo(
      ".hero-content-wrapper",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power2.out",
      }
    );
  });
  return () => ctx.revert();
}, []);
```

**Behavior:**

- Single unified fade-in for all hero content
- 1.2 second duration
- 0.3 second delay after page load
- Smooth ease out

### Service Cards (ScrollTrigger)

- Fade in when scrolling into view
- Stagger effect (cards appear sequentially)
- Trigger: 80% of card visible

### Mobile Menu (Header.tsx)

- Slide-in overlay animation
- Menu items fade in
- GSAP timeline for coordinated animation

**Important:** Always check for null refs before animating (lines 77-78, 116)

---

## SEO Configuration

### Sitemap (public/sitemap.xml)

- 6 pages listed
- Priority: Homepage (1.0) → Privacy (0.3)
- `lastmod`: 2025-11-12
- Full URL: `https://www.popescumaria.ro/sitemap.xml`

### Robots.txt (public/robots.txt)

```
User-agent: *
Allow: /
Sitemap: https://www.popescumaria.ro/sitemap.xml
Crawl-delay: 10
```

### Meta Tags (index.html)

**Basic SEO:**

- Title: "Psiholog Clinician Maria Popescu | Terapie Cognitiv-Comportamentală București"
- Description: 160 chars with key services and keywords
- Keywords: 15+ Romanian psychology terms
- Canonical URL: `https://www.popescumaria.ro/`
- Robots: index, follow

**Open Graph (Facebook, WhatsApp):**

- og:title, og:description, og:type, og:url
- og:image: Absolute URL to logo
- og:locale: ro_RO

**Twitter Card:**

- twitter:card: summary
- twitter:title, twitter:description
- twitter:image
- twitter:domain: popescumaria.ro

**Structured Data (JSON-LD Schema.org):**

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Psiholog Clinician Maria Popescu",
  "image": "https://www.popescumaria.ro/assets/logo-complete.png",
  "url": "https://www.popescumaria.ro/",
  "telephone": "+40-772-246-316",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "RO"
  },
  "openingHours": "Mo-Fr 09:00-18:00",
  "priceRange": "$$",
  "areaServed": "RO"
}
```

### Target Keywords:

- psiholog bucurești
- psihoterapeut cognitiv-comportamental
- consiliere psihologică bucurești
- cabinet psihologic
- terapie copii adulți
- evaluări psihologice
- terapie ABA

---

## Performance Optimization

### Build Optimization:

- **Code splitting** - Automatic via Vite
- **Tree shaking** - Remove unused code
- **Minification** - CSS and JS minified
- **Gzip compression** - Reduces bundle size by 70-80%

### Asset Optimization:

- **Images:** WebP format where possible (kids-_, therapy-_)
- **Video:** header_vid.mp4 optimized by client
- **Fonts:** Loaded from Google Fonts CDN
- **Icons:** Font Awesome via CDN

### Loading Strategy:

- Critical CSS inlined
- Fonts preloaded in `index.html`
- Images lazy loaded (browser native)

### Performance Metrics:

- **First Contentful Paint:** ~1.5s
- **Largest Contentful Paint:** ~2.5s
- **Time to Interactive:** ~3s
- **Total Blocking Time:** <300ms

---

## Browser & Device Support

### Tested Browsers:

- ✅ Chrome 90+ (Windows, Mac, Android)
- ✅ Firefox 88+ (Windows, Mac)
- ✅ Safari 14+ (Mac, iOS 14+)
- ✅ Edge 90+ (Windows)
- ✅ Samsung Internet 14+
- ✅ Opera 76+

### Not Supported:

- ❌ Internet Explorer (deprecated)
- ❌ Browsers older than 2 years

### Mobile Testing:

- ✅ iPhone 12, 13, 14 (iOS 15+)
- ✅ Samsung Galaxy S21, S22, S23
- ✅ Google Pixel 6, 7
- ✅ iPad (all models, iOS 15+)

### Responsive Breakpoints:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

---

## Content Management

### How to Update Content:

**Client cannot update directly** - all updates must go through developer.

### Common Update Scenarios:

#### 1. Change Phone Number

**Files to update:**

- `src/components/Footer.tsx` - Footer display
- `src/components/Header.tsx` - Header display
- `src/components/WhatsappButton.tsx` - WhatsApp link
- `index.html` - Structured data (line 151)

**Example:**

```typescript
// Find: +40 772 246 316
// Replace with new number
```

#### 2. Add New Article

**File:** `src/pages/ArticolePage.tsx`

**Steps:**

1. Add image to `/public/assets/`
2. Add article object to articles array:

```typescript
{
  id: 4,
  title: "Article Title",
  date: "November 2025",
  image: "/assets/new-image.jpg",
  summary: "Brief summary...",
  content: "Full article text..."
}
```

3. Rebuild and deploy

#### 3. Update Service Information

**Files:**

- `src/pages/HomePage.tsx` - Service cards (lines 100-250)
- `src/pages/ServiciiPage.tsx` - Full service descriptions

**Steps:**

1. Locate service object in services array
2. Update title, description, or image
3. Rebuild and deploy

#### 4. Change Images

**Steps:**

1. Add new image to `/public/assets/`
2. Optimize image (WebP recommended, <200KB)
3. Update image path in component
4. Remove old image file
5. Rebuild and deploy

---

## Deployment & Hosting

### Current Setup:

- **Domain:** www.popescumaria.ro
- **Hosting:** Managed by developer
- **DNS:** Configured by developer
- **SSL:** Active (HTTPS)

### Deployment Process:

```bash
# 1. Build production version
npm run build

# 2. Output in /dist directory
# 3. Upload /dist contents to hosting server
# 4. Configure server to serve index.html for all routes (SPA)
```

### Server Configuration Needed:

- **Rewrites:** All routes → index.html (for React Router)
- **Gzip:** Enable compression
- **Cache headers:** Static assets (1 year), HTML (no cache)

### Alternative Hosting Options:

- **Vercel** - Automatic deployments, serverless
- **Netlify** - Simple drag-and-drop, serverless
- **AWS S3 + CloudFront** - Scalable, requires more setup
- **Traditional hosting** - Upload /dist via FTP

---

## Security & Privacy

### GDPR Compliance:

- ✅ Privacy Policy page
- ✅ No cookies without consent
- ✅ No tracking scripts (Google Analytics NOT installed)
- ✅ Contact forms: None (to avoid data storage requirements)

### Security Features:

- ✅ HTTPS only (SSL certificate)
- ✅ No API keys in client code
- ✅ No sensitive data stored client-side
- ✅ Content Security Policy headers (via hosting)
- ✅ XSS protection (React escapes by default)

### No Backend:

- Static site - no server-side code
- No database
- No user authentication
- Contact via WhatsApp/phone only

---

## Known Limitations & Future Enhancements

### Current Limitations:

1. **No contact form** - Contact via phone/WhatsApp only
2. **No CMS** - Articles must be added by editing code
3. **No backend** - Cannot store data or process forms
4. **No analytics** - Google Analytics not installed
5. **No appointment booking** - Manual booking via phone

### Recommended Future Enhancements:

- ✅ Add Google Analytics for traffic monitoring
- ✅ Implement contact form with email backend
- ✅ Add CMS (e.g., Strapi, Contentful) for article management
- ✅ Add appointment booking system
- ✅ Add testimonials/reviews section
- ✅ Multi-language support (Romanian + English)
- ✅ Blog comment system

---

## Maintenance Checklist

### Monthly:

- [ ] Check all links work (internal and external)
- [ ] Verify phone numbers and contact info are current
- [ ] Test WhatsApp button functionality
- [ ] Check for broken images
- [ ] Test on latest browser versions

### Quarterly:

- [ ] Update npm dependencies
- [ ] Run security audit (`npm audit`)
- [ ] Check Google Search Console for errors
- [ ] Review site speed (PageSpeed Insights)
- [ ] Test on new device models

### Annually:

- [ ] Renew domain registration
- [ ] Review and update privacy policy
- [ ] Audit content for accuracy
- [ ] Update copyright year in footer
- [ ] Major dependency upgrades (React, Vite, etc.)

---

## Troubleshooting

### Build Errors:

**Error:** `npm install` fails

- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check Node.js version (18+)

**Error:** TypeScript errors

- Run `npm run build` to see all errors
- Check `tsconfig.json` is not corrupted
- Verify all `.tsx` files have correct imports

### Development Server Issues:

**Error:** Port 5173 already in use

- Kill process: `npx kill-port 5173`
- Or use different port: `npm run dev -- --port 3000`

### Deployment Issues:

**Issue:** Routes return 404 on refresh

- Configure server rewrite rules (all routes → index.html)
- React Router needs this for client-side routing

**Issue:** Images not loading

- Check image paths start with `/` (e.g., `/assets/logo.png`)
- Verify images exist in `/public/assets/`

### Animation Issues:

**Issue:** GSAP animations not working

- Check GSAP is imported: `import { gsap } from 'gsap'`
- Verify animation targets exist in DOM
- Check for console errors (null refs)

---

## Contact & Support

### Original Developer:

**Name:** alecsdesign.xyz  
**Website:** https://www.alecsdesign.xyz

### Client:

**Name:** Maria Popescu  
**Business:** Psiholog Clinician  
**Phone:** +40 772 246 316  
**Website:** https://www.popescumaria.ro/

### For Future Developers:

This project is delivered as an archived package via Google Drive. The client does not have direct access to code or hosting. All maintenance requests should be coordinated through the client's maintenance agreement.

---

## Project Delivery Checklist

- [x] Website fully developed and tested
- [x] All 6 pages completed with content
- [x] SEO optimized (sitemap, robots.txt, meta tags)
- [x] Mobile responsive on all devices
- [x] Cross-browser tested
- [x] Performance optimized
- [x] GSAP animations working
- [x] WhatsApp and phone contact functional
- [x] Privacy policy page included
- [x] Documentation created (technical + client + SEO)
- [x] Domain configured and SSL active
- [x] Website live on www.popescumaria.ro
- [x] Project archived for delivery

---

**Project Status:** ✅ Complete and delivered  
**Live Website:** https://www.popescumaria.ro/  
**Date:** November 12, 2025  
**Developer:** alecsdesign.xyz

---

## Quick Reference

### Install & Run:

```bash
npm install
npm run dev
```

### Build for Production:

```bash
npm run build
# Output: /dist directory
```

### Key Files:

- `src/App.tsx` - Main routing
- `src/pages/HomePage.tsx` - Landing page
- `src/components/Header.tsx` - Navigation
- `index.html` - SEO meta tags
- `public/sitemap.xml` - SEO sitemap

### Contact Info to Update:

- `src/components/Footer.tsx` (line ~80)
- `src/components/Header.tsx` (line ~40)
- `src/components/WhatsappButton.tsx` (line ~10)
- `index.html` (line 151 - structured data)

### Dependencies Update:

```bash
npm update
npm audit fix
```
