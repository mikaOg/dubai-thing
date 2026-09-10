'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import type { Tour } from '@/lib/tours';

export default function BookingForm({ tour }: { tour: Tour }) {
  const router = useRouter();
  const supabase = createClient();

  const [date, setDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const total = tour.price * guests;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push(`/auth/sign-in?next=/tours/${tour.slug}`);
      return;
    }

    const { error } = await supabase.from('bookings').insert({
      user_id: user.id,
      tour_slug: tour.slug,
      tour_title: tour.title,
      travel_date: date,
      guests,
      total_price: total,
      full_name: fullName,
      phone,
      notes,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push('/dashboard?booked=1');
    router.refresh();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-sand-200 bg-white p-6 shadow-lg"
    >
      <h3 className="text-lg font-bold text-desert-900">Book this tour</h3>
      <p className="mt-1 text-sm text-desert-800/60">
        Free cancellation up to 7 days before departure.
      </p>

      {error && (
        <div className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</div>
      )}

      <div className="mt-5 space-y-4">
        <div>
          <label className="block text-sm font-semibold text-desert-800">Travel date</label>
          <input
            type="date"
            required
            min={new Date().toISOString().split('T')[0]}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 w-full rounded-lg border border-sand-300 px-3 py-2.5 text-sm outline-none focus:border-sand-500 focus:ring-2 focus:ring-sand-200"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-desert-800">Guests</label>
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-sand-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-sand-500 focus:ring-2 focus:ring-sand-200"
          >
            {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? 'guest' : 'guests'}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-desert-800">Full name</label>
          <input
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="As on your passport"
            className="mt-1 w-full rounded-lg border border-sand-300 px-3 py-2.5 text-sm outline-none focus:border-sand-500 focus:ring-2 focus:ring-sand-200"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-desert-800">Phone / WhatsApp</label>
          <input
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+251 ..."
            className="mt-1 w-full rounded-lg border border-sand-300 px-3 py-2.5 text-sm outline-none focus:border-sand-500 focus:ring-2 focus:ring-sand-200"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-desert-800">
            Notes <span className="font-normal text-desert-800/50">(optional)</span>
          </label>
          <textarea
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Dietary needs, pickup location, questions..."
            className="mt-1 w-full resize-none rounded-lg border border-sand-300 px-3 py-2.5 text-sm outline-none focus:border-sand-500 focus:ring-2 focus:ring-sand-200"
          />
        </div>
      </div>

      <div className="mt-6 space-y-2 border-t border-sand-100 pt-5">
        <div className="flex justify-between text-sm text-desert-800/70">
          <span>
            {tour.price.toLocaleString()} ETB × {guests} {guests === 1 ? 'guest' : 'guests'}
          </span>
          <span>{total.toLocaleString()} ETB</span>
        </div>
        <div className="flex justify-between text-base font-bold text-desert-900">
          <span>Total</span>
          <span>{total.toLocaleString()} ETB</span>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-6 w-full rounded-full bg-sand-600 py-3 text-sm font-bold text-white transition hover:bg-sand-700 disabled:opacity-60"
      >
        {loading ? 'Sending request...' : 'Request booking'}
      </button>

      <p className="mt-3 text-center text-xs text-desert-800/50">
        You&apos;ll be asked to sign in if you aren&apos;t already.
      </p>
    </form>
  );
}
