import React, { useEffect, useState } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';

export const DarkSwitch = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleClick = () => {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
      setTransition();
    } else {
      localStorage.setItem('theme', 'light');
      setTheme('light');
      setTransition();
    }
  };

  const setTransition = () => {
    document.documentElement.classList.add('transition');

    setTimeout(() => {
      document.documentElement.classList.remove('transition');
    }, 1000);
  };

  if (theme === 'light')
    return (
      <BiMoon className="main-layout-header-nav-dark" onClick={handleClick} />
    );
  if (theme === 'dark')
    return (
      <BiSun className="main-layout-header-nav-dark" onClick={handleClick} />
    );
};
