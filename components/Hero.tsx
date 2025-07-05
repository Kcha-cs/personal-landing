import React from 'react';

const Hero: React.FC = () => {
  return (
    // Sección principal con padding superior para compensar la cabecera fija
    <section className="pt-28 pb-24 text-center bg-white">
      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* Titular principal H1 */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-blue leading-tight">
          El núcleo de tus procesos,<br />
          <span className="text-primary-blue">la potencia de tu progreso.</span>
        </h1>
        {/* Subtítulo descriptivo enfocado en Agentes de IA */}
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-dark-text/80">
          En VexiKore AI, diseñamos Agentes de IA autónomos, seguros y escalables que se integran en el núcleo de tus procesos para potenciar tu progreso.
        </p>
      </div>
    </section>
  );
};

export default Hero;