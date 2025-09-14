import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ResumeSection } from '@/components/ResumeSection';
import ProjectsSection from '@/components/ProjectsSection';
import { ActivitiesSection } from '@/components/ActivitiesSection';
import StatisticsSection from '@/components/StatisticsSection';
import { ContactSection } from '@/components/ContactSection';


const Index = () => {
  return (
    <div className="min-h-screen">
      
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <ProjectsSection />
      <ActivitiesSection />
      <StatisticsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
