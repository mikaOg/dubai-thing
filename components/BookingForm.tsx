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
      className="rounded-3xl border border-white/60 bg-white/65 p-6 shadow-[0_15px_60px_-20px_rgba(89,54,30,0.35)] backdrop-blur-2xl"
    >
      <div className="flex items-baseline justify-between">
        <h3 className="text-lg font-extrabold text-desert-900">Book this tour</h3>
        <span className="rounded-full border border-white/60 bg-white/60 px-3 py-1 text-[11px] font-bold text-sand-700 backdrop-blur-xl">
          From {tour.price.toLocaleString()} ETB
        </span>
      </div>
      <p className="mt-1 text-sm text-desert-800/60">
        Free cancellation up to 7 days before departure.
      </p>

      {error && (
        <div className="mt-4 rounded-xl border border-red-200/70 bg-red-50/80 p-3 text-sm text-red-700 backdrop-blur-xl">
          {error}
        </div>
      )}

      <div className="mt-5 space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-desert-800/70">
            Travel date
          </label>
          <input
            type="date"
            required
            min={new Date().toISOString().split('T')[0]}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="glass-input mt-1.5"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-desert-800/70">
            Guests
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="glass-input mt-1.5"
          >
            {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? 'guest' : 'guests'}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-desert-800/70">
            Full name
          </label>
          <input
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="As on your passport"
            className="glass-input mt-1.5"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-desert-800/70">
            Phone / WhatsApp
          </label>
          <input
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+251 ..."
            className="glass-input mt-1.5"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-desert-800/70">
            Notes <span className="font-normal normal-case text-desert-800/40">(optional)</span>
          </label>
          <textarea
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Dietary needs, pickup location, questions..."
            className="glass-input mt-1.5 resize-none"
          />
        </div>
      </div>

      <div className="mt-6 space-y-2 rounded-2xl border border-white/60 bg-white/45 p-4 backdrop-blur-xl">
        <div className="flex justify-between text-sm text-desert-800/70">
          <span>
            {tour.price.toLocaleString()} ETB × {guests} {guests === 1 ? 'guest' : 'guests'}
          </span>
          <span>{total.toLocaleString()} ETB</span>
        </div>
        <div className="flex justify-between border-t border-white/60 pt-2 text-base font-extrabold text-desert-900">
          <span>Total</span>
          <span>{total.toLocaleString()} ETB</span>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-solid mt-6 w-full disabled:opacity-60"
      >
        {loading ? 'Sending request...' : 'Request booking'}
      </button>

      <p className="mt-3 text-center text-xs text-desert-800/50">
        You&apos;ll be asked to sign in if you aren&apos;t already.
      </p>
    </form>
  );
}
