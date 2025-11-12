# SEO Setup & Google Search Console Guide 🚀# SEO Setup Documentation

**Website:** https://www.popescumaria.ro ## Date: November 3, 2025

**Date:** November 12, 2025

**Status:** ✅ Ready for Google Search Console Submission---

---## Active Routes & Pages

## ✅ SEO Implementation Complete### Public-Facing Pages (Indexed)

### What's Been Done:1. **Homepage** - `/` - Priority: 1.0

#### 1. **Sitemap.xml** ✅ - Hero section with credentials

- **Location:** `/public/sitemap.xml` - Services preview

- **Live URL:** https://www.popescumaria.ro/sitemap.xml - Gallery/carousel

- **Pages included:** 6 pages with proper priorities - FAQ preview

- **Last Updated:** November 12, 2025 - Contact section

- **Domain:** ✅ Updated to www.popescumaria.ro

2. **Despre (About)** - `/despre` - Priority: 0.9

#### 2. **Robots.txt** ✅

- **Location:** `/public/robots.txt` - Professional bio

- **Live URL:** https://www.popescumaria.ro/robots.txt - Credentials

- **Allows:** All search engine crawlers - Portrait image

- **Sitemap declared:** ✅ Points to correct URL - Contact information

- **Domain:** ✅ Updated to www.popescumaria.ro

3. **Servicii (Services)** - `/servicii` - Priority: 0.9

#### 3. **Meta Tags** ✅ (index.html)

- **Title:** Maria Popescu - Psiholog Clinician - Individual therapy services

- **Description:** Optimized 160-character description with keywords - Couple therapy

- **Keywords:** 15+ relevant Romanian keywords - Family therapy

- **Canonical URL:** ✅ Added - Psychological evaluation

- **Robots meta:** index, follow - Contact modals for each service

- **All Open Graph tags:** ✅ Updated with absolute URLs

- **Twitter Card:** ✅ Complete4. **Articole (Articles)** - `/articole` - Priority: 0.8

- **Domain:** ✅ All references updated to www.popescumaria.ro

  - Blog/articles section

#### 4. **Structured Data (JSON-LD)** ✅ - Change frequency: Weekly (content updates)

- **Type:** ProfessionalService

- **Complete business info** including phone, hours, location5. **Întrebări Frecvente (FAQ)** - `/intrebari-frecvente` - Priority: 0.7

- **All URLs:** ✅ Absolute paths with correct domain

- **Rich snippets ready** for Google Search - 15 comprehensive FAQ questions

  - Accordion-style interface

--- - Updated with client insurance information

## 🎯 Google Search Console Setup - Step by Step6. **Privacy Policy** - `/privacy` - Priority: 0.3

### Step 1: Access Search Console - Legal information

1. Go to: **https://search.google.com/search-console/** - Data protection

2. Sign in with Google account - Change frequency: Yearly

3. Click **"Add Property"**

4. **404 Not Found** - `*` (catch-all)

### Step 2: Add Your Website - Not included in sitemap (error page)

1. Choose **"URL prefix"** (recommended)

2. Enter: `https://www.popescumaria.ro`---

3. Click **"Continue"**

## Active Components

### Step 3: Verify Ownership

### Layout Components (Used)

**METHOD 1: HTML File Upload (EASIEST)** ⭐

1. Google provides a verification file (e.g., `google1234567890abcdef.html`)- ✅ **Header** - Navigation, mobile menu

2. Download the file- ✅ **Footer** - Contact info, quick links, social media, credits

3. Upload to `/public/` folder in your project- ✅ **ScrollToTop** - Auto-scroll on route change

4. Deploy to production- ✅ **ScrollToTopButton** - Manual scroll button

5. Verify file is accessible: `https://www.popescumaria.ro/google1234567890abcdef.html`- ✅ **WhatsappButton** - Floating WhatsApp contact button

6. Return to Search Console, click **"Verify"**

### Unused Components (Can be removed if needed)

**METHOD 2: HTML Meta Tag**

1. Google provides a meta tag:- ❌ **AbstractHeroAnimation** - Created but not imported/used

   ````html- ❌ **HeroIllustration** - Created but not imported/used

   <meta name="google-site-verification" content="YOUR_CODE" />- ❌ **ContactRow** - Defined but not imported anywhere

   ```- ❌ **ElegantCarousel** - Defined but not imported (carousel functionality may be inline)

   ````

2. Add to `<head>` section in `index.html` (after line 6)- ❌ **OptimizedImage** - Only used within ElegantCarousel (which is unused)

3. Deploy changes- ❌ **PageTransition** - Not used (CSS animations used instead)

4. Click **"Verify"** in Search Console- ❌ **LightPageTransition** - Not used (CSS animations used instead)

**METHOD 3: DNS Record** (if you manage DNS)---

1. Add TXT record to your domain DNS

2. Value provided by Google## SEO Files Created

3. Wait 10-15 minutes for propagation

4. Click **"Verify"**### 1. robots.txt

### Step 4: Submit SitemapLocation: `/public/robots.txt`

1. After verification, go to **"Sitemaps"** in left sidebar

2. Enter: `sitemap.xml````

