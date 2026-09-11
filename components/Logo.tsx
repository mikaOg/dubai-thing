import Link from 'next/link';

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5 sm:gap-3">
      <svg
        viewBox="0 0 100 60"
        className="h-10 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105 sm:h-11"
        aria-label="Ethio Connect"
      >
        <rect x="20" y="6" width="42" height="3" rx="1" fill="#4a4a2f" />
        <rect x="23" y="9" width="2" height="3" fill="#4a4a2f" />
        <rect x="35" y="9" width="2" height="3" fill="#4a4a2f" />
        <rect x="47" y="9" width="2" height="3" fill="#4a4a2f" />
        <rect x="59" y="9" width="2" height="3" fill="#4a4a2f" />
        <path
          d="M14 26 L14 18 Q14 14 18 14 L62 14 Q66 14 68 17 L76 26 L86 28 Q92 29 93 34 L93 42 Q93 45 90 45 L82 45 L80 45 Q80 40 75 40 Q70 40 70 45 L38 45 Q38 40 33 40 Q28 40 28 45 L18 45 Q15 45 14 42 Z"
          fill="#a8a35c"
          stroke="#4a4a2f"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <rect x="16" y="18" width="42" height="20" fill="#a8a35c" stroke="#4a4a2f" strokeWidth="2" />
        <rect x="22" y="22" width="9" height="7" fill="#fdf5e0" stroke="#4a4a2f" strokeWidth="1.5" />
        <rect x="34" y="22" width="9" height="7" fill="#fdf5e0" stroke="#4a4a2f" strokeWidth="1.5" />
        <rect x="46" y="22" width="9" height="7" fill="#fdf5e0" stroke="#4a4a2f" strokeWidth="1.5" />
        <rect x="63" y="23" width="8" height="6" fill="#fdf5e0" stroke="#4a4a2f" strokeWidth="1.5" />
        <ellipse cx="10" cy="30" rx="7" ry="10" fill="#3d4466" stroke="#4a4a2f" strokeWidth="2" />
        <ellipse cx="10" cy="30" rx="3" ry="4.5" fill="#4a4a2f" />
        <rect x="10" y="42" width="86" height="4" fill="#4a4a2f" rx="1" />
        <rect x="92" y="31" width="4" height="4" rx="1" fill="#fdf5e0" stroke="#4a4a2f" strokeWidth="1.5" />
        <rect x="72" y="18" width="6" height="3" fill="#a8a35c" stroke="#4a4a2f" strokeWidth="1.5" />
        <circle cx="76" cy="48" r="8" fill="#3d4466" stroke="#4a4a2f" strokeWidth="2" />
        <circle cx="76" cy="48" r="3.5" fill="#fdf5e0" stroke="#4a4a2f" strokeWidth="1.5" />
        <circle cx="76" cy="48" r="1.5" fill="#3d4466" />
        <circle cx="32" cy="48" r="8" fill="#3d4466" stroke="#4a4a2f" strokeWidth="2" />
        <circle cx="32" cy="48" r="3.5" fill="#fdf5e0" stroke="#4a4a2f" strokeWidth="1.5" />
        <circle cx="32" cy="48" r="1.5" fill="#3d4466" />
        <rect x="42" y="47" width="20" height="2" fill="#4a4a2f" />
      </svg>

      <span
        className={`text-[16px] font-black tracking-tight ${
          light ? 'text-white' : 'text-amber-300'
        } sm:text-[18px]`}
        style={{
          fontFamily: 'ui-serif, Georgia, "Times New Roman", serif',
          letterSpacing: '-0.02em',
          textShadow:
            '0 2px 6px rgba(0,0,0,0.55), 0 0 20px rgba(251,191,36,0.25)',
        }}
      >
        Ethio Connect
      </span>
    </Link>
  );
}
