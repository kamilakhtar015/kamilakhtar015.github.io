import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
  image: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg p-0 overflow-hidden">
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-4 space-y-3">
          {/* Project Title */}
          <h2 className="text-lg font-semibold text-foreground">
            {project.title}
          </h2>

          {/* Project Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs font-normal text-muted-foreground/70 uppercase tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons - Dark Bottom Section */}
        <div className="bg-slate-900 p-4">
          <div className="flex gap-3">
            <Button 
              size="sm"
              className="flex-1 bg-white text-slate-900 hover:bg-gray-100 font-medium text-xs uppercase tracking-wide"
              asChild
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                DETAILS
              </a>
            </Button>
            <Button 
              size="sm"
              variant="outline"
              className="flex-1 border-white text-white hover:bg-white hover:text-slate-900 font-medium text-xs uppercase tracking-wide"
              onClick={onClose}
            >
              CLOSE
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};