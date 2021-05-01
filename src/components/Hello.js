import React from 'react';
import { MdChevronRight } from 'react-icons/md';

export const Hello = () => {
  return (
    <div className="hello">
      {/* <span>
        <strong>¡Hola!</strong>, mi nombre es
      </span> */}
      <h1>Avilio Muñoz</h1>
      <h2 className="gradient-text">Desarrollador Web</h2>

      <a className="action-button" href="mailto:aviliomuoz@gmail.com">
        Contáctame <MdChevronRight />
      </a>
    </div>
  );
};
