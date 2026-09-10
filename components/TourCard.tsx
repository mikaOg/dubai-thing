import Image from 'next/image';
import Link from 'next/link';
import type { Tour } from '@/lib/tours';

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-desert-900">
          {tour.duration}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-desert-900/80 px-3 py-1 text-xs font-bold text-white">
          ★ {tour.rating.toFixed(1)}
        </span>
      </div>

      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-sand-600">
          {tour.location}
        </p>
        <h3 className="mt-2 text-lg font-bold text-desert-900">{tour.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-desert-800/70">
          {tour.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-sand-100 pt-4">
          <div>
            <span className="text-xs text-desert-800/60">From</span>
            <p className="text-xl font-extrabold text-desert-900">
              ${tour.price}
              <span className="ml-1 text-xs font-medium text-desert-800/60">/ person</span>
            </p>
          </div>
          <Link
            href={`/tours/${tour.slug}`}
            className="rounded-full bg-sand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sand-700"
          >
            View tour
          </Link>
        </div>
      </div>
    </article>
  );
}
