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
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  return () => {
    document.body.style.overflow = '';
  };
}, [isSidebarOpen]);


  return (
    <>
        <header className="fixed top-0 md:top-5 px-0 md:px-5 w-full z-50">
                
            <div className="mx-auto max-w-[var(--largura)] items-center grid grid-cols-10 justify-stretch bg-black/40 backdrop-blur-[30px] md:py-2 py-3 md:pr-4 pr-5 pl-5 md:pl-8 rounded-none md:rounded-full">
                {/* Logo */}
                <div className="col-span-2">
                    <Link href="/" className={`transition-all block ${isScrolled ? 'w-[50px] lg:w-[70px]' : 'w-[60px] md:w-[80px]'}`}>
                        <Image src="/logotore.svg" alt="Toré Filmes" className="w-full h-auto" width={160} height={40} priority />
                    </Link>
                </div>

                {/* Menu Desktop */}
                <ul className="hidden md:flex gap-7 mx-auto text-[15px] px-5 py-4 col-span-6">
                    <li><Link href="/sobre" className="text-white">Quem Somos</Link></li>
                    <li><Link href="/portfolio" className="text-white">Portfólio</Link></li>
                    <li><a href="/blog" className="text-white">Blog</a></li>
                    <li><Link href="/contato" className="text-white">Contato</Link></li>
                </ul>

                {/* contato*/}
                <div className="flex justify-end gap-5 col-span-8 md:col-span-2">
                    <div className="hidden md:flex gap-2">
                        <a className="flex items-center gap-2 text-white border-2 border-white px-4 py-2 uppercase font-medium text-sm rounded-full" href="https://wa.me/5592984728001" target="_blank"><Image src={"/whatsapp.svg"} width={18} height={18} alt=""/> Contato</a>
                    </div>
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
                <Link href="/" onClick={closeSidebar} className="block mb-10">
                    <Image src="/logotore.svg" alt="Toré Filmes" width={100} height={40} priority className="w-30 mx-auto"/>
                </Link>
                <ul className="text-center space-y-4 text-lg font-bold">
                    <li><Link href="/" onClick={closeSidebar} className="text-white">Início</Link></li>
                    <li><Link href="/sobre" onClick={closeSidebar} className="text-white">Quem Somos</Link></li>
                    <li><Link href="/portfolio" onClick={closeSidebar} className="text-white">Portfólio</Link></li>
                    <li><a href="/blog" onClick={closeSidebar} className="text-white">Blog</a></li>
                    <li><Link href="/contato" onClick={closeSidebar} className="text-white">Contato</Link></li>
                </ul>
                <div className="flex gap-2 justify-center mt-10">
                    <a className="bg-[var(--azul)] p-2 rounded-full" href="https://www.instagram.com/torefilmes" target="_blank"><Image src={"/social-instagram.svg"} width={16} height={16} alt=""/></a>
                    <a className="bg-[var(--azul)] p-2 rounded-full" href="https://www.facebook.com/torefilmes" target="_blank"><Image src={"/social-facebook.svg"} width={16} height={16} alt=""/></a>
                    <a className="bg-[var(--azul)] p-2 rounded-full" href="https://www.youtube.com/@torefilmes" target="_blank"><Image src={"/social-youtube.svg"} width={16} height={16} alt=""/></a>
                </div>
            </div>
        </div>

    </>
  )
}