import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-brand-light to-white border-t border-brand-accent/20 py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/assets/leaves-logo.svg" 
                alt="Maria Popescu Psychology Logo" 
                className="w-8 h-8"
              />
              <div>
                <h3 className="text-brand-accent font-semibold" style={{fontFamily: 'Dancing Script, cursive'}}>
                  Maria Popescu
                </h3>
                <p className="text-brand-primary text-xs uppercase tracking-wide">
                  Psiholog Clinician
                </p>
              </div>
            </div>
            <p className="text-brand-text/80 text-sm leading-relaxed mb-4">
              Suport profesional și empatic pentru dezvoltarea personală și bunăstarea emoțională.
            </p>
            <div className="flex items-center gap-2 text-brand-accent">
              <i className="fas fa-phone text-sm"></i>
              <a href="tel:+40712345678" className="hover:text-brand-primary transition-colors">
                +40 712 345 678
              </a>
            </div>
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
              <li>
                <Link to="/contact" className="text-brand-text/80 hover:text-brand-accent transition-colors">
                  Contact
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
            <ul className="space-y-2 text-sm">
              <li className="text-brand-text/80">
                <i className="fas fa-envelope mr-2 text-brand-accent"></i>
                <a href="mailto:maria.popescu@psiholog.ro" className="hover:text-brand-accent transition-colors">
                  maria.popescu@psiholog.ro
                </a>
              </li>
              <li className="text-brand-text/80">
                <i className="fas fa-clock mr-2 text-brand-accent"></i>
                Lun-Vin: 09:00-18:00
              </li>
              <li className="text-brand-text/80">
                <i className="fas fa-clock mr-2 text-brand-accent"></i>
                Sâm: 09:00-14:00
              </li>
              <li className="mt-4">
                <Link to="/privacy" className="text-brand-text/80 hover:text-brand-accent transition-colors text-xs">
                  Politica de Confidențialitate
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-accent/20 mt-8 pt-6 text-center">
          <p className="text-brand-text/60 text-sm">
            &copy; {new Date().getFullYear()} Maria Popescu - Psiholog Clinician. Toate drepturile rezervate.
          </p>
          <p className="text-brand-text/50 text-xs mt-2">
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