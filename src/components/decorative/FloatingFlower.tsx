import React from 'react';
import { motion } from 'framer-motion';

interface FloatingFlowerProps {
  emoji: string;
  className?: string;
  duration?: number;
  delay?: number;
  size?: 'sm' | 'md' | 'lg';
  opacity?: number;
}

const FloatingFlower: React.FC<FloatingFlowerProps> = ({
  emoji,
  className = '',
  duration = 4,
  delay = 0,
  size = 'md',
  opacity = 0.6,
}) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <motion.div
      className={`pointer-events-none absolute select-none ${sizeClasses[size]} ${className}`}
      style={{ opacity }}
      animate={{
        y: [0, -12, 0],
        rotate: [0, 8, -8, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {emoji}
    </motion.div>
  );
};

export default FloatingFlower;
