import React from 'react';
import { Check, X, Crown, Zap, Gift } from 'lucide-react';
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

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
          {/* INGRESSO NORMAL */}
          <ScrollReveal animation="fade-up" delay={100} className="h-full">
            <div className="bg-neutral-900 border border-neutral-800 p-6 md:p-8 rounded-xl h-full flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">INGRESSO NORMAL</h3>
              <div className="mb-4">
                <span className="text-3xl md:text-4xl font-bold text-white">R$ {currentLot.price}</span>
                <p className="text-sm text-gray-500 mt-1">Lote {currentLot.lot}</p>
              </div>

              <div className="space-y-4 mb-6 flex-grow">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">O que está incluso:</p>
                <ul className="space-y-2.5">
                  {[
                    'Acesso completo ao bootcamp de 2 dias',
                    'Framework completo de vendas de IA',
                    'Treinamento sobre posicionamento, prospecção e fechamento',
                    'Acesso a todas as sessões ao vivo',
                    'Scripts, templates e frameworks prontos',
                    'Grupo exclusivo de participantes'
                  ].map((t, i) => (
                    <li key={i} className="flex items-start text-xs text-gray-300">
                      <Check className="text-green-500 mr-2 h-4 w-4 flex-shrink-0 mt-0.5" />{t}
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-neutral-800">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2">Não incluso:</p>
                  <ul className="space-y-1.5">
                    {[
                      'Consultoria 1-on-1 com Cello e Theo',
                      'Canal Discord VIP',
                      'Próximos bootcamps',
                      'Hotseat com Cello',
                      'Suporte prioritário',
                      'Material complementar avançado',
                      'Mestre das Vendas',
                      'Mestre do N8N'
                    ].map((t, i) => (
                      <li key={i} className="flex items-start text-xs text-gray-600">
                        <X className="mr-2 h-3.5 w-3.5 flex-shrink-0 mt-0.5" />{t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a href="https://pay.cakto.com.br/nbrj42k_760150" target="_blank" rel="noopener noreferrer" className="w-full">
                <ShinyButton variant="secondary" fullWidth className="text-sm md:text-base whitespace-nowrap">GARANTIR INGRESSO</ShinyButton>
              </a>
            </div>
          </ScrollReveal>

          {/* PLANO X (VIP) */}
          <ScrollReveal animation="fade-up" delay={200} className="h-full">
            <div className="bg-neutral-900 border-2 border-[#FF6B35] p-6 md:p-8 rounded-xl relative lg:scale-105 shadow-[0_0_50px_rgba(255,107,53,0.15)] z-10 h-full flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF6B35] text-white font-bold px-4 py-1 text-xs uppercase rounded-full flex items-center gap-1">
                <Crown className="w-3 h-3" /> Mais Popular
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 mt-2">PLANO X (VIP)</h3>
              <div className="mb-4">
                <span className="text-3xl md:text-4xl font-bold text-[#FF6B35]">R$ 97,99</span>
                <p className="text-sm text-gray-500 mt-1">Preço fixo</p>
              </div>

              <div className="space-y-4 mb-6 flex-grow">
                <p className="text-xs text-[#FF6B35] font-bold uppercase tracking-wider flex items-center gap-1">
                  <Check className="h-4 w-4" /> Tudo do Ingresso Normal +
                </p>

                <ul className="space-y-2.5">
                  <li className="flex items-start text-xs text-white font-medium bg-[#FF6B35]/10 p-2 rounded border border-[#FF6B35]/20">
                    <Crown className="text-[#FF6B35] mr-2 h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span><strong>Sorteio consultoria</strong> 1h com Cello + 1h com Theo (valor inestimável)</span>
                  </li>
                  <li className="flex items-start text-xs text-white font-medium">
                    <Crown className="text-[#FF6B35] mr-2 h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span><strong>Canal Discord exclusivo</strong> com conteúdo e networking</span>
                  </li>
                  <li className="flex items-start text-xs text-white font-medium">
                    <Crown className="text-[#FF6B35] mr-2 h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span><strong>Acesso vitalício</strong> a TODOS os próximos bootcamps (gravações)</span>
                  </li>
                  <li className="flex items-start text-xs text-white font-medium">
                    <Crown className="text-[#FF6B35] mr-2 h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span><strong>Hotseat exclusivo</strong> após aulas com Cello e Theo</span>
                  </li>
                  <li className="flex items-start text-xs text-white font-medium">
                    <Crown className="text-[#FF6B35] mr-2 h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span><strong>Suporte prioritário</strong> durante as calls</span>
                  </li>
                  <li className="flex items-start text-xs text-white font-medium">
                    <Crown className="text-[#FF6B35] mr-2 h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span><strong>Material complementar avançado</strong> (tarefas, planilhas, checklists)</span>
                  </li>
                </ul>

                <div className="pt-3 border-t border-neutral-800">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2">Não incluso:</p>
                  <ul className="space-y-1.5">
                    {['Mestre das Vendas', 'Mestre do N8N'].map((t, i) => (
                      <li key={i} className="flex items-start text-xs text-gray-600">
                        <X className="mr-2 h-3.5 w-3.5 flex-shrink-0 mt-0.5" />{t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a href="https://pay.cakto.com.br/kjfhqts_760155" target="_blank" rel="noopener noreferrer" className="w-full">
                <ShinyButton fullWidth className="h-14 text-sm md:text-base whitespace-nowrap">GARANTIR VIP</ShinyButton>
              </a>
            </div>
          </ScrollReveal>

          {/* FULL PACK (PACOTÃO) */}
          <ScrollReveal animation="fade-up" delay={300} className="h-full">
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 border-2 border-yellow-500/50 p-6 md:p-8 rounded-xl relative h-full flex flex-col">
              <div className="absolute top-0 right-4 -translate-y-1/2 bg-yellow-500 text-black font-bold px-3 py-1 text-xs uppercase rounded-full flex items-center gap-1">
                <Zap className="w-3 h-3" /> Melhor Oferta
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">FULL PACK</h3>
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl md:text-4xl font-bold text-yellow-500">R$ 249,99</span>
                </div>
                <p className="text-xs text-gray-400 mt-1 line-through">Valor total: R$ 496</p>
                <p className="text-sm text-yellow-500 font-bold">Economia de R$ 246</p>
              </div>

              <div className="space-y-4 mb-6 flex-grow">
                <p className="text-xs text-yellow-500 font-bold uppercase tracking-wider flex items-center gap-1">
                  <Check className="h-4 w-4" /> Tudo do VIP +
                </p>

                {/* Mestre das Vendas */}
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 space-y-2">
                  <p className="text-sm font-bold text-yellow-500 flex items-center gap-1">
                    <Gift className="h-4 w-4" /> MESTRE DAS VENDAS (R$ 199)
                  </p>
                  <ul className="space-y-1.5">
                    {[
                      '9 calls de venda reais gravadas',
                      'Script de vendas estruturado',
                      '6 exemplos de propostas prontas',
                      'Modelo de contrato profissional'
                    ].map((t, i) => (
                      <li key={i} className="flex items-start text-xs text-gray-300">
                        <Check className="text-yellow-500 mr-2 h-3.5 w-3.5 flex-shrink-0 mt-0.5" />{t}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mestre do N8N */}
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 space-y-2">
                  <p className="text-sm font-bold text-yellow-500 flex items-center gap-1">
                    <Gift className="h-4 w-4" /> MESTRE DO N8N (R$ 199)
                  </p>
                  <ul className="space-y-1.5">
                    {[
                      '34 aulas completas de N8N',
                      'Infraestrutura e instalação',
                      'Mapeamento de projetos',
                      'Integração Chatwoot',
                      '21 templates prontos',
                      'Códigos essenciais',
                      'Template Notion de organização'
                    ].map((t, i) => (
                      <li key={i} className="flex items-start text-xs text-gray-300">
                        <Check className="text-yellow-500 mr-2 h-3.5 w-3.5 flex-shrink-0 mt-0.5" />{t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a href="https://pay.cakto.com.br/j6cckd3_760169" target="_blank" rel="noopener noreferrer" className="w-full">
                <ShinyButton variant="secondary" fullWidth className="text-sm md:text-base whitespace-nowrap">GARANTIR FULL PACK</ShinyButton>
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Comparison Table */}
        <ScrollReveal animation="fade-up" delay={400}>
          <div className="mt-20 max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-4xl font-bold text-white text-center mb-8">Compare os Planos</h3>

            <div className="overflow-x-auto">
              <table className="w-full bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-neutral-800">
                    <th className="text-left p-4 text-sm font-bold text-white">O QUE VOCÊ RECEBE</th>
                    <th className="text-center p-4 text-sm font-bold text-white">NORMAL</th>
                    <th className="text-center p-4 text-sm font-bold text-[#FF6B35]">VIP</th>
                    <th className="text-center p-4 text-sm font-bold text-yellow-500">FULL PACK</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800">
                  {[
                    { item: 'Bootcamp 2 dias', normal: true, vip: true, full: true },
                    { item: 'Hotseat pós-call Marcelo', normal: true, vip: true, full: true },
                    { item: 'Gravações DESTE bootcamp', normal: true, vip: true, full: true },
                    { item: 'Scripts e templates', normal: true, vip: true, full: true },
                    { item: 'Grupo exclusivo', normal: true, vip: true, full: true },
                    { item: 'Consultoria 1h Cello + 1h Theo', normal: false, vip: true, full: true, highlight: 'vip' },
                    { item: 'Canal Discord VIP', normal: false, vip: true, full: true, highlight: 'vip' },
                    { item: 'Gravações PRÓXIMOS bootcamps', normal: false, vip: true, full: true, highlight: 'vip' },
                    { item: 'Hotseat exclusivo Cello', normal: false, vip: true, full: true, highlight: 'vip' },
                    { item: 'Suporte prioritário calls', normal: false, vip: true, full: true, highlight: 'vip' },
                    { item: 'Material complementar', normal: false, vip: true, full: true, highlight: 'vip' },
                    { item: 'Mestre das Vendas', normal: false, vip: false, full: true, highlight: 'full' },
                    { item: 'Mestre do N8N', normal: false, vip: false, full: true, highlight: 'full' }
                  ].map((row, i) => (
                    <tr key={i} className={row.highlight === 'vip' ? 'bg-[#FF6B35]/5' : row.highlight === 'full' ? 'bg-yellow-500/5' : ''}>
                      <td className="p-4 text-sm text-gray-300">{row.item}</td>
                      <td className="p-4 text-center">
                        {row.normal ? <Check className="text-green-500 h-5 w-5 mx-auto" /> : <X className="text-gray-600 h-5 w-5 mx-auto" />}
                      </td>
                      <td className="p-4 text-center">
                        {row.vip ? <Crown className="text-[#FF6B35] h-5 w-5 mx-auto" /> : <X className="text-gray-600 h-5 w-5 mx-auto" />}
                      </td>
                      <td className="p-4 text-center">
                        {row.full ? <Zap className="text-yellow-500 h-5 w-5 mx-auto" /> : <X className="text-gray-600 h-5 w-5 mx-auto" />}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-neutral-800 font-bold">
                    <td className="p-4 text-sm text-white">PREÇO</td>
                    <td className="p-4 text-center text-white">R$ 27-67</td>
                    <td className="p-4 text-center text-[#FF6B35]">R$ 97,99</td>
                    <td className="p-4 text-center text-yellow-500">R$ 249,99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* POR QUE O PREÇO? */}
        <ScrollReveal animation="fade-up" delay={500}>
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