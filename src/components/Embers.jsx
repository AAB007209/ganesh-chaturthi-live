import React, { useMemo } from 'react';

export default function Embers() {
  const embers = useMemo(() => Array.from({ length: 26 }, (_, i) => ({
    left: (3 + i * 3.7 + (i % 3) * 4) % 100 + '%',
    size: 2 + (i % 3),
    color: i % 4 === 0 ? '#ffd9a0' : '#ff9d4d',
    duration: 7 + (i % 6) * 1.7,
    delay: (i * 0.71) % 8,
  })), []);

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      {embers.map((e, idx) => (
        <span key={idx} style={{
          position: 'absolute', bottom: '-12px', left: e.left,
          width: e.size + 'px', height: e.size + 'px', borderRadius: '50%',
          background: e.color, boxShadow: '0 0 8px rgba(255,168,80,.9)',
          animation: `emberRise ${e.duration}s linear ${e.delay}s infinite`,
        }} />
      ))}
    </div>
  );
}
