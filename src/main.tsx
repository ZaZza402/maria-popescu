import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// fontLoader disabled - using PNG logo and Google Fonts only
// Force rebuild: 2025-10-10 - Fixed font imports for Vercel deployment
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
