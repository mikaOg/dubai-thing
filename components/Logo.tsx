import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5 sm:gap-3">
      <Image
        src="/logo.png"
        alt="Ethio Connect to Desert"
        width={44}
        height={44}
        className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11"
        priority
      />

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
