'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CATEGORIES, getProductsByCategory } from '@/lib/products';

const categoryMeta: Record<string, { keywords: string; image: string }> = {
  'Scaune și fotolii': {
    keywords: 'Confort • Design • Calitate',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
  },
  Mese: {
    keywords: 'Lemn masiv • Funcțional • Stil',
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800',
  },
  Sufragerie: {
    keywords: 'Spatioasă • Modernă • Completă',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800',
  },
  Dormitor: {
    keywords: 'Liniște • Calitate • Organizare',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800',
  },
  Living: {
    keywords: 'Modular • Adaptabil • Confort',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
  },
  Birou: {
    keywords: 'Profesional • Ergonom • Home office',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800',
  },
};

export default function Categories() {
  const activeCategory = 'Living';
  const activeMeta = categoryMeta[activeCategory];
  const firstProduct = getProductsByCategory(activeCategory)[0];

  return (
    <section
      className="bg-diva-sand py-20 md:py-28"
      aria-labelledby="categories-heading"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:flex-row md:px-6">
        {/* Coloană stânga - listă categorii, layout îngust */}
        <div className="md:w-[380px] md:shrink-0">
          <h2
            id="categories-heading"
            className="text-3xl font-bold text-diva-dark md:text-4xl"
          >
            Categorii
          </h2>
          <ul className="mt-8 space-y-0 border-t border-diva-dark/10">
            {CATEGORIES.map((cat) => {
              const isActive = cat === activeCategory;
              const meta = categoryMeta[cat];
              return (
                <li key={cat} className="border-b border-diva-dark/10">
                  <Link
                    href={`/produse?categorie=${encodeURIComponent(cat)}`}
                    className={`group flex flex-col gap-1 py-5 transition md:py-6 ${
                      isActive ? 'text-diva-magenta' : 'text-diva-dark hover:text-diva-magenta'
                    }`}
                  >
                    {meta?.keywords && (
                      <span className="text-xs text-diva-dark/50">
                        {meta.keywords}
                      </span>
                    )}
                    <span className="flex items-center justify-between font-semibold">
                      {cat}
                      <span className="text-lg opacity-0 transition group-hover:opacity-100" aria-hidden>→</span>
                    </span>
                    {isActive && meta?.keywords && (
                      <p className="mt-2 max-w-sm text-sm font-normal text-diva-dark/70">
                        Mobilă care se adaptează spațiului și stilului tău.
                        Confort și flexibilitate fără compromis.
                      </p>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 flex gap-2" aria-hidden>
            {CATEGORIES.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 flex-1 rounded-full transition ${
                  i === 0 ? 'bg-diva-magenta' : 'bg-diva-dark/15'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Coloană dreapta - imagine mare, asimetric */}
        <motion.div
          className="relative min-h-[400px] flex-1 overflow-hidden rounded-2xl bg-diva-cream shadow-xl md:min-h-[500px]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={firstProduct?.image ?? activeMeta?.image ?? 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200'}
            alt={firstProduct?.name ?? activeCategory}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
