import React from 'react';
import { Container } from '../ui';

interface SectionProps {
  id?: string;
  background?: 'default' | 'gradient-sun' | 'gradient-peach' | 'gradient-warm';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  background = 'default',
  padding = 'lg',
  containerSize = 'lg',
  children,
  className = '',
}) => {
  // Background styles
  const backgroundStyles = {
    default: '',
    'gradient-sun': 'bg-gradient-sun',
    'gradient-peach': 'bg-gradient-peach',
    'gradient-warm': 'bg-gradient-warm',
  };

  // Padding styles
  const paddingStyles = {
    none: '',
    sm: 'py-8 sm:py-12',
    md: 'py-12 sm:py-16',
    lg: 'py-16 sm:py-20 lg:py-24',
    xl: 'py-20 sm:py-24 lg:py-32',
  };

  const combinedClassName = `
    relative
    ${backgroundStyles[background]}
    ${paddingStyles[padding]}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  return (
    <section id={id} className={combinedClassName}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
};

export default Section;
