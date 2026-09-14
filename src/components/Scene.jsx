import React from 'react';
import { useApp } from '../state/AppState.jsx';
import Embers from './Embers.jsx';
import Petals from './Petals.jsx';

const EASE = '1100ms cubic-bezier(.4,0,.2,1)';

export default function Scene() {
  const { stageLayers, tint, vignetteOpacity, topScrim, leftScrim, bottomScrim, sceneFx } = useApp();

  return (
    <>
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {stageLayers.map((L) => (
          <div key={L.key} style={{
            position: 'absolute', inset: '-2%', backgroundImage: L.image, backgroundSize: 'cover',
            backgroundPosition: L.pos, willChange: 'opacity,filter,transform',
            opacity: L.opacity, filter: L.filter, transform: `scale(${L.scale})`,
            transition: `opacity ${EASE},filter ${EASE},transform ${EASE}`,
          }} />
        ))}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', mixBlendMode: 'soft-light', transition: `background ${EASE}`, background: tint }} />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', transition: `opacity ${EASE}`, opacity: vignetteOpacity, background: 'radial-gradient(ellipse at 50% 46%,transparent 42%,rgba(4,5,10,.72) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', transition: `background ${EASE}`, background: topScrim }} />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', transition: `opacity ${EASE}`, opacity: leftScrim, background: 'linear-gradient(100deg,rgba(6,6,10,.86) 0%,rgba(6,6,10,.66) 24%,rgba(6,6,10,.34) 42%,rgba(6,6,10,.1) 56%,transparent 68%)' }} />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(transparent 40%,rgba(6,8,14,.28) 64%,rgba(6,8,14,.66) 88%,rgba(6,8,14,.78))', opacity: bottomScrim, transition: `opacity ${EASE}` }} />
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '44vh', pointerEvents: 'none', overflow: 'hidden', opacity: sceneFx, transition: `opacity ${EASE}` }}>
          <Embers />
        </div>
      </div>
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none', overflow: 'hidden', opacity: sceneFx, transition: `opacity ${EASE}` }}>
        <Petals />
      </div>
    </>
  );
}