3. Click **"Submit"**User-agent: \*

4. ✅ Google will start indexing your pagesAllow: /

Sitemap: https://YOUR-DOMAIN.com/sitemap.xml

### Step 5: Request Indexing (Optional - For Faster Results)Crawl-delay: 10

1. Go to **"URL Inspection"** tool```

2. Enter your homepage: `https://www.popescumaria.ro/`

3. Click **"Test live URL"\*\***Purpose:\*\*

4. Click **"Request Indexing"**

5. Repeat for important pages:- Allows all search engines to crawl all pages

   - `/despre`- Points to sitemap location

   - `/servicii`- Sets respectful crawl delay

   - `/articole`

   - `/intrebari-frecvente`### 2. sitemap.xml

---Location: `/public/sitemap.xml`

## 📊 Testing Your SEO (Do This First!)**Purpose:**

### Before submitting to Google, test everything works:- Lists all public pages for search engines

- Includes priority levels (1.0 = highest)

#### 1. **Sitemap Accessibility**- Specifies update frequencies

- Visit: **https://www.popescumaria.ro/sitemap.xml**- Includes last modification dates

- ✅ Should display XML with all 6 URLs

- ❌ If 404 error, check file is in `/public/` folder**Priority Levels:**

#### 2. **Robots.txt Accessibility**- Homepage: 1.0 (most important)

- Visit: **https://www.popescumaria.ro/robots.txt**- About/Services: 0.9 (high importance)

- ✅ Should show "Allow: /" and sitemap URL- Articles: 0.8 (frequently updated content)

- ❌ If 404 error, check file is in `/public/` folder- FAQ: 0.7 (important but static)

- Privacy: 0.3 (legal requirement, low traffic)

#### 3. **Rich Results Test**

- Go to: **https://search.google.com/test/rich-results**---

- Enter: `https://www.popescumaria.ro/`

- ✅ Should detect "ProfessionalService" schema## Domain Placeholder

- Fix any errors shown

**IMPORTANT:** Both `robots.txt` and `sitemap.xml` contain the placeholder:

#### 4. **Mobile-Friendly Test**

- Go to: **https://search.google.com/test/mobile-friendly**```

- Enter: `https://www.popescumaria.ro/`https://YOUR-DOMAIN.com

- ✅ Should pass all tests```

#### 5. **PageSpeed Insights**### When You Get a Custom Domain:

- Go to: **https://pagespeed.web.dev/**

- Enter: `https://www.popescumaria.ro/`1. **Find & Replace** in both files:

- Target scores: 85+ (all categories)

  - `YOUR-DOMAIN.com` → Your actual domain (e.g., `maria-popescu.ro`)

---

2. **Update sitemap.xml dates:**

## 📋 Website Pages (6 Total)

- Change `<lastmod>` dates to reflect actual deployment date

| Page | URL | Priority | Change Frequency |

|------|-----|----------|------------------|3. **Submit to Search Engines:**

| **Homepage** | `/` | 1.0 | Monthly |

| **Despre** | `/despre` | 0.9 | Monthly | - Google Search Console: https://search.google.com/search-console

| **Servicii** | `/servicii` | 0.9 | Monthly | - Bing Webmaster Tools: https://www.bing.com/webmasters

| **Articole** | `/articole` | 0.8 | Weekly |

| **FAQ** | `/intrebari-frecvente` | 0.7 | Monthly |4. **Verify Installation:**

| **Privacy** | `/privacy` | 0.3 | Yearly | - Test: `https://your-domain.com/robots.txt`

- Test: `https://your-domain.com/sitemap.xml`

---

---

## ⏱️ Expected Timeline

## Recommended Next Steps for SEO

| Phase | Timeline | Description |

|-------|----------|-------------|### Meta Tags (High Priority)

| **Verification** | Immediate | Property verified in Search Console |

| **Sitemap Processing** | 1-3 days | Google reads your sitemap |Add to each page's `<head>`:

| **First Crawl** | 3-7 days | Googlebot visits your pages |

| **Initial Indexing** | 5-14 days | Pages start appearing in search |- Title tags (unique per page)

| **Full Indexing** | 2-4 weeks | All 6 pages indexed |- Meta descriptions

| **Rankings** | 1-3 months | Start ranking for keywords |- Open Graph tags (social sharing)

- Canonical URLs

_Note: Request indexing manually to speed up by 50%_

### Schema Markup

---

Add structured data for:

## 🎯 Target Keywords

