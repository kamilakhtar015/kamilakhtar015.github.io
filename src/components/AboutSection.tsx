export const AboutSection = () => {
  const skills = [
    { name: 'JavaScript & TypeScript', level: 85 },
    { name: 'React & Next.js', level: 80 },
    { name: 'Python & Data Analysis', level: 90 },
    { name: 'Node.js & APIs', level: 75 },
    { name: 'Git & Version Control', level: 85 },
    { name: 'Database Design', level: 70 }
  ];

  return (
    <section id="about" className="py-20 text-white" style={{backgroundColor: 'hsl(210 20% 15%)'}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 text-lg font-semibold mb-4 tracking-wider uppercase">About</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">Let me introduce myself.</h1>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Profile Image */}
          <div className="md:col-span-3 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center border-4 border-orange-500/30">
              <div className="w-44 h-44 rounded-full flex items-center justify-center text-6xl font-bold text-white" style={{backgroundColor: 'hsl(210 25% 20%)'}}>
                KA
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-9">
            <div className="mb-8">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                I'm a passionate software engineer seeking opportunities in the tech sector. I'm also 
                a Computer Science graduate with specialization in data analysis and web development. 
                My primary interests have been precision software, data flow, efficient algorithms, and the list 
                is still growing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Profile Section */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6 tracking-wider uppercase">Profile</h3>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Currently I have experience in software engineering and data analysis. If 
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
                  <p className="text-gray-300 leading-relaxed mb-6">
                    I'm a self-like independent teamworker, strong in 
                    research and coding. My areas of expertise are 
                    computer science, data analysis, and web development. Below 
                    are highlights of my technical skills:
                  </p>
                  
                  <div className="space-y-4">
                    {skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300 text-sm uppercase tracking-wider">{skill.name}</span>
                          <span className="text-gray-300 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 h-2 rounded-full">
                          <div 
                            className="bg-gradient-to-r from-cyan-500 to-cyan-400 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center md:justify-start">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded transition-colors">
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