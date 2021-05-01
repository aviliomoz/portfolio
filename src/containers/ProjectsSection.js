import React, { useEffect, useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { getProjects } from '../utils/fetch';

export const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((projects) => setProjects(projects));
  }, []);

  const setProjectCardClassName = (index) => {
    if (index % 2 === 0) {
      return 'project-card';
    } else {
      return 'project-card reverse';
    }
  };

  return (
    <section className="projects-section">
      <div className="projects-section-header">
        <h3>Proyectos</h3>
      </div>
      <div className="projects-section-content">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={project.title}
              project={project}
              projectCardClassName={setProjectCardClassName(index)}
            />
          );
        })}
      </div>
    </section>
  );
};
