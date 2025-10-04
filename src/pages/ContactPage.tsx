import React from 'react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen bg-gradient-to-br from-brand-light to-white"
    >
      <div className="container mx-auto max-w-6xl px-4 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-primary mb-6">
            Contact și Programări
          </h1>
          <p className="text-lg text-brand-text/80 max-w-2xl mx-auto">
            Programările se fac exclusiv telefonic. Te rog să mă contactezi pentru 
            a stabili împreună data și ora care îți convin cel mai bine.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Phone Contact */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg border-2 border-brand-accent/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mr-4 shadow-md">
                  <i className="fas fa-phone text-white text-2xl"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-serif text-brand-primary font-bold">
                    Programări Telefonice
                  </h2>
                  <p className="text-brand-text">Apelează pentru programare</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-mobile-alt text-brand-accent mr-3"></i>
                  <div>
                    <p className="font-bold text-brand-primary">Telefon mobil</p>
                    <a href="tel:+40712345678" className="text-brand-accent hover:underline text-lg font-medium">
                      +40 712 345 678
                    </a>
                  </div>
                </div>
                
                <div className="bg-brand-accent/10 p-4 rounded-lg border border-brand-accent/30">
                  <p className="text-sm text-brand-text">
                    <i className="fas fa-clock text-brand-accent mr-2"></i>
                    <strong>Program telefonic:</strong><br/>
                    Luni - Vineri: 09:00 - 18:00<br/>
                    Sâmbătă: 09:00 - 14:00<br/>
                    Duminică: Închis
                  </p>
                </div>
              </div>
            </div>

            {/* Email Contact */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg border-2 border-brand-accent/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mr-4 shadow-md">
                  <i className="fas fa-envelope text-white text-2xl"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-serif text-brand-primary font-bold">
                    Contact Email
                  </h2>
                  <p className="text-brand-text">Pentru întrebări și informații</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-at text-brand-accent mr-3"></i>
                  <div>
                    <p className="font-bold text-brand-primary">Email principal</p>
                    <a href="mailto:maria.popescu@psiholog.ro" className="text-brand-accent hover:underline text-lg">
                      maria.popescu@psiholog.ro
                    </a>
                  </div>
                </div>
                
                <div className="bg-brand-accent/10 p-4 rounded-lg border border-brand-accent/30">
                  <p className="text-sm text-brand-text">
                    <i className="fas fa-info-circle text-brand-accent mr-2"></i>
                    Răspund la email-uri în maxim 24 de ore în zilele lucrătoare.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg border-2 border-brand-accent/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-accent to-brand-primary rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-share-alt text-white text-2xl"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-serif text-brand-primary">
                    Conectează-te cu Mine
                  </h2>
                  <p className="text-brand-text/70">Urmărește-mă pentru consiliere și resurse</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="https://www.facebook.com/mariapopescupsiholog" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-lg border border-brand-light hover:bg-brand-light transition group"
                >
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition">
                    <i className="fab fa-facebook-f text-white"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-primary">Facebook</p>
                    <p className="text-sm text-brand-text/70">Maria Popescu - Psiholog</p>
                  </div>
                </a>

                <a 
                  href="https://www.instagram.com/mariapopescu.psih" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-lg border border-brand-light hover:bg-brand-light transition group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition">
                    <i className="fab fa-instagram text-white"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-primary">Instagram</p>
                    <p className="text-sm text-brand-text/70">@mariapopescu.psih</p>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/mariapopescupsiholog" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-lg border border-brand-light hover:bg-brand-light transition group"
                >
                  <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition">
                    <i className="fab fa-linkedin-in text-white"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-primary">LinkedIn</p>
                    <p className="text-sm text-brand-text/70">Maria Popescu - Psiholog Clinician</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Location and Map */}
          <div className="space-y-8">
            
            {/* Location Info */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg border-2 border-brand-accent/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mr-4 shadow-md">
                  <i className="fas fa-map-marker-alt text-white text-2xl"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-serif text-brand-primary font-bold">
                    Locația Cabinetului
                  </h2>
                  <p className="text-brand-text">București, sector central</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fas fa-building text-brand-accent mr-3 mt-1"></i>
                  <div>
                    <p className="font-bold text-brand-primary">Adresa cabinetului</p>
                    <p className="text-brand-text">
                      Bulevardul Unirii Nr. 15, Bl. A1<br/>
                      Sector 3, București 030167
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="fas fa-car text-brand-accent mr-3 mt-1"></i>
                  <div>
                    <p className="font-bold text-brand-primary">Parcare</p>
                    <p className="text-brand-text">
                      Parcare disponibilă în proximitate<br/>
                      Acces facil cu mijloacele de transport în comun
                    </p>
                  </div>
                </div>

                <div className="bg-brand-accent/10 p-4 rounded-lg border border-brand-accent/30">
                  <p className="text-sm text-brand-text/70">
                    <i className="fas fa-clock text-brand-accent mr-2"></i>
                    <strong>Program consultații:</strong><br/>
                    Luni - Vineri: 09:00 - 18:00<br/>
                    Sâmbătă: 09:00 - 14:00 (doar cu programare)<br/>
                    Duminică: Închis
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-xl p-8 shadow-soft">
              <h3 className="text-xl font-serif text-brand-primary mb-4 flex items-center">
                <i className="fas fa-map text-brand-accent mr-3"></i>
                Hartă și Navigare
              </h3>
              
              <div className="aspect-video rounded-lg overflow-hidden shadow-soft">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.110766285437!2d26.10295141565742!3d44.42624797910179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4d1964e36b%3A0x8db645b5b5b55b5b!2sBulevardul%20Unirii%2015%2C%20Bucure%C8%99ti!5e0!3m2!1sen!2sro!4v1635789123456!5m2!1sen!2sro"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locația Cabinetului Psihologic Maria Popescu"
                ></iframe>
              </div>
              
              <div className="mt-4 text-center">
                <a 
                  href="https://goo.gl/maps/example" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-brand-accent text-white rounded-lg hover:opacity-90 transition"
                >
                  <i className="fas fa-directions mr-2"></i>
                  Obține Indicații
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact Note */}
        <div className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-400 p-6 rounded-r-lg">
          <div className="flex items-center">
            <i className="fas fa-exclamation-triangle text-red-500 text-xl mr-3"></i>
            <div>
              <h3 className="text-lg font-semibold text-red-800">Situații de Urgență</h3>
              <p className="text-red-700 mt-1">
                În caz de criză sau urgență psihologică, te rog să contactezi imediat:
              </p>
              <p className="text-red-800 font-semibold mt-2">
                Salvarea: 112 | Telverde Anti-suicid: 0800.801.200
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;