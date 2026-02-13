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

const UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'utm_id', 'src'];
const UTM_STORAGE_KEY = 'mgt_utm_params';

function App() {
  // Capture UTM parameters as early as possible when the page loads
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const utms: Record<string, string> = {};
    let hasUtm = false;

    UTM_PARAMS.forEach((param) => {
      const value = urlParams.get(param);
      if (value) {
        utms[param] = value;
        hasUtm = true;
      }
    });

    if (hasUtm) {
      try {
        localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utms));
      } catch (e) {
        // localStorage might be unavailable
      }
    }
  }, []);

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