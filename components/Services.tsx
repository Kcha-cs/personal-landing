import React from 'react';
import AnimatedSection from './AnimatedSection';

// Componente para una tarjeta de servicio individual
const ServiceCard: React.FC<{ icon: string; title: string; text: string; }> = ({ icon, title, text }) => (
  <div className="bg-white h-full p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center gap-4">
      <i className={`bx ${icon} text-3xl text-primary-blue`}></i>
      <h3 className="text-xl font-semibold text-dark-blue">{title}</h3>
    </div>
    <p className="mt-3 text-dark-text/80">{text}</p>
  </div>
);

const ValueProposition: React.FC = () => {
  const services = [
    {
      icon: 'bxs-bullseye',
      title: 'Agentes de Prospección y Ventas',
      text: 'Automatizan la captación de leads, califican prospectos y nutren relaciones para acelerar tu ciclo de ventas.',
    },
    {
      icon: 'bxs-conversation',
      title: 'Agentes de Soporte al Cliente 24/7',
      text: 'Resuelven dudas, gestionan tickets y ofrecen una atención inmediata y personalizada a cualquier hora del día.',
    },
    {
      icon: 'bxs-bar-chart-alt-2',
      title: 'Agentes de Análisis de Datos',
      text: 'Procesan grandes volúmenes de información, identifican patrones y generan insights para decisiones más inteligentes.',
    },
    {
      icon: 'bxs-cog',
      title: 'Agentes de Operaciones y Flujos',
      text: 'Optimizan procesos internos, gestionan tareas administrativas y aseguran una ejecución impecable de tus operaciones.',
    },
  ];

  return (
    <AnimatedSection className="py-20 md:py-28 bg-light-bg">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue">
            Explora Algunas de Nuestras Soluciones de IA
          </h2>
          <p className="mt-4 text-lg text-dark-text/80">
            Estos son solo algunos ejemplos de cómo nuestros agentes pueden transformar tu negocio. Cada solución es personalizable para adaptarse a tus necesidades específicas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
             <div
              key={index}
              className="fade-in-child"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

// Renombrar el export default para que coincida con el nuevo propósito
export default ValueProposition;