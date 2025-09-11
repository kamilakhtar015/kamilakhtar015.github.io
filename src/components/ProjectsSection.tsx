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
              className="relative group cursor-pointer overflow-hidden rounded-lg transition-smooth"
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Image Only */}
              <div className="relative h-64 overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                
                {/* Center click indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
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