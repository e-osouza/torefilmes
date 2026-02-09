const EntregaTore = () => {
  return (
    <section className="overflow-hidden relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* TEXTO */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-4 sm:mb-6 text-white">
            Grave o conteúdo do seu mês inteiro em apenas 1 dia
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-white/90 mb-6 sm:mb-8">
            Saia do perfil parado e ganhe constância com direção, captação e
            entrega final da Toré.
          </p>

          <div className="flex justify-center lg:justify-start">
            <a href="#form">
              <button
                className="
                  cursor-pointer bg-white text-black
                  uppercase font-medium
                  flex items-center gap-3
                  py-3 sm:py-4 px-6 sm:px-8
                  rounded-3xl
                  transition hover:scale-105
                "
              >
                <img src="/arrow-right.svg" alt="arrow" className="h-5 w-5" />
                Vem produzir com a Toré
              </button>
            </a>
          </div>
        </div>

        {/* MOCKUP */}
        <div className="relative flex justify-center">
          {/* glow atrás (opcional) */}
          <div
            className="
              pointer-events-none absolute
              -inset-6
              rounded-[40px]
              bg-white/10 blur-2xl
              opacity-40
            "
          />

          <img
            src="/mockup-instagram.jpeg" // <-- coloque essa imagem no /public com esse nome
            alt="Mockup Instagram Toré Filmes"
            className="
              relative
              w-[200px] sm:w-[240px] lg:w-[300px]
              rounded-[28px]
              shadow-2xl
              rotate-[10deg]
              translate-y-2
              lg:translate-y-6
              lg:translate-x-6
              border border-white/10
            "
            draggable={false}
          />
        </div>
      </div>
    </section>
  )
}

export default EntregaTore
