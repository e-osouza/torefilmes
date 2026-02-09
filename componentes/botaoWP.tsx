'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function BotaoWP() {
  return (
    <motion.a
      href="https://wa.me/5592984728001"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50"
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Falar no WhatsApp"
    >
      {/* Anel pulsando atrás */}
      <motion.span
        className="absolute inset-0 rounded-full bg-[#66b266]/40 blur-[1px]"
        animate={{ scale: [1, 1.6, 1], opacity: [0.55, 0, 0.55] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
      />

      {/* Segundo anel (desencontrado) pra ficar mais vivo */}
      <motion.span
        className="absolute inset-0 rounded-full bg-[#66b266]/25"
        animate={{ scale: [1, 1.9, 1], opacity: [0.35, 0, 0.35] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', delay: 0.35 }}
      />

      {/* Corpo do botão */}
      <motion.span
        className="relative flex items-center justify-center p-3 rounded-full bg-[#66b266] shadow-lg shadow-black/20"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* “Wiggle” sutil no ícone */}
        <motion.span
          animate={{ rotate: [0, -8, 8, -6, 6, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2.2 }}
        >
          <Image src="/whatsapp.svg" width={30} height={30} alt="WhatsApp" />
        </motion.span>
      </motion.span>
    </motion.a>
  )
}
