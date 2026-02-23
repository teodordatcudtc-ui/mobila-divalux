import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16">
      <h1 className="text-6xl font-bold text-diva-dark md:text-8xl">404</h1>
      <p className="mt-4 text-xl text-diva-dark/70">
        Pagina nu a fost găsită.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-diva-dark px-6 py-3 font-semibold text-white transition hover:bg-diva-plum focus:outline-none focus-visible:ring-2 focus-visible:ring-diva-neon"
      >
        Înapoi la prima pagină
      </Link>
    </div>
  );
}
