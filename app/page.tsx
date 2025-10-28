import Faq from "@/componentes/faq";
import { Tab, Tabs } from "@/componentes/tabs";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
            <div className="col-span-2 md:col-span-1 relative">
              <Image src={"/mask-1.png"} width={700} height={700} alt="toré"></Image>
              <div className="absolute bottom-0 left-[60px] w-[80px] text-right h-[15px] bg-[var(--vermelho)]"></div>
            </div>
            <div className="col-span-2 md:col-span-1 text-white mb-10 md:mb-0">
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

      {/*section 3*/}
      <div className="max-w-[var(--largura)] mx-auto px-0 md:px-5">
        <div className="grid grid-cols-10 items-center">
          <h3 className="col-span-5 md:col-span-6 uppercase text-sm text-white max-w-[300px] ml-5 xl:ml-0">Narrativas visuais que transformam marcas</h3>
          <div className="col-span-5 md:col-span-4 flex justify-center py-6 bg-[url(/icon-yellow.svg)] bg-[200%_auto] md:bg-[140%_auto] bg-center bg-no-repeat">
            <p className="text-black ml-5 text-dm leading-[1.2] max-w-[140px]">em experiências de impacto</p>
          </div>
        </div>
      </div>

      {/*section 4*/}
      <div className="max-w-[var(--largura)] mx-auto px-0 md:px-5 mb-15">
        <div className="grid grid-cols-2">
          <div className="bg-[url(/p-home-1.jpg)] bg-cover bg-center bg-no-repeat aspect-10/7 md:aspect-10/5 flex items-center relative">
            <div className="bg-black/30 w-full h-full absolute left-0 top-0"></div>
            <Image className="mx-auto z-[1]" src={"/icon-play-2.svg"} width={45} height={45} alt=""/>
          </div>
          <div className="bg-[url(/p-home-2.jpg)] bg-cover bg-center bg-no-repeat aspect-10/7 md:aspect-10/5 flex items-center relative">
            <div className="bg-black/30 w-full h-full absolute left-0 top-0"></div>
            <Image className="mx-auto z-[1]" src={"/icon-play-2.svg"} width={45} height={45} alt=""/>
          </div>
          <div className="bg-[url(/p-home-3.jpg)] bg-cover bg-center bg-no-repeat aspect-10/7 md:aspect-10/5 flex items-center relative">
            <div className="bg-black/30 w-full h-full absolute left-0 top-0"></div>
            <Image className="mx-auto z-[1]" src={"/icon-play-2.svg"} width={45} height={45} alt=""/>
          </div>
          <div className="bg-[url(/p-home-4.jpg)] bg-cover bg-center bg-no-repeat aspect-10/7 md:aspect-10/5 flex items-center relative">
            <div className="bg-black/30 w-full h-full absolute left-0 top-0"></div>
            <Image className="mx-auto z-[1]" src={"/icon-play-2.svg"} width={45} height={45} alt=""/>
          </div>
          <div className="bg-[url(/p-home-5.jpg)] bg-cover bg-center bg-no-repeat aspect-10/7 md:aspect-10/5 flex items-center relative">
            <div className="bg-black/30 w-full h-full absolute left-0 top-0"></div>
            <Image className="mx-auto z-[1]" src={"/icon-play-2.svg"} width={45} height={45} alt=""/>
          </div>
          <div className="bg-[url(/p-home-6.jpg)] bg-cover bg-center bg-no-repeat aspect-10/7 md:aspect-10/5 flex items-center relative">
            <div className="bg-black/30 w-full h-full absolute left-0 top-0"></div>
            <Image className="mx-auto z-[1]" src={"/icon-play-2.svg"} width={45} height={45} alt=""/>
          </div>
        </div>
        <Link href={"/portfolio"} className="flex gap-2 items-center mx-auto text-white rounded-full border-2 w-fit uppercase font-[600] text-sm px-6 py-1 mt-5"><MoveRight/>Confira outros projetos</Link>
      </div>

      {/*section 5*/}
      <div className="max-w-[var(--largura)] mx-auto px-5">
        <h3 className="uppercase text-2xl leading-[1.2] text-white text-center max-w-[450px] mx-auto mb-10">Conheça a estrutura por trás das nossas produções</h3>

        <div className="bg-[url(/bg-64735.jpg)] bg-center bg-cover bg-no-repeat relative rounded-[10px] mb-10">
            <div className="bg-linear-30 from-black/70 to-black/10 w-full h-full px-10 pb-10 pt-50">
              <p className=" bg-white/10 w-fit flex items-center text-white justify-center uppercase text-[12px] mb-2 py-2 px-5 gap-2 rounded-full">Toré Filmes <Image src={"/icone-tore.svg"} width={20} height={20} alt=""/></p>
              <h3 className="text-white uppercase text-xl max-w-[250px]">A maior estrutura de produção de Manaus</h3>
            </div>
        </div>

        <div className="grid grid-cols-12 gap-5 md:gap-10 items-center mb-10">
          <div className="col-span-7 aspect-10/7 md:aspect-10/4 overflow-hidden rounded-[10px]">
            <Image className="object-center object-cover w-full h-full" src={"/s5-1.jpg"} width={700} height={700} alt=""/>
          </div>
          <div className="col-span-5 text-white">
            <h3 className="text-md md:text-lg leading-[1.2] max-w-[220px] mb-2">Estúdio completo com equipamentos de última geração</h3>
            <div className="w-[60px] h-[10px] bg-[var(--azul)]"></div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5 md:gap-10 items-center mb-10">
          <div className="col-span-5 text-white ml-0 lg:ml-15">
            <h3 className="text-md md:text-lg leading-[1.2] max-w-[220px] mb-2">Equipe fixa de 30 profissionais</h3>
            <div className="w-[60px] h-[10px] bg-[var(--azul)]"></div>
          </div>
          <div className="col-span-7 aspect-10/7 md:aspect-10/4 overflow-hidden rounded-[10px]">
            <Image className="object-center object-cover w-full h-full" src={"/s5-2.jpg"} width={700} height={700} alt=""/>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5 md:gap-10 items-center mb-10">
          <div className="col-span-7 aspect-10/7 md:aspect-10/4 overflow-hidden rounded-[10px]">
            <Image className="object-center object-cover w-full h-full" src={"/s5-3.jpg"} width={700} height={700} alt=""/>
          </div>
          <div className="col-span-5 text-white">
            <h3 className="text-md md:text-lg leading-[1.2] max-w-[220px] mb-2">Estúdio completo com equipamentos de última geração</h3>
            <div className="w-[60px] h-[10px] bg-[var(--azul)]"></div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5 md:gap-10 items-center mb-10">
          <div className="col-span-5 text-white ml-0 lg:ml-15">
            <h3 className="text-md md:text-lg leading-[1.2] max-w-[250px] mb-2">salas de edição e pós-produção equipadas com tecnologia avançada</h3>
            <div className="w-[60px] h-[10px] bg-[var(--azul)]"></div>
          </div>
          <div className="col-span-7 aspect-10/7 md:aspect-10/4 overflow-hidden rounded-[10px]">
            <Image className="object-center object-cover w-full h-full" src={"/s5-4.jpg"} width={700} height={700} alt=""/>
          </div>
        </div>

        <Link href={"/contato"} className="flex gap-2 items-center mx-auto text-white rounded-full border-2 w-fit uppercase font-[600] text-sm px-6 py-1 mt-5"><MoveRight/>Vem produzir com a Toré</Link>

      </div>

      {/*section 6*/}
      <div className="bg-[url(/bg-abstract-2.jpg)] bg-cover bg-center bg-no-repeat mt-10 h-[350px] md:h-[500px] flex items-center justify-center">
        <Image className="w-[150px] md:w-[200px]" src={"/logotore.svg"} width={200} height={200} alt=""/>
      </div>

      {/*section 7*/}
      <div className="bg-[url(/bg-3223.jpg)] bg-cover bg-center bg-no-repeat relative h-[350px] md:h-[500px]">
        <div className="max-w-[var(--largura)] mx-auto px-5">
          <div className="absolute bottom-10 z-[1]">
            <p className=" bg-white/10 w-fit flex items-center text-white justify-center uppercase text-[12px] mb-2 py-2 px-5 gap-2 rounded-full">Toré Filmes <Image src={"/icone-tore.svg"} width={20} height={20} alt=""/></p>
            <h3 className="text-white text-xl max-w-[250px]">Direção de<br/>fotografia</h3>
          </div>
          <div className="bg-linear-30 from-black/40 to-black/10 w-full h-full absolute left-0 top-0"></div>
        </div>
      </div>

      {/*section 8*/}
      <div className="bg-[url(/bg-6780.jpg)] bg-cover bg-center bg-no-repeat relative py-15">
        <div className="absolute top-0 left-0 w-[50%] text-right h-[15px] bg-[var(--verde)]"></div>
        <div className="max-w-[var(--largura)] mx-auto px-5">
          <h3 className="uppercase text-2xl leading-[1.2] text-white text-center max-w-[450px] mx-auto mb-4">Do institucional ao conteúdo para redes sociais</h3>
          <p className=" bg-white/10 w-fit text-white uppercase text-[12px] mx-auto mb-8 py-1 px-3 gap-2 rounded-full">O formato ideal para cada tipo de negócio</p>

          <Tabs>
            <Tab label="Distrito Industrial e grandes Empresas">
              <div className="grid grid-cols-2 gap-5 mx-auto max-w-[600px]">
                <div className="bg-white/15 hover:bg-white text-white hover:text-black p-6 rounded-lg border-1 border-white transition-all">
                  <Image className="mx-auto mb-3" src={"/icon-tab-1.svg"} width={50} height={50} alt=""/>
                  <p className="text-center text-sm leading-[1.2]">Vídeos institucionais de alto padrão</p>
                </div>
                <div className="bg-white/15 hover:bg-white text-white hover:text-black p-6 rounded-lg border-1 border-white transition-all">
                  <Image className="mx-auto mb-3" src={"/icon-tab-2.svg"} width={50} height={50} alt=""/>
                  <p className="text-center text-sm leading-[1.2]">Vídeos de treinamento e comunicação interna</p>
                </div>
                <div className="bg-white/15 hover:bg-white text-white hover:text-black p-6 rounded-lg border-1 border-white transition-all">
                  <Image className="mx-auto mb-3" src={"/icon-tab-3.svg"} width={50} height={50} alt=""/>
                  <p className="text-center text-sm leading-[1.2]">Cobertura de eventos corporativos e híbridos</p>
                </div>
                <div className="bg-white/15 hover:bg-white text-white hover:text-black p-6 rounded-lg border-1 border-white transition-all">
                  <Image className="mx-auto mb-3" src={"/icon-tab-4.svg"} width={50} height={50} alt=""/>
                  <p className="text-center text-sm leading-[1.2]">Produção de brand films</p>
                </div>
              </div>
            </Tab>

            <Tab label="Pequenas e médias empresas e profissionais liberais">
              <div className="grid grid-cols-2 gap-5 mx-auto max-w-[600px]">
                <div className="bg-white/15 hover:bg-white text-white hover:text-black p-6 rounded-lg border-1 border-white transition-all">
                  <Image className="mx-auto mb-3" src={"/icon-tab-5.svg"} width={50} height={50} alt=""/>
                  <p className="text-center text-sm leading-[1.2]">Comerciais para TV e digital</p>
                </div>
                <div className="bg-white/15 hover:bg-white text-white hover:text-black p-6 rounded-lg border-1 border-white transition-all">
                  <Image className="mx-auto mb-3" src={"/icon-tab-6.svg"} width={50} height={50} alt=""/>
                  <p className="text-center text-sm leading-[1.2]">Produção para campanhas de lançamento de produtos</p>
                </div>
                <div className="bg-white/15 hover:bg-white text-white hover:text-black p-6 rounded-lg border-1 border-white transition-all">
                  <Image className="mx-auto mb-3" src={"/icon-tab-7.svg"} width={50} height={50} alt=""/>
                  <p className="text-center text-sm leading-[1.2]">Planos de conteúdo recorrente (Reels, Shorts, vídeos para redes sociais)</p>
                </div>
                <div className="bg-white/15 hover:bg-white text-white hover:text-black p-6 rounded-lg border-1 border-white transition-all">
                  <Image className="mx-auto mb-3" src={"/icon-tab-8.svg"} width={50} height={50} alt=""/>
                  <p className="text-center text-sm leading-[1.2]">Vídeos institucionais expressos (low ticket, alta escala)</p>
                </div>
                <div className="bg-white/15 hover:bg-white text-white hover:text-black p-6 rounded-lg border-1 border-white transition-all">
                  <Image className="mx-auto mb-3" src={"/icon-tab-8.svg"} width={50} height={50} alt=""/>
                  <p className="text-center text-sm leading-[1.2]">Vídeos institucionais expressos (low ticket, alta escala)</p>
                </div>
                <div className="bg-white/15 hover:bg-white text-white hover:text-black p-6 rounded-lg border-1 border-white transition-all">
                  <Image className="mx-auto mb-3" src={"/icon-tab-8.svg"} width={50} height={50} alt=""/>
                  <p className="text-center text-sm leading-[1.2]">Vídeos institucionais expressos (low ticket, alta escala)</p>
                </div>
              </div>
            </Tab>
          </Tabs>

          <Link href={"/contato"} className="flex gap-2 items-center mx-auto text-white rounded-full border-2 w-fit uppercase font-[600] text-sm px-6 py-1 mt-8"><MoveRight/>Vem produzir com a Toré</Link>
        </div>
      </div>

      {/*section 9*/}
      <div className="bg-[url(/detail-1.png)] bg-contain bg-[center_top] bg-no-repeat py-15">
        <div className="max-w-[1100px] mx-auto px-5">
          <p className=" bg-white/10 w-fit flex items-center text-white justify-center uppercase text-[12px] mb-2 py-2 px-5 gap-2 rounded-full text-shadow-lg">Toré Filmes <Image src={"/icone-tore.svg"} width={20} height={20} alt=""/></p>
          <h3 className="uppercase text-2xl leading-[1.2] text-white mb-4 text-shadow-lg">O que torna a<br/>Toré a melhor?</h3>

          <div className="grid grid-cols-12 gap-5 relative">
            <div className="col-span-12 md:col-span-7">
              <Faq/>
            </div>
            <div className="col-span-12 md:col-span-5">
              <Image className="rounded-lg aspect-10/6 md:aspect-12/10 object-center object-cover" src={"/imgfaq.jpg"} width={700} height={700} alt=""/>
            </div>
            <Image className="selo absolute right-[-30px] top-[-30px]" src={"/selo.svg"} width={100} height={100} alt="Toré"/>
          </div>
        </div>
      </div>

      {/*section 10*/}
      <div className="bg-[url(/bg-8909.jpg)] bg-cover bg-[left_top] md:bg-[center_top] bg-no-repeat py-20">
        <div className="max-w-[1100px] mx-auto px-5">
          <p className=" bg-white/10 w-fit flex items-center text-white mx-auto justify-center uppercase text-[12px] mb-2 py-2 px-5 gap-2 rounded-full mb-10">Toré Filmes <Image src={"/icone-tore.svg"} width={20} height={20} alt=""/></p>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="text-white mb-5 md:mb-0">
              <h3 className="md:max-w-[300px] uppercase text-2xl leading-[1.2] text-white mb-4">Entrega rápida, sem terceirização e com alta qualidade.</h3>
              <Link href={"/contato"} className="flex gap-2 items-center text-white rounded-full border-2 w-fit uppercase font-[600] text-sm px-6 py-1"><MoveRight/>Vem produzir com a Toré</Link>
            </div>
            <div className="text-white flex justify-end">
              <h3 className="md:max-w-[300px] text-2xl leading-[1.2] text-white mb-4">Adaptamos cada produção às suas necessidades.</h3>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}