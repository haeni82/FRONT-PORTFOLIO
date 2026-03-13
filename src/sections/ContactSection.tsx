import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Button, Heading, Text } from '../components/ui';
import { Section } from '../components/layout';
import {
  MotionWrapper,
  StaggerContainer,
  StaggerItem,
} from '../components/motion';
import { SectionDecorations } from '../components/decorative';

const ContactSection: React.FC = () => {
  const handleBlogClick = () => {
    window.open('https://twohaenifour.tistory.com/', '_blank');
  };

  const handleGithubClick = () => {
    window.open('https://github.com/haeni82', '_blank');
  };

  return (
    <Section
      background="gradient-sun"
      padding="xl"
      className="relative overflow-hidden"
    >
      {/* Background Decorations */}
      <SectionDecorations variant="minimal" sectionId="contact" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main Content */}
        <MotionWrapper variant="fadeIn">
          <div className="mb-12">
            <Heading
              level={2}
              size="3xl"
              className="mb-6 text-neutral-800 font-meongi text-4xl md:text-5xl"
            >
              🌻 Connect With Me
            </Heading>
            <Text
              size="lg"
              className="max-w-2xl mx-auto leading-relaxed text-neutral-700 mb-8 font-ongle"
            >
              더 많은 이야기와 프로젝트를 확인하고 싶으시다면 아래 링크를 통해
              연결해보세요.
            </Text>
          </div>
        </MotionWrapper>

        {/* Contact Actions */}
        <StaggerContainer staggerDelay={0.15}>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <StaggerItem>
              <Button
                variant="primary"
                size="lg"
                onClick={handleBlogClick}
                className="flex items-center gap-3"
              >
                <ExternalLink className="w-5 h-5" />
                Blog
              </Button>
            </StaggerItem>

            <StaggerItem>
              <Button
                variant="secondary"
                size="lg"
                onClick={handleGithubClick}
                className="flex items-center gap-3"
              >
                <Github className="w-5 h-5" />
                GitHub
              </Button>
            </StaggerItem>
          </div>
        </StaggerContainer>

        {/* Contact Links */}
        <MotionWrapper variant="slideUp" delay={0.3}>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              {/* Blog */}
              <div className="space-y-3">
                <Text
                  size="sm"
                  className="font-medium text-neutral-600 uppercase tracking-wide"
                >
                  📝 Blog
                </Text>
                <a
                  href="https://haeni-dev.tistory.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg font-medium text-neutral-800 hover:text-sun-600 transition-colors duration-200"
                >
                  twohaenifour.tistory.com/
                </a>
                <Text size="sm" className="text-neutral-600">
                  개발 경험과 학습 내용을 기록합니다
                </Text>
              </div>

              {/* GitHub */}
              <div className="space-y-3">
                <Text
                  size="sm"
                  className="font-medium text-neutral-600 uppercase tracking-wide"
                >
                  💻 GitHub
                </Text>
                <a
                  href="https://github.com/haeni82"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg font-medium text-neutral-800 hover:text-sun-600 transition-colors duration-200"
                >
                  github.com/haeni82
                </a>
                <Text size="sm" className="text-neutral-600">
                  프로젝트와 코드를 확인할 수 있습니다
                </Text>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </Section>
  );
};

export default ContactSection;
