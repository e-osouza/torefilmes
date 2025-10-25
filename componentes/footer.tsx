import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Mail, Youtube } from 'lucide-react';
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-black relative">
            <div className="w-[300px] h-[20px] bg-[var(--verde)] absolute top-[-10px] left-[50%] -translate-x-[50%]"></div>
            <div className="mx-auto max-w-[var(--largura)] px-5 grid gap-5 lg:gap-15 grid-cols-1 md:grid-cols-4 py-15 md:py-20">
                <div className="mb-5 md:mb-0">
                    <Link href="/" className="mb-4 block">
                        <Image src="/logotore.svg" alt="Toré Filmes" width={60} height={60} priority/>
                    </Link>
                    <div className="text-white text-[13px] max-w-[80%]">R. Constelação Cruzeiro do Sul, 6 - Morada do Sol / MANAUS - AM</div>
                </div>
                <ul className="mb-5 md:mb-0 space-y-2">
                    <li><Link href="/sobre" className="text-white">Quem Somos</Link></li>
                    <li><Link href="/servicos" className="text-white">Serviços</Link></li>
                    <li><Link href="/portfolio" className="text-white">Portfólio</Link></li>
                </ul>
                <ul className="mb-5 md:mb-0 space-y-2">
                    <li><Link href="/blog" className="text-white">Blog</Link></li>
                    <li><Link href="/planos" className="text-white">Planos</Link></li>
                    <li><Link href="#" className="text-white">Grupo Digital</Link></li>
                </ul>
                <div className="relative">
                    <a href="#" target="_blank" className="text-white text-[13px] uppercase flex gap-2 font-semibold items-center border-2 rounded-full px-5 py-2 w-fit mb-3"><Image src={"/icon-whatsapp.svg"} width={20} height={20} alt=""/>Contato</a>
                    <a href="#" target="_blank" className="flex text-sm items-center text-white gap-1"><Mail size={18} className='min-w-[20px]'/>contato@torefilmes.com.br</a>
                    <div className="flex items-center gap-3 mt-3">
                        <a className='bg-[#005AFF] rounded-full p-2' href="#" target='_blank'><Facebook size={20} color='#fff' /></a>
                        <a className='bg-[#005AFF] rounded-full p-2' href="#" target='_blank'><Instagram size={20} color='#fff' /></a>
                        <a className='bg-[#005AFF] rounded-full p-2' href="#" target='_blank'><Linkedin size={20} color='#fff' /></a>
                        <a className='bg-[#005AFF] rounded-full p-2' href="#" target='_blank'><Youtube size={20} color='#fff' /></a>
                    </div>
                </div>
            </div>
            <div className="px-5 py-8 border-t-1 border-[#2A2A2A]">
                <div className="mx-auto max-w-[var(--largura)] text-center text-white text-sm">
                    ©{new Date().getFullYear()} Toré Filmes. Todos os direitos reservados. Desenvolvido por Digital Comunicação.
                </div>
            </div>
        </footer>
    );
}