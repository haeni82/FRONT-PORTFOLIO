// Core data types for Haeni's portfolio

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  avatar: string;
  socialLinks: SocialLinks;
}

export interface SocialLinks {
  github: string;
  email: string;
  resume: string;
  blog?: string;
  velog?: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  problem: string;
  solution: string;
  role: string;
  contributions: string[];
  learnings: string[];
  technologies: Technology[];
  category: ProjectCategory;
  featured: boolean;
  image: string;
  gallery?: string[];
  links: ProjectLinks;
  timeline: string;
}

export interface ProjectLinks {
  github?: string;
  demo?: string;
  figma?: string;
  case_study?: string;
  videoLink?: string;
}

export type ProjectCategory =
  | 'web-application'
  | 'mobile-app'
  | 'design-system'
  | 'open-source'
  | 'experiment';

export interface Technology {
  name: string;
  category: TechCategory;
  proficiency: 'strong' | 'comfortable' | 'experienced';
  icon: string;
  description?: string;
}

export type TechCategory =
  | 'frontend'
  | 'styling'
  | 'animation'
  | 'tools'
  | 'collaboration'
  | 'design';

export interface TechStackData {
  categories: {
    [key in TechCategory]: Technology[];
  };
}

export interface TimelineItem {
  id: string;
  date: string;
  endDate?: string;
  title: string;
  organization: string;
  location?: string;
  type: TimelineType;
  technologies?: string[];
}

export type TimelineType =
  | 'education'
  | 'work'
  | 'project'
  | 'achievement'
  | 'leadership';

export interface TimelineData {
  items: TimelineItem[];
}

export interface PortfolioContent {
  profile: ProfileData;
  projects: Project[];
  timeline: TimelineData;
  techStack: TechStackData;
  featured: {
    projectIds: string[]; // Exactly 3 IDs for featured spinner
  };
}

// Animation and UI types
export interface MotionVariant {
  initial?: object;
  animate?: object;
  exit?: object;
  transition?: object;
}

export interface AnimationConfig {
  duration: number;
  ease: string | number[];
  delay?: number;
}

export type AnimationType = 'fadeIn' | 'slideUp' | 'bloom' | 'tilt';
export type TriggerType = 'scroll' | 'hover' | 'click';

// Component prop types
export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost' | 'magnetic';
  size: 'sm' | 'md' | 'lg';
  animation?: 'glow' | 'tilt' | 'scale';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export interface CardProps {
  variant: 'default' | 'glass' | 'bloom';
  interactive?: boolean;
  children: React.ReactNode;
  className?: string;
}
