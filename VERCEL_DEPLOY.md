# Vercel Deployment Instructions

## Automatic Deployment

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a Vite React project
3. Use these build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

## Environment Variables (if needed)
No environment variables required for this project.

## Domain Configuration
- Your app will be available at: `https://your-project-name.vercel.app`
- You can add a custom domain in the Vercel dashboard

## Key Changes Made for Vercel Compatibility
1. Changed `base: '/maria-popescu/'` to `base: '/'` in `vite.config.ts`
2. Switched from `HashRouter` to `BrowserRouter` in `App.tsx`
3. Added `vercel.json` for SPA routing support
4. Fixed missing asset references

## Manual Deployment (Alternative)
If you prefer manual deployment:
1. Run `npm run build`
2. Upload the `dist` folder to Vercel via drag & drop