'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export default function TourMarquee({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);
  const resumeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let last = performance.now();
    const SPEED = 0.02; // pixels per millisecond (≈ 20 px/sec)

    const step = (now: number) => {
      const dt = now - last;
      last = now;

      if (!pausedRef.current) {
        const half = el.scrollWidth / 2;
        if (half > 0) {
          let next = el.scrollLeft + dt * SPEED;
          if (next >= half) next -= half;
          el.scrollLeft = next;
        }
      }

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);

    const pause = () => {
      pausedRef.current = true;
      if (resumeTimeout.current) {
        clearTimeout(resumeTimeout.current);
        resumeTimeout.current = null;
      }
    };

    const scheduleResume = () => {
      if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
      resumeTimeout.current = setTimeout(() => {
        pausedRef.current = false;
        last = performance.now();
      }, 2000);
    };

    const onEnter = () => pause();
    const onLeave = () => scheduleResume();
    const onTouchStart = () => pause();
    const onTouchEnd = () => scheduleResume();
    const onPointerDown = () => pause();
    const onPointerUp = () => scheduleResume();
    const onWheel = () => {
      pause();
      scheduleResume();
    };

    el.addEventListener('pointerenter', onEnter);
    el.addEventListener('pointerleave', onLeave);
    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointerup', onPointerUp);
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    el.addEventListener('wheel', onWheel, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
      el.removeEventListener('pointerenter', onEnter);
      el.removeEventListener('pointerleave', onLeave);
      el.removeEventListener('pointerdown', onPointerDown);
      el.removeEventListener('pointerup', onPointerUp);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
      el.removeEventListener('wheel', onWheel);
    };
  }, []);

  return (
    <div ref={ref} className="marquee-mask">
      <div className="marquee-track">{children}</div>
    </div>
  );
}
