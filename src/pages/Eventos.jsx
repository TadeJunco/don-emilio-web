import './Eventos.css';
import { FaWhatsapp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import fiestasVideo1 from '../assets/fiestas.mp4';
import fiestasVideo2 from '../assets/fiestas-2.mp4';

function Eventos() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const whatsappMessageURL =
    "https://wa.me/5492314477099?text=Hola%2C%20me%20gustar%C3%ADa%20contratar%20el%20servicio%20de%20catering%20de%20Don%20Emilio%20para%20un%20evento%20%F0%9F%8E%89%20%C2%BFPodr%C3%ADan%20brindarme%20m%C3%A1s%20informaci%C3%B3n%3F";

  return (
    <div className="eventos-page">
      {/* Hero Section */}
      <section className="hero-eventos">
        <div className="hero-overlay">
          <h1>¡Celebra tus momentos especiales con nosotros!</h1>
          <p>Transformamos tus sueños en experiencias inolvidables.</p>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section className="sobre-nosotros" data-aos="fade-up">
        <div className="sobre-nosotros-content">
          <div className="text-content">
            <h2>¿Por qué elegirnos?</h2>
            <p>
              En Don Emilio, combinamos gastronomía de alta calidad con un servicio excepcional para que
              tu evento sea único.
            </p>
          </div>
        </div>
      </section>

      {/* Galería de Imágenes */}
      <section className="eventos-imagenes" data-aos="fade-up">
        <h2>Sueños que son historias</h2>
        <div className="imagenes-masonry">
          <video src={fiestasVideo1} autoPlay muted loop />
          <video src={fiestasVideo2} autoPlay muted loop />
        </div>
      </section>

      {/* Sección de Contacto Final */}
      <section className="cta-contacto" data-aos="zoom-in">
        <h2>¿Listo para hacer de tu evento algo inolvidable?</h2>
        <p>Contactanos y hacé realidad ese momento especial.</p>
        <a
          href={whatsappMessageURL}
          target="_blank"
          rel="noopener noreferrer"
          className="boton-wsp"
        >
          <FaWhatsapp className="icono-wsp" />
          Hablá con nosotros
        </a>
      </section>

      {/* Botón flotante de WhatsApp */}
      <div className="whatsapp-bubble">
        <a href={whatsappMessageURL} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp/>
        </a>
      </div>
    </div>
  );
}

export default Eventos;
