import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ArticolePage: React.FC = () => {
  useEffect(() => {
    // Add gsap-loaded class to enable visibility after GSAP is ready
    document.body.classList.add('gsap-loaded');
    
    // Set default ease for psychological comfort
    gsap.defaults({ ease: "power2.out", duration: 1.2 });

    // Hero Animation
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

    // Articles Animation
    ScrollTrigger.create({
      trigger: ".articles-container",
      start: "top 80%",
      end: "bottom 20%",
      animation: gsap.fromTo(".article-card", 
        { opacity: 0, y: 40, scale: 0.95 }, 
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.8, 
          stagger: 0.2,
          ease: "back.out(1.1)"
        }
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

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-stone-50">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h1 className="hero-title text-4xl lg:text-5xl xl:text-6xl font-serif text-brand-text mb-8 leading-tight">
            Articole de Specialitate
          </h1>
          <p className="hero-title text-lg lg:text-xl text-brand-text/80 max-w-2xl mx-auto leading-relaxed">
            Informații utile despre sănătate mentală, dezvoltarea personală și tehnici de terapie
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="articles-container py-16 lg:py-24 bg-stone-100">
        <div className="container mx-auto max-w-4xl px-4">

          {/* Articles List */}
          <div className="space-y-16">
          
            {/* Article 1 - Child Psychology Evaluation */}
            <article className="article-card bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="p-6 lg:p-8">
                <div className="lg:float-left lg:w-64 lg:mr-6 lg:mb-4">
                  <img 
                    src="./assets/kids-therapy.webp"
                    alt="Evaluarea psihologică la copil"
                    className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h2 className="text-xl lg:text-2xl font-serif text-brand-text mb-4">
                  Ce implică evaluarea psihologică la copil
                </h2>
                <div className="text-sm lg:text-base text-brand-text/80 leading-relaxed">
                  <p>
                    Evaluarea psihologică la copil este un proces comprehensiv prin care psihologul explorează dezvoltarea emoțională, cognitivă, comportamentală și socială a copilului. Această evaluare se bazează pe observații clinice, teste standardizate și discuții cu părinții pentru a obține o imagine completă asupra funcționării copilului.
                  </p>
                  <p>
                    Scopul principal este să înțelegem cum gândește, cum simte și cum reacționează copilul în diferite contexte - acasă, la școală și în relațiile sociale. Prin această înțelegere profundă, putem oferi recomandări personalizate și strategii de intervenție care să sprijine dezvoltarea optimă a copilului.
                  </p>
                  <p>
                    Procesul de evaluare include utilizarea de instrumente psihologice validate științific, adaptate vârstei și nivelului de dezvoltare al copilului. Acestea pot include teste de inteligență, scale de evaluare comportamentală, chestionare pentru părinți și profesori, precum și observații directe ale comportamentului copilului în diverse situații.
                  </p>
                  <p>
                    Este important să subliniem că evaluarea nu este un „test care se trece sau se pică", ci o modalitate de a descoperi și celebra unicitatea fiecărui copil, identificând în același timp domeniile în care poate beneficia de suport suplimentar.
                  </p>
                  
                  <h3 className="text-lg font-bold text-brand-text mt-4 mb-3">Când este recomandată evaluarea psihologică?</h3>
                  <p>
                    Recunoașterea timpurie a nevoilor speciale ale copilului poate face diferența în dezvoltarea sa viitoare. Evaluarea poate fi solicitată de părinți, profesori sau medici când observă anumite semne de întrebare în dezvoltarea copilului.
                  </p>
                  
                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className="text-base font-semibold text-brand-text mb-2 flex items-center">
                        🧒 În primii ani (2–6 ani)
                      </h4>
                      <p className="text-brand-text/70 mb-2 text-sm">
                        Această perioadă este crucială pentru dezvoltarea abilităților de bază:
                      </p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• <strong>Dezvoltarea limbajului:</strong> Întârziere în vorbire, vocabular limitat sau dificultăți în înțelegerea instrucțiunilor simple</li>
                        <li>• <strong>Atenția și comportamentul:</strong> Neliniște constantă, dificultăți în focalizarea atenției sau impulsivitate extremă</li>
                        <li>• <strong>Socializarea:</strong> Evitarea interacțiunii cu alți copii sau dificultăți în împărtășirea jucăriilor</li>
                        <li>• <strong>Reglarea emoțională:</strong> Crize de furie intense, dificultăți în calmarea sau adaptarea la schimbări</li>
                        <li>• <strong>Dezvoltarea motoră:</strong> Întârzieri în mersul independent, coordonarea mișcărilor sau abilități fine</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-base font-semibold text-brand-text mb-2 flex items-center">
                        👧 La vârsta școlară (7–12 ani)
                      </h4>
                      <p className="text-brand-text/70 mb-2 text-sm">
                        Școala aduce noi provocări și oportunități de dezvoltare:
                      </p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• <strong>Învățarea academică:</strong> Dificultăți persistente în citit, scris, matematică sau în procesarea informațiilor</li>
                        <li>• <strong>Concentrarea:</strong> Neatenție cronică, uitate frecvente sau dificultăți în finalizarea sarcinilor</li>
                        <li>• <strong>Adaptarea școlară:</strong> Anxietate severă legată de școală, refuz de a participa sau scăderi dramatice ale performanței</li>
                        <li>• <strong>Relațiile sociale:</strong> Isolarea de colegi, conflicte repetate sau dificultăți în respectarea regulilor sociale</li>
                        <li>• <strong>Organizarea:</strong> Probleme în gestionarea timpului, a sarcinilor sau a materialelor școlare</li>
                        <li>• <strong>Motivația:</strong> Lipsa interesului pentru activitățile educaționale sau recreative</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-base font-semibold text-brand-text mb-2 flex items-center">
                        🧑 În adolescență (13–18 ani)
                      </h4>
                      <p className="text-brand-text/70 mb-2 text-sm">
                        Adolescența aduce transformări majore și noi provocări:
                      </p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• <strong>Starea emoțională:</strong> Depresie persistentă, anxietate extremă sau schimbări dramatice de dispoziție</li>
                        <li>• <strong>Comportamentele riscante:</strong> Automutilare, consumul de substanțe sau comportamente periculoase repetate</li>
                        <li>• <strong>Relațiile familiale:</strong> Conflicte severe și constante cu părinții sau retragere totală din viața de familie</li>
                        <li>• <strong>Identitatea și viitorul:</strong> Confuzie extremă despre sine sau lipsa totală de direcție și motivație</li>
                        <li>• <strong>Performanța academică:</strong> Scăderea bruscă a notelor sau abandon școlar</li>
                        <li>• <strong>Relațiile cu vârsta:</strong> Izolarea socială sau implicarea în grupuri cu influență negativă</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-4 bg-stone-50 rounded-lg">
                    <h3 className="text-base font-bold text-brand-text mb-2">Beneficiile evaluării timpurii</h3>
                    <p className="text-sm text-brand-text/70 mb-2">
                      O evaluare psihologică completă oferă multiple avantaje:
                    </p>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Identificarea punctelor forte și a domeniilor care necesită suport</li>
                      <li>• Elaborarea unui plan personalizat de intervenție</li>
                      <li>• Orientarea către servicii specializate când este necesar</li>
                      <li>• Sprijinirea părinților cu strategii concrete de abordare</li>
                      <li>• Facilitarea comunicării cu școala și alte instituții</li>
                      <li>• Prevenirea agravării dificultăților prin intervenție timpurie</li>
                    </ul>
                  </div>
                  </div>
                <div className="clear-both mt-4 pt-4 border-t border-stone-200">
                  <div className="flex items-center text-sm text-brand-text/60">
                    <span>📅 5 octombrie 2025</span>
                    <span className="mx-2">•</span>
                    <span>👤 Maria Popescu</span>
                  </div>
                </div>
              </div>
            </article>          {/* Article 2 - Eating Disorder */}
          <article className="article-card bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="p-6 lg:p-8">
              <div className="lg:float-left lg:w-64 lg:mr-6 lg:mb-4">
                <img 
                  src="./assets/self-esteem.webp"
                  alt="Tulburarea de alimentație compulsivă"
                  className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h2 className="text-xl lg:text-2xl font-serif text-brand-text mb-4">
                Tulburarea de alimentație compulsivă
              </h2>
              <div className="text-sm lg:text-base text-brand-text/80 leading-relaxed">
                  <p className="mb-4">
                    Mâncatul compulsiv pe fond emoțional (emotional eating) reprezintă o strategie disfuncțională de reglare emoțională, frecvent întâlnită la femeile tinere și adulte, care recurg la hrană pentru a face față stresului, anxietății, tristeții sau sentimentelor de vinovăție.
                  </p>
                  <p className="mb-6">
                    În spatele acestui comportament se află adesea mecanisme de apărare și distorsiuni cognitive ce mențin un cerc vicios între emoții, alimentație și imagine corporală.
                  </p>
                  
                  <h3 className="text-xl font-bold text-brand-text mt-6 mb-4">Mecanisme psihologice implicate</h3>
                  
                  <h4 className="text-lg font-semibold text-brand-text mt-4 mb-2">a. Reglarea emoțională prin alimentație</h4>
                  <ul className="list-disc list-inside space-y-1 mb-4">
                    <li>Mâncarea devine un mod de calmare temporară a tensiunii interne.</li>
                    <li>Dopamina și serotonina eliberate prin alimente bogate în carbohidrați și grăsimi induc o stare de confort pe termen scurt.</li>
                    <li>Însă, ulterior apare vinovăția, care intensifică ciclul anxietate–mâncat compulsiv–autocritică.</li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold text-brand-text mt-4 mb-2">b. Anxietatea în situații stresante</h4>
                  <ul className="list-disc list-inside space-y-1 mb-4">
                    <li>Femeile care au un nivel crescut de anxietate pot simți pierderea controlului asupra corpului și alimentației.</li>
                    <li>În TCC, această pierdere de control este legată de credințe disfuncționale precum:</li>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>„Dacă nu sunt slabă, nu merit iubire."</li>
                      <li>„Mâncarea e singurul lucru care mă liniștește."</li>
                      <li>„Nu pot face față stresului fără să mănânc."</li>
                    </ul>
                  </ul>
                  
                  <h4 className="text-lg font-semibold text-brand-text mt-4 mb-2">c. Vinovăția legată de kilogramele în plus</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Vinovăția funcționează ca un mecanism de auto-pedepsire.</li>
                    <li>În plan psihodinamic, poate reprezenta o formă de control sau o revoltă reprimată („nu pot controla viața mea, dar pot controla corpul meu").</li>
                    <li>În plan cognitiv, vinovăția întreține rușinea, stima de sine scăzută și evitarea socială.</li>
                  </ul>
                </div>
              <div className="clear-both mt-4 pt-4 border-t border-stone-200">
                <div className="flex items-center text-sm text-brand-text/60">
                  <span>📅 3 octombrie 2025</span>
                  <span className="mx-2">•</span>
                  <span>👤 Maria Popescu</span>
                </div>
              </div>
            </div>
          </article>

          {/* Article 3 - Sleep Hygiene */}
          <article className="article-card bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="p-6 lg:p-8">
              <div className="lg:float-left lg:w-64 lg:mr-6 lg:mb-4">
                <img 
                  src="./assets/therapy-session.webp"
                  alt="Igiena somnului"
                  className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h2 className="text-xl lg:text-2xl font-serif text-brand-text mb-4">
                Igiena somnului – cum ne putem odihni suficient și bine
              </h2>
              <div className="text-sm lg:text-base text-brand-text/80 leading-relaxed">
                  <p className="mb-6">
                    Somnul odihnitor este esențial pentru echilibrul fizic, emoțional și cognitiv. Pentru a adormi ușor și a ne trezi revigorați, este important să respectăm o serie de reguli de igienă a somnului, adică obiceiuri sănătoase care susțin ritmul natural al corpului.
                  </p>
                  
                  <h3 className="text-xl font-bold text-brand-text mt-6 mb-4">🔹 1. Mediul de somn</h3>
                  <ul className="list-disc list-inside space-y-1 mb-4">
                    <li>Dormitorul trebuie să fie răcoros, aerisit și întunecat (temperatura ideală: 18–20°C).</li>
                    <li>Evită lumina albastră emisă de ecrane (telefon, tabletă, TV) cu cel puțin 30–60 de minute înainte de somn.</li>
                    <li>Scrolling-ul pe telefon înainte de culcare stimulează creierul, în loc să îl relaxeze.</li>
                    <li>Păstrează dormitorul doar pentru somn și relaxare, nu pentru muncă sau navigare online.</li>
                    <li>Este recomandat să nu ții animale de companie în pat sau dormitor, mai ales dacă somnul îți este fragmentat.</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold text-brand-text mt-6 mb-4">🔹 2. Rutina de seară</h3>
                  <ul className="list-disc list-inside space-y-1 mb-4">
                    <li>Creează o rutină constantă: culcă-te și trezește-te aproximativ la aceleași ore, inclusiv în weekend.</li>
                    <li>Evită mesele grele, cofeina, alcoolul și nicotina în a doua parte a zilei.</li>
                    <li>Redu lumina puternică și zgomotele. Poți folosi o lampă caldă sau lumina difuză.</li>
                    <li>Activități relaxante înainte de culcare:</li>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>un duș călduț,</li>
                      <li>respirație lentă,</li>
                      <li>stretching ușor,</li>
                      <li>lectură liniștită.</li>
                    </ul>
                  </ul>
                  
                  <h3 className="text-xl font-bold text-brand-text mt-6 mb-4">🔹 3. Gestionarea stresului și a gândurilor dinainte de somn</h3>
                  <ul className="list-disc list-inside space-y-1 mb-4">
                    <li>Dacă te simți stresat, apelează la exerciții de relaxare:</li>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>respirație diafragmatică,</li>
                      <li>relaxare musculară progresivă,</li>
                      <li>mindfulness (focalizarea pe senzațiile prezente),</li>
                      <li>vizualizare ghidată („mă aflu într-un loc sigur și liniștit…").</li>
                    </ul>
                    <li>Evită să aduci în pat grijile zilei — dacă apar gânduri stresante, notează-le într-un jurnal și promite-ți să le reiei dimineața.</li>
                    <li>Dacă nu adormi în 15–20 de minute, ridică-te din pat, mergi într-o altă cameră și fă o activitate liniștită până când simți somnolență.</li>
                  </ul>
                </div>
                <div className="clear-both mt-4 pt-4 border-t border-stone-200">
                  <div className="flex items-center text-sm text-brand-text/60">
                    <span>📅 1 octombrie 2025</span>
                    <span className="mx-2">•</span>
                    <span>👤 Maria Popescu</span>
                  </div>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-serif text-brand-text mb-8">
            Vrei să Afli Mai Mult?
          </h2>
          <blockquote className="text-lg lg:text-xl text-brand-text/80 mb-8 leading-relaxed italic border-l-2 border-brand-accent pl-6 max-w-2xl mx-auto">
            "Informarea este primul pas către înțelegere și vindecare. Sunt aici să îți ofer sprijinul de care ai nevoie."
          </blockquote>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/" 
              className="cta-button inline-block px-10 py-3 border-2 border-brand-text text-brand-text font-serif text-lg hover:bg-brand-text hover:text-white transition-all duration-300"
            >
              ← Înapoi la Pagina Principală
            </Link>
            <Link 
              to="/servicii" 
              className="cta-button inline-block px-10 py-3 bg-brand-accent text-white font-serif text-lg hover:bg-brand-accent/90 transition-all duration-300"
            >
              Vezi Serviciile
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticolePage;