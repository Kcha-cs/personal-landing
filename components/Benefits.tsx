import React from 'react';
import AnimatedSection from './AnimatedSection';

const BenefitItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center h-full gap-3 bg-white p-4 rounded-lg shadow">
    <i className='bx bxs-check-shield text-2xl text-primary-blue'></i>
    <span className="text-dark-text font-medium">{text}</span>
  </div>
);

const Benefits: React.FC = () => {
  const benefits = [
    'Productividad Exponencial con Equipos Autónomos',
    'Reducción Inteligente de Costos Operativos',
    'Decisiones Estratégicas Potenciadas por IA',
    'Impulso Estratégico para tu Equipo',
    'Innovación Continua y Ventaja Competitiva',
    'Integración Fluida con tus Sistemas Actuales',
  ];

  return (
    <AnimatedSection className="py-20 md:py-28 bg-light-bg">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue">
            ¿Por Qué Elegir a VexiKore AI?
          </h2>
          <p className="mt-4 text-lg text-dark-text/80">
            Nuestros agentes no son solo herramientas, son catalizadores de crecimiento que ofrecen ventajas competitivas claras.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="fade-in-child"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <BenefitItem text={benefit} />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Benefits;