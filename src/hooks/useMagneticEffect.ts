import { useRef, useEffect } from 'react';
import { useSpring } from 'framer-motion';

interface MagneticOptions {
  strength?: number;
  range?: number;
  speed?: number;
  restoreSpeed?: number;
}

/**
 * Hook for magnetic hover effect
 * Elements are attracted to the cursor when it's nearby
 */
export const useMagneticEffect = (options: MagneticOptions = {}) => {
  const {
    strength = 0.3,
    range = 100,
    speed = 300,
    restoreSpeed = 500,
  } = options;

  const ref = useRef<HTMLDivElement>(null);

  const springConfig = { stiffness: speed, damping: 30 };
  const restoreConfig = { stiffness: restoreSpeed, damping: 40 };

  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < range) {
        // Calculate magnetic pull based on distance
        const pullStrength = (range - distance) / range;
        const magneticX = deltaX * strength * pullStrength;
        const magneticY = deltaY * strength * pullStrength;

        x.set(magneticX);
        y.set(magneticY);
      } else {
        // Return to center when outside range
        x.set(0);
        y.set(0);
      }
    };

    const handleMouseLeave = () => {
      // Smooth return to center
      x.stop();
      y.stop();
      x.set(0);
      y.set(0);
    };

    // Listen to mouse events on the document for better tracking
    document.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [x, y, strength, range, restoreConfig]);

  return {
    ref,
    style: {
      x,
      y,
    },
  };
};

/**
 * Hook for magnetic button effect with text separation
 * Button container and text move independently for enhanced effect
 */
export const useMagneticButton = (options: MagneticOptions = {}) => {
  const {
    strength = 0.4,
    range = 80,
    speed = 400,
    restoreSpeed = 600,
  } = options;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const buttonX = useSpring(0, { stiffness: speed, damping: 30 });
  const buttonY = useSpring(0, { stiffness: speed, damping: 30 });
  const textX = useSpring(0, { stiffness: speed * 0.7, damping: 25 });
  const textY = useSpring(0, { stiffness: speed * 0.7, damping: 25 });

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < range) {
        const pullStrength = (range - distance) / range;
        const magneticX = deltaX * strength * pullStrength;
        const magneticY = deltaY * strength * pullStrength;

        // Button moves more
        buttonX.set(magneticX);
        buttonY.set(magneticY);

        // Text moves less for layered effect
        textX.set(magneticX * 0.5);
        textY.set(magneticY * 0.5);
      } else {
        buttonX.set(0);
        buttonY.set(0);
        textX.set(0);
        textY.set(0);
      }
    };

    const handleMouseLeave = () => {
      buttonX.set(0);
      buttonY.set(0);
      textX.set(0);
      textY.set(0);
    };

    document.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [buttonX, buttonY, textX, textY, strength, range, restoreSpeed]);

  return {
    buttonRef,
    textRef,
    buttonStyle: {
      x: buttonX,
      y: buttonY,
    },
    textStyle: {
      x: textX,
      y: textY,
    },
  };
};

/**
 * Hook for cursor-following effect
 * Element follows cursor with smooth spring animation
 */
export const useCursorFollow = (
  strength: number = 0.1,
  speed: number = 200
) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useSpring(0, { stiffness: speed, damping: 30 });
  const y = useSpring(0, { stiffness: speed, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const targetX = (e.clientX - window.innerWidth / 2) * strength;
      const targetY = (e.clientY - window.innerHeight / 2) * strength;

      x.set(targetX);
      y.set(targetY);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [x, y, strength]);

  return {
    ref,
    style: {
      x,
      y,
    },
  };
};

export default useMagneticEffect;
