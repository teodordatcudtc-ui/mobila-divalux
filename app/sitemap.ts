import { MetadataRoute } from 'next';
import { PRODUCTS } from '@/lib/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://mobiladivalux.ro';

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/produse`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/despre-noi`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];

  const productPages: MetadataRoute.Sitemap = PRODUCTS.map((p) => ({
    url: `${base}/produse/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...productPages];
}
