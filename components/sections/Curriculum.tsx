import React from 'react';
import { Target, Users, Rocket, Calendar, Clock, Monitor } from 'lucide-react';
import { ShinyButton } from '../ui/ShinyButton';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Curriculum: React.FC = () => {
  const days = [
    {
      day: "DIA 1",
      title: "FUNDAÇÃO — Posicionamento e Estratégia",
      icon: Target,
      color: "from-orange-500 to-red-500",
      bullets: [
        "Por que generalistas ficam presos nos R$ 5k enquanto nichados faturam R$ 30k+ — e o framework exato para escolher seu nicho lucrativo em menos de 30 minutos (mesmo que ache que \"nichos limitam oportunidades\").",
        "Como precificar implementação de IA sem perder o cliente nem deixar dinheiro na mesa — a fórmula que usei para cobrar de R$ 3k a R$ 30k pelo mesmo tipo de solução (a diferença está em COMO você posiciona, não no que entrega).",
        "Sistema de prospecção diária que gera leads todos os dias — onde encontrar prospects qualificados e o método exato para nunca mais ficar \"sem saber onde buscar clientes\"."
      ],
      highlight: "🎯 A decisão mais importante do bootcamp: Você vai ESCOLHER seu nicho antes do Dia 2 começar. Sem isso, o resto não funciona."
    },
    {
      day: "DIA 2",
      title: "ATRAÇÃO — Prospecção Que Funciona",
      icon: Users,
      color: "from-blue-500 to-purple-500",
      bullets: [
        "Scripts de prospecção palavra por palavra — DM, e-mail e WhatsApp. Copie, cole, adapte. Testados em centenas de abordagens que geraram respostas reais (e contratos fechados).",
        "A metodologia completa de prospecção ativa passo a passo — desde encontrar o lead até agendar a call de vendas. O caminho exato que elimina \"não sei o que fazer agora\".",
        "Como criar conteúdo intencional que vende enquanto você dorme — posts, stories e vídeos que atraem clientes pagantes (não seguidores aleatórios que só curtem e somem). Para quem quer construir autoridade enquanto prospecta."
      ],
      highlight: "📞 Tarefa prática: Você vai PROSPECTAR durante o bootcamp (sim, ação real, não teoria). Quem aplicar pode ter a primeira conversa comercial ANTES do Dia 3."
    },
    {
      day: "DIA 3",
      title: "FECHAMENTO — Venda, Recorrência e Escala",
      icon: Rocket,
      color: "from-green-500 to-teal-500",
      bullets: [
        "Deck de vendas + Script de fechamento que fecha contratos de R$ 3k-10k — a apresentação exata que uso em calls e o que falar quando o cliente pergunta \"mas quanto custa?\", \"preciso pensar\" ou \"não sei se IA funciona no meu caso\".",
        "Como transformar projeto one-time em R$ 1-3k/mês recorrente — o segredo para sair do \"sempre recomeçando do zero\" e construir previsibilidade. A diferença entre faturar R$ 10k uma vez e R$ 10k TODO MÊS.",
        "As 3 formas de escalar além de R$ 30k/mês — Infosaas, Apps e o modelo que usei para passar de serviço para produto."
      ],
      highlight: "💰 Implementação imediata: Saia do bootcamp com seu deck de vendas pronto e script de fechamento personalizado."
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
                <p className="text-gray-400">27, 28 FEV + 01 MAR</p>
                <p className="text-sm text-gray-500 mt-2">3 dias intensivos de imersão</p>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">O Que Você Vai Dominar <span className="text-[#FF6B35]">em 3 Dias</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Cada dia foi desenhado para te levar do conhecimento à ação. Você sai com habilidades práticas, não só teoria.</p>
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