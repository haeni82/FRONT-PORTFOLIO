import { motion } from 'framer-motion';
import { useMotionPreference } from '../components/providers/MotionProvider';
import { MotionWrapper } from '../components/motion';
import { SectionDecorations } from '../components/decorative';
import { Heading, Text } from '../components/ui';
import { Section } from '../components/layout';

interface TechItem {
  name: string;
  icon: string; // 이제 이미지 경로를 저장
}

interface TechGroupProps {
  title: string;
  description: string;
  accent: 'gold' | 'peach' | 'cream' | 'gray';
  items: TechItem[];
  delay?: number;
}

const accentStyleMap = {
  gold: {
    dot: 'bg-[#efb13f]',
    card: 'bg-[#fffdf9] border-[#f3e5c8]',
    pill: 'bg-[#fff6df] border-[#f2ddb0] text-[#5f4d2d]',
  },
  peach: {
    dot: 'bg-[#eea57e]',
    card: 'bg-[#fffaf7] border-[#f3ddd2]',
    pill: 'bg-[#fff0e8] border-[#f2d0bf] text-[#6a4a3d]',
  },
  cream: {
    dot: 'bg-[#d8bf90]',
    card: 'bg-[#fffdfa] border-[#ece3d3]',
    pill: 'bg-[#f8f2e7] border-[#e7dcc5] text-[#5f5648]',
  },
  gray: {
    dot: 'bg-[#9f9488]',
    card: 'bg-[#fcfcfb] border-[#ebe7e2]',
    pill: 'bg-[#f5f3f0] border-[#e4dfd8] text-[#5d5650]',
  },
} as const;

const TechPill: React.FC<{
  tech: TechItem;
  index: number;
  accent: TechGroupProps['accent'];
}> = ({ tech, index, accent }) => {
  const { prefersReducedMotion } = useMotionPreference();
  const style = accentStyleMap[accent];

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 12, scale: 0.96 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.4,
        delay: index * 0.035,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              y: -3,
              scale: 1.03,
              transition: { duration: 0.18 },
            }
      }
      className={`
        ${style.pill}
        inline-flex items-center gap-2 rounded-full border px-3.5 py-2
        text-sm font-medium
      `}
    >
      {tech.icon.startsWith('/icons/') ? (
        <img
          src={tech.icon}
          alt={tech.name}
          className="h-4 w-4 object-contain"
        />
      ) : (
        <span className="text-base leading-none">{tech.icon}</span>
      )}
      <span>{tech.name}</span>
    </motion.div>
  );
};

const TechGroup: React.FC<TechGroupProps> = ({
  title,
  description,
  accent,
  items,
  delay = 0,
}) => {
  const { prefersReducedMotion } = useMotionPreference();
  const style = accentStyleMap[accent];

  return (
    <MotionWrapper variant="slideUp" delay={delay}>
      <motion.article
        whileHover={
          prefersReducedMotion
            ? {}
            : {
                y: -4,
                transition: { duration: 0.22 },
              }
        }
        className={`
          ${style.card}
          rounded-[28px] border p-6 md:p-7
          shadow-[0_16px_40px_rgba(40,32,22,0.04)]
        `}
      >
        <div className="mb-5">
          <div className="mb-2 flex items-center gap-3">
            <span className={`h-3 w-3 rounded-full ${style.dot}`} />
            <h3 className="text-xl font-semibold text-[#2f2924]">{title}</h3>
          </div>
          <p className="text-sm leading-6 text-[#6a6058]">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {items.map((tech, index) => (
            <TechPill
              key={tech.name}
              tech={tech}
              index={index}
              accent={accent}
            />
          ))}
        </div>
      </motion.article>
    </MotionWrapper>
  );
};

const TechStackSection: React.FC = () => {
  const frontend: TechItem[] = [
    { name: 'React', icon: '/icons/react.png' },
    { name: 'Next.js', icon: '/icons/next.png' },
    { name: 'TypeScript', icon: '/icons/ts.png' },
    { name: 'JavaScript', icon: '/icons/js.png' },
    { name: 'HTML5', icon: '/icons/html.png' },
    { name: 'CSS3', icon: '/icons/css.png' },
    { name: 'Vite', icon: '/icons/vite.png' },
  ];

  const stylingMotionState: TechItem[] = [
    { name: 'Tailwind CSS', icon: '/icons/tailwind.png' },
    { name: 'styled-components', icon: '/icons/styledcomponents.png' },
    { name: 'Framer Motion', icon: '/icons/framermotion.png' },
    { name: 'Three.js', icon: '/icons/three.png' },
    { name: 'Zustand', icon: '/icons/zustand.png' },
    { name: 'TanStack Query', icon: '/icons/tanstack.png' },
    { name: 'shadcn/ui', icon: '/icons/shadcn.png' },
    { name: 'vanilla-extract', icon: '/icons/vanilla.png' },
  ];

  const toolsCollabDeploy: TechItem[] = [
    { name: 'GitHub', icon: '/icons/github.png' },
    { name: 'Figma', icon: '/icons/figma.png' },
    { name: 'Notion', icon: '/icons/notion.png' },
    { name: 'Jira', icon: '/icons/jira.png' },
    { name: 'Vercel', icon: '/icons/vercel.png' },
    { name: 'lefthook', icon: '/icons/lefthook.png' },
    { name: 'CodeRabbit', icon: '/icons/coderabbit.png' },
    { name: 'Slack', icon: '/icons/slcak.png' },
  ];

  const alsoWorkedWith: TechItem[] = [
    { name: 'Java', icon: '☕' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'STS', icon: '🛠️' },
  ];

  return (
    <Section padding="xl" className="relative overflow-hidden">
      {/* Background Decorations */}
      <SectionDecorations variant="default" sectionId="techstack" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-14 text-center md:mb-16">
          <MotionWrapper variant="slideUp" delay={0.1}>
            <Heading
              level={2}
              size="3xl"
              className="mb-4 text-[#2f2924] font-meongi text-4xl md:text-5xl"
            >
              ✨ Tech Stack
            </Heading>
          </MotionWrapper>

          <MotionWrapper variant="fadeIn" delay={0.25}>
            <Text
              size="xl"
              className="mx-auto max-w-2xl leading-relaxed text-[#6a6058] font-ongle"
            >
              화면을 만들고, 흐름을 설계하고, 협업하며 배포하기까지 제가 실제로
              사용해 온 기술들입니다.
            </Text>
          </MotionWrapper>
        </div>

        <div className="grid gap-5 md:gap-6 xl:grid-cols-3">
          <TechGroup
            title="Frontend"
            description="UI 구현과 페이지 구성의 중심이 되는 기술들"
            accent="gold"
            items={frontend}
            delay={0.35}
          />
          <TechGroup
            title="Styling · Motion · State"
            description="화면의 분위기, 인터랙션, 상태 흐름을 다루는 기술들"
            accent="peach"
            items={stylingMotionState}
            delay={0.5}
          />
          <TechGroup
            title="Tools · Collaboration · Deploy"
            description="협업, 문서화, 품질 관리, 배포에 사용한 도구들"
            accent="cream"
            items={toolsCollabDeploy}
            delay={0.65}
          />
        </div>

        <div className="mt-6">
          <TechGroup
            title="Also Worked With"
            description="프로젝트나 학습 과정에서 함께 다뤄 본 기술들"
            accent="gray"
            items={alsoWorkedWith}
            delay={0.8}
          />
        </div>
      </div>
    </Section>
  );
};

export default TechStackSection;
