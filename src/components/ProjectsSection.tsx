import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'E-Commerce Analytics Dashboard',
    description: 'Real-time analytics dashboard for e-commerce businesses with interactive charts and KPI tracking.',
    tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example'
  },
  {
    title: 'AI-Powered Task Manager',
    description: 'Smart task management app with AI suggestions and automated priority ranking.',
    tags: ['TypeScript', 'Next.js', 'OpenAI', 'Prisma'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example'
  },
  {
    title: 'Financial Data Visualizer',
    description: 'Interactive tool for visualizing stock market data with predictive analytics capabilities.',
    tags: ['Python', 'Streamlit', 'Pandas', 'TensorFlow'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example'
  },
  {
    title: 'Real-time Chat Platform',
    description: 'Scalable chat application with real-time messaging and file sharing capabilities.',
    tags: ['React', 'Socket.io', 'Express', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example'
  },
  {
    title: 'Weather Forecast API',
    description: 'RESTful API providing accurate weather forecasts with machine learning predictions.',
    tags: ['FastAPI', 'Python', 'Redis', 'Docker'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example'
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Responsive portfolio website with smooth animations and modern design principles.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example'
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-section-background">
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
              className="bg-card rounded-lg shadow-card hover:shadow-elegant transition-smooth overflow-hidden group"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-accent transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      className="text-xs font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 hover:bg-muted transition-smooth"
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