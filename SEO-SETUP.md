# SEO Setup Documentation

## Date: November 3, 2025

---

## Active Routes & Pages

### Public-Facing Pages (Indexed)
1. **Homepage** - `/` - Priority: 1.0
   - Hero section with credentials
   - Services preview
   - Gallery/carousel
   - FAQ preview
   - Contact section

2. **Despre (About)** - `/despre` - Priority: 0.9
   - Professional bio
   - Credentials
   - Portrait image
   - Contact information

3. **Servicii (Services)** - `/servicii` - Priority: 0.9
   - Individual therapy services
   - Couple therapy
   - Family therapy
   - Psychological evaluation
   - Contact modals for each service

4. **Articole (Articles)** - `/articole` - Priority: 0.8
   - Blog/articles section
   - Change frequency: Weekly (content updates)

5. **Întrebări Frecvente (FAQ)** - `/intrebari-frecvente` - Priority: 0.7
   - 15 comprehensive FAQ questions
   - Accordion-style interface
   - Updated with client insurance information

6. **Privacy Policy** - `/privacy` - Priority: 0.3
   - Legal information
   - Data protection
   - Change frequency: Yearly

7. **404 Not Found** - `*` (catch-all)
   - Not included in sitemap (error page)

---

## Active Components

### Layout Components (Used)
- ✅ **Header** - Navigation, mobile menu
- ✅ **Footer** - Contact info, quick links, social media, credits
- ✅ **ScrollToTop** - Auto-scroll on route change
- ✅ **ScrollToTopButton** - Manual scroll button
- ✅ **WhatsappButton** - Floating WhatsApp contact button

### Unused Components (Can be removed if needed)
- ❌ **AbstractHeroAnimation** - Created but not imported/used
- ❌ **HeroIllustration** - Created but not imported/used
- ❌ **ContactRow** - Defined but not imported anywhere
- ❌ **ElegantCarousel** - Defined but not imported (carousel functionality may be inline)
- ❌ **OptimizedImage** - Only used within ElegantCarousel (which is unused)
- ❌ **PageTransition** - Not used (CSS animations used instead)
- ❌ **LightPageTransition** - Not used (CSS animations used instead)

---

## SEO Files Created

### 1. robots.txt
Location: `/public/robots.txt`

```
User-agent: *
Allow: /
Sitemap: https://YOUR-DOMAIN.com/sitemap.xml
Crawl-delay: 10
```

**Purpose:** 
- Allows all search engines to crawl all pages
- Points to sitemap location
- Sets respectful crawl delay

### 2. sitemap.xml
Location: `/public/sitemap.xml`

**Purpose:**
- Lists all public pages for search engines
- Includes priority levels (1.0 = highest)
- Specifies update frequencies
- Includes last modification dates

**Priority Levels:**
- Homepage: 1.0 (most important)
- About/Services: 0.9 (high importance)
- Articles: 0.8 (frequently updated content)
- FAQ: 0.7 (important but static)
- Privacy: 0.3 (legal requirement, low traffic)

---

## Domain Placeholder

**IMPORTANT:** Both `robots.txt` and `sitemap.xml` contain the placeholder:
```
https://YOUR-DOMAIN.com
```

### When You Get a Custom Domain:

1. **Find & Replace** in both files:
   - `YOUR-DOMAIN.com` → Your actual domain (e.g., `maria-popescu.ro`)

2. **Update sitemap.xml dates:**
   - Change `<lastmod>` dates to reflect actual deployment date

3. **Submit to Search Engines:**
   - Google Search Console: https://search.google.com/search-console
   - Bing Webmaster Tools: https://www.bing.com/webmasters

4. **Verify Installation:**
   - Test: `https://your-domain.com/robots.txt`
   - Test: `https://your-domain.com/sitemap.xml`

---

## Recommended Next Steps for SEO

### Meta Tags (High Priority)
Add to each page's `<head>`:
- Title tags (unique per page)
- Meta descriptions
- Open Graph tags (social sharing)
- Canonical URLs

### Schema Markup
Add structured data for:
- LocalBusiness (psychology practice)
- Person (Maria Popescu)
- Service (therapy services)
- FAQPage (FAQ section)

### Technical SEO
- ✅ Mobile responsive
- ✅ Fast loading (Vite optimized)
- ✅ Clean URLs (React Router)
- ⚠️ Add meta tags
- ⚠️ Add schema markup
- ⚠️ Add alt text to all images

### Content SEO
- Add more Romanian keywords naturally
- Optimize headings (H1, H2, H3)
- Add internal linking between pages
- Create more blog content (Articole)

---

## Component Cleanup Recommendation

If you want to reduce bundle size, consider deleting these unused files:
- `src/components/AbstractHeroAnimation.tsx`
- `src/components/HeroIllustration.tsx`
- `src/components/ContactRow.tsx`
- `src/components/ElegantCarousel.tsx`
- `src/components/OptimizedImage.tsx`
- `src/components/PageTransition.tsx`
- `src/components/LightPageTransition.tsx`

**Note:** Keep them if you plan to use them in future features.

---

## File Locations Summary

```
project-root/
├── public/
│   ├── robots.txt          ← Search engine instructions
│   └── sitemap.xml         ← Page list for search engines
└── SEO-SETUP.md            ← This documentation
```

---

## Testing Checklist

- [ ] Replace YOUR-DOMAIN.com in robots.txt
- [ ] Replace YOUR-DOMAIN.com in sitemap.xml
- [ ] Update lastmod dates in sitemap.xml
- [ ] Test robots.txt accessibility in browser
- [ ] Test sitemap.xml accessibility in browser
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Add meta tags to all pages
- [ ] Add alt text to all images
- [ ] Test mobile responsiveness
- [ ] Test page load speed
- [ ] Add structured data (Schema.org)

---

*Document created: November 3, 2025*
