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
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/60 bg-white/60 shadow-[0_8px_40px_-15px_rgba(89,54,30,0.25)] backdrop-blur-2xl">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
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
                      ? 'bg-sand-100/80 text-sand-700'
                      : 'text-desert-800 hover:bg-white/60 hover:text-sand-700'
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            {loading ? (
              <div className="h-9 w-32 animate-pulse rounded-full bg-white/50" />
            ) : user ? (
              <>
                <Link
                  href="/dashboard"
                  className="rounded-full border border-white/60 bg-white/40 px-5 py-2 text-sm font-semibold text-desert-800 backdrop-blur-xl transition hover:bg-white/70"
                >
                  My Bookings
                </Link>
                <button
                  onClick={handleSignOut}
                  className="rounded-full bg-gradient-to-br from-desert-800 to-desert-900 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:from-desert-900 hover:to-black"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/sign-in"
                  className="rounded-full border border-white/60 bg-white/40 px-5 py-2 text-sm font-semibold text-desert-800 backdrop-blur-xl transition hover:bg-white/70"
                >
                  Sign in
                </Link>
                <Link
                  href="/auth/sign-up"
                  className="rounded-full bg-gradient-to-br from-sand-500 to-sand-700 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-sand-900/20 transition hover:from-sand-600 hover:to-sand-800"
                >
                  Create account
                </Link>
              </>
            )}
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-white/60 bg-white/40 p-2.5 text-desert-900 backdrop-blur-xl md:hidden"
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="border-t border-white/40 md:hidden">
            <div className="space-y-1 px-3 py-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-desert-800 hover:bg-white/60"
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-2 space-y-2 border-t border-white/40 pt-3">
                {user ? (
                  <>
                    <Link
                      href="/dashboard"
                      className="block rounded-xl bg-white/60 px-3 py-2.5 text-center text-sm font-semibold text-desert-800"
                    >
                      My Bookings
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="block w-full rounded-xl bg-desert-900 px-3 py-2.5 text-center text-sm font-semibold text-white"
                    >
                      Sign out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/auth/sign-in"
                      className="block rounded-xl border border-white/60 bg-white/40 px-3 py-2.5 text-center text-sm font-semibold text-desert-800"
                    >
                      Sign in
                    </Link>
                    <Link
                      href="/auth/sign-up"
                      className="block rounded-xl bg-gradient-to-br from-sand-500 to-sand-700 px-3 py-2.5 text-center text-sm font-semibold text-white"
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
