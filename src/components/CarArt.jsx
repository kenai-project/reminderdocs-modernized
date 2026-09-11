import { useId } from 'react';

// Flat-style SVG vehicle illustrations used across the story scenes.
// `type`: car | suv | bike | van. Gradient IDs are unique per instance.
export default function CarArt({ type = 'car', className = '' }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const bodyId = `body-${uid}`;
  const glassId = `glass-${uid}`;
  const blueId = `blue-${uid}`;
  const accentId = `accent-${uid}`;

  const defs = (
    <defs>
      <linearGradient id={blueId} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#3d82ff" />
        <stop offset="1" stopColor="#144fd4" />
      </linearGradient>
      <linearGradient id={accentId} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#2fd4b4" />
        <stop offset="1" stopColor="#0e9c82" />
      </linearGradient>
      <linearGradient id={glassId} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#e8f6ff" />
        <stop offset="1" stopColor="#9fc7ee" />
      </linearGradient>
    </defs>
  );
  const bodyFill = `url(#${blueId})`;
  const glassFill = `url(#${glassId})`;

  if (type === 'bike') {
    return (
      <svg className={className} viewBox="0 0 200 130" role="img" aria-label="Motorbike illustration">
        {defs}
        <ellipse cx="100" cy="112" rx="78" ry="8" fill="rgba(2,8,20,0.35)" />
        <circle cx="52" cy="88" r="20" fill="#101a2c" />
        <circle cx="52" cy="88" r="8" fill="#c9d6e8" />
        <circle cx="150" cy="88" r="20" fill="#101a2c" />
        <circle cx="150" cy="88" r="8" fill="#c9d6e8" />
        <path d="M60 76 Q86 50 106 50 L134 50 Q158 50 156 72 L144 80 Q118 88 94 82 Z" fill={`url(#${accentId})`} />
        <path d="M98 48 L118 48 Q132 48 138 38" stroke="#0d3bb0" strokeWidth="7" fill="none" strokeLinecap="round" />
        <rect x="82" y="40" width="36" height="10" rx="5" fill="#102033" />
        <rect x="144" y="32" width="20" height="9" rx="4.5" fill="#ffd76a" />
      </svg>
    );
  }

  if (type === 'suv') {
    return (
      <svg className={className} viewBox="0 0 260 130" role="img" aria-label="SUV illustration">
        {defs}
        <ellipse cx="130" cy="114" rx="104" ry="9" fill="rgba(2,8,20,0.35)" />
        <rect x="72" y="22" width="116" height="6" rx="3" fill="#0d3bb0" />
        <path d="M64 62 Q82 30 128 30 Q168 30 190 62 Z" fill={bodyFill} />
        <path d="M74 59 Q88 38 127 38 Q162 38 180 59 Z" fill={glassFill} />
        <rect x="18" y="58" width="224" height="40" rx="16" fill={bodyFill} />
        <rect x="36" y="90" width="188" height="12" rx="6" fill="#0d3bb0" />
        <rect x="226" y="66" width="16" height="9" rx="4.5" fill="#ffd76a" />
        <rect x="18" y="66" width="12" height="9" rx="4.5" fill="#ff6b6b" />
        <circle cx="74" cy="98" r="17" fill="#101a2c" />
        <circle cx="74" cy="98" r="7.5" fill="#c9d6e8" />
        <circle cx="186" cy="98" r="17" fill="#101a2c" />
        <circle cx="186" cy="98" r="7.5" fill="#c9d6e8" />
      </svg>
    );
  }

  if (type === 'van') {
    return (
      <svg className={className} viewBox="0 0 280 130" role="img" aria-label="Van illustration">
        {defs}
        <ellipse cx="140" cy="114" rx="116" ry="9" fill="rgba(2,8,20,0.35)" />
        <rect x="26" y="28" width="182" height="64" rx="12" fill={bodyFill} />
        <path d="M206 92 L206 64 Q206 50 220 50 L236 50 Q252 50 256 66 L258 78 Q258 92 244 92 Z" fill={bodyFill} />
        <path d="M214 66 Q216 57 227 57 L238 57 Q247 57 249 66 Z" fill={glassFill} />
        <rect x="42" y="40" width="70" height="32" rx="6" fill={glassFill} opacity="0.55" />
        <rect x="256" y="64" width="12" height="9" rx="4.5" fill="#ffd76a" />
        <rect x="26" y="86" width="216" height="7" rx="3.5" fill="#0d3bb0" />
        <circle cx="78" cy="98" r="16" fill="#101a2c" />
        <circle cx="78" cy="98" r="7" fill="#c9d6e8" />
        <circle cx="208" cy="98" r="16" fill="#101a2c" />
        <circle cx="208" cy="98" r="7" fill="#c9d6e8" />
      </svg>
    );
  }

  // Default: sedan
  return (
    <svg className={className} viewBox="0 0 260 120" role="img" aria-label="Car illustration">
      {defs}
      <ellipse cx="130" cy="104" rx="104" ry="9" fill="rgba(2,8,20,0.35)" />
      <path d="M78 58 Q92 30 132 30 Q170 30 186 58 Z" fill={bodyFill} />
      <path d="M88 55 Q100 37 131 37 Q163 37 176 55 Z" fill={glassFill} />
      <rect x="16" y="54" width="228" height="34" rx="17" fill={bodyFill} />
      <rect x="34" y="80" width="192" height="12" rx="6" fill="#0d3bb0" />
      <rect x="228" y="60" width="16" height="9" rx="4.5" fill="#ffd76a" />
      <rect x="16" y="60" width="12" height="9" rx="4.5" fill="#ff6b6b" />
      <circle cx="72" cy="88" r="17" fill="#101a2c" />
      <circle cx="72" cy="88" r="7.5" fill="#c9d6e8" />
      <circle cx="188" cy="88" r="17" fill="#101a2c" />
      <circle cx="188" cy="88" r="7.5" fill="#c9d6e8" />
    </svg>
  );
}
