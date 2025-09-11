import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import k2MountainImage from '@/assets/k2-mountain-hero.jpg';

export const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url(${k2MountainImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 z-10">
        {/* K2 Peak info */}
        <div className="absolute top-8 right-8 text-white/80 text-sm font-light tracking-wider text-right">
          <div className="font-medium">K2 Peak</div>
          <div className="text-xs text-white/60 mt-1">8,611m • "Savage Mountain"</div>
          <div className="text-xs text-white/60">Karakoram Range, Gilgit-Baltistan</div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Kamil Akhtar
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-6 font-light">
          Machine Learning Engineer | Researcher | Data Analyst
        </p>
        
        {/* English Translation */}
        <div className="mb-6 max-w-4xl mx-auto">
          <div className="italic text-white/80 text-base md:text-lg leading-relaxed text-center">
            "Elevate your selfhood to such heights that, before every destiny is written,<br />
            God Himself will ask you: Tell me, what is it that you desire?"
          </div>
        </div>
        
        
        
        <div className="flex justify-center space-x-6 mb-16">
          <a 
            href="https://github.com/kamilakhtar015" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-accent transition-smooth hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/kamil-akhtar/"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-accent transition-smooth hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:kamil.akhtar015@gmail.com"
            className="text-white/80 hover:text-accent transition-smooth hover:scale-110"
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