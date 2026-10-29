"use client";

import { useEffect, useState } from "react";

// Pre-rendered HTML carries the build-time date; the real date is applied right after mount.
export function useNow(intervalMs?: number) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    setNow(new Date());
    if (!intervalMs) return;
    const id = setInterval(() => setNow(new Date()), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  return now;
}
