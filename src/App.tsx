import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';


// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const ServiciiPage = lazy(() => import('./pages/ServiciiPage'));
const DesprePage = lazy(() => import('./pages/DesprePage'));
const ArticolePage = lazy(() => import('./pages/ArticolePage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-light to-white">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-brand-accent border-t-transparent mx-auto mb-4"></div>
      <p className="text-brand-text/80">Se încarcă...</p>
    </div>
  </div>
);

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <div className="page-transition-container">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<div className="page-content animate-fade-in"><HomePage /></div>} />
          <Route path="/despre" element={<div className="page-content animate-fade-in"><DesprePage /></div>} />
          <Route path="/servicii" element={<div className="page-content animate-fade-in"><ServiciiPage /></div>} />
          <Route path="/articole" element={<div className="page-content animate-fade-in"><ArticolePage /></div>} />
          <Route path="/privacy" element={<div className="page-content animate-fade-in"><PrivacyPage /></div>} />
          <Route path="*" element={<div className="page-content animate-fade-in"><NotFoundPage /></div>} />
        </Routes>
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
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
    </HashRouter>
  );
}

export default App
