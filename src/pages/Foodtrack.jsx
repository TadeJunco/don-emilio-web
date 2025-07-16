import React, { useEffect } from 'react';
import './Foodtrack.css';
import { FaWhatsapp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Foodtrack = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const whatsappMessageURL =
    "https://wa.me/5492314477099?text=Hola%2C%20me%20gustar%C3%ADa%20contratar%20el%20foodtrack%20de%20Don%20Emilio%20para%20un%20evento%20%F0%9F%8E%89%20%C2%BFPodr%C3%ADan%20brindarme%20m%C3%A1s%20informaci%C3%B3n%3F";

  return (
    <div className="foodtrack-page">
      {/* HERO con imagen de fondo */}
      <section className="foodtrack-hero">
        <div className="overlay">
          <h1>Don Emilio Foodtrack</h1>
          <p>¡Llevamos el sabor a donde estés! Ideal para eventos, ferias y celebraciones.</p>
        </div>
      </section>

      {/* MEDIA: Imágenes y video */}
      <section className="foodtrack-media" data-aos="fade-up">
        <div className="carousel-media">
          <div className="media-item">
            <img src="/src/assets/food track horizontal.jpg" alt="Foodtrack" />
          </div>
          <div className="media-item">
            <img src="/src/assets/food track 2 imagen .jpg" alt="Foodtrack" />
          </div>
          <div className="media-item">
            <video src="/src/assets/videofoodnew.mp4" autoPlay muted loop />
          </div>
        </div>
      </section>

      {/* INFO DE EVENTOS */}
      <section className="foodtrack-info" data-aos="fade-right">
        <h2>¿Dónde podés llevarlo?</h2>
        <ul>
          <li>Fiestas privadas</li>
          <li>Casamientos</li>
          <li>Ferias & festivales</li>
          <li>Cumples de 15</li>
          <li>Eventos corporativos</li>
        </ul>
      </section>

      {/* CTA - LLAMADO A LA ACCIÓN */}
      <div className="cta-section" data-aos="zoom-in">
        <h3>¿Querés reservar el foodtrack para tu próximo evento?</h3>
        <a
          className="cta-button"
          href={whatsappMessageURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar presupuesto
        </a>
      </div>

      {/* Burbuja de WhatsApp */}
      <div className="whatsapp-bubble">
        <a
          href={whatsappMessageURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default Foodtrack;
