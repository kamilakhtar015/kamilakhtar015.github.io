import { Award, Book, Code, Coffee, Network, Star } from 'lucide-react';

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
      icon: Book,
      number: "1000+",
      label: "Books Read",
      sublabel: "Knowledge gained"
    }
  ];

  return (
    <section id="statistics" className="py-20 bg-cyan-500 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Statistics</h2>
          <p className="text-cyan-100 text-lg max-w-2xl mx-auto">
            Numbers that reflect my journey and passion for technology.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
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
      </div>
    </section>
  );
};