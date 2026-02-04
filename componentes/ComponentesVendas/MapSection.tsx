import Link from "next/link";
import Image from "next/image";
import CustomMap from "../CustomMap";
import { MoveRight } from "lucide-react";

const MapSection = () => {
    return (
        <>
            <section>
                {/*section mapa*/}
                <div className="max-w-[1100px] mx-auto px-5">
                    <h3 className="text-center text-xl md:text-2xl leading-[1.2] text-white mb-4 text-shadow-lg">Nossa localização</h3>
                    <div className="grid grid-cols-1 md:grid-cols-12 items-center border-2 border-white rounded-lg p-3 relative">
                        <Image className="selo absolute left-[-30px] top-[-30px]" src={"/selo.svg"} width={100} height={100} alt="Toré" />
                        <div className="col-span-5 p-5 py-10">
                            <Image className="w-20" src={"/logotore.svg"} width={100} height={100} alt="" />
                            <div className="flex items-center gap-[5px] text-xl leading-[1.2] text-white mt-4 mb-1"><Image className="w-[30px]" src={"/icon-pin-map.svg"} width={30} height={30} alt="" /> R. Constelação Cruzeiro do Sul, 6 - Aleixo</div>
                            <p className="text-white text-[12px] uppercase ml-[35px]">Manaus - AM</p>
                            <Link href={"https://maps.app.goo.gl/wmUZPEv8bMk8Mk2w5"} target="_blank" className="flex gap-2 items-center rounded-full border-2 border-white w-fit uppercase font-[600] text-sm text-white px-6 py-1 mt-5"><MoveRight />Como Chegar</Link>
                        </div>
                        <div className="col-span-7 rounded-md overflow-hidden">
                            <CustomMap lat={-3.094261} lng={-59.9934223} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MapSection