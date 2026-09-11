'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ full_name: fullName, email, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to send');
      }

      setStatus('sent');
      setFullName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setError(msg);
      setStatus('error');
    }
  };

  return (
    <>
      <section className="px-3 pt-4 sm:px-4">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-desert-900 to-black px-6 py-14 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] sm:px-10 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sand-400">Contact</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Talk to a real person
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            {[
              { t: 'Office', v: 'Hawelti Sub-city, Mekelle, Tigray, Ethiopia', icon: '📍' },
              { t: 'Email', v: 'thomasn4jackson08@gmail.com', icon: '✉️' },
              { t: 'Phone / WhatsApp', v: '+251 900 000 000', icon: '📞' },
              { t: 'Hours', v: 'Monday – Saturday, 08:00 – 19:00 EAT', icon: '🕒' },
            ].map((c) => (
              <div
                key={c.t}
                className="flex items-start gap-4 rounded-2xl border border-white/60 bg-white/55 p-5 shadow-[0_8px_40px_-15px_rgba(89,54,30,0.2)] backdrop-blur-2xl"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sand-500/15 text-lg">
                  {c.icon}
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-sand-700">
                    {c.t}
                  </p>
                  <p className="mt-0.5 text-sm text-desert-800">{c.v}</p>
                </div>
              </div>
            ))}
          </div>

          {status === 'sent' ? (
            <div className="flex flex-col items-center justify-center rounded-3xl border border-green-200/70 bg-green-50/70 p-8 text-center shadow-[0_8px_40px_-15px_rgba(22,101,52,0.25)] backdrop-blur-2xl">
              <p className="text-4xl">✅</p>
              <h2 className="mt-4 text-xl font-extrabold text-green-900">Message sent</h2>
              <p className="mt-2 text-sm text-green-800/80">
                Thanks for reaching out. We&apos;ll get back to you within a few hours.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 rounded-full bg-green-700 px-6 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-green-800"
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-3xl border border-white/60 bg-white/65 p-6 shadow-[0_15px_60px_-20px_rgba(89,54,30,0.3)] backdrop-blur-2xl sm:p-7"
            >
              {error && (
                <div className="rounded-xl border border-red-200/70 bg-red-50/80 p-3 text-sm text-red-700 backdrop-blur-xl">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-desert-800/70">
                  Full name
                </label>
                <input
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="glass-input mt-1.5"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-desert-800/70">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="glass-input mt-1.5"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-desert-800/70">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="glass-input mt-1.5 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-solid w-full disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending...' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
