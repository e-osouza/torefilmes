import Image from "next/image";

export default function Sobre() {
    return (
        <div className="bg-black overflow-hidden">
            <div className="bg-[url(/bg-abstract.jpg)] bg-center bg-cover bg-no-repeat relative">
                <div className="max-w-[var(--largura)] mx-auto px-5 pt-50 pb-10 md:pt-80 md:pb-20 relative z-[1]">
                    <p className=" bg-white/10 w-fit mx-auto flex items-center text-white justify-center uppercase text-[12px] mb-5 py-2 px-5 gap-2 rounded-full">Da ideia à tela</p>
                    <h1 className="text-white text-center uppercase text-2xl md:text-3xl max-w-[690px] mx-auto">Confira o que já criamos e realize seu próximo projeto com a Toré.</h1>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-60 bg-linear-to-t from-black to-black/0"></div>
            </div>

            {/*portfolio*/}
            <div className="bg-[url(/portfolio-1.jpg)] bg-[center_top] bg-cover bg-no-repeat relative">
                <div className="bg-linear-30 from-black/90 to-black/10 w-full h-full absolute bottom-0 left-0"></div>
                <div className="max-w-[var(--largura)] mx-auto px-5 pt-70 pb-15">
                    <Image className="absolute left-[50%] top-[30%] md:top-[50%] translate-x-[-50%] translate-y-[-50%]" src={"/icon-play.svg"} width={80} height={80} alt=""/>
                    <div className="relative text-white">
                        <h3 className="text-2xl leading-[1.2] uppercase max-w-[315px] mb-3">Braga Veículos - Portas Abertas (2020)</h3>
                        <p className="text-sm max-w-[400px]">Apresentamos a vocês o novo VT da Braga Veículos para informar aos seus clientes que já está com a loja aberta e seguindo todas as recomendações de segurança das autoridades competentes.</p>
                    </div>
                </div>
            </div>
            <div className="bg-[url(/portfolio-2.jpg)] bg-[center_top] bg-cover bg-no-repeat relative">
                <div className="bg-linear-30 from-black/90 to-black/10 w-full h-full absolute bottom-0 left-0"></div>
                <div className="max-w-[var(--largura)] mx-auto px-5 pt-70 pb-15">
                    <Image className="absolute left-[50%] top-[30%] md:top-[50%] translate-x-[-50%] translate-y-[-50%]" src={"/icon-play.svg"} width={80} height={80} alt=""/>
                    <div className="relative text-white">
                        <h3 className="text-2xl leading-[1.2] uppercase max-w-[315px] mb-3">Samel - 350 anos de Manaus (2020)</h3>
                        <p className="text-sm max-w-[400px]">Manaus fez 350 anos e produzimos, para o cliente Samel, uma linda homenagem ao aniversário da Cidade.</p>
                    </div>
                </div>
            </div>
            <div className="bg-[url(/portfolio-3.jpg)] bg-[center_top] bg-cover bg-no-repeat relative">
                <div className="bg-linear-30 from-black/90 to-black/10 w-full h-full absolute bottom-0 left-0"></div>
                <div className="max-w-[var(--largura)] mx-auto px-5 pt-70 pb-15">
                    <Image className="absolute left-[50%] top-[30%] md:top-[50%] translate-x-[-50%] translate-y-[-50%]" src={"/icon-play.svg"} width={80} height={80} alt=""/>
                    <div className="relative text-white">
                        <h3 className="text-2xl leading-[1.2] uppercase max-w-[470px] mb-3">Prefeitura de Manaus - Manaus 350 anos: #lindaquesóela (2020)</h3>
                        <p className="text-sm max-w-[500px]">Em homenagem aos 350 anos da nossa cidade, produzimos um VT para a Prefeitura com imagens em cenários famosos de Manaus, um casting que traduz toda a riqueza do nosso povo e visitantes e um jingle alegre e colorido exaltando todos os nossos costumes e beleza.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};