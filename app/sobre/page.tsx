import Image from "next/image";

export default function Sobre() {
    return (
        <div className="bg-black overflow-hidden">
            <div className="bg-[url(/bg-abstract.jpg)] bg-center bg-cover bg-no-repeat relative">
                <div className="max-w-[var(--largura)] mx-auto px-5 pt-50 pb-10 md:pt-80 md:pb-20 relative z-[1]">
                    <p className=" bg-white/10 w-fit mx-auto flex items-center text-white justify-center uppercase text-[12px] mb-5 py-2 px-5 gap-2 rounded-full">Toré Filmes <Image src={"/icone-tore.svg"} width={20} height={20} alt=""/></p>
                    <h1 className="text-white text-center uppercase text-3xl">Somos a Toré Filmes</h1>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-60 bg-linear-to-t from-black to-black/0"></div>
            </div>

            <div className="max-w-[var(--largura)] mx-auto px-5 pt-8 relative">
                <Image className="absolute w-[100%] top-0 left-[50%] -translate-x-[50%] opacity-5" src={"/icon-big.svg"} width={1300} height={1300} alt="Toré"/>
                <div className="space-y-5 text-white text-sm mb-15 z-[1] relative">
                    <p>A Toré Filmes é a maior produtora de vídeo de Manaus, referência em qualidade, inovação e impacto audiovisual. Desde 2006, nossa missão é transformar ideias em narrativas visuais que fortalecem marcas e impulsionam negócios.</p>
                    <p>Somos especialistas em produções publicitárias, institucionais e conteúdos digitais, sempre unindo criatividade, estratégia e emoção. Mais do que uma produtora, somos parceiros estratégicos: atuamos lado a lado com cada cliente, oferecendo suporte criativo e técnico em todas as etapas da produção.</p>
                    <p>Com um estúdio completo, equipamentos de última geração e uma equipe formada por profissionais apaixonados pelo que fazem, vamos além de simplesmente contar histórias. Nós damos vida à sua mensagem e a transformamos em soluções audiovisuais que geram conexão, valor e resultados.</p>
                    <p>Além disso, a Toré conta com uma ampla gama de serviços e locações, que incluem transmissões ao vivo, campanhas políticas, produção de motion graphics, vídeos publicitários, institucionais e para a web. Tudo pensado para atender com versatilidade e qualidade a diferentes necessidades de comunicação.</p>
                    <p>Nossa estrutura cresceu junto com a história da Toré. Hoje, contamos com um espaço amplo, estúdio de gravação, camarim, salas de edição, criação e produção, prontos para dar suporte a cada projeto. Na Toré Filmes, cada produção é única. Cada projeto é pensado para dar voz, imagem e presença à sua marca.</p>
                </div>
            
                <div className="bg-[url(/bg-64735.jpg)] bg-center bg-cover bg-no-repeat relative rounded-[10px]">
                    <Image className="selo absolute -top-10 right-0" src={"/selo.svg"} width={100} height={100} alt="Toré"/>
                    <div className="bg-linear-30 from-black/70 to-black/10 w-full h-full px-10 pb-10 pt-50">
                        <h3 className="text-white uppercase text-xl mb-2">Nossa Equipe</h3>
                        <p className=" bg-white/10 w-fit text-white uppercase text-[12px] mb-2 py-1 px-3 gap-2 rounded-full">Do roteiro à entrega</p>
                        <p className="text-white text-sm max-w-[250px]">Cada etapa é conduzida por profissionais que transformam ideias em produções de alto nível</p>
                    </div>
                </div>
                <div className="flex justify-end"><span className="w-[150px] text-right h-[20px] bg-[var(--azul)]"></span></div>

                <div className="mt-15 mb-10">
                    <Image className="rounded-[10px]" src={"/sobre-2.jpg"} width={1300} height={1300} alt="Toré"/>
                    <div className="mt-5">
                        <p className=" bg-white/10 w-fit text-white uppercase text-[12px] mb-2 py-1 px-3 gap-2 rounded-full">Rodrigo monteiro</p>
                        <p className="text-white text-sm">Produtor Audiovisual</p>
                    </div>
                </div>

                <div className="my-10 grid grid-cols-2 gap-4">
                    <div className="">
                        <Image className="rounded-[10px]" src={"/sobre-3.jpg"} width={700} height={700} alt="Toré"/>
                        <div className="mt-5">
                            <p className=" bg-white/10 w-fit text-white uppercase text-[12px] mb-2 py-1 px-3 gap-2 rounded-full">Mayara Ferreira</p>
                            <p className="text-white text-sm">Direção de Fotografia</p>
                        </div>
                    </div>
                    <div className="">
                        <Image className="rounded-[10px]" src={"/sobre-4.jpg"} width={700} height={700} alt="Toré"/>
                        <div className="mt-5">
                            <p className=" bg-white/10 w-fit text-white uppercase text-[12px] mb-2 py-1 px-3 gap-2 rounded-full">Michel Gomes</p>
                            <p className="text-white text-sm">Diretor de Filmagens</p>
                        </div>
                    </div>
                </div>

            </div>

            {/*contato*/}
            <div className="bg-[url(/bg-contact.jpg)] bg-[center_top] bg-cover bg-no-repeat">
                <div className="w-[150px] text-right h-[20px] bg-[var(--vermelho)]"></div>
                <div className="max-w-[var(--largura)] mx-auto px-5 py-15">
                    <h1 className="max-w-[460px] mx-auto text-white text-center uppercase text-2xl">Vamos transformar sua ideia em uma produção de impacto?</h1>
                    <p className="text-white text-[12px] text-center uppercase mt-3">Preencha o formulário e entraremos em contato</p>

                    <div className="form max-w-[500px]">

                    </div>
                </div>
            </div>

        </div>
    )
}