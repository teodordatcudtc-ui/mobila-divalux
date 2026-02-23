import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS, CATEGORIES } from '@/lib/products';
import type { Product } from '@/lib/products';

type SearchParams = { categorie?: string } | Promise<{ categorie?: string }>;

function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <article
          key={product.id}
          className="group flex flex-col rounded-xl bg-white shadow-lg transition hover:shadow-neon-lg"
        >
          <Link href={`/produse/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden rounded-t-xl bg-diva-cream">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </Link>
          <div className="flex flex-1 flex-col p-5">
            {product.colors && product.colors.length > 0 && (
              <div className="flex flex-wrap gap-1.5" aria-label="Culori disponibile">
                {product.colors.slice(0, 4).map((c) => (
                  <span
                    key={c.name}
                    className="h-4 w-4 rounded-full border border-diva-dark/20"
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
                {product.colors.length > 4 && (
                  <span className="text-xs text-diva-dark/60">+ Opțiuni</span>
                )}
              </div>
            )}
            <h2 className="mt-3 font-semibold text-diva-dark group-hover:text-diva-magenta">
              <Link href={`/produse/${product.slug}`}>{product.name}</Link>
            </h2>
            <div className="mt-auto flex items-end justify-between pt-4">
              <div>
                {product.priceOld && (
                  <span className="text-sm text-diva-dark/50 line-through">
                    {product.priceOld.toLocaleString('ro-RO')} lei
                  </span>
                )}
                <p className="font-bold text-diva-dark">
                  {product.price.toLocaleString('ro-RO')} lei
                </p>
              </div>
              <Link
                href={`/produse/${product.slug}`}
                className="text-diva-magenta transition hover:text-diva-neon"
                aria-label={`Vezi ${product.name}`}
              >
                →
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function getCategorie(searchParams: SearchParams): string | undefined {
  if (searchParams && typeof (searchParams as { categorie?: string }).categorie === 'string') {
    return (searchParams as { categorie?: string }).categorie;
  }
  return undefined;
}

export default async function ProdusePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const resolved = await Promise.resolve(searchParams);
  const categorie = getCategorie(resolved);
  const products = categorie
    ? PRODUCTS.filter((p) => p.category === categorie)
    : PRODUCTS;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
      <h1 className="text-4xl font-bold text-diva-dark md:text-5xl">
        Produse
      </h1>
      <p className="mt-4 max-w-2xl text-diva-dark/70">
        Explorează gama noastră de mobilă: living, dormitor, birou și accesorii.
      </p>

      <nav
        className="mt-10 flex flex-wrap gap-2"
        aria-label="Filtrare pe categorii"
      >
        <Link
          href="/produse"
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            !categorie
              ? 'bg-diva-dark text-white'
              : 'bg-diva-dark/10 text-diva-dark hover:bg-diva-dark/20'
          }`}
        >
          Toate
        </Link>
        {CATEGORIES.map((cat) => (
          <Link
            key={cat}
            href={`/produse?categorie=${encodeURIComponent(cat)}`}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              categorie === cat
                ? 'bg-diva-dark text-white'
                : 'bg-diva-dark/10 text-diva-dark hover:bg-diva-dark/20'
            }`}
          >
            {cat}
          </Link>
        ))}
      </nav>

      <div className="mt-10">
        {products.length === 0 ? (
          <p className="text-diva-dark/70">Niciun produs în această categorie.</p>
        ) : (
          <ProductGrid products={products} />
        )}
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Produse',
  description: 'Mobilă DivaLux – canapele, fotolii, mese, dormitor, birou. Vezi toate produsele.',
};
