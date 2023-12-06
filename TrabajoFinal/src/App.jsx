import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './componentes/footer/Footer';
import Header from './componentes/header/Header';
import Seccion from './componentes/seccion/Seccion';
import Navbar from './componentes/navbar/Navbar';
import About from "./componentes/About/about"
import Servicios from "./componentes/Servicios/servicios"

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Navbar />
        <main><Routes>
          <Route path="/" element={<Seccion />} />
          <Route path="/about" element={<About />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
