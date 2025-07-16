import React from 'react';
import './SobreNosotros.css';
import { FaWhatsapp } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';

const SobreNosotros = () => {
  return (
    <div className="sobre-nosotros-page">
      <section className="sobre-hero">
         <div className="overlay">
        <h1>Sobre Nosotros</h1>
        <p>Una historia de sabor, familia y compromiso.</p>
        </div>
      </section>

      <section className="sobre-texto">
        <h2>Nuestra trayectoria</h2>
        <p>
          Don Emilio nació como un emprendimiento familiar y hoy es un ícono de la gastronomía local.
          Con más de cuatro décadas acompañando a las familias de Bolívar, nos especializamos en catering, 
          rotisería, viandas corporativas, y eventos con un enfoque en calidad, sabor y atención personalizada.
        </p>
        <p>
          Nos encontramos en el mismo lugar de siempre: <strong>Av. Brown e Ignacio Rivas</strong>, 
          corazón de la ciudad. Nuestra trayectoria es nuestra mejor carta de presentación.
        </p>
        <p>
          Cada plato, cada evento y cada detalle refleja la pasión que sentimos por lo que hacemos.
          Porque más que comida, ofrecemos experiencias.
        </p>
      </section>

      <section className="sobre-mapa">
        <h3><FaMapMarkerAlt /> Nuestra ubicación</h3>
        <iframe
          title="Ubicación Don Emilio Bolívar"
          src="https://www.google.com/maps?q=Av.+Almirante+Brown+200,+San+Carlos+de+Bol%C3%ADvar,+Buenos+Aires&z=17&output=embed"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: '10px' }}
          allowFullScreen=""
          loading="lazy"
          ></iframe>

      </section>
      <div className="whatsapp-bubble">
      <a href="https://wa.me/5492314477099" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp />
      </a>
      </div>

      
    </div>
  );
};

export default SobreNosotros;
