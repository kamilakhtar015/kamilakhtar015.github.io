import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible || isScrolled) return null;

  return (
    <div className="fixed top-16 left-0 right-0 z-[60] bg-black/30 backdrop-blur-sm text-white py-3 px-4 border-t border-white/30">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base">
          Hi there, thanks for visiting my website! I'd love to{' '}
          <a 
            href="https://www.linkedin.com/in/kamil-akhtar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-cyan-200 underline transition-colors"
          >
            connect
          </a>
          {' '}with you :)
        </p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
        aria-label="Close notification"
      >
        <X size={20} />
      </button>
    </div>
  );
};