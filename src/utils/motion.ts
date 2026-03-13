import { type Variants, type Transition } from 'framer-motion';

// Animation configuration constants
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 0.8,
    slower: 1.2,
  },

  easing: {
    linear: [0, 0, 1, 1],
    easeOut: [0, 0, 0.2, 1],
    easeIn: [0.4, 0, 1, 1],
    easeInOut: [0.4, 0, 0.2, 1],
    backOut: [0.34, 1.56, 0.64, 1],
    bounceOut: [0.68, -0.55, 0.265, 1.55],
  },

  delay: {
    none: 0,
    short: 0.1,
    medium: 0.2,
    long: 0.4,
  },

  stagger: {
    children: 0.1,
    items: 0.05,
  },
} as const;

// Core motion variants for reuse across components
export const motionVariants: Record<string, Variants> = {
  // Fade animations
  fadeIn: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: ANIMATION_CONFIG.duration.normal,
        ease: ANIMATION_CONFIG.easing.easeOut,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: ANIMATION_CONFIG.duration.fast,
        ease: ANIMATION_CONFIG.easing.easeIn,
      },
    },
  },

  fadeInUp: {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: ANIMATION_CONFIG.duration.normal,
        ease: ANIMATION_CONFIG.easing.easeOut,
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: ANIMATION_CONFIG.duration.fast,
        ease: ANIMATION_CONFIG.easing.easeIn,
      },
    },
  },

  // Slide animations
  slideUp: {
    initial: {
      opacity: 0,
      y: 60,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: ANIMATION_CONFIG.duration.slow,
        ease: ANIMATION_CONFIG.easing.easeOut,
      },
    },
    exit: {
      opacity: 0,
      y: -60,
      transition: {
        duration: ANIMATION_CONFIG.duration.fast,
        ease: ANIMATION_CONFIG.easing.easeIn,
      },
    },
  },

  slideDown: {
    initial: {
      opacity: 0,
      y: -60,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: ANIMATION_CONFIG.duration.slow,
        ease: ANIMATION_CONFIG.easing.easeOut,
      },
    },
    exit: {
      opacity: 0,
      y: 60,
      transition: {
        duration: ANIMATION_CONFIG.duration.fast,
        ease: ANIMATION_CONFIG.easing.easeIn,
      },
    },
  },

  slideLeft: {
    initial: {
      opacity: 0,
      x: 60,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: ANIMATION_CONFIG.duration.slow,
        ease: ANIMATION_CONFIG.easing.easeOut,
      },
    },
    exit: {
      opacity: 0,
      x: -60,
      transition: {
        duration: ANIMATION_CONFIG.duration.fast,
        ease: ANIMATION_CONFIG.easing.easeIn,
      },
    },
  },

  slideRight: {
    initial: {
      opacity: 0,
      x: -60,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: ANIMATION_CONFIG.duration.slow,
        ease: ANIMATION_CONFIG.easing.easeOut,
      },
    },
    exit: {
      opacity: 0,
      x: 60,
      transition: {
        duration: ANIMATION_CONFIG.duration.fast,
        ease: ANIMATION_CONFIG.easing.easeIn,
      },
    },
  },

  // Bloom animation (signature sun/flower effect)
  bloom: {
    initial: {
      opacity: 0,
      scale: 0.8,
      rotateX: -15,
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: ANIMATION_CONFIG.duration.slower,
        ease: ANIMATION_CONFIG.easing.backOut,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      rotateX: 15,
      transition: {
        duration: ANIMATION_CONFIG.duration.normal,
        ease: ANIMATION_CONFIG.easing.easeIn,
      },
    },
  },

  // Scale animations
  scaleIn: {
    initial: {
      opacity: 0,
      scale: 0.9,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: ANIMATION_CONFIG.duration.normal,
        ease: ANIMATION_CONFIG.easing.backOut,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: ANIMATION_CONFIG.duration.fast,
        ease: ANIMATION_CONFIG.easing.easeIn,
      },
    },
  },

  // Tilt animation for interactive elements
  tilt: {
    initial: {
      rotateX: 0,
      rotateY: 0,
    },
    hover: {
      rotateX: 5,
      rotateY: 10,
      scale: 1.02,
      transition: {
        duration: ANIMATION_CONFIG.duration.fast,
        ease: ANIMATION_CONFIG.easing.easeOut,
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1,
        ease: ANIMATION_CONFIG.easing.easeOut,
      },
    },
  },

  // Stagger container for child animations
  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: ANIMATION_CONFIG.stagger.children,
        delayChildren: ANIMATION_CONFIG.delay.short,
      },
    },
    exit: {
      transition: {
        staggerChildren: ANIMATION_CONFIG.stagger.items,
        staggerDirection: -1,
      },
    },
  },

  // Stagger items (children of stagger container)
  staggerItem: {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: ANIMATION_CONFIG.duration.normal,
        ease: ANIMATION_CONFIG.easing.easeOut,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: ANIMATION_CONFIG.duration.fast,
        ease: ANIMATION_CONFIG.easing.easeIn,
      },
    },
  },
};

