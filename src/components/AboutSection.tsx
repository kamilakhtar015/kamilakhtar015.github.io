export const AboutSection = () => {
  const skills = [
    'JavaScript & TypeScript',
    'React & Next.js',
    'Python & Data Analysis',
    'Node.js & APIs',
    'Git & Version Control',
    'Database Design'
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/95 text-white" style={{backgroundColor: 'hsl(210 20% 15%)'}}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="flex justify-center md:justify-start">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center border-2 border-white/10">
              <div className="w-44 h-44 rounded-full flex items-center justify-center text-6xl font-bold text-white" style={{backgroundColor: 'hsl(210 25% 20%)'}}>
                KA
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate software engineer with a strong background in data analysis and web development. 
                With experience spanning multiple technologies and industries, I enjoy solving complex problems 
                and building solutions that make a real impact.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or planning my next mountain adventure in the beautiful valleys of Pakistan.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Skills & Technologies</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <div 
                    key={skill}
                    className="flex items-center space-x-2 p-3 rounded-lg border transition-smooth" 
                    style={{backgroundColor: 'hsl(210 25% 20%)', borderColor: 'hsl(210 15% 30%)'}}>
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-200 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};