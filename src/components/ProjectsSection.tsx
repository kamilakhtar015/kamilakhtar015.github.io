import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useState } from 'react';

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
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <TooltipProvider>
      <section id="projects" className="py-20" style={{backgroundColor: 'hsl(45 20% 96%)'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Check out my creations.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work, featuring web applications, data visualization tools, and innovative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Dialog>
                    <DialogTrigger asChild>
                      <div 
                        className="bg-card rounded-lg shadow-card hover:shadow-elegant transition-smooth overflow-hidden group cursor-pointer relative"
                        onClick={() => setSelectedProject(project)}
                      >
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-2xl font-bold text-primary">{project.title.charAt(0)}</span>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-smooth flex items-center justify-center">
                          <span className="text-card-foreground font-semibold opacity-0 group-hover:opacity-100 transition-smooth bg-card/90 px-4 py-2 rounded-md">
                            {project.title}
                          </span>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="space-y-3">
                          <h4 className="font-semibold">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
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
                        </div>
                        
                        <div className="flex gap-3 pt-4">
                          <Button 
                            variant="outline"
                            className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
                            asChild
                          >
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={16} className="mr-2" />
                              View Live Demo
                            </a>
                          </Button>
                          <Button 
                            variant="outline"
                            className="flex-1 hover:bg-muted transition-smooth"
                            asChild
                          >
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github size={16} className="mr-2" />
                              View Source Code
                            </a>
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{project.title}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};