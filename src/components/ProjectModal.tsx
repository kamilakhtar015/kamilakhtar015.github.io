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
  hideDetails?: boolean; // Added optional hideDetails property
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

          {/* Project Description with line breaks */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description.split('\n').map((line, idx) => (
              <span key={idx}>
                {line}
                {idx !== project.description.split('\n').length - 1 && <br />}
              </span>
            ))}
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

        {/* Action Links - Dark Bottom Section */}
        <div className="bg-slate-900 p-4">
          <div className="flex justify-center gap-8">
            {!project.hideDetails && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium text-sm uppercase tracking-wide hover:text-blue-400 transition-colors cursor-pointer"
                title={`View ${project.title} on GitHub`}
              >
                DETAILS
              </a>
            )}
            <span
              onClick={onClose}
              className="text-white font-medium text-sm uppercase tracking-wide hover:text-gray-300 transition-colors cursor-pointer"
            >
              CLOSE
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};