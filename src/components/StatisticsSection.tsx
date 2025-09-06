import { Award, Book, Code, Coffee, Network, Star, Target, BookOpen } from 'lucide-react';

export const StatisticsSection = () => {
  const stats = [
    {
      icon: Code,
      number: "200+",
      label: "Projects Completed",
      sublabel: "Delivered projects"
    },
    {
      icon: Award,
      number: "10",
      label: "Awards Received",
      sublabel: "Recognition earned"
    },
    {
      icon: Star,
      number: "100+",
      label: "Crazy Ideas",
      sublabel: "Innovative concepts"
    },
    {
      icon: Coffee,
      number: "1000+",
      label: "Hours Coding",
      sublabel: "Development time"
    },
    {
      icon: Network,
      number: "930+",
      label: "Network",
      sublabel: "Professional connections"
    },
    {
      icon: Target,
      number: "4/12",
      label: "2025 Reading Goal",
      sublabel: "Books read this year"
    }
  ];

  const booksRead = [
    "Never Let Me Go — Kazuo Ishiguro",
    "The Technological Republic — Alexander C. Karp",
    "Indian Princess: A Dark Tale of Deception — Clark C. Tanner",
    "Maktub — Paulo Coelho"
  ];

  return (
    <section id="goals-achievements" className="py-20 bg-cyan-500 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Goals & Achievements</h2>
          <p className="text-cyan-100 text-lg">Tracking progress and celebrating milestones</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <IconComponent size={48} className="text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-cyan-100 text-sm">
                  {stat.sublabel}
                </div>
              </div>
            );
          })}
        </div>

        {/* 2025 Reading Progress */}
        <div className="max-w-4xl mx-auto bg-white/10 rounded-lg p-8">
          <div className="flex items-center justify-center mb-6">
            <BookOpen size={32} className="text-white mr-3" />
            <h3 className="text-2xl font-bold text-white">2025 Reading Journey</h3>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between text-white mb-2">
              <span>Progress: 4 of 12 books</span>
              <span>33% Complete</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3">
              <div className="bg-white h-3 rounded-full transition-all duration-500" style={{width: '33.33%'}}></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Books Read So Far:</h4>
              <ul className="space-y-2">
                {booksRead.map((book, index) => (
                  <li key={index} className="text-cyan-100 text-sm flex items-start">
                    <span className="text-white mr-2">✓</span>
                    {book}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Remaining Goal:</h4>
              <p className="text-cyan-100 text-sm">
                8 more books to reach the 2025 target of 12 books. 
                Currently on track to expand knowledge across various domains including technology, literature, and personal development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};