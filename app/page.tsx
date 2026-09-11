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
    icon: '🧭',
  },
  {
    title: 'Small groups only',
    body: 'Maximum 12 travellers per departure. Fewer people means better camps, better photos, and less impact.',
    icon: '👥',
  },
  {
    title: 'Safety first',
    body: 'Satellite phones, scouting permits, 4x4 convoys and 24/7 support from our Mekelle operations base.',
    icon: '🛡️',
  },
  {
    title: 'Fair and transparent',
    body: 'One clear price. Permits, meals, camping and scout fees included — no surprise costs at the trailhead.',
    icon: '💎',
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
  const featured = tours;

  return (
    <>
      {/* HERO */}
      <section className="px-3 pt-3 sm:px-4 sm:pt-4">
        <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-3xl">
          <Image
            src="/tours/hero.jpg"
            alt="4x4 expedition in the Ethiopian desert"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-desert-900/80 via-desert-900/55 to-sand-900/40" />

          <div className="relative px-6 py-24 sm:px-10 sm:py-32 lg:px-14 lg:py-40">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sand-100 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-sand-400" />
                Afar Region · Ethiopia
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-2xl sm:text-5xl lg:text-6xl">
                Walk into the hottest,{' '}
                <br className="hidden sm:block" />
                most beautiful place on Earth.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-sand-50/90 drop-shadow-lg sm:text-lg">
                Ethio Connect to Desert runs small-group expeditions to the Danakil
                Depression, Erta Ale volcano and the Afar salt flats — guided by the
                people who call this land home.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/tours" className="btn-solid px-8 py-3.5 text-base">
                  Explore tours
                </Link>
                <Link
                  href="/auth/sign-up"
                  className="btn-glass px-8 py-3.5 text-base"
                >
                  Create free account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-3 pt-4 sm:px-4">
        <div className="mx-auto max-w-7xl rounded-3xl border border-white/60 bg-white/55 px-6 py-8 shadow-[0_8px_40px_-15px_rgba(89,54,30,0.2)] backdrop-blur-2xl sm:px-10">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <p className="text-3xl font-extrabold text-desert-900">{s.value}</p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-sand-700">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED — infinite auto-scrolling marquee */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Featured departures</p>
              <h2 className="section-title mt-3">Our most-booked desert tours</h2>
            </div>
            <Link
              href="/tours"
              className="shrink-0 text-sm font-bold text-sand-700 hover:text-sand-800"
            >
              View all tours →
            </Link>
          </div>
        </div>

        <div className="marquee-mask mt-12">
          <div className="marquee-track">
            {featured.map((t) => (
              <div key={`a-${t.slug}`} className="w-[320px] shrink-0 sm:w-[360px]">
                <TourCard tour={t} />
              </div>
            ))}
            {featured.map((t) => (
              <div
                key={`b-${t.slug}`}
                aria-hidden="true"
                className="w-[320px] shrink-0 sm:w-[360px]"
              >
                <TourCard tour={t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="px-3 py-6 sm:px-4">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-desert-900 to-black px-6 py-16 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] sm:px-10 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sand-400">
              Why travel with us
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Built by Ethiopians, for people who want the real thing.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:bg-white/10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sand-500/20 text-lg">
                  {r.icon}
                </span>
                <h3 className="mt-4 text-base font-bold text-white">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sand-100/70">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <p className="eyebrow">Traveller stories</p>
          <h2 className="section-title mt-3">What our guests say</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-3xl border border-white/60 bg-white/60 p-7 shadow-[0_8px_40px_-15px_rgba(89,54,30,0.2)] backdrop-blur-2xl"
            >
              <div className="text-sand-500">★★★★★</div>
              <blockquote className="mt-4 text-sm leading-relaxed text-desert-800/80">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/60 pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sand-400 to-sand-600 text-sm font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-desert-900">{t.name}</p>
                  <p className="text-xs text-desert-800/60">{t.country}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-3 pb-4 sm:px-4">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-sand-500 via-sand-600 to-sand-700 px-6 py-16 text-center shadow-[0_20px_60px_-20px_rgba(168,101,39,0.6)] sm:px-10 sm:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to see the Danakil for yourself?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sand-50/95">
            Create a free account, pick your dates, and we&apos;ll confirm your
            departure within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/auth/sign-up"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-sand-700 shadow-lg transition hover:bg-sand-50"
            >
              Create free account
            </Link>
            <Link href="/tours" className="btn-glass px-8 py-3.5">
              Browse tours
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
