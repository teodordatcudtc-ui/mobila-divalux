'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getFeaturedProducts } from '@/lib/products';
import type { Product } from '@/lib/products';

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex flex-col rounded-xl bg-white p-4 shadow-lg transition hover:shadow-neon-lg md:p-5"
    >
      <Link href={`/produse/${product.slug}`} className="absolute inset-0 z-10" aria-label={`Vezi ${product.name}`} />
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-diva-cream">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      {product.colors && product.colors.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5" aria-label="Culori disponibile">
          {product.colors.slice(0, 4).map((c, i) => (
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
    </motion.article>
  );
}

export default function Bestsellers() {
  const products = getFeaturedProducts();

  return (
    <section
      className="bg-diva-cream pt-10 pb-20 md:pt-16 md:pb-28"
      aria-labelledby="bestsellers-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2
            id="bestsellers-heading"
            className="text-3xl font-bold text-diva-dark md:text-4xl"
          >
            Produse recomandate
          </h2>
          <Link
            href="/produse"
            className="text-sm font-medium text-diva-magenta transition hover:text-diva-neon hover:underline"
          >
            Vezi toate produsele →
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
