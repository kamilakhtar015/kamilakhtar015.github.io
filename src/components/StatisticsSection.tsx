import { Code, Clock, Coffee, Star } from 'lucide-react';

const statistics = [
  {
    number: '50+',
    label: 'Projects Completed',
    description: 'Delivered projects',
    icon: Code,
  },
  {
    number: '5+',
    label: 'Years Experience',
    description: 'Professional development',
    icon: Clock,
  },
  {
    number: '1000+',
    label: 'Coffee Cups',
    description: 'Fuel for coding',
    icon: Coffee,
  },
  {
    number: '200+',
    label: 'GitHub Stars',
    description: 'Open source contributions',
    icon: Star,
  },
];

export const StatisticsSection = () => {
  return (
    <section id="statistics" className="py-20 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Statistics</h2>
          <p className="text-accent-foreground/80 max-w-2xl mx-auto">
            Numbers that reflect my journey and passion for technology.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-bounce"
              >
                <div className="w-16 h-16 bg-accent-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-foreground/20 transition-smooth">
                  <IconComponent size={24} className="text-accent-foreground" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-2 group-hover:scale-110 transition-bounce">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold mb-1">{stat.label}</h3>
                <p className="text-accent-foreground/70 text-sm">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};