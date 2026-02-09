import React from 'react';
import { Calendar, Clock, Monitor, Ticket } from 'lucide-react';
import { ShinyButton } from '../ui/ShinyButton';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">

        {/* Date Grid - Mobile 2x2, Desktop 4x1 */}
        <ScrollReveal animation="fade-in" delay={200} className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-90">
            {[
              { icon: Calendar, label: "DATAS", value: "27, 28 FEV + 01 MAR" },
              { icon: Clock, label: "HORÁRIO", value: "18:00 ÀS 20:00" },
              { icon: Monitor, label: "FORMATO", value: "100% ONLINE" },
              { icon: Ticket, label: "LOTE 1", value: "R$ 27,99" }
            ].map((item, i) => (
              <div key={i} className="border border-neutral-800 bg-neutral-900/50 p-3 flex flex-col items-center justify-center text-center rounded-lg backdrop-blur-sm">
                <item.icon className="text-[#FF6B35] w-5 h-5 mb-2" />
                <span className="text-[#FF6B35] font-bold text-xs md:text-sm tracking-wider mb-1">{item.label}</span>
                <span className="text-white text-xs md:text-sm font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Main Content */}
        <div className="text-center max-w-5xl mx-auto space-y-6 md:space-y-8">
          <ScrollReveal animation="fade-up" delay={400}>
            <div className="inline-block bg-[#FF6B35]/10 border border-[#FF6B35]/30 rounded-full px-4 py-1.5 mb-2">
              <span className="text-[#FF6B35] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">🔥 Lote 1 - Preço Especial de Lançamento</span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={500}>
            <h1 className="text-[26px] md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white px-2">
              Este Bootcamp de 3 Dias Ensina o Framework Exato Que Usei Para Vender Mais de{' '}
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
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xs text-gray-500 pb-16 md:pb-20">
              <span className="flex items-center gap-1">
                <span className="text-gray-600 line-through">R$ 97,00</span>
                <span className="text-[#FF6B35] font-bold text-sm">R$ 27,99</span>
              </span>
              <span className="hidden md:block">•</span>
              <span>Lote 1 válido até 16/02</span>
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