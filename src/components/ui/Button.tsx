import React from 'react';
import type { ButtonProps } from '../../types';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  animation,
  children,
  onClick,
  disabled = false,
  className = '',
  ...props
}) => {
  // Base styles
  const baseStyles = `
    inline-flex items-center justify-center font-medium rounded-xl
    transition-all duration-200 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    relative overflow-hidden
  `;

  // Variant styles
  const variantStyles = {
    primary: `
      bg-gradient-to-r from-sun-400 to-sun-500 
      text-white shadow-soft
      hover:from-sun-500 hover:to-sun-600 
      hover:shadow-medium hover:shadow-sun-glow
      focus:ring-sun-300
      active:scale-95
    `,
    secondary: `
      bg-white/80 backdrop-blur-sm
      text-sun-700 border border-sun-200
      hover:bg-sun-50 hover:border-sun-300
      hover:shadow-soft
      focus:ring-sun-300
      active:scale-95
    `,
    ghost: `
      bg-transparent text-sun-600
      hover:bg-sun-50 hover:text-sun-700
      focus:ring-sun-300
      active:scale-95
    `,
    magnetic: `
      bg-gradient-to-r from-peach-400 to-peach-500
      text-white shadow-soft
      hover:from-peach-500 hover:to-peach-600
      hover:shadow-medium hover:shadow-peach-glow
      focus:ring-peach-300
      active:scale-95
      magnetic-effect
    `,
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-3 py-2 text-sm min-h-[36px]',
    md: 'px-6 py-3 text-base min-h-[44px]',
    lg: 'px-8 py-4 text-lg min-h-[52px]',
  };

  // Animation styles
  const animationStyles = {
    glow: 'glow-animation',
    tilt: 'hover:animate-tilt',
    scale: 'interactive-scale',
  };

  const combinedClassName = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${animation ? animationStyles[animation] : ''}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  return (
    <button
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {/* Shine effect for primary and magnetic variants */}
      {(variant === 'primary' || variant === 'magnetic') && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700 ease-out" />
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

export default Button;
