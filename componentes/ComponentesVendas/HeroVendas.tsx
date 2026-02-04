const HeroVendas = () => {
    return (
      <section
        className="
          relative
          overflow-hidden
  
          h-[85vh] sm:h-[80vh] lg:h-[80vh]
          bg-[url(/fundo-hero-vendas.png)]
          bg-no-repeat
          bg-[length:100%_45%] sm:bg-[length:100%_50%]
          bg-[position:center_top]
        "
      >
        {/* CAMADA: banner de baixo + overlay */}
        <div className="absolute inset-x-0 bottom-0 h-[58%] sm:h-[60%] z-0">
          <div
            className="
              absolute inset-0
              bg-[url(/banner-hero-vendas.png)]
              bg-no-repeat
              bg-[position:center_bottom]
              bg-cover
            "
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
  
        {/* VECTOR TOPO */}
        <div
          className="
            pointer-events-none
            absolute top-0 -right-28 sm:-right-40 lg:-right-55
            w-[220px] h-[140px] sm:w-[280px] sm:h-[170px] lg:w-[350px] lg:h-[200px]
            bg-[url(/vector-hero-vendas.svg)]
            bg-no-repeat bg-contain
            z-10
          "
        />
  
        {/* VECTOR BASE */}
        <div
          className="
            pointer-events-none
            absolute bottom-0 left-0
            w-[240px] h-[160px] sm:w-[320px] sm:h-[210px] lg:w-[390px] lg:h-[240px]
            bg-[url(/vector-hero-vendas-bottom.svg)]
            bg-no-repeat bg-contain
            z-10
          "
        />
  
        {/* CONTEÚDO CENTRALIZADO */}
        <div className="relative z-20 h-full flex items-center justify-center px-4">
          <div className="max-w-2xl lg:max-w-7xl mx-auto text-center">
            <div className="flex justify-center items-center w-full mb-5 sm:mb-6">
              <img
                src="/logotore.svg"
                alt="logo-tore"
                className="h-8 sm:h-10 lg:h-12"
              />
            </div>
  
            <h2
              className="
                relative
                leading-tight
                mb-6 sm:mb-8
  
                text-3xl sm:text-4xl lg:text-5xl
                text-white
                after:content-['']
                after:absolute
                after:bg-[url(/selo.svg)]
                after:bg-cover
                after:bg-center
                after:bg-no-repeat
                after:z-10
  
                after:w-[72px] after:h-[72px]
                after:-top-20 after:right-2
  
                sm:after:w-[96px] sm:after:h-[96px]
                sm:after:-top-22 sm:after:right-4
  
                lg:after:w-[120px] lg:after:h-[120px]
                lg:after:-top-6 lg:after:-right-25
              "
            >
              Grave o conteúdo do seu
              <br />
              <span className="font-bold">mês inteiro em apenas 1 dia</span>
            </h2>
  
            <p className="text-white mb-10 sm:mb-12 text-base sm:text-lg lg:text-2xl">
              Saia do perfil parado e ganhe constância com
              <br />
              direção, captação e entrega final da Toré.
            </p>
  
            <div className="flex justify-center items-center">
              <button
                className="
                  flex items-center justify-center gap-3
                  font-medium text-black uppercase
                  rounded-3xl bg-white cursor-pointer
                  hover:scale-105 transition
  
                  w-full max-w-[320px] sm:w-auto
                  py-3 px-6
                "
              >
                <img src="/arrow-right.svg" alt="seta" className="h-6 w-6" />
                Vem produzir com a Toré
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default HeroVendas
  