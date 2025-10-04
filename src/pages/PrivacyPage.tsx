import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PrivacyPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen bg-gradient-to-br from-brand-light to-white"
    >
      <div className="container mx-auto max-w-4xl px-4 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-primary mb-6">
            Politica de Confidențialitate
          </h1>
          <p className="text-lg text-brand-text/80 max-w-2xl mx-auto">
            Protejarea confidențialității dumneavoastră este o prioritate pentru mine. 
            Această politică explică cum sunt gestionate informațiile personale.
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 lg:p-12 shadow-lg border-2 border-brand-accent/20">
          
          {/* Last Updated */}
          <div className="mb-8 pb-6 border-b border-brand-accent/20">
            <p className="text-sm text-brand-text/60">
              <i className="fas fa-calendar-alt mr-2 text-brand-accent"></i>
              Ultima actualizare: {new Date().toLocaleDateString('ro-RO', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          <div className="space-y-8 text-brand-text leading-relaxed">
            
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-serif text-brand-primary mb-4 flex items-center">
                <i className="fas fa-shield-alt mr-3 text-brand-accent"></i>
                Introducere
              </h2>
              <p>
                Această Politică de Confidențialitate descrie modul în care Maria Popescu, psiholog clinician, 
                colectează, utilizează și protejează informațiile personale ale clienților și vizitatorilor 
                website-ului. Respectarea confidențialității este fundamentală în practica psihologică.
              </p>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="text-2xl font-serif text-brand-primary mb-4 flex items-center">
                <i className="fas fa-database mr-3 text-brand-accent"></i>
                Colectarea Informațiilor
              </h2>
              <div className="bg-brand-accent/10 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-brand-primary mb-2">Informații pe care le colectez:</h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Informații de contact (nume, telefon, email) - doar prin contactare directă</li>
                  <li>Informații medicale și psihologice - doar în cadrul consultațiilor</li>
                  <li>Informații tehnice de bază despre vizitarea website-ului (fără cookies)</li>
                </ul>
              </div>
              <p>
                <strong>Important:</strong> Acest website NU utilizează cookies și NU colectează automat 
                date personale. Informațiile sunt furnizate voluntar doar prin contactare directă.
              </p>
            </section>

            {/* Data Usage */}
            <section>
              <h2 className="text-2xl font-serif text-brand-primary mb-4 flex items-center">
                <i className="fas fa-user-shield mr-3 text-brand-accent"></i>
                Utilizarea Informațiilor
              </h2>
              <p>Informațiile personale sunt utilizate exclusiv pentru:</p>
              <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                <li>Furnizarea serviciilor psihologice solicitate</li>
                <li>Comunicarea legată de programări și consultații</li>
                <li>Respectarea obligațiilor legale și profesionale</li>
                <li>Îmbunătățirea calității serviciilor oferite</li>
              </ul>
            </section>

            {/* Data Protection */}
            <section>
              <h2 className="text-2xl font-serif text-brand-primary mb-4 flex items-center">
                <i className="fas fa-lock mr-3 text-brand-accent"></i>
                Protejarea Datelor
              </h2>
              <div className="space-y-4">
                <p>
                  Toate informațiile personale sunt protejate prin măsuri de securitate adecvate, 
                  incluzând stocare securizată și acces restricționat. Dosarele medicale sunt păstrate 
                  conform reglementărilor Colegiului Psihologilor din România.
                </p>
                <div className="bg-brand-primary/10 p-4 rounded-lg">
                  <p className="text-sm">
                    <i className="fas fa-info-circle mr-2 text-brand-primary"></i>
                    <strong>Confidențialitatea profesională:</strong> Toate informațiile împărtășite 
                    în cadrul consultațiilor sunt strict confidențiale, conform Codului Deontologic 
                    al Psihologilor.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-2xl font-serif text-brand-primary mb-4 flex items-center">
                <i className="fas fa-share-alt mr-3 text-brand-accent"></i>
                Partajarea Informațiilor
              </h2>
              <p>
                Informațiile personale <strong>nu sunt partajate</strong> cu terțe părți, cu excepția 
                situațiilor în care:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                <li>Există consimțământul explicit al clientului</li>
                <li>Legea impune divulgarea (de exemplu, în cazuri de pericol iminent)</li>
                <li>Este necesar pentru colaborarea cu alți profesioniști din sănătate (cu acordul clientului)</li>
              </ul>
            </section>

            {/* Rights */}
            <section>
              <h2 className="text-2xl font-serif text-brand-primary mb-4 flex items-center">
                <i className="fas fa-balance-scale mr-3 text-brand-accent"></i>
                Drepturile Dumneavoastră
              </h2>
              <p>Conform GDPR, aveți următoarele drepturi:</p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-brand-accent/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-brand-primary mb-2">Drepturi de acces:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Accesul la informațiile personale</li>
                    <li>• Rectificarea datelor inexacte</li>
                    <li>• Ștergerea datelor (dreptul la uitare)</li>
                  </ul>
                </div>
                <div className="bg-brand-accent/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-brand-primary mb-2">Drepturi de control:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Portabilitatea datelor</li>
                    <li>• Restricționarea prelucrării</li>
                    <li>• Opunerea la prelucrare</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-serif text-brand-primary mb-4 flex items-center">
                <i className="fas fa-envelope mr-3 text-brand-accent"></i>
                Contact pentru Aspecte de Confidențialitate
              </h2>
              <div className="bg-brand-accent/10 p-6 rounded-lg">
                <p className="mb-4">
                  Pentru întrebări despre această politică sau pentru exercitarea drepturilor dumneavoastră:
                </p>
                <div className="space-y-2">
                  <p>
                    <i className="fas fa-user mr-2 text-brand-accent"></i>
                    <strong>Maria Popescu</strong> - Psiholog Clinician
                  </p>
                  <p>
                    <i className="fas fa-phone mr-2 text-brand-accent"></i>
                    <a href="tel:+40712345678" className="text-brand-accent hover:underline">
                      +40 712 345 678
                    </a>
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-2 text-brand-accent"></i>
                    <a href="mailto:maria.popescu@psiholog.ro" className="text-brand-accent hover:underline">
                      maria.popescu@psiholog.ro
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* Updates */}
            <section>
              <h2 className="text-2xl font-serif text-brand-primary mb-4 flex items-center">
                <i className="fas fa-sync-alt mr-3 text-brand-accent"></i>
                Actualizări ale Politicii
              </h2>
              <p>
                Această politică poate fi actualizată periodic pentru a reflecta modificările în 
                practică sau în legislație. Ultima versiune va fi întotdeauna disponibilă pe acest website.
              </p>
            </section>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12 pt-8 border-t border-brand-accent/20">
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-brand-accent text-white hover:bg-brand-primary rounded-lg font-semibold transition-colors shadow-md"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Înapoi la Pagina Principală
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPage;