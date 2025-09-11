import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProjectModal } from '@/components/ProjectModal';
import resumeAnalyzerImage from '@/assets/resume-analyzer-dashboard.jpg';
import machineLearningImage from '@/assets/machine-learning-projects.jpg';
import rsaTimingAttackImage from '@/assets/rsa-timing-attack.jpg';
import californiaHousingImage from '@/assets/california-housing-prediction.jpg';
import tableauSalesImage from '@/assets/tableau-sales-insights.jpg';
import personalWebsiteImage from '@/assets/personal-website.jpg';
import graduateCareerImage from '@/assets/graduate-career-outcomes.jpg';
import privacyPreservingImage from '@/assets/privacy-preserving-gans.jpg';

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
    title: 'Machine Learning Projects',
    description: 'A comprehensive collection of machine learning implementations including Urban Scene Segmentation using DeeplabV3 model on German CityScape Dataset, PCA Implementation, Naive Bayes Classifier for Buyers attitude analysis, and various CNN architectures for computer vision tasks.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'DeeplabV3', 'PCA', 'Naive Bayes', 'CNN'],
    liveUrl: 'https://github.com/kamilakhtar015/Machine-Learning---Concepts-GSU-',
    githubUrl: 'https://github.com/kamilakhtar015/Machine-Learning---Concepts-GSU-',
    category: 'Machine Learning',
    image: machineLearningImage
  },
  {
    title: 'RSA Timing Attack',
    description: 'An implementation of a side-channel attack exploiting timing variations in RSA decryption to reconstruct private keys. The project simulates both the victim (RSA decryption) and the attacker (timing analysis), showcasing modular exponentiation, precise execution-time measurements, and statistical analysis for key recovery.',
    tags: ['Python', 'Cryptography', 'Modular Exponentiation', 'Timing Analysis', 'Side-Channel Attack'],
    liveUrl: 'https://github.com/kamilakhtar015/rsa-timing-attack',
    githubUrl: 'https://github.com/kamilakhtar015/rsa-timing-attack',
    category: 'Cybersecurity',
    image: rsaTimingAttackImage
  },
  {
    title: 'California Housing Price Prediction',
    description: 'A machine learning project focused on predicting housing prices using the California Housing dataset. Implemented data preprocessing, exploratory data analysis, and feature engineering, followed by model training and evaluation with regression algorithms to achieve accurate price predictions.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Regression Models', 'EDA'],
    liveUrl: 'https://github.com/kamilakhtar015/CaliHousing-PricePred',
    githubUrl: 'https://github.com/kamilakhtar015/CaliHousing-PricePred',
    category: 'Data Science',
    image: californiaHousingImage
  },
  {
    title: 'Tableau Sales Insights',
    description: 'An interactive data visualization project analyzing sales performance across regions, products, and customer segments. Built dynamic Tableau dashboards to uncover key business insights, track revenue trends, and support data-driven decision-making for sales strategy.',
    tags: ['Tableau', 'Data Visualization', 'Business Intelligence', 'Sales Analytics', 'Dashboard Design'],
    liveUrl: 'https://github.com/kamilakhtar015/tableau-sales-insights-india',
    githubUrl: 'https://github.com/kamilakhtar015/tableau-sales-insights-india',
    category: 'Business Intelligence',
    image: tableauSalesImage
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A modern and responsive personal portfolio website showcasing my projects, skills, and professional journey. Built with clean design principles, smooth animations, and optimized performance to create an engaging user experience that effectively communicates my expertise in software development and data science.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'Portfolio', 'Web Development'],
    liveUrl: 'https://github.com/kamilakhtar015/personal-website',
    githubUrl: 'https://github.com/kamilakhtar015/personal-website',
    category: 'Web Development',
    image: personalWebsiteImage
  },
  {
    title: 'Graduate Career Outcomes Analysis',
    description: 'Comprehensive data analysis project with the Andrew Young School of Policy Studies at Georgia State University analyzing 1400+ alumni records. Achieved key performance indicators including 95%+ alumni location tracking accuracy and 80%+ employment rate analysis, providing critical insights for academic program evaluation and student career services.',
    tags: ['Data Analysis', 'Alumni Research', 'KPI Tracking', 'Statistical Analysis', 'Academic Research', 'Excel', 'Data Visualization'],
    liveUrl: 'https://github.com/example',
    githubUrl: 'https://github.com/example',
    category: 'Data Analysis',
    image: graduateCareerImage
  },
  {
    title: 'Privacy Preserving Image Harmonization using GANs',
    description: 'Advanced research project implementing privacy-preserving image level harmonization using Generative Adversarial Networks with Federated Learning on the OpenBHB dataset. This ongoing research focuses on maintaining data privacy while achieving consistent image harmonization across distributed medical imaging datasets. (Project in Progress)',
    tags: ['GANs', 'Federated Learning', 'Privacy Preservation', 'Medical Imaging', 'Deep Learning', 'OpenBHB', 'Research'],
    liveUrl: 'https://github.com/example',
    githubUrl: 'https://github.com/example',
    category: 'AI Research',
    image: privacyPreservingImage
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