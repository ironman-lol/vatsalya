// src/hooks/usePrefersReducedMotion.ts
import { useState, useEffect } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

export function usePrefersReducedMotion() {
  // Default to no-motion if not supported or if user hasn't set preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY);
    
    // Set initial value
    setPrefersReducedMotion(mediaQueryList.matches);

    // Create event listener
    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Add listener
    mediaQueryList.addEventListener('change', listener);

    // Clean up
    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  }, []);

  return prefersReducedMotion;
}