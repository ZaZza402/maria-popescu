import { Link } from 'react-router-dom';

/*
 * Footer Brand Section CSS Variables for Size Control:
 * 
 * --footer-brand-gap: Gap between logo and text (default: 12px)
 * --footer-logo-size: Logo width and height (default: 32px)
 * --footer-name-size: "Maria Popescu" font size (default: 1.125rem)
 * --footer-name-line-height: Name line height (default: 1.4)
 * --footer-subtitle-size: "Psiholog Clinician" font size (default: 0.75rem)
 * --footer-subtitle-spacing: Subtitle letter spacing (default: 0.1em)
 * 
 * Usage: Add these CSS variables to your global CSS or component styles
 * Example: :root { --footer-logo-size: 40px; --footer-name-size: 1.25rem; }
 */

const Footer = () => {
  return (
    <footer className="bg-stone-50 border-t border-brand-accent/30 py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="./assets/logo-complete.png" 
                alt="Maria Popescu Psychology Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-brand-text/80 text-sm leading-relaxed">
              Suport profesional și empatic pentru dezvoltarea personală și bunăstarea emoțională.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-brand-primary mb-4 text-sm uppercase tracking-wide">
              Navigare Rapidă
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-brand-text/80 hover:text-brand-accent transition-colors">
                  Acasă
                </Link>
              </li>
              <li>
                <Link to="/despre" className="text-brand-text/80 hover:text-brand-accent transition-colors">
                  Despre Mine
                </Link>
              </li>
              <li>
                <Link to="/servicii" className="text-brand-text/80 hover:text-brand-accent transition-colors">
                  Servicii
                </Link>
              </li>
              <li>
                <Link to="/articole" className="text-brand-text/80 hover:text-brand-accent transition-colors">
                  Articole
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-brand-primary mb-4 text-sm uppercase tracking-wide">
              Servicii Principale
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="text-brand-text/80">Psihoterapie Individuală</li>
              <li className="text-brand-text/80">Consiliere Psihologică</li>
              <li className="text-brand-text/80">Evaluări Psihologice</li>
              <li className="text-brand-text/80">Terapie ABA</li>
              <li className="text-brand-text/80">Psihoterapie de Cuplu</li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="font-semibold text-brand-primary mb-4 text-sm uppercase tracking-wide">
              Contact & Informații
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+40772246316" className="flex items-center gap-3 whitespace-nowrap text-brand-text/80 hover:text-brand-accent transition-colors">
                  <span className="flex w-5 h-5 items-center justify-center text-brand-accent" aria-hidden>
                    <i className="fas fa-phone text-[18px] leading-none"></i>
                  </span>
                  <span className="leading-none translate-y-[1px]">+40 (772) 246 316</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/40772246316" className="flex items-center gap-3 whitespace-nowrap text-brand-text/80 hover:text-brand-accent transition-colors">
                  <span className="flex w-5 h-5 items-center justify-center text-brand-accent" aria-hidden>
                    <i className="fab fa-whatsapp text-[18px] leading-none"></i>
                  </span>
                  <span className="leading-none translate-y-[1px]">WhatsApp</span>
                </a>
              </li>
              <li className="mt-4 pt-2 border-t border-brand-accent/20">
                <Link to="/privacy" className="text-brand-text/70 hover:text-brand-accent transition-colors text-xs">
                  Politica de Confidențialitate
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-accent/30 mt-8 pt-6 text-center">
          <p className="text-brand-text/70 text-sm">
            &copy; {new Date().getFullYear()} Maria Popescu - Psiholog Clinician. Toate drepturile rezervate.
          </p>
          <p className="text-brand-text/60 text-xs mt-2">
            Designed By{' '}
            <a 
              href="https://www.axiomweb.eu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-accent hover:text-brand-primary transition-colors font-medium"
            >
              Alex M.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;