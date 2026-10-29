import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const menuOverlayRef = useRef<HTMLDivElement>(null);
  const menuContentRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const menuItemsRef = useRef<(HTMLDivElement | HTMLButtonElement)[]>([]);

  // Helper function to check if a route is active
  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  // Add menu item to refs
  const addToMenuRefs = (el: HTMLDivElement | HTMLButtonElement | null) => {
    if (el && !menuItemsRef.current.includes(el)) {
      menuItemsRef.current.push(el);
    }
  };

  // Open mobile menu with GSAP animation
  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);

    // Reset menu items refs
    menuItemsRef.current = [];

    // Prevent body scroll
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";

    // Animate immediately since initial states are already set in CSS
    requestAnimationFrame(() => {
      if (!menuOverlayRef.current || !menuContentRef.current) return;

      // GSAP Animation Timeline
      const tl = gsap.timeline();

      // Animate overlay fade in
      tl.to(menuOverlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      // Animate menu content fade in - NO TRANSFORM
      tl.to(
        menuContentRef.current,
        {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        },
        "-=0.1"
      );

      // Animate menu items - simple fade in, no movement
      tl.to(
        menuItemsRef.current,
        {
          opacity: 1,
          duration: 0.3,
          stagger: 0,
          ease: "none",
        },
        "-=0.2"
      );
    });
  };

  // Close mobile menu with GSAP animation
  const closeMobileMenu = () => {
    if (!menuOverlayRef.current || !menuContentRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setIsMobileMenuOpen(false);
        // Restore body scroll
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.width = "";
      },
    });

    // Animate menu items out - simple fade, no movement
    tl.to(menuItemsRef.current, {
      opacity: 0,
      duration: 0.3,
      stagger: 0,
      ease: "none",
    });

    // Animate menu content fade out - NO TRANSFORM
    tl.to(
      menuContentRef.current,
      {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      },
      "-=0.1"
    );

    // Animate overlay fade out
    tl.to(
      menuOverlayRef.current,
      {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          if (menuOverlayRef.current) {
            gsap.set(menuOverlayRef.current, { visibility: "hidden" });
          }
        },
      },
      "-=0.2"
    );
  };

  // Close mobile menu when route changes
  useEffect(() => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-stone-200/98 backdrop-blur border-b border-stone-400/20 shadow-sm">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          {/* Logo Section - Desktop */}
          <Link
            to="/"
            className="group focus:outline-none"
            style={{ outline: "none", boxShadow: "none" }}
          >
            <img
              src="./assets/logo-complete.png"
              alt="Maria Popescu Psiholog"
              className="h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <nav className="flex items-center gap-12 text-base">
            <Link
              to="/"
              className={`transition-colors hover:text-brand-accent ${
                isActiveRoute("/")
                  ? "text-brand-accent font-medium"
                  : "text-brand-text"
              }`}
              style={{ outline: "none", boxShadow: "none" }}
            >
              Acasă
            </Link>
            <Link
              to="/despre"
              className={`transition-colors hover:text-brand-accent ${
                isActiveRoute("/despre")
                  ? "text-brand-accent font-medium"
                  : "text-brand-text"
              }`}
              style={{ outline: "none", boxShadow: "none" }}
            >
              Despre Mine
            </Link>
            <Link
              to="/servicii"
              className={`transition-colors hover:text-brand-accent ${
                isActiveRoute("/servicii")
                  ? "text-brand-accent font-medium"
                  : "text-brand-text"
              }`}
              style={{ outline: "none", boxShadow: "none" }}
            >
              Servicii
            </Link>
            <Link
              to="/articole"
              className={`transition-colors hover:text-brand-accent ${
                isActiveRoute("/articole")
                  ? "text-brand-accent font-medium"
                  : "text-brand-text"
              }`}
              style={{ outline: "none", boxShadow: "none" }}
            >
              Articole
            </Link>
            <Link
              to="/intrebari-frecvente"
              className={`transition-colors hover:text-brand-accent ${
                isActiveRoute("/intrebari-frecvente")
                  ? "text-brand-accent font-medium"
                  : "text-brand-text"
              }`}
              style={{ outline: "none", boxShadow: "none" }}
            >
              FAQ
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="flex items-center">
            {/* Phone Number - Enhanced styling */}
            <div className="hidden lg:flex items-center gap-3 text-brand-text">
              <div className="flex items-center justify-center w-10 h-10 bg-brand-accent/10 rounded-full">
                <i className="fas fa-phone text-sm text-brand-accent"></i>
              </div>
              <a
                href="tel:+40772246316"
                className="text-base font-medium hover:text-brand-accent transition-colors"
                style={{ outline: "none", boxShadow: "none" }}
              >
                0772 246 316
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex justify-between items-center relative">
          <div className="flex-1"></div>

          <Link
            to="/"
            className="group focus:outline-none flex-shrink-0"
            style={{ outline: "none", boxShadow: "none" }}
          >
            <img
              src="./assets/logo-complete.png"
              alt="Maria Popescu Psiholog"
              className="h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <div className="flex-1 flex justify-end">
            {/* Modern Hamburger Menu Button */}
            <button
              ref={hamburgerRef}
              onClick={() =>
                isMobileMenuOpen ? closeMobileMenu() : openMobileMenu()
              }
              className="relative p-3 focus:outline-none group z-[60]"
              style={{
                outline: "none !important",
                boxShadow: "none !important",
                border: "none !important",
              }}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block w-6 h-0.5 transition-all duration-300 ease-out transform origin-center ${
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-2 bg-white"
                      : "bg-brand-primary"
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 transition-all duration-300 ease-out ${
                    isMobileMenuOpen
                      ? "opacity-0 scale-x-0 bg-white"
                      : "opacity-100 scale-x-100 bg-brand-primary"
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 transition-all duration-300 ease-out transform origin-center ${
                    isMobileMenuOpen
                      ? "-rotate-45 -translate-y-2 bg-white"
                      : "bg-brand-primary"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Modern Full-Screen Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          ref={menuOverlayRef}
          className="fixed inset-0 z-[9999] w-screen h-screen"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0,
          }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(196, 224, 217, 0.95) 0%, rgba(232, 162, 152, 0.95) 100%)",
            }}
            onClick={closeMobileMenu}
          />

          {/* Menu Content */}
          <div
            ref={menuContentRef}
            className="relative h-full overflow-y-auto flex flex-col justify-center items-center text-center px-4 min-h-screen"
            style={{
              opacity: 0,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              ref={addToMenuRefs}
              onClick={closeMobileMenu}
              className="absolute top-4 right-4 z-10 p-3 hover:opacity-80 transition-opacity"
              style={{ opacity: 0 }}
            >
              <div className="w-6 h-6 flex items-center justify-center relative">
                <span className="block w-6 h-0.5 bg-white rotate-45 absolute" />
                <span className="block w-6 h-0.5 bg-white -rotate-45 absolute" />
              </div>
            </button>

            {/* Navigation Links */}
            <nav className="space-y-3 max-w-xs w-full">
              <div ref={addToMenuRefs} style={{ opacity: 0 }}>
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className={`block py-4 px-6 text-xl font-light text-stone-800 hover:text-brand-accent transition-all duration-300 rounded-xl hover:bg-white/20 text-center ${
                    isActiveRoute("/") ? "text-brand-accent bg-white/20" : ""
                  }`}
                >
                  Acasă
                </Link>
              </div>

              <div ref={addToMenuRefs} style={{ opacity: 0 }}>
                <Link
                  to="/despre"
                  onClick={closeMobileMenu}
                  className={`block py-4 px-6 text-xl font-light text-stone-800 hover:text-brand-accent transition-all duration-300 rounded-xl hover:bg-white/20 text-center ${
                    isActiveRoute("/despre")
                      ? "text-brand-accent bg-white/20"
                      : ""
                  }`}
                >
                  Despre Mine
                </Link>
              </div>

              <div ref={addToMenuRefs} style={{ opacity: 0 }}>
                <Link
                  to="/servicii"
                  onClick={closeMobileMenu}
                  className={`block py-4 px-6 text-xl font-light text-stone-800 hover:text-brand-accent transition-all duration-300 rounded-xl hover:bg-white/20 text-center ${
                    isActiveRoute("/servicii")
                      ? "text-brand-accent bg-white/20"
                      : ""
                  }`}
                >
                  Servicii
                </Link>
              </div>

              <div ref={addToMenuRefs} style={{ opacity: 0 }}>
                <Link
                  to="/articole"
                  onClick={closeMobileMenu}
                  className={`block py-4 px-6 text-xl font-light text-stone-800 hover:text-brand-accent transition-all duration-300 rounded-xl hover:bg-white/20 text-center ${
                    isActiveRoute("/articole")
                      ? "text-brand-accent bg-white/20"
                      : ""
                  }`}
                >
                  Articole
                </Link>
              </div>

              <div ref={addToMenuRefs} style={{ opacity: 0 }}>
                <Link
                  to="/intrebari-frecvente"
                  onClick={closeMobileMenu}
                  className={`block py-4 px-6 text-xl font-light text-stone-800 hover:text-brand-accent transition-all duration-300 rounded-xl hover:bg-white/20 text-center ${
                    isActiveRoute("/intrebari-frecvente")
                      ? "text-brand-accent bg-white/20"
                      : ""
                  }`}
                >
                  Întrebări Frecvente
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
