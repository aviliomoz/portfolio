import React from 'react';
import { MdChevronRight } from 'react-icons/md';

export const Hello = () => {
  return (
    <div className="hello">
      <span>
        <strong>¡Hola!</strong>, mi nombre es
      </span>
      <h1>Avilio Muñoz.</h1>
      <h2 className="gradient-text">Desarrollador Web.</h2>
      <p>
        Soy un apasionado por el mundo digital centrado en el desarrollo de
        sitios y aplicaciones web creativas y de alta calidad.
      </p>
      <a className="action-button" href="mailto:aviliomuoz@gmail.com">
        Contáctame <MdChevronRight />
      </a>
    </div>
  );
};
