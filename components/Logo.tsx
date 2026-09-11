import Link from 'next/link';

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5 sm:gap-3">
      {/* Land Cruiser badge */}
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-amber-300/60 bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 shadow-[0_4px_14px_-4px_rgba(217,152,50,0.7),inset_0_1px_0_0_rgba(255,255,255,0.55)] transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12">
        {/* shine */}
        <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/55 to-transparent" />

        {/* Bold Land Cruiser silhouette */}
        <svg
          viewBox="0 0 64 40"
          className="relative h-7 w-9 text-desert-900 drop-shadow-sm sm:h-8 sm:w-10"
          fill="none"
        >
          {/* Body */}
          <path
            d="M4 22 L4 14 Q4 11 7 10.5 L38 10 Q41 10 43 12 L50 19 L58 20 Q61 20.3 61.5 23 L62 27 Q62 30 59 30 L55 30 A4.5 4.5 0 0 0 46 30 L20 30 A4.5 4.5 0 0 0 11 30 L6 30 Q3 30 3 27 L3 24 Q3 22.5 4 22 Z"
            fill="currentColor"
          />
          {/* Roof rack */}
          <rect x="8" y="6" width="30" height="2.2" rx="0.8" fill="currentColor" />
          <rect x="10" y="8" width="1.6" height="2.2" rx="0.4" fill="currentColor" />
          <rect x="34" y="8" width="1.6" height="2.2" rx="0.4" fill="currentColor" />
          {/* Windows — light tan */}
          <rect x="10" y="13" width="8" height="5.5" rx="0.8" fill="#fdf3e2" />
          <rect x="20" y="13" width="8" height="5.5" rx="0.8" fill="#fdf3e2" />
          <rect x="30" y="13" width="7" height="5.5" rx="0.8" fill="#fdf3e2" />
          <rect x="39" y="14" width="5" height="4.5" rx="0.8" fill="#fdf3e2" />
          {/* Headlight */}
          <rect x="58.5" y="22" width="3" height="3" rx="0.6" fill="#fdf3e2" />
          {/* Wheels */}
          <circle cx="15.5" cy="30" r="5" fill="currentColor" />
          <circle cx="50.5" cy="30" r="5" fill="currentColor" />
          <circle cx="15.5" cy="30" r="2" fill="#fdf3e2" />
          <circle cx="50.5" cy="30" r="2" fill="#fdf3e2" />
          {/* Ground line */}
          <rect x="2" y="34.5" width="60" height="1.5" rx="0.75" fill="currentColor" opacity="0.35" />
        </svg>
      </span>

      {/* Wordmark */}
      <span className="leading-none">
        <span
          className={`block text-[13.5px] font-extrabold tracking-tight transition-colors sm:text-[15.5px] ${
            light ? 'text-white' : 'text-desert-900'
          }`}
        >
          Ethio Connect
        </span>
        <span
          className={`mt-0.5 block text-[8.5px] font-bold uppercase tracking-[0.28em] sm:text-[9.5px] ${
            light ? 'text-amber-200' : 'text-amber-600'
          }`}
        >
          To Desert
        </span>
      </span>
    </Link>
  );
}
