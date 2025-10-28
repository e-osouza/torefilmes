"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function PortfolioClient() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const abrirVideo = (url: string) => {
    setVideoUrl(url);
  };

  const fecharVideo = () => {
    setVideoUrl(null);
  };

  useEffect(() => {
    document.body.style.overflow = videoUrl ? "hidden" : "auto";
  }, [videoUrl]);

  return (
    <div className="bg-black overflow-hidden">
      {/* Cabeçalho */}
      <div className="bg-[url(/bg-abstract.jpg)] bg-center bg-cover bg-no-repeat relative">
        <div className="max-w-[var(--largura)] mx-auto px-5 pt-50 pb-10 md:pt-80 md:pb-20 relative z-[1]">
          <p className="bg-white/10 w-fit mx-auto flex items-center text-white justify-center uppercase text-[12px] mb-5 py-2 px-5 gap-2 rounded-full">
            Da ideia à tela
          </p>
          <h1 className="text-white text-center uppercase leading-[1.2] text-2xl md:text-3xl max-w-[690px] mx-auto">
            Confira o que já criamos e realize seu próximo projeto com a Toré.
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* --- PORTFÓLIO --- */}

      {/* Vídeo Braga Veículos */}
      <div
        className="bg-[url(/portfolio-1.jpg)] bg-[center_top] bg-cover bg-no-repeat relative cursor-pointer group"
        onClick={() =>
          abrirVideo("https://www.youtube.com/embed/Kx8x9dY51Eg")
        }
      >
        <div className="bg-gradient-to-t from-black/90 to-black/10 w-full h-full absolute bottom-0 left-0"></div>
        <div className="max-w-[var(--largura)] mx-auto px-5 pt-70 pb-15 relative">
          <Image
            className="absolute left-1/2 top-[30%] md:top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 group-hover:scale-110"
            src="/icon-play.svg"
            width={80}
            height={80}
            alt="Play"
          />
          <div className="relative text-white">
            <h3 className="text-xl md:text-2xl leading-[1.2] uppercase max-w-[315px] mb-3">
              Braga Veículos - Portas Abertas (2020)
            </h3>
            <p className="text-sm max-w-[400px]">
              Apresentamos a vocês o novo VT da Braga Veículos para informar aos
              seus clientes que já está com a loja aberta e seguindo todas as
              recomendações de segurança das autoridades competentes.
            </p>
          </div>
        </div>
      </div>

      {/* Vídeo Samel */}
      <div
        className="bg-[url(/portfolio-2.jpg)] bg-[center_top] bg-cover bg-no-repeat relative cursor-pointer group"
        onClick={() =>
          abrirVideo("https://www.youtube.com/embed/Z1PjY05_hP0")
        }
      >
        <div className="bg-gradient-to-t from-black/90 to-black/10 w-full h-full absolute bottom-0 left-0"></div>
        <div className="max-w-[var(--largura)] mx-auto px-5 pt-70 pb-15 relative">
          <Image
            className="absolute left-1/2 top-[30%] md:top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 group-hover:scale-110"
            src="/icon-play.svg"
            width={80}
            height={80}
            alt="Play"
          />
          <div className="relative text-white">
            <h3 className="text-xl md:text-2xl leading-[1.2] uppercase max-w-[315px] mb-3">
              Samel - 350 anos de Manaus (2020)
            </h3>
            <p className="text-sm max-w-[400px]">
              Manaus fez 350 anos e produzimos, para o cliente Samel, uma linda
              homenagem ao aniversário da Cidade.
            </p>
          </div>
        </div>
      </div>

      {/* Vídeo Prefeitura de Manaus */}
      <div
        className="bg-[url(/portfolio-3.jpg)] bg-[center_top] bg-cover bg-no-repeat relative cursor-pointer group"
        onClick={() =>
          abrirVideo("https://www.youtube.com/embed/1Hy5A4d5Bi4")
        }
      >
        <div className="bg-gradient-to-t from-black/90 to-black/10 w-full h-full absolute bottom-0 left-0"></div>
        <div className="max-w-[var(--largura)] mx-auto px-5 pt-70 pb-15 relative">
          <Image
            className="absolute left-1/2 top-[30%] md:top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 group-hover:scale-110"
            src="/icon-play.svg"
            width={80}
            height={80}
            alt="Play"
          />
          <div className="relative text-white">
            <h3 className="text-xl md:text-2xl leading-[1.2] uppercase max-w-[470px] mb-3">
              Prefeitura de Manaus - Manaus 350 anos: #lindaquesóela (2020)
            </h3>
            <p className="text-sm max-w-[500px]">
              Em homenagem aos 350 anos da nossa cidade, produzimos um VT para a
              Prefeitura com imagens em cenários famosos de Manaus, um casting
              que traduz toda a riqueza do nosso povo e visitantes e um jingle
              alegre e colorido exaltando todos os nossos costumes e beleza.
            </p>
          </div>
        </div>
      </div>

      {/* Modal de vídeo */}
      {videoUrl && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={fecharVideo}
        >
          <div
            className="relative w-[95%] md:w-[90%] lg:w-[80%] aspect-video animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={fecharVideo}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 cursor-pointer"
            >
              <X size={32} />
            </button>
            <iframe
              className="w-full h-full rounded-lg"
              src={`${videoUrl}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}