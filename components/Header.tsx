'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE, NAV } from '@/lib/site';
import Logo from './Logo';

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/10 bg-diva-dark/95 backdrop-blur-md"
      role="banner"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <nav
          className="flex items-center gap-8"
          aria-label="Navigație principală"
        >
          <Logo />
          <ul className="hidden items-center gap-6 md:flex">
            {NAV.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative py-2 text-sm font-medium uppercase tracking-wider transition-colors hover:text-diva-neon ${
                      isActive ? 'text-diva-neon' : 'text-white/90'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-diva-neon"
                        transition={{ type: 'spring', duration: 0.4 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={`tel:${SITE.phone.replace(/\s/g, '')}`}
            className="hidden text-sm text-white/80 transition hover:text-diva-neon sm:inline"
            aria-label={`Sună ${SITE.phone}`}
          >
            {SITE.phone}
          </a>
          <a
            href={SITE.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-white/80 transition hover:bg-white/10 hover:text-diva-neon"
            aria-label="Facebook Mobila DivaLux"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="rounded p-2 text-white md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Meniu"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-white/10 bg-diva-dark md:hidden"
          >
            <ul className="flex flex-col gap-0 py-4">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-6 py-3 text-sm font-medium uppercase tracking-wider ${
                      pathname === item.href ? 'text-diva-neon' : 'text-white/90'
                    } hover:bg-white/5 hover:text-diva-neon`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                  className="block px-6 py-3 text-sm text-white/80 hover:bg-white/5"
                >
                  {SITE.phone}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
