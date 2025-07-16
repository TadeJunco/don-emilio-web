import React from "react";
import "./HeroSlider.css"; // Agregar CSS si es necesario

function HeroSlider() {
  return (
    <div className="hero">
      <div className="hero-slider">
        <img src="/assets/food track horizontal.jpg" alt="Food track" />
        <video src="/assets/video prueba.mp4" autoPlay muted loop></video>
        <video src="/assets/fiestas.mp4" autoPlay muted loop></video>
        <img src="/assets/food track 2 imagen .jpg" alt="Food track 2" />
        <img src="/assets/rotihorizontal.jpg" alt="Rotisería" />
      </div>
    </div>
  );
}

export default HeroSlider;
