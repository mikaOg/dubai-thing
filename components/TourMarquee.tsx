'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export default function TourMarquee({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId = 0;
    let lastTime = performance.now();
    const SPEED = 0.025; // pixels per ms

    const step = (now: number) => {
      const dt = now - lastTime;
      lastTime = now;

      if (!pausedRef.current) {
        const half = el.scrollWidth / 2;
        if (half > 0) {
          let next = el.scrollLeft + dt * SPEED;
          if (next >= half) next -= half;
          el.scrollLeft = next;
        }
      }

      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);

    const pause = () => {
      pausedRef.current = true;
      if (resumeTimer.current) {
        clearTimeout(resumeTimer.current);
        resumeTimer.current = null;
      }
    };

    const scheduleResume = () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
      resumeTimer.current = setTimeout(() => {
        pausedRef.current = false;
        lastTime = performance.now();
      }, 2000);
    };

    const onEnter = () => pause();
    const onLeave = () => scheduleResume();
    const onDown = () => pause();
    const onUp = () => scheduleResume();
    const onTouchStart = () => pause();
    const onTouchEnd = () => scheduleResume();
    const onWheel = () => {
      pause();
      scheduleResume();
    };

    el.addEventListener('pointerenter', onEnter);
    el.addEventListener('pointerleave', onLeave);
    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointerup', onUp);
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    el.addEventListener('wheel', onWheel, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
      el.removeEventListener('pointerenter', onEnter);
      el.removeEventListener('pointerleave', onLeave);
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('pointerup', onUp);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
      el.removeEventListener('wheel', onWheel);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="marquee-mask"
      style={{
        overflowX: 'auto',
        overflowY: 'hidden',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        cursor: 'grab',
        WebkitOverflowScrolling: 'touch',
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
        maskImage:
          'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          width: 'max-content',
          paddingLeft: '1rem',
          paddingRight: '1rem',
        }}
      >
        {children}
      </div>
    </div>
  );
}
