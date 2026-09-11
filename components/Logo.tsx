import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5 sm:gap-3">
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-amber-300/60 bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 p-1 shadow-[0_4px_14px_-4px_rgba(217,152,50,0.7),inset_0_1px_0_0_rgba(255,255,255,0.55)] transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12">
        <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/55 to-transparent" />
        <Image
          src="/logo.png"
          alt="Ethio Connect to Desert"
          width={48}
          height={48}
          className="relative h-9 w-9 object-contain sm:h-10 sm:w-10"
          priority
        />
      </span>

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
