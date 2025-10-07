import React from 'react';
import { motion } from 'framer-motion';

const ArticolePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen bg-gradient-to-br from-brand-light to-white"
    >
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-primary mb-6">
            Articole de Specialitate
          </h1>
          <p className="text-lg text-brand-text/80 max-w-2xl mx-auto">
            Găsiți aici articole și resurse utile despre sănătate mentală, 
            tehnici de gestionare a stresului și dezvoltare personală.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Article 1 */}
          <article className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border-2 border-brand-accent/20 hover:scale-[1.02] transition-all duration-300">
            <div className="h-48 bg-gradient-to-br from-brand-accent to-brand-primary"></div>
            <div className="p-6">
              <h3 className="text-xl font-serif text-brand-primary mb-3 font-bold">
                Cum să gestionezi anxietatea în viața de zi cu zi
              </h3>
              <p className="text-brand-text mb-4">
                Descoperă tehnici practice pentru reducerea anxietății și 
                îmbunătățirea calității vieții tale.
              </p>
              <span className="text-sm text-brand-accent font-medium">15 August 2025</span>
            </div>
          </article>

          {/* Article 2 */}
          <article className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border-2 border-brand-accent/20 hover:scale-[1.02] transition-all duration-300">
            <div className="h-48 bg-gradient-to-br from-brand-primary to-brand-accent"></div>
            <div className="p-6">
              <h3 className="text-xl font-serif text-brand-primary mb-3 font-bold">
                Importanța autoingrjirii în menținerea echilibrului
              </h3>
              <p className="text-brand-text mb-4">
                Învață să îți acorzi timpul și atenția necesare pentru 
                menținerea sănătății mentale.
              </p>
              <span className="text-sm text-brand-accent font-medium">8 Septembrie 2025</span>
            </div>
          </article>

          {/* Article 3 */}
          <article className="bg-white rounded-lg shadow-soft overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-brand-accent to-brand-primary"></div>
            <div className="p-6">
              <h3 className="text-xl font-serif text-brand-primary mb-3">
                Tehnici de comunicare în relațiile interpersonale
              </h3>
              <p className="text-brand-text/70 mb-4">
                Îmbunătățește-ți relațiile prin dezvoltarea abilităților 
                de comunicare eficientă.
              </p>
              <span className="text-sm text-brand-accent">2 Octombrie 2025</span>
            </div>
          </article>

          {/* Article 4 */}
          <article className="bg-white rounded-lg shadow-soft overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-brand-primary to-brand-accent"></div>
            <div className="p-6">
              <h3 className="text-xl font-serif text-brand-primary mb-3">
                Mindfulness: Practici pentru prezentul aici și acum
              </h3>
              <p className="text-brand-text/70 mb-4">
                Explorează beneficiile mindfulness-ului și cum să îl 
                integrezi în rutina ta zilnică.
              </p>
              <span className="text-sm text-brand-accent">28 decembrie 2025</span>
            </div>
          </article>
        </div>

        <div className="text-center mt-12">
          <p className="text-brand-text/70 mb-6">
            Vrei să primești cele mai noi articole direct în inbox?
          </p>
          <button className="px-6 py-3 bg-brand-accent text-white rounded-lg shadow-soft hover:opacity-90 transition">
            Abonează-te la Newsletter
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticolePage;