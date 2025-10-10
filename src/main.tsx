import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// fontLoader disabled - using PNG logo and Google Fonts only
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
