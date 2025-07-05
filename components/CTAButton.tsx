
import React from 'react';

interface CTAButtonProps {
  text: string;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, className = '' }) => {
  const whatsappUrl = "https://wa.me/573159986346";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 bg-primary-blue text-white font-semibold py-4 px-10 rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 text-lg shadow-lg ${className}`}
    >
      <i className='bx bxl-whatsapp text-2xl'></i>
      {text}
    </a>
  );
};

export default CTAButton;
