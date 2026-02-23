'use client';

import Link from 'next/link';
import { SITE, NAV } from '@/lib/site';

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-diva-dark text-white"
      role="contentinfo"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block text-2xl font-bold text-white">
              <span className="text-neon">DD</span>
              <span className="ml-1 block text-lg tracking-[0.2em]">DIVA</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-white/70">
              {SITE.name} – {SITE.shortDescription}. Mobilă de calitate, design
              contemporan, pentru casa ta.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-diva-neon">
              Navigare
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition hover:text-diva-neon"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-diva-neon">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                  className="transition hover:text-diva-neon"
                >
                  {SITE.phone}
                </a>
              </li>
              {SITE.address && (
                <li className="max-w-[200px]">{SITE.address}</li>
              )}
              <li>
                <a
                  href={SITE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-diva-neon"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {SITE.name}. Toate drepturile rezervate.
        </div>
      </div>
      {/* Element grafic mare - rupe ritmul, identitate vizuală puternică */}
      <div
        className="absolute -bottom-20 -right-20 select-none text-[min(20vw,280px)] font-bold leading-none text-diva-plum/40"
        aria-hidden
      >
        DIVA
      </div>
    </footer>
  );
}
