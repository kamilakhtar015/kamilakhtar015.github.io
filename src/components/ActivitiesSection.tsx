import { Calendar, MapPin, Users, Award, ChevronRight, Sparkles } from 'lucide-react';

export const ActivitiesSection = () => {
  const activities = [
    {
      title: "Graduate Teaching Assistant",
      organization: "Georgia State University",
      period: "January 2025 - Present",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      bgGlow: "shadow-purple-500/30",
      description: [
        "Currently serving as GTA for Principles of Computer Science 2 and Machine Learning courses",
        "Assisting professors with course management and student support",
        "Conducting tutorials and make-up classes for students",
        "Providing academic guidance and mentoring to undergraduate students"
      ],
      achievements: ["50+ Students Mentored", "2 Courses", "Active Role"]
    },
    {
      title: "Student Assistant",
      organization: "Andrew Young School, GSU",
      period: "Summer 2025",
      icon: Award,
      color: "from-emerald-500 to-teal-500",
      bgGlow: "shadow-emerald-500/30",
      description: [
        "Conducted data analysis of graduate student projects with over 1,400 records",
        "Developed data storytelling presentations for stakeholders",
        "Presented findings to the Dean and Director of the school",
        "Contributed to data-driven decision making for academic programs"
      ],
      achievements: ["1,400+ Records", "Executive Presentation", "Data Impact"]
    },
    {
      title: "Global Exchange Mobility",
      organization: "University of Malaya, Malaysia",
      period: "February 2023 - July 2023",
      icon: MapPin,
      color: "from-blue-500 to-cyan-500",
      bgGlow: "shadow-blue-500/30",
      description: [
        "Selected to represent university in the global diversified exchange program",
        "Received fully funded scholarship for international academic exchange",
        "Interacted with more than 300 people from 40+ countries",
        "Enhanced cross-cultural communication and global perspective skills"
      ],
      achievements: ["40+ Countries", "300+ Connections", "Full Scholarship"]
    },
    {
      title: "Program Director",
      organization: "Computer Science Society, IBA Karachi",
      period: "January 2024 - May 2024",
      icon: Sparkles,
      color: "from-orange-500 to-red-500",
      bgGlow: "shadow-orange-500/30",
      description: [
        "Organized 2 city-level hackathons among 10 university students",
        "Coordinated 2 industry specialist talks with direct engagement opportunities",
        "Facilitated networking between students and industry experts",
        "Enhanced community engagement in computer science education"
      ],
      achievements: ["2 Hackathons", "10 Universities", "Industry Connect"]
    }
  ];

  return (
    <section 
      id="activities" 
      className="py-24 text-white relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 100% 60% at 20% -20%, hsl(210 20% 25%) 0%, transparent 50%),
          radial-gradient(ellipse 100% 60% at 80% 120%, hsl(210 20% 20%) 0%, transparent 50%),
          radial-gradient(ellipse 80% 50% at 40% 40%, hsl(210 20% 18%) 0%, transparent 50%),
          linear-gradient(135deg, hsl(210 20% 8%) 0%, hsl(210 20% 15%) 100%)
        `
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-32 left-1/4 w-4 h-4 bg-orange-400/20 rotate-45 animate-bounce delay-300"></div>
        <div className="absolute bottom-40 right-1/4 w-6 h-6 bg-purple-400/20 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-2/3 left-16 w-3 h-3 bg-blue-400/20 rotate-45 animate-bounce delay-1200"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced header with animations */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <h2 className="text-orange-400 text-lg font-bold tracking-[0.3em] uppercase">Activities</h2>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse delay-300"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 relative">
            <span className="bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent">
              The Road So Far,
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 bg-clip-text text-transparent">
              the Horizons Ahead
            </span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
          </h1>
          
          <p className="text-gray-300 text-xl font-light tracking-wide">
            RESEARCH, LEADERSHIP & PROFESSIONAL DEVELOPMENT ACTIVITIES
          </p>
        </div>

        {/* Timeline layout with enhanced cards */}
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Central timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-purple-500 to-blue-500 transform -translate-x-1/2 hidden lg:block"></div>
            
            <div className="space-y-16">
              {activities.map((activity, index) => {
                const IconComponent = activity.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div 
                    key={index} 
                    className={`relative flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} group animate-fade-in`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full border-4 border-gray-800 z-10 group-hover:scale-150 transition-transform duration-300 hidden lg:block">
                      <div className="absolute inset-1 bg-white rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Content card */}
                    <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-16' : 'lg:pl-16'}`}>
                      <div className={`bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${activity.bgGlow} group-hover:-translate-y-2`}>
                        
                        {/* Card header with icon */}
                        <div className="flex items-start justify-between mb-6">
                          <div className={`w-16 h-16 bg-gradient-to-br ${activity.color} rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                            <IconComponent className="text-white" size={28} />
                          </div>
                          <div className="text-right">
                            <div className="flex items-center text-gray-400 text-sm mb-1">
                              <Calendar size={14} className="mr-1" />
                              {activity.period}
                            </div>
                            <div className="flex items-center text-gray-500 text-sm">
                              <MapPin size={14} className="mr-1" />
                              {activity.organization}
                            </div>
                          </div>
                        </div>
                        
                        {/* Title */}
                        <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${activity.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                          {activity.title}
                        </h3>
                        
                        {/* Achievement badges */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {activity.achievements.map((achievement, achIndex) => (
                            <span 
                              key={achIndex}
                              className={`px-3 py-1 bg-gradient-to-r ${activity.color} bg-opacity-20 rounded-full text-xs font-semibold text-white border border-gray-600 hover:scale-110 transition-transform duration-200`}
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                        
                        {/* Description */}
                        <div className="space-y-3">
                          {activity.description.map((desc, descIndex) => (
                            <div key={descIndex} className="flex items-start group/item">
                              <ChevronRight 
                                size={16} 
                                className="text-orange-400 mr-3 mt-0.5 group-hover/item:translate-x-1 transition-transform duration-200" 
                              />
                              <p className="text-gray-300 leading-relaxed text-sm group-hover/item:text-white transition-colors duration-200">
                                {desc}
                              </p>
                            </div>
                          ))}
                        </div>
                        
                        {/* Hover effect bottom line */}
                        <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${activity.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Motivational footer */}
        <div className="text-center mt-20 animate-fade-in delay-1000">
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-lg rounded-2xl border border-gray-700/50">
            <Sparkles className="text-orange-400" size={24} />
            <p className="text-gray-300 text-lg italic">
              "Leadership is not about being in charge. It's about taking care of those in your charge."
            </p>
            <Sparkles className="text-orange-400" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};