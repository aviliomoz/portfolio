import React from 'react';
import { HiExternalLink, HiCode } from 'react-icons/hi';

export const ProjectCard = ({ project, projectCardClassName }) => {
  return (
    <div className={projectCardClassName}>
      <section className="project-card-info">
        <h4>{project.title}</h4>
        <p className="project-card-info-description">{project.description}</p>
        <div className="project-card-info-labels">
          {project.labels.map((label) => {
            return <span key={label}>{label}</span>;
          })}
        </div>
        <div className="project-card-info-links">
          <a href={project.projectLink} target="__blank">
            <HiExternalLink />
          </a>
          <a href={project.githubLink} target="__blank">
            <HiCode />
          </a>
        </div>
      </section>
      <section className="project-card-image">
        <img src={project.image} alt={project.title} />
      </section>
    </div>
  );
};
