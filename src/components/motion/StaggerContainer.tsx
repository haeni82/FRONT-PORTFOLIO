import React from 'react';
import { motion } from 'framer-motion';
import { useMotionPreference } from '../providers/MotionProvider';
import { getMotionVariants } from '../../utils/motion';

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  childrenDelay?: number;
  className?: string;
  as?: 'div' | 'section' | 'ul' | 'ol';
}

/**
 * Container that staggers the animation of its children
 * Each child will animate in sequence with a delay
 */
const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.1,
  childrenDelay = 0.2,
  className = '',
  as = 'div',
}) => {
  const { prefersReducedMotion } = useMotionPreference();
  const variants = getMotionVariants('staggerContainer', prefersReducedMotion);

  // Create motion component based on 'as' prop
  const MotionComponent = motion[as];

  // Override transition with custom stagger timing
  const customVariants = {
    ...variants,
    animate: {
      ...variants.animate,
      transition: {
        staggerChildren: prefersReducedMotion ? 0.05 : staggerDelay,
        delayChildren: prefersReducedMotion ? 0 : childrenDelay,
      },
    },
  };

  return (
    <MotionComponent
      variants={customVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};

export default StaggerContainer;
