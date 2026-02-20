import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { ShinyButton } from '../ui/ShinyButton';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden border-b border-neutral-900 bg-black">
      {/* Background Banners - Only loads the correct one via <picture> */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-width: 767px)" srcSet="/banner-mobile.webp" type="image/webp" />
          <source media="(max-width: 767px)" srcSet="/banner mobile.png" type="image/png" />
          <source media="(min-width: 768px)" srcSet="/banner-desktop.webp" type="image/webp" />
          <source media="(min-width: 768px)" srcSet="/banner desktop.png" type="image/png" />
          <img
            src="/banner-mobile.webp"
            alt="Bootcamp Banner"
            className="w-full h-full object-cover"
            style={{ opacity: 0.65 }}
            fetchPriority="high"
            decoding="async"
            width={768}
            height={1024}
          />
        </picture>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        {/* Date & Time - Minimal */}
        <ScrollReveal animation="fade-in" delay={200} className="mb-8">
          <div className="flex items-center justify-center gap-6 text-gray-400 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Calendar className="text-[#FF6B35] w-4 h-4" />
              <span>27 e 28 FEV</span>
            </div>
            <span className="text-neutral-700">|</span>
            <div className="flex items-center gap-2">
              <Clock className="text-[#FF6B35] w-4 h-4" />
              <span>18:00 às 20:00</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Main Content */}
        <div className="text-center max-w-5xl mx-auto space-y-6 md:space-y-8">
          <ScrollReveal animation="fade-up" delay={400}>
            <div className="flex flex-col items-center gap-4 mb-4">
              <div className="bg-[#FF6B35] text-black px-6 py-2 rounded-xl border-b-4 border-orange-800 shadow-xl transform skew-x-[-12deg]">
                <span className="text-lg md:text-2xl font-black italic tracking-tighter uppercase block leading-none">
                  🚨 ÚLTIMAS VAGAS: 80% ESGOTADO!
                </span>
              </div>

              <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-full h-4 overflow-hidden p-0.5">
                <div className="bg-gradient-to-r from-orange-600 to-[#FF6B35] h-full rounded-full relative animate-[progress_2s_ease-out_forwards]" style={{ width: '80%' }}>
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:20px_20px] animate-progress-shine"></div>
                </div>
              </div>
              <p className="text-[#FF6B35] text-xs font-bold uppercase tracking-widest animate-pulse">Restam menos de 40 vagas no Lote 2</p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={500}>
            <h1 className="text-[26px] md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white px-2">
              Este Bootcamp de 2 Dias Ensina o Framework Exato Que Usei Para Vender Mais de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-orange-500">R$ 1 Milhão em Implementação de IA</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mt-4 px-2 font-medium">
              Mesmo Que Você Saiba Criar Automações Mas Não Faça Ideia de Como Vendê-las
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={600}>
            <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
              O problema não é técnico. Conheço pessoas que <strong className="text-white">NÃO sabem N8N</strong> e já faturaram múltiplos 6 dígitos mensais vendendo implementações, enquanto experts em automação ficam presos nos R$ 5k. <span className="text-[#FF6B35] font-semibold">Descubra por quê.</span>
            </p>
          </ScrollReveal>

          <ScrollReveal animation="scale-up" delay={700} className="flex flex-col items-center space-y-4 pt-4">
            <div className="w-full md:w-auto px-4 md:px-0">
              <ShinyButton fullWidth className="md:w-auto min-w-[300px]">
                GARANTIR MINHA VAGA AGORA
              </ShinyButton>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xs text-gray-400 pb-16 md:pb-20">
              <span className="flex items-center gap-1">
                <span className="text-gray-600 line-through">R$ 97,00</span>
                <span className="text-[#FF6B35] font-bold text-sm">R$ 47,99</span>
              </span>
              <span className="hidden md:block">•</span>
              <span className="font-medium text-[#FF6B35]">Lote 2 válido até 23/02 (80% Esgotado)</span>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 w-full bg-[#FF6B35] text-black py-3 border-y border-orange-600 marquee-container">
        <div className="marquee-content font-bold tracking-wider text-sm md:text-base uppercase flex gap-12 items-center">
          {Array(10).fill("• FRAMEWORK DE VENDAS • PROSPECÇÃO ATIVA • FECHAMENTO HIGH-TICKET • RECORRÊNCIA • ESCALA").map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
      </div>
    </section>
  );
};