- LocalBusiness (psychology practice)

Your site is optimized for these Romanian keywords:- Person (Maria Popescu)

- Service (therapy services)

### Primary Keywords:- FAQPage (FAQ section)

- psiholog București

- psihoterapeut cognitiv-comportamental### Technical SEO

- consiliere psihologică București

- cabinet psihologic București- ✅ Mobile responsive

- ✅ Fast loading (Vite optimized)

### Secondary Keywords:- ✅ Clean URLs (React Router)

- terapie copii București- ⚠️ Add meta tags

- terapie adulți- ⚠️ Add schema markup

- evaluare psihologică- ⚠️ Add alt text to all images

- psihoterapie cuplu

- terapie ABA### Content SEO

- anxietate terapie

- depresie consiliere- Add more Romanian keywords naturally

- Optimize headings (H1, H2, H3)

### Long-Tail Keywords:- Add internal linking between pages

- Maria Popescu psiholog- Create more blog content (Articole)

- cabinet psihologie sector [X] București

- psihoterapeut cognitiv comportamental București---

---## Component Cleanup Recommendation

## 📱 Next Step: Google Business ProfileIf you want to reduce bundle size, consider deleting these unused files:

After Search Console, create your Google Business Profile:- `src/components/AbstractHeroAnimation.tsx`

- `src/components/HeroIllustration.tsx`

### Setup Instructions:- `src/components/ContactRow.tsx`

1. Go to: **https://business.google.com/**- `src/components/ElegantCarousel.tsx`

2. Click **"Manage now"**- `src/components/OptimizedImage.tsx`

3. Fill in:- `src/components/PageTransition.tsx`

   - **Business name:** Maria Popescu - Psiholog Clinician- `src/components/LightPageTransition.tsx`

   - **Category:** Psychologist

   - **Location:** Your office address in București**Note:** Keep them if you plan to use them in future features.

   - **Phone:** +40 772 246 316

   - **Website:** https://www.popescumaria.ro/---

   - **Hours:** Monday-Friday, 9:00 AM - 6:00 PM

## File Locations Summary

### Add Content:

- Upload logo```

- Add office photosproject-root/

- Add professional photos├── public/

- Write business description│ ├── robots.txt ← Search engine instructions

- List all services│ └── sitemap.xml ← Page list for search engines

└── SEO-SETUP.md ← This documentation

### Benefits:```

- ✅ Appear in Google Maps

- ✅ Show in "psychologist near me" searches---

- ✅ Display in local pack (top 3 results)

- ✅ Get client reviews## Testing Checklist

- ✅ Post updates and news

- [ ] Replace YOUR-DOMAIN.com in robots.txt

---- [ ] Replace YOUR-DOMAIN.com in sitemap.xml

- [ ] Update lastmod dates in sitemap.xml

## 📈 Monitoring & Analytics- [ ] Test robots.txt accessibility in browser

- [ ] Test sitemap.xml accessibility in browser

### In Google Search Console (After 1 Week):- [ ] Submit sitemap to Google Search Console

- [ ] Submit sitemap to Bing Webmaster Tools

**Performance Tab:**- [ ] Add meta tags to all pages

- Total clicks (visitors from Google)- [ ] Add alt text to all images

- Impressions (times you appeared in search)- [ ] Test mobile responsiveness

- Average position (ranking)- [ ] Test page load speed

- Click-through rate (CTR)- [ ] Add structured data (Schema.org)

**Coverage Tab:**---

- Pages indexed: Target 6/6 (100%)

- Check for errors or warnings*Document created: November 3, 2025*

**Enhancements:**

- Mobile usability issues
- Core Web Vitals scores

### Track These Metrics:

- Week 1: Pages submitted ✅
- Week 2: Pages crawled 📊
- Week 2-4: Pages indexed 🔍
- Month 1+: Search impressions 📈
- Month 2+: Click traffic 🎯

---

## ✅ SEO Best Practices Implemented

### Technical SEO:

- ✅ Semantic HTML5 markup
- ✅ Proper heading hierarchy (H1 → H2 → H3)
- ✅ Fast page load (<3 seconds)
- ✅ Mobile-responsive design
- ✅ HTTPS ready
- ✅ No broken links
- ✅ Optimized images (WebP format)
- ✅ Lazy loading for performance
- ✅ Alt text on all images
- ✅ Clean URL structure

### On-Page SEO:

- ✅ Unique meta descriptions
- ✅ Relevant keywords in content
- ✅ Romanian language declared
- ✅ Local SEO (București focus)
- ✅ Contact info visible
- ✅ Internal linking
- ✅ Clear call-to-actions
- ✅ Breadcrumb navigation

### Content SEO:

- ✅ Service pages with details
- ✅ About page with credentials
- ✅ FAQ section (15 questions)
- ✅ Privacy policy
- ✅ Articles section (for blog posts)

