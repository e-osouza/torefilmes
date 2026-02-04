const bullets = [
  { label: "Alinhamento", color: "#FFDB00" },
  { label: "gravação dirigida", color: "#005AFF" },
  { label: "pós-produção completa ", color: "#FF5348" },
]

const Diferenciais = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center overflow-hidden">
        {/* IMAGEM */}
        <div className="relative overflow-hidden">
          <img
            src="/mascara-vantagens.svg"
            alt="mascara"
            className="
                w-full
                max-w-[520px]
                mx-auto
                md:mx-0
               -mb-70  sm:-mb-50 md:-mb-55
              "
          />
        </div>

        {/* TEXTO */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <img
            src="/bagde-tore-filmes.svg"
            alt="icone"
            className="mb-4 w-36 sm:w-40 mx-auto md:mx-0"
          />

          <p className="text-white text-base sm:text-lg lg:text-xl font-extralight leading-relaxed">
            Transformamos sua ideia em{" "}
            <span className="font-extrabold">
              vídeos claros, profissionais e prontos para publicar.
            </span>
          </p>

          <div className="mt-6 space-y-3 text-left mx-auto md:mx-0 w-full max-w-[420px]">
            {bullets.map((b, i) => (
              <p
                key={i}
                className="
                    uppercase
                    relative
                    pl-4
                    py-2
                    text-sm sm:text-base
                    tracking-wide
                    text-white
                  "
              >
                <span
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-[5px] h-[28px] rounded-full"
                  style={{ backgroundColor: b.color }}
                />
                {b.label}
              </p>
            ))}
          </div>

          <div className="mt-6 flex justify-center md:justify-start">
            <button
              className="
                  flex items-center justify-center gap-3
                  font-medium text-black uppercase
                  rounded-3xl bg-white cursor-pointer
                  w-full max-w-[320px] sm:w-auto
                  py-3 px-6
                "
            >
              <img src="/arrow-right.svg" alt="seta" className="h-5 w-5 sm:h-6 sm:w-6" />
              Vem produzir com a Toré
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Diferenciais
