'use client';

import Image from 'next/image';

export default function BotaoWP() {
  return (
    <a
      href="https://wa.me/5592984728001"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50"
      aria-label="Falar no WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#66b266]/40 blur-[1px] animate-ping" />
      <span
        className="absolute inset-0 rounded-full bg-[#66b266]/25 animate-ping"
        style={{ animationDelay: '300ms' }}
      />

      <span className="relative flex items-center justify-center p-3 rounded-full bg-[#66b266] shadow-lg shadow-black/20 transition-transform duration-200 hover:scale-110 active:scale-95">
        <Image src="/whatsapp.svg" width={30} height={30} alt="WhatsApp" />
      </span>
    </a>
  );
}
