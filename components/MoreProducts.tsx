'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getMoreProductsForHome } from '@/lib/products';
import type { Product } from '@/lib/products';

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group relative flex h-full min-w-[280px] max-w-[280px] flex-col rounded-xl bg-white p-4 shadow-lg transition hover:shadow-neon-lg md:min-w-[300px] md:max-w-[300px] md:p-5">
      <Link href={`/produse/${product.slug}`} className="absolute inset-0 z-10" aria-label={`Vezi ${product.name}`} />
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-diva-cream">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="300px"
        />
      </div>
      {product.colors && product.colors.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5" aria-label="Culori disponibile">
          {product.colors.slice(0, 4).map((c) => (
            <span
              key={c.name}
              className="h-4 w-4 rounded-full border-2 border-diva-dark/20 transition group-hover:border-diva-neon"
              style={{ backgroundColor: c.hex }}
              title={c.name}
            />
          ))}
          {product.colors.length > 4 && (
            <span className="text-xs text-diva-dark/60">+ Opțiuni</span>
          )}
        </div>
      )}
      <h3 className="mt-3 font-semibold text-diva-dark group-hover:text-diva-magenta">
        {product.name}
      </h3>
      <div className="mt-auto flex items-end justify-between pt-2">
        <div className="flex flex-col">
          {product.priceOld && (
            <span className="text-sm text-diva-dark/50 line-through">
              {product.priceOld.toLocaleString('ro-RO')} lei
            </span>
          )}
          <span className="font-bold text-diva-dark">
            {product.price.toLocaleString('ro-RO')} lei
          </span>
        </div>
        <span className="text-diva-magenta opacity-0 transition group-hover:opacity-100" aria-hidden>
          →
        </span>
      </div>
    </article>
  );
}

export default function MoreProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const products = getMoreProductsForHome();

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 304; // ~280px card + 24px gap
    const amount = dir === 'left' ? -cardWidth : cardWidth;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section
      className="bg-diva-sand py-20 md:py-28"
      aria-labelledby="more-products-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2
            id="more-products-heading"
            className="text-3xl font-bold text-diva-dark md:text-4xl"
          >
            Descoperă și
          </h2>
          <Link
            href="/produse"
            className="text-sm font-medium text-diva-magenta transition hover:text-diva-neon hover:underline"
          >
            Vezi toate produsele →
          </Link>
        </div>

        <div className="relative mt-10">
          {/* Săgeți – derulare manuală */}
          <button
            type="button"
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#5c534a]/40 bg-white shadow-lg transition hover:bg-white/95 md:-left-4 md:h-12 md:w-12"
            aria-label="Derulează stânga"
          >
            <svg className="h-5 w-5 text-diva-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#5c534a]/40 bg-white shadow-lg transition hover:bg-white/95 md:-right-4 md:h-12 md:w-12"
            aria-label="Derulează dreapta"
          >
            <svg className="h-5 w-5 text-diva-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel – derulare manuală cu săgeți; pe telefon swipe cu degetul */}
            <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-hidden pb-2 scroll-smooth scrollbar-hide"
            style={{ WebkitOverflowScrolling: 'touch' }}
            role="region"
            aria-label="Carousel produse"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 snap-start"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
