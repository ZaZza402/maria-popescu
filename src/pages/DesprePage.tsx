import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PageSchema } from "../components/PageSchema";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const DesprePage: React.FC = () => {
  useEffect(() => {
    // Add gsap-loaded class to enable visibility after GSAP is ready
    document.body.classList.add("gsap-loaded");

    // Set default ease for psychological comfort
    gsap.defaults({ ease: "power2.out", duration: 1.2 });

    // Hero Animation - Portrait and Title
    gsap.fromTo(
      ".hero-portrait",
      {
        opacity: 0,
        scale: 0.8,
        y: 30,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.3,
      }
    );

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
        delay: 0.6,
      }
    );

    // About Section Animation
    ScrollTrigger.create({
      trigger: ".about-section",
      start: "top 80%",
      end: "bottom 20%",
      animation: gsap
        .timeline()
        .fromTo(
          ".about-title",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1 }
        )
        .fromTo(
          ".about-content",
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.1)",
          },
          0.3
        ),
    });

    // Experience Cards Animation
    ScrollTrigger.create({
      trigger: ".experience-section",
      start: "top 80%",
      end: "bottom 20%",
      animation: gsap
        .timeline()
        .fromTo(
          ".experience-title",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 }
        )
        .fromTo(
          ".experience-card",
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.2)",
          },
          0.2
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-stone-50">
      <PageSchema
        breadcrumbs={[
          { name: "Acasă", url: "https://www.popescumaria.ro/" },
          { name: "Despre", url: "https://www.popescumaria.ro/despre" }
        ]}
        type="AboutPage"
        title="Despre Maria Popescu - Psiholog Clinician"
        description="Psiholog clinician cu peste 15 ani de experiență în terapie individuală, de cuplu și familie. Abordare empatică și personalizată pentru fiecare client."
      />
      {/* Hero Section with Portrait */}
      <section className="pt-20 pb-12 bg-stone-50">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="hero-portrait mb-8 relative">
            <div className="relative w-64 h-64 lg:w-72 lg:h-72 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white ring-4 ring-brand-accent/20">
              <img
                src="./assets/maria-popescu-portrait.jpg"
                alt="Maria Popescu - Psiholog Clinician"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 20%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-stone-50/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
          <h1 className="hero-title text-4xl lg:text-5xl xl:text-6xl mb-6 leading-tight">
            <span className="hero-title font-serif font-bold text-brand-text block">
              Maria
            </span>
            <span className="hero-title font-serif font-bold text-brand-text block">
              Popescu
            </span>
          </h1>
          <div className="hero-title">
            <p className="text-xl lg:text-2xl text-brand-text font-medium mb-2">
              Psiholog Clinician
            </p>
            <p className="text-lg lg:text-xl text-brand-text/80 max-w-2xl mx-auto leading-relaxed">
              Psihoterapeut cognitiv-comportamental cu experiență în lucrul cu
              copii și adulți
            </p>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="about-section py-16 lg:py-24 bg-stone-100">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="about-title text-4xl lg:text-5xl font-serif text-brand-text mb-8">
              Despre Mine
            </h2>
            <p className="about-title text-lg lg:text-xl text-brand-text/80 max-w-2xl mx-auto leading-relaxed">
              Experiență și dedicare în psihologia clinică și psihoterapie
            </p>
          </div>

          <div className="about-content bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="space-y-6 text-brand-text leading-relaxed text-lg">
              <p>
                Sunt psiholog clinician și psihoterapeut
                cognitiv-comportamental, cu o vastă experiență în lucrul cu
                copii și adulți în domeniul evaluării psihologice. Îmi doresc să
                creez un spațiu sigur, cald și confidențial, unde fiecare
                persoană să se simtă ascultată și înțeleasă.
              </p>
              <p>
                Sunt dedicată sprijinirii clienților în explorarea emoțiilor,
                descoperirea de sine și dezvoltarea unor modalități sănătoase de
                a face față provocărilor vieții, cum ar fi anxietatea, depresia
                sau tulburările de alimentație. Obiectivul meu este să ofer
                suport empatic și să contribui la redescoperirea echilibrului și
                a resurselor interioare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Formation Section */}
      <section className="experience-section py-16 lg:py-24 bg-stone-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="experience-title text-4xl lg:text-5xl font-serif text-brand-text mb-8">
              Formare și Pregătire Profesională
            </h2>
            <p className="experience-title text-lg lg:text-xl text-brand-text/80 max-w-2xl mx-auto leading-relaxed">
              Parcursul meu educațional și profesional în psihologie
            </p>
          </div>

          <div className="experience-card bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="space-y-6 text-brand-text leading-relaxed text-lg">
              <p>
                Întotdeauna m-a fascinat felul în care gândim, simțim și ne
                construim relațiile. Alegerea Facultății de Psihologie a venit
                din dorința de a înțelege mai profund lumea interioară a
                oamenilor și de a-i sprijini atunci când trec prin momente
                dificile. Pentru mine, psihologia este mai mult decât o profesie
                – este o cale de a combina știința cu empatia, pentru a aduce
                schimbări pozitive în viața celor din jur.
              </p>
              <p>
                Această căutare m-a condus către un Master în Psihologia
                Sănătății, Cercetare Clinică și Optimizare Comportamentală la
                Universitatea din București, unde am descoperit cât de important
                este să privim omul în întregimea lui – cu gânduri, emoții,
                comportamente și nevoi unice.
              </p>
              <p>
                Ulterior, am ales să urmez formarea în psihoterapie
                cognitiv-comportamentală (CBT), o abordare terapeutică susținută
                de dovezi științifice, cunoscută pentru eficiența sa în
                înțelegerea și schimbarea tiparelor de gândire și comportament
                care pot provoca suferință. Prin intermediul acestei metode,
                oamenii învață să își recunoască dificultățile emoționale și să
                dezvolte, pas cu pas, strategii sănătoase și adaptate nevoilor
                lor, pentru a duce o viață mai echilibrată.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach & Philosophy Section */}
      <section className="experience-section py-16 lg:py-24 bg-stone-100">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="experience-title text-4xl lg:text-5xl font-serif text-brand-text mb-8">
              Abordarea Mea Terapeutică
            </h2>
            <p className="experience-title text-lg lg:text-xl text-brand-text/80 max-w-2xl mx-auto leading-relaxed">
              Principii și specialități în psihoterapie
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="experience-card bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl lg:text-3xl font-serif text-brand-text mb-6 flex items-center">
                <i className="fas fa-heart text-brand-accent mr-4"></i>
                Principii Fundamentale
              </h3>
              <ul className="space-y-4 text-brand-text text-lg">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-accent mt-1 mr-4"></i>
                  <span>Empatie și înțelegere necondiționată</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-accent mt-1 mr-4"></i>
                  <span>Mediu sigur și confidențial</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-accent mt-1 mr-4"></i>
                  <span>Abordare personalizată pentru fiecare client</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-accent mt-1 mr-4"></i>
                  <span>Colaborare activă în procesul terapeutic</span>
                </li>
              </ul>
            </div>

            <div className="experience-card bg-white rounded-3xl p-8 shadow-lg border-2 border-brand-accent/20">
              <h3 className="text-2xl lg:text-3xl font-serif text-brand-text mb-6 flex items-center">
                <i className="fas fa-brain text-brand-accent mr-4"></i>
                Specialități
              </h3>
              <ul className="space-y-4 text-brand-text text-lg">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-accent mt-1 mr-4"></i>
                  <span>Terapia cognitiv-comportamentală (CBT)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-accent mt-1 mr-4"></i>
                  <span>Evaluări psihologice complete</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-accent mt-1 mr-4"></i>
                  <span>Terapie pentru cerințe educaționale speciale</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-brand-accent mt-1 mr-4"></i>
                  <span>Interventii ABA pentru dezvoltare</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-serif text-brand-text mb-8">
            Să Începem Împreună Această Călătorie
          </h2>
          <blockquote className="text-lg lg:text-xl text-brand-text/80 mb-8 leading-relaxed italic border-l-2 border-brand-accent pl-6 max-w-2xl mx-auto">
            "Fiecare pas către schimbare contează. Sunt aici să te însoțesc cu
            răbdare, empatie și profesionalism în drumul tău către echilibru și
            dezvoltare personală."
          </blockquote>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:+40772246316"
              className="cta-button inline-block px-10 py-3 border-2 border-brand-text text-brand-text font-serif text-lg hover:bg-brand-text hover:text-white transition-all duration-300"
            >
              Sună Acum: 0772 246 316
            </a>
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

export default DesprePage;
