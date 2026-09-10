import Link from 'next/link';

export default function VerifyEmailPage() {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-sand-50 px-4">
      <div className="w-full max-w-md rounded-2xl border border-sand-200 bg-white p-8 text-center shadow-lg">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sand-100 text-2xl">
          ✉️
        </div>
        <h1 className="mt-5 text-2xl font-extrabold text-desert-900">Check your inbox</h1>
        <p className="mt-3 text-sm leading-relaxed text-desert-800/70">
          We&apos;ve sent you a confirmation link. Click it to activate your account,
          then sign in to book your tour.
        </p>
        <Link
          href="/auth/sign-in"
          className="mt-6 inline-block rounded-full bg-sand-600 px-7 py-3 text-sm font-bold text-white hover:bg-sand-700"
        >
          Go to sign in
        </Link>
      </div>
    </div>
  );
}
