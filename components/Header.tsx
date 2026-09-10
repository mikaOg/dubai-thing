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
    <header className="sticky top-0 z-50 border-b border-sand-200/60 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const active = l.href === '/' ? pathname === '/' : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-semibold transition-colors ${
                  active ? 'text-sand-600' : 'text-desert-800 hover:text-sand-600'
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {loading ? (
            <div className="h-9 w-32 animate-pulse rounded-full bg-sand-100" />
          ) : user ? (
            <>
              <Link
                href="/dashboard"
                className="rounded-full border border-sand-300 px-5 py-2 text-sm font-semibold text-desert-800 transition hover:border-sand-500 hover:text-sand-700"
              >
                My Bookings
              </Link>
              <button
                onClick={handleSignOut}
                className="rounded-full bg-desert-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-desert-800"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/auth/sign-in"
                className="rounded-full border border-sand-300 px-5 py-2 text-sm font-semibold text-desert-800 transition hover:border-sand-500 hover:text-sand-700"
              >
                Sign in
              </Link>
              <Link
                href="/auth/sign-up"
                className="rounded-full bg-sand-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sand-700"
              >
                Create account
              </Link>
            </>
          )}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-desert-900 md:hidden"
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-sand-200 bg-white md:hidden">
          <div className="space-y-1 px-4 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block rounded-lg px-3 py-2 text-sm font-semibold text-desert-800 hover:bg-sand-50"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 space-y-2 border-t border-sand-200 pt-3">
              {user ? (
                <>
                  <Link
                    href="/dashboard"
                    className="block rounded-lg bg-sand-50 px-3 py-2 text-center text-sm font-semibold text-desert-800"
                  >
                    My Bookings
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="block w-full rounded-lg bg-desert-900 px-3 py-2 text-center text-sm font-semibold text-white"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/auth/sign-in"
                    className="block rounded-lg border border-sand-300 px-3 py-2 text-center text-sm font-semibold text-desert-800"
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/auth/sign-up"
                    className="block rounded-lg bg-sand-600 px-3 py-2 text-center text-sm font-semibold text-white"
                  >
                    Create account
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
