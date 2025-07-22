import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ScrollToTop from './pages/ScrollToTop';
import './App.css';
import Eventos from './pages/Eventos';
import Rotiseria from './pages/Rotiseria';
import FoodTrack from './pages/Foodtrack';
import SobreNosotros from './pages/SobreNosotros';

// IMPORTACIÓN DE ARCHIVOS (¡renombrá los archivos si hace falta!)
import Logo from './assets/logo-don-emilio.jpg';
import FoodtrackH from './assets/food-track-horizontal.jpg';
import VideoPrueba from './assets/video-prueba.mp4';
import Fiestas from './assets/fiestas.mp4';
import Foodtrackimg from './assets/foodtrack2.jpg';
import Rotihorizontal from './assets/rotihorizontal.jpg';

// Loader al cargar la página
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) loader.style.display = 'none';
});

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <img src={Logo} alt="Logo Don Emilio" className="logo" />
              </Link>
            </li>
            <li><Link to="/eventos">Eventos</Link></li>
            <li><Link to="/rotiseria">Rotisería</Link></li>
            <li><Link to="/Food-track">FoodTrack</Link></li>
            <li><Link to="/Sobre-Nosotros">Sobre Nosotros</Link></li>
          </ul>
        </nav>

        <Routes>
          {/* Página principal */}
          <Route
            path="/"
            element={
              <div>
                <div className="hero">
                  <div className="hero-slider">
                    <img src={FoodtrackH} alt="Food track" className="food-track" />
                    <video src={VideoPrueba} autoPlay muted loop></video>
                    <video src={Fiestas} autoPlay muted loop></video>
                    <img src={Foodtrackimg} alt="Food track 2" />
                    <img src={Rotihorizontal} alt="Rotisería" className="rotiseria" />
                  </div>
                </div>
              </div>
            }
          />
          {/* Otras páginas */}
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/rotiseria" element={<Rotiseria />} />
          <Route path="/Food-track" element={<FoodTrack />} />
          <Route path="/Sobre-Nosotros" element={<SobreNosotros />} />
        </Routes>

        <footer>
          &copy; 2025 Don Emilio. Todos los derechos reservados.
        </footer>
      </div>
    </Router>
  );
}

export default App;
