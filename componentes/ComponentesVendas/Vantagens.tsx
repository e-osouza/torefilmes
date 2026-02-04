'use client'

const Vantagens = () => {
  const cardInfo = [
    {
      id: 1,
      icone: "/card-vantagens-1.svg",
      titulo: "Direção que destrava",
      desc: "Você sabe o que falar e como falar, com condução e teleprompter."
    },
    {
      id: 2,
      icone: "/icon-tab-3.svg",
      titulo: "Estrutura que sustenta",
      desc: "Estúdio próprio, cenários montáveis e equipamentos de alto padrão."
    },
    {
      id: 3,
      icone: "/card-vantagens-3.svg",
      titulo: "Equipe que entrega",
      desc: "Profissionais qualificados do início ao fim: produção, captação, edição e finalização."
    },
  ]

  return (
    <section
      className="
        relative
        py-12 sm:py-16
        bg-[url(/fundo-hero-vendas.png)]
        bg-cover
        bg-center
        bg-no-repeat
      "
    >
      {/* Badge */}
      <div className="flex justify-center items-center mb-6">
        <img
          src="/bagde-tore-filmes.svg"
          alt="tore-filmes"
          className="w-36 sm:w-40"
        />
      </div>

      {/* Título */}
      <h2 className="text-white text-center text-2xl sm:text-3xl leading-tight px-4">
        Quando sua comunicação não anda,
        <br />
        <span className="font-bold">
          o problema é o posicionamento
        </span>
      </h2>

      {/* Cards */}
      <div
        className="
          mt-10
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          md:grid-cols-3
          gap-4 sm:gap-6
          px-4
          text-white
        "
      >
        {cardInfo.map((info) => (
          <div
            key={info.id}
            className="
              border border-white/20
              rounded-xl
              p-6 py-8

              bg-white/5
              backdrop-blur-[11.12px]

              flex flex-col
              items-center
              text-center

              hover:bg-white/10
              transition
            "
          >
            <div className="flex justify-center items-center mb-4">
              <img src={info.icone} alt="icone" className="w-10 h-10" />
            </div>

            <h3 className="uppercase mb-3 font-semibold tracking-wide">
              {info.titulo}
            </h3>

            <p className="text-sm text-white/80 leading-relaxed">
              {info.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Texto de apoio */}
      <p className="text-center text-sm text-white/80 max-w-2xl mx-auto px-4 mt-8">
        A Toré entrega estrutura, direção e execução para você gravar com segurança
        e manter presença no digital.
      </p>

      {/* CTA */}
      <div className="flex justify-center items-center mt-10">
        <button
          className="
            flex items-center gap-3
            font-medium text-black uppercase
            px-6 py-3
            rounded-3xl
            bg-white
            cursor-pointer
            transition
          "
        >
          <img src="/arrow-right.svg" alt="icone" className="w-5 h-5" />
          Vem produzir com a Toré
        </button>
      </div>
    </section>
  )
}

export default Vantagens
