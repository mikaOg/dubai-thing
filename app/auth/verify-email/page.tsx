import Link from 'next/link';

export default function VerifyEmailPage() {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-4 py-16">
      <div className="w-full max-w-md rounded-3xl border border-white/60 bg-white/65 p-8 text-center shadow-[0_20px_60px_-20px_rgba(89,54,30,0.35)] backdrop-blur-2xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sand-400 to-sand-600 text-3xl shadow-lg">
          ✉️
        </div>
        <h1 className="mt-5 text-2xl font-extrabold text-desert-900">Check your inbox</h1>
        <p className="mt-3 text-sm leading-relaxed text-desert-800/70">
          We&apos;ve sent you a confirmation link. Click it to activate your account,
          then sign in to book your tour.
        </p>
        <Link
          href="/auth/sign-in"
          className="btn-solid mt-6 inline-flex"
        >
          Go to sign in
        </Link>
      </div>
    </div>
  );
}
