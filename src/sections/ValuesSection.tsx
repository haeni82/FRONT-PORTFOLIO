import { motion } from 'framer-motion';
import { useMotionPreference } from '../components/providers/MotionProvider';
import {
  MotionWrapper,
  StaggerContainer,
  StaggerItem,
  ParallaxElement,
} from '../components/motion';
import { SectionDecorations } from '../components/decorative';
import { Card, Heading, Text } from '../components/ui';
import { Section } from '../components/layout';

interface ValueCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

const ValueCard: React.FC<ValueCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
}) => {
  const { prefersReducedMotion } = useMotionPreference();

  return (
    <MotionWrapper variant="bloom" delay={delay} className="h-full">
      <Card
        variant="glass"
        interactive
        className="p-8 h-full bg-white/30 backdrop-blur-sm border border-sun-200/30 hover:border-sun-300/50 transition-all duration-500 group"
      >
        {/* Icon with glow effect */}
        <div className="relative mb-6">
          <motion.div
            whileHover={
              prefersReducedMotion
                ? {}
                : {
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 },
                  }
            }
            className="w-16 h-16 mx-auto bg-gradient-to-br from-sun-400 to-peach-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-sun-glow transition-shadow duration-500"
          >
            <span className="text-2xl text-white drop-shadow-sm">{icon}</span>
          </motion.div>

          {/* Subtle glow behind icon */}
          <div className="absolute inset-0 bg-gradient-radial from-sun-300/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="text-center">
          <Heading
            level={3}
            size="lg"
            className="mb-4 text-neutral-800 group-hover:text-neutral-900 transition-colors duration-300"
          >
            {title}
          </Heading>

          <Text
            size="base"
            color="muted"
            className="leading-relaxed group-hover:text-neutral-700 transition-colors duration-300"
          >
            {description}
          </Text>
        </div>

        {/* Decorative bloom effect */}
        {!prefersReducedMotion && (
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-sun-200/10 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100"
            initial={false}
            whileHover={{
              scale: [1, 1.05, 1],
              transition: { duration: 0.6, ease: 'easeInOut' },
            }}
          />
        )}
      </Card>
    </MotionWrapper>
  );
};

const ValuesSection: React.FC = () => {
  const { prefersReducedMotion } = useMotionPreference();

  const values = [
    {
      icon: '🧭',
      title: '자연스러운 사용자 흐름',
      description:
        '좋은 인터페이스는 단순히 예쁜 화면이 아니라 사용자가 자연스럽게 이해하고 움직일 수 있는 흐름을 만들어야 한다고 생각합니다. 사용자가 어디에 있고 다음에 무엇을 해야 하는지 직관적으로 느낄 수 있는 UI를 설계하려 합니다.',
    },
    {
      icon: '✨',
      title: '디테일한 인터랙션',
      description:
        '작은 모션과 인터랙션이 화면의 분위기와 사용 경험을 크게 바꾼다고 생각합니다. 부드러운 애니메이션과 미묘한 인터랙션을 통해 사용자가 자연스럽게 행동하도록 돕는 UI를 만드는 것을 좋아합니다.',
    },
    {
      icon: '🧩',
      title: '구조적인 코드 설계',
      description:
        '좋은 프론트엔드는 화면뿐 아니라 코드 구조도 함께 설계되어야 한다고 생각합니다. 컴포넌트의 책임을 분리하고 상태 흐름을 명확하게 만들어, 유지보수와 협업이 쉬운 구조를 지향합니다.',
    },
  ];

  return (
    <Section
      padding="xl"
      className="relative bg-gradient-to-b from-cream-50 to-sun-50 overflow-hidden"
    >
      {/* Background Decorations */}
      <SectionDecorations variant="default" sectionId="values" />

      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Soft background glow */}
        <ParallaxElement speed={0.1}>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-sun-200/20 to-transparent rounded-full blur-3xl" />
        </ParallaxElement>

        <ParallaxElement speed={0.15}>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-peach-200/15 to-transparent rounded-full blur-2xl" />
        </ParallaxElement>

        {/* Floating decorative elements */}
        {!prefersReducedMotion &&
          Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={`deco-${i}`}
              className="absolute w-8 h-8 bg-gradient-radial from-sun-300/30 to-transparent rounded-full blur-sm"
              style={{
                top: `${20 + i * 20}%`,
                left: `${10 + i * 25}%`,
              }}
              animate={{
                y: [-15, 15, -15],
                x: [-8, 8, -8],
                opacity: [0.3, 0.6, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 8 + i * 2,
                delay: i * 1.5,
                repeat: Infinity,
                ease: 'easeInOut' as const,
              }}
            />
          ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <MotionWrapper variant="slideUp" delay={0.2}>
            <Heading
              level={2}
              size="3xl"
              className="mb-4 text-neutral-800 font-meongi text-4xl md:text-5xl"
            >
              💝 What I Value
            </Heading>
          </MotionWrapper>

          <MotionWrapper variant="fadeIn" delay={0.4}>
            <Text
              size="xl"
              className="max-w-2xl mx-auto leading-relaxed font-ongle"
            >
              프론트엔드 개발을 할 때 제가 중요하게 생각하는 세 가지 가치입니다.
              화면을 설계하는 방식부터 코드 구조를 만드는 방식까지, 모든
              프로젝트에서 이 기준을 바탕으로 고민합니다.
            </Text>
          </MotionWrapper>
        </div>

        {/* Values Grid */}
        <StaggerContainer
          staggerDelay={0.2}
          childrenDelay={0.6}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <StaggerItem key={value.title}>
              <ValueCard
                icon={value.icon}
                title={value.title}
                description={value.description}
                delay={0.6 + index * 0.2}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom decorative element */}
        <MotionWrapper
          variant="fadeIn"
          delay={1.4}
          className="text-center mt-16"
        >
          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : {
                    rotate: [0, 360],
                    transition: {
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                  }
            }
            className="inline-block w-12 h-12 bg-gradient-to-br from-sun-300 to-peach-300 rounded-full opacity-20"
          />
        </MotionWrapper>
      </div>
    </Section>
  );
};

export default ValuesSection;
