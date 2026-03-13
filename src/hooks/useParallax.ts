import { useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  offset?: ['start end', 'end start'];
}

/**
 * Hook for creating parallax scroll effects
 * Elements move at different speeds relative to scroll position
 */
export const useParallax = (options: ParallaxOptions = {}) => {
  const {
    speed = 0.5,
    direction = 'up',
    offset = ['start end', 'end start'] as const,
  } = options;
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  // Calculate transform values based on direction and speed
  const getTransformRange = () => {
    const range = 100 * speed;

    switch (direction) {
      case 'up':
        return [range, -range];
      case 'down':
        return [-range, range];
      case 'left':
        return [range, -range];
      case 'right':
        return [-range, range];
      default:
        return [range, -range];
    }
  };

  const transformRange = getTransformRange();

  // Create transform values based on direction
  const transforms = {
    y:
      direction === 'up' || direction === 'down'
        ? useTransform(scrollYProgress, [0, 1], transformRange)
        : 0,
    x:
      direction === 'left' || direction === 'right'
        ? useTransform(scrollYProgress, [0, 1], transformRange)
        : 0,
  };

  return {
    ref,
    style: {
      y: transforms.y,
      x: transforms.x,
    },
  };
};

/**
 * Hook for creating scale-based parallax effects
 * Elements scale during scroll
 */
export const useParallaxScale = (scaleRange: [number, number] = [0.8, 1.2]) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'] as const,
  });

  const scale = useTransform(scrollYProgress, [0, 1], scaleRange);

  return {
    ref,
    style: { scale },
  };
};

/**
 * Hook for creating rotation-based parallax effects
 * Elements rotate during scroll
 */
export const useParallaxRotate = (
  rotateRange: [number, number] = [-10, 10]
) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'] as const,
  });

  const rotate = useTransform(scrollYProgress, [0, 1], rotateRange);

  return {
    ref,
    style: { rotate },
  };
};

export default useParallax;
