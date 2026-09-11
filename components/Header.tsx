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

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-50 px-2 pt-2 sm:px-4 sm:pt-4">
      <div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-xl border border-white/20 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)] sm:rounded-2xl"
        style={{
          background:
            'linear-gradient(135deg, rgba(26,21,18,0.62) 0%, rgba(26,21,18,0.42) 100%)',
          backdropFilter: 'blur(40px) saturate(200%)',
          WebkitBackdropFilter: 'blur(40px) saturate(200%)',
        }}
      >
        <div className="relative flex h-14 items-center justify-between px-3 sm:h-16 sm:px-6">
          <Logo />

          {/* Desktop nav — hidden on mobile */}
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
                  className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
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
                  className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
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

          {/* Mobile auth buttons — visible on phone only */}
          <div className="flex items-center gap-1.5 md:hidden">
            {loading ? (
              <div className="h-8 w-20 animate-pulse rounded-full bg-white/10" />
            ) : user ? (
              <>
                <Link
                  href="/dashboard"
                  className="rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-[11px] font-bold text-white"
                >
                  Bookings
                </Link>
                <button
                  onClick={handleSignOut}
                  className="rounded-full bg-gradient-to-br from-amber-400 to-amber-600 px-3 py-1.5 text-[11px] font-bold text-desert-900"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/sign-in"
                  className="rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-[11px] font-bold text-white"
                >
                  Sign in
                </Link>
                <Link
                  href="/auth/sign-up"
                  className="rounded-full bg-gradient-to-br from-amber-400 to-amber-600 px-3 py-1.5 text-[11px] font-bold text-desert-900"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile nav row — always visible on phone */}
        <nav className="relative flex items-center gap-1 overflow-x-auto border-t border-white/15 px-2.5 py-2 md:hidden">
          {links.map((l) => {
            const active =
              l.href === '/' ? pathname === '/' : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-bold transition ${
                  active
                    ? 'bg-white/15 text-amber-300'
                    : 'text-white/90 hover:bg-white/10'
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
