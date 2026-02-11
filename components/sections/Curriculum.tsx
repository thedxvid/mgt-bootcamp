import React from 'react';
import { Target, Users, Rocket, Calendar, Clock, Monitor } from 'lucide-react';
import { ShinyButton } from '../ui/ShinyButton';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Curriculum: React.FC = () => {
  const days = [
    {
      day: "PARTE 1",
      title: "FUNDAÇÃO E ATRAÇÃO — Posicionamento e Prospecção",
      icon: Target,
      color: "from-orange-500 to-red-500",
      bullets: [
        "Por que generalistas ficam presos nos R$ 5k enquanto nichados faturam R$ 30k+ — e o framework exato para escolher seu nicho lucrativo.",
        "Como precificar implementação de IA sem perder o cliente nem deixar dinheiro na mesa — a fórmula para cobrar de R$ 3k a R$ 30k (a diferença está no posicionamento).",
        "Scripts de prospecção palavra por palavra (DM, e-mail e WhatsApp) e a metodologia completa de prospecção ativa passo a passo.",
        "Sistema de prospecção diária que gera leads todos os dias e como encontrar prospects qualificados sem nunca mais ficar sem saber onde buscar."
      ],
      highlight: "🎯 Ação imediata: Você vai ESCOLHER seu nicho e iniciar sua estratégia de prospecção. O foco aqui é gerar movimento real no seu funil."
    },
    {
      day: "PARTE 2",
      title: "FECHAMENTO E ESCALA — Venda, Recorrência e Autoridade",
      icon: Rocket,
      color: "from-blue-500 to-purple-500",
      bullets: [
        "Deck de vendas + Script de fechamento que fecha contratos de R$ 3k-10k — o que falar quando o cliente traz objeções como \"está caro\" ou \"vou pensar\".",
        "Como transformar projeto one-time em R$ 1-3k/mês recorrente — o segredo para sair do zero todo mês e construir previsibilidade real.",
        "Como criar conteúdo intencional que vende enquanto você dorme (atraindo clientes pagantes) e as 3 formas de escalar além dos R$ 30k/mês.",
        "Plano de ação imediato: Saia do bootcamp com seu deck de vendas pronto e script de fechamento personalizado para seu negócio."
      ],
      highlight: "💰 Implementação: Saia com as ferramentas exatas para fechar contratos de alto valor e escalar sua operação com previsibilidade."
    }
  ];

  return (
    <section className="bg-neutral-900 text-white">
      {/* BOOTCAMP INFO */}
      <div className="py-20 border-b border-neutral-800 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <ScrollReveal animation="fade-up" delay={0}>
              <div className="bg-black/50 p-6 md:p-8 border border-neutral-800 rounded-xl hover:border-[#FF6B35] transition-colors h-full">
                <Calendar className="text-[#FF6B35] w-8 h-8 md:w-10 md:h-10 mb-4" />
                <h3 className="text-lg md:text-xl font-bold mb-2">QUANDO</h3>
                <p className="text-gray-400">27 e 28 FEV</p>
                <p className="text-sm text-gray-500 mt-2">2 dias intensivos de imersão</p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={150}>
              <div className="bg-black/50 p-6 md:p-8 border border-neutral-800 rounded-xl hover:border-[#FF6B35] transition-colors h-full">
                <Clock className="text-[#FF6B35] w-8 h-8 md:w-10 md:h-10 mb-4" />
                <h3 className="text-lg md:text-xl font-bold mb-2">HORÁRIO</h3>
                <p className="text-gray-400">18:00 às 20:00</p>
                <p className="text-sm text-gray-500 mt-2">Horário de Brasília</p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="bg-black/50 p-6 md:p-8 border border-neutral-800 rounded-xl hover:border-[#FF6B35] transition-colors h-full">
                <Monitor className="text-[#FF6B35] w-8 h-8 md:w-10 md:h-10 mb-4" />
                <h3 className="text-lg md:text-xl font-bold mb-2">FORMATO</h3>
                <p className="text-gray-400">100% Online</p>
                <p className="text-sm text-gray-500 mt-2">Ao vivo + Gravações vitalícias</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* CURRICULUM */}
      <div className="py-24 max-w-7xl mx-auto px-4">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">O Que Você Vai Dominar <span className="text-[#FF6B35]">em 2 Dias</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Cada momento foi desenhado para te levar do conhecimento à ação. Você sai com habilidades práticas, não só teoria.</p>
          </div>
        </ScrollReveal>

        <div className="space-y-8 md:space-y-12">
          {days.map((day, idx) => (
            <ScrollReveal key={idx} animation="fade-up" delay={100} className="w-full">
              <div className="bg-black/50 border border-neutral-800 rounded-2xl overflow-hidden hover:border-[#FF6B35]/50 transition-all duration-300">
                {/* Day Header */}
                <div className={`bg-gradient-to-r ${day.color} p-6 md:p-8`}>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 backdrop-blur p-3 rounded-xl">
                      <day.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="text-white/80 text-sm font-bold tracking-wider">{day.day}</span>
                      <h3 className="text-xl md:text-2xl font-bold text-white">{day.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Day Content */}
                <div className="p-6 md:p-8">
                  <p className="text-[#FF6B35] font-semibold mb-6 text-lg">O que você vai dominar:</p>
                  <ul className="space-y-4 mb-6">
                    {day.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start text-gray-300">
                        <div className="w-2 h-2 bg-[#FF6B35] rounded-full mr-4 mt-2.5 shrink-0"></div>
                        <span className="text-sm md:text-base leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Highlight Box */}
                  <div className="bg-[#FF6B35]/10 border border-[#FF6B35]/30 rounded-xl p-4 md:p-6">
                    <p className="text-white font-medium text-sm md:text-base">{day.highlight}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center px-4">
          <ScrollReveal animation="scale-up">
            <ShinyButton className="mx-auto" withIcon>GARANTIR MINHA VAGA AGORA</ShinyButton>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};