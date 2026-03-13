import { motion, AnimatePresence } from 'framer-motion';
import { useMotionPreference } from '../providers/MotionProvider';
import { Heading } from '../ui';
import { useMemo } from 'react';

interface LoadingScreenProps {
  isVisible: boolean;
  onComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  isVisible,
  onComplete,
}) => {
  const { prefersReducedMotion } = useMotionPreference();

  // Generate random positions once to avoid re-renders
  const particlePositions = useMemo(
    () =>
      Array.from({ length: 6 }, () => ({
        x: (Math.random() - 0.5) * 200,
        y: (Math.random() - 0.5) * 200,
      })),
    []
  );

  // Animation variants for the loading screen
  const screenVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: {
        duration: prefersReducedMotion ? 0.3 : 0.8,
        ease: 'easeInOut' as const,
      },
    },
  };

  // Sun/flower bloom animation
  const bloomVariants = {
    initial: {
      scale: 0.3,
      opacity: 0,
      rotate: -10,
    },
    animate: {
      scale: [0.3, 1.1, 1],
      opacity: [0, 1, 1],
      rotate: [0, 5, 0],
      transition: {
        duration: prefersReducedMotion ? 0.5 : 1.5,
        times: [0, 0.6, 1],
        ease: 'easeOut' as const,
      },
    },
  };

  // Petals/rays animation
  const petalVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotate: 0,
    },
    animate: (i: number) => ({
      scale: [0, 1.2, 1],
      opacity: [0, 0.8, 0.6],
      rotate: [0, 360],
      transition: {
        duration: prefersReducedMotion ? 0.3 : 2,
        delay: prefersReducedMotion ? 0 : i * 0.1,
        ease: 'easeOut' as const,
        rotate: {
          duration: prefersReducedMotion ? 0 : 8,
          repeat: Infinity,
          ease: 'linear' as const,
        },
      },
    }),
  };

  // Text animation
  const textVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0.3 : 0.8,
        delay: prefersReducedMotion ? 0 : 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  // Glow effect animation
  const glowVariants = {
    initial: {
      scale: 0.5,
      opacity: 0,
    },
    animate: {
      scale: [0.5, 2, 1.5],
      opacity: [0, 0.3, 0.1],
      transition: {
        duration: prefersReducedMotion ? 0.5 : 2.5,
        times: [0, 0.5, 1],
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          variants={screenVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-cream-50 via-sun-50 to-peach-50"
        >
          {/* Background glow effect */}
          <motion.div
            variants={glowVariants}
            initial="initial"
            animate="animate"
            className="absolute inset-0 bg-gradient-radial from-sun-200/20 via-transparent to-transparent"
          />

          <div className="relative flex flex-col items-center">
            {/* Sun/Flower bloom container */}
            <div className="relative mb-8">
              {/* Central bloom */}
              <motion.div
                variants={bloomVariants}
                initial="initial"
                animate="animate"
                className="relative w-24 h-24 rounded-full bg-gradient-to-br from-sun-300 to-sun-500 shadow-lg shadow-sun-200/50"
              >
                {/* Inner glow */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-sun-100 to-sun-200 opacity-80" />
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white to-sun-100" />
              </motion.div>

              {/* Petals/rays around the center */}
              {!prefersReducedMotion &&
                Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={petalVariants}
                    initial="initial"
                    animate="animate"
                    className="absolute w-3 h-8 bg-gradient-to-t from-sun-300 to-sun-100 rounded-full opacity-60"
                    style={{
                      top: '50%',
                      left: '50%',
                      transformOrigin: '50% 100%',
                      transform: `translate(-50%, -100%) rotate(${i * 45}deg) translateY(-20px)`,
                    }}
                  />
                ))}

              {/* Outer petals for more depth */}
              {!prefersReducedMotion &&
                Array.from({ length: 12 }).map((_, i) => (
                  <motion.div
                    key={`outer-${i}`}
                    custom={i + 4}
                    variants={petalVariants}
                    initial="initial"
                    animate="animate"
                    className="absolute w-2 h-6 bg-gradient-to-t from-peach-300 to-peach-100 rounded-full opacity-40"
                    style={{
                      top: '50%',
                      left: '50%',
                      transformOrigin: '50% 100%',
                      transform: `translate(-50%, -100%) rotate(${i * 30}deg) translateY(-35px)`,
                    }}
                  />
                ))}
            </div>

            {/* Loading text */}
            <motion.div
              variants={textVariants}
              initial="initial"
              animate="animate"
              className="text-center"
            >
              <Heading
                level={1}
                size="3xl"
                gradient
                className="mb-2 font-light tracking-wide"
              >
                Haeni
              </Heading>

              {!prefersReducedMotion && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    transition: {
                      duration: 2,
                      delay: 1,
                      times: [0, 0.5, 1],
                      ease: 'easeInOut' as const,
                    },
                  }}
                  className="text-sm text-neutral-600 font-light tracking-wider"
                >
                  Creating beautiful experiences
                </motion.p>
              )}
            </motion.div>

            {/* Subtle floating particles */}
            {!prefersReducedMotion &&
              particlePositions.map((pos, i) => (
                <motion.div
                  key={`particle-${i}`}
                  initial={{
                    opacity: 0,
                    scale: 0,
                    x: 0,
                    y: 0,
                  }}
                  animate={{
                    opacity: [0, 0.6, 0],
                    scale: [0, 1, 0],
                    x: [0, pos.x],
                    y: [0, pos.y],
                    transition: {
                      duration: 3,
                      delay: 1 + i * 0.2,
                      ease: 'easeOut' as const,
                    },
                  }}
                  className="absolute w-1 h-1 bg-sun-300 rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                  }}
                />
              ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
