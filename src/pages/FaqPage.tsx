import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const FaqPage = () => {
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Accordion functionality - only one accordion item can be open at a time
    const accordionItems = accordionRef.current?.querySelectorAll('details');
    
    if (accordionItems) {
      accordionItems.forEach((item) => {
        const handleToggle = (event: Event) => {
          const target = event.target as HTMLDetailsElement;
          if (target.open) {
            // Close all other accordion items when one is opened
            accordionItems.forEach((otherItem) => {
              if (otherItem !== target) {
                otherItem.removeAttribute('open');
              }
            });
          }
        };

        item.addEventListener('toggle', handleToggle);

        // Cleanup event listeners
        return () => {
          item.removeEventListener('toggle', handleToggle);
        };
      });
    }
  }, []);

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
              Întrebări Frecvente
            </h1>
            <p className="text-lg text-brand-text/80 max-w-2xl mx-auto">
              Răspunsuri la întrebările comune despre psihoterapie și serviciile oferite
            </p>
          </div>
      
      <div ref={accordionRef} id="faq-accordion" className="space-y-4">
        <details className="bg-white rounded-lg shadow-soft overflow-hidden">
          <summary className="px-6 py-4 cursor-pointer hover:bg-brand-soft transition-colors font-medium text-brand-text">
            Ce este terapia cognitiv-comportamentală?
          </summary>
          <div className="px-6 pb-4 text-brand-text/80">
            <p>Terapia cognitiv-comportamentală (TCC) este o formă de psihoterapie care se concentrează pe identificarea și modificarea gândurilor și comportamentelor negative sau disfuncționale.</p>
          </div>
        </details>

        <details className="bg-white rounded-lg shadow-soft overflow-hidden">
          <summary className="px-6 py-4 cursor-pointer hover:bg-brand-soft transition-colors font-medium text-brand-text">
            Cât durează o ședință de terapie?
          </summary>
          <div className="px-6 pb-4 text-brand-text/80">
            <p>O ședință standard de terapie durează aproximativ 50 de minute. Frecvența ședințelor se stabilește împreună cu terapeutul în funcție de nevoile individuale.</p>
          </div>
        </details>

        <details className="bg-white rounded-lg shadow-soft overflow-hidden">
          <summary className="px-6 py-4 cursor-pointer hover:bg-brand-soft transition-colors font-medium text-brand-text">
            Este confidențialitatea garantată?
          </summary>
          <div className="px-6 pb-4 text-brand-text/80">
            <p>Da, confidențialitatea este un principiu fundamental în terapie. Toate informațiile discutate în ședințe sunt strict confidențiale, cu excepția situațiilor specifice prevăzute de lege.</p>
          </div>
        </details>

        <details className="bg-white rounded-lg shadow-soft overflow-hidden">
          <summary className="px-6 py-4 cursor-pointer hover:bg-brand-soft transition-colors font-medium text-brand-text">
            Cum pot programa o consultație?
          </summary>
          <div className="px-6 pb-4 text-brand-text/80">
            <p>Puteți programa o consultație prin telefon, WhatsApp sau completând formularul de contact de pe site. Vă voi răspunde în cel mai scurt timp pentru a stabili o programare.</p>
          </div>
        </details>

        <details className="bg-white rounded-lg shadow-soft overflow-hidden">
          <summary className="px-6 py-4 cursor-pointer hover:bg-brand-soft transition-colors font-medium text-brand-text">
            Care sunt tarifele pentru serviciile oferite?
          </summary>
          <div className="px-6 pb-4 text-brand-text/80">
            <p>Tarifele variază în funcție de tipul de serviciu solicitat. Pentru informații detaliate despre costuri, vă rog să mă contactați direct pentru a discuta nevoile dumneavoastră specifice.</p>
          </div>
        </details>
      </div>
        </div>
    </motion.div>
  );
};

export default FaqPage;