import React, { useEffect } from 'react';
import { StickyHeader } from './components/StickyHeader';
import { Hero } from './components/sections/Hero';
import { PainSolution } from './components/sections/PainSolution';
import { Curriculum } from './components/sections/Curriculum';
import { Proof } from './components/sections/Proof';
import { Pricing } from './components/sections/Pricing';
import { Mentor } from './components/sections/Mentor';
import { Footer } from './components/sections/Footer';
import { StickyCTA } from './components/StickyCTA';
import { MetaEvents } from './utils/metaCAPI';

function App() {
  // Envia PageView via CAPI (complementa o Pixel que já envia automaticamente)
  useEffect(() => {
    MetaEvents.pageView();
  }, []);
  return (
    <div className="bg-black min-h-screen text-white selection:bg-[#FFD700] selection:text-black">
      <StickyHeader />
      <main>
        <Hero />
        <Proof />
        <PainSolution />
        <Curriculum />
        <Pricing />
        <Mentor />
        <Footer />
      </main>
      <StickyCTA />
    </div>
  );
}

export default App;