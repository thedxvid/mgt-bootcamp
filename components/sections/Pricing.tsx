import React from 'react';
import { Check, X, Crown, Zap } from 'lucide-react';
import { ShinyButton } from '../ui/ShinyButton';
import { ScrollReveal } from '../ui/ScrollReveal';
import { OptimizedImage } from '../ui/OptimizedImage';

export const Pricing: React.FC = () => {
  const getCurrentLot = () => {
    const now = new Date();
    const lot1End = new Date('2026-02-16');
    const lot2End = new Date('2026-02-23');
    if (now <= lot1End) return { lot: 1, price: '27,99', endDate: '16/02' };
    if (now <= lot2End) return { lot: 2, price: '47,99', endDate: '23/02' };
    return { lot: 3, price: '67,99', endDate: '27/02' };
  };

  const currentLot = getCurrentLot();

  return (
    <section id="pricing" className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF6B35] to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-4">Escolha Seu Ingresso</h2>
            <p className="text-[#FF6B35] text-base md:text-lg font-medium">🔥 Lote {currentLot.lot} - Válido até {currentLot.endDate}</p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {/* INGRESSO GERAL */}
          <ScrollReveal animation="fade-up" delay={100} className="h-full">
            <div className="bg-neutral-900 border border-neutral-800 p-6 md:p-8 rounded-xl h-full flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">INGRESSO GERAL</h3>
              <div className="mb-4">
                <span className="text-3xl md:text-4xl font-bold text-white">R$ {currentLot.price}</span>
                <p className="text-sm text-gray-500 mt-1">Lote {currentLot.lot}</p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {['Acesso ao bootcamp de 3 dias', 'Sessões ao vivo + Q&A', 'Scripts e templates prontos', 'Gravações vitalícias', 'Grupo exclusivo'].map((t, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-300">
                    <Check className="text-green-500 mr-2 h-5 w-5 flex-shrink-0" />{t}
                  </li>
                ))}
                <li className="flex items-start text-sm text-gray-600">
                  <X className="mr-2 h-5 w-5 flex-shrink-0" />Sem acesso VIP
                </li>
              </ul>
              <a href="https://pay.cakto.com.br/nbrj42k_760150" target="_blank" rel="noopener noreferrer" className="w-full">
                <ShinyButton variant="secondary" fullWidth className="text-sm md:text-base whitespace-nowrap">GARANTIR INGRESSO</ShinyButton>
              </a>
            </div>
          </ScrollReveal>

          {/* VIP */}
          <ScrollReveal animation="fade-up" delay={200} className="h-full">
            <div className="bg-neutral-900 border-2 border-[#FF6B35] p-6 md:p-8 rounded-xl relative lg:scale-105 shadow-[0_0_50px_rgba(255,107,53,0.15)] z-10 h-full flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF6B35] text-white font-bold px-4 py-1 text-xs uppercase rounded-full flex items-center gap-1">
                <Crown className="w-3 h-3" /> Mais Popular
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 mt-2">INGRESSO VIP</h3>
              <div className="mb-4">
                <span className="text-3xl md:text-4xl font-bold text-[#FF6B35]">R$ 97,99</span>
                <p className="text-sm text-gray-500 mt-1">Preço fixo</p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start text-sm text-[#FF6B35] font-semibold"><Check className="mr-2 h-5 w-5" />Tudo do geral</li>
                {['👑 Mestre das Vendas (R$ 97)', '👑 Mestre do N8N (R$ 97)', '👑 Suporte prioritário', '👑 Q&A extras', '👑 2x chances em sorteios'].map((t, i) => (
                  <li key={i} className="flex items-start text-sm text-white font-medium">{t}</li>
                ))}
              </ul>
              <a href="https://pay.cakto.com.br/kjfhqts_760155" target="_blank" rel="noopener noreferrer" className="w-full">
                <ShinyButton fullWidth className="h-14 text-sm md:text-base whitespace-nowrap">GARANTIR VIP</ShinyButton>
              </a>
            </div>
          </ScrollReveal>

          {/* PACOTÃO */}
          <ScrollReveal animation="fade-up" delay={300} className="h-full">
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 border border-yellow-500/50 p-6 md:p-8 rounded-xl relative h-full flex flex-col">
              <div className="absolute top-0 right-4 -translate-y-1/2 bg-yellow-500 text-black font-bold px-3 py-1 text-xs uppercase rounded-full flex items-center gap-1">
                <Zap className="w-3 h-3" /> Melhor Oferta
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">PACOTÃO</h3>
              <div className="mb-4">
                <span className="text-3xl md:text-4xl font-bold text-yellow-500">R$ 249,99</span>
                <p className="text-sm text-gray-500 mt-1">Acesso total</p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start text-sm text-yellow-500 font-semibold"><Check className="mr-2 h-5 w-5" />Tudo do VIP</li>
                {['🔥 Bônus exclusivos', '🔥 Material avançado', '🔥 Acesso antecipado', '🔥 Mentoria extra', '🔥 Templates premium'].map((t, i) => (
                  <li key={i} className="flex items-start text-sm text-white font-medium">{t}</li>
                ))}
              </ul>
              <a href="https://pay.cakto.com.br/j6cckd3_760169" target="_blank" rel="noopener noreferrer" className="w-full">
                <ShinyButton variant="secondary" fullWidth className="text-sm md:text-base whitespace-nowrap">GARANTIR PACOTÃO</ShinyButton>
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* POR QUE O PREÇO? - Refined Structure with Photo */}
        <ScrollReveal animation="fade-up" delay={400}>
          <div className="mt-20 max-w-5xl mx-auto bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Text Side */}
              <div className="p-8 md:p-12 space-y-5">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight italic">
                  "Por Que Apenas R$ {currentLot.price}?"
                </h3>

                <p className="text-gray-400 font-medium italic">Pergunta justa.</p>

                <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
                  <p>
                    Já vi pessoas cobrarem R$ 997 por menos do que estou te entregando aqui. E eu provavelmente poderia cobrar R$ 297+ e ainda lotar este evento.
                  </p>

                  <p className="font-bold text-white uppercase tracking-wider text-xs">Mas aqui está minha lógica:</p>

                  <p>
                    Não estou tentando ganhar dinheiro com este bootcamp. Estou tentando encontrar pessoas que levam a sério a construção de renda com IA e ajudá-las a ter seu primeiro resultado.
                  </p>

                  <p>
                    Algumas dessas pessoas se juntarão aos meus programas avançados. Algumas se tornarão clientes. Algumas se tornarão parceiras. E outras apenas terão sucesso sozinhas e falarão bem de mim para os amigos.
                  </p>

                  <p className="font-semibold text-white">Todos esses resultados são vitórias para mim.</p>

                  <p className="text-xs md:text-sm text-gray-400">
                    O valor de R$ {currentLot.price} apenas cobre meus custos de anúncio e filtra as pessoas que não estão realmente comprometidas. É só isso.
                  </p>

                  <p className="text-[#FF6B35] font-bold italic">
                    Este é o melhor negócio que já ofereci. E provavelmente nunca mais rodarei a este preço.
                  </p>

                  <p className="text-xs text-gray-500 border-t border-neutral-800 pt-4 font-medium italic">
                    Assim que eu tiver cases de sucesso suficientes desta turma, o preço subirá permanentemente.
                  </p>
                </div>
              </div>

              {/* Photo Side */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <OptimizedImage
                  src="/IMG_4082.JPG"
                  alt="Marcelo Anders"
                  className="w-full h-full grayscale-[20%] sepia-[10%] contrast-110"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};