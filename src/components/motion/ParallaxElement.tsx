import React from 'react';
import { motion } from 'framer-motion';
import { useParallax } from '../../hooks/useParallax';

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  offset?: [string, string];
  className?: string;
}

/**
 * Element that moves with parallax effect based on scroll position
 */
const ParallaxElement: React.FC<ParallaxElementProps> = ({
  children,
  speed = 0.5,
  direction = 'up',
  offset = ['start end', 'end start'],
  className = '',
}) => {
  const { ref, style } = useParallax({
    speed,
    direction,
    offset: offset as ['start end', 'end start'],
  });

  return (
    <motion.div ref={ref} style={style} className={className}>
      {children}
    </motion.div>
  );
};

export default ParallaxElement;
