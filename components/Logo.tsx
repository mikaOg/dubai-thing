import Link from 'next/link';

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5 sm:gap-3">
      {/* Land Cruiser badge */}
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-amber-300/50 bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 shadow-[0_4px_14px_-4px_rgba(217,152,50,0.7),inset_0_1px_0_0_rgba(255,255,255,0.55)] transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11">
        {/* shine */}
        <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/50 to-transparent" />

        {/* Land Cruiser silhouette (side profile) */}
        <svg
          viewBox="0 0 48 32"
          className="relative h-6 w-6 text-desert-900 drop-shadow-sm sm:h-7 sm:w-7"
          fill="currentColor"
        >
          {/* roof + body */}
          <path d="M6 13 L6 10 Q6 8 8 8 L28 8 Q30 8 31.5 9.5 L37 15 L42 15.5 Q44 15.7 44.5 17.5 L45 20 Q45 22 43 22 L40 22 A3.5 3.5 0 0 0 33 22 L15 22 A3.5 3.5 0 0 0 8 22 L5 22 Q3 22 3 20 L3 17 Q3 15 5 14 Z" />
          {/* roof rack */}
          <rect x="9" y="5.5" width="20" height="1.6" rx="0.6" />
          <rect x="10.5" y="6.8" width="1" height="1.4" rx="0.3" />
          <rect x="26.5" y="6.8" width="1" height="1.4" rx="0.3" />
          {/* windows */}
          <rect x="10" y="10" width="6" height="4" rx="0.6" fill="#fdf3e2" opacity="0.9" />
          <rect x="17.5" y="10" width="6" height="4" rx="0.6" fill="#fdf3e2" opacity="0.9" />
          <rect x="25.5" y="10.5" width="4" height="3.5" rx="0.6" fill="#fdf3e2" opacity="0.9" />
          {/* front bull-bar / headlight */}
          <rect x="42.5" y="17" width="3" height="2.5" rx="0.5" fill="#fdf3e2" opacity="0.85" />
          {/* wheels */}
          <circle cx="11.5" cy="22" r="3.5" />
          <circle cx="36.5" cy="22" r="3.5" />
          <circle cx="11.5" cy="22" r="1.4" fill="#fdf3e2" />
          <circle cx="36.5" cy="22" r="1.4" fill="#fdf3e2" />
        </svg>
      </span>

      {/* Wordmark */}
      <span className="leading-none">
        <span
          className={`block text-[13px] font-extrabold tracking-tight transition-colors sm:text-[15px] ${
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
