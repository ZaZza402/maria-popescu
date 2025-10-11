import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If we have a hash, jump directly to that element without smooth scrolling
    if (hash) {
      const id = hash.replace('#', '');
      const html = document.documentElement;
      const prevBehavior = html.style.scrollBehavior;
      // Temporarily disable CSS smooth scroll to avoid animated scroll
      html.style.scrollBehavior = 'auto';

      const jumpTo = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'auto', block: 'start', inline: 'nearest' });
          // Restore previous behavior after this tick
          setTimeout(() => { html.style.scrollBehavior = prevBehavior; }, 0);
          return true;
        }
        return false;
      };

      // Try immediately, then on next frame if not yet rendered
      if (!jumpTo()) {
        requestAnimationFrame(() => {
          if (!jumpTo()) {
            // Fallback small delay in case content renders a bit later
            setTimeout(jumpTo, 50);
          }
        });
      }
    } else {
      // No hash: go to top instantly, not smooth
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;