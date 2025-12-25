import React from 'react';
import ProjectCard from './ProjectCard';
import { projects, Project } from '@/app/lib/data';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">Featured Projects</h2>
        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          A selection of projects showcasing my approach to frontend development, 
          component architecture, and user experience design.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;