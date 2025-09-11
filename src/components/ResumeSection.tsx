import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const industryExperiences = [
  {
    role: 'AI Integration Intern',
    company: 'Crestview Consulting, Miami, FL',
    period: 'Jun 2025 - Aug 2025',
    description: 'Designed and deployed full-stack AI applications, including an ATS Resume Analyzer. Automated workflows using Supabase and n8n, reducing manual operations by 70%. Partnered with clients to translate technical results into actionable business insights.'
  },
  {
    role: 'Data Analyst (Student Assistant)',
    company: 'Andrew Young School of Policy Studies, Georgia State University',
    period: 'Jun 2025 - Aug 2025',
    description: 'Conducted the Graduate Career Outcomes Project, performing comprehensive data analysis of 1400+ alumni records. Achieved key performance indicators including 95%+ alumni location tracking accuracy and 80%+ employment rate analysis, providing critical insights for academic program evaluation and student career services.'
  },
  {
    role: 'Machine Learning Intern',
    company: 'The Indus Hospital, Karachi',
    period: 'Sep 2023 - Jun 2024',
    description: 'Collaborated with a multidisciplinary team to understand clinical requirements and ensure the solution\'s alignment with medical standards. Processed a 9,200 chest X-ray images dataset, performing data augmentation, cleaning, and preprocessing to enhance model training efficacy. Designed and trained a model using ResNet50 for feature extraction and a custom CNN, achieving an impressive 98% accuracy.'
  }
];

const researchExperiences = [
  {
    role: 'Graduate Research Assistant',
    company: 'TReNDS Lab, Georgia State University',
    period: '2025 - Present',
    description: 'Schizophrenia and bipolar classification using advanced ICA feature extraction with sliding window techniques. Developing novel approaches for brain disease classification with advanced feature extraction through ICA and functional connectivities.'
  },
  {
    role: 'Research Assistant',
    company: 'Georgia State University',
    period: '2025 - Present',
    description: 'Privacy Preserving Image Level Harmonization using GANs with Federated Learning. Working on cutting-edge techniques to maintain data privacy while enabling collaborative machine learning across distributed datasets.'
  },
  {
    role: 'Graduate Teaching Assistant',
    company: 'Georgia State University',
    period: '2025 - Present',
    description: 'Teaching Assistant for Machine Learning and Computer Science courses. Assisting students with complex concepts, grading assignments, and conducting lab sessions to enhance practical understanding of theoretical concepts.'
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
    <section id="resume" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-primary animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4 relative">
            Resume
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>
          </h2>
          <p className="text-muted-foreground mb-6 text-lg">My professional journey and educational background</p>
        </div>

        {/* Work Experience Section */}
        <div className="mb-20">
          <div className="flex items-center mb-12 group">
            <div className="w-2 h-10 bg-gradient-to-b from-accent to-primary mr-6 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
            <h3 className="text-3xl font-bold text-foreground">Work Experience</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent ml-6"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Industry Experience */}
            <div className="animate-fade-in delay-200">
              <div className="flex items-center mb-8">
                <div className="w-3 h-3 bg-accent rounded-full mr-3 animate-pulse"></div>
                <h4 className="text-2xl font-bold text-accent">Industry</h4>
              </div>
              <div className="space-y-10 relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent"></div>
                {industryExperiences.map((exp, index) => (
                  <div 
                    key={index} 
                    className="relative pl-12 group animate-fade-in hover-scale"
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="absolute -left-1 top-2 w-6 h-6 bg-accent rounded-full border-4 border-background shadow-lg group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
                      <div className="w-2 h-2 bg-background rounded-full"></div>
                    </div>
                    <div className="bg-card p-8 rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 border border-accent/10 group-hover:border-accent/30 group-hover:-translate-y-1">
                      <div className="flex items-start justify-between mb-4">
                        <h5 className="text-xl font-bold text-card-foreground group-hover:text-accent transition-colors duration-300">{exp.role}</h5>
                        <span className="text-sm text-muted-foreground bg-accent/10 px-3 py-1 rounded-full font-medium">{exp.period}</span>
                      </div>
                      <div className="mb-4">
                        <span className="text-accent font-semibold text-lg">{exp.company}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Experience */}
            <div className="animate-fade-in delay-400">
              <div className="flex items-center mb-8">
                <div className="w-3 h-3 bg-primary rounded-full mr-3 animate-pulse delay-500"></div>
                <h4 className="text-2xl font-bold text-primary">Research</h4>
              </div>
              <div className="space-y-10 relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
                {researchExperiences.map((exp, index) => (
                  <div 
                    key={index} 
                    className="relative pl-12 group animate-fade-in hover-scale"
                    style={{ animationDelay: `${500 + index * 100}ms` }}
                  >
                    <div className="absolute -left-1 top-2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
                      <div className="w-2 h-2 bg-background rounded-full"></div>
                    </div>
                    <div className="bg-card p-8 rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 border border-primary/10 group-hover:border-primary/30 group-hover:-translate-y-1">
                      <div className="flex items-start justify-between mb-4">
                        <h5 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">{exp.role}</h5>
                        <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full font-medium">{exp.period}</span>
                      </div>
                      <div className="mb-4">
                        <span className="text-primary font-semibold text-lg">{exp.company}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="animate-fade-in delay-800">
          <div className="flex items-center mb-12 group">
            <div className="w-2 h-10 bg-gradient-to-b from-primary to-accent mr-6 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
            <h3 className="text-3xl font-bold text-foreground">Education</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent ml-6"></div>
          </div>
          
          <div className="space-y-10 relative max-w-4xl mx-auto">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent"></div>
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="relative pl-12 group animate-fade-in hover-scale"
                style={{ animationDelay: `${900 + index * 150}ms` }}
              >
                <div className="absolute -left-1 top-2 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background shadow-lg group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
                  <div className="w-2 h-2 bg-background rounded-full"></div>
                </div>
                <div className="bg-card p-8 rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 border border-gradient-to-r border-primary/10 group-hover:border-accent/30 group-hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">{edu.degree}</h4>
                    <span className="text-sm text-muted-foreground bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 rounded-full font-medium">{edu.period}</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-accent font-semibold text-xl">{edu.institution}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};