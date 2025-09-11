import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProjectModal } from '@/components/ProjectModal';
import resumeAnalyzerImage from '@/assets/resume-analyzer-preview.jpg';

const projects = [
  {
    title: 'Resume Analyzer',
    description: 'Advanced ATS checking system that analyzes resumes for optimal job application success. This AI-powered tool helps format and structure documents intelligently, ensuring consistency and saving valuable time in the job search process.',
    tags: ['AI', 'ATS Optimization', 'n8n', 'Supabase', 'TypeScript'],
    liveUrl: 'https://crestviewaiautomations.com/',
    githubUrl: 'https://github.com/example',
    category: 'AI & Automation',
    image: resumeAnalyzerImage
  },
  {
    title: 'E-Commerce Analytics Dashboard',
    description: 'Real-time analytics dashboard for e-commerce businesses with interactive charts and KPI tracking.',
    tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    category: 'Web Development',
    image: '/placeholder.svg'
  },
  {
    title: 'AI-Powered Task Manager',
    description: 'Smart task management app with AI suggestions and automated priority ranking.',
    tags: ['TypeScript', 'Next.js', 'OpenAI', 'Prisma'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    category: 'AI & Productivity',
    image: '/placeholder.svg'
  },
  {
    title: 'Financial Data Visualizer',
    description: 'Interactive tool for visualizing stock market data with predictive analytics capabilities.',
    tags: ['Python', 'Streamlit', 'Pandas', 'TensorFlow'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    category: 'Data Science',
    image: '/placeholder.svg'
  },
  {
    title: 'Real-time Chat Platform',
    description: 'Scalable chat application with real-time messaging and file sharing capabilities.',
    tags: ['React', 'Socket.io', 'Express', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    category: 'Web Development',
    image: '/placeholder.svg'
  },
  {
    title: 'Weather Forecast API',
    description: 'RESTful API providing accurate weather forecasts with machine learning predictions.',
    tags: ['FastAPI', 'Python', 'Redis', 'Docker'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    category: 'API Development',
    image: '/placeholder.svg'
  }
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-card hover:shadow-elegant transition-smooth"
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300" />
                
                {/* Project title overlay */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md">
                    <h3 className="text-sm font-semibold text-gray-900">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Center play/click indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Quick info bar at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};