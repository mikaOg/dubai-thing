import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center">
      <Image
        src="/tours/logo.png"
        alt="Ethio Connect to Desert"
        width={80}
        height={80}
        className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-12"
        priority
      />
    </Link>
  );
}
