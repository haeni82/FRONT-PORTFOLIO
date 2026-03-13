import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  initial: string;
  whileInView: string;
  viewport: {
    once: boolean;
    amount: number;
  };
}

/**
 * Hook for scroll-triggered animations using Framer Motion's whileInView
 * @param threshold - Intersection threshold (0-1)
 * @param once - Whether animation should trigger only once
 * @returns Animation props for Framer Motion components
 */
export const useScrollAnimation = (
  threshold: number = 0.1,
  once: boolean = true
): ScrollAnimationProps => {
  return {
    initial: 'initial',
    whileInView: 'animate',
    viewport: {
      once,
      amount: threshold,
    },
  };
};

/**
 * Hook for custom scroll-triggered animations using IntersectionObserver
 * Useful for more complex scroll-based interactions
 */
export const useIntersectionObserver = (
  threshold: number = 0.1,
  rootMargin: string = '0px'
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isCurrentlyIntersecting = entry.isIntersecting;
        setIsIntersecting(isCurrentlyIntersecting);

        if (isCurrentlyIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, hasIntersected]);

  return {
    ref,
    isIntersecting,
    hasIntersected,
  };
};

/**
 * Hook for scroll progress tracking
 * Returns scroll progress as a value between 0 and 1
 */
export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = scrollHeight > 0 ? scrolled / scrollHeight : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return scrollProgress;
};

export default useScrollAnimation;
