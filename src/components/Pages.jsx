import React from 'react';
import { useApp } from '../state/AppState.jsx';
import Music from '../pages/Music.jsx';
import Story from '../pages/Story.jsx';
import About from '../pages/About.jsx';

export default function Pages() {
  const { overlayTop, pageOpacity, pageEvents, pageY, goHome, pageKicker, isMusic, isStory, isAbout } = useApp();

  return (
    <div data-page-scroll style={{
      position: 'absolute', top: overlayTop, left: 0, right: 0, bottom: 0, zIndex: 40,
      overflowY: 'auto', overflowX: 'hidden', opacity: pageOpacity, pointerEvents: pageEvents,
      transform: `translateY(${pageY})`, transition: 'opacity .45s ease,transform .5s cubic-bezier(.16,.8,.3,1)',
    }}>
      <div style={{
        position: 'sticky', top: 10, zIndex: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 20, margin: '10px clamp(14px,3vw,32px) 0', padding: '13px 20px', borderRadius: 16,
        background: 'rgba(255,255,255,.055)', backdropFilter: 'blur(22px) saturate(1.3)', WebkitBackdropFilter: 'blur(22px) saturate(1.3)',
        border: '1px solid rgba(242,227,198,.14)', boxShadow: '0 10px 40px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.12)',
      }}>
        <div onClick={goHome} className="gc-back-link" style={{ display: 'flex', alignItems: 'center', gap: 9, cursor: 'pointer', color: 'rgba(242,227,198,.7)', fontSize: 12.5, letterSpacing: '.14em', textTransform: 'uppercase' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}><path d="M15 5l-7 7 7 7" /></svg>
          <span style={{ whiteSpace: 'nowrap' }}>Back to the street</span>
        </div>
        <span style={{ color: 'rgba(233,169,60,.75)', fontSize: 11, letterSpacing: '.28em', textTransform: 'uppercase' }}>{pageKicker}</span>
      </div>

      {isMusic && <Music />}
      {isStory && <Story />}
      {isAbout && <About />}
    </div>
  );
}
