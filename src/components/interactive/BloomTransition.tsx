import React, { useState, useEffect } from 'react';

interface BloomTransitionProps {
  children: React.ReactNode;
  trigger?: boolean;
  delay?: number;
  className?: string;
}

const BloomTransition: React.FC<BloomTransitionProps> = ({
  children,
  trigger = true,
  delay = 0,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (trigger) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [trigger, delay]);

  const combinedClassName = `
    transition-all duration-1000 ease-out
    ${
      isVisible
        ? 'opacity-100 scale-100 rotate-0'
        : 'opacity-0 scale-80 -rotate-12'
    }
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  return <div className={combinedClassName}>{children}</div>;
};

export default BloomTransition;
