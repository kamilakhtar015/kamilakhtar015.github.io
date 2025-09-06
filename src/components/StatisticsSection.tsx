import { Brain, TrendingUp, Code2, Users } from 'lucide-react';

export const StatisticsSection = () => {
  const currentFocus = [
    {
      title: "Learning Deep Learning Concepts",
      description: "Mastering neural networks, transformers, and advanced architectures",
      progress: 65,
      icon: Brain
    },
    {
      title: "Bioinformatics Algorithms Exploration",
      description: "Studying computational biology and genomic data analysis",
      progress: 45,
      icon: Code2
    },
    {
      title: "Research Papers to Write",
      description: "Working on publications in ML and computational biology",
      progress: 30,
      icon: TrendingUp
    },
    {
      title: "Swimming Learning",
      description: "Developing swimming techniques and building water confidence",
      progress: 20,
      icon: Users
    }
  ];

  return (
    <section 
      id="learning-focus" 
      className="py-20 text-white relative overflow-hidden"
      style={{ backgroundColor: '#00939F' }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/5 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-teal-100 text-lg">Continuous growth in technology and personal development</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {currentFocus.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={index} 
                className="bg-white/15 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <IconComponent className="text-white" size={24} />
                  <span className="text-teal-100 text-sm font-semibold">{project.progress}%</span>
                </div>
                
                <h3 className="font-bold text-white text-lg mb-3 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-teal-100 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-2">
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-white to-teal-200 h-2 rounded-full transition-all duration-1000"
                      style={{width: `${project.progress}%`}}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};