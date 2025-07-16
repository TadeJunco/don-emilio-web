import React from 'react';
import './Rotiseria.css';
import { Carousel } from 'react-responsive-carousel';

const Rotiseria = () => {
  const menu = {
    categories: [
      {
        title: 'Guarniciones & Más',
        items: [
          'Papas fritas',
          'Puré (papa – zapallo)',
          'Ensaladas a elección',
          'Tortilla de papas',
          'Tartas (JYQ – Verd)',
          'Lengua a la vinagreta',
          'Vitel toné',
          'Ensalada rusa',
          'Mayonesa de ave',
        ],
      },
      {
        title: 'Parrilla & Minutas',
        items: [
          'Tapa de asado – Vacío',
          'Pollo',
          'Chorizo – Morcilla',
          'Pollo arrollado',
          'Mila con fritas – Puré – Ensalada',
          'Napolitana con fritas – Puré – Ensalada',
          'Hamburguesa completa',
          'Sándwich de mila completo',
        ],
      },
      {
        title: 'Pastas',
        items: [
          'Tallarines',
          'Canelones (JYQ – Verd)',
          'Ñoquis',
          'Sorrentinos (JYQ)',
          'Ravioles (Verd)',
        ],
        note: 'SALSAS: estofado de carne, de pollo, bolognesa, rosa, 4 quesos, salsa blanca',
      },
      {
        title: 'Pizzas & Empanadas',
        items: [
          'Empanadas: Picadillo (dulce – salado), JYQ, Pollo, Humita, Capresse',
          'Pizzas: Muzza, Napolitana, Especial',
        ],
      },
    ],
    delivery: {
      phone: ['2314 – 477099', '2314 – 426283 (fijo)'],
      address: 'Av. Brown e Ignacio Rivas',
    },
  };

  return (
    <div className="rotiseria-page">
      <h1 className="rotiseria-title">Nuestro menú</h1>

      {/* Carrusel de platos */}
      <div className="carrusel-platos">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showStatus={false}
          interval={3000}
        >
          <div>
            <img src="/src/assets/milanesa.jpg" alt="Milanesa con papas" />
          </div>
          <div>
            <img src="/src/assets/sorrentinos.jpg" alt="Sorrentinos caseros" />
          </div>
          <div>
            <img src="/src/assets/sandwichmila.png" alt="Sandwich" />
          </div>
          <div>
            <img src="/src/assets/pollo.jpg" alt="Pollo" />
          </div>
        </Carousel>
      </div>

      <div className="menu-categories">
        {menu.categories.map((category, index) => (
          <div key={index} className="menu-category">
            <h2 className="menu-category-title">{category.title}</h2>
            <ul className="menu-items">
              {category.items.map((item, idx) => (
                <li key={idx} className="menu-item">{item}</li>
              ))}
            </ul>
            {category.note && <p className="menu-note">{category.note}</p>}
          </div>
        ))}
      </div>

      <div className="delivery-section">
        <h2>Delivery</h2>
        <p className="delivery-phone">
          {menu.delivery.phone.map((phone, idx) => (
            <span key={idx}>{phone}<br /></span>
          ))}
        </p>
        <p className="delivery-address">{menu.delivery.address}</p>
      </div>

      <div className="whatsapp-order">
        <a
          href="https://wa.me/5492314477099"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
            alt="WhatsApp"
            className="whatsapp-icon"
          />
          Podes hacer tu pedido clickeando aquí
        </a>
      </div>
    </div>
  );
};

export default Rotiseria;
