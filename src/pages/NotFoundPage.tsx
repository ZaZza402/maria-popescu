import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFoundPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen bg-gradient-to-br from-brand-light to-white flex items-center"
    >
      <div className="container mx-auto max-w-4xl px-4 py-12 text-center">
        
        {/* Logo Section */}
        <div className="mb-8">
          <img 
            src="/assets/leaves-logo.svg" 
            alt="Maria Popescu Psychology Logo" 
            className="w-16 h-16 mx-auto mb-4 opacity-60"
          />
        </div>

        {/* Error Content */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-12 shadow-lg border-2 border-brand-accent/20 max-w-2xl mx-auto">
          
          {/* 404 Number */}
          <div className="text-8xl font-serif text-brand-accent/30 mb-6">
            404
          </div>

          {/* Main Message */}
          <h1 className="text-3xl md:text-4xl font-serif text-brand-primary mb-4">
            Pagina nu a fost găsită
          </h1>
          
          <p className="text-lg text-brand-text/80 mb-8 leading-relaxed">
            Se pare că pagina pe care o căutați nu există sau a fost mutată. 
            Nu vă faceți griji - vă pot ghida către informațiile de care aveți nevoie.
          </p>

          {/* Helpful Quote */}
          <div className="bg-brand-accent/10 rounded-lg p-6 mb-8 border-l-4 border-brand-accent">
            <blockquote className="text-brand-primary italic">
              "Uneori, calea către destinație ne învață mai mult decât destinația însăși."
            </blockquote>
            <cite className="block mt-2 text-sm text-brand-accent font-medium">
              — Reflecție terapeutică
            </cite>
          </div>

          {/* Navigation Options */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-primary mb-4">
              Unde doriți să mergeți?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {/* Primary Actions */}
              <Link 
                to="/" 
                className="flex items-center justify-center px-6 py-3 bg-brand-accent text-white hover:bg-brand-primary rounded-lg font-semibold transition-colors shadow-md"
              >
                <i className="fas fa-home mr-2"></i>
                Pagina Principală
              </Link>
              
              <Link 
                to="/contact" 
                className="flex items-center justify-center px-6 py-3 border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white rounded-lg font-semibold transition-colors"
              >
                <i className="fas fa-phone mr-2"></i>
                Contactează-mă
              </Link>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
              <Link 
                to="/despre" 
                className="text-brand-text/80 hover:text-brand-accent transition-colors text-sm py-2"
              >
                <i className="fas fa-user-circle mr-1"></i>
                Despre Mine
              </Link>
              
              <Link 
                to="/servicii" 
                className="text-brand-text/80 hover:text-brand-accent transition-colors text-sm py-2"
              >
                <i className="fas fa-heartbeat mr-1"></i>
                Servicii
              </Link>
              
              <Link 
                to="/articole" 
                className="text-brand-text/80 hover:text-brand-accent transition-colors text-sm py-2"
              >
                <i className="fas fa-book-open mr-1"></i>
                Articole
              </Link>
              
              <Link 
                to="/faq" 
                className="text-brand-text/80 hover:text-brand-accent transition-colors text-sm py-2"
              >
                <i className="fas fa-question-circle mr-1"></i>
                Întrebări
              </Link>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="mt-8 pt-6 border-t border-brand-accent/20">
            <h4 className="text-brand-primary font-semibold mb-3">
              Aveți nevoie de sprijin urgent?
            </h4>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a 
                href="tel:+40712345678" 
                className="flex items-center text-brand-accent hover:text-brand-primary transition-colors font-medium"
              >
                <i className="fas fa-phone mr-2"></i>
                +40 712 345 678
              </a>
              <span className="hidden sm:block text-brand-text/40">•</span>
              <a 
                href="mailto:maria.popescu@psiholog.ro" 
                className="flex items-center text-brand-accent hover:text-brand-primary transition-colors font-medium"
              >
                <i className="fas fa-envelope mr-2"></i>
                maria.popescu@psiholog.ro
              </a>
            </div>
          </div>

          {/* Browser Back Option */}
          <div className="mt-6">
            <button 
              onClick={() => window.history.back()}
              className="text-brand-text/60 hover:text-brand-accent transition-colors text-sm"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Întoarce-te la pagina anterioară
            </button>
          </div>
        </div>

        {/* Additional Help */}
        <div className="mt-8 text-center">
          <p className="text-brand-text/60 text-sm">
            Dacă întâmpinați în continuare probleme, nu ezitați să mă contactați direct.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;