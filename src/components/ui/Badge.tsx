import React from 'react';

interface BadgeProps {
  variant?: 'default' | 'sun' | 'peach' | 'outline' | 'soft';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  children,
  className = '',
}) => {
  // Base styles
  const baseStyles = `
    inline-flex items-center justify-center
    font-medium rounded-full
    transition-all duration-200 ease-out
  `;

  // Variant styles
  const variantStyles = {
    default: `
      bg-neutral-100 text-neutral-700
      border border-neutral-200
    `,
    sun: `
      bg-gradient-to-r from-sun-100 to-sun-200
      text-sun-800 border border-sun-300/50
    `,
    peach: `
      bg-gradient-to-r from-peach-100 to-peach-200
      text-peach-800 border border-peach-300/50
    `,
    outline: `
      bg-transparent text-sun-600
      border border-sun-300
      hover:bg-sun-50
    `,
    soft: `
      bg-white/60 backdrop-blur-sm
      text-neutral-700 border border-white/40
    `,
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  const combinedClassName = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  return <span className={combinedClassName}>{children}</span>;
};

export default Badge;
