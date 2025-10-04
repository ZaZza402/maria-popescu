import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const DesprePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen"
    >
      {/* Hero Section with Professional Photo */}
      <section className="relative bg-gradient-to-br from-brand-light to-white py-16 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo Section */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-96 lg:w-96 lg:h-[480px] bg-gradient-to-br from-brand-accent to-brand-primary rounded-2xl shadow-soft overflow-hidden">
                  <img 
                    src="./assets/female_portrait.jpg" 
                    alt="Maria Popescu - Psiholog Clinician"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-accent/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-primary/20 rounded-full blur-xl"></div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl lg:text-6xl mb-4">
                <span className="text-brand-accent font-light" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>Maria </span>
                <span className="text-brand-accent font-light" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>Popescu</span>
              </h1>
              <div className="text-lg text-gray-600 font-medium uppercase tracking-[0.2em] mb-6" style={{fontFamily: 'Inter, sans-serif'}}>
                PSIHOLOG CLINICIAN
              </div>
              <div className="text-lg text-brand-text/80 mb-8">
                Psihoterapeut Cognitiv-Comportamental
              </div>
              <p className="text-lg text-brand-text/80 mb-8 leading-relaxed">
                Sunt psiholog clinician și psihoterapeut cognitiv-comportamental, cu o vastă experiență 
                în lucrul cu copii și adulți. Îmi doresc să creez un spațiu sigur, cald și confidențial, 
                unde fiecare persoană să se simtă ascultată și înțeleasă.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="px-10 py-4 bg-brand-accent text-white hover:bg-brand-primary hover:shadow-xl hover:scale-[1.02] rounded-lg font-bold text-center transition-all duration-300 shadow-lg text-lg"
                >
                  Programează Consultație →
                </Link>
                <Link 
                  to="/servicii" 
                  className="px-6 py-3 border border-brand-accent/60 text-brand-primary hover:border-brand-accent hover:text-brand-accent rounded-lg font-medium text-center transition-colors text-sm"
                >
                  Vezi Serviciile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-brand-light to-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif text-brand-primary mb-4">
              Despre Mine
            </h2>
            <p className="text-lg text-brand-text/80 max-w-2xl mx-auto">
              Experiență și dedicare în psihologia clinică și psihoterapie
            </p>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 lg:p-12 shadow-lg border-2 border-brand-accent/20">
            <div className="space-y-6 text-brand-text leading-relaxed text-lg">
              <p>
                Sunt psiholog clinician și psihoterapeut cognitiv-comportamental, cu o vastă experiență 
                în lucrul cu copii și adulți în domeniul evaluării psihologice. Îmi doresc să creez un 
                spațiu sigur, cald și confidențial, unde fiecare persoană să se simtă ascultată și înțeleasă.
              </p>
              <p>
                Sunt dedicată sprijinirii clienților în explorarea emoțiilor, descoperirea de sine și 
                dezvoltarea unor modalități sănătoase de a face față provocărilor vieții, cum ar fi 
                anxietatea, depresia sau tulburările de alimentație. Obiectivul meu este să ofer suport 
                empatic și să contribui la redescoperirea echilibrului și a resurselor interioare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Formation Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif text-brand-primary mb-4">
              Formare și Pregătire Profesională
            </h2>
            <p className="text-lg text-brand-text/80 max-w-2xl mx-auto">
              Parcursul meu educațional și profesional în psihologie
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-brand-light to-white rounded-xl p-8 lg:p-12 shadow-lg border border-brand-accent/20">
            <div className="space-y-6 text-brand-text leading-relaxed text-lg">
              <p>
                Întotdeauna m-a fascinat felul în care gândim, simțim și ne construim relațiile. 
                Alegerea Facultății de Psihologie a venit din dorința de a înțelege mai profund 
                lumea interioară a oamenilor și de a-i sprijini atunci când trec prin momente dificile. 
                Pentru mine, psihologia este mai mult decât o profesie – este o cale de a combina 
                știința cu empatia, pentru a aduce schimbări pozitive în viața celor din jur.
              </p>
              <p>
                Această căutare m-a condus către un Master în Psihologia Sănătății, Cercetare Clinică 
                și Optimizare Comportamentală la Universitatea din București, unde am descoperit cât de 
                important este să privim omul în întregimea lui – cu gânduri, emoții, comportamente și 
                nevoi unice.
              </p>
              <p>
                Ulterior, am ales să urmez formarea în psihoterapie cognitiv-comportamentală (CBT), 
                o abordare terapeutică susținută de dovezi științifice, cunoscută pentru eficiența sa 
                în înțelegerea și schimbarea tiparelor de gândire și comportament care pot provoca 
                suferință. Prin intermediul acestei metode, oamenii învață să își recunoască 
                dificultățile emoționale și să dezvolte, pas cu pas, strategii sănătoase și adaptate 
                nevoilor lor, pentru a duce o viață mai echilibrată.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach & Philosophy Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-brand-light to-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif text-brand-primary mb-4">
              Abordarea Mea Terapeutică
            </h2>
            <p className="text-lg text-brand-text/80 max-w-2xl mx-auto">
              Principii și specialități în psihoterapie
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border-2 border-brand-accent/20">
              <h3 className="text-xl font-bold text-brand-primary mb-4 flex items-center">
                <i className="fas fa-heart text-brand-accent mr-3"></i>
                Principii Fundamentale
              </h3>
              <ul className="space-y-3 text-brand-text">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-accent mt-1 mr-3"></i>
                  <span>Empatie și înțelegere necondiționată</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-accent mt-1 mr-3"></i>
                  <span>Mediu sigur și confidențial</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-accent mt-1 mr-3"></i>
                  <span>Abordare personalizată pentru fiecare client</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-accent mt-1 mr-3"></i>
                  <span>Colaborare activă în procesul terapeutic</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-brand-accent/10 backdrop-blur-sm p-6 rounded-xl border-2 border-brand-accent shadow-lg">
              <h3 className="text-xl font-bold text-brand-primary mb-4 flex items-center">
                <i className="fas fa-brain text-brand-accent mr-3"></i>
                Specialități
              </h3>
              <ul className="space-y-3 text-brand-primary font-medium">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-accent mt-1 mr-3"></i>
                  <span>Terapia cognitiv-comportamentală (CBT)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-accent mt-1 mr-3"></i>
                  <span>Evaluări psihologice complete</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-accent mt-1 mr-3"></i>
                  <span>Terapie pentru cerințe educaționale speciale</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-accent mt-1 mr-3"></i>
                  <span>Interventii ABA pentru dezvoltare</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 lg:py-20 bg-slate-800 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif mb-6 text-white">
            Să Începem Împreună Această Călătorie
          </h2>
          <p className="text-lg lg:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Fiecare pas către schimbare contează. Sunt aici să te însoțesc cu răbdare, 
            empatie și profesionalism în drumul tău către echilibru și dezvoltare personală.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-slate-800 hover:bg-gray-50 rounded-lg font-semibold transition-colors shadow-lg"
            >
              Contactează-mă pentru Programare
            </Link>
            <Link 
              to="/servicii" 
              className="px-8 py-4 border-2 border-white bg-transparent text-white hover:bg-white hover:text-slate-800 rounded-lg font-semibold transition-colors"
            >
              Vezi Serviciile
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default DesprePage;