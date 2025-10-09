// Font imports for proper bundling
import AmsterdamHandwritingOtf from '../fonts/fonts/AmsterdamhandwritingRegular-6Y1Vo.otf';
import AmsterdamHandwritingTtf from '../fonts/fonts/AmsterdamHandwriting-ywgW2.ttf';
import GeorgiaRegular from '../fonts/fonts/georgia.ttf';
import GeorgiaBold from '../fonts/fonts/georgiab.ttf';
import GeorgiaItalic from '../fonts/fonts/georgiai.ttf';
import GeorgiaBoldItalic from '../fonts/fonts/georgiaz.ttf';
import DMSerifTextRegular from '../fonts/fonts/DMSerifText-Regular.ttf';
import DMSerifTextItalic from '../fonts/fonts/DMSerifText-Italic.ttf';

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