import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Ethio Connect to Desert — local Ethiopian guides running small-group desert expeditions.',
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-desert-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sand-400">About us</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            We are a local team, not a booking platform.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-6 text-base leading-relaxed text-desert-800/85">
          <p>
            Ethio Connect to Desert was started in Mekelle by a small group of Afar and
            Tigrayan guides who had spent years leading expeditions into the Danakil
            Depression for other companies.
          </p>
          <p>
            We wanted to run trips our own way: smaller groups, fair pay for local
            scouts and drivers, and honest pricing that includes everything you
            actually need. No hidden extras when you arrive at the trailhead.
          </p>
          <p>
            Today we run departures year-round to Erta Ale, Dallol, Lake Assal and the
            wider Afar salt flats. Every trip is led by a guide who grew up in the
            region, supported by our operations base in Mekelle and a 24/7 contact
            line for families back home.
          </p>
          <p>
            If you have questions before booking, message us. A real person on the
            team will reply — usually within a few hours.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { v: '2012', l: 'Founded in Mekelle' },
            { v: '38', l: 'Local staff & guides' },
            { v: '4,800+', l: 'Travellers hosted' },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-sand-200 bg-sand-50/60 p-6 text-center">
              <p className="text-2xl font-extrabold text-desert-900">{s.v}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-sand-700">
                {s.l}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-sand-600 p-8 text-center">
          <h2 className="text-2xl font-extrabold text-white">Come see it with us</h2>
          <Link
            href="/tours"
            className="mt-5 inline-block rounded-full bg-white px-8 py-3 text-sm font-bold text-sand-700 hover:bg-sand-50"
          >
            Browse tours
          </Link>
        </div>
      </section>
    </>
  );
}
