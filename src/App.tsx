import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ServiciiPage from './pages/ServiciiPage';
import DesprePage from './pages/DesprePage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import ArticolePage from './pages/ArticolePage';
import PrivacyPage from './pages/PrivacyPage';
import NotFoundPage from './pages/NotFoundPage';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/despre" element={<DesprePage />} />
        <Route path="/servicii" element={<ServiciiPage />} />
        <Route path="/articole" element={<ArticolePage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter basename="/maria-popescu">
      <ScrollToTop />
      <div className="min-h-screen bg-brand-bg text-brand-text font-sans">
        <Header />
        <main>
          <AnimatedRoutes />
        </main>
        <WhatsappButton />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App
