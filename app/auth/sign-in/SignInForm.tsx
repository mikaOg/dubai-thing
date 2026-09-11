'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import Logo from '@/components/Logo';

export default function SignInForm() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get('next') ?? '/dashboard';
  const supabase = createClient();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push(next);
    router.refresh();
  };

  return (
    <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>

        <div className="rounded-3xl border border-white/60 bg-white/65 p-8 shadow-[0_20px_60px_-20px_rgba(89,54,30,0.35)] backdrop-blur-2xl">
          <h1 className="text-2xl font-extrabold text-desert-900">Welcome back</h1>
          <p className="mt-2 text-sm text-desert-800/70">
            New here?{' '}
            <Link
              href={`/auth/sign-up?next=${encodeURIComponent(next)}`}
              className="font-semibold text-sand-700 hover:underline"
            >
              Create an account
            </Link>
          </p>

          {error && (
            <div className="mt-5 rounded-xl border border-red-200/70 bg-red-50/80 p-3 text-sm text-red-700 backdrop-blur-xl">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-desert-800/70">
                Email
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
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="glass-input mt-1.5"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-solid w-full disabled:opacity-60"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
