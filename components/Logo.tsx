'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <Link
      href="/"
      className="relative inline-flex flex-col items-center gap-0 leading-none text-white no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-diva-neon focus-visible:ring-offset-2 focus-visible:ring-offset-diva-dark"
      aria-label="Mobila DivaLux - Acasă"
    >
      {/* Monogram DD - stil neon */}
      <motion.span
        className="text-[2rem] font-bold tracking-tighter text-neon md:text-[2.5rem]"
        style={{ fontFamily: 'var(--font-display)' }}
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        DD
      </motion.span>
      <motion.span
        className="text-lg font-bold tracking-[0.25em] text-white md:text-xl"
        style={{
          textShadow:
            '0 0 6px rgba(255,110,199,0.7), 0 0 14px rgba(255,110,199,0.4)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.4 }}
      >
        DIVA
      </motion.span>
    </Link>
  );
}
