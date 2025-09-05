import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'Tech Innovations Inc.',
    period: 'Jan 2023 - Present',
    description: 'Leading development of scalable web applications using React and Node.js. Mentoring junior developers and implementing best practices.',
    highlights: ['Led team of 5 developers', 'Reduced load times by 40%', 'Implemented CI/CD pipeline']
  },
  {
    role: 'Data Analyst',
    company: 'Analytics Solutions Ltd.',
    period: 'Jun 2021 - Dec 2022',
    description: 'Analyzed large datasets to provide business insights and built interactive dashboards for stakeholders.',
    highlights: ['Processed 1M+ data points daily', 'Created 20+ automated reports', 'Improved decision-making speed']
  },
  {
    role: 'Full Stack Developer',
    company: 'Startup Ventures',
    period: 'Mar 2020 - May 2021',
    description: 'Developed MVP products from conception to deployment, working closely with product and design teams.',
    highlights: ['Built 3 successful MVPs', 'Managed entire tech stack', 'Acquired first 1000 users']
  }
];

const education = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Georgia State University',
    period: '2025 - 2026',
    description: 'Specialized in Machine Learning, Deep Learning and neuroimaging. Ongoing project on brain disease classification with advanced feature extraction through ICA and functional connectivities.'
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Institute of Business Administration Karachi',
    period: '2020 - 2024',
    description: 'Graduated with Dean\'s Honor List and capstone project with Indus Hospital on pneumonia classification.'
  }
];

export const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Resume</h2>
          <p className="text-muted-foreground mb-6">My professional journey and educational background</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <div className="w-1 h-8 bg-accent mr-4"></div>
              Work Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-muted last:border-l-0">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full"></div>
                  <div className="bg-card p-6 rounded-lg shadow-card hover:shadow-elegant transition-smooth">
                    <h4 className="text-xl font-semibold text-card-foreground mb-2">{exp.role}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <span className="text-accent font-medium">{exp.company}</span>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <ul className="space-y-1">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <div className="w-1 h-8 bg-accent mr-4"></div>
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-muted last:border-l-0">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full"></div>
                  <div className="bg-card p-6 rounded-lg shadow-card hover:shadow-elegant transition-smooth">
                    <h4 className="text-xl font-semibold text-card-foreground mb-2">{edu.degree}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <span className="text-accent font-medium">{edu.institution}</span>
                      <span className="text-sm text-muted-foreground">{edu.period}</span>
                    </div>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};