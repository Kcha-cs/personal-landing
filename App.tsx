
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Industries from './components/Industries';
import Pillars from './components/Pillars';
import ValueProposition from './components/Services';
import Benefits from './components/Benefits';
import FinalCTA from './components/FinalCTA';
import Faq from './components/Faq';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Industries />
        <Pillars />
        <ValueProposition />
        <Benefits />
        <FinalCTA />
        <Faq />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;