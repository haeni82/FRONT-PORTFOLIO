import React from 'react';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  gradient?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({
  level,
  size,
  gradient = false,
  className = '',
  children,
}) => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

  // Default size based on heading level if not specified
  const defaultSizes = {
    1: '4xl',
    2: '3xl',
    3: '2xl',
    4: 'xl',
    5: 'lg',
    6: 'md',
  };

  const actualSize = size || defaultSizes[level];

  // Size styles using fluid typography
  const sizeStyles = {
    xs: 'text-fluid-sm',
    sm: 'text-fluid-base',
    md: 'text-fluid-lg',
    lg: 'text-fluid-xl',
    xl: 'text-fluid-2xl',
    '2xl': 'text-fluid-3xl',
    '3xl': 'text-fluid-4xl',
    '4xl': 'text-5xl sm:text-6xl lg:text-7xl',
  };

  // Base styles
  const baseStyles = `
    font-bold tracking-tight
    ${gradient ? 'text-gradient-sun' : 'text-neutral-900'}
  `;

  const combinedClassName = `
    ${baseStyles}
    ${sizeStyles[actualSize as keyof typeof sizeStyles]}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  return <Tag className={combinedClassName}>{children}</Tag>;
};

export default Heading;
