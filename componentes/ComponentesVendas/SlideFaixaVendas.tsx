const items = [
    { text: "Conteudo Digital", color: "#AAC645" },
    { text: "Vídeos Institucionais", color: "#005AFF" },
    { text: "Comerciais e Publicidade", color: "#FFDB00" },
    { text: "Fotografia", color: "#FF5348" },
  ]
  
  const SlideFaixaVendas = () => {
    const loopItems = [...items, ...items] // só 2x
  
    return (
      <section className="w-full overflow-hidden py-7">
        <div className="marquee">
          <div className="marquee__track">
            {loopItems.map((item, i) => (
              <p key={i} className="uppercase relative whitespace-nowrap pl-4 text-sm sm:text-base">
                <span
                  className="absolute left-0 top-[10px] h-[2px] w-[10px]"
                  style={{ backgroundColor: item.color }}
                />
                {item.text}
              </p>
            ))}
          </div>
  
          <div className="marquee__track" aria-hidden="true">
            {loopItems.map((item, i) => (
              <p key={`dup-${i}`} className="uppercase relative whitespace-nowrap pl-4 text-sm sm:text-base">
                <span
                  className="absolute left-0 top-[10px] h-[2px] w-[10px]"
                  style={{ backgroundColor: item.color }}
                />
                {item.text}
              </p>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default SlideFaixaVendas
  