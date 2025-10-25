'use client';

import Link from "next/link"
import Image from 'next/image';
import { AlignJustify, CircleX } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {

const [isScrolled, setIsScrolled] = useState(false);
const [isSidebarOpen, setSidebarOpen] = useState(false);
const closeSidebar = () => setSidebarOpen(false);

useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
}, []);

useEffect(() => {
  if (isSidebarOpen) {
    // bloqueia o scroll
    document.body.style.overflow = 'hidden';
  } else {
    // restaura o scroll
    document.body.style.overflow = '';
  }

  // limpa caso o componente desmonte
  return () => {
    document.body.style.overflow = '';
  };
}, [isSidebarOpen]);


  return (
    <>
        <header className="fixed top-5 px-5 w-full z-50">
                
            <div className="mx-auto max-w-[var(--largura)] items-center grid grid-cols-10 justify-stretch bg-black/40 backdrop-blur-[30px] md:py-2 py-3 md:pr-4 pr-6 pl-8 rounded-full">
                {/* Logo */}
                <div className="col-span-2">
                    <Link href="/" className={`transition-all block ${isScrolled ? 'w-[50px] lg:w-[70px]' : 'w-[60px] md:w-[80px]'}`}>
                        <Image src="/logotore.svg" alt="Toré Filmes" className="w-full h-auto" width={160} height={40} priority />
                    </Link>
                </div>

                {/* Menu Desktop */}
                <ul className="hidden md:flex gap-7 mx-auto text-[15px] px-5 py-4 col-span-6">
                    <li><Link href="/sobre" className="text-white">Quem Somos</Link></li>
                    <li><Link href="/servicos" className="text-white">Serviços</Link></li>
                    <li><Link href="/portfolio" className="text-white">Portfólio</Link></li>
                    <li><Link href="/blog" className="text-white">Blog</Link></li>
                </ul>

                {/* contato*/}
                <div className="flex justify-end gap-5 col-span-8 md:col-span-2">
                    <a href="#" target="_blank" className="text-white text-sm uppercase hidden md:flex gap-2 font-semibold items-center border-2 rounded-full px-5 py-2"><Image src={"/icon-whatsapp.svg"} width={20} height={20} alt=""/>Contato</a>
                    <div className="block md:hidden leading-[1]">
                        <button onClick={() => setSidebarOpen(true)} className="text-white cursor-pointer leading-[1]" aria-label="Abrir menu"><AlignJustify size={28} /></button>
                    </div>
                </div>
            </div>
            
        </header>

        {/* Sidebar mobile */}
        <div className={`bg-black/30 backdrop-blur-[50px] fixed top-0 left-0 h-full w-full z-50 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className='absolute right-6 top-6'>
                <button className="cursor-pointer text-white" onClick={closeSidebar} aria-label="Fechar menu"><CircleX size={30}/></button>
            </div>

            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-6">
                <Link href="/" onClick={closeSidebar} className="block mb-6">
                    <Image src="/logotore.svg" alt="Toré Filmes" width={100} height={40} priority className="w-30 mx-auto"/>
                </Link>
                <ul className="text-center space-y-4 text-lg font-bold">
                    <li><Link href="/" onClick={closeSidebar} className="text-white">Início</Link></li>
                    <li><Link href="/sobre" onClick={closeSidebar} className="text-white">Quem Somos</Link></li>
                    <li><Link href="/servicos" onClick={closeSidebar} className="text-white">Serviços</Link></li>
                    <li><Link href="/portfolio" onClick={closeSidebar} className="text-white">Portfólio</Link></li>
                    <li><Link href="/blog" onClick={closeSidebar} className="text-white">Blog</Link></li>
                    <li><a href="#" target="_blank" className="text-white flex gap-2 items-center border-2 rounded-full px-5 py-2 mt-6"><Image src={"/icon-whatsapp.svg"} width={20} height={20} alt=""/>Contato</a></li>
                </ul>
            </div>
        </div>

    </>
  )
}