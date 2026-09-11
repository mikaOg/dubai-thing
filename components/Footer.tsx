import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="mt-20 px-3 pb-4 sm:px-4 sm:pb-6">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-desert-900 to-black shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
        <div className="grid gap-10 px-6 py-12 sm:px-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo light />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand-200/80">
              Small-group desert expeditions across the Danakil Depression, Erta Ale
              and the Afar salt flats — led by local Ethiopian guides.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-sand-400">
              Explore
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/tours" className="text-sand-100/80 hover:text-white">All tours</Link></li>
              <li><Link href="/about" className="text-sand-100/80 hover:text-white">About us</Link></li>
              <li><Link href="/contact" className="text-sand-100/80 hover:text-white">Contact</Link></li>
              <li><Link href="/dashboard" className="text-sand-100/80 hover:text-white">My bookings</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-sand-400">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-sand-100/70">
              <li>Mekelle, Tigray, Ethiopia</li>
              <li>hello@ethioconnecttodesert.com</li>
              <li>+251 900 000 000</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="flex flex-col gap-2 px-6 py-5 text-xs text-sand-200/50 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <p>© {new Date().getFullYear()} Ethio Connect to Desert. All rights reserved.</p>
            <p>Licensed tour operator · Ethiopia</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
