import React, { createContext, useContext, type ReactNode } from 'react';
import { useReducedMotion } from '../../hooks';

interface MotionContextType {
  prefersReducedMotion: boolean;
}

const MotionContext = createContext<MotionContextType | undefined>(undefined);

interface MotionProviderProps {
  children: ReactNode;
}

export const MotionProvider: React.FC<MotionProviderProps> = ({ children }) => {
  const prefersReducedMotion = useReducedMotion();

  // Update CSS custom property for global access
  React.useEffect(() => {
    document.documentElement.style.setProperty(
      '--motion-reduce',
      prefersReducedMotion ? '1' : '0'
    );
  }, [prefersReducedMotion]);

  const value = {
    prefersReducedMotion,
  };

  return (
    <MotionContext.Provider value={value}>{children}</MotionContext.Provider>
  );
};

export const useMotionPreference = (): MotionContextType => {
  const context = useContext(MotionContext);
  if (context === undefined) {
    throw new Error('useMotionPreference must be used within a MotionProvider');
  }
  return context;
};

export default MotionProvider;
