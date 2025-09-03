export const ActivitiesSection = () => {
  const activities = [
    {
      title: "Founder/Co-President",
      organization: "Tech Innovation Club",
      period: "March 2023 - Present",
      description: [
        "Organized executive board members & meetings.",
        "Designed SIA discussion event posters.",
        "Took record of SIA meetings & discussions.",
        "Recruited Stanford students into club members."
      ]
    },
    {
      title: "Webmaster",
      organization: "Student Organization",
      period: "September 2022 - Present",
      description: [
        "Set homepage for the biggest Asian interest society in campus.",
        "Publicized the organization's activity, redesigned user interface that doubled website traffic.",
        "Gained 50% fans."
      ]
    },
    {
      title: "Student Associate",
      organization: "University Library",
      period: "January 2022 - December 2022",
      description: [
        "Helped manage 10000+ books through returning, lending, and shelving books.",
        "Assisted library users at the front desk.",
        "Participated in library user interface through Google Docs."
      ]
    },
    {
      title: "Community Director",
      organization: "Pakistan Technology Development Society",
      period: "September 2021 - March 2022",
      description: [
        "Fostered brainstorming community on campus through designing club logos.",
        "Organized the first Stanford Bioengineering Hackathon supported by Genentech, Operators, FTX, and other biotech companies.",
        "200+ attendees."
      ]
    },
    {
      title: "Center player",
      organization: "Stanford Recreational Fitness Basketball",
      period: "September 2020 - March 2021",
      description: [
        "Participated in intramural basketball league every week.",
        "Played in varsity basketball team during high school."
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">My positions during undergraduate.</h1>
          <p className="text-gray-300 text-lg">Summary of my leadership & extracurricular activities</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {activities.map((activity, index) => (
            <div key={index} className="text-center">
              <h3 className="text-orange-500 text-xl font-bold mb-2">{activity.title}</h3>
              <p className="text-gray-400 text-sm mb-1 italic">{activity.organization}</p>
              <p className="text-gray-400 text-sm mb-6">{activity.period}</p>
              
              <div className="space-y-2">
                {activity.description.map((desc, descIndex) => (
                  <p key={descIndex} className="text-gray-300 leading-relaxed">
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};