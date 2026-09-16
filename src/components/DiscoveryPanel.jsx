import React from 'react';
import { useApp } from '../state/AppState.jsx';

export default function DiscoveryPanel() {
  const { topicEyebrow, topicTitle, topicBody, panelOpacity, panelEvents, panelSlide, closePanel } = useApp();

  return (
    <div className="gc-scroll" style={{
      position: 'absolute', zIndex: 44, right: 'clamp(16px,2.2vw,28px)', top: '50%',
      width: 'min(400px,calc(100vw - 44px))', maxHeight: '72vh', overflowY: 'auto',
      transform: `translateY(-50%) translateX(${panelSlide})`, opacity: panelOpacity, pointerEvents: panelEvents,
      transition: 'opacity .45s ease,transform .55s cubic-bezier(.16,.8,.3,1)', padding: '32px 30px 28px',
      borderRadius: 6, background: 'rgba(12,10,14,.62)', border: '1px solid rgba(233,169,60,.3)',
      backdropFilter: 'blur(26px) saturate(1.2)', WebkitBackdropFilter: 'blur(26px) saturate(1.2)',
      boxShadow: '0 40px 90px rgba(0,0,0,.6)',
    }}>
      <div onClick={closePanel} className="gc-panel-close" style={{
        position: 'absolute', top: 12, right: 12, width: 30, height: 30, display: 'flex',
        alignItems: 'center', justifyContent: 'center', borderRadius: '50%', cursor: 'pointer', color: 'rgba(242,227,198,.6)',
      }}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
      </div>
      <div style={{ fontSize: 11, letterSpacing: '.34em', textTransform: 'uppercase', color: 'rgba(246,236,214,.6)', marginBottom: 14 }}>{topicEyebrow}</div>
      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: 38, lineHeight: 1.06, color: '#F6E9D0', marginBottom: 18 }}>{topicTitle}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {topicBody.map((p, idx) => (
          <p key={idx} style={{ margin: 0, fontSize: 14.5, lineHeight: 1.78, color: 'rgba(246,236,214,.94)', textWrap: 'pretty' }}>{p}</p>
        ))}
      </div>
    </div>
  );
}
