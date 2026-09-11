import Image from 'next/image';
import Link from 'next/link';
import { tours } from '@/lib/tours';
import TourCard from '@/components/TourCard';

const stats = [
  { value: '12+', label: 'Years guiding' },
  { value: '4,800+', label: 'Travellers hosted' },
  { value: '100%', label: 'Local Ethiopian guides' },
  { value: '4.9★', label: 'Average rating' },
];

const reasons = [
  {
    title: 'Local Afar guides',
    body: 'Every expedition is led by guides who grew up in the Danakil. They know the routes, the heat, and the people.',
  },
  {
    title: 'Small groups only',
    body: 'Maximum 12 travellers per departure. Fewer people means better camps, better photos, and less impact.',
  },
  {
    title: 'Safety first',
    body: 'Satellite phones, scouting permits, 4x4 convoys and 24/7 support from our Mekelle operations base.',
  },
  {
    title: 'Fair and transparent',
    body: 'One clear price. Permits, meals, camping and scout fees included — no surprise costs at the trailhead.',
  },
];

const testimonials = [
  {
    name: 'Sarah M.',
    country: 'United Kingdom',
    text: 'Dallol at sunrise was unreal. Our guide knew exactly when to arrive for the light. Best trip I have ever taken.',
  },
  {
    name: 'Daniel K.',
    country: 'Germany',
    text: 'Camping at the rim of Erta Ale is something I will describe to people for the rest of my life. Flawless organisation.',
  },
  {
    name: 'Amina H.',
    country: 'UAE',
    text: 'I was nervous about the heat but the team managed everything. Felt safe the whole time and the food was great.',
  },
];

export default function HomePage() {
  const featured = tours.slice(0, 3);

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <Image
          src="/tours/hero.jpg"
          alt="4x4 expedition in the Ethiopian desert"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-desert-900/85 via-desert-900/60 to-sand-900/50" />

        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36 lg:px-8 lg:py-44">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sand-100 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-sand-400" />
              Afar Region · Ethiopia
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
              Walk into the hottest, <br className="hidden sm:block" />
              most beautiful place on Earth.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sand-50 drop-shadow-md">
              Ethio Connect to Desert runs small-group expeditions to the Danakil
              Depression, Erta Ale volcano and the Afar salt flats — guided by the
              people who call this land home.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/tours"
                className="rounded-full bg-sand-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-sand-900/30 transition hover:bg-sand-600"
              >
                Explore tours
              </Link>
              <Link
                href="/auth/sign-up"
                className="rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Create free account
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-sand-100 bg-sand-50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p className="text-3xl font-extrabold text-desert-900">{s.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-sand-700">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sand-600">
              Featured departures
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-desert-900 sm:text-4xl">
              Our most-booked desert tours
            </h2>
          </div>
          <Link
            href="/tours"
            className="shrink-0 text-sm font-bold text-sand-700 hover:text-sand-800"
          >
            View all tours →
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((t) => (
            <TourCard key={t.slug} tour={t} />
          ))}
        </div>
      </section>

      <section className="bg-desert-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sand-400">
              Why travel with us
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Built by Ethiopians, for people who want the real thing.
            </h2>
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <div key={r.title}>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sand-500/20 text-sm font-extrabold text-sand-300">
                  0{i + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold text-white">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sand-100/70">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sand-600">
            Traveller stories
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-desert-900 sm:text-4xl">
            What our guests say
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-sand-200 bg-sand-50/60 p-7"
            >
              <div className="text-sand-500">★★★★★</div>
              <blockquote className="mt-4 text-sm leading-relaxed text-desert-800/80">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 border-t border-sand-200 pt-4">
                <p className="text-sm font-bold text-desert-900">{t.name}</p>
                <p className="text-xs text-desert-800/60">{t.country}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-sand-600">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to see the Danakil for yourself?
          </h2>
          <p className="max-w-xl text-sand-50/90">
            Create a free account, pick your dates, and we&apos;ll confirm your
            departure within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/auth/sign-up"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-sand-700 shadow-lg transition hover:bg-sand-50"
            >
              Create free account
            </Link>
            <Link
              href="/tours"
              className="rounded-full border border-white/40 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Browse tours
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
