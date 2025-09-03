import { Calendar, MapPin, Trophy, Users } from 'lucide-react';

const activities = [
  {
    title: 'Tech Conference Speaker',
    role: 'Keynote Speaker',
    date: 'Nov 2023',
    location: 'San Francisco, CA',
    description: 'Delivered a keynote on "The Future of Web Development" to an audience of 500+ developers.',
    icon: Trophy,
    type: 'Speaking'
  },
  {
    title: 'HackForGood Hackathon',
    role: 'Team Lead & Mentor',
    date: 'Oct 2023',
    location: 'Virtual Event',
    description: 'Led a team of 6 developers to create a social impact app, winning 2nd place overall.',
    icon: Users,
    type: 'Competition'
  },
  {
    title: 'Open Source Contribution',
    role: 'Core Contributor',
    date: 'Sep 2023',
    location: 'Remote',
    description: 'Contributed major features to React Query library, improving developer experience for thousands.',
    icon: Calendar,
    type: 'Open Source'
  },
  {
    title: 'Local Dev Meetup',
    role: 'Community Organizer',
    date: 'Aug 2023',
    location: 'San Jose, CA',
    description: 'Organized monthly meetups for 200+ local developers, featuring talks and networking sessions.',
    icon: MapPin,
    type: 'Community'
  },
  {
    title: 'Coding Bootcamp Mentor',
    role: 'Technical Mentor',
    date: 'Jul 2023',
    location: 'Berkeley, CA',
    description: 'Mentored 15 students transitioning into tech careers, with 90% job placement rate.',
    icon: Users,
    type: 'Mentoring'
  },
  {
    title: 'AI Research Paper',
    role: 'Co-Author',
    date: 'Jun 2023',
    location: 'Stanford University',
    description: 'Co-authored research paper on machine learning applications in financial markets.',
    icon: Trophy,
    type: 'Research'
  }
];

export const ActivitiesSection = () => {
  return (
    <section id="activities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Activities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Beyond coding, I'm actively involved in the tech community through speaking, mentoring, and contributing to meaningful projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {activities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <div 
                  key={index}
                  className="bg-card rounded-lg shadow-card hover:shadow-elegant transition-smooth p-6 border-l-4 border-accent"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex items-center gap-4 md:flex-col md:items-center md:min-w-[120px]">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <IconComponent size={20} className="text-accent" />
                      </div>
                      <div className="text-sm text-muted-foreground md:text-center">
                        <div className="font-medium">{activity.date}</div>
                        <div className="flex items-center gap-1 md:justify-center mt-1">
                          <MapPin size={12} />
                          {activity.location}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <h3 className="text-xl font-semibold text-card-foreground">
                          {activity.title}
                        </h3>
                        <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full w-fit">
                          {activity.type}
                        </span>
                      </div>
                      <p className="text-accent font-medium mb-2">{activity.role}</p>
                      <p className="text-muted-foreground leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};