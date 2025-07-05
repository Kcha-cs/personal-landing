
import React from 'react';

export default function FloatingWhatsApp(): React.ReactElement {
  const whatsappUrl = "https://wa.me/573159986346";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl pulse-bounce transform transition-transform hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <i className='bx bxl-whatsapp text-4xl'></i>
    </a>
  );
}
