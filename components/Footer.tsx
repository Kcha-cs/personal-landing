
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-text text-white">
      {/* 
        Este contenedor tiene una altura FIJA de 112px (h-28) y NUNCA cambiará.
        Todo el contenido, incluido el isotipo, se centra verticalmente dentro de este espacio.
      */}
      <div className="container mx-auto px-6 h-28 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        
        <a href="#" aria-label="Volver al inicio" className="flex items-center justify-center h-full">
           {/*
            ¡CONTROL TOTAL Y SEGURO!
            - Cambia el valor de 'height' para ajustar el tamaño del isotipo.
            - La clase 'max-h-full' asegura que NUNCA se desbordará del footer,
              incluso si le das un tamaño muy grande. Se detendrá en el borde.
          */}
          <img 
            src="/assets/isotype.png" 
            alt="Isotipo de VexiKore AI" 
            className="w-auto max-h-full" // Barrera de seguridad para contención
            style={{ height: '30px' }}   // <-- ¡Controla el tamaño aquí! (ej: 4rem es 64px)
          />
        </a>
        
        {/* Contacto */}
        <div>
          <h4 className="font-semibold text-gray-200 mb-2 uppercase tracking-wider text-sm">Contacto Directo</h4>
          <a 
            href="mailto:soluciones@vexikore.com" 
            className="text-gray-400 hover:text-primary-blue transition-colors duration-300 inline-flex items-center gap-2"
          >
            <i className='bx bx-envelope text-xl'></i>
            <span>soluciones@vexikore.com</span>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {currentYear} VexiKore AI. <br className="sm:hidden" />Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
