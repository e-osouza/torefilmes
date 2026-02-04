const Resultados = () => {
    const cardInfo = [
      {
        image: "/img-card-resultados-1.png",
        titulo: "Autoridade",
        desc: "Sua marca passa mais confiança.",
        color: "#005AFF",
      },
      {
        image: "/img-card-resultados-2.png",
        titulo: "Presença",
        desc: "Você mantém consistência e não some do digital.",
        color: "#FFDB00",
      },
      {
        image: "/img-card-resultados-3.png",
        titulo: "Conversão",
        desc: "Conteúdo pensado para atrair, explicar e vender.",
        color: "#FF5348",
      },
    ]
  
    return (
      <section className="py-10 sm:py-14">
        {/* Badge */}
        <div className="mb-6 flex justify-center items-center">
          <img
            src="/bagde-tore-filmes.svg"
            alt="badge-tore"
            className="w-32 sm:w-36"
          />
        </div>
  
        {/* Título */}
        <h2 className="text-center text-lg sm:text-xl px-4">
          O que muda quando você produz com padrão alto:
        </h2>
  
        {/* Cards */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            md:grid-cols-3
            gap-10 md:gap-6
            max-w-7xl
            mx-auto
            px-4
          "
        >
          {cardInfo.map((inf, index) => (
            <div
              key={index}
              className="relative mx-auto text-center w-full max-w-[320px] md:max-w-none"
            >
              <img
                src={inf.image}
                alt="image-card"
                className="w-full rounded-2xl"
              />
  
              <h3 className="uppercase py-4 text-sm sm:text-base tracking-wide">
                {inf.titulo}
              </h3>
  
              <p className="text-sm sm:text-base text-white/80">
                {inf.desc}
              </p>
  
              {/* Linha colorida */}
              <div
                style={{ "--color": inf.color } as React.CSSProperties}
                className="
                  absolute
                  bg-[var(--color)]
                  w-[48px] sm:w-[50px]
                  h-[3px]
                  -bottom-6
                  left-1/2
                  -translate-x-1/2
                "
              />
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default Resultados
  