import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Mentor: React.FC = () => {
    return (
        <section className="bg-black py-24 border-t border-neutral-900 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6B35]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Text Content */}
                    <ScrollReveal animation="fade-right">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-[#FF6B35] font-bold tracking-[0.2em] text-sm uppercase mb-4">QUEM SERÁ SEU MENTOR</h3>
                                <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">Marcelo Anders</h2>
                                <p className="text-[#FF6B35] text-lg md:text-xl font-medium mt-2">Especialista em AI Agents & Automação Low-Code</p>
                            </div>

                            <div className="space-y-4 text-gray-400 text-base md:text-lg leading-relaxed">
                                <p>
                                    Marcelo Anders dominou N8N e todos os frameworks de automação nos últimos 2 anos construindo sistemas reais no mercado. Mas em 2026, ele não está mais focado em implementações — descobriu algo maior: a metodologia exata para escalar operações com IA sem depender de código complexo ou equipes técnicas.
                                </p>
                                <p>
                                    Enquanto a maioria ainda tenta entender as ferramentas básicas, Marcelo já identificou o caminho para transformar automações simples em máquinas de vendas que operam 24/7.
                                </p>
                                <p>
                                    Este bootcamp não é sobre aprender "mais uma ferramenta". É sobre dominar a nova metodologia de 2026 que separa quem vai apenas sobreviver de quem vai escalar de verdade. Marcelo vai te mostrar exatamente como estruturar AI Agents que não só automatizam tarefas, mas criam sistemas completos de vendas, atendimento e entrega.
                                </p>
                                <p className="border-l-2 border-[#FF6B35] pl-4 italic">
                                    Se você quer parar de perder tempo com implementações que não escalam e aprender o método que está fazendo empresas crescerem exponencialmente com IA, você está no lugar certo.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Image Column */}
                    <ScrollReveal animation="fade-left" delay={200}>
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6B35] to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
                                <img
                                    src="/foto_marcelo.JPG"
                                    alt="Marcelo Anders"
                                    className="w-full h-full object-cover object-center transform transition duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </section>
    );
};
