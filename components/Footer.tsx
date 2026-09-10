import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-desert-900 text-sand-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand-200/80">
            Small-group desert expeditions across the Danakil Depression, Erta Ale
            and the Afar salt flats — led by local Ethiopian guides.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-sand-300">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/tours" className="hover:text-white">All tours</Link></li>
            <li><Link href="/about" className="hover:text-white">About us</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/dashboard" className="hover:text-white">My bookings</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-sand-300">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-sand-200/80">
            <li>Mekelle, Tigray, Ethiopia</li>
            <li>hello@ethioconnecttodesert.com</li>
            <li>+251 900 000 000</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-sand-200/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Ethio Connect to Desert. All rights reserved.</p>
          <p>Licensed tour operator · Ethiopia</p>
        </div>
      </div>
    </footer>
  );
}
