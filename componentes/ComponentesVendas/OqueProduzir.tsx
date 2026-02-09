'use client'

import { Video, GraduationCap, Share2, Radio } from 'lucide-react'

const OQueProduzir = () => {
  const conteudos = [
    {
      id: 1,
      titulo: "Vídeos Institucionais e Corporativos",
      desc: "Apresente sua empresa com clareza e autoridade.",
      icon: Video,
    },
    {
      id: 2,
      titulo: "Treinamentos e Cursos",
      desc: "Gravamos e organizamos treinamentos, cursos e aulas para padronizar comunicação e reduzir falhas na comunicação.",
      icon: GraduationCap,
    },
    {
      id: 3,
      titulo: "Pacote para Redes Sociais",
      desc: "Conteúdos para seu formato gravados em um dia com padrão profissional.",
      icon: Share2,
    },
    {
      id: 4,
      titulo: "Eventos e Transmissões ao Vivo",
      desc: "Cobertura completa e transmissão segura durante o evento e pós produção.",
      icon: Radio,
    },
  ]

  return (
    <section
      className="
        relative
        py-12 sm:py-16 lg:py-20
        bg-[url(/fundo-hero-vendas.png)]
        bg-cover bg-center bg-no-repeat
      "
    >
      {/* Badge */}
      <div className="flex justify-center items-center mb-6 sm:mb-8">
        <img
          src="/bagde-tore-filmes.svg"
          alt="tore-filmes"
          className="h-10 sm:h-12 w-auto"
        />
      </div>

      {/* Título */}
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl leading-tight font-medium">
          O que sua empresa pode produzir com a Toré:
        </h1>
        <p className="mt-3 sm:mt-4 text-white/80 text-base sm:text-lg leading-relaxed">
          Escolha o formato ideal e saia com conteúdo pronto para publicar com padrão profissional.
        </p>
      </div>

      {/* Cards (posicionamento padrão, igual você queria) */}
      <div
        className="
          mt-10 sm:mt-12
          max-w-7xl mx-auto
          grid grid-cols-1 sm:grid-cols-2
          gap-4 sm:gap-6
          px-4
          text-white
        "
      >
        {conteudos.map((item) => {
          const Icon = item.icon

          return (
            <div
              key={item.id}
              className="
                border border-white/20
                rounded-xl
                p-6 sm:p-7
                bg-white/5
                backdrop-blur-[11.12px]
                hover:bg-white/10
                transition
              "
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[yellow]" strokeWidth={1.5} />
                </div>

                <h3 className="uppercase font-semibold tracking-wide text-sm sm:text-base text-left">
                  {item.titulo}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed text-left">
                {item.desc}
              </p>
            </div>
          )
        })}
      </div>

      {/* CTA */}
      <div className="flex justify-center items-center mt-10 sm:mt-12 px-4">
        <a href="#form" className="w-full sm:w-auto">
          <button
            className="
              w-full sm:w-auto
              flex items-center justify-center gap-3
              font-medium text-black uppercase
              px-6 sm:px-8 py-3 sm:py-4
              rounded-3xl
              bg-white
              cursor-pointer
              transition
              hover:scale-105
            "
          >
            <img src="/arrow-right.svg" alt="icone" className="w-5 h-5" />
            Vem produzir com a Toré
          </button>
        </a>
      </div>
    </section>
  )
}

export default OQueProduzir
