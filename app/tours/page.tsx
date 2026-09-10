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
      <section className="bg-desert-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((t) => (
            <TourCard key={t.slug} tour={t} />
          ))}
        </div>
      </section>
    </>
  );
}
