import React from 'react';
import { useApp } from '../state/AppState.jsx';

export default function Music() {
  const { musicLede, pinnedDisplay, followClock, groups } = useApp();

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 'clamp(34px,5vw,62px) clamp(16px,3.4vw,32px) 190px', display: 'flex', flexDirection: 'column', gap: 'clamp(22px,3vw,32px)' }}>
      <div style={{
        padding: 'clamp(28px,4vw,46px)', borderRadius: 24, background: 'rgba(255,255,255,.06)',
        backdropFilter: 'blur(26px) saturate(1.25)', WebkitBackdropFilter: 'blur(26px) saturate(1.25)',
        border: '1px solid rgba(242,227,198,.14)', boxShadow: '0 22px 70px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.14)',
        display: 'flex', flexDirection: 'column', gap: 14,
      }}>
        <span style={{ fontSize: 11, letterSpacing: '.34em', textTransform: 'uppercase', color: 'rgba(246,236,214,.6)' }}>The playlist follows the hour</span>
        <h1 style={{ margin: 0, fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: 'clamp(40px,6vw,74px)', lineHeight: 1, color: '#F6E9D0' }}>Music</h1>
        <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.75, color: 'rgba(246,236,214,.94)', maxWidth: '60ch', textWrap: 'pretty' }}>{musicLede}</p>
        <div onClick={followClock} className="gc-follow-btn" style={{
          alignSelf: 'flex-start', display: pinnedDisplay, marginTop: 6, padding: '10px 22px', borderRadius: 999,
          fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(242,227,198,.85)',
          border: '1px solid rgba(242,227,198,.26)', cursor: 'pointer',
        }}>Let the hour choose again</div>
      </div>

      {groups.map((g) => (
        <div key={g.key} style={{
          padding: 'clamp(22px,3vw,32px)', borderRadius: 22, background: 'rgba(255,255,255,.045)',
          backdropFilter: 'blur(24px) saturate(1.2)', WebkitBackdropFilter: 'blur(24px) saturate(1.2)',
          border: '1px solid rgba(242,227,198,.11)', boxShadow: '0 18px 60px rgba(0,0,0,.32),inset 0 1px 0 rgba(255,255,255,.11)',
          display: 'flex', flexDirection: 'column', gap: 14,
        }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, paddingBottom: 12, borderBottom: '1px solid rgba(242,227,198,.1)' }}>
            <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, fontWeight: 500, color: g.color }}>{g.label}</span>
            <span style={{ fontSize: 11, letterSpacing: '.2em', color: 'rgba(242,227,198,.36)' }}>{g.range}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {g.songs.map((s) => (
              <div key={s.id} onClick={s.play} className="gc-song-row" style={{
                display: 'flex', alignItems: 'center', gap: 16, padding: '11px 12px', borderRadius: 12,
                cursor: 'pointer', background: s.active ? 'rgba(224,102,42,.14)' : 'transparent', transition: 'background .22s',
              }}>
                <span style={{ flex: 'none', width: 42, height: 42, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', background: s.art, boxShadow: '0 6px 18px rgba(0,0,0,.4)' }}>
                  <svg width="22" height="22" viewBox="0 0 40 40" fill="none" style={{ display: 'block' }}><path d="M20 8c5 0 8 3.4 8 8 0 2.6-1.2 4.4-3 5.6l1 1.6c.6 1-.2 2-1.2 1.6l-2-.8c-.9.3-1.9.4-2.8.4s-1.9-.1-2.8-.4l-2 .8c-1 .4-1.8-.6-1.2-1.6l1-1.6c-1.8-1.2-3-3-3-5.6 0-4.6 3-8 8-8z" stroke="rgba(255,240,200,.85)" strokeWidth="1.1" /><circle cx="20" cy="6" r="1.6" fill="rgba(255,240,200,.85)" /></svg>
                </span>
                <span style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <span style={{ fontSize: 16, color: '#F6E9D0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.title}</span>
                  <span style={{ fontSize: 12.5, color: 'rgba(246,236,214,.72)' }}>{s.artist}</span>
                </span>
                <span style={{ flex: 'none', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(242,227,198,.34)' }}>{s.moods}</span>
                <span style={{ flex: 'none', fontSize: 12.5, color: 'rgba(242,227,198,.45)', fontVariantNumeric: 'tabular-nums' }}>{s.len}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
