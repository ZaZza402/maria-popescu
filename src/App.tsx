import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import ScrollToTop from "./components/ScrollToTop";
import WebMcp from "./components/WebMcp";
import ScrollToTopButton from "./components/ScrollToTopButton";

// Direct imports for instant loading - no lazy loading
import HomePage from "./pages/HomePage";
import ServiciiPage from "./pages/ServiciiPage";
import DesprePage from "./pages/DesprePage";
import ArticolePage from "./pages/ArticolePage";
import FAQPage from "./pages/FAQPage";
import ProgramarePage from "./pages/ProgramarePage";
import PrivacyPage from "./pages/PrivacyPage";
import NotFoundPage from "./pages/NotFoundPage";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div className="page-transition-container">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <div className="page-content animate-fade-in">
              <HomePage />
            </div>
          }
        />
        <Route
          path="/despre"
          element={
            <div className="page-content animate-fade-in">
              <DesprePage />
            </div>
          }
        />
        <Route
          path="/servicii"
          element={
            <div className="page-content animate-fade-in">
              <ServiciiPage />
            </div>
          }
        />
        <Route
          path="/articole"
          element={
            <div className="page-content animate-fade-in">
              <ArticolePage />
            </div>
          }
        />
        <Route
          path="/intrebari-frecvente"
          element={
            <div className="page-content animate-fade-in">
              <FAQPage />
            </div>
          }
        />
        <Route
          path="/programare"
          element={
            <div className="page-content animate-fade-in">
              <ProgramarePage />
            </div>
          }
        />
        <Route
          path="/privacy"
          element={
            <div className="page-content animate-fade-in">
              <PrivacyPage />
            </div>
          }
        />
        <Route
          path="*"
          element={
            <div className="page-content animate-fade-in">
              <NotFoundPage />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

function App() {
  useEffect(() => {
    // CRITICAL: Tell browser to NOT restore scroll positions
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // FORCE reset scroll on every navigation - block browser cache
    const resetScroll = () => {
      window.scrollTo(0, 0);
    };

    // Run on every popstate (back/forward) and beforeunload
    window.addEventListener("popstate", resetScroll);
    window.addEventListener("beforeunload", resetScroll);

    // Initial reset
    resetScroll();

    return () => {
      window.removeEventListener("popstate", resetScroll);
      window.removeEventListener("beforeunload", resetScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <WebMcp />
      <div className="scroll-progress"></div>
      <div className="min-h-screen bg-brand-bg text-brand-text font-sans">
        <Header />
        <main>
          <AnimatedRoutes />
        </main>
        <WhatsappButton />
        <ScrollToTopButton />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
