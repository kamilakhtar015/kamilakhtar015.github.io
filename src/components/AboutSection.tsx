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
    <section id="about" className="py-20 text-white" style={{backgroundColor: 'hsl(210 20% 15%)'}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 text-lg font-semibold mb-4 tracking-wider uppercase">About</h2>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-12">Let me introduce myself.</h1>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Profile Image */}
          <div className="md:col-span-3 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center border-4 border-orange-500/30 overflow-hidden">
              <img 
                src="/src/assets/kamil-profile.png" 
                alt="Kamil Akhtar"
                className="w-44 h-44 rounded-full object-cover object-center"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-9">
            <div className="mb-8">
              <p className="text-gray-300 leading-relaxed text-lg mb-6 font-playfair">
                I'm a Master's student in Computer Science at Georgia State University (Class of 2026) with a background from the Institute of Business Administration, Karachi. My interests bridge industry and research—pursuing roles in data engineering, data analysis, and machine learning, while also applying ML and deep learning to health sciences, neuroscience, and neuroimaging.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Profile Section */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6 tracking-wider uppercase">Profile</h3>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed mb-4 font-playfair">
                    Currently, I am conducting research in neuroimaging and image harmonization, while actively seeking exciting opportunities and internships to apply and expand my skills. If 
                    you think I'm a good fit, please contact me via
                  </p>
                  <div className="text-cyan-400">
                    <a href="mailto:kamil.akhtar@gmail.com" className="hover:text-cyan-300 transition-colors">
                      kamil.akhtar@gmail.com
                    </a>
                  </div>
                  
                  <div className="mt-6 space-y-2">
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
                <h3 className="text-xl font-bold text-white mb-6 tracking-wider uppercase">Skills</h3>
                <div className="space-y-1">
                  <p className="text-gray-300 leading-relaxed mb-6 font-playfair">
                    I thrive as both an independent contributor and a collaborative team player, with a solid foundation in research and coding. My expertise spans computer science, and Neuroimaging, where I enjoy solving complex problems at the intersection of technology and life sciences. Below are key highlights of my technical skills.
                  </p>
                  
                  <div className="space-y-6">
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
            <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center md:justify-start">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded transition-colors"
              >
                Hire Me
              </button>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded transition-colors">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};