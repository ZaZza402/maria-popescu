import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServiciiPage: React.FC = () => {
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
            Servicii de Specialitate
          </h1>
          <p className="text-lg text-brand-text/80 max-w-3xl mx-auto">
            Oferim servicii psihologice complete, adaptate nevoilor individuale ale fiecărui client. 
            Toate ședințele sunt realizate cu empatie și profesionalism, într-un mediu sigur și confidențial.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-2 border-brand-accent/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center mr-4 shadow-md">
                  <i className={`${service.icon} text-white text-lg`}></i>
                </div>
                <h3 className="text-lg font-bold text-brand-primary leading-tight">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-brand-text mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <div className="border-t border-brand-accent/20 pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-brand-text/80">Durată:</span>
                  <span className="font-bold text-brand-text">{service.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-brand-text/80">Preț:</span>
                  <span className="text-brand-accent font-bold text-lg">{service.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Areas of Specialization */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg mb-12 border-2 border-brand-accent/20">
          <h2 className="text-2xl font-serif text-brand-primary mb-6 text-center font-bold">
            Domenii de Specializare
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-brand-primary mb-4">
                <i className="fas fa-heart text-brand-accent mr-2"></i>
                Sănătate Mentală
              </h3>
              <ul className="space-y-2 text-brand-text">
                <li>• Anxietate și tulburări de panică</li>
                <li>• Depresie și tulburări de dispoziție</li>
                <li>• Tulburări de alimentație</li>
                <li>• Gestionarea stresului</li>
                <li>• Dezvoltare personală</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-brand-primary mb-4">
                <i className="fas fa-users text-brand-accent mr-2"></i>
                Terapie Familială și de Cuplu
              </h3>
              <ul className="space-y-2 text-brand-text">
                <li>• Îmbunătățirea comunicării</li>
                <li>• Rezolvarea conflictelor</li>
                <li>• Consiliere premaritală</li>
                <li>• Suport în criză</li>
                <li>• Terapie familială</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-slate-800 text-white rounded-xl p-8">
          <h2 className="text-2xl font-serif mb-4 text-white">
            Începe Drumul Către Echilibru
          </h2>
          <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
            Primul pas către schimbare este cel mai important. Sunt aici să te însoțesc 
            cu empatie și profesionalism în această călătorie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-slate-800 hover:bg-gray-50 rounded-lg font-semibold transition-colors shadow-lg"
            >
              Contactează-mă pentru Programare
            </Link>
            <Link 
              to="/despre" 
              className="px-8 py-4 border-2 border-white bg-transparent text-white hover:bg-white hover:text-slate-800 rounded-lg font-semibold transition-colors"
            >
              Despre Mine
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiciiPage;