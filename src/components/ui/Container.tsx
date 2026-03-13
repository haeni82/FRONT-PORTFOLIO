import React from 'react';

interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  size = 'lg',
  padding = true,
  children,
  className = '',
}) => {
  // Size styles
  const sizeStyles = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };

  // Padding styles
  const paddingStyles = padding ? 'px-4 sm:px-6 lg:px-8' : '';

  const combinedClassName = `
    mx-auto w-full
    ${sizeStyles[size]}
    ${paddingStyles}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  return <div className={combinedClassName}>{children}</div>;
};

export default Container;