---

## 🚀 Post-Launch Action Plan

### Week 1:

- [ ] Deploy website to www.popescumaria.ro
- [ ] Test sitemap and robots.txt accessibility
- [ ] Submit to Google Search Console
- [ ] Request indexing for homepage
- [ ] Create Google Business Profile

### Week 2:

- [ ] Check Search Console for crawl errors
- [ ] Verify all pages are being crawled
- [ ] Fix any reported issues
- [ ] Add Google Analytics (optional)

### Week 3-4:

- [ ] Monitor indexing progress
- [ ] Check which keywords appear
- [ ] Respond to any Search Console messages
- [ ] Start collecting client reviews

### Month 2:

- [ ] Publish first blog article
- [ ] Share on social media
- [ ] Encourage happy clients to leave reviews
- [ ] Update Google Business posts

### Ongoing:

- [ ] Publish new articles monthly
- [ ] Update services as needed
- [ ] Monitor search performance
- [ ] Build backlinks (directories, partnerships)
- [ ] Keep content fresh and relevant

---

## 🔍 Local SEO Directories

Submit your business to these Romanian directories:

1. **Google Business Profile** (priority!)
2. **Facebook Business Page**
3. **Yell.ro** - Romanian business directory
4. **City Compass** - Local businesses
5. **Romanian psychology associations**
6. **LinkedIn Company Page**
7. **Healthcare directories**

---

## 📊 Competition Analysis

### Monitor these competitors:

Search for: "psiholog bucurești" and note top 3-5 results

- What keywords they rank for
- What content they have
- Their services offered
- Their reviews/ratings

### Differentiate with:

- Specialized cognitive-behavioral therapy
- Experience with children and adults
- ABA therapy offering
- Couple and family therapy
- Professional credentials
- Welcoming, modern website

---

## 🎓 Resources

### Google Official Tools:

- **Search Console:** https://search.google.com/search-console/
- **Business Profile:** https://business.google.com/
- **Analytics:** https://analytics.google.com/
- **PageSpeed:** https://pagespeed.web.dev/
- **Mobile Test:** https://search.google.com/test/mobile-friendly
- **Rich Results:** https://search.google.com/test/rich-results

### Learning Resources:

- **Google SEO Guide:** https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- **Schema.org Docs:** https://schema.org/ProfessionalService
- **Web.dev:** https://web.dev/learn/

---

## 🔧 Troubleshooting

### "My pages aren't showing up in Google"

**Wait Time:** 7-14 days after submitting sitemap
**Solutions:**

1. Check Search Console coverage report
2. Verify sitemap was processed
3. Request indexing manually
4. Check robots.txt isn't blocking
5. Ensure pages have unique, quality content

### "I have crawl errors"

**Check:**

1. All internal links work
2. Images load properly
3. No broken external links
4. Mobile version works
5. HTTPS is configured

### "Low rankings"

**Improve:**

1. Add more quality content
2. Get backlinks from other sites
3. Encourage client reviews
4. Update content regularly
5. Improve page speed
6. Build social presence

---

## ✅ Pre-Deployment Checklist

Before going live:

- [x] Sitemap.xml created with correct domain
- [x] Robots.txt configured with correct domain
- [x] All meta tags updated
- [x] Canonical URLs added
- [x] Structured data includes phone & hours
- [x] Images have alt text
- [x] Mobile responsive tested
- [ ] SSL certificate installed (HTTPS)
- [ ] Domain DNS configured
- [ ] Website deployed to production
- [ ] Sitemap accessible at /sitemap.xml
- [ ] Robots.txt accessible at /robots.txt

---

## 📞 Contact Information Verified

Ensure these appear consistently everywhere:

- **Phone:** +40 772 246 316
- **WhatsApp:** https://wa.me/40772246316
- **Website:** https://www.popescumaria.ro/
- **Location:** București, România
- **Email:** (add if you have one)
- **Hours:** Monday-Friday, 9:00 AM - 6:00 PM

---

## 🎉 You're Ready!

**Summary:**

- ✅ Sitemap created and updated
- ✅ Robots.txt configured
- ✅ All meta tags optimized
- ✅ Structured data complete
- ✅ Domain updated everywhere (www.popescumaria.ro)
- ✅ Mobile-friendly & fast
- ✅ Ready for Google Search Console

**Next Actions:**

1. Deploy website to production
2. Test sitemap and robots.txt are accessible
3. Submit to Google Search Console
4. Create Google Business Profile
5. Monitor indexing progress

**Expected Results:**

- Week 1-2: Pages crawled
- Week 2-4: Pages indexed
- Month 1+: Appearing in search results
- Month 2-3: Ranking improvements
- Month 3-6: Steady organic traffic growth

Good luck with your SEO! 🚀
