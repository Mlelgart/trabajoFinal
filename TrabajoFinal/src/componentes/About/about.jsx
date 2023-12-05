import './About.css';

const AboutMe = () => (
  <section className="seccion">
    <div>
      
      <h2>¿Quién soy?</h2>
      <p>
      Soy un profesional altamente comprometido con un historial probado en la entrega exitosa de proyectos. Mi enfoque estratégico y habilidades para coordinar equipos han sido clave para lograr resultados notables. Destaco por mi capacidad para adaptarme rápidamente y liderar equipos de manera eficiente. Mi enfoque proactivo y orientado a resultados ha sido fundamental para superar desafíos y entregar soluciones de alta calidad. Mi compromiso con la mejora continua refleja mi dedicación a la excelencia en cada proyecto. Listo para asumir nuevos desafíos que impulsen el éxito de los proyectos futuros.
      </p>
      
    </div>
  </section>
);

const Experiencia = () => (
  <section>
    <div>
      <div>
        <span className="subtitulo">¿Qué es lo que hago?</span>
        <h2 className="titulo2">Estas son algunas de mis experiencias</h2>
      </div>
      <div className="row row-pt-md">
        {expertiseData.map((expertise, index) => (
          <ExpertiseItem key={index} {...expertise} />
        ))}
      </div>
    </div>
  </section>
);

const ExpertiseItem = ({ title, description }) => (
  <div className='col-md-4 text-center animate-box'>
    <div className="cajaExpertise">
      <div>
        <h3 className='titulo'>{title}</h3>
        <p className='descripcion'>{description}</p>
      </div>
    </div>
  </div>
);

const About = () => (
  <div>
    <AboutMe />
    <Experiencia />
  </div>
);

const expertiseData = [
  {
    title: 'Web Development',
    description: 'Tengo experiencia en la creación de sitios web y extensiones de Chrome utilizando JavaScript, React, HTML, CSS.',
  },
  {
    title: 'Front-End',
    description: 'Brindé soporte en el desarrollo y mantenimiento de interfaces de usuario altamente interactivas y receptivas.',
  },
  {
    title: 'Back-End',
    description: 'Colaboración activa con el equipo Front-End para garantizar una experiencia y una funcionalidad coherente.',
  },
];

export default About;