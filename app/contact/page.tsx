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
        body: JSON.stringify({
          full_name: fullName,
          email: email,
          message: message,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(function () {
          return {};
        });
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
      <section className="bg-desert-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sand-400">Contact</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Talk to a real person
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-sand-200 bg-sand-50/60 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-sand-600">Office</p>
              <p className="mt-1 text-sm text-desert-800">
                Hawelti Sub-city, Mekelle, Tigray, Ethiopia
              </p>
            </div>
            <div className="rounded-2xl border border-sand-200 bg-sand-50/60 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-sand-600">Email</p>
              <p className="mt-1 text-sm text-desert-800">thomasn4jackson08@gmail.com</p>
            </div>
            <div className="rounded-2xl border border-sand-200 bg-sand-50/60 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-sand-600">
                Phone / WhatsApp
              </p>
              <p className="mt-1 text-sm text-desert-800">+251 900 000 000</p>
            </div>
            <div className="rounded-2xl border border-sand-200 bg-sand-50/60 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-sand-600">Hours</p>
              <p className="mt-1 text-sm text-desert-800">
                Monday – Saturday, 08:00 – 19:00 EAT
              </p>
            </div>
          </div>

          {status === 'sent' ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
              <p className="text-4xl">✅</p>
              <h2 className="mt-4 text-xl font-bold text-green-900">Message sent</h2>
              <p className="mt-2 text-sm text-green-800/80">
                Thanks for reaching out. We&apos;ll get back to you within a few hours.
              </p>
              <button
                onClick={function () {
                  setStatus('idle');
                }}
                className="mt-6 rounded-full bg-green-700 px-6 py-2 text-sm font-bold text-white hover:bg-green-800"
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-2xl border border-sand-200 bg-white p-6 shadow-sm"
            >
              {error && (
                <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</div>
              )}

              <div>
                <label className="block text-sm font-semibold text-desert-800">Full name</label>
                <input
                  required
                  value={fullName}
                  onChange={function (e) {
                    setFullName(e.target.value);
                  }}
                  className="mt-1 w-full rounded-lg border border-sand-300 px-3 py-2.5 text-sm outline-none focus:border-sand-500 focus:ring-2 focus:ring-sand-200"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-desert-800">Email address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={function (e) {
                    setEmail(e.target.value);
                  }}
                  className="mt-1 w-full rounded-lg border border-sand-300 px-3 py-2.5 text-sm outline-none focus:border-sand-500 focus:ring-2 focus:ring-sand-200"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-desert-800">Message</label>
                <textarea
                  rows={5}
                  required
                  value={message}
                  onChange={function (e) {
                    setMessage(e.target.value);
                  }}
                  className="mt-1 w-full resize-none rounded-lg border border-sand-300 px-3 py-2.5 text-sm outline-none focus:border-sand-500 focus:ring-2 focus:ring-sand-200"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full rounded-full bg-sand-600 py-3 text-sm font-bold text-white hover:bg-sand-700 disabled:opacity-60"
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
