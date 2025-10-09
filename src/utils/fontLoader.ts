// Font imports for proper bundling
import AmsterdamHandwritingOtf from '../assets/fonts/AmsterdamhandwritingRegular-6Y1Vo.otf';
import AmsterdamHandwritingTtf from '../assets/fonts/AmsterdamHandwriting-ywgW2.ttf';
import GeorgiaRegular from '../assets/fonts/georgia.ttf';
import GeorgiaBold from '../assets/fonts/georgiab.ttf';
import GeorgiaItalic from '../assets/fonts/georgiai.ttf';
import GeorgiaBoldItalic from '../assets/fonts/georgiaz.ttf';
import DMSerifTextRegular from '../assets/fonts/DMSerifText-Regular.ttf';
import DMSerifTextItalic from '../assets/fonts/DMSerifText-Italic.ttf';

// Export font URLs for use in CSS
export const fonts = {
  AmsterdamHandwritingOtf,
  AmsterdamHandwritingTtf,
  GeorgiaRegular,
  GeorgiaBold,
  GeorgiaItalic,
  GeorgiaBoldItalic,
  DMSerifTextRegular,
  DMSerifTextItalic,
};

// Create CSS font-face declarations dynamically
const createFontFaces = () => {
  const fontStyles = `
    @font-face {
      font-family: 'Amsterdam Handwriting';
      src: url('${AmsterdamHandwritingOtf}') format('opentype'),
           url('${AmsterdamHandwritingTtf}') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'Georgia';
      src: url('${GeorgiaRegular}') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'Georgia';
      src: url('${GeorgiaBold}') format('truetype');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'Georgia';
      src: url('${GeorgiaItalic}') format('truetype');
      font-weight: normal;
      font-style: italic;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'Georgia';
      src: url('${GeorgiaBoldItalic}') format('truetype');
      font-weight: bold;
      font-style: italic;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'DM Serif Text';
      src: url('${DMSerifTextRegular}') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'DM Serif Text';
      src: url('${DMSerifTextItalic}') format('truetype');
      font-weight: normal;
      font-style: italic;
      font-display: swap;
    }
  `;
  
  // Inject styles into document head
  const styleEl = document.createElement('style');
  styleEl.textContent = fontStyles;
  document.head.appendChild(styleEl);
};

// Initialize fonts when module loads
if (typeof document !== 'undefined') {
  createFontFaces();
}