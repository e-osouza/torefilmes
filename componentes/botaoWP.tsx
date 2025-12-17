import Image from 'next/image';

export default function BotaoWP() {
    return(
        <>
            <a className="fixed bottom-5 right-5 p-2 bg-[#66b266] rounded-full" href="https://wa.me/5592984728001" target="_blank"><Image src={"/whatsapp.svg"} width={30} height={30} alt=""/></a>
        </>
    )
}