import React from 'react';
import kamilProfile from '@/assets/kamil-profile.jpg';

export const AboutSection = () => {
  const skills = [
    { name: 'Python & Data Analysis', level: 90 },
    { name: 'Machine & Deep Learning', level: 80 },
    { name: 'Research', level: 70 },
    { name: 'SQL', level: 70 },
    { name: 'Database Design', level: 70 },
    { name: 'Java', level: 60 }
  ];

  return (
    <section id="about" className="bg-[hsl(210,20%,15%)] py-20 sm:py-24 lg:py-32 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-orange-500 text-lg font-semibold mb-4 tracking-wider uppercase">About</h2>
        </div>

        <div className="grid md:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
          {/* Profile Image */}
          <div className="md:col-span-4 flex justify-center md:justify-start items-start px-2 sm:px-0">
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center border-4 border-orange-500/30 overflow-hidden">
              <img
                src={kamilProfile}
                alt="Kamil Akhtar"
                className="w-52 h-52 sm:w-60 sm:h-60 rounded-full object-cover object-center"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-8 px-2 sm:px-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-white mb-6 lg:mb-8">Let me introduce myself.</h1>
            
            <div className="mb-6 sm:mb-8 lg:mb-10">
              <p className="text-gray-300 leading-relaxed text-lg mb-6 font-playfair">
                I'm a Master's student in Computer Science at Georgia State University (Class of 2026) with a background
                from the Institute of Business Administration, Karachi. My interests bridge industry and research—pursuing
                roles in data engineering, data analysis, and machine learning, while also applying ML and deep learning to
                health sciences, neuroscience, and neuroimaging.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              {/* Profile Section */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 tracking-wider uppercase">Profile</h3>
                <div className="space-y-2 sm:space-y-4">
                  <p className="text-gray-300 leading-relaxed mb-2 sm:mb-4 font-playfair">
                    Currently, I am conducting research in neuroimaging and image harmonization, while actively seeking
                    exciting opportunities and internships to apply and expand my skills. If you think I'm a good fit, please
                    contact me via
                  </p>
                  <div className="text-cyan-400">
                    <a href="mailto:kamil.akhtar@gmail.com" className="hover:text-cyan-300 transition-colors">
                      kamil.akhtar@gmail.com
                    </a>
                  </div>

                  <div className="mt-4 sm:mt-6 space-y-2">
                    <div>
                      <span className="text-gray-400 text-sm uppercase tracking-wider">Full Name</span>
                      <p className="text-white font-medium">Kamil Akhtar</p>
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm uppercase tracking-wider">Email</span>
                      <p className="text-white font-medium">kamil.akhtar@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills Section */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 tracking-wider uppercase">Skills</h3>
                <div className="space-y-1">
                  <p className="text-gray-300 leading-relaxed mb-2 sm:mb-6 font-playfair">
                    I thrive as both an independent contributor and a collaborative team player, with a solid foundation in
                    research and coding. My expertise spans computer science, and Neuroimaging, where I enjoy solving complex
                    problems at the intersection of technology and life sciences. Below are key highlights of my technical
                    skills.
                  </p>

                  <div className="space-y-4 sm:space-y-6">
                    {skills.map((skill) => (
                      <div key={skill.name} className="relative">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300 text-sm font-medium tracking-wider uppercase">{skill.name}</span>
                        </div>
                        <div className="relative">
                          <div className="w-full bg-gray-700/50 h-2 rounded-sm">
                            <div
                              className="bg-gray-500 h-2 rounded-sm transition-all duration-1000 ease-out relative"
                              style={{ width: `${skill.level}%` }}
                            >
                              <span className="absolute -top-8 right-0 text-gray-300 text-sm font-medium bg-gray-800 px-2 py-1 rounded text-center min-w-[45px]">
                                {skill.level}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-12 justify-center md:justify-start">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded transition-colors"
              >
                Hire Me
              </button>
              <a
                href="/kamil-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded transition-colors text-center"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};