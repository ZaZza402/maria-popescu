import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FAQPage: React.FC = () => {
  useEffect(() => {
    document.body.classList.add("gsap-loaded");
    gsap.defaults({ ease: "power2.out", duration: 1.2 });

    // Hero animation
    gsap.fromTo(
      ".faq-hero",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    );

    // FAQ items staggered animation
    ScrollTrigger.create({
      trigger: ".faq-list",
      start: "top 80%",
      animation: gsap.fromTo(
        ".faq-item",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power2.out" }
      ),
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const faqs = [
    {
      question: "Cât durează o ședință de psihoterapie?",
      answer:
        "O ședință standard de psihoterapie durează aproximativ 50 de minute. Pentru evaluările psihologice complexe, cum ar fi evaluarea pentru încadrarea în grad de handicap, durata poate fi de până la 120 de minute. Fiecare ședință este structurată pentru a oferi timpul necesar explorării problemelor și dezvoltării soluțiilor personalizate, într-un cadru sigur și confidențial.",
    },
    {
      question: "Cum se desfășoară prima ședință?",
      answer:
        "Prima ședință este dedicată cunoașterii și evaluării inițiale. Vom discuta despre motivul pentru care solicitați servicii psihologice, istoricul personal relevant și obiectivele pe care doriți să le atingeți prin terapie. Este un spațiu sigur unde puteți vorbi liber, fără judecată. Voi explica, de asemenea, modul în care se va desfășura procesul terapeutic și vom stabili împreună un plan personalizat.",
    },
    {
      question: "Sunt ședințele confidențiale?",
      answer:
        "Da, absolut. Confidențialitatea este un principiu fundamental în psihoterapie și este protejată de Codul Deontologic al Psihologilor din România și de legislația GDPR. Toate informațiile discutate în cadrul ședințelor sunt strict confidențiale. Excepțiile legale includ doar situațiile de pericol iminent pentru viața clientului sau a altora, conform prevederilor legale.",
    },
    {
      question: "Cât timp durează procesul terapeutic?",
      answer:
        "Durata terapiei variază în funcție de problematica abordată, obiectivele personale și complexitatea situației. Unele persoane observă îmbunătățiri semnificative după câteva ședințe, în timp ce altele beneficiază de un proces mai îndelungat. În medie, o terapie de scurtă durată poate include 8-12 ședințe, iar o terapie mai complexă poate dura 6-12 luni sau mai mult. Vom evalua împreună progresul și vom ajusta planul terapeutic după necesități.",
    },
    {
      question:
        "Care este diferența dintre consiliere psihologică și psihoterapie?",
      answer:
        "Consilierea psihologică este de obicei mai scurtă și se concentrează pe rezolvarea unor probleme specifice sau pe luarea unor decizii importante. Psihoterapia este un proces mai profund și de mai lungă durată, care abordează pattern-uri emoționale și comportamentale complexe, traumele sau tulburările psihice. Ambele sunt utile, iar alegerea depinde de nevoile și obiectivele dumneavoastră.",
    },
    {
      question: "Pot beneficia de servicii de psihoterapie și copiii?",
      answer:
        "Da, ofer servicii specializate pentru copii, inclusiv evaluare psihologică, consiliere și psihoterapie adaptată vârstei. Lucrez cu copii care se confruntă cu dificultăți emoționale, tulburări de comportament, anxietate, probleme de adaptare școlară sau cerințe educaționale speciale. Implicarea părinților este esențială în procesul terapeutic cu copiii.",
    },
    {
      question: "Ce este terapia cognitiv-comportamentală (CBT)?",
      answer:
        "Terapia cognitiv-comportamentală este o formă de psihoterapie structurată și orientată spre soluții, bazată pe evidențe științifice. Se concentrează pe identificarea și modificarea gândurilor negative și a comportamentelor disfuncționale care contribuie la problemele emoționale. Este eficientă în tratarea anxietății, depresiei, fobiilor, tulburărilor de panică și multor alte dificultăți psihologice.",
    },
    {
      question: "Ce este terapia ABA și pentru cine este recomandată?",
      answer:
        "Terapia ABA (Applied Behavior Analysis - Analiza Comportamentală Aplicată) este o intervenție comportamentală structurată, utilizată în principal pentru copiii cu tulburare de spectru autist și alte cerințe educaționale speciale. Se bazează pe principiile învățării și vizează dezvoltarea abilităților sociale, de comunicare, autonomie personală și reducerea comportamentelor problematice. Este o terapie personalizată, intensivă și bazată pe evidențe.",
    },
    {
      question: "Cum știu dacă am nevoie de psihoterapie?",
      answer:
        "Dacă simțiți că dificultățile emoționale sau comportamentale vă afectează viața de zi cu zi, relațiile, activitatea profesională sau bunăstarea generală, psihoterapia poate fi utilă. Semnele includ: anxietate persistentă, tristețe profundă, pierderea interesului pentru activități, dificultăți de somn, conflicte frecvente, traume nerezolvate sau nevoia de a înțelege mai bine propriile emoții și comportamente. Nu trebuie să așteptați o criză pentru a apela la un psiholog.",
    },
    {
      question: "Oferiți psihoterapie online sau doar la cabinet?",
      answer:
        "În prezent, ședințele se desfășoară la cabinet, într-un mediu sigur, confidențial și profesional, situat pe Strada Cezar Bolliac 21, Sector 3, București. Pentru situații speciale sau clienți din alte localități, pot fi discutate opțiuni alternative. Vă recomand să mă contactați telefonic sau pe WhatsApp pentru a discuta cele mai potrivite opțiuni pentru nevoile dumneavoastră.",
    },
    {
      question: "Ce tarife sunt aplicate pentru serviciile de psihoterapie?",
      answer:
        "Tarifele variază în funcție de tipul serviciului: consilierea psihologică costă 150 RON/ședință (50 min), psihoterapia individuală și terapia ABA costă 200 RON/ședință (50 min), psihoterapia de cuplu și familie costă 300 RON/ședință (50 min), iar evaluarea psihologică pentru încadrarea în grad de handicap costă 300 RON (120 min). Tarifele sunt transparente și pot fi discutate la prima întâlnire.",
    },
    {
      question: "Pot obține o rambursare de la asigurarea de sănătate?",
      answer:
        "Cabinetul nu oferă servicii decontate de Casa de Asigurări. Pentru servicii decontate, te rugăm să consulți lista furnizorilor autorizați. Pentru ședințele efectuate se eliberează factură.",
    },
    {
      question: "Cum mă pregătesc pentru prima ședință de terapie?",
      answer:
        "Nu este nevoie de o pregătire specială. Este util să vă gândiți la motivul pentru care solicitați terapie și la obiectivele pe care doriți să le atingeți. Puteți nota întrebări sau aspecte pe care doriți să le discutați. Cel mai important este să veniți cu deschidere și sinceritate. Prima ședință este o oportunitate de a vă simți confortabil și de a evalua dacă ne potrivim în cadrul procesului terapeutic.",
    },
    {
      question: "Ce se întâmplă dacă trebuie să anulez o programare?",
      answer:
        "Înțeleg că pot apărea situații neprevăzute. Vă rog să mă anunțați cu cel puțin 24 de ore înainte dacă trebuie să anulați sau să reprogramați o ședință. Acest lucru permite reprogramarea și gestionarea eficientă a timpului. Anulările făcute cu mai puțin de 24 de ore înainte sau absențele nemotivate pot fi taxate integral. Politica de anulare va fi discutată la prima întâlnire.",
    },
    {
      question: "Lucrați și cu cupluri sau doar cu persoane individuale?",
      answer:
        "Da, ofer psihoterapie de cuplu și familie, pe lângă psihoterapia individuală. Terapia de cuplu ajută la îmbunătățirea comunicării, rezolvarea conflictelor, reconstruirea încrederii și consolidarea legăturii emoționale. Terapia de familie abordează dinamicile familiale, conflictele intergeneraționale și sprijină dezvoltarea unei relații armonioase între membrii familiei. Ședințele de cuplu și familie durează 50 de minute și costă 300 RON.",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-brand-light to-stone-50">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h1 className="faq-hero text-4xl lg:text-5xl xl:text-6xl font-serif text-brand-text mb-6 leading-tight">
            Întrebări Frecvente
          </h1>
          <p className="faq-hero text-lg lg:text-xl text-brand-text/80 max-w-2xl mx-auto leading-relaxed">
            Răspunsuri detaliate la cele mai comune întrebări despre serviciile
            de psihoterapie, consiliere și evaluare psihologică
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="faq-list space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="faq-item group bg-white border border-stone-200/50 rounded-lg overflow-hidden hover:border-brand-accent/30 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <summary className="cursor-pointer px-6 py-5 font-serif text-lg lg:text-xl text-brand-text hover:text-brand-accent transition-colors list-none flex items-center justify-between">
                  <span className="pr-4">{faq.question}</span>
                  <svg
                    className="w-5 h-5 flex-shrink-0 transform group-open:rotate-180 transition-transform duration-300 text-brand-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="faq-content px-6 pb-5 pt-2 text-brand-text/80 leading-relaxed text-base lg:text-lg overflow-hidden">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-white border border-brand-accent/20 rounded-2xl p-8 lg:p-10 shadow-lg">
            <h3 className="text-2xl lg:text-3xl font-serif text-brand-text mb-4">
              Nu ați găsit răspunsul căutat?
            </h3>
            <p className="text-brand-text/70 mb-6 text-lg">
              Sunt aici să vă ajut. Contactați-mă pentru orice întrebare
              suplimentară.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+40772246316"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-brand-accent text-white font-serif text-lg hover:bg-brand-accent/90 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg"
              >
                <i className="fas fa-phone"></i>
                <span>Sună Acum</span>
              </a>
              <a
                href="https://wa.me/40772246316"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-green-500 text-white font-serif text-lg hover:bg-green-600 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg"
              >
                <i className="fab fa-whatsapp"></i>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-brand-text/70 hover:text-brand-accent transition-colors font-medium"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>Înapoi la pagina principală</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
