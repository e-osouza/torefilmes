import Image from "next/image";
import CustomMap from "@/componentes/CustomMap";
import { Metadata } from "next";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import ContactForm from "@/componentes/ContactForm";

export const metadata: Metadata = {
  title: "Contato - Toré Filmes",
  description: "Vamos transformar sua ideia em uma produção de impacto?",
  openGraph: {
    title: "Contato - Toré Filmes",
    images: "./bg-3223.jpg",
  },
};

export default function Contato() {
    return (
        <div className="bg-black overflow-hidden">
        {/*section contato*/}
        <div className="bg-[url(/bg-abstract.jpg)] bg-center bg-cover bg-no-repeat relative pt-40 pb-20 md:pt-60 md:pb-30">
            <div className="max-w-[var(--largura)] mx-auto px-5 relative z-[1]">
                <Image className="mx-auto" src={"/logotore.svg"} width={150} height={150} alt=""/>
                <h1 className="max-w-[570px] mx-auto mt-5 mb-3 text-white text-center uppercase leading-[1.2] text-2xl md:text-3xl">Vamos transformar sua ideia em uma produção de impacto?</h1>
                <p className="text-white text-center uppercase text-sm">Preencha o formulário e entraremos em contato</p>
            </div>
            <div className="max-w-[600px] mx-auto px-5 mt-10 relative z-[1]">
                <ContactForm/>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-full bg-linear-to-t from-black to-black/0"></div>
        </div>

        {/*section mapa*/}
            <div className="max-w-[1100px] mx-auto px-5">
                <h3 className="uppercase text-center text-xl md:text-2xl leading-[1.2] text-white mb-4 text-shadow-lg">Nossa localização</h3>
                <div className="grid grid-cols-1 md:grid-cols-12 items-center border-2 border-white rounded-lg p-3 relative">
                    <Image className="selo absolute left-[-30px] top-[-30px]" src={"/selo.svg"} width={100} height={100} alt="Toré"/>
                    <div className="col-span-5 p-5 py-10">
                        <Image className="w-20" src={"/logotore.svg"} width={100} height={100} alt=""/>
                        <div className="flex items-center gap-[5px] text-xl leading-[1.2] text-white mt-4 mb-1"><Image className="w-[30px]" src={"/icon-pin-map.svg"} width={30} height={30} alt=""/> R. Constelação Cruzeiro do Sul, 6 - Aleixo</div>
                        <p className="text-white text-[12px] uppercase ml-[35px]">Manaus - AM</p>
                        <Link href={"https://maps.app.goo.gl/wmUZPEv8bMk8Mk2w5"} target="_blank" className="flex gap-2 items-center rounded-full border-2 border-white w-fit uppercase font-[600] text-sm text-white px-6 py-1 mt-5"><MoveRight/>Como Chegar</Link>
                    </div>
                    <div className="col-span-7 rounded-md overflow-hidden">
                        <CustomMap lat={-3.094261} lng={-59.9934223} />
                    </div>
                </div>
            </div>
        </div>
    )
}