// Reduced motion variants (simplified versions)
export const reducedMotionVariants: Record<string, Variants> = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: ANIMATION_CONFIG.duration.fast },
    },
    exit: {
      opacity: 0,
      transition: { duration: ANIMATION_CONFIG.duration.fast },
    },
  },

  slideUp: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: ANIMATION_CONFIG.duration.fast },
    },
    exit: {
      opacity: 0,
      transition: { duration: ANIMATION_CONFIG.duration.fast },
    },
  },

  slideDown: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: ANIMATION_CONFIG.duration.fast },
    },
    exit: {
      opacity: 0,
      transition: { duration: ANIMATION_CONFIG.duration.fast },
    },
  },

  slideLeft: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: ANIMATION_CONFIG.duration.fast },
    },
    exit: {
      opacity: 0,
      transition: { duration: ANIMATION_CONFIG.duration.fast },
    },
  },

  slideRight: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: ANIMATION_CONFIG.duration.fast },
    },
    exit: {
      opacity: 0,
      transition: { duration: ANIMATION_CONFIG.duration.fast },
    },
  },

  bloom: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: ANIMATION_CONFIG.duration.fast },
    },
    exit: {
      opacity: 0,
      transition: { duration: ANIMATION_CONFIG.duration.fast },
    },
  },

  scaleIn: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: ANIMATION_CONFIG.duration.fast },
    },
    exit: {
      opacity: 0,
      transition: { duration: ANIMATION_CONFIG.duration.fast },
    },
  },

  tilt: {
    initial: {},
    hover: {},
    tap: {},
  },

  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: ANIMATION_CONFIG.stagger.items,
        delayChildren: 0,
      },
    },
    exit: {},
  },

  staggerItem: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: ANIMATION_CONFIG.duration.fast },
    },
    exit: {
      opacity: 0,
      transition: { duration: ANIMATION_CONFIG.duration.fast },
    },
  },
};

// Helper function to get appropriate variants based on reduced motion preference
export const getMotionVariants = (
  variantName: string,
  prefersReducedMotion: boolean
): Variants => {
  if (prefersReducedMotion) {
    return reducedMotionVariants[variantName] || reducedMotionVariants.fadeIn;
  }
  return motionVariants[variantName] || motionVariants.fadeIn;
};

// Common transition presets
export const transitions: Record<string, Transition> = {
  spring: {
    type: 'spring',
    stiffness: 100,
    damping: 15,
  },

  springBouncy: {
    type: 'spring',
    stiffness: 200,
    damping: 10,
  },

  springSoft: {
    type: 'spring',
    stiffness: 50,
    damping: 20,
  },

  easeOut: {
    duration: ANIMATION_CONFIG.duration.normal,
    ease: ANIMATION_CONFIG.easing.easeOut,
  },

  easeInOut: {
    duration: ANIMATION_CONFIG.duration.normal,
    ease: ANIMATION_CONFIG.easing.easeInOut,
  },

  backOut: {
    duration: ANIMATION_CONFIG.duration.slow,
    ease: ANIMATION_CONFIG.easing.backOut,
  },
};
