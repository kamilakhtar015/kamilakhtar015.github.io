import { Brain, TrendingUp, Code2, Waves } from 'lucide-react';

export const StatisticsSection = () => {
  const currentFocus = [
    {
      title: "Learning Deep Learning Concepts",
      description: "Mastering neural networks, transformers, and advanced architectures",
      icon: Brain,
      gradient: "from-blue-400 to-purple-500",
      bgPattern: "bg-gradient-to-br from-blue-500/20 to-purple-600/20"
    },
    {
      title: "Bioinformatics Algorithms Exploration", 
      description: "Studying computational biology and genomic data analysis",
      icon: Code2,
      gradient: "from-green-400 to-emerald-500",
      bgPattern: "bg-gradient-to-br from-green-500/20 to-emerald-600/20"
    },
    {
      title: "Research Papers to Write",
      description: "Working on publications in ML and computational biology",
      icon: TrendingUp,
      gradient: "from-orange-400 to-red-500",
      bgPattern: "bg-gradient-to-br from-orange-500/20 to-red-600/20"
    },
    {
      title: "Swimming Learning",
      description: "Developing swimming techniques and building water confidence",
      icon: Waves,
      gradient: "from-cyan-400 to-blue-500",
      bgPattern: "bg-gradient-to-br from-cyan-500/20 to-blue-600/20"
    }
  ];

  return (
    <section 
      id="learning-focus" 
      className="py-24 text-white relative overflow-hidden"
      style={{ backgroundColor: '#00939F' }}
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-52 h-52 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute top-10 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg animate-pulse delay-700"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-32 left-1/4 w-3 h-3 bg-white/20 rotate-45 animate-bounce delay-200"></div>
        <div className="absolute bottom-32 right-1/3 w-4 h-4 bg-white/15 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-2/3 left-10 w-2 h-2 bg-white/25 rotate-45 animate-bounce delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced header with gradient line */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
            Current Learning Journey
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></div>
          </h2>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">
            Exploring the frontiers of technology and personal growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {currentFocus.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={index} 
                className={`group relative ${project.bgPattern} backdrop-blur-lg rounded-2xl p-8 hover:scale-105 transition-all duration-500 border border-white/30 hover:border-white/50 animate-fade-in hover-scale`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Floating icon with gradient background */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="text-white" size={32} />
                  </div>
                </div>
                
                {/* Enhanced title with gradient text on hover */}
                <h3 className="font-bold text-white text-xl mb-4 leading-tight group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-teal-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {project.title}
                </h3>
                
                {/* Description with improved spacing */}
                <p className="text-teal-100 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                  {project.description}
                </p>
                
                {/* Animated bottom accent line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
                
                {/* Corner decoration */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-white/20 rounded-full group-hover:bg-white/40 transition-colors duration-300"></div>
              </div>
            );
          })}
        </div>
        
        {/* Additional motivational text */}
        <div className="text-center mt-16 animate-fade-in delay-1000">
          <p className="text-teal-200 text-lg italic">
            "Every expert was once a beginner. Every pro was once an amateur."
          </p>
        </div>
      </div>
    </section>
  );
};