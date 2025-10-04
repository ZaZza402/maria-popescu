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
          bg: '#F8F5F0',
          light: '#F8F5F0',
          text: '#2A1810',
          primary: '#1F3C4D',
          accent: '#C2A678',
          soft: '#E6EBEF'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'ui-sans-serif', 'system-ui'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia'],
        signature: ['Kaushan Script', 'cursive']
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