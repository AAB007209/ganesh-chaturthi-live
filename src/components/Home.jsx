import React from 'react';
import { useApp } from '../state/AppState.jsx';

export default function Home() {
  const {
    homeOpacity, heroRight, heroBottom, heroMaxH, ph, phaseOptions, phaseValue, setPhase,
    hotspots,
  } = useApp();

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 38, pointerEvents: 'none', opacity: homeOpacity, transition: 'opacity .5s ease' }}>
      <div style={{
        position: 'absolute', left: 'clamp(18px,4.5vw,72px)', right: heroRight, bottom: heroBottom, maxHeight: heroMaxH,
        display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'clamp(14px,2.2vh,26px)',
      }}>
        <div style={{ animation: 'rise 1400ms cubic-bezier(.16,.8,.3,1) both' }}>
          <div style={{
            fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: 'clamp(48px,7.6vw,124px)', lineHeight: .86,
            color: '#F6E9D0', letterSpacing: '-.015em', marginLeft: '-.055em',
            textShadow: '0 14px 60px rgba(0,0,0,.85),0 2px 16px rgba(0,0,0,.8),0 1px 3px rgba(0,0,0,.6)',
          }}>Ganesh</div>
          <div style={{ margin: '14px 0 0 0', fontSize: 'clamp(11px,1.15vw,15px)', letterSpacing: '.42em', textTransform: 'uppercase', color: 'rgba(246,233,208,.95)', textShadow: '0 4px 22px rgba(0,0,0,.85),0 1px 4px rgba(0,0,0,.7)' }}>Ganapati Bappa Moriya</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, width: 'min(300px,52vw)', margin: '18px 0 0 0' }}>
            <span style={{ flex: 1, height: 1, background: 'linear-gradient(90deg,transparent,rgba(233,169,60,.75),transparent)' }} />
            <span style={{ color: '#E9A93C', fontSize: 12 }}>&#10248;</span>
            <span style={{ flex: 1, height: 1, background: 'linear-gradient(90deg,transparent,rgba(233,169,60,.75),transparent)' }} />
          </div>
        </div>

        <div style={{ maxWidth: '36ch', minWidth: 'min(36ch,74vw)', fontSize: 'clamp(15px,1.25vw,17px)', lineHeight: 1.62, color: 'rgba(250,242,226,.97)', textShadow: '0 2px 16px rgba(0,0,0,.95),0 1px 4px rgba(0,0,0,.85)' }}>{ph.note}</div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8, pointerEvents: 'auto' }}>
          <span style={{ fontSize: 10, letterSpacing: '.24em', textTransform: 'uppercase', color: 'rgba(242,227,198,.6)', textShadow: '0 1px 6px rgba(0,0,0,.8)' }}>Preview atmosphere</span>
          <div className="gc-picker" style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', borderRadius: 999, background: 'rgba(10,12,20,.52)', border: '1px solid rgba(242,227,198,.16)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', transition: 'border-color .25s' }}>
            <select value={phaseValue} onChange={(e) => setPhase(e.target.value)} style={{
              appearance: 'none', WebkitAppearance: 'none', margin: 0, padding: '9px 40px 9px 17px', fontSize: 12.5,
              fontFamily: 'inherit', lineHeight: 1.2, border: 0, borderRadius: 999, background: 'transparent',
              color: 'rgba(242,227,198,.9)', cursor: 'pointer', outline: 'none',
            }}>
              <option value="auto">Follow my clock</option>
              {phaseOptions.map((p) => <option key={p.key} value={p.key}>{p.label}</option>)}
            </select>
            <span style={{ position: 'absolute', right: 15, display: 'flex', pointerEvents: 'none', color: 'rgba(242,227,198,.6)' }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}><path d="M6 9l6 6 6-6" /></svg>
            </span>
          </div>
        </div>
      </div>

      {hotspots.map((h) => (
        <div key={h.key} onClick={h.open} title={h.label} className="gc-hotspot" style={{
          position: 'absolute', left: h.x, top: h.y, width: 48, height: 48, margin: '-24px 0 0 -24px',
          borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
          pointerEvents: 'auto', transition: 'transform .4s cubic-bezier(.16,.8,.3,1)',
        }}>
          <span style={{ position: 'absolute', inset: 10, borderRadius: '50%', border: '1.5px solid rgba(255,226,168,.75)', background: 'rgba(255,214,140,.08)', boxShadow: '0 0 0 6px rgba(255,214,140,.05),0 4px 18px rgba(0,0,0,.4)' }} />
          <span style={{ position: 'absolute', inset: 10, borderRadius: '50%', border: '1.5px solid rgba(255,226,168,.6)', animation: 'hotPulse 3s ease-out infinite' }} />
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FFE9BC', boxShadow: '0 0 10px rgba(255,214,140,.9)' }} />
        </div>
      ))}
    </div>
  );
}
