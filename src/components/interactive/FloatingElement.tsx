import React from 'react';

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  intensity?: 'subtle' | 'normal' | 'strong';
  className?: string;
}

const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  delay = 0,
  duration = 3,
  intensity = 'normal',
  className = '',
}) => {
  // Intensity styles
  const intensityStyles = {
    subtle: 'hover:translate-y-[-5px]',
    normal: 'hover:translate-y-[-10px]',
    strong: 'hover:translate-y-[-15px]',
  };

  const animationStyle = {
    animation: `float ${duration}s ease-in-out infinite`,
    animationDelay: `${delay}s`,
  };

  const combinedClassName = `
    floating-animation
    transition-transform duration-300 ease-out
    ${intensityStyles[intensity]}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  return (
    <div className={combinedClassName} style={animationStyle}>
      {children}
    </div>
  );
};

export default FloatingElement;
