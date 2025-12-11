"use client";
import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Muito além da produção de vídeos",
    answer:
      "Cada projeto é uma parceria. Mais que fornecedores, somos aliados estratégicos no desenvolvimento e execução de conteúdos, coproduções e suporte em comunicação, gerando impacto e resultados duradouros.",
  },
  {
    question: "Qualidade e agilidade que geram confiança",
    answer:
      "Nosso compromisso vai além da entrega: unimos excelência e rapidez para fortalecer marcas, consolidar parcerias e manter nossa posição como referência no mercado.",
  },
  {
    question: "Experiência e criatividade que transformam histórias",
    answer: "Nossa equipe de diretores, produtores, editores e técnicos de som e imagem combina experiência e inovação para transformar ideias em resultados de alto impacto.",
  },
  {
    question: "Equipamentos modernos",
    answer: "Investimos continuamente em equipamentos de filmagem, iluminação e edição de última geração, assegurando qualidade superior e resultados marcantes em cada projeto.",
  },
];

export default function Faq() {
  // 👉 Deixa a primeira pergunta aberta por padrão
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full">
      <div className="space-y-4">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`bg-black rounded-lg border overflow-hidden transition-all duration-300 ${
                isOpen ? "border-white" : "border-white/30"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-4 py-3 font-medium text-white flex justify-between items-center cursor-pointer"
              >
                {item.question}
                <span className="text-xl">{isOpen ? "−" : "+"}</span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="mx-5 pb-5 text-[#8D8D8D] text-sm leading-[1.4] mb-5 relative">
                  {item.answer}
                  <div className="absolute bottom-0 left-0 bg-[var(--azul)] h-[3px] w-20 z-1"></div>
                  <div className="absolute bottom-0 left-0 bg-[#8D8D8D] h-[1px] w-full"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}