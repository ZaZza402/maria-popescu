import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HomePage: React.FC = () => {
  useEffect(() => {
    // Add gsap-loaded class to enable visibility after GSAP is ready
    document.body.classList.add("gsap-loaded");

    // Set default ease for psychological comfort
    gsap.defaults({ ease: "power2.out", duration: 1.2 });

    // 1. Hero Section - Gentle Entry Animation
    gsap.fromTo(
      ".hero-text",
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.2,
        delay: 0.3,
      }
    );

    gsap.fromTo(
      ".hero-image",
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.8,
        ease: "power3.out",
        delay: 0.6,
      }
    );

    // 2. Services Section - Calm Reveal
    ScrollTrigger.create({
      trigger: ".services-section",
      start: "top 80%",
      end: "bottom 20%",
      animation: gsap
        .timeline()
        .fromTo(
          ".services-title",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1 }
        )
        .fromTo(
          ".services-card",
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.2)",
          },
          0.3
        ),
    });

    // 3. Services Items - Individual Hover Effects
    gsap.utils.toArray(".service-item").forEach((item) => {
      const element = item as HTMLElement;
      const tl = gsap.timeline({ paused: true });

      tl.to(element, {
        y: -8,
        scale: 1.02,
        boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
        duration: 0.3,
        ease: "power2.out",
      });

      element.addEventListener("mouseenter", () => tl.play());
      element.addEventListener("mouseleave", () => tl.reverse());
    });

    // 4. Enhanced Services Icon Animation - Paper Plane to Heart Transition
    ScrollTrigger.create({
      trigger: ".paper-plane-container",
      start: "top 80%",
      end: "bottom 20%",
      animation: gsap
        .timeline()
        // Phase 1: Paper Plane Entry
        .fromTo(
          ".paper-plane",
          {
            opacity: 0,
            x: -100,
            y: 50,
            rotation: -45,
            scale: 0.8,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
          }
        )
        // Phase 2: Paper Plane Gentle Float
        .to(
          ".paper-plane",
          {
            y: -10,
            rotation: 5,
            duration: 1.5,
            ease: "power2.inOut",
            yoyo: true,
            repeat: 1,
          },
          0.8
        )
        // Phase 3: Paper Plane Swirl Out
        .to(
          ".paper-plane",
          {
            rotation: 360,
            scale: 0,
            opacity: 0,
            duration: 1.2,
            ease: "power2.in",
          },
          4
        ) // Start after 4 seconds
        // Phase 4a: Services Icon Initial Fade In (start immediately with plane exit for visual overlap)
        .fromTo(
          ".services-icon",
          {
            opacity: 0.1, // Start with minimal visibility for immediate overlap
            scale: 0.1,
          },
          {
            opacity: 0.5, // Become more visible during overlap period
            scale: 0.5,
            duration: 1.2,
            ease: "power2.out",
          },
          4.0
        ) // Start exactly when paper plane begins its exit
        // Phase 4b: Services Icon Complete Entrance (finish the animation)
        .to(
          ".services-icon",
          {
            opacity: 1, // Complete fade to full visibility
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          5.2
        ) // Continue after overlap period
        // Phase 5: Services Icon Gentle Pulse
        .to(
          ".services-icon",
          {
            scale: 1.05,
            duration: 1.5,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1,
          },
          6.5
        ), // Start after heart fully appears (5.2 + 1.0 = 6.2, plus small delay)
    });

    // 5. Gallery Title Animation
    gsap.fromTo(
      ".gallery-title",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".gallery-title",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // 6. Horizontal Gallery Animation - Scalable Design
    gsap.utils.toArray(".gallery-item").forEach((item, index) => {
      const element = item as HTMLElement;

      // Simple entry animation
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 30,
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
            toggleActions: "play none none reverse",
          },
        }
      );

      // Click handled via React onClick per image
    });

    // 6. CTA Buttons - Pulse Effect on Scroll
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

    // 7. Quote Breathing Animation - Once on Scroll
    gsap.fromTo(
      ".breathing-element",
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
          toggleActions: "play none none none", // Only play once
        },
      }
    );

    // 8. Contact Section Button Animations - Lift from Buried State
    ScrollTrigger.create({
      trigger: ".contact-section",
      start: "top 70%",
      end: "bottom 30%",
      animation: gsap
        .timeline()
        .to(".contact-button-phone", {
          y: 0,
          opacity: 1,
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
          duration: 0.8,
          ease: "back.out(1.2)",
        })
        .to(
          ".contact-button-whatsapp",
          {
            y: 0,
            opacity: 1,
            boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
            duration: 0.8,
            ease: "back.out(1.2)",
          },
          0.3
        ), // Delay second button by 0.3 seconds
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      document.body.classList.remove("gsap-loaded");
    };
  }, []);

  // Open gallery modal reliably from React click handlers
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);

  // Zoom-in animation when the inline overlay appears
  useEffect(() => {
    if (selectedImage && overlayRef.current && previewRef.current) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.2, ease: "power2.out" }
      );
      gsap.fromTo(
        previewRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.25, ease: "power3.out" }
      );
    }
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section - Video background with content overlay */}
      <section className="relative bg-stone-900 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover lg:object-cover"
            style={{
              filter: "blur(3px)",
              transform: "scale(1.05)", // Slightly scale to hide blur edges
            }}
          >
            <source src="/assets/header_vid.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for content readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900/70 via-stone-800/60 to-stone-900/70"></div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto max-w-7xl px-4 relative z-10 py-8 lg:py-20">
          {/* Mobile: Text only centered layout - Compact spacing */}
          <div className="lg:hidden text-center flex flex-col justify-center min-h-[75vh] px-3">
            {/* Credentials with elegant background */}
            <div className="hero-text credentials space-y-2 mb-6">
              <div
                className="text-xl font-bold text-white leading-tight"
                style={{
                  textShadow:
                    "0 3px 6px rgba(0,0,0,0.6), 0 6px 12px rgba(0,0,0,0.4)",
                  letterSpacing: '0.3px'
                }}
              >
                Psiholog Clinician / Psihoterapeut
              </div>
              <div
                className="text-xl font-bold text-white leading-tight"
                style={{
                  textShadow:
                    "0 3px 6px rgba(0,0,0,0.6), 0 6px 12px rgba(0,0,0,0.4)",
                  letterSpacing: '0.3px'
                }}
              >
                Cognitiv-Comportamental
              </div>
            </div>

            {/* Quote with semi-transparent background card */}
            <div className="mb-6 max-w-lg mx-auto">
              <div 
                className="backdrop-blur-sm bg-black/30 rounded-xl p-5 border border-white/20"
                style={{
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
                }}
              >
                <blockquote
                  className="text-[15px] text-white leading-relaxed italic"
                  style={{
                    textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                  }}
                >
                  "Sunt psiholog clinician și psihoterapeut cognitiv-comportamental,
                  cu o vastă experiență în lucrul cu copii și adulți în domeniul
                  evaluării psihologice. Îmi doresc să creez un spațiu sigur, cald
                  și confidențial, unde fiecare persoană să se simtă ascultată și
                  înțeleasă."
                </blockquote>
              </div>
            </div>

            {/* CTA Button with enhanced styling */}
            <div className="hero-text flex justify-center items-center">
              <Link
                to="/despre"
                className="cta-button inline-block px-10 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-serif text-lg hover:bg-white hover:text-stone-900 transition-all duration-300 rounded-lg"
                style={{
                  textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                  boxShadow:
                    "0 6px 20px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1) inset",
                }}
              >
                Află mai multe
              </Link>
            </div>
          </div>

          {/* Desktop: Centered text layout - video background only */}
          <div className="hidden lg:flex lg:flex-col lg:justify-center lg:items-center lg:text-center min-h-[80vh] max-w-4xl mx-auto">
            <div className="hero-text credentials space-y-4 mb-8">
              <div className="text-3xl xl:text-4xl text-white font-semibold drop-shadow-lg">
                Psiholog Clinician / Psihoterapeut
              </div>
              <div className="text-3xl xl:text-4xl text-white font-semibold drop-shadow-lg">
                Cognitiv-Comportamental
              </div>
            </div>

            <blockquote className="hero-text text-xl text-white/90 mb-10 leading-relaxed italic breathing-element drop-shadow-lg max-w-3xl">
              "Sunt psiholog clinician și psihoterapeut cognitiv-comportamental,
              cu o vastă experiență în lucrul cu copii și adulți în domeniul
              evaluării psihologice. Îmi doresc să creez un spațiu sigur, cald
              și confidențial, unde fiecare persoană să se simtă ascultată și
              înțeleasă.
              <br />
              <br />
              Sunt dedicată sprijinirii clienților în explorarea emoțiilor,
              descoperirea de sine și dezvoltarea unor modalități sănătoase de a
              face față provocărilor vieții, cum ar fi anxietatea, depresia sau
              tulburările de alimentație. Obiectivul meu este să ofer suport
              empatic și să contribui la redescoperirea echilibrului și a
              resurselor interioare."
            </blockquote>

            <div className="hero-text flex items-center justify-center">
              <Link
                to="/despre"
                className="cta-button inline-block px-12 py-4 border-2 border-white text-white font-serif text-xl hover:bg-white hover:text-stone-900 transition-all duration-300 shadow-lg"
              >
                Află mai multe
              </Link>
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
                    <span className="text-xl lg:text-2xl text-brand-text mr-4">
                      -
                    </span>
                    <h4 className="text-lg lg:text-xl text-gray-600">
                      Psihoterapie Individuală
                    </h4>
                  </div>
                  <div className="service-item flex items-center">
                    <span className="text-xl lg:text-2xl text-brand-text mr-4">
                      -
                    </span>
                    <h4 className="text-lg lg:text-xl text-gray-600">
                      Psihoterapie de Cuplu
                    </h4>
                  </div>
                  <div className="service-item flex items-center">
                    <span className="text-xl lg:text-2xl text-brand-text mr-4">
                      -
                    </span>
                    <h4 className="text-lg lg:text-xl text-gray-600">
                      Psihoterapie pentru Copii
                    </h4>
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

              {/* Right Column - Animated Icons */}
              <div className="order-1 lg:order-2">
                <div className="flex justify-center lg:justify-end items-center">
                  <div className="paper-plane-container relative">
                    {/* Paper Plane Icon */}
                    <svg
                      className="paper-plane w-32 h-32 lg:w-48 lg:h-48 text-brand-accent"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>

                    {/* Services Icon (Heart/Care) - Initially Hidden */}
                    <svg
                      className="services-icon absolute inset-0 w-32 h-32 lg:w-48 lg:h-48 text-brand-primary opacity-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
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
                  onClick={(e) =>
                    setSelectedImage({
                      src: (e.currentTarget as HTMLImageElement).src,
                      alt: (e.currentTarget as HTMLImageElement).alt,
                    })
                  }
                />
              </div>
              <div className="gallery-item flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72 aspect-[2/3] overflow-hidden rounded-xl cursor-pointer group">
                <img
                  src="./assets/kids-therapy.webp"
                  alt="Terapie pentru copii"
                  className="gallery-image w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110"
                  onClick={(e) =>
                    setSelectedImage({
                      src: (e.currentTarget as HTMLImageElement).src,
                      alt: (e.currentTarget as HTMLImageElement).alt,
                    })
                  }
                />
              </div>
              <div className="gallery-item flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72 aspect-[2/3] overflow-hidden rounded-xl cursor-pointer group">
                <img
                  src="./assets/kids-playing.webp"
                  alt="Terapia prin joc"
                  className="gallery-image w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110"
                  onClick={(e) =>
                    setSelectedImage({
                      src: (e.currentTarget as HTMLImageElement).src,
                      alt: (e.currentTarget as HTMLImageElement).alt,
                    })
                  }
                />
              </div>
              <div className="gallery-item flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72 aspect-[2/3] overflow-hidden rounded-xl cursor-pointer group">
                <img
                  src="./assets/kids-drawing.webp"
                  alt="Art terapie"
                  className="gallery-image w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110"
                  onClick={(e) =>
                    setSelectedImage({
                      src: (e.currentTarget as HTMLImageElement).src,
                      alt: (e.currentTarget as HTMLImageElement).alt,
                    })
                  }
                />
              </div>
              <div className="gallery-item flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72 aspect-[2/3] overflow-hidden rounded-xl cursor-pointer group">
                <img
                  src="./assets/self-esteem.webp"
                  alt="Dezvoltarea stimei de sine"
                  className="gallery-image w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110"
                  onClick={(e) =>
                    setSelectedImage({
                      src: (e.currentTarget as HTMLImageElement).src,
                      alt: (e.currentTarget as HTMLImageElement).alt,
                    })
                  }
                />
              </div>
              <div className="gallery-item flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72 aspect-[2/3] overflow-hidden rounded-xl cursor-pointer group">
                <img
                  src="./assets/sleep-struggle.jpg"
                  alt="Probleme de somn"
                  className="gallery-image w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110"
                  onClick={(e) =>
                    setSelectedImage({
                      src: (e.currentTarget as HTMLImageElement).src,
                      alt: (e.currentTarget as HTMLImageElement).alt,
                    })
                  }
                />
              </div>{" "}
              {/* Future images can be easily added here */}
            </div>

            {/* Subtle scroll indicator */}
            <div className="text-center mt-4">
              <p className="text-sm text-brand-text/60">
                <i className="fas fa-hand-point-right mr-2"></i>
                Glisează pentru a vedea mai multe imagini
              </p>
            </div>

            {/* Over-gallery lightbox */}
            {selectedImage && (
              <div
                ref={overlayRef}
                className="absolute inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
                onClick={() => setSelectedImage(null)}
              >
                <div
                  ref={previewRef}
                  className="relative max-w-[92vw] sm:max-w-[80vw] lg:max-w-[60vw] max-h-[80vh] will-change-transform"
                >
                  <button
                    aria-label="Închide previzualizarea"
                    className="absolute -top-3 -right-3 bg-white/80 text-brand-text rounded-full w-8 h-8 flex items-center justify-center shadow"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(null);
                    }}
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="max-h-[80vh] max-w-full object-contain rounded-md"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 lg:py-24 bg-stone-200">
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
            <div className="bg-stone-200 rounded-xl p-6 shadow-inner hover:shadow-inner transition-all duration-300 hover:bg-stone-300/50 border border-stone-300/30">
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
                Evaluarea psihologică la copil este un proces prin care
                psihologul explorează dezvoltarea emoțională, cognitivă,
                comportamentală și socială a copilului. Scopul ei este să
                înțeleagă cum gândește, cum simte și cum reacționează copilul...
              </p>
              <Link
                to="/articole#evaluarea-psihologica"
                className="inline-block w-full px-4 py-2 border-2 border-brand-text text-brand-text font-serif text-center hover:bg-brand-text hover:text-white transition-all duration-300 rounded-lg"
              >
                Citește articolul complet
              </Link>
            </div>

            {/* Article 2 - Eating Disorder */}
            <div className="bg-stone-200 rounded-xl p-6 shadow-inner hover:shadow-inner transition-all duration-300 hover:bg-stone-300/50 border border-stone-300/30">
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
                Mâncatul compulsiv pe fond emoțional reprezintă o strategie
                disfuncțională de reglare emoțională, frecvent întâlnită la
                femeile tinere și adulte, care recurg la hrană pentru a face
                față stresului...
              </p>
              <Link
                to="/articole#tulburarea-alimentatie"
                className="inline-block w-full px-4 py-2 border-2 border-brand-text text-brand-text font-serif text-center hover:bg-brand-text hover:text-white transition-all duration-300 rounded-lg"
              >
                Citește articolul complet
              </Link>
            </div>

            {/* Article 3 - Sleep Hygiene */}
            <div className="bg-stone-200 rounded-xl p-6 shadow-inner hover:shadow-inner transition-all duration-300 hover:bg-stone-300/50 border border-stone-300/30">
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
                Somnul odihnitor este esențial pentru echilibrul fizic,
                emoțional și cognitiv. Pentru a adormi ușor și a ne trezi
                revigorați, este important să respectăm o serie de reguli de
                igienă a somnului...
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

      {/* FAQ Section - Preview */}
      <section className="faq-preview-section py-16 lg:py-24 bg-stone-50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif text-brand-text mb-4">
              Întrebări Frecvente
            </h2>
            <p className="text-lg text-brand-text/70">
              Răspunsuri la cele mai comune întrebări despre serviciile de
              psihoterapie
            </p>
          </div>

          <div className="space-y-4 mb-10">
            {/* FAQ 1 */}
            <details className="group bg-white border border-stone-200/50 rounded-lg overflow-hidden hover:border-brand-accent/30 transition-all duration-300">
              <summary className="cursor-pointer px-6 py-5 font-serif text-lg text-brand-text hover:text-brand-accent transition-colors list-none flex items-center justify-between">
                <span>Cât durează o ședință de psihoterapie?</span>
                <svg
                  className="w-5 h-5 transform group-open:rotate-180 transition-transform duration-300"
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
              <div className="faq-content">
                <div className="px-6 pb-5 text-brand-text/80 leading-relaxed">
                  O ședință standard de psihoterapie durează aproximativ 50 de
                  minute. Pentru evaluările psihologice complexe, durata poate
                  fi de până la 120 de minute. Fiecare ședință este structurată
                  pentru a oferi timpul necesar explorării problemelor și
                  dezvoltării soluțiilor personalizate.
                </div>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-white border border-stone-200/50 rounded-lg overflow-hidden hover:border-brand-accent/30 transition-all duration-300">
              <summary className="cursor-pointer px-6 py-5 font-serif text-lg text-brand-text hover:text-brand-accent transition-colors list-none flex items-center justify-between">
                <span>Cum se desfășoară prima ședință?</span>
                <svg
                  className="w-5 h-5 transform group-open:rotate-180 transition-transform duration-300"
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
              <div className="faq-content">
                <div className="px-6 pb-5 text-brand-text/80 leading-relaxed">
                  Prima ședință este dedicată cunoașterii și evaluării inițiale.
                  Vom discuta despre motivul pentru care solicitați servicii
                  psihologice, istoricul personal relevant și obiectivele pe
                  care doriți să le atingeți prin terapie. Este un spațiu sigur
                  unde puteți vorbi liber, fără judecată.
                </div>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-white border border-stone-200/50 rounded-lg overflow-hidden hover:border-brand-accent/30 transition-all duration-300">
              <summary className="cursor-pointer px-6 py-5 font-serif text-lg text-brand-text hover:text-brand-accent transition-colors list-none flex items-center justify-between">
                <span>Sunt ședințele confidențiale?</span>
                <svg
                  className="w-5 h-5 transform group-open:rotate-180 transition-transform duration-300"
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
              <div className="faq-content">
                <div className="px-6 pb-5 text-brand-text/80 leading-relaxed">
                  Da, absolut. Confidențialitatea este un principiu fundamental
                  în psihoterapie. Toate informațiile discutate în cadrul
                  ședințelor sunt strict confidențiale și protejate conform
                  Codului Deontologic al Psihologilor și legislației GDPR.
                  Excepțiile sunt doar situațiile de pericol iminent conform
                  legii.
                </div>
              </div>
            </details>
          </div>

          {/* CTA to Full FAQ Page */}
          <div className="text-center">
            <Link
              to="/intrebari-frecvente"
              className="inline-block px-10 py-3 bg-brand-accent text-white font-serif text-lg hover:bg-brand-accent/90 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg"
            >
              Vezi toate întrebările frecvente
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="contact-section py-16 lg:py-24 bg-stone-200"
      >
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="contact-title text-4xl lg:text-5xl font-serif text-brand-text mb-4">
              Contact
            </h2>
            <p className="text-lg text-brand-text/70">
              Programează o ședință sau contactează-mă pentru mai multe
              informații
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="contact-info-card bg-stone-200 p-6 rounded-2xl shadow-inner border border-stone-300/30">
                <h3 className="text-xl font-serif text-brand-text mb-4">
                  Informații de Contact
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-phone text-brand-primary mr-4 w-5"></i>
                    <div>
                      <p className="font-medium text-brand-text">Telefon</p>
                      <a
                        href="tel:+40772246316"
                        className="text-brand-text/70 hover:text-brand-primary transition-colors"
                      >
                        +40 (772) 246 316
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <i className="fas fa-map-marker-alt text-brand-primary mr-4 w-5 mt-1"></i>
                    <div>
                      <p className="font-medium text-brand-text">Adresă</p>
                      <p className="text-brand-text/70">
                        Str. Cezar Bolliac, nr. 21
                        <br />
                        Sector 3, București
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-programare-card bg-stone-200 p-6 rounded-2xl shadow-inner border border-stone-300/30">
                <h3 className="text-xl font-serif text-brand-text mb-4">
                  Programare Rapidă
                </h3>
                <p className="text-brand-text/70 mb-4">
                  Sună pentru o programare rapidă sau trimite un mesaj WhatsApp.
                </p>
                <div className="flex gap-4">
                  <a
                    href="tel:+40772246316"
                    className="contact-button-phone flex-1 bg-brand-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-brand-text transition-colors duration-300 text-center transform translate-y-2 shadow-inner opacity-80"
                  >
                    <i className="fas fa-phone mr-2"></i>
                    Sună Acum
                  </a>
                  <a
                    href="https://wa.me/40772246316"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-button-whatsapp flex-1 bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300 text-center transform translate-y-2 shadow-inner opacity-80"
                  >
                    <i className="fab fa-whatsapp mr-2"></i>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-serif text-brand-text mb-4">
                Locație
              </h3>
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
