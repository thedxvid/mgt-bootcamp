import React from 'react';
import { XCircle, CheckCircle2, DollarSign, TrendingUp, Youtube, Instagram, Target, Clock, ArrowRight } from 'lucide-react';
import { ShinyButton } from '../ui/ShinyButton';
import { ScrollReveal } from '../ui/ScrollReveal';

export const PainSolution: React.FC = () => {
  const painCards = [
    {
      icon: Youtube,
      title: "YouTube Loop",
      text: "Passa noites assistindo tutoriais de N8N que você nunca aplica em um cliente real."
    },
    {
      icon: Instagram,
      title: "Vitrine Vazia",
      text: "Gasta energia criando posts no Instagram para 'parecer bonitinho', mas o direct continua vago."
    },
    {
      icon: Target,
      title: "Atirando para Todo Lado",
      text: "Tenta oferecer 'qualquer automação' para qualquer empresa sem ter um nicho lucrativo."
    },
    {
      icon: Clock,
      title: "Modo Espera",
      text: "Fica polindo seu portfólio técnico esperando que o cliente caia do céu por milagre."
    }
  ];

  const whatCompaniesBuy = [
    { icon: DollarSign, title: "Quanto custa?", text: "Eles buscam eficiência de custo, não complexidade técnica." },
    { icon: TrendingUp, title: "Qual o ROI?", text: "Eles compram lucro ou tempo recuperado, não 'nós'." },
    { icon: CheckCircle2, title: "Quando começa?", text: "Eles têm pressa para resolver o gargalo, não para aprender n8n." }
  ];

  return (
    <>
      {/* SEÇÃO 1: TRAVADO NAS VENDAS */}
      <section className="py-24 bg-neutral-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <ScrollReveal animation="fade-up">
              <h2 className="text-3xl md:text-6xl font-extrabold mb-6 leading-tight text-white italic">
                Domina a Técnica, Mas Está <span className="text-[#FF6B35]">Travado nas Vendas?</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                Você sabe criar os fluxos, mas não consegue sair dos 5k/mês ou nem segurar o primeiro projeto.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {painCards.map((card, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                <div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl hover:border-red-500/30 transition-all group">
                  <card.icon className="text-red-500/50 group-hover:text-red-500 w-10 h-10 mb-4 transition-colors" />
                  <h3 className="text-white font-bold text-xl mb-2">{card.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{card.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade-up" delay={400}>
            <div className="max-w-2xl mx-auto bg-red-500/5 border border-red-500/20 rounded-2xl p-10 text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <XCircle size={100} className="text-red-500" />
              </div>
              <p className="text-2xl md:text-4xl text-white font-black mb-4 tracking-tighter">
                RESULTADO: <span className="text-red-500">R$ 0 EM VENDAS.</span>
              </p>
              <p className="text-gray-400 text-lg">
                Enquanto você estuda, quem sabe <span className="text-white font-bold italic underline decoration-[#FF6B35]">VENDER</span> está levando todos os clientes.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SEÇÃO 2: R$ 1 MILHÃO - AUTHORITY (RESTRUCTURED) */}
      <section className="py-32 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-500 uppercase tracking-[0.3em] mb-12">
              A Autoridade dos Números
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="scale-up" delay={200}>
            <div className="mb-24">
              <span className="text-7xl md:text-[12rem] font-black text-white leading-none tracking-tighter block mb-4">
                R$ 1M+
              </span>
              <p className="text-[#FF6B35] text-xl md:text-3xl font-bold italic">
                Vendidos em Implementações de IA no Último Semestre
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto">
            <ScrollReveal animation="fade-up" delay={300}>
              <p className="text-xl md:text-2xl text-white font-bold mb-12">Não escalamos por sermos gênios do código, mas por seguir este fluxo:</p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                {[
                  { step: "01", title: "ATENÇÃO", desc: "Chamar os olhos do mercado." },
                  { step: "02", title: "ATRAÇÃO", desc: "Se tornar o imã do cliente." },
                  { step: "03", title: "VENDA", desc: "Fechar contratos high-ticket." },
                  { step: "04", title: "ENTREGA", desc: "Onde 90% das pessoas começam." }
                ].map((item, idx) => (
                  <div key={idx} className="relative group text-left bg-neutral-900/40 p-6 rounded-xl border border-white/5 hover:border-[#FF6B35]/30 transition-all">
                    <span className="text-4xl font-black text-[#FF6B35]/20 group-hover:text-[#FF6B35]/40 transition-colors block mb-2">{item.step}</span>
                    <h4 className="text-white font-bold text-lg mb-1 tracking-widest">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                    {idx < 3 && <ArrowRight className="absolute top-1/2 -right-6 -translate-y-1/2 text-neutral-800 hidden lg:block w-8 h-8" />}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent max-w-5xl mx-auto" />

      {/* SEÇÃO 3: O QUE EMPRESAS REALMENTE COMPRAM (CONTRAST LAYOUT) */}
      <section className="py-24 bg-neutral-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal animation="fade-up" className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              O Que Empresas <span className="italic">Realmente</span> Compram
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-neutral-800 rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl mb-16">
            {/* O que NÃO querem */}
            <div className="bg-neutral-950 p-8 md:p-16">
              <div className="flex items-center gap-3 mb-8">
                <XCircle className="text-red-500 w-8 h-8" />
                <h3 className="text-2xl font-bold text-white">Ninguém Te Contou...</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Empresas NÃO compram 'automação de n8n'.",
                  "Empresas NÃO querem saber da lógica do fluxo.",
                  "Empresas NÃO se importam com complexidade técnica."
                ].map((text, i) => (
                  <li key={i} className="flex items-start text-gray-500 text-lg group">
                    <span className="mr-4 text-red-500/30 group-hover:text-red-500 transition-colors">✕</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* O que QUEREM */}
            <div className="bg-neutral-900 p-8 md:p-16 border-l md:border-l-0 border-t md:border-t-0 border-neutral-800">
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle2 className="text-[#FF6B35] w-8 h-8" />
                <h3 className="text-2xl font-bold text-white">O Que Paga as Contas:</h3>
              </div>
              <p className="text-xl md:text-2xl font-medium text-gray-300 leading-relaxed italic">
                Empresas compram <span className="text-[#FF6B35] font-black underline decoration-white/20">SOLUÇÃO</span> para problemas que estão drenando o caixa delas hoje.
              </p>
            </div>
          </div>

          {/* Benefit Cards Enhanced */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whatCompaniesBuy.map((item, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform shadow-lg group">
                  <div className="w-16 h-16 bg-[#FF6B35]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF6B35]/20 transition-colors">
                    <item.icon className="text-[#FF6B35] w-8 h-8" />
                  </div>
                  <h4 className="text-white font-black text-xl mb-3 tracking-tighter italic">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="scale-up" delay={400} className="mt-20 text-center">
            <ShinyButton withIcon className="h-16 px-12 text-lg">SIM, QUERO VENDER SOLUÇÕES REAIS</ShinyButton>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};
