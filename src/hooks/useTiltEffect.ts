import { useRef, useEffect } from 'react';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltOptions {
  intensity?: number;
  scale?: number;
  speed?: number;
  perspective?: number;
  reset?: boolean;
  glare?: boolean;
}

/**
 * Hook for 3D tilt effect based on mouse position
 * Returns motion values and ref for the tilt element
 */
export const useTiltEffect = (options: TiltOptions = {}) => {
  const {
    intensity = 10,
    scale = 1.02,
    speed = 400,
    perspective = 1000,
    reset = true,
    glare = false,
  } = options;

  const ref = useRef<HTMLDivElement>(null);

  // Motion values for mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations for smooth movement
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [intensity, -intensity]),
    { stiffness: speed, damping: 30 }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-intensity, intensity]),
    { stiffness: speed, damping: 30 }
  );

  const scaleValue = useSpring(1, { stiffness: speed, damping: 30 });

  // Glare effect position (optional)
  const glareX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate relative position (-0.5 to 0.5)
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);

      mouseX.set(x);
      mouseY.set(y);
      scaleValue.set(scale);
    };

    const handleMouseLeave = () => {
      if (reset) {
        mouseX.set(0);
        mouseY.set(0);
        scaleValue.set(1);
      }
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, scaleValue, scale, reset]);

  // Return motion values and styles
  return {
    ref,
    style: {
      rotateX,
      rotateY,
      scale: scaleValue,
      transformPerspective: perspective,
    },
    glare: glare
      ? {
          x: glareX,
          y: glareY,
        }
      : null,
  };
};

/**
 * Simplified tilt hook for basic hover effects
 */
export const useSimpleTilt = (intensity: number = 5) => {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-1, 1], [intensity, -intensity]);
  const rotateY = useTransform(mouseX, [-1, 1], [-intensity, intensity]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);

      mouseX.set(x);
      mouseY.set(y);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return {
    ref,
    style: {
      rotateX,
      rotateY,
    },
  };
};

export default useTiltEffect;
