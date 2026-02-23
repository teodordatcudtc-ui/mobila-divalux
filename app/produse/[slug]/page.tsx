import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getProductBySlug, getProductsByCategory, PRODUCTS } from '@/lib/products';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Produs negăsit' };
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getProductsByCategory(product.category).filter(
    (p) => p.id !== product.id
  ).slice(0, 3);

  const images = product.images && product.images.length > 0
    ? [product.image, ...product.images]
    : [product.image];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-diva-dark/70">
          <li><Link href="/" className="hover:text-diva-magenta">Acasă</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/produse" className="hover:text-diva-magenta">Produse</Link></li>
          <li aria-hidden>/</li>
          <li className="text-diva-dark" aria-current="page">{product.name}</li>
        </ol>
      </nav>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-diva-cream">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          {images.length > 1 && (
            <div className="flex gap-3">
              {images.slice(0, 4).map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-square w-20 overflow-hidden rounded-lg border-2 border-diva-dark/10 bg-diva-cream"
                >
                  <Image src={src} alt="" fill className="object-cover" sizes="80px" />
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-diva-magenta">
            {product.category}
          </span>
          <h1 className="mt-2 text-4xl font-bold text-diva-dark md:text-5xl">
            {product.name}
          </h1>
          <p className="mt-4 text-lg text-diva-dark/80">
            {product.shortDescription}
          </p>
          <div className="mt-6 flex items-baseline gap-4">
            {product.priceOld && (
              <span className="text-xl text-diva-dark/50 line-through">
                {product.priceOld.toLocaleString('ro-RO')} lei
              </span>
            )}
            <span className="text-3xl font-bold text-diva-dark">
              {product.price.toLocaleString('ro-RO')} lei
            </span>
          </div>
          {product.colors && product.colors.length > 0 && (
            <div className="mt-6">
              <p className="text-sm font-medium text-diva-dark/80">Culori disponibile</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <span
                    key={c.name}
                    className="inline-flex items-center gap-2 rounded-full border border-diva-dark/20 px-3 py-1.5 text-sm"
                    style={{ borderColor: c.hex }}
                  >
                    <span
                      className="h-4 w-4 rounded-full"
                      style={{ backgroundColor: c.hex }}
                    />
                    {c.name}
                  </span>
                ))}
              </div>
            </div>
          )}
          <div className="mt-8 space-y-4">
            <a
              href={`tel:0740602319`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-diva-dark px-6 py-4 text-white transition hover:bg-diva-plum focus:outline-none focus-visible:ring-2 focus-visible:ring-diva-neon"
            >
              Sună pentru comandă
            </a>
            <p className="text-center text-sm text-diva-dark/60">
              Livrare și montaj la cerere. Contact: 0740 602 319
            </p>
          </div>
          <div className="mt-10 border-t border-diva-dark/10 pt-8">
            <h2 className="text-lg font-semibold text-diva-dark">Descriere</h2>
            <p className="mt-3 text-diva-dark/80">{product.longDescription}</p>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20" aria-labelledby="related-heading">
          <h2 id="related-heading" className="text-2xl font-bold text-diva-dark">
            Produse similare
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/produse/${p.slug}`}
                className="group flex flex-col rounded-xl bg-white shadow-lg transition hover:shadow-neon-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl bg-diva-cream">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold text-diva-dark group-hover:text-diva-magenta">
                    {p.name}
                  </h3>
                  <p className="mt-auto pt-2 font-bold text-diva-dark">
                    {p.price.toLocaleString('ro-RO')} lei
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
