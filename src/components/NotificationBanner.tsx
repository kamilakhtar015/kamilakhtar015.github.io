import { useState } from 'react';
import { X } from 'lucide-react';

export const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-slate-600 to-slate-700 text-white py-3 px-4 relative">
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