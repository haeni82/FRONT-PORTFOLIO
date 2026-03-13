import React from 'react';

interface GlowEffectProps {
  children: React.ReactNode;
  color?: 'sun' | 'peach' | 'custom';
  intensity?: 'subtle' | 'normal' | 'strong';
  hover?: boolean;
  className?: string;
}

const GlowEffect: React.FC<GlowEffectProps> = ({
  children,
  color = 'sun',
  intensity = 'normal',
  hover = false,
  className = '',
}) => {
  // Color and intensity combinations
  const glowStyles = {
    sun: {
      subtle: 'shadow-sun-glow/50',
      normal: 'shadow-sun-glow',
      strong: 'shadow-sun-glow-strong',
    },
    peach: {
      subtle: 'shadow-peach-glow/50',
      normal: 'shadow-peach-glow',
      strong: 'shadow-[0_0_40px_rgba(255,90,31,0.3)]',
    },
    custom: {
      subtle: 'shadow-lg',
      normal: 'shadow-xl',
      strong: 'shadow-2xl',
    },
  };

  const baseStyles = hover
    ? `transition-shadow duration-300 ease-out hover:${glowStyles[color][intensity]}`
    : `${glowStyles[color][intensity]}`;

  const combinedClassName = `
    ${baseStyles}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  return <div className={combinedClassName}>{children}</div>;
};

export default GlowEffect;
