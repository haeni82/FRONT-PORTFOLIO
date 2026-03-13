import { useState, useEffect } from 'react';
import { throttle } from '../utils';

interface ScrollPosition {
  x: number;
  y: number;
}

/**
 * Hook to track scroll position with throttling for performance
 */
const useScrollPosition = (throttleMs: number = 16): ScrollPosition => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateScrollPosition = throttle(() => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    }, throttleMs);

    window.addEventListener('scroll', updateScrollPosition);
    return () => window.removeEventListener('scroll', updateScrollPosition);
  }, [throttleMs]);

  return scrollPosition;
};

export default useScrollPosition;
