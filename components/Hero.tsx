'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Carousel hero: adaugă 3 poze în public/ – hero-bg-1.jpg, hero-bg-2.jpg, hero-bg-3.jpg
const HERO_SLIDES = [
  {
    image: '/hero-bg-1.jpg',
    title: 'Canapea Serenity Timber',
    category: 'Living',
    description: 'Canapea cu elemente din lemn masiv și tapiterie premium.',
    slug: 'canapea-serenity-timber',
  },
  {
    image: '/hero-bg-2.jpg',
    title: 'Fotoliu Block Nomad',
    category: 'Scaune și fotolii',
    description: 'Design modular, confort superior. Ideal pentru living sau birou.',
    slug: 'fotoliu-block-nomad',
  },
  {
    image: '/hero-bg-3.jpg',
    title: 'Dulap dormitor Aurora',
    category: 'Dormitor',
    description: 'Spațiu generos, uși glisante, interior organizat. Calitate premium.',
    slug: 'dulap-dormitor-aurora',
  },
] as const;

const AUTO_PLAY_MS = 8000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const slide = HERO_SLIDES[index];

  const goTo = useCallback((next: number) => {
    setIndex((i) => (i + next + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const id = setInterval(() => goTo(1), AUTO_PLAY_MS);
    return () => clearInterval(id);
  }, [goTo]);

  return (
    <section
      className="relative min-h-[85vh] w-full overflow-hidden bg-[#f7f3ef] md:min-h-[90vh]"
      aria-labelledby="hero-heading"
    >
      {/* Carousel: imagini mai mici (mai puțin stretch = mai puțin pixelat), poziționate mai sus */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={index}
            className="hero-slide-bg absolute inset-0 bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            role="img"
            aria-label={slide.title}
          />
        </AnimatePresence>
      </div>

      {/* Overlay pentru lizibilitate text */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(247,243,239,0.97) 0%, rgba(247,243,239,0.7) 25%, transparent 50%)',
        }}
      />

      {/* Conținut peste fundal */}
      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-end px-4 pb-12 pt-24 md:min-h-[90vh] md:pb-16 md:pt-32 lg:pb-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end md:gap-12">
          {/* Stânga: categorie + titlu + link */}
          <div>
            <span className="mb-3 inline-flex items-center gap-2 text-sm text-[#5c534a]">
              <span className="h-2 w-2 rounded-full border border-[#5c534a]" />
              Produs – {slide.category}
            </span>
            <motion.h1
              id="hero-heading"
              key={slide.title}
              className="text-4xl font-bold tracking-tight text-[#2d2926] md:text-5xl lg:text-6xl xl:text-7xl"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.35 }}
            >
              {slide.title}
            </motion.h1>
            <motion.div
              key={slide.slug}
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              <Link
                href={`/produse/${slide.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#5c534a] underline decoration-[#5c534a]/40 underline-offset-4 transition hover:text-[#2d2926] hover:decoration-[#2d2926]"
              >
                Vezi produsul
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Dreapta: descriere + săgeți + indicatori */}
          <div className="flex flex-col items-end gap-6 md:items-end md:gap-8">
            <motion.p
              key={slide.description}
              className="max-w-sm text-right text-sm leading-relaxed text-[#5c534a] md:max-w-md md:text-base"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              {slide.description}
            </motion.p>
            <div className="flex items-center gap-4">
              {/* Indicatori slide */}
              <div className="flex gap-2" aria-label="Slide-uri hero">
                {HERO_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? 'w-8 bg-[#2d2926]' : 'w-2 bg-[#5c534a]/40 hover:bg-[#5c534a]/60'
                    }`}
                    aria-label={`Slide ${i + 1}`}
                    aria-current={i === index ? 'true' : undefined}
                  />
                ))}
              </div>
              {/* Săgeți */}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => goTo(-1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#5c534a]/40 bg-white/90 text-[#2d2926] transition hover:bg-white md:h-12 md:w-12"
                  aria-label="Slide anterior"
                >
                  <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => goTo(1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#5c534a]/40 bg-white/90 text-[#2d2926] transition hover:bg-white md:h-12 md:w-12"
                  aria-label="Slide următor"
                >
                  <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
