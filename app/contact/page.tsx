import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Ethio Connect to Desert.',
};

export default function ContactPage() {
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
            {[
              { t: 'Office', v: 'Hawelti Sub-city, Mekelle, Tigray, Ethiopia' },
              { t: 'Email', v: 'hello@ethioconnecttodesert.com' },
              { t: 'Phone / WhatsApp', v: '+251 900 000 000' },
              { t: 'Hours', v: 'Monday – Saturday, 08:00 – 19:00 EAT' },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-sand-200 bg-sand-50/60 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-sand-600">{c.t}</p>
                <p className="mt-1 text-sm text-desert-800">{c.v}</p>
              </div>
            ))}
          </div>

          <form className="space-y-4 rounded-2xl border border-sand-200 bg-white p-6 shadow-sm">
            {['Full name', 'Email address'].map((label) => (
              <div key={label}>
                <label className="block text-sm font-semibold text-desert-800">{label}</label>
                <input
                  className="mt-1 w-full rounded-lg border border-sand-300 px-3 py-2.5 text-sm outline-none focus:border-sand-500 focus:ring-2 focus:ring-sand-200"
                  required
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-semibold text-desert-800">Message</label>
              <textarea
                rows={5}
                required
                className="mt-1 w-full resize-none rounded-lg border border-sand-300 px-3 py-2.5 text-sm outline-none focus:border-sand-500 focus:ring-2 focus:ring-sand-200"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-sand-600 py-3 text-sm font-bold text-white hover:bg-sand-700"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
