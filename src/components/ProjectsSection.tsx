import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Resume Analyzer',
    description: 'Advanced ATS checking system that analyzes resumes for optimal job application success. This AI-powered tool helps format and structure documents intelligently, ensuring consistency and saving valuable time in the job search process.',
    tags: ['AI', 'Document Processing', 'ATS Optimization', 'Machine Learning'],
    liveUrl: 'https://crestviewaiautomations.com/',
    githubUrl: 'https://github.com/example',
    category: 'AI & Automation'
  },
  {
    title: 'E-Commerce Analytics Dashboard',
    description: 'Real-time analytics dashboard for e-commerce businesses with interactive charts and KPI tracking.',
    tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    category: 'Web Development'
  },
  {
    title: 'AI-Powered Task Manager',
    description: 'Smart task management app with AI suggestions and automated priority ranking.',
    tags: ['TypeScript', 'Next.js', 'OpenAI', 'Prisma'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    category: 'AI & Productivity'
  },
  {
    title: 'Financial Data Visualizer',
    description: 'Interactive tool for visualizing stock market data with predictive analytics capabilities.',
    tags: ['Python', 'Streamlit', 'Pandas', 'TensorFlow'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    category: 'Data Science'
  },
  {
    title: 'Real-time Chat Platform',
    description: 'Scalable chat application with real-time messaging and file sharing capabilities.',
    tags: ['React', 'Socket.io', 'Express', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    category: 'Web Development'
  },
  {
    title: 'Weather Forecast API',
    description: 'RESTful API providing accurate weather forecasts with machine learning predictions.',
    tags: ['FastAPI', 'Python', 'Redis', 'Docker'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    category: 'API Development'
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20" style={{backgroundColor: 'hsl(45 20% 96%)'}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, featuring web applications, data visualization tools, and innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg shadow-card hover:shadow-elegant transition-smooth overflow-hidden group border border-border/40"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-accent transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary"
                        className="text-xs font-medium bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 mt-auto">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground transition-smooth group-hover:border-accent"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 hover:bg-muted transition-smooth border-border/50 hover:border-border"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};