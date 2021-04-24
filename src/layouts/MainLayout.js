import React, { useRef } from 'react';
import { FiTwitter, FiLinkedin, FiGithub, FiX, FiMenu } from 'react-icons/fi';
import { DarkSwitch } from '../components/DarkSwitch';

export const MainLayout = ({ children }) => {
  const nav = useRef();

  const toggleMenu = () => {
    nav.current.classList.toggle('active');
  };

  const closeMenu = () => {
    nav.current.classList.remove('active');
  };

  return (
    <main className="main-layout">
      <header className="main-layout-header">
        <div className="main-layout-header-logo">
          <a href="/#">AM.</a>
        </div>
        <div className="main-layout-header-nav">
          <nav className="main-layout-header-nav-links" ref={nav}>
            <FiX
              className="main-layout-header-nav-links-close"
              onClick={toggleMenu}
            />
            <ul className="main-layout-header-nav-links-ul">
              <li>
                <a onClick={closeMenu} href="#projects">
                  Proyectos
                </a>
              </li>
              <li>
                <a onClick={closeMenu} href="#blog">
                  Blog
                </a>
              </li>
              <li>
                <a onClick={closeMenu} href="#contact">
                  Contacto
                </a>
              </li>
            </ul>

            <div className="main-layout-header-nav-links-social">
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
          </nav>
          <DarkSwitch className="main-layout-header-nav-dark" />
          <FiMenu
            className="main-layout-header-nav-menu"
            onClick={toggleMenu}
          />
        </div>
      </header>
      <div className="main-layout-container">{children}</div>
      <footer className="main-layout-footer">
        <span>2021 - Avilio Muñoz</span>
        <div className="main-layout-footer-social">
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
