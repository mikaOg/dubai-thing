'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function CancelBookingButton({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const cancel = async () => {
    if (!confirm('Cancel this booking?')) return;
    setLoading(true);
    await supabase.from('bookings').delete().eq('id', id);
    router.refresh();
    setLoading(false);
  };

  return (
    <button
      onClick={cancel}
      disabled={loading}
      className="rounded-full border border-red-200/70 bg-white/40 px-4 py-1.5 text-xs font-bold text-red-600 backdrop-blur-xl transition hover:bg-red-50/80 disabled:opacity-50"
    >
      {loading ? 'Cancelling...' : 'Cancel booking'}
    </button>
  );
}
