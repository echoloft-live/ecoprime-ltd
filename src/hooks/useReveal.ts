import { useEffect, useRef } from 'react';

/**
 * Custom hook for Intersection Observer-based reveal animations.
 * Elements with the `.reveal` class get `.reveal--in` added when in view.
 * Respects prefers-reduced-motion.
 */
export function useReveal(threshold = 0.12) {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Skip animation for users who prefer reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll('.reveal');

    if (prefersReduced) {
      elements.forEach((el) => el.classList.add('reveal--in'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return containerRef;
}
