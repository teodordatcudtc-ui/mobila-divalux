'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Maria P.',
    time: 'acum 2 zile',
    rating: 5,
    text: 'Am comandat canapeaua Serenity Timber. Calitate excelentă, livrare la timp și montaj foarte bine făcut. Recomand Mobila DivaLux.',
  },
  {
    name: 'Andrei M.',
    time: 'acum 5 zile',
    rating: 5,
    text: 'Fotoliul Block Nomad s-a potrivit perfect în living. Design modern, confortabil. Echipa a fost foarte profesionistă.',
  },
  {
    name: 'Elena D.',
    time: 'acum 1 săptămână',
    rating: 4,
    text: 'Mulțumită de dulapul din dormitor. Spațios, bine gândit. Prețul este corect pentru calitatea oferită.',
  },
  {
    name: 'Cristian B.',
    time: 'acum 2 săptămâni',
    rating: 5,
    text: 'Mobilă de calitate, livrare rapidă. Am revenit pentru o a doua comandă. Serviciu pe măsură.',
  },
];

function StarRating({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} stele din 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={i <= n ? 'text-amber-400' : 'text-diva-dark/20'}
          aria-hidden
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="bg-diva-cream py-20 md:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2
              id="testimonials-heading"
              className="text-3xl font-bold text-diva-dark md:text-4xl"
            >
              Ce spun clienții
            </h2>
            <p className="mt-4 max-w-md text-diva-dark/70">
              Peste mii de clienți mulțumiți. Citește experiențele celor care au
              ales mobilă DivaLux pentru casa lor.
            </p>
            <blockquote className="mt-8 border-l-4 border-diva-neon pl-6 text-lg italic text-diva-dark/80">
              „Calitate și design la un preț corect. Exact ce căutam.”
            </blockquote>
          </div>
          <div className="lg:col-span-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {testimonials.map((t, i) => (
                <motion.article
                  key={t.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-xl border border-diva-dark/10 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="h-10 w-10 rounded-full bg-diva-plum/20 flex items-center justify-center text-diva-magenta font-semibold"
                        aria-hidden
                      >
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-diva-dark">{t.name}</p>
                        <p className="text-xs text-diva-dark/50">{t.time}</p>
                      </div>
                    </div>
                    <StarRating n={t.rating} />
                  </div>
                  <p className="mt-4 text-sm text-diva-dark/80">{t.text}</p>
                </motion.article>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-diva-dark/20 text-diva-dark transition hover:border-diva-neon hover:text-diva-neon"
                aria-label="Mai multe recenzii"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
