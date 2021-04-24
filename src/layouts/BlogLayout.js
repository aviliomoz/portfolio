import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { DarkSwitch } from '../components/DarkSwitch';

export const BlogLayout = ({ children }) => {
  return (
    <main className="blog-layout">
      <header className="blog-layout-header">
        <Link to="/">AM.</Link>
        <DarkSwitch />
      </header>
      <div className="blog-layout-container">{children}</div>
      <footer className="blog-layout-footer">
        <span>2021 - Avilio Muñoz</span>
        <div className="blog-layout-footer-social">
          <a href="https://twitter.com/aviliomoz" target="__blank">
            <FiTwitter />
          </a>
          <a href="https://www.linkedin.com/in/aviliomoz" target="__blank">
            <FiLinkedin />
          </a>
          <a href="https://github.com/aviliomoz" target="__blank">
            <FiGithub />
          </a>
        </div>
      </footer>
    </main>
  );
};
