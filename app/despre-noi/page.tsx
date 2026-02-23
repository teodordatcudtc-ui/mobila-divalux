import { SITE } from '@/lib/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Despre noi',
  description: `Află mai multe despre ${SITE.name} – ${SITE.shortDescription}. Calitate, design și servicii dedicate.`,
};

export default function DespreNoiPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h1 className="text-4xl font-bold text-diva-dark md:text-5xl">
            Despre Mobila DivaLux
          </h1>
          <p className="mt-6 text-lg text-diva-dark/80">
            Suntem dedicați să aducem în casele voastre mobilă de calitate, cu
            design contemporan și un raport excelent între preț și durabilitate.
          </p>
          <div className="mt-10 space-y-6">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-diva-magenta">
                Misiunea noastră
              </h2>
              <p className="mt-2 text-diva-dark/80">
                Să oferim mobilier care se potrivește atât spațiului tău, cât și
                stilului tău de viață – fără compromisuri la calitate sau estetică.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-diva-magenta">
                De ce DivaLux
              </h2>
              <p className="mt-2 text-diva-dark/80">
                Materiale alese, design atemporal și un serviciu de livrare și
                montaj la care poți conta. Fiecare produs este gândit să reziste
                în timp și să se integreze armonios în casa ta.
              </p>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-7">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-diva-plum/20 lg:aspect-auto lg:min-h-[500px]">
            <div
              className="h-full w-full bg-cover bg-center opacity-90"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200)`,
              }}
              role="img"
              aria-label="Mobilă de calitate în interior modern"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden max-w-xs rounded-2xl border-2 border-diva-neon/30 bg-white p-6 shadow-xl lg:block">
            <p className="text-2xl font-bold text-diva-dark">
              {SITE.name}
            </p>
            <p className="mt-1 text-sm text-diva-dark/70">
              {SITE.shortDescription}
            </p>
            <a
              href={`tel:${SITE.phone.replace(/\s/g, '')}`}
              className="mt-4 inline-block font-semibold text-diva-magenta hover:text-diva-neon"
            >
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
