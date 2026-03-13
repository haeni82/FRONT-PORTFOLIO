import { useState, useEffect } from 'react';

interface UseLoadingScreenOptions {
  /** Minimum loading duration in milliseconds */
  minDuration?: number;
  /** Maximum loading duration in milliseconds */
  maxDuration?: number;
  /** Whether to show loading screen on initial load */
  showOnMount?: boolean;
}

/**
 * Hook to manage loading screen state with timing controls
 */
export const useLoadingScreen = (options: UseLoadingScreenOptions = {}) => {
  const {
    minDuration = 1500,
    maxDuration = 2500,
    showOnMount = true,
  } = options;

  const [isLoading, setIsLoading] = useState(showOnMount);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!showOnMount) return;

    // Set minimum loading time
    const minTimer = setTimeout(() => {
      setIsLoading(false);
    }, minDuration);

    // Set maximum loading time as fallback
    const maxTimer = setTimeout(() => {
      setIsLoading(false);
    }, maxDuration);

    return () => {
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
    };
  }, [minDuration, maxDuration, showOnMount]);

  const handleLoadingComplete = () => {
    setIsComplete(true);
  };

  const resetLoading = () => {
    setIsLoading(true);
    setIsComplete(false);
  };

  return {
    isLoading,
    isComplete,
    handleLoadingComplete,
    resetLoading,
  };
};

export default useLoadingScreen;
