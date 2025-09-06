import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import gilgitBaltistanHero from '../assets/gilgit-baltistan-hero.jpg';

export const HeroSection = () => {

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center text-center"
      style={{
        background: `linear-gradient(135deg, hsl(210 25% 8% / 0.7) 0%, hsl(210 20% 12% / 0.8) 100%), url(${gilgitBaltistanHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 z-10">
        {/* Location text overlay */}
        <div className="absolute top-8 left-8 text-white/70 text-sm font-light tracking-wider">
          Gupis Valley (Gilgit-Baltistan)
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Kamil Akhtar
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-6 font-light">
          Machine Learning Engineer | Researcher | Data Analyst
        </p>
        
        {/* Urdu Poetry */}
        <div className="mb-6 max-w-4xl mx-auto">
          <div className="text-center mb-4 text-lg md:text-xl text-accent font-medium leading-relaxed" style={{fontFamily: 'Noto Nastaliq Urdu, serif'}}>
            خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے<br />
            خدا بندے سے خود پوچھے، بتا تیری رضا کیا ہے
          </div>
          <div className="italic text-white/80 text-base md:text-lg leading-relaxed">
            "Elevate your selfhood to such heights that, before every destiny is written,<br />
            God Himself will ask you: Tell me, what is it that you desire?"
          </div>
        </div>
        
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Background PC: Animated glimpse of my village, Gupis.
        </p>
        

        <div className="flex justify-center space-x-6 mb-16">
          <a 
            href="https://github.com/kamilakhtar015" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-accent transition-smooth"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/kamil-akhtar/"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-accent transition-smooth"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:kamil.akhtar015@gmail.com"
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