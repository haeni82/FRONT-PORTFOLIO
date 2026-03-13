import React from 'react';

interface TextProps {
  as?: 'p' | 'span' | 'div';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'default' | 'muted' | 'accent' | 'sun';
  className?: string;
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({
  as: Component = 'p',
  size = 'base',
  weight = 'normal',
  color = 'default',
  className = '',
  children,
}) => {
  // Size styles
  const sizeStyles = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  // Weight styles
  const weightStyles = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  // Color styles
  const colorStyles = {
    default: 'text-neutral-900',
    muted: 'text-neutral-600',
    accent: 'text-sun-600',
    sun: 'text-gradient-sun',
  };

  const combinedClassName = `
    ${sizeStyles[size]}
    ${weightStyles[weight]}
    ${colorStyles[color]}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  return <Component className={combinedClassName}>{children}</Component>;
};

export default Text;
