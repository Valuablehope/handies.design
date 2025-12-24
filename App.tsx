import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { PaletteShowcase } from './components/PaletteShowcase';
import { Services } from './components/Services';
import { PhotoStrip } from './components/PhotoStrip';
import { DesignReality } from './components/DesignReality';

import { About } from './components/About';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 overflow-x-hidden">
      <Navigation />
      <div id="app-content">
        <main>
          <Hero />
          <PaletteShowcase />
          <About />
          <Services />
          <DesignReality />
          <PhotoStrip />
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </div>
  );
};

export default App;
