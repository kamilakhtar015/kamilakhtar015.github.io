import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Animated Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
      
      {/* Moving Mountains */}
      <div className="absolute inset-0 opacity-80">
        <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-gray-800 to-gray-600 clip-path-mountain animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-3/4 h-2/3 bg-gradient-to-t from-gray-700 to-gray-500 clip-path-mountain-2 animate-[pulse_3s_ease-in-out_infinite]"></div>
      </div>
      
      {/* Animated Clouds */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-16 bg-white/10 rounded-full blur-sm animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute top-32 right-20 w-24 h-12 bg-white/8 rounded-full blur-sm animate-[float_8s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute top-40 left-1/3 w-20 h-10 bg-white/6 rounded-full blur-sm animate-[float_10s_ease-in-out_infinite]"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-[float_5s_ease-in-out_infinite]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Shimmering Light Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shimmer_4s_ease-in-out_infinite] transform -skew-x-12"></div>
      
      {/* Village Silhouettes */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 opacity-60">
        <div className="absolute bottom-20 left-20 w-8 h-12 bg-amber-200/20 animate-[glow_3s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-16 left-32 w-6 h-8 bg-amber-200/15 animate-[glow_4s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-24 right-40 w-10 h-14 bg-amber-200/25 animate-[glow_5s_ease-in-out_infinite]"></div>
      </div>
      
      {/* River Animation */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-r from-blue-400/10 via-blue-300/15 to-blue-400/10 animate-[wave_6s_ease-in-out_infinite]"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 animate-[fadeInUp_1s_ease-out]">
        {/* Location text overlay */}
        <div className="absolute top-8 left-8 text-white/70 text-sm font-light tracking-wider animate-[fadeIn_2s_ease-out]">
          Gupis Valley (Gilgit-Baltistan)
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight animate-[scaleIn_1.2s_ease-out]">
          Kamil Akhtar
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-6 font-light animate-[fadeInUp_1.5s_ease-out]">
          Machine Learning Engineer | Researcher | Data Analyst
        </p>
        
        {/* Urdu Poetry */}
        <div className="mb-6 max-w-4xl mx-auto animate-[fadeInUp_2s_ease-out]">
          <div className="text-center mb-4 text-lg md:text-xl text-accent font-medium leading-relaxed" style={{fontFamily: 'Noto Nastaliq Urdu, serif'}}>
            خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے<br />
            خدا بندے سے خود پوچھے، بتا تیری رضا کیا ہے
          </div>
          <div className="italic text-white/80 text-base md:text-lg leading-relaxed">
            "Elevate your selfhood to such heights that, before every destiny is written,<br />
            God Himself will ask you: Tell me, what is it that you desire?"
          </div>
        </div>
        
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed animate-[fadeInUp_2.5s_ease-out]">
          Background: Animated glimpse of my village, Gupis.
        </p>
        
        <div className="flex justify-center space-x-6 mb-16 animate-[fadeInUp_3s_ease-out]">
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