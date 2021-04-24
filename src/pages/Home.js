import React from 'react';
import { Hello } from '../components/Hello';
import { BlogSection } from '../containers/BlogSection';
import { ContactSection } from '../containers/ContactSection';
import { MainLayout } from '../layouts/MainLayout';
import { ProjectsSection } from '../containers/ProjectsSection';

export const Home = () => {
  return (
    <MainLayout>
      <Hello />
      <div className="separator" id="projects" />
      <ProjectsSection />
      <div className="separator" id="blog" />
      <BlogSection />
      <div className="separator" id="contact" />
      <ContactSection />
    </MainLayout>
  );
};
