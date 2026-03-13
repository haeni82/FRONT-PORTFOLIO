import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { useMotionPreference } from '../providers/MotionProvider';
import { getMotionVariants } from '../../utils/motion';

interface StaggerItemProps extends Omit<HTMLMotionProps<'div'>, 'variants'> {
  children: React.ReactNode;
  variant?: string;
  className?: string;
  as?: keyof HTMLMotionProps<any>;
}

/**
 * Individual item to be used inside StaggerContainer
 * Will animate in sequence when parent container is in view
 */
const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  variant = 'staggerItem',
  className = '',
  as = 'div',
  ...props
}) => {
  const { prefersReducedMotion } = useMotionPreference();
  const variants = getMotionVariants(variant, prefersReducedMotion);

  // Create motion component based on 'as' prop
  const MotionComponent = motion[
    as as keyof typeof motion
  ] as typeof motion.div;

  return (
    <MotionComponent variants={variants} className={className} {...props}>
      {children}
    </MotionComponent>
  );
};

export default StaggerItem;
