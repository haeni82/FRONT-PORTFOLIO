import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Heading, Text } from '../components/ui';
import { Section } from '../components/layout';
import {
  MotionWrapper,
  StaggerContainer,
  StaggerItem,
} from '../components/motion';
import { SectionDecorations } from '../components/decorative';
import { timelineData } from '../data';
import type { TimelineItem } from '../types';

const ExperienceSection: React.FC = () => {
  // Sort timeline items by date (most recent first)
  const sortedExperience = [...timelineData.items].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <Section
      background="default"
      padding="xl"
      className="relative overflow-hidden"
    >
      {/* Background Decorations */}
      <SectionDecorations variant="minimal" sectionId="experience" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <MotionWrapper variant="fadeIn">
          <div className="text-center mb-16">
            <Heading
              level={2}
              size="3xl"
              className="mb-4 font-meongi text-4xl md:text-5xl"
            >
              🌱 Experience & Journey
            </Heading>
            <Text
              size="lg"
              color="muted"
              className="max-w-2xl mx-auto font-ongle"
            >
              A timeline of my growth as a frontend developer, from first lines
              of code to building impactful user experiences.
            </Text>
          </div>
        </MotionWrapper>

        {/* Timeline */}
        <StaggerContainer staggerDelay={0.1}>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-sun-200 via-sun-300 to-transparent" />

            <div className="space-y-8">
              {sortedExperience.map((item, index) => (
                <StaggerItem key={item.id}>
                  <ExperienceCard
                    item={item}
                    isLast={index === sortedExperience.length - 1}
                  />
                </StaggerItem>
              ))}
            </div>
          </div>
        </StaggerContainer>
      </div>
    </Section>
  );
};

// Experience Card Component
interface ExperienceCardProps {
  item: TimelineItem;
  isLast: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ item, isLast }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'bg-sun-100 text-sun-800 border-sun-200';
      case 'education':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'project':
        return 'bg-peach-100 text-peach-800 border-peach-200';
      case 'achievement':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'leadership':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-neutral-100 text-neutral-800 border-neutral-200';
    }
  };

  return (
    <MotionWrapper variant="slideLeft">
      <div className="relative flex items-start gap-6">
        {/* Timeline dot */}
        <div className="relative z-10 shrink-0">
          <div className="w-4 h-4 bg-sun-400 rounded-full border-4 border-white shadow-soft" />
          {!isLast && (
            <div className="absolute top-4 left-1/2 w-0.5 h-8 bg-sun-200 -translate-x-1/2" />
          )}
        </div>

        {/* Content card */}
        <div className="flex-1 bg-white rounded-2xl border border-neutral-200 shadow-soft p-6 hover:shadow-medium transition-all duration-300">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <span
                  className={`inline-flex px-2 py-1 text-xs font-medium rounded-full border ${getTypeColor(item.type)}`}
                >
                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </span>
                <div className="flex items-center gap-1 text-sm text-neutral-500">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {formatDate(item.date)}
                    {item.endDate && ` - ${formatDate(item.endDate)}`}
                  </span>
                </div>
              </div>

              <Heading level={3} size="lg" className="mb-1">
                {item.title}
              </Heading>

              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <Text size="sm" className="font-medium">
                  {item.organization}
                </Text>
                {item.location && (
                  <>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Technologies */}
          {item.technologies && item.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {item.technologies.map(tech => (
                <span
                  key={tech}
                  className="inline-flex px-2 py-1 text-xs font-medium bg-neutral-100 text-neutral-700 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </MotionWrapper>
  );
};

export default ExperienceSection;
