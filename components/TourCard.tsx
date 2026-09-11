import Image from 'next/image';
import Link from 'next/link';
import type { Tour } from '@/lib/tours';

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/20 shadow-[0_8px_32px_-8px_rgba(89,54,30,0.25),inset_0_1px_0_0_rgba(255,255,255,0.7)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:bg-white/30 sm:rounded-3xl">
      <span className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/50 to-transparent mix-blend-overlay sm:h-24" />

      <div className="relative m-1.5 overflow-hidden rounded-xl sm:m-2 sm:rounded-2xl">
        <div className="relative h-40 sm:h-56">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            sizes="(max-width: 768px) 90vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        <span className="absolute left-2 top-2 rounded-full border border-white/60 bg-white/40 px-2.5 py-0.5 text-[10px] font-bold text-desert-900 shadow-sm backdrop-blur-xl sm:left-3 sm:top-3 sm:px-3 sm:py-1 sm:text-xs">
          {tour.duration}
        </span>
        <span className="absolute right-2 top-2 rounded-full border border-white/20 bg-black/40 px-2.5 py-0.5 text-[10px] font-bold text-white backdrop-blur-xl sm:right-3 sm:top-3 sm:px-3 sm:py-1 sm:text-xs">
          ★ {tour.rating.toFixed(1)}
        </span>
      </div>

      <div className="relative px-3.5 pb-3.5 pt-2 sm:px-5 sm:pb-5 sm:pt-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-sand-700 sm:text-[11px]">
          {tour.location}
        </p>
        <h3 className="mt-1 text-sm font-bold leading-snug text-desert-900 sm:mt-1.5 sm:text-lg">
          {tour.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-desert-800/75 sm:mt-2 sm:text-sm">
          {tour.excerpt}
        </p>

        <div className="mt-3.5 flex items-center justify-between border-t border-white/60 pt-3 sm:mt-5 sm:pt-4">
          <div>
            <span className="text-[10px] font-medium text-desert-800/60 sm:text-[11px]">
              From
            </span>
            <p className="text-sm font-extrabold text-desert-900 sm:text-lg">
              {tour.price.toLocaleString()}{' '}
              <span className="text-[10px] font-bold text-sand-700 sm:text-xs">ETB</span>
            </p>
          </div>
          <Link
            href={`/tours/${tour.slug}`}
            className="rounded-full px-3.5 py-1.5 text-xs font-bold text-white shadow-md transition hover:brightness-110 sm:px-5 sm:py-2.5 sm:text-sm"
            style={{
              background: 'linear-gradient(135deg, #db9c4d 0%, #a86527 100%)',
              boxShadow:
                'inset 0 1px 0 0 rgba(255,255,255,0.35), 0 8px 24px -8px rgba(168,101,39,0.6)',
            }}
          >
            View tour
          </Link>
        </div>
      </div>
    </article>
  );
}
