"use client";

import React, { useEffect } from "react";
import Link from "../components/Link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PageSchema } from "../components/PageSchema";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ArticolePage: React.FC = () => {
  useEffect(() => {
    // Add gsap-loaded class to enable visibility after GSAP is ready
    document.body.classList.add("gsap-loaded");

    // Set default ease for psychological comfort
    gsap.defaults({ ease: "power2.out", duration: 1.2 });

    // Hero Animation
    gsap.fromTo(
      ".hero-title",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        delay: 0.3,
      }
    );

    // Articles Animation
    ScrollTrigger.create({
      trigger: ".articles-container",
      start: "top 80%",
      end: "bottom 20%",
      animation: gsap.fromTo(
        ".article-card",
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.1)",
        }
      ),
    });

    // CTA Buttons Animation
    gsap.utils.toArray(".cta-button").forEach((button) => {
      const element = button as HTMLElement;
      ScrollTrigger.create({
        trigger: element,
        start: "top 90%",
        animation: gsap.fromTo(
          element,
          { opacity: 0, scale: 0.8, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.3)",
          }
        ),
      });
    });

    // Handle hash navigation to specific articles
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        // Wait for the page to render and animations to start
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 800); // Allow time for animations to partially complete
      }
    };

    handleHashNavigation();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-stone-50">
      <PageSchema
        breadcrumbs={[
          { name: "Acasă", url: "https://www.popescumaria.ro/" },
          { name: "Articole", url: "https://www.popescumaria.ro/articole" },
        ]}
        type="CollectionPage"
        title="Articole de Psihologie: Evaluare Copii, Somn, Alimentație"
        description="Articole scrise de psiholog Maria Popescu despre evaluarea psihologică a copilului, tulburarea de alimentație compulsivă și igiena somnului."
      />
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-stone-50">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h1 className="hero-title text-4xl lg:text-5xl xl:text-6xl font-serif text-brand-text mb-8 leading-tight">
            Articole de Specialitate
          </h1>
          <p className="hero-title text-lg lg:text-xl text-brand-text/80 max-w-2xl mx-auto leading-relaxed">
            Informații utile despre sănătate mentală, dezvoltarea personală și
            tehnici de terapie
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="articles-container py-16 lg:py-24 bg-stone-100">
        <div className="container mx-auto max-w-4xl px-4">
          {/* Articles List */}
          <div className="space-y-16">
            {/* Article 1 - Child Psychology Evaluation */}
            <article
              id="evaluarea-psihologica"
              className="article-card bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              <div className="p-6 lg:p-8">
                <div className="lg:float-left lg:w-64 lg:mr-6 lg:mb-4">
                  <img
                    src="./assets/kids-drawing.webp"
                    alt="Evaluarea psihologică la copil"
                    className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-serif text-brand-text mb-4">
                  Ce implică evaluarea psihologică la copil
                </h2>
                <div className="text-base lg:text-lg text-brand-text/80 leading-relaxed">
                  <p>
                    Evaluarea psihologică la copil este un proces prin care
                    psihologul explorează dezvoltarea emoțională, cognitivă,
                    comportamentală și socială a copilului.
                  </p>
                  <p>
                    Scopul ei este să înțeleagă cum gândește, cum simte și cum
                    reacționează copilul în diferite situații, pentru a oferi
                    sprijin adecvat în funcție de nevoile sale.
                  </p>
                  <p>
                    Evaluarea nu este un „test care se trece sau se pică", ci o
                    modalitate de a înțelege unicitatea fiecărui copil.
                  </p>

                  <h3 className="text-xl lg:text-2xl font-bold text-brand-text mt-4 mb-3">
                    Când este recomandată evaluarea psihologică?
                  </h3>

                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className="text-base font-semibold text-brand-text mb-2 flex items-center">
                        🧒 În primii ani (2–6 ani)
                      </h4>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>
                          Întârziere în vorbire sau în achizițiile cognitive.
                        </li>
                        <li>
                          Dificultăți de atenție, neliniște, impulsivitate.
                        </li>
                        <li>Dificultăți în relaționarea cu ceilalți copii.</li>
                        <li>
                          Reacții intense la frustrare sau opoziție față de
                          reguli.
                        </li>
                        <li>
                          Suspiciune de întârziere în dezvoltare, autism sau
                          tulburare de limbaj.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-base font-semibold text-brand-text mb-2 flex items-center">
                        👧 La vârsta școlară (7–12 ani)
                      </h4>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>Probleme de învățare (scris, citit, calcul).</li>
                        <li>
                          Concentrare scăzută, neatenție sau neliniște
                          constantă.
                        </li>
                        <li>Scădere bruscă a rezultatelor școlare.</li>
                        <li>
                          Anxietate față de școală, refuz de a merge la ore.
                        </li>
                        <li>
                          Dificultăți de adaptare la reguli, conflicte cu
                          colegii sau profesorii.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-base font-semibold text-brand-text mb-2 flex items-center">
                        🧑 În adolescență
                      </h4>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>
                          Modificări de dispoziție, retragere socială, lipsă de
                          motivație.
                        </li>
                        <li>Conflicte repetate cu părinții sau autoritatea.</li>
                        <li>
                          Stres crescut, tulburări de somn, alimentație sau
                          imagine corporală.
                        </li>
                        <li>
                          Dificultăți de identitate, autocontrol sau
                          relaționare.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="clear-both mt-4 pt-4 border-t border-stone-200">
                  <div className="flex items-center text-sm text-brand-text/60">
                    <span>👤 Maria Popescu</span>
                  </div>
                </div>
              </div>
            </article>{" "}
            {/* Article 2 - Eating Disorder */}
            <article
              id="tulburarea-alimentatie"
              className="article-card bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              <div className="p-6 lg:p-8">
                <div className="lg:float-left lg:w-64 lg:mr-6 lg:mb-4">
                  <img
                    src="./assets/self-esteem.webp"
                    alt="Tulburarea de alimentație compulsivă"
                    className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-serif text-brand-text mb-4">
                  Tulburarea de alimentație compulsivă
                </h2>
                <div className="text-base lg:text-lg text-brand-text/80 leading-relaxed">
                  <p className="mb-4">
                    Mâncatul compulsiv pe fond emoțional (emotional eating)
                    reprezintă o strategie disfuncțională de reglare emoțională,
                    frecvent întâlnită la femeile tinere și adulte, care recurg
                    la hrană pentru a face față stresului, anxietății, tristeții
                    sau sentimentelor de vinovăție.
                  </p>
                  <p className="mb-6">
                    În spatele acestui comportament se află adesea mecanisme de
                    apărare și distorsiuni cognitive ce mențin un cerc vicios
                    între emoții, alimentație și imagine corporală.
                  </p>

                  <h3 className="text-xl lg:text-2xl font-bold text-brand-text mt-6 mb-4">
                    2. Mecanisme psihologice implicate
                  </h3>

                  <h4 className="text-lg lg:text-xl font-semibold text-brand-text mt-4 mb-2">
                    a. Reglarea emoțională prin alimentație
                  </h4>
                  <p className="mb-2">
                    Mâncarea devine un mod de calmare temporară a tensiunii
                    interne.
                  </p>
                  <p className="mb-2">
                    Dopamina și serotonina eliberate prin alimente bogate în
                    carbohidrați și grăsimi induc o stare de confort pe termen
                    scurt.
                  </p>
                  <p className="mb-4">
                    Însă, ulterior apare vinovăția, care intensifică ciclul
                    anxietate–mâncat compulsiv–autocritică.
                  </p>

                  <h4 className="text-lg lg:text-xl font-semibold text-brand-text mt-4 mb-2">
                    b. Anxietatea în situații stresante
                  </h4>
                  <p className="mb-2">
                    Femeile care au un nivel crescut de anxietate pot simți
                    pierderea controlului asupra corpului și alimentației.
                  </p>
                  <p className="mb-2">
                    În TCC, această pierdere de control este legată de credințe
                    disfuncționale precum:
                  </p>
                  <p className="ml-4 mb-1">
                    „Dacă nu sunt slabă, nu merit iubire."
                  </p>
                  <p className="ml-4 mb-1">
                    „Mâncarea e singurul lucru care mă liniștește."
                  </p>
                  <p className="ml-4 mb-4">
                    „Nu pot face față stresului fără să mănânc."
                  </p>

                  <h4 className="text-lg lg:text-xl font-semibold text-brand-text mt-4 mb-2">
                    c. Vinovăția legată de kilogramele în plus
                  </h4>
                  <p className="mb-2">
                    Vinovăția funcționează ca un mecanism de auto-pedepsire.
                  </p>
                  <p className="mb-2">
                    În plan psihodinamic, poate reprezenta o formă de control
                    sau o revoltă reprimată („nu pot controla viața mea, dar pot
                    controla corpul meu").
                  </p>
                  <p className="mb-2">
                    În plan cognitiv, vinovăția întreține rușinea, stima de sine
                    scăzută și evitarea socială.
                  </p>
                </div>
                <div className="clear-both mt-4 pt-4 border-t border-stone-200">
                  <div className="flex items-center text-sm text-brand-text/60">
                    <span>👤 Maria Popescu</span>
                  </div>
                </div>
              </div>
            </article>
            {/* Article 3 - Sleep Hygiene */}
            <article
              id="igiena-somnului"
              className="article-card bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              <div className="p-6 lg:p-8">
                <div className="lg:float-left lg:w-64 lg:mr-6 lg:mb-4">
                  <img
                    src="./assets/sleep-struggle.jpg"
                    alt="Igiena somnului"
                    className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-serif text-brand-text mb-4">
                  Igiena somnului – cum ne putem odihni suficient și bine
                </h2>
                <div className="text-base lg:text-lg text-brand-text/80 leading-relaxed">
                  <p className="mb-6">
                    Somnul odihnitor este esențial pentru echilibrul fizic,
                    emoțional și cognitiv. Pentru a adormi ușor și a ne trezi
                    revigorați, este important să respectăm o serie de reguli de
                    igienă a somnului, adică obiceiuri sănătoase care susțin
                    ritmul natural al corpului.
                  </p>

                  <p className="mb-2">
                    Dormitorul trebuie să fie răcoros, aerisit și întunecat
                    (temperatura ideală: 18–20°C).
                  </p>
                  <p className="mb-2">
                    Evită lumina albastră emisă de ecrane (telefon, tabletă, TV)
                    cu cel puțin 30–60 de minute înainte de somn.
                  </p>
                  <p className="mb-2">
                    Scrolling-ul pe telefon înainte de culcare stimulează
                    creierul, în loc să îl relaxeze.
                  </p>
                  <p className="mb-2">
                    Păstrează dormitorul doar pentru somn și relaxare, nu pentru
                    muncă sau navigare online.
                  </p>
                  <p className="mb-6">
                    Este recomandat să nu ții animale de companie în pat sau
                    dormitor, mai ales dacă somnul îți este fragmentat
                  </p>

                  <h3 className="text-xl lg:text-2xl font-bold text-brand-text mt-6 mb-4">
                    🔹 2. Rutina de seară
                  </h3>
                  <p className="mb-2">
                    Creează o rutină constantă: culcă-te și trezește-te
                    aproximativ la aceleași ore, inclusiv în weekend.
                  </p>
                  <p className="mb-2">
                    Evită mesele grele, cofeina, alcoolul și nicotina în a doua
                    parte a zilei.
                  </p>
                  <p className="mb-2">
                    Redu lumina puternică și zgomotele. Poți folosi o lampă
                    caldă sau lumina difuză.
                  </p>
                  <p className="mb-2">
                    Activități relaxante înainte de culcare:
                  </p>
                  <p className="ml-4 mb-1">un duș călduț,</p>
                  <p className="ml-4 mb-1">respirație lentă,</p>
                  <p className="ml-4 mb-1">stretching ușor,</p>
                  <p className="ml-4 mb-6">lectură liniștită.</p>

                  <h3 className="text-xl lg:text-2xl font-bold text-brand-text mt-6 mb-4">
                    🔹 3. Gestionarea stresului și a gândurilor dinainte de somn
                  </h3>
                  <p className="mb-2">
                    Dacă te simți stresat, apelează la exerciții de relaxare:
                  </p>
                  <p className="ml-4 mb-1">respirație diafragmatică,</p>
                  <p className="ml-4 mb-1">relaxare musculară progresivă,</p>
                  <p className="ml-4 mb-1">
                    mindfulness (focalizarea pe senzațiile prezente),
                  </p>
                  <p className="ml-4 mb-4">
                    vizualizare ghidată („mă aflu într-un loc sigur și
                    liniștit…").
                  </p>
                  <p className="mb-2">
                    Evită să aduci în pat grijile zilei — dacă apar gânduri
                    stresante, notează-le într-un jurnal și promite-ți să le
                    reiei dimineața.
                  </p>
                  <p className="mb-2">
                    Dacă nu adormi în 15–20 de minute, ridică-te din pat, mergi
                    într-o altă cameră și fă o activitate liniștită până când
                    simți somnolență.
                  </p>
                </div>
                <div className="clear-both mt-4 pt-4 border-t border-stone-200">
                  <div className="flex items-center text-sm text-brand-text/60">
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
            "Informarea este primul pas către înțelegere și vindecare. Sunt aici
            să îți ofer sprijinul de care ai nevoie."
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
