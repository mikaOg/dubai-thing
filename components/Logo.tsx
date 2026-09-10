import Link from 'next/link';

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sand-400 to-sand-600 shadow-md">
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 018 8h-4a4 4 0 00-4-4V4z" />
        </svg>
      </span>
      <span className="leading-none">
        <span
          className={`block text-[15px] font-extrabold tracking-tight ${
            light ? 'text-white' : 'text-desert-900'
          }`}
        >
          Ethio Connect
        </span>
        <span
          className={`block text-[10px] font-semibold uppercase tracking-[0.22em] ${
            light ? 'text-sand-200' : 'text-sand-600'
          }`}
        >
          To Desert
        </span>
      </span>
    </Link>
  );
}
