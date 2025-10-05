import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
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
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl lg:text-6xl mb-4">
                <span className="text-brand-accent font-light" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>Maria </span>
                <span className="text-brand-accent font-light" style={{fontFamily: 'Playfair Display, Georgia, serif'}}>Popescu</span>
              </h1>
              <div className="text-lg text-gray-600 font-medium uppercase tracking-[0.2em] mb-6" style={{fontFamily: 'Inter, sans-serif'}}>
                PSIHOLOG
              </div>
              <div className="text-lg text-brand-text/80 mb-8">
                Psihoterapeut și Specialist în Dezvoltare Personală
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
                  to="/despre" 
                  className="px-6 py-3 border border-brand-accent/60 text-brand-primary hover:border-brand-accent hover:text-brand-accent rounded-lg font-medium text-center transition-colors text-sm"
                >
                  Despre Mine
                </Link>
              </div>
            </div>
            
            {/* Professional Photo */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-96 lg:w-96 lg:h-[480px] bg-gradient-to-br from-brand-accent to-brand-primary rounded-2xl shadow-soft overflow-hidden">
                  <img 
                    src="./assets/female_portrait.jpg" 
                    alt="Maria Popescu - Psiholog și Psihoterapeut"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-accent/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-primary/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-brand-light to-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif text-brand-primary mb-4">
              Servicii de Psihoterapie
            </h2>
            <p className="text-lg text-brand-text/80 max-w-2xl mx-auto">
              Oferim suport specializat adaptat nevoilor tale individuale
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Psihoterapie Individuală */}
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-out cursor-pointer border-2 border-brand-accent/20 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center mr-4 shadow-md">
                  <i className="fas fa-user text-white text-lg"></i>
                </div>
                <h3 className="text-lg font-bold text-brand-primary">
                  Psihoterapie Individuală
                </h3>
              </div>
              <p className="text-brand-text mb-4 text-sm leading-relaxed">
                Ședințe personalizate pentru adulți și copii, inclusiv cei cu cerințe educaționale speciale.
              </p>
              <div className="text-brand-accent font-bold text-base">
                200 RON / 50 min
              </div>
            </div>

            {/* Consiliere Psihologică */}
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-out cursor-pointer border-2 border-brand-accent/20 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center mr-4 shadow-md">
                  <i className="fas fa-comments text-white text-lg"></i>
                </div>
                <h3 className="text-lg font-bold text-brand-primary">
                  Consiliere Psihologică
                </h3>
              </div>
              <p className="text-brand-text mb-4 text-sm leading-relaxed">
                Suport și orientare pentru depășirea dificultăților emoționale și relationale.
              </p>
              <div className="text-brand-accent font-bold text-base">
                150 RON / 50 min
              </div>
            </div>

            {/* Psihoterapie de Cuplu */}
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-out cursor-pointer border-2 border-brand-accent/20 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center mr-4 shadow-md">
                  <i className="fas fa-heart text-white text-lg"></i>
                </div>
                <h3 className="text-lg font-bold text-brand-primary">
                  Psihoterapie de Cuplu
                </h3>
              </div>
              <p className="text-brand-text mb-4 text-sm leading-relaxed">
                Terapie specializată pentru cupluri și familii, îmbunătățirea comunicării și relațiilor.
              </p>
              <div className="text-brand-accent font-bold text-base">
                300 RON / 50 min
              </div>
            </div>

            {/* Evaluări Psihologice */}
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-out cursor-pointer border-2 border-brand-accent/20 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center mr-4 shadow-md">
                  <i className="fas fa-clipboard-list text-white text-lg"></i>
                </div>
                <h3 className="text-lg font-bold text-brand-primary">
                  Evaluări Psihologice
                </h3>
              </div>
              <p className="text-brand-text mb-4 text-sm leading-relaxed">
                Evaluări pentru copii și adulți, inclusiv pentru încadrarea în grad de handicap.
              </p>
              <div className="text-brand-accent font-bold text-base">
                200-300 RON
              </div>
            </div>

            {/* Terapie ABA */}
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-out cursor-pointer border-2 border-brand-accent/20 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center mr-4 shadow-md">
                  <i className="fas fa-puzzle-piece text-white text-lg"></i>
                </div>
                <h3 className="text-lg font-bold text-brand-primary">
                  Terapie ABA
                </h3>
              </div>
              <p className="text-brand-text mb-4 text-sm leading-relaxed">
                Terapie cognitiv-comportamentală aplicată pentru dezvoltarea abilităților.
              </p>
              <div className="text-brand-accent font-bold text-base">
                150 RON / 50 min
              </div>
            </div>

            {/* Specialități */}
            <div className="bg-brand-accent/10 backdrop-blur-sm p-6 rounded-xl border-2 border-brand-accent shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center mr-4 shadow-md">
                  <i className="fas fa-brain text-white text-lg"></i>
                </div>
                <h3 className="text-lg font-bold text-brand-primary">
                  Specialități
                </h3>
              </div>
              <ul className="text-brand-primary font-medium text-sm space-y-2">
                <li>• Anxietate și depresie</li>
                <li>• Tulburări de alimentație</li>
                <li>• Cerințe educaționale speciale</li>
                <li>• Dezvoltare personală</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/servicii" 
              className="px-6 py-3 border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white rounded-lg font-medium transition-all duration-300"
            >
              Vezi Toate Serviciile
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-brand-light to-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif text-brand-primary mb-4">
              Spațiile Noastre
            </h2>
            <p className="text-lg text-brand-text/80 max-w-2xl mx-auto">
              Descoperiți atmosfera caldă și profesională a cabinetului nostru de psihoterapie
            </p>
          </div>
          
          <div className="relative overflow-hidden rounded-xl">
            {/* Image Carousel */}
            <div className="flex transition-transform duration-700 ease-in-out" style={{transform: `translateX(0%)`}}>
              <div className="w-full flex-shrink-0 relative">
                <div className="grid md:grid-cols-3 gap-4 h-96">
                  <div className="relative overflow-hidden rounded-lg group">
                    <img 
                      src="./assets/female_portrait.jpg" 
                      alt="Sala principală de consultații"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <div className="text-white">
                        <h3 className="font-semibold text-lg">Sala de Consultații</h3>
                        <p className="text-sm opacity-90">Spațiu confortabil pentru sesiuni individuale</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-lg group">
                    <img 
                      src="./assets/female_portrait.jpg" 
                      alt="Zona de relaxare"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <div className="text-white">
                        <h3 className="font-semibold text-lg">Zona de Relaxare</h3>
                        <p className="text-sm opacity-90">Spațiu dedicat tehnicilor de relaxare</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-lg group">
                    <img 
                      src="./assets/female_portrait.jpg" 
                      alt="Zona de joacă pentru copii"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <div className="text-white">
                        <h3 className="font-semibold text-lg">Zona pentru Copii</h3>
                        <p className="text-sm opacity-90">Jocuri și activități terapeutice</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              <button className="w-3 h-3 rounded-full bg-white/80 transition-all duration-300"></button>
              <button className="w-3 h-3 rounded-full bg-white/40 hover:bg-white/60 transition-all duration-300"></button>
              <button className="w-3 h-3 rounded-full bg-white/40 hover:bg-white/60 transition-all duration-300"></button>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/galerie" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-brand-accent text-white hover:bg-brand-primary rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            >
              <span>Vezi Galeria Completă</span>
              <i className="fas fa-arrow-right text-sm"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif text-brand-primary mb-4">
              Articole și Resurse
            </h2>
            <p className="text-lg text-brand-text/80 max-w-2xl mx-auto">
              Înformații utile despre sănătate mentală și dezvoltare personală
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Gestionarea Anxietății',
                excerpt: 'Tehnici practice pentru reducerea anxietății în viața de zi cu zi',
                date: '15 Ian 2024'
              },
              {
                title: 'Importanța Autoingrijirii',
                excerpt: 'Cum să îți acorzi timpul necesar pentru menținerea echilibrului',
                date: '8 Ian 2024'
              },
              {
                title: 'Comunicarea Eficientă',
                excerpt: 'Îmbunătățește-ți relațiile prin tehnici de comunicare',
                date: '2 Ian 2024'
              }
            ].map((article, index) => (
              <article key={index} className="bg-gradient-to-br from-brand-light to-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-out cursor-pointer border border-brand-accent/20">
                <div className="h-32 bg-gradient-to-br from-brand-accent to-brand-primary rounded-xl mb-4 shadow-md"></div>
                <h3 className="text-xl font-bold text-brand-primary mb-3">
                  {article.title}
                </h3>
                <p className="text-brand-text mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-brand-accent">{article.date}</span>
                  <button className="text-brand-primary hover:text-brand-accent transition font-medium">
                    Citește mai mult →
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/articole" 
              className="px-6 py-3 border border-brand-accent/60 text-brand-primary hover:border-brand-accent hover:text-brand-accent rounded-lg font-medium transition-colors"
            >
              Vezi Toate Articolele
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-brand-light to-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif text-brand-primary mb-4">
              Locația Cabinetului
            </h2>
            <p className="text-lg text-brand-text/80 max-w-2xl mx-auto">
              Vă aștept într-un spațiu liniștit și confidențial, ușor accesibil din centrul orașului
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Map */}
            <div className="order-2 lg:order-1">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border-2 border-brand-accent/20 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8765674071447!2d26.10209931544068!3d44.43908047910171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff47a77f1b23%3A0x841c8c0b3e7ed3b!2sBucharest%2C%20Romania!5e0!3m2!1sen!2sus!4v1696401234567!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locația Cabinetului de Psihologie Maria Popescu"
                />
              </div>
            </div>

            {/* Location Info */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border-2 border-brand-accent/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center mr-4">
                      <i className="fas fa-map-marker-alt text-white text-lg"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-primary">Adresa Cabinetului</h3>
                      <p className="text-brand-text/80">Ușor accesibil cu mijloacele de transport</p>
                    </div>
                  </div>
                  <div className="text-brand-text space-y-2">
                    <p><strong>Str. Exemplu Nr. 123, Etaj 2</strong></p>
                    <p>Sector 1, București</p>
                    <p>România, 010123</p>
                  </div>
                </div>

                <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border-2 border-brand-accent/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center mr-4">
                      <i className="fas fa-car text-white text-lg"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-primary">Acces și Parcare</h3>
                      <p className="text-brand-text/80">Opțiuni convenabile de transport</p>
                    </div>
                  </div>
                  <ul className="text-brand-text space-y-2">
                    <li className="flex items-center">
                      <i className="fas fa-parking mr-2 text-brand-accent"></i>
                      Parcare gratuită disponibilă
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-bus mr-2 text-brand-accent"></i>
                      Stație transport public la 100m
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-wheelchair mr-2 text-brand-accent"></i>
                      Acces pentru persoane cu mobilitate redusă
                    </li>
                  </ul>
                </div>

                <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border-2 border-brand-accent/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center mr-4">
                      <i className="fas fa-clock text-white text-lg"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-primary">Program de Consultații</h3>
                      <p className="text-brand-text/80">Programări doar cu programare prealabilă</p>
                    </div>
                  </div>
                  <div className="text-brand-text space-y-1">
                    <p><strong>Luni - Vineri:</strong> 09:00 - 18:00</p>
                    <p><strong>Sâmbătă:</strong> 09:00 - 14:00</p>
                    <p><strong>Duminică:</strong> Închis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <div className="bg-brand-accent/10 rounded-xl p-8 border-2 border-brand-accent/20">
              <h3 className="text-2xl font-serif text-brand-primary mb-4">
                Ai nevoie de îndrumare pentru a ajunge?
              </h3>
              <p className="text-brand-text/80 mb-6 max-w-2xl mx-auto">
                Dacă întâmpini dificultăți în găsirea cabinetului sau ai întrebări despre acces, 
                nu ezita să mă contactezi telefonic pentru indicații detaliate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+40712345678" 
                  className="inline-flex items-center px-8 py-3 bg-brand-accent text-white hover:bg-brand-primary rounded-lg font-semibold transition-colors shadow-md"
                >
                  <i className="fas fa-phone mr-2"></i>
                  Sună pentru Indicații
                </a>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-6 py-3 border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white rounded-lg font-semibold transition-colors"
                >
                  <i className="fas fa-envelope mr-2"></i>
                  Trimite Email
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-slate-800 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif mb-6 text-white">
            Începe Drumul Către Echilibru
          </h2>
          <p className="text-lg lg:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Primul pas este cel mai important. Te însoțesc cu empatie și 
            profesionalism în această călătorie către o viață mai împlinită.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-10 py-4 bg-white text-slate-800 hover:bg-gray-50 hover:scale-[1.02] rounded-lg font-bold transition-all duration-300 shadow-lg text-lg"
            >
              📞 Sună Acum: +40 712 345 678
            </Link>
            <Link 
              to="/servicii" 
              className="px-6 py-3 border border-white/60 bg-transparent text-white/90 hover:border-white hover:text-white rounded-lg font-medium transition-colors"
            >
              Vezi Serviciile
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;