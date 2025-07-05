import React from 'react';
import CTAButton from './CTAButton';
import AnimatedSection from './AnimatedSection';

const FinalCTA: React.FC = () => {
  // URL de imagen de placeholder tecnológica
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1555949963-ff98c877a222?q=80&w=2070&auto=format&fit=crop';

  return (
    <AnimatedSection className="relative py-24 md:py-32 bg-gray-800">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      ></div>
      {/* Superposición de color oscuro para legibilidad */}
      <div className="absolute inset-0 bg-dark-blue opacity-80"></div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          ¿Listo para transformar tu negocio?
        </h2>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Hablemos de cómo la inteligencia artificial puede potenciar tus resultados.
        </p>
        <div className="mt-10">
          <CTAButton text="Agenda una consulta" />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FinalCTA;