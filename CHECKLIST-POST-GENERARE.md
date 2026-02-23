# TO-DO list – verificare post-generare

Parcurge acest checklist după ce ai generat site-ul.

---

## 1. Instalare și prima rulare

- [ ] Deschizi un terminal în folderul proiectului (`mobila-divalux`).
- [ ] Rulezi: `npm install`
- [ ] Rulezi: `npm run dev`
- [ ] Deschizi în browser: http://localhost:3000
- [ ] Verifici că homepage-ul se încarcă (Hero, produse, categorii, testimoniale).

---

## 2. Navigare și pagini

- [ ] Click pe **Acasă** – rămâi pe `/`.
- [ ] Click pe **Produse** – mergi la `/produse`, vezi lista de produse.
- [ ] Click pe un produs – mergi la `/produse/[nume-produs]`, vezi detaliile.
- [ ] Click pe **Despre noi** – mergi la `/despre-noi`.
- [ ] Click pe **Contact** – mergi la `/contact`, vezi telefon și Facebook.
- [ ] Verifici că toate linkurile deschid în același tab (nu anchor-uri care doar scroll).

---

## 3. Conținut de completat

- [ ] Completezi **adresa fizică** în `lib/site.ts` (câmpul `address`), dacă o ai.
- [ ] (Opțional) Înlocuiești imaginile din `lib/products.ts` cu URL-uri reale sau încarci poze în `public/` și folosești `/nume-fisier.jpg`.

---

## 4. Build și domeniu

- [ ] Rulezi: `npm run build` – nu trebuie să apară erori.
- [ ] Dacă site-ul va fi pe alt domeniu decât `mobiladivalux.ro`, actualizezi:
  - `app/layout.tsx` – `metadataBase: new URL('https://...')`
  - `app/sitemap.ts` – variabila `base`
  - `app/robots.ts` – `sitemap: 'https://.../sitemap.xml'`

---

## 5. Dispozitive și accesibilitate

- [ ] Testezi pe mobil: meniul hamburger funcționează, butoanele sunt apelabile.
- [ ] Verifici că poți naviga cu Tab și că focus-ul este vizibil (contur la elementele focusate).

---

## 6. (Opțional) Logo

- [ ] Dacă vrei logo-ul firmei ca imagine: pui fișierul în `public/` (ex: `public/logo.png`) și actualizezi `components/Logo.tsx` să afișeze `<Image src="/logo.png" ... />` în loc de textul DD + DIVA.

---

După ce parcurgi pașii de mai sus, site-ul este gata de folosit și de deploy.
