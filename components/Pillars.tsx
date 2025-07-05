import React from 'react';
import AnimatedSection from './AnimatedSection';

interface PillarCardProps {
  icon: string;
  title: string;
  text: string;
}

// Componente para una tarjeta de pilar individual para evitar repetición
const PillarCard: React.FC<PillarCardProps> = ({ icon, title, text }) => (
  <div className="bg-white h-full p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-2">
    <div className="inline-block p-4 bg-primary-blue/10 rounded-full">
      <i className={`bx ${icon} text-4xl text-primary-blue`}></i>
    </div>
    <h3 className="text-2xl font-semibold text-dark-blue mt-6">{title}</h3>
    <p className="text-dark-text/80 mt-3 leading-relaxed">{text}</p>
  </div>
);

const Pillars: React.FC = () => {
  const pillarsData = [
    {
      icon: 'bx-shield-quarter',
      title: 'Seguridad Inquebrantable',
      text: 'Construimos sobre una arquitectura robusta y segura desde el núcleo, protegiendo tus operaciones y datos con múltiples capas de defensa.'
    },
    {
      icon: 'bx-infinite',
      title: 'Operación Ininterrumpida',
      text: 'Aseguramos que tus agentes de IA operen 24/7 sin interrupciones, garantizando la continuidad de tu negocio gracias a una arquitectura robusta.'
    },
    {
      icon: 'bx-trending-up',
      title: 'Escalabilidad sin Límites',
      text: 'Nuestra arquitectura modular se adapta y expande con tu negocio, asegurando que la solución crezca al ritmo de tus ambiciones.'
    }
  ];

  return (
    <AnimatedSection className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue">
            Los Pilares de Nuestra Infraestructura
          </h2>
        </div>
        {/* Grid con animación escalonada para los hijos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillarsData.map((pillar, index) => (
            <div
              key={index}
              className="fade-in-child"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <PillarCard {...pillar} />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Pillars;