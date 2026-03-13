import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { useMotionPreference } from '../providers/MotionProvider';
import { getMotionVariants } from '../../utils/motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface MotionWrapperProps extends Omit<HTMLMotionProps<'div'>, 'variants'> {
  children: React.ReactNode;
  variant?: string;
  trigger?: 'scroll' | 'hover' | 'immediate';
  delay?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  as?: keyof HTMLMotionProps<any>;
}

const MotionWrapper: React.FC<MotionWrapperProps> = ({
  children,
  variant = 'fadeIn',
  trigger = 'scroll',
  delay = 0,
  threshold = 0.1,
  once = true,
  className = '',
  as = 'div',
  ...props
}) => {
  const { prefersReducedMotion } = useMotionPreference();
  const variants = getMotionVariants(variant, prefersReducedMotion);

  // Get scroll animation props if trigger is scroll
  const scrollProps = useScrollAnimation(threshold, once);

  // Create the motion component dynamically
  const MotionComponent = motion[
    as as keyof typeof motion
  ] as typeof motion.div;

  // Configure animation props based on trigger type
  const getAnimationProps = () => {
    const baseProps = {
      variants,
      className,
      ...props,
    };

    switch (trigger) {
      case 'scroll':
        return {
          ...baseProps,
          ...scrollProps,
          transition: {
            delay,
            ...(variants.animate as any)?.transition,
          },
        };

      case 'hover':
        return {
          ...baseProps,
          initial: 'initial',
          whileHover: 'hover',
          whileTap: 'tap',
          transition: {
            delay,
            ...(variants.animate as any)?.transition,
          },
        };

      case 'immediate':
        return {
          ...baseProps,
          initial: 'initial',
          animate: 'animate',
          transition: {
            delay,
            ...(variants.animate as any)?.transition,
          },
        };

      default:
        return baseProps;
    }
  };

  return <MotionComponent {...getAnimationProps()}>{children}</MotionComponent>;
};

export default MotionWrapper;
