import { motion } from 'framer-motion';
import { useMotionPreference } from '../components/providers/MotionProvider';
import { MotionWrapper } from '../components/motion';
import { Text } from '../components/ui';
import { Section } from '../components/layout';

const SunGraphic: React.FC<{ reducedMotion?: boolean }> = ({
  reducedMotion = false,
}) => {
  return (
    <motion.div
      className="pointer-events-none absolute inset-x-0 bottom-[16%] z-10 flex justify-center md:bottom-[12%]"
      initial={reducedMotion ? {} : { y: 110, opacity: 0, scale: 0.9 }}
      animate={
        reducedMotion
          ? {}
          : {
              y: [110, 18, 0],
              opacity: [0, 0.72, 1],
              scale: [0.9, 0.98, 1],
            }
      }
      transition={{
        duration: 5.2,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <svg
        width="820"
        height="520"
        viewBox="0 0 820 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="h-auto w-[120vw] max-w-[920px]"
      >
        <defs>
          <radialGradient id="sunOuterGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE7A3" stopOpacity="0.92" />
            <stop offset="42%" stopColor="#FFD67C" stopOpacity="0.42" />
            <stop offset="76%" stopColor="#F7B566" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#FFF7ED" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="sunMain" cx="50%" cy="42%" r="62%">
            <stop offset="0%" stopColor="#FFF6CE" />
            <stop offset="55%" stopColor="#FFD96D" />
            <stop offset="100%" stopColor="#F5B23E" />
          </radialGradient>

          <radialGradient id="sunHighlight" cx="42%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#FFFBE9" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#FFFBE9" stopOpacity="0" />
          </radialGradient>

          <filter
            id="blurXl"
            x="-200"
            y="-200"
            width="1220"
            height="920"
            filterUnits="userSpaceOnUse"
          >
            <feGaussianBlur stdDeviation="46" />
          </filter>

          <filter
            id="blurLg"
            x="-120"
            y="-120"
            width="1060"
            height="820"
            filterUnits="userSpaceOnUse"
          >
            <feGaussianBlur stdDeviation="24" />
          </filter>

          <filter
            id="blurMd"
            x="-80"
            y="-80"
            width="960"
            height="760"
            filterUnits="userSpaceOnUse"
          >
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>

        {/* 바깥 후광 */}
        <ellipse
          cx="410"
          cy="300"
          rx="220"
          ry="165"
          fill="url(#sunOuterGlow)"
          filter="url(#blurXl)"
        />

        {/* 해 아래 따뜻한 번짐 */}
        <ellipse
          cx="410"
          cy="392"
          rx="180"
          ry="52"
          fill="#F8C56E"
          opacity="0.32"
          filter="url(#blurLg)"
        />

        {/* 해 본체 - 거의 원처럼 */}
        <g>
          <circle
            cx="410"
            cy="360"
            r="118"
            fill="url(#sunMain)"
            filter="url(#blurMd)"
          />

          <circle
            cx="388"
            cy="326"
            r="64"
            fill="url(#sunHighlight)"
            opacity="0.82"
            filter="url(#blurLg)"
          />

          <ellipse
            cx="348"
            cy="372"
            rx="22"
            ry="15"
            fill="#FFC78C"
            opacity="0.22"
            filter="url(#blurMd)"
          />
          <ellipse
            cx="474"
            cy="366"
            rx="20"
            ry="14"
            fill="#FFBE78"
            opacity="0.18"
            filter="url(#blurMd)"
          />
        </g>

        {/* 꽃잎 같은 번짐 */}
        <ellipse
          cx="300"
          cy="246"
          rx="22"
          ry="54"
          transform="rotate(-28 300 246)"
          fill="#F7B78B"
          opacity="0.18"
          filter="url(#blurLg)"
        />
        <ellipse
          cx="520"
          cy="236"
          rx="20"
          ry="50"
          transform="rotate(24 520 236)"
          fill="#F7B78B"
          opacity="0.16"
          filter="url(#blurLg)"
        />
      </svg>
    </motion.div>
  );
};

const flowerPositions = [
  { top: '18%', left: '18%', size: 20, delay: 0 },
  { top: '24%', left: '74%', size: 18, delay: 0.6 },
  { top: '34%', left: '12%', size: 16, delay: 1.1 },
  { top: '30%', left: '82%', size: 22, delay: 1.5 },
  { top: '54%', left: '20%', size: 18, delay: 0.9 },
  { top: '48%', left: '78%', size: 16, delay: 1.8 },
];

const FlowerFloat: React.FC<{
  top: string;
  left: string;
  size: number;
  delay: number;
}> = ({ top, left, size, delay }) => {
  return (
    <motion.div
      className="pointer-events-none absolute"
      style={{ top, left, width: size, height: size }}
      animate={{
        y: [-10, 12, -10],
        rotate: [-6, 6, -6],
        opacity: [0.35, 0.75, 0.35],
      }}
      transition={{
        duration: 5.5,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="10" fill="#F2A93B" />

        <ellipse cx="50" cy="24" rx="14" ry="20" fill="#F6C76B" />
        <ellipse cx="50" cy="76" rx="14" ry="20" fill="#F6C76B" />

        <ellipse
          cx="24"
          cy="50"
          rx="14"
          ry="20"
          fill="#F6C76B"
          transform="rotate(-90 24 50)"
        />
        <ellipse
          cx="76"
          cy="50"
          rx="14"
          ry="20"
          fill="#F6C76B"
          transform="rotate(-90 76 50)"
        />

        <ellipse
          cx="32"
          cy="32"
          rx="12"
          ry="18"
          fill="#F9D894"
          transform="rotate(-45 32 32)"
        />
        <ellipse
          cx="68"
          cy="32"
          rx="12"
          ry="18"
          fill="#F9D894"
          transform="rotate(45 68 32)"
        />

        <ellipse
          cx="34"
          cy="68"
          rx="11"
          ry="16"
          fill="#F3BE73"
          opacity="0.95"
          transform="rotate(40 34 68)"
        />
        <ellipse
          cx="67"
          cy="68"
          rx="11"
          ry="16"
          fill="#F3BE73"
          opacity="0.95"
          transform="rotate(-38 67 68)"
        />
      </svg>
    </motion.div>
  );
};

const FloatingBloom: React.FC<{ reducedMotion?: boolean }> = ({
  reducedMotion = false,
}) => {
  if (reducedMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      {flowerPositions.map((flower, index) => (
        <FlowerFloat key={index} {...flower} />
      ))}

      {Array.from({ length: 8 }).map((_, i) => (
        <motion.span
          key={`sparkle-${i}`}
          className="absolute rounded-full bg-[#efb14d]/45"
          style={{
            width: `${i % 2 === 0 ? 6 : 4}px`,
            height: `${i % 2 === 0 ? 6 : 4}px`,
            top: `${16 + ((i * 8) % 60)}%`,
            left: `${10 + ((i * 10) % 80)}%`,
          }}
          animate={{
            y: [-12, 10, -12],
            opacity: [0, 0.7, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4.8 + (i % 3),
            delay: i * 0.25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

const HeroSection: React.FC = () => {
  const { prefersReducedMotion } = useMotionPreference();

  return (
    <Section
      background="gradient-warm"
      padding="none"
      className="relative min-h-screen overflow-hidden"
    >
      {/* background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#fbf4e8_0%,#f8eddc_42%,#f6e6d8_72%,#f4ddd0_100%)]" />

      {/* ambient light */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-[-10%] h-[260px] w-[260px] rounded-full bg-[#fde68a]/30 blur-3xl md:h-[360px] md:w-[360px]" />
        <div className="absolute left-1/2 top-[18%] h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-[#ffd798]/18 blur-3xl md:h-[320px] md:w-[320px]" />
        <div className="absolute bottom-[-8%] right-[-6%] h-[220px] w-[220px] rounded-full bg-[#f3c5aa]/20 blur-3xl md:h-[300px] md:w-[300px]" />
      </div>

      <SunGraphic reducedMotion={prefersReducedMotion} />
      <FloatingBloom reducedMotion={prefersReducedMotion} />

      {/* content */}
      <div className="relative z-20 flex min-h-screen items-center justify-center px-6 pt-24 pb-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
          <MotionWrapper variant="fadeIn" delay={0.15} className="mb-6">
            <div className="inline-flex items-center rounded-full border border-[#7c6d5d]/15 bg-white/45 px-4 py-2 backdrop-blur-md md:px-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#6e6257] md:text-xs">
                Frontend Developer · Creative Interaction
              </p>
            </div>
          </MotionWrapper>

          <motion.div
            className="mb-3"
            initial={
              prefersReducedMotion ? {} : { y: 40, opacity: 0, scale: 0.96 }
            }
            animate={prefersReducedMotion ? {} : { y: 0, opacity: 1, scale: 1 }}
            transition={{
              duration: 1.8,
              delay: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="font-meongiB text-[clamp(4.2rem,12vw,10rem)] leading-[0.9] tracking-[0.02em] text-[#ffcc00]">
              HAENI
            </p>
          </motion.div>

          <motion.p
            className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-[#cf9442] md:text-base"
            initial={prefersReducedMotion ? {} : { y: 24, opacity: 0 }}
            animate={prefersReducedMotion ? {} : { y: 0, opacity: 1 }}
            transition={{
              duration: 1.4,
              delay: 0.95,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            SUNRISE · FLOW · INTERACTION
          </motion.p>

          <motion.h1
            className="font-ongle mb-5 text-balance text-[clamp(1.8rem,4vw,3.25rem)] font-semibold leading-[1.22] tracking-[-0.03em] text-[#2b2622]"
            initial={prefersReducedMotion ? {} : { y: 34, opacity: 0 }}
            animate={prefersReducedMotion ? {} : { y: 0, opacity: 1 }}
            transition={{
              duration: 1.9,
              delay: 1.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            감각적인 화면 위에
            <br className="hidden md:block" />
            자연스럽게 읽히는 흐름을 설계하는 프론트엔드 개발자{' '}
          </motion.h1>

          <motion.p
            className="font-Joseon mx-auto mb-10 max-w-2xl text-pretty text-[15px] leading-7 text-[#5f554d] md:text-lg md:leading-8"
            initial={prefersReducedMotion ? {} : { y: 22, opacity: 0 }}
            animate={prefersReducedMotion ? {} : { y: 0, opacity: 1 }}
            transition={{
              duration: 1.6,
              delay: 1.45,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            보기 좋은 UI에서 끝나지 않고, 사용자가 헷갈리지 않게 이해하고 움직일
            수 있는 구조를 고민합니다. 작은 인터랙션에도 이유를 담고, 화면의
            분위기부터 컴포넌트 구조와 렌더링 흐름까지 함께 설계합니다.
          </motion.p>

          <motion.div
            className="font-Joseon mb-16 flex flex-wrap items-center justify-center gap-3 md:gap-4"
            initial={prefersReducedMotion ? {} : { y: 18, opacity: 0 }}
            animate={prefersReducedMotion ? {} : { y: 0, opacity: 1 }}
            transition={{
              duration: 1.4,
              delay: 1.75,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {[
              '구조적인 UI 설계',
              '사용자 중심 인터랙션',
              '근거 있는 프론트엔드',
            ].map(item => (
              <span
                key={item}
                className="rounded-full border border-[#7a6856]/12 bg-white/55 px-4 py-2 text-sm text-[#4f463f] shadow-[0_8px_30px_rgba(166,120,64,0.08)] backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-b from-transparent to-[#f3ded3]/90" />

      {/* scroll hint */}
      <MotionWrapper
        variant="fadeIn"
        delay={1.2}
        className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2"
      >
        <motion.div
          animate={
            prefersReducedMotion
              ? {}
              : {
                  y: [0, -6, 0],
                  transition: {
                    duration: 2.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }
          }
          className="flex flex-col items-center gap-3 text-[#5f554d]"
        >
          <Text size="xs" className="uppercase tracking-[0.28em] font-medium">
            Scroll Down
          </Text>

          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-[#6f6256]/25 bg-white/30 pt-1.5 backdrop-blur-sm">
            <motion.div
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      y: [0, 10, 0],
                      opacity: [0.35, 1, 0.35],
                      transition: {
                        duration: 1.7,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    }
              }
              className="h-2.5 w-1 rounded-full bg-[#5f554d]/80"
            />
          </div>
        </motion.div>
      </MotionWrapper>
    </Section>
  );
};

export default HeroSection;
