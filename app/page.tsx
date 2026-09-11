import Image from 'next/image';
import Link from 'next/link';
import { tours } from '@/lib/tours';
import TourCard from '@/components/TourCard';
import TourMarquee from '@/components/TourMarquee';

const stats = [
  {
    value: '12+',
    label: 'Years guiding',
    icon: '🏔️',
    list: [
      '2012 — Founded in Mekelle',
      '2015 — First Erta Ale expedition',
      '2018 — Licensed tour operator',
      '2021 — 4x4 fleet expanded to 12 vehicles',
      '2023 — Photography tours launched',
      '2024 — 38 local staff & guides',
    ],
  },
  {
    value: '4,800+',
    label: 'Travellers hosted',
    icon: '🌍',
    list: [
      '2,140 from Europe',
      '1,020 from North America',
      '830 from the Middle East',
      '510 from Asia & Oceania',
      '300 from Africa',
      '4.9★ average across all trips',
    ],
  },
  {
    value: '100%',
    label: 'Local Ethiopian guides',
    icon: '🧭',
    list: [
      '14 Afar-region guides',
      '9 Tigrayan cultural guides',
      '6 certified 4x4 drivers',
      '5 camp cooks & support staff',
      '2 photography specialists',
      '2 operations managers in Mekelle',
    ],
  },
  {
    value: '4.9★',
    label: 'Average rating',
    icon: '⭐',
    list: [
      '5.0★ — Danakil Photography Tour',
      '4.9★ — Erta Ale Volcano Trek',
      '4.9★ — Danakil Depression Expedition',
      '4.8★ — Lake Assal & Salt Caravan',
      '4.7★ — Dallol Sulphur Springs',
      'Based on 1,247 verified reviews',
    ],
  },
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
  const featured = tours.slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="px-3 pt-3 sm:px-4 sm:pt-4">
        <div className="relative isolate mx-auto min-h-[480px] max-w-7xl overflow-hidden rounded-3xl sm:min-h-[560px]">
          {[
            '/tours/hero.jpg',
            '/tours/hero-2.jpg',
            '/tours/hero-3.jpg',
            '/tours/hero-4.jpg',
          ].map((src, i) => (
            <Image
              key={src}
              src={src}
              alt="Ethiopian desert expedition"
              fill
              priority={i === 0}
              sizes="100vw"
              className="hero-slide-img object-cover"
              style={{ animationDelay: `${i * 2}s` }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-desert-900/80 via-desert-900/55 to-sand-900/40" />

          <div className="relative flex min-h-[480px] flex-col justify-center px-5 py-14 sm:min-h-[560px] sm:px-10 sm:py-24 lg:px-14 lg:py-32">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-sand-100 backdrop-blur-xl sm:text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-sand-400" />
                Afar Region · Ethiopia
              </span>

              <h1 className="mt-5 text-3xl font-extrabold leading-[1.1] tracking-tight text-white drop-shadow-2xl sm:mt-6 sm:text-5xl lg:text-6xl">
                Walk into the hottest,{' '}
                <br className="hidden sm:block" />
                most beautiful place on Earth.
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-sand-50/90 drop-shadow-lg sm:mt-6 sm:text-lg">
                Ethio Connect to Desert runs small-group expeditions to the Danakil
                Depression, Erta Ale volcano and the Afar salt flats — guided by the
                people who call this land home.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 sm:mt-9">
                <Link
                  href="/tours"
                  className="btn-solid px-6 py-3 text-sm sm:px-8 sm:py-3.5 sm:text-base"
                >
                  Explore tours
                </Link>
                <Link
                  href="/auth/sign-up"
                  className="btn-glass px-6 py-3 text-sm sm:px-8 sm:py-3.5 sm:text-base"
                >
                  Create free account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-30 px-3 pt-4 sm:px-4">
        <div className="mx-auto max-w-7xl rounded-3xl border border-white/60 bg-white/55 px-5 py-6 shadow-[0_8px_40px_-15px_rgba(89,54,30,0.2)] backdrop-blur-2xl sm:px-10 sm:py-8">
          <div className="grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="group relative cursor-default text-center md:text-left"
              >
                <p className="text-2xl font-extrabold text-desert-900 sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-sand-700 sm:text-[11px]">
                  {s.label}
                </p>

                <div className="pointer-events-none absolute left-1/2 top-full z-50 mt-4 w-72 -translate-x-1/2 translate-y-1 opacity-0 transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 md:left-0 md:translate-x-0">
                  <div className="absolute -inset-1 rounded-[20px] bg-gradient-to-br from-amber-300/40 via-sand-500/25 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative overflow-hidden rounded-2xl border border-amber-200/60 bg-gradient-to-br from-white via-white to-sand-50/90 shadow-[0_25px_70px_-20px_rgba(89,54,30,0.55)] backdrop-blur-2xl">
                    <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

                    <div className="flex items-center gap-2.5 border-b border-sand-100 px-4 py-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-amber-100 to-sand-100 text-sm shadow-inner">
                        {s.icon}
                      </span>
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-sand-800">
                        {s.label}
                      </p>
                    </div>

                    <ul className="space-y-0.5 px-2.5 py-2.5">
                      {s.list.map((item) => (
                        <li
                          key={item}
                          className="group/item flex items-start gap-2.5 rounded-lg px-2 py-1.5 text-[12px] leading-snug text-desert-800 transition-colors duration-200 hover:bg-gradient-to-r hover:from-amber-50 hover:to-transparent"
                        >
                          <span className="mt-[3px] flex h-1.5 w-1.5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                          <span className="font-medium transition-colors duration-200 group-hover/item:text-desert-900">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white/60 to-transparent" />
                  </div>

                  <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-amber-200/60 bg-white md:left-6 md:translate-x-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Featured departures</p>
              <h2 className="section-title mt-2 sm:mt-3">
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
        </div>

        <div className="mt-8 sm:mt-12">
          <TourMarquee>
            {featured.map((t) => (
              <div key={`a-${t.slug}`} className="w-[280px] shrink-0 sm:w-[340px]">
                <TourCard tour={t} />
              </div>
            ))}
            {featured.map((t) => (
              <div
                key={`b-${t.slug}`}
                aria-hidden="true"
                className="w-[280px] shrink-0 sm:w-[340px]"
              >
                <TourCard tour={t} />
              </div>
            ))}
          </TourMarquee>
        </div>
      </section>

      {/* WHY US */}
      <section className="px-3 py-4 sm:px-4 sm:py-6">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-desert-900 to-black px-5 py-12 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] sm:px-10 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sand-400 sm:text-xs">
              Why travel with us
            </p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
              Built by Ethiopians, for people who want the real thing.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition hover:bg-white/10 sm:p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sand-500/20 text-base sm:h-11 sm:w-11 sm:text-lg">
                  {r.icon}
                </span>
                <h3 className="mt-3 text-sm font-bold text-white sm:mt-4 sm:text-base">
                  {r.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-sand-100/70 sm:text-sm">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <p className="eyebrow">Traveller stories</p>
          <h2 className="section-title mt-2 sm:mt-3">What our guests say</h2>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-3xl border border-white/60 bg-white/60 p-5 shadow-[0_8px_40px_-15px_rgba(89,54,30,0.2)] backdrop-blur-2xl sm:p-7"
            >
              <div className="text-sand-500">★★★★★</div>
              <blockquote className="mt-3 text-sm leading-relaxed text-desert-800/80 sm:mt-4">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-white/60 pt-4 sm:mt-6">
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
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-sand-500 via-sand-600 to-sand-700 px-5 py-12 text-center shadow-[0_20px_60px_-20px_rgba(168,101,39,0.6)] sm:px-10 sm:py-20">
          <h2 className="mx-auto max-w-2xl text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to see the Danakil for yourself?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-sand-50/95 sm:mt-4 sm:text-base">
            Create a free account, pick your dates, and we&apos;ll confirm your
            departure within 24 hours.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-8">
            <Link
              href="/auth/sign-up"
              className="rounded-full bg-white px-6 py-3 text-sm font-bold text-sand-700 shadow-lg transition hover:bg-sand-50 sm:px-8 sm:py-3.5"
            >
              Create free account
            </Link>
            <Link
              href="/tours"
              className="btn-glass px-6 py-3 text-sm sm:px-8 sm:py-3.5"
            >
              Browse tours
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
