import { LoadingScreen } from './components/layout';
import { MotionProvider } from './components/providers';
import { useLoadingScreen } from './hooks';
import {
  HeroSection,
  ValuesSection,
  TechStackSection,
  FeaturedProjectsSection,
  ArchiveProjectsSection,
  ExperienceSection,
  ContactSection,
} from './sections';
import './App.css';

function App() {
  const { isLoading, handleLoadingComplete } = useLoadingScreen({
    minDuration: 1800,
    maxDuration: 2500,
  });

  return (
    <MotionProvider>
      {/* Loading Screen */}
      <LoadingScreen isVisible={isLoading} onComplete={handleLoadingComplete} />

      {/* Main Content */}
      <div className="min-h-screen bg-cream-50">
        {/* Hero Section */}
        <HeroSection />

        {/* Values Section */}
        <ValuesSection />

        {/* Tech Stack Section */}
        <TechStackSection />

        {/* Featured Projects Section */}
        <FeaturedProjectsSection />

        {/* Archive Projects Section */}
        <ArchiveProjectsSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Contact Section */}
        <ContactSection />
      </div>
    </MotionProvider>
  );
}

export default App;
