# Server Configuration for Vercel Deployment

**Problem:** Direct URL access (like `popescumaria.ro/despre`) returns 404 error.

**Cause:** Vercel needs proper configuration to redirect all routes to `index.html` for React Router.

**Solution:** Use `vercel.json` configuration file (already included in project).

---

## Current Setup

**Hosting Platform:** Vercel  
**Deployment:** GitHub → Vercel → www.popescumaria.ro  
**Configuration:** `vercel.json` (in project root)

---

## Vercel Configuration (Current Setup)

### What's Configured:

The `vercel.json` file in the project root handles everything:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**What this does:**
- ✅ Redirects all routes to `index.html` (fixes 404 errors)
- ✅ React Router handles client-side routing
- ✅ Forces HTTPS automatically (Vercel default)
- ✅ Automatic gzip compression
- ✅ Cache headers for static assets
- ✅ Edge network (CDN) for fast global access

### Deployment Workflow:

1. **Make changes** to code locally
2. **Commit and push** to GitHub:
   ```bash
   git add .
   git commit -m "Your message"
   git push origin main
   ```
3. **Vercel automatically deploys** (connected to GitHub)
4. **Changes live** at www.popescumaria.ro in ~2 minutes

### No manual building or uploading required!

---

## Testing After Deployment

### 1. Test direct URL access:
Visit these URLs directly in browser (not by clicking links):
- ✅ https://www.popescumaria.ro/despre
- ✅ https://www.popescumaria.ro/servicii
- ✅ https://www.popescumaria.ro/articole
- ✅ https://www.popescumaria.ro/intrebari-frecvente
- ✅ https://www.popescumaria.ro/privacy

All should load correctly without 404 errors.

### 2. Test browser refresh:
- Navigate to any page on the website
- Press F5 (refresh)
- Page should reload correctly (not 404)

### 3. Check Google Search Console:
- After fixing, submit sitemap again
- Request re-indexing of pages that showed 404
- Monitor coverage report for improvements

---

## Troubleshooting on Vercel

### Still getting 404 errors?

**1. Check if `vercel.json` is deployed:**

Go to your Vercel dashboard → Project → Settings → General → check if `vercel.json` is recognized.

**2. Verify deployment:**

In Vercel dashboard:
- Go to Deployments tab
- Check latest deployment status
- Look for any build errors

**3. Check domain configuration:**

In Vercel dashboard → Domains:
- Verify `www.popescumaria.ro` is properly connected
- Check DNS records are correct
- SSL should show as "Active"

**4. Force re-deploy:**

If configuration changes aren't taking effect:
- Go to Vercel dashboard
- Click latest deployment
- Click "⋯" menu → "Redeploy"

**5. Clear cache:**

Sometimes Vercel's edge cache needs clearing:
- In Vercel dashboard → Settings
- Look for "Clear Cache" option
- Or wait 5-10 minutes for automatic cache refresh

---

## Vercel Dashboard Access

Make sure you have access to:
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Project:** maria-popescu (or similar name)
- **Connected GitHub repo:** ZaZza402/maria-popescu

---

## Common Issues

### Issue: Changes not appearing after git push

**Solution:**
1. Check Vercel dashboard - is it building?
2. Look at deployment logs for errors
3. Verify build succeeds (green checkmark)
4. Wait 2-3 minutes for deployment to complete

### Issue: 404 on specific routes

**Solution:**
1. Verify `vercel.json` exists in project root
2. Push `vercel.json` to GitHub if missing
3. Redeploy from Vercel dashboard

### Issue: Old version still showing

**Solution:**
1. Hard refresh browser: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Check deployment timestamp in Vercel
3. Verify correct deployment is assigned to domain

---

## Quick Fix Steps

If you're seeing 404 errors right now:

1. **Ensure vercel.json is committed:**
   ```bash
   git add vercel.json
   git commit -m "Add Vercel routing configuration"
   git push origin main
   ```

2. **Wait for Vercel to deploy** (2-3 minutes)

3. **Test these URLs directly:**
   - https://www.popescumaria.ro/despre
   - https://www.popescumaria.ro/servicii
   - https://www.popescumaria.ro/articole

4. **If still 404:** Go to Vercel dashboard and click "Redeploy"

---

## Deployment Checklist

After each deployment, verify:

- [ ] `vercel.json` file committed to GitHub
- [ ] Vercel build successful (green checkmark in dashboard)
- [ ] Direct URL access works for all pages
- [ ] Browser refresh works on any page
- [ ] HTTPS is working (secure padlock in browser)
- [ ] No console errors (F12 → Console)
- [ ] Google Search Console shows no 404 errors

---

## SEO Impact

**Before fix:** Google sees 404 errors → pages not indexed → no search traffic

**After fix:** Google can access all pages → pages get indexed → appear in search results

**Action after fixing:**
1. Go to Google Search Console
2. Request re-indexing for affected pages:
   - /despre
   - /servicii
   - /articole
   - /intrebari-frecvente
   - /privacy
3. Submit sitemap again
4. Monitor coverage report over next 7-14 days

---

## Contact Support

If you need help with server configuration:

**Hosting provider support:** Contact them with this document and ask them to configure the server for a React SPA (Single Page Application).

**Developer:** alecsdesign.xyz

---

**Last Updated:** November 16, 2025
