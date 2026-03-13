import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  ExternalLink,
  Figma,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Heading, Text, VideoModal } from '../components/ui';
import { Section } from '../components/layout';
import {
  MotionWrapper,
  StaggerContainer,
  StaggerItem,
} from '../components/motion';
import { SectionDecorations } from '../components/decorative';
import { projectsData } from '../data';
import type { Project } from '../types';

const ArchiveProjectsSection: React.FC = () => {
  const archiveProjects = projectsData.filter(project => !project.featured);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Section
      background="default"
      padding="xl"
      className="relative overflow-hidden"
    >
      {/* Background Decorations */}
      <SectionDecorations variant="default" sectionId="archive" />

      <div className="mx-auto max-w-7xl relative z-10">
        <MotionWrapper variant="fadeIn">
          <div className="mb-16 text-center">
            <Heading
              level={2}
              size="3xl"
              className="mb-4 text-[#2f2924] font-meongi text-4xl md:text-5xl"
            >
              📚 Project Archive
            </Heading>
            <Text
              size="lg"
              className="mx-auto max-w-2xl leading-relaxed text-[#6a6058] font-ongle"
            >
              대표 프로젝트 외에도 다양한 시도와 경험이 담긴 작업들을
              모아두었습니다.
            </Text>
          </div>
        </MotionWrapper>

        <StaggerContainer staggerDelay={0.08}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {archiveProjects.map(project => (
              <StaggerItem key={project.id}>
                <ArchiveProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </Section>
  );
};

interface ArchiveProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ArchiveProjectCard: React.FC<ArchiveProjectCardProps> = ({
  project,
  onClick,
}) => {
  const figmaLink =
    'figma' in project.links
      ? (project.links.figma as string | undefined)
      : undefined;
  const videoLink =
    'videoLink' in project.links
      ? (project.links.videoLink as string | undefined)
      : undefined;

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -6 }}
      className="h-full w-full rounded-[28px] border border-[#f1e6d8] bg-[#fffdfa] p-6 text-left shadow-[0_12px_32px_rgba(120,95,60,0.06)] transition-all duration-300 hover:bg-[#fffaf4]"
    >
      <div className="mb-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-full border border-[#f1dfc7] bg-[#fff6e8] px-3 py-1 text-xs font-medium text-[#bf8a2b]">
            Archive
          </span>
          <span className="text-lg">🌼</span>
        </div>

        <Heading
          level={3}
          size="lg"
          className="mb-2 line-clamp-2 text-[#2f2924]"
        >
          {project.title}
        </Heading>
        <Text size="sm" className="font-medium text-[#8c7a68]">
          {project.role}
        </Text>
      </div>

      <Text
        size="sm"
        className="mb-4 line-clamp-3 grow leading-7 text-[#564d45]"
      >
        {project.summary}
      </Text>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 4).map(tech => (
          <span
            key={tech.name}
            className="rounded-full border border-[#f0dec6] bg-[#fff8ee] px-3 py-1 text-xs text-[#6c5d51]"
          >
            {tech.name}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="rounded-full border border-[#eadfce] bg-[#faf7f2] px-3 py-1 text-xs text-[#7b7066]">
            +{project.technologies.length - 4}
          </span>
        )}
      </div>

      <div className="flex items-center gap-3 border-t border-[#f3eadf] pt-3">
        {project.links.github && (
          <IconLinkButton
            href={project.links.github}
            label="GitHub"
            icon={<Github className="h-4 w-4" />}
            stopCardClick
          />
        )}

        {project.links.demo && (
          <IconLinkButton
            href={project.links.demo}
            label="Live Demo"
            icon={<ExternalLink className="h-4 w-4" />}
            stopCardClick
          />
        )}

        {figmaLink && (
          <IconLinkButton
            href={figmaLink}
            label="Figma"
            icon={<Figma className="h-4 w-4" />}
            stopCardClick
          />
        )}

        {videoLink && (
          <IconLinkButton
            href={videoLink}
            label="Video"
            icon={<Play className="h-4 w-4 fill-current" />}
            stopCardClick
          />
        )}
      </div>
    </motion.button>
  );
};

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const figmaLink =
    'figma' in project.links
      ? (project.links.figma as string | undefined)
      : undefined;
  const videoLink =
    'videoLink' in project.links
      ? (project.links.videoLink as string | undefined)
      : undefined;

  // 동영상이 로컬 파일인지 외부 링크인지 판단
  const isLocalVideo = videoLink && !videoLink.startsWith('http');

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
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto bg-white rounded-3xl shadow-2xl"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.95 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onClick={e => e.stopPropagation()}
      >
        {/* 헤더 */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 p-6 flex items-center justify-between rounded-t-3xl">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-sun-100 text-sun-700 rounded-full text-xs font-medium">
                Archive Project
              </span>
              <span className="text-lg">🌷</span>
            </div>
            <h2 className="text-2xl font-meongi text-gray-900">
              {project.title}
            </h2>
            <p className="text-sm text-gray-600 font-ongle">
              {project.role} • {project.timeline}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* 이미지 갤러리 */}
          {allImages.length > 0 && (
            <div className="relative">
              <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden relative group">
                <img
                  src={allImages[currentImageIndex]}
                  alt={`${project.title} - ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain"
                />

                {/* 이미지 네비게이션 */}
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* 이미지 카운터 */}
                    <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      {currentImageIndex + 1} / {allImages.length}
                    </div>
                  </>
                )}
              </div>

              {/* 썸네일 */}
              {allImages.length > 1 && (
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                  {allImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`flex-shrink-0 w-20 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex
                          ? 'border-sun-400'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${project.title} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 프로젝트 정보 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 요약 */}
            <div>
              <h3 className="text-lg text-gray-900 mb-3">📝 요약</h3>
              <p className="text-gray-700 font-ongle leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* 설명 */}
            <div>
              <h3 className="text-lg text-gray-900 mb-3">📖 상세 설명</h3>
              <p className="text-gray-700 font-ongle leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* 문제 */}
            {project.problem && (
              <div>
                <h3 className="text-lg text-gray-900 mb-3">🎯 문제</h3>
                <p className="text-gray-700 font-ongle leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}

            {/* 해결 */}
            {project.solution && (
              <div>
                <h3 className="text-lg text-gray-900 mb-3">💡 해결</h3>
                <p className="text-gray-700 font-ongle leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}
          </div>

          {/* 기여 사항 */}
          {project.contributions && project.contributions.length > 0 && (
            <div>
              <h3 className="text-lg text-gray-900 mb-4">🚀 주요 기여</h3>
              <ul className="space-y-3">
                {project.contributions.map((contribution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sun-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 font-ongle leading-relaxed">
                      {contribution}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 학습 내용 */}
          {project.learnings && project.learnings.length > 0 && (
            <div>
              <h3 className="text-lgi text-gray-900 mb-4">📚 학습 내용</h3>
              <div className="flex flex-wrap gap-2">
                {project.learnings.map((learning, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-sun-50 text-sun-700 rounded-lg text-sm font-ongle border border-sun-200"
                  >
                    {learning}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 기술 스택 */}
          <div>
            <h3 className="text-lg text-gray-900 mb-4">🛠️ 기술 스택</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map(tech => (
                <span
                  key={tech.name}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* 링크 */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-sun-500 text-black rounded-lg hover:bg-sun-600 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {figmaLink && (
              <a
                href={figmaLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
              >
                <Figma className="w-4 h-4" />
                Figma
              </a>
            )}
            {videoLink && (
              <>
                {isLocalVideo ? (
                  <button
                    onClick={() => setShowVideoModal(true)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    <Play className="w-4 h-4" />
                    Video
                  </button>
                ) : (
                  <a
                    href={videoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    <Play className="w-4 h-4" />
                    Video
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </motion.div>

      {/* 동영상 모달 */}
      <AnimatePresence>
        {showVideoModal && isLocalVideo && (
          <VideoModal
            videoSrc={videoLink}
            title={project.title}
            onClose={() => setShowVideoModal(false)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface IconLinkButtonProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  stopCardClick?: boolean;
}

const IconLinkButton: React.FC<IconLinkButtonProps> = ({
  href,
  label,
  icon,
  stopCardClick = false,
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ y: -2, scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      onClick={e => {
        if (stopCardClick) e.stopPropagation();
      }}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#efdcc3] bg-[#fff8ee] text-[#6b5b4d] shadow-[0_8px_20px_rgba(160,130,90,0.10)] transition-colors duration-200 hover:bg-[#fff1da] hover:text-[#4e433a]"
    >
      {icon}
    </motion.a>
  );
};

export default ArchiveProjectsSection;
