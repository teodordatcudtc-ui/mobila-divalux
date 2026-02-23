import { SITE } from '@/lib/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contactează ${SITE.name}. Telefon: ${SITE.phone}. ${SITE.shortDescription}.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold text-diva-dark md:text-5xl">
            Contact
          </h1>
          <p className="mt-6 text-lg text-diva-dark/80">
            Ai întrebări despre produse, livrare sau montaj? Sună-ne sau
            scrie-ne pe Facebook. Suntem aici să te ajutăm.
          </p>
          <ul className="mt-12 space-y-8" role="list">
            <li>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-diva-magenta">
                Telefon
              </h2>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                className="mt-2 block text-2xl font-bold text-diva-dark hover:text-diva-magenta"
              >
                {SITE.phone}
              </a>
            </li>
            {SITE.address && (
              <li>
                <h2 className="text-sm font-semibold uppercase tracking-widest text-diva-magenta">
                  Adresă
                </h2>
                <p className="mt-2 text-diva-dark/90">{SITE.address}</p>
              </li>
            )}
            <li>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-diva-magenta">
                Facebook
              </h2>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-diva-dark hover:text-diva-magenta"
              >
                Pagina noastră Facebook
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="rounded-2xl bg-diva-dark p-8 text-white md:p-12">
          <h2 className="text-xl font-bold">Trimite-ne un mesaj</h2>
          <p className="mt-2 text-white/80">
            Pentru comenzi sau informații, te rugăm să ne suni la{' '}
            <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="underline hover:text-diva-neon">
              {SITE.phone}
            </a>{' '}
            sau să ne contactezi pe{' '}
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="underline hover:text-diva-neon">
              Facebook
            </a>.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`tel:${SITE.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 rounded-full bg-diva-neon px-6 py-3 font-semibold text-diva-dark transition hover:bg-diva-neon-dim"
            >
              Sună acum
            </a>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 font-semibold transition hover:border-diva-neon hover:text-diva-neon"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
