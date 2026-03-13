import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Github,
  ExternalLink,
  Figma,
  Play,
} from 'lucide-react';
import { Heading, Text, VideoModal } from '../components/ui';
import { Section } from '../components/layout';
import { MotionWrapper } from '../components/motion';
import { SectionDecorations } from '../components/decorative';
import { useBreakpoint } from '../hooks';
import { projectsData } from '../data';
import type { Project } from '../types';

const FeaturedProjectsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === 'xs' || breakpoint === 'sm';

  const featuredProjects = projectsData.filter(project => project.featured);

  const nextProject = () => {
    setCurrentIndex(prev => (prev + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      prev => (prev - 1 + featuredProjects.length) % featuredProjects.length
    );
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Section
      background="default"
      padding="xl"
      className="relative overflow-hidden"
    >
      <SectionDecorations variant="default" sectionId="featured" />

      <div className="mx-auto max-w-7xl relative z-10">
        <MotionWrapper variant="fadeIn">
          <div className="mb-16 text-center">
            <Heading
              level={2}
              size="3xl"
              className="mb-4 text-[#2f2924] font-meongi text-4xl md:text-5xl"
            >
              🌟 Featured Projects
            </Heading>
            <Text
              size="lg"
              className="mx-auto max-w-2xl leading-relaxed text-[#6a6058] font-ongle"
            >
              가장 애정이 가는 프로젝트 3개를 골라, 제가 어떤 화면과 경험을
              만들고 싶은지 담았습니다.
            </Text>
          </div>
        </MotionWrapper>

        {!isMobile && (
          <div className="relative">
            <button
              onClick={prevProject}
              className="absolute left-0 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-[#f1e5d4] bg-[#fffaf4] shadow-[0_10px_30px_rgba(200,170,120,0.16)] transition-all duration-200 hover:scale-105 hover:bg-[#fff4df]"
              aria-label="Previous project"
              type="button"
            >
              <ChevronLeft className="h-6 w-6 text-[#7b6b5d]" />
            </button>

            <button
              onClick={nextProject}
              className="absolute right-0 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-[#f1e5d4] bg-[#fffaf4] shadow-[0_10px_30px_rgba(200,170,120,0.16)] transition-all duration-200 hover:scale-105 hover:bg-[#fff4df]"
              aria-label="Next project"
              type="button"
            >
              <ChevronRight className="h-6 w-6 text-[#7b6b5d]" />
            </button>

            <div className="flex items-center justify-center px-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="w-full max-w-5xl"
                >
                  <ProjectCard project={featuredProjects[currentIndex]} />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex justify-center gap-3">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`relative transition-all duration-200 ${
                    index === currentIndex
                      ? 'scale-110'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                  type="button"
                >
                  <div
                    className={`h-3 w-3 rounded-full ${
                      index === currentIndex ? 'bg-[#f3b23c]' : 'bg-[#f0d9a8]'
                    }`}
                  />
                  {index === currentIndex && (
                    <>
                      <span className="absolute left-1/2 top-[-7px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#ffd97c]" />
                      <span className="absolute bottom-[-7px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#ffd97c]" />
                      <span className="absolute left-[-7px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#ffd97c]" />
                      <span className="absolute right-[-7px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#ffd97c]" />
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {isMobile && (
          <div className="relative overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{ width: `${featuredProjects.length * 100}%` }}
            >
              {featuredProjects.map(project => (
                <div key={project.id} className="w-full shrink-0 px-4">
                  <ProjectCard project={project} />
                </div>
              ))}
            </motion.div>

            <div className="mt-6 flex justify-center gap-3">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`relative transition-all duration-200 ${
                    index === currentIndex
                      ? 'scale-110'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                  type="button"
                >
                  <div
                    className={`h-2.5 w-2.5 rounded-full ${
                      index === currentIndex ? 'bg-[#f3b23c]' : 'bg-[#f0d9a8]'
                    }`}
                  />
                  {index === currentIndex && (
                    <>
                      <span className="absolute left-1/2 top-[-6px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#ffd97c]" />
                      <span className="absolute bottom-[-6px] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#ffd97c]" />
                      <span className="absolute left-[-6px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#ffd97c]" />
                      <span className="absolute right-[-6px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#ffd97c]" />
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

interface ProjectCardProps {
  project: Project;
}

interface IconLinkButtonProps {
  href?: string;
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const IconLinkButton: React.FC<IconLinkButtonProps> = ({
  href,
  label,
  icon,
  onClick,
}) => {
  const Component = href ? motion.a : motion.button;
  const props = href
    ? { href, target: '_blank', rel: 'noreferrer' }
    : { onClick, type: 'button' as const };

  return (
    <Component
      {...props}
      aria-label={label}
      whileHover={{ y: -2, scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#efdcc3] bg-[#fff8ee] text-[#6b5b4d] shadow-[0_8px_20px_rgba(160,130,90,0.10)] transition-colors duration-200 hover:bg-[#fff1da] hover:text-[#4e433a]"
    >
      {icon}
    </Component>
  );
};

const FloatingFlower: React.FC<{
  className: string;
  emoji: string;
  duration: number;
  delay?: number;
}> = ({ className, emoji, duration, delay = 0 }) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -8, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {emoji}
    </motion.div>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);

  // 동영상이 로컬 파일인지 외부 링크인지 판단
  const isLocalVideo =
    project.links.videoLink && !project.links.videoLink.startsWith('http');

  // 메인 이미지 + 갤러리 이미지들 합치기
  const allImages = [project.image, ...(project.gallery || [])].filter(
    Boolean
  ) as string[];

  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      prev => (prev - 1 + allImages.length) % allImages.length
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative overflow-hidden rounded-[36px] border border-[#f1e6d8] bg-[#fffdfa] p-8 shadow-[0_20px_60px_rgba(120,95,60,0.08)] lg:p-10">
      <div className="pointer-events-none absolute -left-8 -top-8 h-28 w-28 rounded-full bg-[#ffe7a8]/45 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-10 right-10 h-24 w-24 rounded-full bg-[#ffd4c2]/30 blur-2xl" />

      <FloatingFlower
        className="pointer-events-none absolute left-6 top-6 text-2xl opacity-80"
        emoji="🌼"
        duration={4.8}
      />
      <FloatingFlower
        className="pointer-events-none absolute right-8 top-8 text-xl opacity-70"
        emoji="🌸"
        duration={5.6}
        delay={0.6}
      />

      <div className="grid grid-cols-1 gap-8">
        {/* 프로젝트 이미지 - 최상단 */}
        <div className="relative">
          <div className="overflow-hidden rounded-[28px] border border-[#f3e5d7] bg-[#fff7ef] p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[22px] bg-[linear-gradient(180deg,#fff5df_0%,#fff0e7_80%)] relative overflow-hidden group">
              {allImages.length > 0 ? (
                <>
                  {/* 현재 이미지 */}
                  <div className="absolute inset-0">
                    <img
                      src={allImages[currentImageIndex]}
                      alt={`${project.title} - ${currentImageIndex + 1}`}
                      className="w-full h-full object-contain rounded-[22px]"
                      onError={e => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/5 to-transparent rounded-[22px]" />
                    <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">
                            {project.id === 'interactive-dashboard'
                              ? '📊'
                              : project.id === 'design-system-library'
                                ? '🎨'
                                : project.id === 'ecommerce-platform'
                                  ? '🛍️'
                                  : '🌷'}
                          </span>
                          <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                            {project.category === 'web-application'
                              ? '웹 애플리케이션'
                              : project.category === 'design-system'
                                ? '디자인 시스템'
                                : project.category === 'mobile-app'
                                  ? '모바일 앱'
                                  : '프로젝트'}
                          </span>
                        </div>
                        {/* 이미지 카운터 */}
                        {allImages.length > 1 && (
                          <span className="text-xs bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                            {currentImageIndex + 1} / {allImages.length}
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold font-meongi mb-1">
                        {project.title}
                      </p>
                      <div className="flex gap-4 text-xs opacity-90">
                        <span>{project.technologies.length}개 기술</span>
                        <span>{project.timeline}</span>
                      </div>
                    </div>
                  </div>

                  {/* 이미지 네비게이션 버튼 */}
                  {allImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-20"
                        aria-label="이전 이미지"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-20"
                        aria-label="다음 이미지"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </>
                  )}

                  {/* 이미지 인디케이터 */}
                  {allImages.length > 1 && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
                      {allImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentImageIndex
                              ? 'bg-white'
                              : 'bg-white/50 hover:bg-white/75'
                          }`}
                          aria-label={`이미지 ${index + 1}로 이동`}
                        />
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-8 h-8 border-2 border-[#f3b23c] rounded-lg rotate-12"></div>
                    <div className="absolute top-8 right-6 w-6 h-6 bg-[#ffd97c] rounded-full"></div>
                    <div className="absolute bottom-6 left-8 w-4 h-4 bg-[#f3b23c] rounded-sm rotate-45"></div>
                    <div className="absolute bottom-4 right-4 w-10 h-10 border border-[#ffd97c] rounded-full"></div>
                  </div>
                  <div className="text-center relative z-10">
                    <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-[0_8px_24px_rgba(150,120,70,0.12)] border-2 border-[#f3e5d7]">
                      <span className="text-4xl">
                        {project.id === 'interactive-dashboard'
                          ? '📊'
                          : project.id === 'design-system-library'
                            ? '🎨'
                            : project.id === 'ecommerce-platform'
                              ? '🛍️'
                              : '🌷'}
                      </span>
                    </div>
                    <p className="text-lg font-semibold text-[#54483f] font-meongi mb-1">
                      {project.title}
                    </p>
                    <p className="text-sm text-[#8a7d73] font-ongle mb-3">
                      {project.category === 'web-application'
                        ? '웹 애플리케이션'
                        : project.category === 'design-system'
                          ? '디자인 시스템'
                          : project.category === 'mobile-app'
                            ? '모바일 앱'
                            : '프로젝트'}
                    </p>
                    <div className="flex justify-center gap-4 text-xs">
                      <div className="text-center">
                        <div className="font-semibold text-[#f3b23c] font-meongi">
                          {project.technologies.length}
                        </div>
                        <div className="text-[#8a7d73] font-ongle">기술</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-[#f3b23c] font-meongi">
                          {project.contributions.length}
                        </div>
                        <div className="text-[#8a7d73] font-ongle">기여</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-[#f3b23c] font-meongi">
                          {project.timeline}
                        </div>
                        <div className="text-[#8a7d73] font-ongle">기간</div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* 프로젝트 상세 정보 */}
        <div className="space-y-6">
          {/* 헤더 */}
          <div>
            <p className="mb-3 inline-flex rounded-full border border-[#f1dfc7] bg-[#fff6e8] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#bf8a2b]">
              Featured Project
            </p>

            <Heading
              level={3}
              size="xl"
              className="mb-2 text-[#2f2924] font-meongi"
            >
              {project.title}
            </Heading>

            <Text size="lg" className="font-medium text-[#8c7a68] font-ongle">
              {project.role} • {project.timeline}
            </Text>
          </div>

          {/* 첫 번째 줄: 요약 & 상세 설명 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="mb-2 text-lg font-semibold text-[#6b5b4d] uppercase tracking-wide">
                📝 요약
              </h4>
              <Text
                size="lg"
                className="leading-relaxed text-[#564d45] font-ongle whitespace-pre-line"
              >
                {project.summary}
              </Text>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-[#6b5b4d] uppercase tracking-wide">
                📖 프로젝트 설명
              </h4>
              <Text
                size="lg"
                className="leading-relaxed text-[#564d45] font-ongle"
              >
                {project.description}
              </Text>
            </div>
          </div>

          {/* 문제 & 해결 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="mb-2 text-lg font-semibold text-[#6b5b4d] uppercase tracking-wide">
                🎯 문제
              </h4>
              <Text
                size="lg"
                className="leading-relaxed text-[#564d45] font-ongle"
              >
                {project.problem}
              </Text>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-[#6b5b4d] uppercase tracking-wide">
                💡 해결
              </h4>
              <Text
                size="lg"
                className="leading-relaxed text-[#564d45] font-ongle"
              >
                {project.solution}
              </Text>
            </div>
          </div>

          {/* 두 번째 줄: 주요 기여 & 학습 내용 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="mb-2 text-lg font-semibold text-[#6b5b4d] uppercase tracking-wide">
                🚀 주요 기여
              </h4>
              <ul className="space-y-1">
                {project.contributions.map((contribution, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-lg text-[#564d45] font-ongle"
                  >
                    <span className="w-1.5 h-1.5 bg-[#f3b23c] rounded-full mt-1.5 shrink-0" />
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-[#6b5b4d] uppercase tracking-wide">
                � 학습 내용
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.learnings.map((learning, index) => (
                  <span
                    key={index}
                    className="inline-flex px-2 py-1 text-lg bg-[#fff0e8] text-[#6c5d51] rounded-md border border-[#f2d0bf] font-ongle"
                  >
                    {learning}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 기술 스택 */}
          <div>
            <h4 className="mb-2 text-sm font-semibold text-[#6b5b4d] uppercase tracking-wide">
              🛠️ 기술 스택
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span
                  key={tech.name}
                  className="rounded-full border border-[#f0dec6] bg-[#fff8ee] px-3 py-1.5 text-sm text-[#6c5d51] font-medium"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* 링크 버튼들 */}
          <div className="flex items-center gap-3 pt-2">
            {project.links.github && (
              <IconLinkButton
                href={project.links.github}
                label="GitHub"
                icon={<Github className="h-4 w-4" />}
              />
            )}

            {project.links.demo && (
              <IconLinkButton
                href={project.links.demo}
                label="Live Demo"
                icon={<ExternalLink className="h-4 w-4" />}
              />
            )}

            {project.links.figma && (
              <IconLinkButton
                href={project.links.figma}
                label="Figma"
                icon={<Figma className="h-4 w-4" />}
              />
            )}

            {project.links.videoLink && (
              <>
                {isLocalVideo ? (
                  <IconLinkButton
                    onClick={() => setShowVideoModal(true)}
                    label="Video"
                    icon={<Play className="h-4 w-4 fill-current" />}
                  />
                ) : (
                  <IconLinkButton
                    href={project.links.videoLink}
                    label="Video"
                    icon={<Play className="h-4 w-4 fill-current" />}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* 동영상 모달 */}
      <AnimatePresence>
        {showVideoModal && isLocalVideo && (
          <VideoModal
            videoSrc={project.links.videoLink!}
            title={project.title}
            onClose={() => setShowVideoModal(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default FeaturedProjectsSection;
