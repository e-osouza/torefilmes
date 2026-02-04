const Contraste = () => {
    return (
      <section className="bg-[url(/bg-8909.jpg)] bg-cover bg-center bg-no-repeat py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Coluna esquerda */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-15">
              <div>
                <h2 className="uppercase text-xl font-medium mb-2">
                  Sem estrutura, o conteúdo vira tentativa:
                </h2>
                <p className="text-sm">
                  pouco ritmo, pouca clareza e oportunidades perdidas.
                </p>
              </div>
  
              <button className="bg-white flex justify-center items-center gap-3 uppercase font-medium text-black py-3 px-6 rounded-3xl">
                <img src="/arrow-right.svg" alt="arrow" />
                Vem produzir com a Toré
              </button>
            </div>
  
            {/* Coluna direita */}
            <div className="flex flex-col items-center text-center gap-12">
              <img src="/selo.svg" className="w-24 h-24" alt="selo" />
              <p className="text-xl md:text-2xl max-w-md">
                Produza com a Toré e coloque sua marca no digital com audiovisual de alto padrão.
              </p>
            </div>
  
          </div>
        </div>
      </section>
    );
  };
  
  export default Contraste;
  