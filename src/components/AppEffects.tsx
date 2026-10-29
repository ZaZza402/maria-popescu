"use client";

import { useEffect } from "react";

// Ports the global scroll behaviour that previously lived in App.tsx.
export default function AppEffects() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const resetScroll = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("popstate", resetScroll);
    window.addEventListener("beforeunload", resetScroll);
    resetScroll();

    return () => {
      window.removeEventListener("popstate", resetScroll);
      window.removeEventListener("beforeunload", resetScroll);
    };
  }, []);

  return null;
}
