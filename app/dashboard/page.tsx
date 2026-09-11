import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import CancelBookingButton from '@/components/CancelBookingButton';

export const metadata: Metadata = { title: 'My Bookings' };

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: { booked?: string };
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect('/auth/sign-in');

  const { data: profile } = await supabase
    .from('profiles')
    .select('full_name, email')
    .eq('id', user.id)
    .single();

  const { data: bookings } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false });

  const name = profile?.full_name || user.email?.split('@')[0] || 'traveller';

  return (
    <section className="min-h-[calc(100vh-5rem)] py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {searchParams.booked && (
          <div className="mb-6 flex items-start gap-3 rounded-2xl border border-green-200/70 bg-green-50/70 p-4 text-sm text-green-800 shadow-[0_8px_40px_-15px_rgba(22,101,52,0.25)] backdrop-blur-2xl">
            <span className="text-lg">✓</span>
            <span>Booking request received. We&apos;ll confirm by email within 24 hours.</span>
          </div>
        )}

        <div className="overflow-hidden rounded-3xl border border-white/60 bg-white/60 shadow-[0_15px_60px_-20px_rgba(89,54,30,0.3)] backdrop-blur-2xl">
          <div className="bg-gradient-to-br from-desert-900 to-black px-8 py-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sand-400">
              Dashboard
            </p>
            <h1 className="mt-2 text-3xl font-extrabold text-white">
              Welcome, {name}
            </h1>
            <p className="mt-2 text-sm text-sand-100/70">
              Signed in as <span className="font-semibold text-sand-100">{user.email}</span>
            </p>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-desert-900">My bookings</h2>
          <Link
            href="/tours"
            className="rounded-full bg-gradient-to-br from-sand-500 to-sand-700 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-sand-900/20 transition hover:from-sand-600 hover:to-sand-800"
          >
            Book another tour
          </Link>
        </div>

        {!bookings || bookings.length === 0 ? (
          <div className="mt-6 rounded-3xl border border-dashed border-sand-300/70 bg-white/55 p-12 text-center shadow-[0_8px_40px_-15px_rgba(89,54,30,0.15)] backdrop-blur-2xl">
            <p className="text-5xl">🏜️</p>
            <p className="mt-4 text-lg font-bold text-desert-900">No bookings yet</p>
            <p className="mt-1 text-sm text-desert-800/60">
              Pick a departure and your booking will appear here.
            </p>
            <Link href="/tours" className="btn-solid mt-6 inline-flex">
              Browse tours
            </Link>
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            {bookings.map((b) => (
              <div
                key={b.id}
                className="rounded-3xl border border-white/60 bg-white/60 p-6 shadow-[0_8px_40px_-15px_rgba(89,54,30,0.2)] backdrop-blur-2xl transition hover:bg-white/75"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-desert-900">{b.tour_title}</h3>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-sand-600">
                      Ref #{b.id.slice(0, 8).toUpperCase()}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-3.5 py-1.5 text-xs font-bold backdrop-blur-xl ${
                      b.status === 'confirmed'
                        ? 'border border-green-200/70 bg-green-100/80 text-green-700'
                        : 'border border-amber-200/70 bg-amber-100/80 text-amber-700'
                    }`}
                  >
                    {b.status}
                  </span>
                </div>

                <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-4">
                  {[
                    ['Travel date', new Date(b.travel_date).toLocaleDateString()],
                    ['Guests', String(b.guests)],
                    ['Total', `${Number(b.total_price).toLocaleString()} ETB`],
                    ['Requested', new Date(b.created_at).toLocaleDateString()],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-white/60 bg-white/40 p-3 backdrop-blur-xl"
                    >
                      <dt className="text-[10px] font-bold uppercase tracking-wider text-desert-800/50">
                        {label}
                      </dt>
                      <dd className="mt-1 text-sm font-bold text-desert-900">{value}</dd>
                    </div>
                  ))}
                </dl>

                {b.notes && (
                  <p className="mt-4 rounded-xl border border-white/60 bg-white/40 p-3 text-xs text-desert-800/70 backdrop-blur-xl">
                    <span className="font-bold">Notes: </span>
                    {b.notes}
                  </p>
                )}

                <div className="mt-5 flex justify-end">
                  <CancelBookingButton id={b.id} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
