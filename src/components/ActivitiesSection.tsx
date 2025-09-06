export const ActivitiesSection = () => {
  const activities = [
    {
      title: "Graduate Teaching Assistant",
      organization: "Georgia State University",
      period: "January 2025 - Present",
      description: [
        "Currently serving as GTA for Principles of Computer Science 2 and Machine Learning courses.",
        "Assisting professors with course management and student support.",
        "Conducting tutorials and make-up classes for students.",
        "Providing academic guidance and mentoring to undergraduate students."
      ]
    },
    {
      title: "Student Assistant",
      organization: "Andrew Young School, GSU",
      period: "Summer 2025",
      description: [
        "Conducted data analysis of graduate student projects with over 1,400 records.",
        "Developed data storytelling presentations for stakeholders.",
        "Presented findings to the Dean and Director of the school.",
        "Contributed to data-driven decision making for academic programs."
      ]
    },
    {
      title: "Global Exchange Mobility",
      organization: "University of Malaya, Malaysia",
      period: "February 2023 - July 2023",
      description: [
        "Selected to represent my university in the global diversified exchange program.",
        "Received fully funded scholarship for international academic exchange.",
        "Interacted with more than 300 people from 40+ countries.",
        "Enhanced cross-cultural communication and global perspective skills."
      ]
    },
    {
      title: "Program Director",
      organization: "Computer Science Society, IBA Karachi",
      period: "January 2024 - May 2024",
      description: [
        "Organized 2 city-level hackathons among 10 university students.",
        "Coordinated 2 industry specialist talks with direct engagement opportunities.",
        "Facilitated networking between students and industry experts.",
        "Enhanced community engagement in computer science education."
      ]
    }
  ];

  return (
    <section 
      id="activities" 
      className="py-20 text-white relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 20% -20%, hsl(210 20% 25%) 0%, transparent 50%),
          radial-gradient(ellipse 80% 50% at 80% 120%, hsl(210 20% 20%) 0%, transparent 50%),
          radial-gradient(ellipse 60% 40% at 40% 40%, hsl(210 20% 18%) 0%, transparent 50%),
          linear-gradient(135deg, hsl(210 20% 12%) 0%, hsl(210 20% 15%) 100%)
        `
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 text-lg font-semibold mb-4 tracking-wider uppercase">Activities</h2>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">The Road So Far, the Horizons Ahead</h1>
          <p className="text-gray-300 text-lg">Research, leadership & professional development activities</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {activities.map((activity, index) => (
              <div key={index} className="mb-12">
                <h3 className="text-orange-500 text-xl font-bold mb-2">{activity.title}</h3>
                <p className="text-gray-400 text-sm mb-1 italic">{activity.organization}</p>
                <p className="text-gray-400 text-sm mb-4">{activity.period}</p>
                
                <div className="space-y-2">
                  {activity.description.map((desc, descIndex) => (
                    <p key={descIndex} className="text-gray-300 leading-relaxed text-sm">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};