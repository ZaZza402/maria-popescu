import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HomePage: React.FC = () => {
  useEffect(() => {
    // Add gsap-loaded class to enable visibility after GSAP is ready
    document.body.classList.add('gsap-loaded');
    
    // Set default ease for psychological comfort
    gsap.defaults({ ease: "power2.out", duration: 1.2 });

    // 1. Hero Section - Gentle Entry Animation
    gsap.fromTo(".hero-text", 
      { 
        opacity: 0, 
        y: 50,
        scale: 0.95 
      }, 
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.2,
        delay: 0.3
      }
    );

    gsap.fromTo(".hero-image", 
      { 
        opacity: 0, 
        scale: 0.8
      }, 
      { 
        opacity: 1, 
        scale: 1,
        duration: 1.8,
        ease: "power3.out",
        delay: 0.6
      }
    );

    // 2. Services Section - Calm Reveal
    ScrollTrigger.create({
      trigger: ".services-section",
      start: "top 80%",
      end: "bottom 20%",
      animation: gsap.timeline()
        .fromTo(".services-title", 
          { opacity: 0, y: 40 }, 
          { opacity: 1, y: 0, duration: 1 }
        )
        .fromTo(".services-card", 
          { opacity: 0, y: 30, scale: 0.95 }, 
          { 
            opacity: 1, 
            y: 0, 
            scale: 1, 
            duration: 0.8, 
            stagger: 0.15,
            ease: "back.out(1.2)"
          }, 
          0.3
        ),
    });

    // 3. Services Items - Individual Hover Effects
    gsap.utils.toArray('.service-item').forEach((item) => {
      const element = item as HTMLElement;
      const tl = gsap.timeline({ paused: true });
      
      tl.to(element, {
        y: -8,
        scale: 1.02,
        boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
        duration: 0.3,
        ease: "power2.out"
      });

      element.addEventListener('mouseenter', () => tl.play());
      element.addEventListener('mouseleave', () => tl.reverse());
    });

    // 4. Paper Plane Animation - Beautiful Flying Motion
    ScrollTrigger.create({
      trigger: ".paper-plane-container",
      start: "top 80%",
      end: "bottom 20%",
      animation: gsap.timeline()
        .fromTo(".paper-plane", 
          { 
            opacity: 0, 
            x: -100, 
            y: 50, 
            rotation: -45, 
            scale: 0.8 
          }, 
          { 
            opacity: 1, 
            x: 0, 
            y: 0, 
            rotation: 0, 
            scale: 1, 
            duration: 1.5, 
            ease: "power3.out" 
          }
        )
        .to(".paper-plane", {
          y: -10,
          rotation: 5,
          duration: 2,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true
        }, 0.5)
    });

    // 5. Gallery Title Animation
    gsap.fromTo(".gallery-title", 
      { opacity: 0, y: 30 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: ".gallery-title",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // 6. Horizontal Gallery Animation - Scalable Design
    gsap.utils.toArray('.gallery-item').forEach((item, index) => {
      const element = item as HTMLElement;
      
      // Simple entry animation
      gsap.fromTo(element, 
        { 
          opacity: 0, 
          y: 30
        }, 
        { 
          opacity: 1, 
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          delay: index * 0.05,
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Simple click functionality for modal
      element.addEventListener('click', () => {
        const img = element.querySelector('img');
        
        if (img) {
          const modal = document.getElementById('gallery-modal');
          const modalImg = document.getElementById('gallery-modal-image') as HTMLImageElement;
          
          if (modal && modalImg) {
            // Set modal content
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            modalImg.classList.remove('hidden'); // Show the image
            
            // Show modal
            modal.style.display = 'block';
            modal.classList.remove('opacity-0', 'invisible');
            document.body.style.overflow = 'hidden';
            
            // Simple fade-in animation
            gsap.fromTo(modalImg, 
              { opacity: 0 },
              { opacity: 1, duration: 0.3, ease: "power2.out" }
            );
          }
        }
      });
    });

    // 6. CTA Buttons - Pulse Effect on Scroll
    gsap.utils.toArray('.cta-button').forEach((button) => {
      const element = button as HTMLElement;
      ScrollTrigger.create({
        trigger: element,
        start: "top 90%",
        animation: gsap.fromTo(element, 
          { opacity: 0, scale: 0.8, y: 20 }, 
          { 
            opacity: 1, 
            scale: 1, 
            y: 0,
            duration: 0.8,
            ease: "back.out(1.3)"
          }
        ),
      });
    });

    // 7. Quote Breathing Animation - Once on Scroll
    gsap.fromTo(".breathing-element", 
      { scale: 1 },
      {
        scale: 1.02,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: 1, // Play once forward and once back
        scrollTrigger: {
          trigger: ".breathing-element",
          start: "top 80%",
          toggleActions: "play none none none" // Only play once
        }
      }
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      document.body.classList.remove('gsap-loaded');
    };
  }, []);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section - Matching Reference Design */}
      <section className="relative bg-stone-50 py-8 lg:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
            {/* Text Content - Left Side on Desktop */}
            <div className="order-2 lg:order-1 flex flex-col justify-center">
              <h1 className="hero-text text-5xl lg:text-7xl xl:text-8xl mb-6 leading-tight">
                <span className="hero-text text-brand-text font-serif font-bold block">Maria</span>
                <span className="hero-text text-brand-text font-serif font-bold block">Popescu</span>
              </h1>
              
              <div className="hero-text credentials space-y-4 mb-8">
                <div className="text-lg lg:text-xl text-brand-text font-medium">
                  Psiholog Clinician / Psihoterapeut
                </div>
                <div className="text-lg lg:text-xl text-brand-text font-medium">
                  Cognitiv-Comportamental
                </div>
              </div>
              
              <blockquote className="hero-text text-base lg:text-lg text-brand-text/80 mb-8 leading-relaxed italic border-l-2 border-brand-primary pl-4 breathing-element">
                "Sunt psiholog clinician și psihoterapeut cognitiv-comportamental, cu o vastă experiență în lucrul cu copii și adulți în domeniul evaluării psihologice. Îmi doresc să creez un spațiu sigur, cald și confidențial, unde fiecare persoană să se simtă ascultată și înțeleasă.
                <br /><br />
                Sunt dedicată sprijinirii clienților în explorarea emoțiilor, descoperirea de sine și dezvoltarea unor modalități sănătoase de a face față provocărilor vieții, cum ar fi anxietatea, depresia sau tulburările de alimentație. Obiectivul meu este să ofer suport empatic și să contribui la redescoperirea echilibrului și a resurselor interioare."
              </blockquote>
              
              <div className="hero-text flex items-center">
                <Link 
                  to="/despre" 
                  className="cta-button inline-block px-10 py-3 border-2 border-brand-text text-brand-text font-serif text-lg hover:bg-brand-text hover:text-white transition-all duration-300"
                >
                  Află mai multe
                </Link>
              </div>
            </div>
            
            {/* Professional Photo - Right Side on Desktop, Top on Mobile */}
            <div className="hero-image order-1 lg:order-2 flex justify-center -mx-4 lg:mx-0">
              <div className="relative w-full max-w-none lg:max-w-lg">
                <div className="aspect-[3/4] w-full bg-stone-200 lg:rounded-lg overflow-hidden shadow-xl">
                  <OptimizedImage
                    src="./assets/female_portrait.jpg" 
                    alt="Maria Popescu - Psiholog Clinician și Psihoterapeut"
                    className="w-full h-full object-cover"
                    priority={true}
                    loading="eager"
                    width={400}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Desktop Two-Column Layout */}
      <section className="services-section py-16 lg:py-24 bg-stone-200">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Main Title */}
          <div className="text-center lg:text-left mb-12">
            <h2 className="services-title text-4xl lg:text-5xl font-serif text-brand-text mb-8">
              Servicii - Terapie
            </h2>
          </div>

          {/* Desktop Two-Column Layout / Mobile Stacked */}
          <div className="services-card">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Column - Services List */}
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl lg:text-3xl font-serif text-brand-text mb-8 border-b border-gray-300 pb-4">
                  Terapie La Cabinet
                </h3>
                
                <div className="space-y-6">
                  <div className="service-item flex items-center">
                    <span className="text-xl lg:text-2xl text-brand-text mr-4">-</span>
                    <h4 className="text-lg lg:text-xl text-gray-600">Psihoterapie Individuală</h4>
                  </div>
                  <div className="service-item flex items-center">
                    <span className="text-xl lg:text-2xl text-brand-text mr-4">-</span>
                    <h4 className="text-lg lg:text-xl text-gray-600">Psihoterapie de Cuplu</h4>
                  </div>
                  <div className="service-item flex items-center">
                    <span className="text-xl lg:text-2xl text-brand-text mr-4">-</span>
                    <h4 className="text-lg lg:text-xl text-gray-600">Psihoterapie pentru Copii</h4>
                  </div>
                </div>

                {/* Afla mai multe Button - Desktop Bottom Left */}
                <div className="mt-12 hidden lg:block">
                  <Link 
                    to="/servicii" 
                    className="inline-block px-10 py-3 border-2 border-brand-text text-brand-text font-serif text-lg hover:bg-brand-text hover:text-white transition-all duration-300"
                  >
                    Vezi toate
                  </Link>
                </div>
              </div>

              {/* Right Column - Animated Paper Plane */}
              <div className="order-1 lg:order-2">
                <div className="flex justify-center lg:justify-end items-center">
                  <div className="paper-plane-container relative">
                    <svg 
                      className="paper-plane w-32 h-32 lg:w-48 lg:h-48 text-brand-accent" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Button - Centered at Bottom */}
            <div className="text-center mt-12 lg:hidden">
              <Link 
                to="/servicii" 
                className="inline-block px-10 py-3 border-2 border-brand-text text-brand-text font-serif text-lg hover:bg-brand-text hover:text-white transition-all duration-300"
              >
                Vezi toate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scalable Minimalist Gallery */}
      <section className="py-12 lg:py-20 bg-stone-50">
        <div className="container mx-auto max-w-6xl px-4">
          
          {/* Gallery Title */}
          <div className="text-center mb-8">
            <h2 className="gallery-title text-3xl lg:text-4xl font-serif text-brand-text">
              Galerie
            </h2>
          </div>

          {/* Horizontal Scrolling Gallery - Mobile Optimized 2:3 Ratio */}
          <div className="gallery-container relative">
            <div className="gallery-scroll flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-track-stone-200 scrollbar-thumb-brand-primary">
              
              <div className="gallery-item flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72 aspect-[2/3] overflow-hidden rounded-xl cursor-pointer group">
                <img 
                  src="./assets/therapy-session.webp"
                  alt="Terapie pentru adulți"
                  className="gallery-image w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110"
                />
              </div>

              <div className="gallery-item flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72 aspect-[2/3] overflow-hidden rounded-xl cursor-pointer group">
                <img 
                  src="./assets/kids-therapy.webp"
                  alt="Terapie pentru copii"
                  className="gallery-image w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110"
                />
              </div>

              <div className="gallery-item flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72 aspect-[2/3] overflow-hidden rounded-xl cursor-pointer group">
                <img 
                  src="./assets/kids-playing.webp"
                  alt="Terapia prin joc"
                  className="gallery-image w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110"
                />
              </div>

              <div className="gallery-item flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72 aspect-[2/3] overflow-hidden rounded-xl cursor-pointer group">
                <img 
                  src="./assets/kids-drawing.webp"
                  alt="Art terapie"
                  className="gallery-image w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110"
                />
              </div>

              <div className="gallery-item flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72 aspect-[2/3] overflow-hidden rounded-xl cursor-pointer group">
                <img 
                  src="./assets/self-esteem.webp"
                  alt="Dezvoltarea stimei de sine"
                  className="gallery-image w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110"
                />
              </div>

              <div className="gallery-item flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72 aspect-[2/3] overflow-hidden rounded-xl cursor-pointer group">
                <img 
                  src="./assets/female_portrait.jpg"
                  alt="Maria Popescu"
                  className="gallery-image w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110"
                />
              </div>

              <div className="gallery-item flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72 aspect-[2/3] overflow-hidden rounded-xl cursor-pointer group">
                <img 
                  src="./assets/sleep-struggle.jpg"
                  alt="Probleme de somn"
                  className="gallery-image w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110"
                />
              </div>              {/* Future images can be easily added here */}
              
            </div>
            
            {/* Subtle scroll indicator */}
            <div className="text-center mt-4">
              <p className="text-sm text-brand-text/60">
                <i className="fas fa-hand-point-right mr-2"></i>
                Glisează pentru a vedea mai multe imagini
              </p>
            </div>
          </div>
        </div>

        {/* Simple Image Modal - Mobile Optimized */}
        <div 
          id="gallery-modal" 
          className="fixed inset-0 bg-black/95 z-[9999] opacity-0 invisible transition-all duration-300"
          onClick={(e) => {
            const target = e.target as HTMLElement;
            if (target.id === 'gallery-modal' || target.classList.contains('modal-close')) {
              const modal = document.getElementById('gallery-modal');
              const modalImg = document.getElementById('gallery-modal-image');
              if (modal && modalImg) {
                modalImg.classList.add('hidden'); // Hide the image
                modal.classList.add('opacity-0', 'invisible');
                setTimeout(() => {
                  modal.style.display = 'none';
                }, 300);
                document.body.style.overflow = 'auto';
              }
            }
          }}
        >
          {/* Close Button - Mobile Optimized */}
          <button 
            className="modal-close fixed top-4 right-4 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200 z-[10000]"
            onClick={() => {
              const modal = document.getElementById('gallery-modal');
              const modalImg = document.getElementById('gallery-modal-image');
              if (modal && modalImg) {
                modalImg.classList.add('hidden'); // Hide the image
                modal.classList.add('opacity-0', 'invisible');
                setTimeout(() => {
                  modal.style.display = 'none';
                }, 300);
                document.body.style.overflow = 'auto';
              }
            }}
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image - Mobile Optimized */}
          <div className="flex items-center justify-center min-h-screen p-4">
            <img 
              id="gallery-modal-image"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" 
              alt=""
              className="max-w-full max-h-full object-contain rounded-lg hidden"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="container mx-auto max-w-6xl px-4">
          
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif text-brand-text mb-4">
              Articole Recente
            </h2>
            <p className="text-lg text-brand-text/70">
              Informații utile despre sănătatea mentală și dezvoltarea personală
            </p>
          </div>

          {/* Articles Grid - Mobile Optimized */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Article 1 - Child Psychology Evaluation */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] sm:aspect-video lg:aspect-[5/4] bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                <img 
                  src="./assets/kids-drawing.webp"
                  alt="Evaluarea psihologică la copil"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-brand-text mb-3">
                Ce implică evaluarea psihologică la copil
              </h3>
              <p className="text-brand-text/70 text-base lg:text-lg mb-4 leading-relaxed">
                Evaluarea psihologică la copil este un proces prin care psihologul explorează dezvoltarea emoțională, cognitivă, comportamentală și socială a copilului. Scopul ei este să înțeleagă cum gândește, cum simte și cum reacționează copilul...
              </p>
              <Link 
                to="/articole#evaluarea-psihologica" 
                className="inline-block w-full px-4 py-2 border-2 border-brand-text text-brand-text font-serif text-center hover:bg-brand-text hover:text-white transition-all duration-300 rounded-lg"
              >
                Citește articolul complet
              </Link>
            </div>

            {/* Article 2 - Eating Disorder */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] sm:aspect-video lg:aspect-[5/4] bg-gradient-to-br from-green-100 to-blue-100 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                <img 
                  src="./assets/self-esteem.webp"
                  alt="Tulburarea de alimentație compulsivă"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-brand-text mb-3">
                Tulburarea de alimentație compulsivă
              </h3>
              <p className="text-brand-text/70 text-base lg:text-lg mb-4 leading-relaxed">
                Mâncatul compulsiv pe fond emoțional reprezintă o strategie disfuncțională de reglare emoțională, frecvent întâlnită la femeile tinere și adulte, care recurg la hrană pentru a face față stresului...
              </p>
              <Link 
                to="/articole#tulburarea-alimentatie" 
                className="inline-block w-full px-4 py-2 border-2 border-brand-text text-brand-text font-serif text-center hover:bg-brand-text hover:text-white transition-all duration-300 rounded-lg"
              >
                Citește articolul complet
              </Link>
            </div>

            {/* Article 3 - Sleep Hygiene */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] sm:aspect-video lg:aspect-[5/4] bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                <img 
                  src="./assets/sleep-struggle.jpg"
                  alt="Igiena somnului"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-brand-text mb-3">
                Igiena somnului – cum ne putem odihni suficient și bine
              </h3>
              <p className="text-brand-text/70 text-base lg:text-lg mb-4 leading-relaxed">
                Somnul odihnitor este esențial pentru echilibrul fizic, emoțional și cognitiv. Pentru a adormi ușor și a ne trezi revigorați, este important să respectăm o serie de reguli de igienă a somnului...
              </p>
              <Link 
                to="/articole#igiena-somnului" 
                className="inline-block w-full px-4 py-2 border-2 border-brand-text text-brand-text font-serif text-center hover:bg-brand-text hover:text-white transition-all duration-300 rounded-lg"
              >
                Citește articolul complet
              </Link>
            </div>

          </div>

          {/* View All Articles Button */}
          <div className="text-center mt-12">
            <Link 
              to="/articole" 
              className="inline-block px-10 py-3 border-2 border-brand-text text-brand-text font-serif text-lg hover:bg-brand-text hover:text-white transition-all duration-300"
            >
              Vezi toate articolele
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section py-16 lg:py-24 bg-stone-100">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="contact-title text-4xl lg:text-5xl font-serif text-brand-text mb-4">
              Contact
            </h2>
            <p className="text-lg text-brand-text/70">
              Programează o ședință sau contactează-mă pentru mai multe informații
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="contact-card bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-serif text-brand-text mb-4">Informații de Contact</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-phone text-brand-primary mr-4 w-5"></i>
                    <div>
                      <p className="font-medium text-brand-text">Telefon</p>
                      <a href="tel:+40772246316" className="text-brand-text/70 hover:text-brand-primary transition-colors">
                        +40 (772) 246 316
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <i className="fas fa-map-marker-alt text-brand-primary mr-4 w-5 mt-1"></i>
                    <div>
                      <p className="font-medium text-brand-text">Adresă</p>
                      <p className="text-brand-text/70">
                        Str. Cezar Bolliac, nr. 21<br />
                        Sector 3, București
                      </p>
                    </div>
                  </div>
                  

                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-serif text-brand-text mb-4">Programare Rapidă</h3>
                <p className="text-brand-text/70 mb-4">
                  Sună pentru o programare rapidă sau trimite un mesaj WhatsApp.
                </p>
                <div className="flex gap-4">
                  <a 
                    href="tel:+40772246316" 
                    className="flex-1 bg-brand-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-brand-text transition-colors duration-300 text-center"
                  >
                    <i className="fas fa-phone mr-2"></i>
                    Sună Acum
                  </a>
                  <a 
                    href="https://wa.me/40772246316" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300 text-center"
                  >
                    <i className="fab fa-whatsapp mr-2"></i>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-serif text-brand-text mb-4">Locație</h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.1234567890123!2d26.1234567890123!3d44.4234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff5e5a5a5a5a%3A0x5a5a5a5a5a5a5a5a!2sStrada%20Cezar%20Bolliac%2021%2C%20Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1234567890123!5m2!1sro!2sro&q=Strada+Cezar+Bolliac+21,+Sector+3,+Bucure%C8%99ti"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locația Cabinetului - Str. Cezar Bolliac 21, Sector 3, București"
                ></iframe>
              </div>
              <p className="text-sm text-brand-text/60 mt-2">
                <i className="fas fa-info-circle mr-1"></i>
                Click pe hartă pentru a deschide în Google Maps
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;