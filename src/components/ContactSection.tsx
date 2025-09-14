import { Mail, MapPin, Linkedin, ArrowUp } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section 
      id="contact" 
      className="py-20 text-white relative overflow-hidden bg-[#232a32]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            I'd Love To Connect With You.
          </h1>
          <p className="text-gray-300 text-lg">
            Let me get to know more about you.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {/* Where To Find Me */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center">
                <MapPin size={32} className="text-orange-500" />
              </div>
            </div>
            <h3 className="text-orange-500 text-lg font-bold mb-4">
              Where To Find Me
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Georgia State University<br />
              Atlanta, GA<br />
              30303, US
            </p>
          </div>

          {/* Email Me At */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center">
                <Mail size={32} className="text-orange-500" />
              </div>
            </div>
            <h3 className="text-orange-500 text-lg font-bold mb-4">
              Email Me At
            </h3>
            <p className="text-gray-300 leading-relaxed">
              <a 
                href="mailto:kamil.akhtar015@gmail.com" 
                className="hover:text-cyan-400 transition-colors"
              >
                kamil.akhtar015@gmail.com
              </a>
            </p>
          </div>

          {/* Let's Connect */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center">
                <Linkedin size={32} className="text-orange-500" />
              </div>
            </div>
            <h3 className="text-orange-500 text-lg font-bold mb-4">
              Let's Connect
            </h3>
            <p className="text-gray-300 leading-relaxed">
              <a 
                href="https://www.linkedin.com/in/kamil-akhtar/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-cyan-400 transition-colors"
              >
                LinkedIn Profile
              </a>
            </p>
          </div>
        </div>


        {/* Back to Top Button */}
        <div className="flex justify-center mt-16">
          <button 
            title="Back to Top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center transition-colors"
          >
            <ArrowUp size={20} className="text-white" />
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 pt-8 border-t border-gray-600">
          <p className="text-gray-400 text-sm">© Kamil Akhtar, 2025</p>
        </div>
      </div>
    </section>
  );
};
