import Image from 'next/image';
import Link from 'next/link';
import type { Tour } from '@/lib/tours';

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/60 bg-white/55 shadow-[0_8px_40px_-15px_rgba(89,54,30,0.25)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:bg-white/75 hover:shadow-[0_20px_60px_-20px_rgba(89,54,30,0.35)]">
      <div className="relative m-2 overflow-hidden rounded-2xl">
        <div className="relative h-56">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-110"
          />
        </div>
        <span className="absolute left-3 top-3 rounded-full border border-white/50 bg-white/70 px-3 py-1 text-xs font-bold text-desert-900 backdrop-blur-xl">
          {tour.duration}
        </span>
        <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-desert-900/60 px-3 py-1 text-xs font-bold text-white backdrop-blur-xl">
          ★ {tour.rating.toFixed(1)}
        </span>
      </div>

      <div className="px-5 pb-5 pt-3">
        <p className="text-[11px] font-bold uppercase tracking-wider text-sand-600">
          {tour.location}
        </p>
        <h3 className="mt-1.5 text-lg font-bold leading-snug text-desert-900">
          {tour.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-desert-800/70">
          {tour.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-white/60 pt-4">
          <div>
            <span className="text-[11px] font-medium text-desert-800/60">From</span>
            <p className="text-lg font-extrabold text-desert-900">
              {tour.price.toLocaleString()}{' '}
              <span className="text-xs font-bold text-sand-700">ETB</span>
            </p>
          </div>
          <Link
            href={`/tours/${tour.slug}`}
            className="rounded-full bg-gradient-to-br from-sand-500 to-sand-700 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-sand-900/20 transition hover:from-sand-600 hover:to-sand-800"
          >
            View tour
          </Link>
        </div>
      </div>
    </article>
  );
}
