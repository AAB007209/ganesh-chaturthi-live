import React, { useMemo } from 'react';

const COLORS = ['#E8761E', '#F0A81E', '#C0341C'];

export default function Petals() {
  const petals = useMemo(() => Array.from({ length: 12 }, (_, i) => {
    const size = 7 + (i % 4) * 2.4;
    return {
      left: (6 + i * 8.1) % 100 + '%',
      width: size, height: size * 0.62,
      color: COLORS[i % 3],
      drift: ((i % 5) - 2) * 34 + 'px',
      duration: 17 + (i % 6) * 2.6,
      delay: -(i * 1.6),
    };
  }), []);

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      {petals.map((p, idx) => (
        <span key={idx} style={{
          position: 'absolute', top: '-8vh', left: p.left,
          width: p.width + 'px', height: p.height + 'px', borderRadius: '60% 40% 55% 45%',
          background: p.color, opacity: 0.7,
          '--drift': p.drift,
          animation: `petalFall ${p.duration}s linear ${p.delay}s infinite`,
        }} />
      ))}
    </div>
  );
}
