// Main data exports for Haeni's portfolio

export { profileData } from './profile';
export { projectsData } from './projects';
export { timelineData } from './timeline';
export { techStackData } from './technologies';
export {
  portfolioContent,
  getFeaturedProjects,
  getArchiveProjects,
  getProjectById,
  getProjectsByCategory,
  getTechnologiesByCategory,
} from './portfolio';
export { aboutContent, developerIdentity, contactContent } from './content';

// Re-export types for convenience
export type {
  ProfileData,
  Project,
  ProjectLinks,
  ProjectCategory,
  Technology,
  TechCategory,
  TechStackData,
  TimelineItem,
  TimelineType,
  TimelineData,
  PortfolioContent,
} from '../types';
