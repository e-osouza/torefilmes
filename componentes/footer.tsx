import Image from 'next/image';
import { Mail } from 'lucide-react';
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-black relative">
            <div className="w-[250px] h-[15px] bg-[var(--verde)] absolute top-[-7px] left-[50%] -translate-x-[50%]"></div>
            <div className="mx-auto max-w-[var(--largura)] px-5 grid gap-5 lg:gap-15 grid-cols-1 md:grid-cols-4 py-15 md:py-20">
                <div className="mb-5 md:mb-0">
                    <Link href="/" className="mb-4 block">
                        <Image src="/logotore.svg" alt="Toré Filmes" width={60} height={60} priority/>
                    </Link>
                    <div className="text-white text-[13px] max-w-[80%]">R. Constelação Cruzeiro do Sul, 6 - Aleixo | Manaus-AM</div>
                </div>
                <ul className="mb-5 md:mb-0 space-y-2">
                    <li><Link href="/sobre" className="text-white">Quem Somos</Link></li>
                    <li><Link href="/contato" className="text-white">Contato</Link></li>
                </ul>
                <ul className="mb-5 md:mb-0 space-y-2">
                    <li><Link href="/portfolio" className="text-white">Portfólio</Link></li>
                    <li><a href="/blog" className="text-white">Blog</a></li>
                </ul>
                <div className="relative">
                    <a href="mailto:contato@torefilmes.com.br" target="_blank" className="flex text-sm items-center text-white gap-1"><Mail size={18} className='min-w-[20px]'/>contato@torefilmes.com.br</a>
                    <div className="flex items-center gap-2 mt-3">
                        <a className="bg-[var(--azul)] p-2 rounded-full" href="https://www.instagram.com/torefilmes" target="_blank"><Image src={"/social-instagram.svg"} width={16} height={16} alt=""/></a>
                        <a className="bg-[var(--azul)] p-2 rounded-full" href="https://www.facebook.com/torefilmes" target="_blank"><Image src={"/social-facebook.svg"} width={16} height={16} alt=""/></a>
                        <a className="bg-[var(--azul)] p-2 rounded-full" href="https://www.youtube.com/@torefilmes" target="_blank"><Image src={"/social-youtube.svg"} width={16} height={16} alt=""/></a>
                    </div>
                </div>
            </div>
            <div className="px-5 py-8 border-t-1 border-[#2A2A2A]">
                <div className="mx-auto max-w-[var(--largura)] text-center text-white text-[13px]">
                    ©{new Date().getFullYear()} Toré Filmes. Todos os direitos reservados. Desenvolvido por Digital Comunicação.
                </div>
            </div>
        </footer>
    );
}