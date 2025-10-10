import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant scroll to top to simulate page navigation
    // This makes it feel like visiting a new page rather than scrolling within the same page
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;