import React from 'react';
import type { CardProps } from '../../types';

const Card: React.FC<CardProps> = ({
  variant = 'default',
  interactive = false,
  children,
  className = '',
  ...props
}) => {
  // Base styles
  const baseStyles = `
    rounded-2xl overflow-hidden
    transition-all duration-300 ease-out
  `;

  // Variant styles
  const variantStyles = {
    default: `
      bg-white/90 backdrop-blur-sm
      border border-neutral-200/50
      shadow-soft
    `,
    glass: `
      glass-effect
      border-white/20
      shadow-medium
    `,
    bloom: `
      bg-gradient-to-br from-cream-50 to-sun-50
      border border-sun-100/50
      shadow-soft
    `,
  };

  // Interactive styles
  const interactiveStyles = interactive
    ? `
      cursor-pointer
      hover:shadow-medium hover:scale-[1.02]
      hover:-translate-y-1
      active:scale-[0.98]
      ${variant === 'bloom' ? 'hover:shadow-sun-glow' : ''}
      ${variant === 'glass' ? 'hover:bg-white/15' : ''}
    `
    : '';

  const combinedClassName = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${interactiveStyles}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  return (
    <div className={combinedClassName} {...props}>
      {/* Bloom effect overlay for bloom variant */}
      {variant === 'bloom' && interactive && (
        <div className="absolute inset-0 bg-gradient-to-br from-sun-100/0 via-sun-100/20 to-peach-100/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Card;
