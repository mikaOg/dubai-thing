import Link from 'next/link';

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sand-400 to-sand-600 shadow-md sm:h-11 sm:w-11">
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-white sm:h-6 sm:w-6" fill="currentColor">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 018 8h-4a4 4 0 00-4-4V4z" />
        </svg>
      </span>
      <span className="leading-none">
        <span
          className={`block text-[13px] font-extrabold tracking-tight sm:text-[15px] ${
            light ? 'text-white' : 'text-desert-900'
          }`}
        >
          Ethio Connect
        </span>
        <span
          className={`block text-[9px] font-semibold uppercase tracking-[0.22em] sm:text-[10px] ${
            light ? 'text-sand-200' : 'text-sand-600'
          }`}
        >
          To Desert
        </span>
      </span>
    </Link>
  );
}
