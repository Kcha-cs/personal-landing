import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const FaqItem: React.FC<{
  q: string;
  a: string;
  isOpen: boolean;
  onClick: () => void;
}> = ({ q, a, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left text-dark-blue hover:text-primary-blue transition-colors"
      >
        <h3 className="text-lg font-semibold">{q}</h3>
        <i
          className={`bx bxs-chevron-down text-2xl transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        ></i>
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-dark-text/80 leading-relaxed">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      q: '¿Qué es exactamente un Agente de IA y cómo puede ayudarme?',
      a: 'Un Agente de IA es un programa autónomo diseñado para realizar tareas específicas de forma inteligente, como responder correos, analizar datos o gestionar citas. Ayuda a tu negocio automatizando el trabajo repetitivo, permitiendo que tu equipo se concentre en actividades de mayor valor.',
    },
    {
      q: '¿Cómo garantizan la seguridad de mis datos?',
      a: 'La seguridad es nuestro pilar fundamental. Utilizamos una infraestructura segura en la nube y seguimos las mejores prácticas de ciberseguridad para garantizar que tus datos y los de tus clientes estén siempre protegidos.',
    },
    {
      q: '¿Qué pasa si mi empresa crece y mis necesidades cambian?',
      a: 'Nuestros agentes están diseñados para ser escalables. Podemos ajustar sus capacidades, añadir nuevas funcionalidades o integrar más agentes a medida que tu negocio evoluciona, asegurando que la solución siempre se adapte a ti.',
    },
    {
      q: '¿Qué tan estables son los procesos automatizados?',
      a: 'Muy estables. Construimos sobre una arquitectura robusta y utilizamos herramientas probadas para garantizar una operación continua 24/7. Monitoreamos activamente el rendimiento para prevenir interrupciones y asegurar la máxima fiabilidad.',
    },
    {
      q: '¿Cuánto tiempo se tarda en implementar un agente de IA?',
      a: 'El tiempo varía según la complejidad, pero nuestro proceso es ágil. Tras un análisis inicial, podemos tener un agente básico operativo en cuestión de semanas. Nos enfocamos en entregar valor de forma rápida e incremental.',
    },
  ];

  return (
    <AnimatedSection className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue">
            Preguntas Frecuentes
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              q={item.q}
              a={item.a}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Faq;
