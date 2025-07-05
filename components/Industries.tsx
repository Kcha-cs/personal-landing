import React from 'react';
import AnimatedSection from './AnimatedSection';

// Data for the industry cards
const industriesData = [
  {
    icon: 'bxs-building-house',
    title: 'Inmobiliarias',
    text: 'Automatiza la gestión de clientes, el seguimiento de propiedades y la programación de visitas.',
  },
  {
    icon: 'bxs-cart-alt',
    title: 'E-commerce',
    text: 'Optimiza la gestión de inventario, procesa pedidos y centraliza la atención al cliente 24/7.',
  },
  {
    icon: 'bxs-store-alt',
    title: 'Negocios Locales',
    text: 'Gestiona tu agenda de citas, envía recordatorios automáticos y administra tu base de clientes.',
  },
  {
    icon: 'bxs-clinic',
    title: 'Consultorios y Citas',
    text: 'Simplifica la agenda de citas, las confirmaciones y el seguimiento de expedientes de pacientes.',
  },
  {
    icon: 'bxs-trophy',
    title: 'Gimnasios y Fitness',
    text: 'Controla la inscripción a clases, gestiona las membresías y optimiza la programación de entrenadores.',
  },
  {
    icon: 'bxs-briefcase-alt-2',
    title: 'Despachos Jurídicos',
    text: 'Agiliza la gestión de documentos, organiza los expedientes de casos y coordina las citas con clientes.',
  },
];

// Card component to avoid repetition
const IndustryCard: React.FC<{ icon: string; title: string; text: string; }> = ({ icon, title, text }) => (
    <div className="bg-white h-full p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-2">
        <div className="inline-block p-4 bg-primary-blue/10 rounded-full">
            <i className={`bx ${icon} text-4xl text-primary-blue`}></i>
        </div>
        <h3 className="text-xl font-semibold text-dark-blue mt-6">{title}</h3>
        <p className="text-dark-text/80 mt-3 leading-relaxed">{text}</p>
    </div>
);

const Industries: React.FC = () => {
  return (
    <AnimatedSection className="py-20 md:py-28 bg-light-bg">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue">
            Potenciamos Negocios Como el Tuyo
          </h2>
          <p className="mt-4 text-lg text-dark-text/80">
            Nuestra arquitectura de IA es adaptable a múltiples industrias, permitiéndonos potenciar procesos clave en diversos sectores. Estos son algunos de ellos:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesData.map((industry, index) => (
            <div
              key={index}
              className="fade-in-child"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <IndustryCard {...industry} />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Industries;