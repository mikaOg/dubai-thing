import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { tours, getTour } from '@/lib/tours';
import BookingForm from '@/components/BookingForm';

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const tour = getTour(params.slug);
  if (!tour) return { title: 'Tour not found' };
  return { title: tour.title, description: tour.excerpt };
}

export default function TourDetailPage({ params }: { params: { slug: string } }) {
  const tour = getTour(params.slug);
  if (!tour) notFound();

  return (
    <>
      <section className="px-3 pt-4 sm:px-4">
        <div className="relative isolate mx-auto h-[55vh] min-h-[400px] max-w-7xl overflow-hidden rounded-3xl">
          <Image src={tour.image} alt={tour.title} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-desert-900/95 via-desert-900/45 to-desert-900/15" />

          <div className="absolute inset-x-0 bottom-0">
            <div className="px-6 pb-8 sm:px-10 sm:pb-10">
              <Link
                href="/tours"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-sand-100 backdrop-blur-xl transition hover:bg-white/20"
              >
                ← All tours
              </Link>
              <h1 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-white drop-shadow-2xl sm:text-5xl">
                {tour.title}
              </h1>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
                {[
                  `📍 ${tour.location}`,
                  `⏱ ${tour.duration}`,
                  `👥 ${tour.groupSize}`,
                  `⛰ ${tour.difficulty}`,
                  `★ ${tour.rating.toFixed(1)} (${tour.reviews})`,
                ].map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-sand-100 backdrop-blur-xl"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3">
          {tour.gallery.map((src, i) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-2xl border border-white/60 shadow-[0_8px_40px_-15px_rgba(89,54,30,0.25)] ${
                i === 0 ? 'col-span-2 h-72 sm:h-96' : 'h-48 sm:h-64'
              }`}
            >
              <Image
                src={src}
                alt={`${tour.title} photo ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-8">
            <div className="rounded-3xl border border-white/60 bg-white/55 p-6 shadow-[0_8px_40px_-15px_rgba(89,54,30,0.2)] backdrop-blur-2xl sm:p-8">
              <p className="text-base leading-relaxed text-desert-800/85 sm:text-lg">
                {tour.excerpt}
              </p>
            </div>

            <div className="rounded-3xl border border-white/60 bg-white/55 p-6 shadow-[0_8px_40px_-15px_rgba(89,54,30,0.2)] backdrop-blur-2xl sm:p-8">
              <h2 className="text-2xl font-extrabold text-desert-900">Trip highlights</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {tour.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 rounded-xl border border-white/60 bg-white/45 p-4 text-sm text-desert-800 backdrop-blur-xl"
                  >
                    <span className="text-sand-600">✓</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/60 bg-white/55 p-6 shadow-[0_8px_40px_-15px_rgba(89,54,30,0.2)] backdrop-blur-2xl sm:p-8">
              <h2 className="text-2xl font-extrabold text-desert-900">Day by day</h2>
              <ol className="mt-6 space-y-6 border-l-2 border-sand-200/70 pl-6">
                {tour.itinerary.map((d) => (
                  <li key={d.day} className="relative">
                    <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-sand-600" />
                    <p className="text-xs font-bold uppercase tracking-wider text-sand-600">
                      {d.day}
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-desert-900">{d.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-desert-800/75">{d.detail}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/60 bg-white/55 p-6 shadow-[0_8px_40px_-15px_rgba(89,54,30,0.2)] backdrop-blur-2xl">
                <h3 className="text-lg font-extrabold text-desert-900">What&apos;s included</h3>
                <ul className="mt-4 space-y-2 text-sm text-desert-800/80">
                  {tour.includes.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-white/60 bg-white/55 p-6 shadow-[0_8px_40px_-15px_rgba(89,54,30,0.2)] backdrop-blur-2xl">
                <h3 className="text-lg font-extrabold text-desert-900">Not included</h3>
                <ul className="mt-4 space-y-2 text-sm text-desert-800/80">
                  {tour.excludes.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-red-500">✕</span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <BookingForm tour={tour} />
          </aside>
        </div>
      </section>
    </>
  );
}
