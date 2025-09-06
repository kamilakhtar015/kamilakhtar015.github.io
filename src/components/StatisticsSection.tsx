import { Brain, GitBranch, Users, Zap, Trophy, Rocket, TrendingUp, Code2 } from 'lucide-react';

export const StatisticsSection = () => {
  const achievements = [
    {
      icon: Brain,
      number: "15+",
      label: "ML Models Deployed",
      sublabel: "Production systems",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: GitBranch,
      number: "500+",
      label: "GitHub Contributions",
      sublabel: "This year",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Users,
      number: "3",
      label: "Research Papers",
      sublabel: "Published & under review",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Zap,
      number: "98%",
      label: "Model Accuracy",
      sublabel: "Best performing model",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  const currentFocus = [
    {
      title: "Deep Learning Research",
      description: "Exploring transformer architectures for NLP applications",
      progress: 75,
      icon: Brain
    },
    {
      title: "MLOps Pipeline",
      description: "Building scalable ML deployment infrastructure",
      progress: 60,
      icon: Rocket
    },
    {
      title: "Open Source Contributions",
      description: "Contributing to scikit-learn and TensorFlow",
      progress: 40,
      icon: Code2
    }
  ];

  const skills = [
    { name: "Python/PyTorch", level: 95 },
    { name: "TensorFlow", level: 90 },
    { name: "Data Analysis", level: 88 },
    { name: "Cloud Computing", level: 82 },
    { name: "Research & Publishing", level: 78 }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Current Impact & Focus
          </h2>
          <p className="text-blue-200 text-lg">Pushing boundaries in machine learning and data science</p>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 border border-white/20"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center`}>
                  <IconComponent size={32} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-white font-semibold mb-1">
                  {achievement.label}
                </div>
                <div className="text-blue-200 text-sm">
                  {achievement.sublabel}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Current Projects */}
          <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10">
            <div className="flex items-center mb-6">
              <TrendingUp className="text-green-400 mr-3" size={24} />
              <h3 className="text-2xl font-bold text-white">Active Projects</h3>
            </div>
            <div className="space-y-6">
              {currentFocus.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <IconComponent className="text-blue-400 mr-3" size={20} />
                        <h4 className="font-semibold text-white">{project.title}</h4>
                      </div>
                      <span className="text-blue-300 text-sm">{project.progress}%</span>
                    </div>
                    <p className="text-blue-200 text-sm ml-8">{project.description}</p>
                    <div className="ml-8">
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full transition-all duration-1000"
                          style={{width: `${project.progress}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Skills Mastery */}
          <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10">
            <div className="flex items-center mb-6">
              <Trophy className="text-yellow-400 mr-3" size={24} />
              <h3 className="text-2xl font-bold text-white">Technical Expertise</h3>
            </div>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-blue-300 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full transition-all duration-1000 delay-300"
                      style={{width: `${skill.level}%`}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Amazing Together</h3>
            <p className="text-blue-200 mb-6">Currently open to collaborations on cutting-edge ML projects and research opportunities</p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};