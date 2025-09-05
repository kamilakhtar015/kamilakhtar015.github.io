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
    role: 'Data Analyst Intern',
    company: 'Tafsol Technologies, Karachi',
    period: 'May 2024 - Dec 2024',
    description: 'Queried large datasets with SQL to identify consumer trends that shaped client strategy. Built interactive Power BI and Tableau dashboards to track KPIs and streamline reporting. Reduced report generation time by 30% through dashboard automation.'
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
    <section id="resume" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Resume</h2>
          <p className="text-muted-foreground mb-6">My professional journey and educational background</p>
        </div>

        <div className="space-y-16">
          {/* Industry Experience */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <div className="w-1 h-8 bg-accent mr-4"></div>
              Industry Experience
            </h3>
            
            <div className="space-y-8">
              {industryExperiences.map((exp, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-muted last:border-l-0">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full"></div>
                  <div className="bg-card p-6 rounded-lg shadow-card hover:shadow-elegant transition-smooth">
                    <h4 className="text-xl font-semibold text-card-foreground mb-2">{exp.role}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <span className="text-accent font-medium">{exp.company}</span>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Experience */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <div className="w-1 h-8 bg-accent mr-4"></div>
              Research Experience
            </h3>
            
            <div className="space-y-8">
              {researchExperiences.map((exp, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-muted last:border-l-0">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full"></div>
                  <div className="bg-card p-6 rounded-lg shadow-card hover:shadow-elegant transition-smooth">
                    <h4 className="text-xl font-semibold text-card-foreground mb-2">{exp.role}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <span className="text-accent font-medium">{exp.company}</span>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
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