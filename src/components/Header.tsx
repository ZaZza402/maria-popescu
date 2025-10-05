import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Helper function to check if a route is active
  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-brand-bg/90 backdrop-blur border-b border-brand-accent/10">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo Section - Enhanced with better spacing and typography */}
          <Link 
            to="/" 
            className="group focus:outline-none"
            style={{ outline: 'none', boxShadow: 'none' }}
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 flex items-center justify-center">
                <img 
                  src="./assets/leaves-logo.svg" 
                  alt="Maria Popescu Psychology Logo" 
                  className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <div className="block">
                {/* Main Name - Dancing Script for entire name with brand color */}
                <div className="text-brand-accent" style={{fontFamily: 'Dancing Script, cursive', fontSize: '2em'}}>
                  Maria Popescu
                </div>
                
                {/* Subtitle - smaller, more structured */}
                <div className="text-[#6B7280] text-[8px] font-medium uppercase tracking-[0.2em] mt-0.5" style={{fontFamily: 'Inter, sans-serif'}}>
                  Psiholog Clinician
                </div>
              </div>
            </div>
          </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link
            to="/"
            className={`transition-colors hover:text-brand-accent ${
              isActiveRoute('/') ? 'text-brand-accent font-medium' : 'text-brand-text'
            }`}
            style={{ outline: 'none', boxShadow: 'none' }}
          >
            Acasă
          </Link>
          <Link
            to="/despre"
            className={`transition-colors hover:text-brand-accent ${
              isActiveRoute('/despre') ? 'text-brand-accent font-medium' : 'text-brand-text'
            }`}
            style={{ outline: 'none', boxShadow: 'none' }}
          >
            Despre Mine
          </Link>
          <Link
            to="/servicii"
            className={`transition-colors hover:text-brand-accent ${
              isActiveRoute('/servicii') ? 'text-brand-accent font-medium' : 'text-brand-text'
            }`}
            style={{ outline: 'none', boxShadow: 'none' }}
          >
            Servicii
          </Link>
          <Link
            to="/articole"
            className={`transition-colors hover:text-brand-accent ${
              isActiveRoute('/articole') ? 'text-brand-accent font-medium' : 'text-brand-text'
            }`}
            style={{ outline: 'none', boxShadow: 'none' }}
          >
            Articole
          </Link>
        </nav>

        {/* Contact Info & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          {/* Phone Number - Enhanced styling */}
          <div className="hidden lg:flex items-center gap-2 text-brand-text">
            <div className="flex items-center justify-center w-8 h-8 bg-brand-accent/10 rounded-full">
              <i className="fas fa-phone text-xs text-brand-accent"></i>
            </div>
            <a 
              href="tel:+40722123456" 
              className="text-sm font-medium hover:text-brand-accent transition-colors"
              style={{ outline: 'none', boxShadow: 'none' }}
            >
              0722 123 456
            </a>
          </div>

          {/* CTA Button */}
          <Link 
            to="/contact" 
            className="hidden md:flex items-center gap-2 bg-brand-accent text-white px-6 py-3 rounded-lg hover:bg-brand-accent/90 transition-all duration-200 text-sm font-medium"
            style={{ outline: 'none', boxShadow: 'none' }}
          >
            <i className="fas fa-calendar-check text-xs"></i>
            Programează-te
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-brand-text hover:text-brand-accent transition-colors focus:outline-none"
            style={{ outline: 'none !important', boxShadow: 'none !important', border: 'none !important' }}
          >
            <svg 
              className={`w-6 h-6 transform transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </div>
      </div>
      
      {/* Full-Screen Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            backgroundColor: '#F8F5F0', 
            zIndex: 9999, 
            display: 'flex', 
            flexDirection: 'column', 
            height: '100vh',
            width: '100vw',
            transform: 'translateX(0)',
            transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            animation: 'slideInFromRight 0.5s ease-out forwards'
          }}
        >
          {/* Close Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ 
              position: 'absolute', 
              top: '16px', 
              right: '16px', 
              padding: '8px', 
              backgroundColor: 'transparent', 
              border: 'none', 
              outline: 'none', 
              boxShadow: 'none', 
              zIndex: 10000, 
              color: '#2A1810',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: 'scale(1)',
              opacity: '0',
              animation: 'fadeInScale 0.6s ease 0.2s forwards'
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Menu Header */}
          <div style={{ 
            paddingTop: '60px', 
            paddingBottom: '20px', 
            paddingLeft: '24px', 
            paddingRight: '24px', 
            textAlign: 'center'
          }}>
            <div style={{ marginBottom: '16px' }}>
              <img 
                src="./assets/leaves-logo.svg" 
                alt="Maria Popescu Psychology Logo" 
                style={{ 
                  width: '60px',
                  height: '60px',
                  margin: '0 auto', 
                  display: 'block'
                }}
              />
            </div>
          </div>

          {/* Navigation Menu */}
          <nav style={{ paddingLeft: '24px', paddingRight: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
              <Link 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ 
                  display: 'block', 
                  padding: '12px 20px', 
                  fontSize: '18px', 
                  fontWeight: '500', 
                  color: '#2A1810', 
                  textAlign: 'center', 
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  opacity: '0',
                  animation: 'fadeInUp 0.5s ease 0.7s forwards',
                  transform: 'translateY(20px)'
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#C2A678';
                  target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#2A1810';
                  target.style.transform = 'translateY(0px)';
                }}
              >
                Acasă
              </Link>
              <Link 
                to="/despre" 
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ 
                  display: 'block', 
                  padding: '16px 20px', 
                  fontSize: '18px', 
                  fontWeight: '500', 
                  color: '#2A1810', 
                  textAlign: 'center', 
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  opacity: '0',
                  animation: 'fadeInUp 0.5s ease 0.8s forwards',
                  transform: 'translateY(20px)'
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#C2A678';
                  target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#2A1810';
                  target.style.transform = 'translateY(0px)';
                }}
              >
                Despre Mine
              </Link>
              <Link 
                to="/servicii" 
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ 
                  display: 'block', 
                  padding: '16px 20px', 
                  fontSize: '18px', 
                  fontWeight: '500', 
                  color: '#2A1810', 
                  textAlign: 'center', 
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  opacity: '0',
                  animation: 'fadeInUp 0.5s ease 0.9s forwards',
                  transform: 'translateY(20px)'
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#C2A678';
                  target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#2A1810';
                  target.style.transform = 'translateY(0px)';
                }}
              >
                Servicii
              </Link>
              <Link 
                to="/articole" 
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ 
                  display: 'block', 
                  padding: '16px 20px', 
                  fontSize: '18px', 
                  fontWeight: '500', 
                  color: '#2A1810', 
                  textAlign: 'center', 
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  opacity: '0',
                  animation: 'fadeInUp 0.5s ease 1.0s forwards',
                  transform: 'translateY(20px)'
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#C2A678';
                  target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#2A1810';
                  target.style.transform = 'translateY(0px)';
                }}
              >
                Articole
              </Link>
              
              {/* Contact CTA with improved spacing */}
              <div style={{ paddingTop: '32px' }}>
                <Link 
                  to="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ 
                    display: 'block', 
                    padding: '14px 24px', 
                    backgroundColor: '#C2A678', 
                    color: 'white', 
                    fontSize: '18px', 
                    fontWeight: '600', 
                    borderRadius: '10px', 
                    textAlign: 'center', 
                    textDecoration: 'none',
                    boxShadow: '0 8px 12px -3px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.4s ease',
                    opacity: '0',
                    animation: 'smoothZoomIn 0.8s ease 1.35s forwards',
                    transform: 'scale(0.8)'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = '#1F3C4D';
                    target.style.transform = 'translateY(-4px) scale(1.02)';
                    target.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = '#C2A678';
                    target.style.transform = 'translateY(0px) scale(1)';
                    target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  Contactează-mă
                </Link>
              </div>
            </div>
          </nav>

          {/* Footer Quote - Written directly on menu background */}
          <div style={{ 
            paddingLeft: '24px', 
            paddingRight: '24px', 
            paddingBottom: '20px', 
            paddingTop: '12px',
            textAlign: 'center'
          }}>
            <blockquote style={{ 
              color: '#2A1810', 
              fontSize: '13px', 
              fontStyle: 'italic', 
              marginBottom: '8px', 
              lineHeight: '1.4',
              opacity: '0',
              animation: 'slideInQuoteFromRight 0.8s ease 1.5s forwards',
              transform: 'translateX(30px)'
            }}>
              "Fiecare pas către vindecare este un act de curaj. Să nu uiți că nu ești singur în această călătorie."
            </blockquote>
            <div style={{ 
              color: '#C2A678', 
              fontSize: '24px', 
              fontFamily: 'Dancing Script, cursive', 
              marginBottom: '8px',
              opacity: '0',
              animation: 'slideInFromLeft 0.7s ease 1.7s forwards',
              transform: 'translateX(-30px)'
            }}>
              Maria Popescu
            </div>
            <div style={{ 
              fontSize: '12px', 
              color: 'rgba(42, 24, 16, 0.6)',
              opacity: '0',
              animation: 'smoothZoomIn 0.6s ease 1.9s forwards',
              transform: 'scale(0.8)',
              lineHeight: '1.4'
            }}>
              © {new Date().getFullYear()} Toate drepturile rezervate
              <br />
              <span style={{ fontSize: '10px', marginTop: '2px', display: 'inline-block' }}>
                Designed By{' '}
                <a 
                  href="https://www.axiomweb.eu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    color: '#C2A678', 
                    textDecoration: 'none',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.color = '#1F3C4D';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.color = '#C2A678';
                  }}
                >
                  Alex M.
                </a>
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;