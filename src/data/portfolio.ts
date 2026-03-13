import { type PortfolioContent } from '../types';
import { profileData } from './profile';
import { projectsData } from './projects';
import { timelineData } from './timeline';
import { techStackData } from './technologies';

export const portfolioContent: PortfolioContent = {
  profile: profileData,
  projects: projectsData,
  timeline: timelineData,
  techStack: techStackData,
  featured: {
    // Exactly 3 featured project IDs
    projectIds: [
      'interactive-dashboard',
      'design-system-library',
      'ecommerce-platform',
    ],
  },
};

// Helper functions for easy data access
export const getFeaturedProjects = () => {
  return portfolioContent.projects.filter(project =>
    portfolioContent.featured.projectIds.includes(project.id)
  );
};

export const getArchiveProjects = () => {
  return portfolioContent.projects.filter(
    project => !portfolioContent.featured.projectIds.includes(project.id)
  );
};

export const getProjectById = (id: string) => {
  return portfolioContent.projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string) => {
  return portfolioContent.projects.filter(
    project => project.category === category
  );
};

export const getTechnologiesByCategory = (category: string) => {
  return (
    portfolioContent.techStack.categories[
      category as keyof typeof portfolioContent.techStack.categories
    ] || []
  );
};
