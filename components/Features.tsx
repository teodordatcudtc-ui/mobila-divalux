'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Livrare rapidă și la preț accesibil',
    description:
      'Păstrăm stocuri gata de expediere și folosim un sistem modular, astfel încât mobilă ta ajunge la tine rapid.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: 'Design modular și flexibil',
    description:
      'Mobilă adaptabilă care se potrivește spațiului actual și se mută ușor împreună cu tine în viitor.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zm10 0a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
      </svg>
    ),
  },
  {
    title: 'Materiale de calitate, durabile',
    description:
      'Folosim lemn responsabil, componente din oțel și materiale premium pentru o mobilă care durează.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section
      className="bg-diva-dark py-20 text-white md:py-28"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.h2
          id="features-heading"
          className="text-center text-3xl font-bold md:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Cum transformăm mobilierul pentru tine
        </motion.h2>
        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-10"
            >
              <div className="mb-6 text-diva-neon" aria-hidden>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
