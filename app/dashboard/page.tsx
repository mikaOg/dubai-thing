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
    <section className="min-h-[calc(100vh-5rem)] bg-sand-50 py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {searchParams.booked && (
          <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
            ✓ Booking request received. We&apos;ll confirm by email within 24 hours.
          </div>
        )}

        <div className="rounded-2xl border border-sand-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-sand-600">Dashboard</p>
          <h1 className="mt-2 text-3xl font-extrabold text-desert-900">
            Welcome, {name}
          </h1>
          <p className="mt-2 text-sm text-desert-800/70">
            Signed in as <span className="font-semibold">{user.email}</span>
          </p>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-desert-900">My bookings</h2>
          <Link
            href="/tours"
            className="rounded-full bg-sand-600 px-5 py-2 text-sm font-bold text-white hover:bg-sand-700"
          >
            Book another tour
          </Link>
        </div>

        {!bookings || bookings.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-dashed border-sand-300 bg-white p-12 text-center">
            <p className="text-4xl">🏜️</p>
            <p className="mt-4 font-bold text-desert-900">No bookings yet</p>
            <p className="mt-1 text-sm text-desert-800/60">
              Pick a departure and your booking will appear here.
            </p>
            <Link
              href="/tours"
              className="mt-6 inline-block rounded-full bg-sand-600 px-7 py-3 text-sm font-bold text-white hover:bg-sand-700"
            >
              Browse tours
            </Link>
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            {bookings.map((b) => (
              <div
                key={b.id}
                className="rounded-2xl border border-sand-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-desert-900">{b.tour_title}</h3>
                    <p className="mt-1 text-xs uppercase tracking-wider text-sand-600">
                      Ref #{b.id.slice(0, 8).toUpperCase()}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      b.status === 'confirmed'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {b.status}
                  </span>
                </div>

                <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-4">
                  {[
                    ['Travel date', new Date(b.travel_date).toLocaleDateString()],
                    ['Guests', String(b.guests)],
                    ['Total', `$${Number(b.total_price).toFixed(0)}`],
                    ['Requested', new Date(b.created_at).toLocaleDateString()],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-desert-800/50">
                        {label}
                      </dt>
                      <dd className="mt-1 font-bold text-desert-900">{value}</dd>
                    </div>
                  ))}
                </dl>

                {b.notes && (
                  <p className="mt-4 rounded-lg bg-sand-50 p-3 text-xs text-desert-800/70">
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
