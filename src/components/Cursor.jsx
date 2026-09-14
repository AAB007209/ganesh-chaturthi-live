import React, { useEffect, useRef } from 'react';

export default function Cursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(hover: none)').matches) return;
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    const st = { x: innerWidth / 2, y: innerHeight / 2, rx: innerWidth / 2, ry: innerHeight / 2, scale: 1, s: 1, down: false, seen: false };

    const onMove = (e) => {
      st.x = e.clientX; st.y = e.clientY;
      if (!st.seen) { st.rx = st.x; st.ry = st.y; st.seen = true; ring.style.opacity = '1'; dot.style.opacity = '1'; }
      const el = e.target;
      let clickable = false;
      try { clickable = !!(el && el.closest && el.closest('[title],a,select,input')) || (el && getComputedStyle(el).cursor === 'pointer'); } catch (_) {}
      st.scale = clickable ? 1.9 : 1;
      ring.style.borderColor = clickable ? 'rgba(233,169,60,.9)' : 'rgba(242,227,198,.5)';
      ring.style.background = clickable ? 'rgba(233,169,60,.1)' : 'transparent';
    };
    const onDown = () => { st.down = true; };
    const onUp = () => { st.down = false; };
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    window.addEventListener('pointerup', onUp, { passive: true });

    let raf;
    const loop = () => {
      st.rx += (st.x - st.rx) * 0.16;
      st.ry += (st.y - st.ry) * 0.16;
      const target = st.scale * (st.down ? 0.78 : 1);
      st.s += (target - st.s) * 0.18;
      ring.style.transform = `translate3d(${st.rx}px,${st.ry}px,0) scale(${st.s.toFixed(3)})`;
      dot.style.transform = `translate3d(${st.x}px,${st.y}px,0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} style={{
        position: 'fixed', top: 0, left: 0, zIndex: 90, width: 34, height: 34, margin: '-17px 0 0 -17px',
        borderRadius: '50%', border: '1px solid rgba(242,227,198,.55)', pointerEvents: 'none', opacity: 0,
        willChange: 'transform', transition: 'opacity .3s ease,border-color .3s ease,background .3s ease',
      }} />
      <div ref={dotRef} style={{
        position: 'fixed', top: 0, left: 0, zIndex: 91, width: 5, height: 5, margin: '-2.5px 0 0 -2.5px',
        borderRadius: '50%', background: '#E9A93C', boxShadow: '0 0 10px rgba(233,169,60,.8)', pointerEvents: 'none',
        opacity: 0, willChange: 'transform', transition: 'opacity .3s ease',
      }} />
    </>
  );
}
