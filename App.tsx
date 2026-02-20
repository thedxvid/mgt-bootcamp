import React, { lazy, Suspense, useEffect } from 'react';
import { StickyHeader } from './components/StickyHeader';
import { Hero } from './components/sections/Hero';
import { StickyCTA } from './components/StickyCTA';
import { MetaEvents } from './utils/metaCAPI';

// Lazy load below-the-fold sections
const Proof = lazy(() => import('./components/sections/Proof').then(m => ({ default: m.Proof })));
const PainSolution = lazy(() => import('./components/sections/PainSolution').then(m => ({ default: m.PainSolution })));
const Curriculum = lazy(() => import('./components/sections/Curriculum').then(m => ({ default: m.Curriculum })));
const Pricing = lazy(() => import('./components/sections/Pricing').then(m => ({ default: m.Pricing })));
const Mentor = lazy(() => import('./components/sections/Mentor').then(m => ({ default: m.Mentor })));
const Footer = lazy(() => import('./components/sections/Footer').then(m => ({ default: m.Footer })));

// Minimal loading fallback (invisible for smooth UX)
const SectionFallback = () => <div className="min-h-[200px]" />;

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
        <Suspense fallback={<SectionFallback />}>
          <Proof />
          <PainSolution />
          <Curriculum />
          <Pricing />
          <Mentor />
          <Footer />
        </Suspense>
      </main>
      <StickyCTA />
    </div>
  );
}

export default App;