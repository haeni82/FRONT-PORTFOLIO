// Design tokens for Haeni's portfolio
// These match the Tailwind configuration for consistency

export const colors = {
  // Sun theme - primary brand colors
  sun: {
    50: '#fefce8',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b', // Primary sun color
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },

  // Peach theme - secondary warm colors
  peach: {
    50: '#fef7f0',
    100: '#feecdc',
    200: '#fcd9bd',
    300: '#fdba8c',
    400: '#ff8a4c',
    500: '#ff5a1f', // Primary peach color
    600: '#d03801',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },

  // Cream theme - background colors
  cream: {
    50: '#fefdf8', // Primary background
    100: '#fefbf3',
    200: '#fef7e0',
    300: '#feecdc',
    400: '#fde2c4',
    500: '#fcd9bd',
    600: '#f4a261',
    700: '#e76f51',
    800: '#d62828',
    900: '#b91c1c',
  },

  // Neutral colors for text and UI
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252', // Secondary text
    700: '#404040',
    800: '#262626',
    900: '#171717', // Primary text
  },

  // Accent colors
  accent: {
    blue: '#3b82f6',
    green: '#10b981',
    purple: '#8b5cf6',
    pink: '#ec4899',
  },
};

export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    display: ['Inter', 'system-ui', 'sans-serif'],
  },

  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
  },

  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },

  lineHeight: {
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
};

export const spacing = {
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '5rem',
  '5xl': '6rem',
};

export const borderRadius = {
  sm: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  '4xl': '2rem',
  full: '9999px',
};

export const shadows = {
  soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
  medium:
    '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  strong:
    '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 2px 10px -2px rgba(0, 0, 0, 0.05)',
  sunGlow: '0 0 20px rgba(245, 158, 11, 0.3)',
  sunGlowStrong: '0 0 40px rgba(245, 158, 11, 0.4)',
  peachGlow: '0 0 20px rgba(255, 90, 31, 0.2)',
  bloom: '0 8px 32px rgba(245, 158, 11, 0.15)',
};

export const animations = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    slower: '1000ms',
  },

  easing: {
    linear: 'linear',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    backOut: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
};

export const breakpoints = {
  xs: '475px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};
