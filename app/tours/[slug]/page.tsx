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
      <section className="relative isolate h-[55vh] min-h-[380px] overflow-hidden">
        <Image src={tour.image} alt={tour.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-desert-900/95 via-desert-900/50 to-desert-900/20" />

        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
            <Link href="/tours" className="text-xs font-semibold text-sand-200 hover:text-white">
              ← All tours
            </Link>
            <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              {tour.title}
            </h1>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-sand-100/90">
              <span>📍 {tour.location}</span>
              <span>⏱ {tour.duration}</span>
              <span>👥 {tour.groupSize}</span>
              <span>⛰ {tour.difficulty}</span>
              <span className="text-sand-300">★ {tour.rating.toFixed(1)} ({tour.reviews} reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {tour.gallery.map((src, i) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-xl ${
                i === 0 ? 'col-span-2 h-72 sm:h-80' : 'h-40 sm:h-40'
              }`}
            >
              <Image
                src={src}
                alt={`${tour.title} photo ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
          <div>
            <p className="text-lg leading-relaxed text-desert-800/85">{tour.excerpt}</p>

            <div className="mt-12">
              <h2 className="text-2xl font-extrabold text-desert-900">Trip highlights</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {tour.highlights.map((h) => (
                  <li key={h} className="flex gap-3 rounded-xl border border-sand-200 bg-sand-50/50 p-4 text-sm text-desert-800">
                    <span className="text-sand-600">✓</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-extrabold text-desert-900">Day by day</h2>
              <ol className="mt-6 space-y-6 border-l-2 border-sand-200 pl-6">
                {tour.itinerary.map((d) => (
                  <li key={d.day} className="relative">
                    <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-sand-600" />
                    <p className="text-xs font-bold uppercase tracking-wider text-sand-600">{d.day}</p>
                    <h3 className="mt-1 text-lg font-bold text-desert-900">{d.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-desert-800/75">{d.detail}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-lg font-extrabold text-desert-900">What&apos;s included</h3>
                <ul className="mt-4 space-y-2 text-sm text-desert-800/80">
                  {tour.includes.map((i) => (
                    <li key={i} className="flex gap-2"><span className="text-green-600">✓</span>{i}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-desert-900">Not included</h3>
                <ul className="mt-4 space-y-2 text-sm text-desert-800/80">
                  {tour.excludes.map((i) => (
                    <li key={i} className="flex gap-2"><span className="text-red-500">✕</span>{i}</li>
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
