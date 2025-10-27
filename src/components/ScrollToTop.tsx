import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // useLayoutEffect runs BEFORE browser paints - no visible scroll
    if (!hash) {
      // No hash: jump to top IMMEDIATELY before paint
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  useLayoutEffect(() => {
    // Separate effect for hash scrolling (after content renders)
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
};

export default ScrollToTop;
