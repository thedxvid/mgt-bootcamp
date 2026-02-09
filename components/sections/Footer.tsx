import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ShinyButton } from '../ui/ShinyButton';
import { ScrollReveal } from '../ui/ScrollReveal';

const AccordionItem = ({ title, content }: { title: string, content: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-neutral-800">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base md:text-lg font-medium text-white group-hover:text-[#FF6B35] transition-colors pr-4">{title}</span>
        {isOpen ? <ChevronUp className="text-[#FF6B35] shrink-0" /> : <ChevronDown className="text-gray-500 shrink-0" />}
      </button>
      {isOpen && (
        <div className="pb-6 text-gray-400 leading-relaxed text-sm md:text-base animate-fadeIn">
          {content}
        </div>
      )}
    </div>
  );
};

export const Footer: React.FC = () => {
  const faqs = [
    {
      title: "Não tenho experiência vendendo. Ainda posso fazer isso?",
      content: "Sim. Na verdade, a maioria dos melhores vendedores de IA que conheço NUNCA tinha vendido nada antes. Eles só aplicaram o framework. Conhecimento técnico você já tem — vamos ensinar a parte comercial."
    },
    {
      title: "Preciso saber programar ou ser expert em N8N?",
      content: "Não. Pessoas que NÃO sabem N8N estão faturando mais do que experts técnicos. Por quê? Porque elas sabem VENDER. O bootcamp ensina justamente isso: vender a solução (você pode terceirizar a entrega depois)."
    },
    {
      title: "Quanto tempo preciso me comprometer?",
      content: "3 noites de 2 horas (18h-20h nos dias 27, 28/02 e 01/03). Se você não pode participar ao vivo, terá acesso às gravações vitalícias."
    },
    {
      title: "E se eu não puder participar ao vivo?",
      content: "Tudo fica gravado. Você terá acesso vitalício para assistir quando quiser. Mas recomendamos FORTEMENTE participar ao vivo para fazer as tarefas práticas e ter suas dúvidas respondidas."
    },
    {
      title: "Isso funciona no meu país/cidade?",
      content: "Sim. O método funciona para empresas locais (restaurantes, clínicas, escritórios) e empresas online (e-commerces, infoprodutores, agências). Você escolhe onde quer atuar."
    },
    {
      title: "Vou conseguir vender logo após o bootcamp?",
      content: "Se você APLICAR o que ensinamos (escolher nicho, prospectar, usar os scripts), sim. Temos alunos que fecharam a primeira venda em menos de 7 dias após o bootcamp. Mas depende de VOCÊ tomar ação."
    },
    {
      title: "Preciso de dinheiro para começar (anúncios, ferramentas)?",
      content: "Não. Ensinamos prospecção ativa (orgânica) que não gasta 1 real. As ferramentas que você precisa são gratuitas ou têm versões free suficientes para começar."
    }
  ];

  return (
    <footer className="bg-black pt-24 pb-12 border-t border-neutral-900">
      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-4 mb-24">
        <ScrollReveal animation="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">Perguntas Frequentes</h2>
          <div className="space-y-2">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} title={faq.title} content={faq.content} />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal animation="scale-up" delay={200}>
          <div className="mt-12 text-center">
            <ShinyButton withIcon>GARANTIR MINHA VAGA AGORA</ShinyButton>
          </div>
        </ScrollReveal>
      </div>

      {/* LEGAL FOOTER */}
      <div className="max-w-7xl mx-auto px-4 pt-12 border-t border-neutral-900 text-center">
        <p className="text-[#FF6B35] font-bold text-xl mb-4 tracking-tighter">MGT ACADEMY</p>
        <div className="text-gray-600 text-xs space-y-4 max-w-4xl mx-auto">
          <p>
            AVISO LEGAL: Os números de vendas declarados acima são resultados de nossa operação e de alguns dos nossos alunos mais bem-sucedidos. Por favor, entenda que meus resultados não são típicos, não estou implicando que você os duplicará. Seus resultados variarão e dependerão de muitos fatores, incluindo, mas não se limitando ao seu histórico, experiência e ética de trabalho.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 pt-4">
            <a href="#" className="hover:text-white transition-colors py-2">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors py-2">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors py-2">Suporte</a>
          </div>
          <p className="pt-4">&copy; {new Date().getFullYear()} MGT Academy. Todos os Direitos Reservados.</p>
        </div>
      </div>
    </footer>
  );
};