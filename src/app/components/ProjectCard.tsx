import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '@/app/lib/data';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-200">
      <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
      <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>
      
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-slate-900 mb-3">Key Achievements</h4>
        <ul className="space-y-2">
          {project.highlights.map((highlight, idx) => (
            <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
              <span className="text-slate-400 mt-1">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span 
            key={tag} 
            className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        {project.link && (
          <a 
            href={project.link} 
            className="inline-flex items-center gap-2 text-sm text-slate-900 hover:text-slate-600 transition-colors font-medium"
          >
            View Project <ExternalLink className="w-4 h-4" />
          </a>
        )}
        {project.github && (
          <a 
            href={project.github} 
            className="inline-flex items-center gap-2 text-sm text-slate-900 hover:text-slate-600 transition-colors font-medium"
          >
            Source Code <Github className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;