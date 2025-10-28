import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Toré Filmes",
  description: "aperte o play no conhecimento e explore nossos artigos.",
  openGraph: {
    title: "Blog - Toré Filmes",
    images: "./bg-3223.jpg",
  },
};

export default function Blog() {
    return (
        <div className="bg-black overflow-hidden">

            {/*hero*/}
            <div className="bg-[url(/bg-abstract.jpg)] bg-center bg-cover bg-no-repeat relative">
                <div className="max-w-[var(--largura)] mx-auto px-5 pt-50 pb-10 md:pt-80 md:pb-20 relative z-[1]">
                    <h1 className="text-white text-center uppercase leading-[1.2] text-2xl md:text-3xl max-w-[580px] mx-auto">Aperte o play no conhecimento e explore nossos artigos</h1>
                    <p className="max-w-[750px] mx-auto text-white text-center text-sm mt-5">Muito além das câmeras, este espaço reúne insights sobre audiovisual, comunicação e criatividade, com dicas, tendências e bastidores que mostram como o audiovisual transforma negócios e conecta pessoas.</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-full bg-linear-to-t from-black/60 to-black/10"></div>
            </div>

            {/*section posts*/}
            <div className="max-w-[var(--largura)] mx-auto px-5"></div>

        </div>
    )
}