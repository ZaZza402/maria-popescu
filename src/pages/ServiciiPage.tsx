import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ServiciiPage: React.FC = () => {
  useEffect(() => {
    // Add gsap-loaded class to enable visibility after GSAP is ready
    document.body.classList.add('gsap-loaded');
    
    // Set default ease for psychological comfort
    gsap.defaults({ ease: "power2.out", duration: 1.2 });

    // Hero Section Animation
    gsap.fromTo(".hero-title", 
      { 
        opacity: 0, 
        y: 40
      }, 
      { 
        opacity: 1, 
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        delay: 0.3
      }
    );

    // Services Grid Animation
    ScrollTrigger.create({
      trigger: ".services-grid",
      start: "top 80%",
      end: "bottom 20%",
      animation: gsap.fromTo(".service-card", 
        { opacity: 0, y: 40, scale: 0.95 }, 
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.6, 
          stagger: 0.1,
          ease: "back.out(1.2)"
        }
      ),
    });

    // Specialization Section Animation
    ScrollTrigger.create({
      trigger: ".specialization-section",
      start: "top 80%",
      end: "bottom 20%",
      animation: gsap.timeline()
        .fromTo(".spec-title", 
          { opacity: 0, y: 30 }, 
          { opacity: 1, y: 0, duration: 0.8 }
        )
        .fromTo(".spec-content", 
          { opacity: 0, y: 20, scale: 0.95 }, 
          { 
            opacity: 1, 
            y: 0, 
            scale: 1, 
            duration: 0.6, 
            stagger: 0.15
          }, 
          0.2
        ),
    });

    // CTA Buttons Animation
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const services = [
    {
      title: "Evaluarea psihologică pentru încadrarea în grad de handicap",
      description: "Evaluare psihologică completă pentru determinarea gradului de handicap, realizată conform standardelor legale în vigoare.",
      price: "300 RON",
      duration: "120 min",
      icon: "fas fa-clipboard-check"
    },
    {
      title: "Evaluarea psihologică a copilului",
      description: "Evaluări specializate pentru copii, identificarea nevoilor și recomandări pentru dezvoltarea optimă.",
      price: "200 RON",
      duration: "50 min",
      icon: "fas fa-child"
    },
    {
      title: "Consiliere psihologică",
      description: "Suport și orientare psihologică pentru depășirea dificultăților emoționale și relationale din viața de zi cu zi.",
      price: "150 RON",
      duration: "50 min",
      icon: "fas fa-comments"
    },
    {
      title: "Psihoterapie individuală",
      description: "Terapie personalizată pentru adulți, abordând diverse problematici psihologice prin tehnici cognitiv-comportamentale.",
      price: "200 RON",
      duration: "50 min",
      icon: "fas fa-user"
    },
    {
      title: "Psihoterapie pentru cerințe educaționale speciale",
      description: "Terapie specializată pentru adulți și copii cu cerințe educaționale speciale, adaptată nevoilor individuale.",
      price: "200 RON",
      duration: "50 min",
      icon: "fas fa-puzzle-piece"
    },
    {
      title: "Terapie cognitiv comportamentală aplicată (ABA)",
      description: "Intervenții comportamentale structurate pentru dezvoltarea abilităților sociale și de comunicare.",
      price: "150 RON",
      duration: "50 min",
      icon: "fas fa-brain"
    },
    {
      title: "Psihoterapie de cuplu și familie",
      description: "Terapie specializată pentru cupluri și familii, îmbunătățirea comunicării și rezolvarea conflictelor.",
      price: "300 RON",
      duration: "50 min",
      icon: "fas fa-heart"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-stone-50">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h1 className="hero-title text-4xl lg:text-5xl xl:text-6xl font-serif text-brand-text mb-8 leading-tight">
            Servicii de Specialitate
          </h1>
          <p className="hero-title text-lg lg:text-xl text-brand-text/80 max-w-3xl mx-auto leading-relaxed">
            Oferim servicii psihologice complete, adaptate nevoilor individuale ale fiecărui client. 
            Toate ședințele sunt realizate cu empatie și profesionalism, într-un mediu sigur și confidențial.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-grid py-16 lg:py-24 bg-stone-100">
        <div className="container mx-auto max-w-6xl px-4">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="service-card bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-brand-accent rounded-2xl flex items-center justify-center mr-4 shadow-md">
                    <i className={`${service.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-serif text-brand-text leading-tight font-bold">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-brand-text/80 mb-6 text-lg leading-relaxed">
                  {service.description}
                </p>
                
                <div className="border-t border-brand-accent/20 pt-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-medium text-brand-text/80">Durată:</span>
                    <span className="font-bold text-brand-text text-lg">{service.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-brand-text/80">Preț:</span>
                    <span className="text-brand-accent font-bold text-2xl">{service.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Specialization */}
      <section className="specialization-section py-16 lg:py-24 bg-stone-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="spec-title text-4xl lg:text-5xl font-serif text-brand-text mb-8">
              Domenii de Specializare
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="spec-content bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl lg:text-3xl font-serif text-brand-text mb-6 flex items-center">
                <i className="fas fa-heart text-brand-accent mr-4"></i>
                Sănătate Mentală
              </h3>
              <ul className="space-y-4 text-brand-text text-lg">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-accent mt-1 mr-4"></i>
                  <span>Anxietate și tulburări de panică</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-accent mt-1 mr-4"></i>
                  <span>Depresie și tulburări de dispoziție</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-accent mt-1 mr-4"></i>
                  <span>Tulburări de alimentație</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-accent mt-1 mr-4"></i>
                  <span>Gestionarea stresului</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-accent mt-1 mr-4"></i>
                  <span>Dezvoltare personală</span>
                </li>
              </ul>
            </div>
            
            <div className="spec-content bg-white rounded-3xl p-8 shadow-lg border-2 border-brand-accent/20">
              <h3 className="text-2xl lg:text-3xl font-serif text-brand-text mb-6 flex items-center">
                <i className="fas fa-users text-brand-accent mr-4"></i>
                Terapie Familială și de Cuplu
              </h3>
              <ul className="space-y-4 text-brand-text text-lg">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-accent mt-1 mr-4"></i>
                  <span>Îmbunătățirea comunicării</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-accent mt-1 mr-4"></i>
                  <span>Rezolvarea conflictelor</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-accent mt-1 mr-4"></i>
                  <span>Consiliere premaritală</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-accent mt-1 mr-4"></i>
                  <span>Suport în criză</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-accent mt-1 mr-4"></i>
                  <span>Terapie familială</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 lg:py-24 bg-stone-100">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-serif text-brand-text mb-8">
            Începe Drumul Către Echilibru
          </h2>
          <blockquote className="text-lg lg:text-xl text-brand-text/80 mb-8 leading-relaxed italic border-l-2 border-brand-accent pl-6 max-w-2xl mx-auto">
            "Primul pas către schimbare este cel mai important. Sunt aici să te însoțesc 
            cu empatie și profesionalism în această călătorie."
          </blockquote>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:+40772246316" 
              className="cta-button inline-block px-10 py-3 border-2 border-brand-text text-brand-text font-serif text-lg hover:bg-brand-text hover:text-white transition-all duration-300"
            >
              Sună Acum: 0772 246 316
            </a>
            <Link 
              to="/despre" 
              className="cta-button inline-block px-10 py-3 bg-brand-accent text-white font-serif text-lg hover:bg-brand-accent/90 transition-all duration-300"
            >
              Despre Mine
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiciiPage;