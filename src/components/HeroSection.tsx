import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-mountains.jpg';

export const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToResume = () => {
    document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Sunwoo Kang
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
          Data Analyst | Software Engineer | Founder
        </p>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          I enjoy creating web applications, exploring new technologies, and contributing to open-source projects.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            onClick={scrollToProjects}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 transition-bounce"
          >
            View Projects
          </Button>
          <Button 
            onClick={scrollToResume}
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 transition-bounce"
          >
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-16">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-accent transition-smooth"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-accent transition-smooth"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:contact@example.com"
            className="text-white/80 hover:text-accent transition-smooth"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="animate-bounce">
          <ChevronDown 
            size={32} 
            className="text-white/60 mx-auto cursor-pointer hover:text-accent transition-smooth"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </div>
    </section>
  );
};