import { type TechStackData } from '../types';

export const techStackData: TechStackData = {
  categories: {
    frontend: [
      {
        name: 'React',
        category: 'frontend',
        proficiency: 'strong',
        icon: '/icons/react.png',
        description: 'Building complex UIs with hooks and modern patterns',
      },
      {
        name: 'TypeScript',
        category: 'frontend',
        proficiency: 'strong',
        icon: '/icons/ts.png',
        description: 'Type-safe development and better developer experience',
      },
      {
        name: 'Next.js',
        category: 'frontend',
        proficiency: 'comfortable',
        icon: '/icons/next.png',
        description: 'Full-stack React framework with SSR and optimization',
      },
      {
        name: 'Vue.js',
        category: 'frontend',
        proficiency: 'experienced',
        icon: 'vue',
        description: 'Progressive framework for building user interfaces',
      },
      {
        name: 'JavaScript ES6+',
        category: 'frontend',
        proficiency: 'strong',
        icon: '/icons/js.png',
        description: 'Modern JavaScript features and best practices',
      },
      {
        name: 'HTML5',
        category: 'frontend',
        proficiency: 'strong',
        icon: '/icons/html.png',
        description: 'Semantic markup and modern web standards',
      },
    ],
    styling: [
      {
        name: 'Tailwind CSS',
        category: 'styling',
        proficiency: 'strong',
        icon: '/icons/tailwind.png',
        description: 'Utility-first CSS framework for rapid UI development',
      },
      {
        name: 'Styled Components',
        category: 'styling',
        proficiency: 'comfortable',
        icon: '/icons/styledcomponents.png',
        description: 'CSS-in-JS library for component-scoped styling',
      },
      {
        name: 'shadcn/ui',
        category: 'styling',
        proficiency: 'comfortable',
        icon: '/icons/shadcn.png',
        description: 'Modern component library built on Radix UI and Tailwind',
      },
      {
        name: 'Sass/SCSS',
        category: 'styling',
        proficiency: 'comfortable',
        icon: 'sass',
        description: 'CSS preprocessor with variables and mixins',
      },
      {
        name: 'CSS Grid & Flexbox',
        category: 'styling',
        proficiency: 'strong',
        icon: '/icons/css.png',
        description: 'Modern CSS layout techniques for responsive design',
      },
    ],
    animation: [
      {
        name: 'Framer Motion',
        category: 'animation',
        proficiency: 'strong',
        icon: '/icons/framermotion.png',
        description:
          'React animation library for smooth, performant animations',
      },
      {
        name: 'Three.js',
        category: 'animation',
        proficiency: 'experienced',
        icon: '/icons/three.png',
        description:
          '3D graphics library for creating immersive web experiences',
      },
      {
        name: 'GSAP',
        category: 'animation',
        proficiency: 'comfortable',
        icon: 'gsap',
        description:
          'Professional-grade animation library for complex sequences',
      },
      {
        name: 'Lottie',
        category: 'animation',
        proficiency: 'experienced',
        icon: 'lottie',
        description: 'After Effects animations for web and mobile',
      },
      {
        name: 'CSS Animations',
        category: 'animation',
        proficiency: 'strong',
        icon: '/icons/css.png',
        description: 'Native CSS transitions and keyframe animations',
      },
    ],
    tools: [
      {
        name: 'Vite',
        category: 'tools',
        proficiency: 'strong',
        icon: '/icons/vite.png',
        description: 'Fast build tool and development server',
      },
      {
        name: 'Webpack',
        category: 'tools',
        proficiency: 'comfortable',
        icon: 'webpack',
        description: 'Module bundler for optimizing web applications',
      },
      {
        name: 'ESLint & Prettier',
        category: 'tools',
        proficiency: 'strong',
        icon: 'eslint',
        description: 'Code quality and formatting tools',
      },
      {
        name: 'Jest & Testing Library',
        category: 'tools',
        proficiency: 'comfortable',
        icon: 'jest',
        description: 'Testing frameworks for reliable code',
      },
    ],
    collaboration: [
      {
        name: 'Git & GitHub',
        category: 'collaboration',
        proficiency: 'strong',
        icon: '/icons/github.png',
        description: 'Version control and collaborative development',
      },
      {
        name: 'Jira & Notion',
        category: 'collaboration',
        proficiency: 'comfortable',
        icon: '/icons/jira.png',
        description: 'Project management and documentation tools',
      },
      {
        name: 'Slack & Discord',
        category: 'collaboration',
        proficiency: 'strong',
        icon: '/icons/slack.png',
        description: 'Team communication and collaboration platforms',
      },
    ],
    design: [
      {
        name: 'Figma',
        category: 'design',
        proficiency: 'comfortable',
        icon: '/icons/figma.png',
        description: 'Design tool for UI/UX and prototyping',
      },
      {
        name: 'Adobe XD',
        category: 'design',
        proficiency: 'experienced',
        icon: 'adobe-xd',
        description: 'User experience design and wireframing',
      },
      {
        name: 'Storybook',
        category: 'design',
        proficiency: 'comfortable',
        icon: 'storybook',
        description: 'Component development and design system documentation',
      },
    ],
    state: [
      {
        name: 'Zustand',
        category: 'state',
        proficiency: 'comfortable',
        icon: '/icons/zustand.png',
        description: 'Lightweight state management for React applications',
      },
      {
        name: 'TanStack Query',
        category: 'state',
        proficiency: 'comfortable',
        icon: '/icons/tanstack.png',
        description: 'Data fetching and caching library for React',
      },
    ],
    deployment: [
      {
        name: 'Vercel',
        category: 'deployment',
        proficiency: 'strong',
        icon: '/icons/vercel.png',
        description: 'Frontend deployment platform with edge functions',
      },
    ],
  },
};
