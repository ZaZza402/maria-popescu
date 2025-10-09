/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Enhanced Color Palette - More Vibrant
          primary: '#E8A298',      // Warmer Coral Rose - More alive primary color
          secondary: '#D8B2AD',    // Earthy Beige - Secondary color
          text: '#333333',         // Dark Gray - Main text color
          bg: '#FFFFFF',           // White - Background
          // Supporting colors derived from the palette
          light: '#F8F2F1',        // Very light coral rose tint
          accent: '#E8A298',       // Primary (alias for consistency)
          soft: '#EAE6E3'          // Soft neutral tone
        }
      },
      fontFamily: {
        // Complete Typography System with all project fonts
        sans: ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'sans-serif'],
        serif: ['Playfair Display', 'DM Serif Text', 'Georgia', 'Times New Roman', 'serif'],
        signature: ['Brittany Signature', 'Brush Script MT', 'Segoe Script', 'cursive'],
        display: ['Playfair Display', 'DM Serif Text', 'Georgia', 'Times New Roman', 'serif'],
        script: ['Brittany Signature', 'Brush Script MT', 'Segoe Script', 'cursive'],
        amsterdam: ['Amsterdam Handwriting', 'Brush Script MT', 'Segoe Script', 'cursive'],
        georgia: ['Georgia', 'Times New Roman', 'serif'],
        dmserif: ['DM Serif Text', 'Georgia', 'Times New Roman', 'serif'],
        felix: ['Felix Titling', 'Georgia', 'Times New Roman', 'serif']
      },
      boxShadow: {
        soft: '0 10px 30px rgba(31,60,77,0.08)'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
        }
      }
    }
  },
  plugins: [],
}