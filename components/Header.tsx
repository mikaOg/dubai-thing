'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import { createClient } from '@/lib/supabase/client';
import type { User } from '@supabase/supabase-js';

const links = [
  { href: '/', label: 'Home' },
  { href: '/tours', label: 'Tours' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-50 px-2 pt-2 sm:px-4 sm:pt-4">
      <div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-xl border border-white/25 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.35)] backdrop-blur-3xl sm:rounded-2xl"
        style={{
          background: 'rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(40px) saturate(200%)',
          WebkitBackdropFilter: 'blur(40px) saturate(200%)',
        }}
      >
        <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent" />

        <div className="relative flex h-14 items-center justify-between px-3 sm:h-16 sm:px-6">
          <Logo />

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const active =
                l.href === '/' ? pathname === '/' : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? 'bg-white/15 text-amber-300'
                      : 'text-white/90 hover:bg-white/10 hover:text-amber-200'
                  }`}
                  style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            {loading ? (
              <div className="h-9 w-32 animate-pulse rounded-full bg-white/10" />
            ) : user ? (
              <>
                <Link
                  href="/dashboard"
                  className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
                  style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}
                >
                  My Bookings
                </Link>
                <button
                  onClick={handleSignOut}
                  className="rounded-full bg-gradient-to-br from-amber-400 to-amber-600 px-5 py-2 text-sm font-semibold text-desert-900 shadow-md transition hover:brightness-110"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/sign-in"
                  className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
                  style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}
                >
                  Sign in
                </Link>
                <Link
                  href="/auth/sign-up"
                  className="rounded-full bg-gradient-to-br from-amber-400 to-amber-600 px-5 py-2 text-sm font-semibold text-desert-900 shadow-md transition hover:brightness-110"
                >
                  Create account
                </Link>
              </>
            )}
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-white/30 bg-white/10 p-2 text-white backdrop-blur-md md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="relative border-t border-white/15 md:hidden">
            <div className="space-y-0.5 px-2.5 py-2.5">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                  style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}
                >
                  {l.label}
                </Link>
              ))}

              <div className="mt-2 space-y-1.5 border-t border-white/15 pt-2.5">
                {user ? (
                  <>
                    <Link
                      href="/dashboard"
                      className="block rounded-xl border border-white/30 bg-white/10 px-3 py-2 text-center text-sm font-semibold text-white backdrop-blur-md"
                      style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}
                    >
                      My Bookings
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="block w-full rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 px-3 py-2 text-center text-sm font-semibold text-desert-900"
                    >
                      Sign out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/auth/sign-in"
                      className="block rounded-xl border border-white/30 bg-white/10 px-3 py-2 text-center text-sm font-semibold text-white backdrop-blur-md"
                      style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}
                    >
                      Sign in
                    </Link>
                    <Link
                      href="/auth/sign-up"
                      className="block rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 px-3 py-2 text-center text-sm font-semibold text-desert-900"
                    >
                      Create account
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
