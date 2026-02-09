import React from 'react';
import { XCircle, CheckCircle2, DollarSign, TrendingUp } from 'lucide-react';
import { ShinyButton } from '../ui/ShinyButton';
import { ScrollReveal } from '../ui/ScrollReveal';

export const PainSolution: React.FC = () => {
  const painActions = [
    "Assistindo tutoriais no YouTube sobre N8N",
    "Criando contas no Instagram para \"parecer bonitinho\"",
    "Oferecendo \"qualquer automação para qualquer pessoa\"",
    "Esperando o cliente cair do céu"
  ];

  const whatCompaniesBuy = [
    { icon: DollarSign, text: "\"Quanto custa?\"" },
    { icon: TrendingUp, text: "\"Quanto retorno isso traz?\"" },
    { icon: CheckCircle2, text: "\"Quando posso começar?\"" }
  ];

  return (
    <>
      {/* SEÇÃO 2: O PROBLEMA */}
      <section className="py-16 md:py-24 bg-neutral-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal animation="fade-up">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-center">
                Você Domina a Técnica, Mas Está{' '}
                <span className="text-[#FF6B35]">Travado nas Vendas</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <div className="bg-black/50 border border-neutral-800 rounded-xl p-6 md:p-8 mb-8">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Você domina ferramenta... mas não consegue sair dos <strong className="text-white">5k/mês</strong> ou nem mesmo vender o primeiro projeto.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Enquanto isso, pessoas que <strong className="text-[#FF6B35]">nunca criaram um fluxo de automação</strong> estão fazendo R$ 20k, R$ 30k, R$ 50k todos os meses.
                </p>
                <p className="text-2xl font-bold text-white mb-6">Por quê?</p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Porque conhecimento técnico <strong className="text-red-400">não atrai lead</strong>, <strong className="text-red-400">não nutre o lead</strong> e nem <strong className="text-red-400">converte</strong>.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="mb-8">
                <p className="text-gray-400 text-lg mb-6">Você passa horas:</p>
                <ul className="space-y-4 mb-8">
                  {painActions.map((action, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <XCircle className="text-red-500 mr-3 mt-1 flex-shrink-0 w-5 h-5" />
                      <span className="text-base md:text-lg">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 text-center">
                <p className="text-xl md:text-2xl text-white font-bold mb-2">
                  E no final do mês: <span className="text-red-400">R$ 0 em vendas.</span>
                </p>
                <p className="text-gray-400">
                  Ou pior, R$ 500 de um "projeto teste".
                </p>
                <p className="text-[#FF6B35] font-bold mt-4 text-lg">
                  Você sabe entregar. Mas não sabe vender.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: A VERDADE INCONVENIENTE */}
      <section className="py-16 md:py-24 bg-black border-y border-neutral-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal animation="fade-up">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-center">
                O Que Empresas{' '}
                <span className="text-[#FF6B35]">Realmente Compram</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 md:p-8 mb-8">
                <div className="space-y-4 mb-8">
                  <div className="flex items-start text-gray-300 text-base md:text-lg">
                    <XCircle className="text-red-500 mr-3 mt-0.5 flex-shrink-0 w-5 h-5" />
                    <span>Empresas <strong className="text-white">não compram</strong> "automação de N8N".</span>
                  </div>
                  <div className="flex items-start text-gray-300 text-base md:text-lg">
                    <XCircle className="text-red-500 mr-3 mt-0.5 flex-shrink-0 w-5 h-5" />
                    <span>Empresas <strong className="text-white">não querem saber</strong> da lógica do fluxo.</span>
                  </div>
                  <div className="flex items-start text-gray-300 text-base md:text-lg">
                    <XCircle className="text-red-500 mr-3 mt-0.5 flex-shrink-0 w-5 h-5" />
                    <span>Empresas <strong className="text-white">não se importam</strong> com quantas integrações você domina.</span>
                  </div>
                </div>

                <div className="bg-[#FF6B35]/10 border border-[#FF6B35]/30 rounded-lg p-6 mb-8">
                  <p className="text-xl md:text-2xl font-bold text-white text-center">
                    Empresas compram <span className="text-[#FF6B35]">SOLUÇÃO</span> para problemas que custam dinheiro.
                  </p>
                </div>

                <p className="text-gray-400 mb-4">Elas querem saber:</p>
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {whatCompaniesBuy.map((item, idx) => (
                    <div key={idx} className="bg-black/50 border border-neutral-700 rounded-lg p-4 text-center">
                      <item.icon className="text-[#FF6B35] w-8 h-8 mx-auto mb-2" />
                      <p className="text-white font-semibold">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="text-center">
                <p className="text-gray-400 text-lg mb-4">
                  Profissionais autônomos não querem saber da complexidade técnica.
                </p>
                <p className="text-white text-xl font-semibold mb-6">
                  Eles querem saber: <span className="text-[#FF6B35]">"Quanto dinheiro estou PERDENDO por não ter sua solução?"</span>
                </p>
                <p className="text-gray-300 text-lg bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                  E quem sabe <strong className="text-white">chamar atenção</strong>, <strong className="text-white">posicionar valor</strong> e <strong className="text-white">vender uma solução</strong> — mesmo sem ser o melhor técnico — <span className="text-[#FF6B35] font-bold">leva o cliente.</span>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: A PROVA */}
      <section className="py-16 md:py-24 bg-neutral-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal animation="fade-up">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Como Vendemos Mais de{' '}
                <span className="text-[#FF6B35]">R$ 1 Milhão no Último Semestre</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <div className="bg-gradient-to-br from-[#FF6B35]/20 to-orange-600/10 border border-[#FF6B35]/40 rounded-xl p-8 md:p-12 mb-8">
                <p className="text-4xl md:text-6xl font-bold text-white mb-4">R$ 1.000.000+</p>
                <p className="text-xl text-gray-300 mb-2">em implementação de IA</p>
                <p className="text-[#FF6B35] font-semibold">Faturamento de múltiplos 6 dígitos mensais</p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-black/50 border border-neutral-800 rounded-lg p-4 flex items-center">
                  <XCircle className="text-red-500 mr-3 flex-shrink-0 w-5 h-5" />
                  <p className="text-gray-300 text-left">Não porque somos os melhores técnicos <span className="text-gray-500">(não somos)</span></p>
                </div>
                <div className="bg-black/50 border border-neutral-800 rounded-lg p-4 flex items-center">
                  <XCircle className="text-red-500 mr-3 flex-shrink-0 w-5 h-5" />
                  <p className="text-gray-300 text-left">Não porque temos os fluxos mais complexos <span className="text-gray-500">(não temos)</span></p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <p className="text-xl text-white font-bold mb-6">Porque entendemos a ordem correta:</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
                {[
                  { step: "1", text: "Chamar atenção" },
                  { step: "2", text: "Atrair" },
                  { step: "3", text: "Vender" },
                  { step: "4", text: "Entregar" }
                ].map((item, idx) => (
                  <React.Fragment key={idx}>
                    <div className="bg-[#FF6B35]/20 border border-[#FF6B35]/40 rounded-lg px-6 py-3">
                      <span className="text-[#FF6B35] font-bold">{item.step}.</span>
                      <span className="text-white ml-2">{item.text}</span>
                    </div>
                    {idx < 3 && <span className="text-gray-600 hidden md:block">→</span>}
                  </React.Fragment>
                ))}
              </div>
              <p className="text-gray-500 italic mb-8">E para escalar... bom, isso é assunto para outro momento. (Infosaas e Apps)</p>
            </ScrollReveal>

            <ScrollReveal animation="scale-up" delay={400}>
              <div className="bg-[#FF6B35] text-black rounded-xl p-6 md:p-8">
                <p className="text-xl md:text-2xl font-bold">
                  Este bootcamp ensina o framework exato que usamos.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="scale-up" delay={500} className="mt-8">
              <ShinyButton withIcon>GARANTIR MINHA VAGA AGORA</ShinyButton>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};