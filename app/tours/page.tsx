import type { Metadata } from 'next';
import { tours } from '@/lib/tours';
import TourCard from '@/components/TourCard';

export const metadata: Metadata = {
  title: 'All Tours',
  description: 'Desert expeditions across the Danakil Depression, Erta Ale and the Afar salt flats.',
};

export default function ToursPage() {
  return (
    <>
      <section className="px-3 pt-4 sm:px-4">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-desert-900 to-black px-6 py-14 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] sm:px-10 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sand-400">
            All departures
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Desert tours in Ethiopia
          </h1>
          <p className="mt-4 max-w-2xl text-sand-100/80">
            Every tour includes permits, 4x4 transport, camping equipment, meals and
            local Afar guides. Prices are per person.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((t) => (
            <TourCard key={t.slug} tour={t} />
          ))}
        </div>
      </section>
    </>
  );
}
