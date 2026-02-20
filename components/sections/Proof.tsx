import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { ShinyButton } from '../ui/ShinyButton';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Proof: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    {
      name: "Jean",
      role: "Mentorado",
      quote: "O nivel de conexões que eu adquiri estando junto com o Marcelo já fez a mentoria se pagar antes mesmo de começar",
      videoId: "DTOfGEgXki4"
    },
    {
      name: "Alisson",
      role: "Cliente Arsenal de Vendas",
      quote: "O mercado está carente de pessoas boas e de tudo que eu vi o seu conteúdo é o melhor",
      videoId: "wsF5iiJR58c"
    },
    {
      name: "Yuri",
      role: "Mentorado",
      quote: "Entrei na comunidade e foi um divisor de águas, abriu completamente os meus olhos. Muito mão na massa.",
      videoId: "FdWLnpq0PEo"
    },
    {
      name: "Guilherme",
      role: "Mentorado",
      quote: "A comunidade e a mentoria do Marcelo mudou a minha vida. Depois de 1 mês deu 10 mil reais",
      videoId: "vZ9JApgf2FM"
    },
    {
      name: "Lucas",
      role: "Mentorado",
      quote: "A mentoria já estava paga porque o projeto estava vendido. Minha confiança aumentou e minha vida mudou.",
      videoId: "YFQ7g9cTFJQ"
    },
    {
      name: "Aluno",
      role: "Aluno da Comunidade",
      quote: "Nada se compara a experiência e o acompanhamento que vocês entregam",
      videoId: "FjPu6mSPNgg"
    }
  ];

  return (
    <>
      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#FF6B35] transition-colors"
            onClick={() => setActiveVideo(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              className="w-full h-full rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <section className="bg-black py-24 overflow-hidden">
        {/* TESTIMONIALS SECTION */}
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col items-center justify-center mb-12">
              <h2 className="text-center text-3xl md:text-5xl font-bold mb-4 text-white">
                Resultados Reais de <span className="text-[#FF6B35] italic">Quem Aplicou</span>
              </h2>
              <p className="text-center text-gray-400 max-w-2xl text-lg">
                Essas são pessoas que tinham conhecimento técnico, mas não sabiam vender. Veja a transformação.
              </p>
            </div>
          </ScrollReveal>

          {/* Video Testimonials */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {videos.map((video, i) => (
                <div
                  key={i}
                  onClick={() => setActiveVideo(video.videoId)}
                  className="relative group cursor-pointer block"
                >
                  <div className="aspect-video bg-neutral-900 rounded-xl border border-neutral-800 overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                      alt={`Depoimento de ${video.name}`}
                      loading="lazy"
                      decoding="async"
                      width={480}
                      height={360}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-[#FF6B35] rounded-full p-4 group-hover:scale-110 transition-transform shadow-lg">
                        <Play className="w-6 h-6 text-white fill-white" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-white font-semibold">{video.name} <span className="text-gray-500 font-normal text-sm">• {video.role}</span></p>
                    <p className="text-gray-400 text-sm mt-1 line-clamp-2">"{video.quote}"</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <div className="mt-8 text-center">
            <ScrollReveal animation="scale-up">
              <ShinyButton withIcon>QUERO RESULTADOS ASSIM</ShinyButton>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};