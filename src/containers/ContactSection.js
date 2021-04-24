import React from 'react';
import { MdChevronRight } from 'react-icons/md';

export const ContactSection = () => {
  return (
    <div className="contact-section">
      <h2>Trabajemos juntos</h2>
      <p>
        Actualmente me encuentro en la búsqueda de empleo como desarrollador
        web. Si tienes alguna oferta, ¡me encantaría saberlo!
      </p>
      <a className="action-button" href="mailto:aviliomuoz@gmail.com">
        Contáctame <MdChevronRight />
      </a>
    </div>
  );
};
