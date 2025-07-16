import React from "react";
import "./NavBar.css"; // Agregar CSS si es necesario

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <img
            src="/assets/Logo don emilio.jpg"
            alt="Logo Don Emilio"
            className="logo"
          />
        </li>
        <li><a href="#">Eventos</a></li>
        <li><a href="#">Rotisería</a></li>
        <li><a href="#">Foodtrack</a></li>
        <li><a href="#">Sobre Nosotros</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
