import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ScrollToTop from './pages/ScrollToTop';
import './App.css';
import Eventos from './pages/Eventos';
import Rotiseria from './pages/Rotiseria';
import FoodTrack from './pages/Foodtrack';
import SobreNosotros from './pages/SobreNosotros';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <img src="/src/assets/Logo don emilio.jpg" alt="Logo Don Emilio" className="logo" />
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
                    <img src="/src/assets/food track horizontal.jpg" alt="Food track" className="food-track" />
                    <video src="/src/assets/video prueba.mp4" autoPlay muted loop></video>
                    <video src="/src/assets/fiestas.mp4" autoPlay muted loop></video>
                    <img src="\src\assets\food track 2 imagen .jpg" alt="Food track 2" />
                    <img src="/src/assets/rotihorizontal.jpg" alt="Rotisería" className="rotiseria" />
                  </div>
                </div>
              </div>
            }
          />
          {/* Páginas */}
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
