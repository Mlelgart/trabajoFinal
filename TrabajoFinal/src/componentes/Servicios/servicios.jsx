import './Servicios.css';

const Servicios = () => {
  return (
    <div className="servicios-container">
      <h2>Servicios Freelance</h2>
      <div className="servicio">
        <h3>Desarrollo Frontend</h3>
        <p>
          Ofrezco servicios de desarrollo frontend utilizando tecnologías modernas
          como React, HTML, CSS y JavaScript para crear interfaces de usuario
          atractivas y altamente interactivas.
        </p>
      </div>
      <div className="servicio">
        <h3>Desarrollo Backend</h3>
        <p>
          Brindo servicios de desarrollo backend utilizando tecnologías como Node.js,
          Express, MongoDB y otras, para construir servidores robustos y escalables
          que respalden la funcionalidad de tus aplicaciones.
        </p>
      </div>
    </div>
  );
};

export default Servicios;
