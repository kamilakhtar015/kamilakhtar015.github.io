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
        </div>
      </section>
    </>
  );
};