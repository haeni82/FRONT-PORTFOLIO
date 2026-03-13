import React from 'react';
import FloatingFlower from './FloatingFlower';

interface SectionDecorationsProps {
  variant?: 'default' | 'dense' | 'minimal';
  sectionId?: string;
}

const SectionDecorations: React.FC<SectionDecorationsProps> = ({
  variant = 'default',
  sectionId = 'default',
}) => {
  // 섹션별로 완전히 다른 위치 패턴 + 훨씬 더 다양한 꽃 종류
  const sectionPatterns = {
    // Tech Stack - 오른쪽 위, 왼쪽 아래, 가운데
    techstack: [
      {
        emoji: '🌸',
        className: 'top-8 right-12',
        duration: 5.2,
        delay: 0,
        size: 'md' as const,
        opacity: 0.4,
      },
      {
        emoji: '🌼',
        className: 'bottom-16 left-8',
        duration: 4.8,
        delay: 1.2,
        size: 'sm' as const,
        opacity: 0.5,
      },
      {
        emoji: '🌺',
        className: 'top-1/2 left-1/2 -translate-x-1/2',
        duration: 6.1,
        delay: 2.1,
        size: 'lg' as const,
        opacity: 0.3,
      },
    ],

    // Featured Projects - 왼쪽 위, 오른쪽 아래, 왼쪽 중간
    featured: [
      {
        emoji: '🌻',
        className: 'top-12 left-6',
        duration: 5.5,
        delay: 0.5,
        size: 'lg' as const,
        opacity: 0.4,
      },
      {
        emoji: '🌷',
        className: 'bottom-12 right-16',
        duration: 4.3,
        delay: 1.8,
        size: 'md' as const,
        opacity: 0.6,
      },
      {
        emoji: '🌹',
        className: 'top-2/3 left-4',
        duration: 5.8,
        delay: 0.2,
        size: 'sm' as const,
        opacity: 0.5,
      },
    ],

    // Archive Projects - 오른쪽 중간, 왼쪽 위, 오른쪽 아래
    archive: [
      {
        emoji: '🌾',
        className: 'top-1/3 right-8',
        duration: 4.9,
        delay: 1.1,
        size: 'md' as const,
        opacity: 0.4,
      },
      {
        emoji: '🪷',
        className: 'top-16 left-12',
        duration: 5.3,
        delay: 0,
        size: 'sm' as const,
        opacity: 0.6,
      },
      {
        emoji: '🏵️',
        className: 'bottom-20 right-6',
        duration: 4.7,
        delay: 2.3,
        size: 'lg' as const,
        opacity: 0.3,
      },
    ],

    // Values - 가운데 위, 왼쪽 아래, 오른쪽 위
    values: [
      {
        emoji: '🌻',
        className: 'top-10 left-1/2 -translate-x-1/2',
        duration: 5.1,
        delay: 0.8,
        size: 'md' as const,
        opacity: 0.5,
      },
      {
        emoji: '🌺',
        className: 'bottom-24 left-10',
        duration: 4.6,
        delay: 1.5,
        size: 'lg' as const,
        opacity: 0.4,
      },
      {
        emoji: '🌼',
        className: 'top-20 right-14',
        duration: 5.7,
        delay: 0.3,
        size: 'sm' as const,
        opacity: 0.6,
      },
    ],

    // Experience - 왼쪽 위, 오른쪽 아래 (minimal)
    experience: [
      {
        emoji: '🌷',
        className: 'top-14 left-10',
        duration: 5.4,
        delay: 0.7,
        size: 'sm' as const,
        opacity: 0.4,
      },
      {
        emoji: '🌹',
        className: 'bottom-18 right-12',
        duration: 4.4,
        delay: 1.9,
        size: 'md' as const,
        opacity: 0.5,
      },
    ],

    // Contact - 오른쪽 위, 왼쪽 아래 (minimal)
    contact: [
      {
        emoji: '🪷',
        className: 'top-12 right-10',
        duration: 5.0,
        delay: 0.4,
        size: 'md' as const,
        opacity: 0.5,
      },
      {
        emoji: '🌾',
        className: 'bottom-16 left-14',
        duration: 4.8,
        delay: 1.6,
        size: 'sm' as const,
        opacity: 0.4,
      },
    ],

    // Default fallback
    default: [
      {
        emoji: '🌸',
        className: 'top-8 left-6',
        duration: 5.2,
        delay: 0,
        size: 'md' as const,
        opacity: 0.4,
      },
      {
        emoji: '🌼',
        className: 'bottom-16 right-8',
        duration: 4.8,
        delay: 1.2,
        size: 'sm' as const,
        opacity: 0.5,
      },
      {
        emoji: '🌺',
        className: 'top-1/2 right-4',
        duration: 6.1,
        delay: 2.1,
        size: 'lg' as const,
        opacity: 0.3,
      },
    ],
  };

  // variant에 따라 개수 조정
  const getDecorations = () => {
    const basePattern =
      sectionPatterns[sectionId as keyof typeof sectionPatterns] ||
      sectionPatterns.default;

    switch (variant) {
      case 'minimal':
        return basePattern.slice(0, 2);
      case 'default':
        return basePattern;
      case 'dense':
        return basePattern;
      default:
        return basePattern;
    }
  };

  const decorations = getDecorations();

  return (
    <>
      {decorations.map((decoration, index) => (
        <FloatingFlower
          key={index}
          emoji={decoration.emoji}
          className={decoration.className}
          duration={decoration.duration}
          delay={decoration.delay}
          size={decoration.size}
          opacity={decoration.opacity}
        />
      ))}
    </>
  );
};

export default SectionDecorations;
