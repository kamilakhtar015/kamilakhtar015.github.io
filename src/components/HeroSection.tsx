import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import gilgitBaltistanImage from '@/assets/gilgit-baltistan-valley.jpg';

export const HeroSection = () => {

  return (
    <>
      <style>{`
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-5px) translateX(2px); }
          50% { transform: translateY(-10px) translateX(-2px); }
          75% { transform: translateY(-5px) translateX(1px); }
        }
        
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animated-bg {
          animation: breathe 8s ease-in-out infinite;
        }
        
        .floating-content {
          animation: float 6s ease-in-out infinite;
        }
        
        .shimmer-overlay {
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 70%
          );
          background-size: 200% 200%;
          animation: shimmer 10s ease-in-out infinite;
        }
      `}</style>
      
      <section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      >
        {/* Animated Background Layer */}
        <div 
          className="absolute inset-0 animated-bg"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('/lovable-uploads/b5ff34f6-101a-4789-ae05-6f5bcc850ce7.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        
        {/* Shimmer Overlay */}
        <div className="absolute inset-0 shimmer-overlay opacity-30" />
        
        <div className="container mx-auto px-4 z-10 floating-content">
        {/* Location text overlay */}
        <div className="absolute top-8 left-8 text-white/70 text-sm font-light tracking-wider">
          Gilgit-Baltistan, Pakistan
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Kamil Akhtar
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-6 font-light">
          Machine Learning Engineer | Researcher | Data Analyst
        </p>
        
        {/* Urdu Poetry */}
        <div className="mb-6 max-w-4xl mx-auto">
          <div className="text-center mb-4 text-lg md:text-xl text-emerald-300 font-medium leading-relaxed" style={{fontFamily: 'Noto Nastaliq Urdu, serif'}}>
            خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے<br />
            خدا بندے سے خود پوچھے، بتا تیری رضا کیا ہے
          </div>
          <div className="italic text-white/80 text-base md:text-lg leading-relaxed">
            "Elevate your selfhood to such heights that, before every destiny is written,<br />
            God Himself will ask you: Tell me, what is it that you desire?"
          </div>
        </div>
        
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Exploring the intersection of technology and life sciences in the beautiful landscapes of Pakistan.
        </p>
        

        <div className="flex justify-center space-x-6 mb-16">
          <a 
            href="https://github.com/kamilakhtar015" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-emerald-300 transition-smooth"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/kamil-akhtar/"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-emerald-300 transition-smooth"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:kamil.akhtar015@gmail.com"
            className="text-white/80 hover:text-emerald-300 transition-smooth"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="animate-bounce">
          <ChevronDown 
            size={32} 
            className="text-white/60 mx-auto cursor-pointer hover:text-emerald-300 transition-smooth"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
        </div>
      </section>
    </>
  );
};