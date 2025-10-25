import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <div className="overflow-hidden">
      
      {/*hero section*/}
      <div className="bg-[url(/hero-banner.jpg)] bg-cover bg-top bg-no-repeat">
        <div className="max-w-[var(--largura)] mx-auto px-5 relative aspect-10/9 md:aspect-10/7">
          <div className="absolute px-5 left-0 bottom-10 md:bottom-20 w-full">
            <h1 className="text-white text-3xl md:text-6xl uppercase mx-auto table max-w-[750px] text-center">Transformando marcas com impacto</h1>
          </div>
        </div>
      </div>

      <div className="max-w-[var(--largura)] mx-auto px-5 -mt-5 md:-mt-12 flex justify-end">
        <Image className="selo" src={"/selo.svg"} width={100} height={100} alt="Toré"/>
      </div>

      {/*section 2*/}
      <div className="relative">
        <div className="max-w-[var(--largura)] mx-auto px-5">
          <div className="grid items-center grid-cols-2 gap-5">
            <div className="col-span-2 md:col-span-1">
              <Image src={"/mask-1.png"} width={700} height={700} alt="toré"></Image>
            </div>
            <div className="col-span-2 md:col-span-1 text-white">
              <h3 className="uppercase text-2xl leading-[1.2]">Somos a<br/>Toré Filmes</h3>
              <p className="text-sm my-5 max-w-[450px]">A maior produtora de vídeo da região Norte, referência em qualidade, inovação e impacto audiovisual. Somos especialistas em produções publicitárias, institucionais e conteúdos para a internet, transformando ideias em narrativas visuais que fortalecem marcas e impulsionam negócios.</p>
              <div className="flex gap-5 items-center uppercase text-sm">
                <p>+16 anos de experiência</p>
                <p>+100 produções de impacto</p>
              </div>
              <Link href={"/sobre"} className="flex gap-2 items-center rounded-full border-2 w-fit uppercase font-[600] text-sm px-6 py-1 mt-5"><MoveRight/>Saiba+</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
