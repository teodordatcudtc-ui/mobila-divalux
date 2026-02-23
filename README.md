# Mobila DivaLux – Site web

Site multi-pagină pentru magazinul online de mobilă **Mobila DivaLux**, construit cu Next.js, design asimetric și identitate vizuală distinctă (logo DD + DIVA, accent neon pink pe fond vin închis).

---

## Arhitectură și stack

- **Framework:** Next.js 14 (App Router)
- **Routing:** App Router – fiecare pagină are URL propriu, fără navigație prin anchor scrolling.
- **Stilizare:** Tailwind CSS (culori brand: `diva-dark`, `diva-plum`, `diva-neon`, `diva-cream`).
- **Animații:** Framer Motion pentru micro-interacțiuni și tranziții.
- **Limbă:** React 18, TypeScript.

**Structura paginilor:**

| URL | Descriere |
|-----|-----------|
| `/` | Acasă – Hero, produse recomandate, beneficii, categorii, testimoniale |
| `/produse` | Listă produse, filtrare pe categorie (query `?categorie=...`) |
| `/produse/[slug]` | Pagină produs (detaliu, preț, culori, CTA telefon) |
| `/despre-noi` | Despre Mobila DivaLux |
| `/contact` | Contact – telefon, Facebook, (adresă dacă e completată) |

**De ce App Router:** RSC pentru SEO mai bun, layout-uri clare, `generateMetadata` și `generateStaticParams` pentru produse, suport nativ pentru sitemap și robots.

---

## Comenzi de rulat (copy-paste)

```bash
# 1. Instalare dependențe
npm install

# 2. Rulare în development
npm run dev

# 3. Build pentru producție
npm run build

# 4. Rulare build-ul (după npm run build)
npm start

# 5. Lint (opțional)
npm run lint
```

După `npm run dev`, site-ul este disponibil la **http://localhost:3000**.

---

## Configurare conținut

- **Date business:** `lib/site.ts` – nume, descriere scurtă, telefon, adresă, Facebook, email.
- **Produse:** `lib/products.ts` – listă produse (nume, slug, preț, imagini, culori, categorii). Poți adăuga produse noi sau înlocui imaginile cu URL-uri proprii.
- **Adresă fizică:** momentan goală în `lib/site.ts`; completează când o ai.

---

## SEO și accesibilitate

- **SEO:** Meta title/description pe layout și pe pagini (inclusiv produse), `metadataBase`, `openGraph`, `keywords`. Sitemap în `app/sitemap.ts`, robots în `app/robots.ts`. Actualizează domeniul în `app/layout.tsx` (metadataBase), `app/sitemap.ts` și `app/robots.ts` cu domeniul real.
- **Accesibilitate:** Focus visible (outline pe focus), `aria-label` pe link-uri/butoane importante, structură semantică (header, main, footer, nav, section, headings). `prefers-reduced-motion` respectat în CSS.

---

## Checklist post-generare

- [ ] Rulezi `npm install` și `npm run dev`; verifici toate paginile în browser.
- [ ] Completezi **adresa fizică** în `lib/site.ts` (dacă există).
- [ ] Înlocuiești URL-urile de imagine din `lib/products.ts` cu poze reale ale produselor (sau păstrezi Unsplash pentru demo).
- [ ] Actualizezi domeniul de producție în `app/layout.tsx` (metadataBase), `app/sitemap.ts` și `app/robots.ts` (în loc de `https://mobiladivalux.ro` dacă e altul).
- [ ] Testezi pe mobil: meniu hamburger, butoane, link-uri.
- [ ] Rulezi `npm run build` și verifici că nu există erori.
- [ ] (Opțional) Adaugi logo-ul firmei în `public/` și îl folosești în `components/Logo.tsx` (acum este SVG/text stilizat DD + DIVA).

---

## Fișiere importante

- `app/layout.tsx` – layout global, metadata, Header + Footer.
- `app/page.tsx` – homepage (Hero, Bestsellers, Features, Categories, Testimonials).
- `app/produse/page.tsx` – listă + filtru categorii.
- `app/produse/[slug]/page.tsx` – pagină produs.
- `components/` – Header, Footer, Logo, Hero, Bestsellers, Features, Categories, Testimonials.
- `lib/site.ts` – date business. `lib/products.ts` – produse și categorii.
- `tailwind.config.ts` – culori brand (`diva-*`).

Toate linkurile deschid în același tab; nu există navigație doar prin anchor-uri. Fiecare secțiune are identitate vizuală proprie (culori, layout asimetric, spațieri diferite).
