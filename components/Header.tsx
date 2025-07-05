import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300">
      {/* 
        El contenedor tiene una altura FIJA de 96px (h-24) y NUNCA cambiará.
        El logo de texto está centrado vertical y horizontalmente dentro de este espacio.
      */}
      <div className="container mx-auto px-6 h-24 flex justify-center items-center">
        {/* 
          Logo de texto "VEXIKORE AI". Al hacer clic, te lleva al inicio.
          Se han usado fuentes de Google Fonts como sustitutas para asegurar la compatibilidad:
          - "Playfair Display" (por "Century Schoolbook").
          - "Archivo Black" (por "Hanson Bold").
        */}
        <a href="#" className="flex items-baseline" aria-label="VexiKore AI - Volver al inicio">
          <span className="font-playfair font-bold text-4xl text-dark-text">VEXI</span>
          <span className="font-hanson-alt text-4xl text-dark-text tracking-tighter">KORE</span>
          <span className="font-hanson-alt text-4xl text-primary-blue tracking-tighter ml-2">AI</span>
        </a>
      </div>
    </header>
  );
};

export default Header;