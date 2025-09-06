export const ActivitiesSection = () => {
  const activities = [
    {
      title: "Graduate Research Assistant",
      organization: "Georgia State University",
      period: "August 2024 - Present",
      description: [
        "Conducting research in machine learning and computational biology.",
        "Collaborating with faculty on research publications.",
        "Developing ML models for genomic data analysis.",
        "Contributing to academic papers and conference presentations."
      ]
    },
    {
      title: "ML Engineering Intern",
      organization: "Tech Innovation Lab",
      period: "May 2024 - August 2024",
      description: [
        "Developed and deployed machine learning models in production.",
        "Improved model accuracy by 15% through advanced feature engineering.",
        "Collaborated with cross-functional teams on data science projects."
      ]
    },
    {
      title: "Graduate Teaching Assistant",
      organization: "Computer Science Department",
      period: "January 2024 - Present",
      description: [
        "Assisting undergraduate students in data structures and algorithms.",
        "Conducting lab sessions and grading assignments.",
        "Mentoring students in programming and problem-solving techniques."
      ]
    },
    {
      title: "Data Science Research Volunteer",
      organization: "Healthcare Analytics Initiative",
      period: "September 2023 - December 2023",
      description: [
        "Applied machine learning to healthcare data analysis.",
        "Contributed to predictive modeling for patient outcomes.",
        "Collaborated with medical professionals on data interpretation."
      ]
    },
    {
      title: "Student Organization Leader",
      organization: "AI/ML Study Group",
      period: "September 2023 - Present",
      description: [
        "Leading weekly study sessions on machine learning topics.",
        "Organizing workshops and guest speaker events.",
        "Building a community of graduate students interested in AI research."
      ]
    },
    {
      title: "Competitive Programming Participant",
      organization: "ACM Programming Contests",
      period: "2022 - Present",
      description: [
        "Participating in regional and national programming competitions.",
        "Improving algorithmic thinking and problem-solving skills.",
        "Mentoring undergraduate students in competitive programming."
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">My journey as a Masters student.</h1>
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