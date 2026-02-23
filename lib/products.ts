export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  price: number;
  priceOld?: number;
  image: string;
  images?: string[];
  colors?: { name: string; hex: string }[];
  featured?: boolean;
};

export const CATEGORIES = [
  'Scaune și fotolii',
  'Mese',
  'Sufragerie',
  'Dormitor',
  'Living',
  'Birou',
] as const;

export const PRODUCTS: Product[] = [
  {
    id: '1',
    slug: 'canapea-serenity-timber',
    name: 'Canapea Serenity Timber',
    category: 'Living',
    shortDescription: 'Canapea cu elemente din lemn masiv și tapiterie premium.',
    longDescription:
      'Canapea Serenity Timber combină confortul tapiteriei premium cu caldura lemnului masiv. Cadru din stejar natural, perne din materiale de înaltă calitate. Ideală pentru living sau zonă de relaxare.',
    price: 4299,
    priceOld: 4999,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200',
    ],
    colors: [
      { name: 'Gri', hex: '#9ca3af' },
      { name: 'Bej', hex: '#d4b896' },
      { name: 'Albastru petrol', hex: '#0d9488' },
    ],
    featured: true,
  },
  {
    id: '2',
    slug: 'fotoliu-block-nomad',
    name: 'Fotoliu Block Nomad',
    category: 'Living',
    shortDescription: 'Fotoliu modular, design minimalist, confort superior.',
    longDescription:
      'Fotoliu Block Nomad oferă un design modular și minimalist. Cadru robust, tapiterie din materiale durabile. Se integrează perfect în orice living modern.',
    price: 1899,
    priceOld: 2199,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
    colors: [
      { name: 'Gri deschis', hex: '#e5e7eb' },
      { name: 'Antracit', hex: '#374151' },
      { name: 'Navy', hex: '#1e3a5f' },
    ],
    featured: true,
  },
  {
    id: '3',
    slug: 'canapea-nomad-loveseat',
    name: 'Canapea Nomad – Loveseat',
    category: 'Living',
    shortDescription: 'Canapea compactă cu perne decorative și picioare subțiri.',
    longDescription:
      'Canapea Nomad Loveseat este alegerea ideală pentru spații mai mici. Design curat, perne decorative și picioare metalice subțiri. Disponibilă în mai multe nuanțe.',
    price: 2699,
    priceOld: 2999,
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800',
    colors: [
      { name: 'Crem', hex: '#fef3c7' },
      { name: 'Gri', hex: '#9ca3af' },
      { name: 'Albastru', hex: '#3b82f6' },
    ],
    featured: true,
  },
  {
    id: '4',
    slug: 'masa-de-living-oak',
    name: 'Masă de living Oak',
    category: 'Living',
    shortDescription: 'Masă de cafea din stejar masiv, design organic.',
    longDescription:
      'Masă de living din stejar masiv, cu formă organică și finisaj natural. Rezistentă și ușor de întreținut. Perfectă alături de canapeaua Serenity Timber.',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800',
    colors: [
      { name: 'Stejar natural', hex: '#b8860b' },
      { name: 'Stejar închis', hex: '#5c4033' },
    ],
    featured: false,
  },
  {
    id: '5',
    slug: 'dulap-dormitor-aurora',
    name: 'Dulap dormitor Aurora',
    category: 'Dormitor',
    shortDescription: 'Dulap cu uși glisante și interior organizat.',
    longDescription:
      'Dulap Aurora oferă spațiu generos și organizare eficientă. Uși glisante, interior reglabil și finisaj de calitate. Disponibil în mai multe dimensiuni.',
    price: 3499,
    priceOld: 3899,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800',
    colors: [
      { name: 'Alb', hex: '#ffffff' },
      { name: 'Gri', hex: '#6b7280' },
      { name: 'Nuc', hex: '#78350f' },
    ],
    featured: false,
  },
  {
    id: '6',
    slug: 'birou-executiv-prime',
    name: 'Birou executiv Prime',
    category: 'Birou',
    shortDescription: 'Birou mare, lemn masiv, pentru home office.',
    longDescription:
      'Birou executiv Prime este ideal pentru lucrul de acasă sau birou. Blat din lemn masiv, sertare și spațiu pentru cabluri. Design profesional și durabil.',
    price: 2199,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800',
    colors: [
      { name: 'Nuc', hex: '#78350f' },
      { name: 'Alb', hex: '#f8fafc' },
    ],
    featured: false,
  },
  {
    id: '7',
    slug: 'masa-de-sufragerie-nordic',
    name: 'Masă de sufragerie Nordic',
    category: 'Sufragerie',
    shortDescription: 'Masă mare din lemn masiv, 6–8 persoane. Design nordic.',
    longDescription:
      'Masă de sufragerie Nordic oferă spațiu generos pentru mese în familie. Blat din stejar, picioare solide. Finisaj natural sau închis. Livrare și montaj la comandă.',
    price: 3299,
    priceOld: 3599,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800',
    colors: [
      { name: 'Stejar', hex: '#d4a574' },
      { name: 'Nuc', hex: '#5c4033' },
    ],
    featured: true,
  },
  {
    id: '8',
    slug: 'scaun-birou-ergo',
    name: 'Scaun birou Ergo',
    category: 'Birou',
    shortDescription: 'Scaun ergonomic, spătar reglabil, pentru ore lungi la birou.',
    longDescription:
      'Scaun birou Ergo cu suport lumbar și brațe reglabile. Bază metalică, rotile pentru podea. Ideal home office sau corporat.',
    price: 899,
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800',
    colors: [
      { name: 'Negru', hex: '#1f2937' },
      { name: 'Gri', hex: '#6b7280' },
      { name: 'Albastru', hex: '#2563eb' },
    ],
    featured: true,
  },
  {
    id: '9',
    slug: 'comoda-dormitor-luna',
    name: 'Comodă dormitor Luna',
    category: 'Dormitor',
    shortDescription: 'Comodă cu 3 sertare și oglindă. Design minimalist.',
    longDescription:
      'Comodă Luna pentru dormitor: sertare ample, blat rezistent, finisaj mat. Opțional cu oglindă. Se potrivește cu patul și dulapul Aurora.',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800',
    colors: [
      { name: 'Alb', hex: '#ffffff' },
      { name: 'Gri', hex: '#9ca3af' },
    ],
    featured: false,
  },
  {
    id: '10',
    slug: 'fotoliu-relax-velvet',
    name: 'Fotoliu relax Velvet',
    category: 'Scaune și fotolii',
    shortDescription: 'Fotoliu mare din velvet, picioare metal. Confort maxim.',
    longDescription:
      'Fotoliu relax din velvet premium, cadru metalic. Ideal pentru colțul de lectură sau living. Disponibil în mai multe nuanțe.',
    price: 2199,
    priceOld: 2499,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800',
    colors: [
      { name: 'Verde', hex: '#065f46' },
      { name: 'Burgundy', hex: '#722f37' },
      { name: 'Gri', hex: '#4b5563' },
    ],
    featured: true,
  },
  {
    id: '11',
    slug: 'birou-minimal-desk',
    name: 'Birou minimal Desk',
    category: 'Birou',
    shortDescription: 'Birou compact, design minimalist. Ideal spații mici.',
    longDescription:
      'Birou minimal Desk: blat subțire, picioare metal, fără sertare. Perfect pentru laptop și monitor. Economisește spațiu.',
    price: 799,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800',
    colors: [
      { name: 'Alb', hex: '#f8fafc' },
      { name: 'Negru', hex: '#1f2937' },
    ],
    featured: false,
  },
  {
    id: '12',
    slug: 'canapea-sectional-modern',
    name: 'Canapea sectional modern',
    category: 'Living',
    shortDescription: 'Canapea în L, modulară. Tapiterie textilă, confort ridicat.',
    longDescription:
      'Canapea sectional cu design în L, piese modulare. Ideală pentru livinguri mari. Tapiterie textilă durabilă, multiple nuanțe.',
    price: 5499,
    priceOld: 5999,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    colors: [
      { name: 'Gri', hex: '#9ca3af' },
      { name: 'Bej', hex: '#d4b896' },
      { name: 'Albastru', hex: '#3b82f6' },
    ],
    featured: false,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}

export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

/** Pentru secțiunea "Mai multe produse" de pe homepage – 6 produse nefeatured */
export function getMoreProductsForHome(): Product[] {
  return PRODUCTS.filter((p) => !p.featured).slice(0, 6);
}
