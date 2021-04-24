import React from 'react';
import { ProjectCard } from '../components/ProjectCard';

export const ProjectsSection = () => {
  const projects = [
    {
      id: Math.random() * Math.random(),
      title: 'Glasstodo',
      description:
        'Descripción resumida del proyecto en la que explico el proceso que llevé a cabo para su desarrollo. Descripción resumida del proyecto en la que explico el proceso que llevé a cabo para su desarrollo.',
      labels: ['MongoDB', 'Express', 'React', 'Node'],
      image:
        'https://cdn.dribbble.com/users/4712412/screenshots/15261921/media/b2d56a960c3cdcb32535c2fe4385cda6.png?compress=1&resize=800x600',
      projectLink: 'https://google.com',
      githubLink: 'https://github.com',
    },
    {
      id: Math.random() * Math.random(),
      title: 'Mini Market',
      description:
        'Descripción resumida del proyecto en la que explico el proceso que llevé a cabo para su desarrollo. Descripción resumida del proyecto en la que explico el proceso que llevé a cabo para su desarrollo.',
      labels: ['MongoDB', 'Express', 'React', 'Node'],
      image:
        'https://cdn.dribbble.com/users/962032/screenshots/15168817/media/9486f45a538119cd54140067d8a695ef.png?compress=1&resize=800x600',
      projectLink: 'https://google.com',
      githubLink: 'https://github.com',
    },
    {
      id: Math.random() * Math.random(),
      title: 'Portfolio',
      description:
        'Descripción resumida del proyecto en la que explico el proceso que llevé a cabo para su desarrollo. Descripción resumida del proyecto en la que explico el proceso que llevé a cabo para su desarrollo.',
      labels: ['MongoDB', 'Express', 'React', 'Node'],
      image:
        'https://cdn.dribbble.com/users/1236546/screenshots/13766248/media/2929cbe98592919320d779b0d76d0b90.jpg?compress=1&resize=800x600',
      projectLink: 'https://google.com',
      githubLink: 'https://github.com',
    },
  ];

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
              key={project.id}
              project={project}
              projectCardClassName={setProjectCardClassName(index)}
            />
          );
        })}
      </div>
    </section>
  );
};
