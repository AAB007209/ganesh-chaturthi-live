import React from 'react';
import { useApp } from '../state/AppState.jsx';
import { NAV_ITEMS } from '../data.js';

export default function Nav() {
  const { navX, menuOpen, closeMenu, page, goHome, goMusic, goStory, goAbout } = useApp();

  const goFor = { home: goHome, music: goMusic, story: goStory, about: goAbout };
  const tabIdx = menuOpen ? 0 : -1;

  return (
    <div inert={menuOpen ? undefined : ''} aria-hidden={!menuOpen} style={{
      position: 'absolute', top: 0, right: 0, bottom: 0, width: 'min(430px,100vw)', zIndex: 60,
      padding: '92px clamp(26px,3.4vw,44px) 44px', background: 'rgba(9,8,12,.9)', backdropFilter: 'blur(30px)',
      WebkitBackdropFilter: 'blur(30px)', borderLeft: '1px solid rgba(233,169,60,.16)', display: 'flex',
      flexDirection: 'column', justifyContent: 'space-between', gap: 36, transform: `translateX(${navX})`,
      transition: 'transform 620ms cubic-bezier(.16,.8,.3,1)',
    }}>
      <div onClick={closeMenu} className="gc-menu-close" style={{ position: 'absolute', top: 22, right: 26, width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'rgba(242,227,198,.7)' }}>
        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {NAV_ITEMS.map((n) => (
          <div key={n.key} onClick={() => goFor[n.key]()} className="gc-nav-item" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '19px 0',
            borderBottom: '1px solid rgba(242,227,198,.08)', fontFamily: "'Cormorant Garamond',serif",
            fontSize: 'clamp(30px,3.4vw,40px)', lineHeight: 1, color: page === n.key ? '#F6E9D0' : 'rgba(242,227,198,.72)',
            cursor: 'pointer', transition: 'color .24s',
          }}>
            <span>{n.label}</span>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', opacity: .35 }}><path d="M9 5l7 7-7 7" /></svg>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <span style={{ fontSize: 11, letterSpacing: '.34em', textTransform: 'uppercase', color: 'rgba(246,236,214,.6)' }}>Connect</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
          <a href="#" title="LinkedIn" tabIndex={tabIdx} className="gc-social-btn" style={{ width: 44, height: 44, borderRadius: 13, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(242,227,198,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(242,227,198,.8)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.5c0-1.38-.02-3.16-1.98-3.16-1.98 0-2.28 1.5-2.28 3.06V21H9z" /></svg>
          </a>
          <a href="#" title="Twitter / X" tabIndex={tabIdx} className="gc-social-btn" style={{ width: 44, height: 44, borderRadius: 13, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(242,227,198,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(242,227,198,.8)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.63l-5.2-6.8-5.95 6.8H1.72l7.5-8.57L1.07 2.25h6.8l4.71 6.23zm-1.16 17.52h1.83L5.68 4.13H3.71z" /></svg>
          </a>
          <a href="#" title="GitHub" tabIndex={tabIdx} className="gc-social-btn" style={{ width: 44, height: 44, borderRadius: 13, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(242,227,198,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(242,227,198,.8)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.4 9.4 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.35 4.7-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" /></svg>
          </a>
        </div>
        <span style={{ color: 'rgba(242,227,198,.3)', fontSize: 12 }}>Made with Ganesh Bhakthi @2026</span>
      </div>
    </div>
  );
}
