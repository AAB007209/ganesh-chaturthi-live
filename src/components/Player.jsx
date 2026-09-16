import React from 'react';
import { useApp } from '../state/AppState.jsx';

export default function Player() {
  const {
    playerCols, playerRowGap, playerPad, playerFilter, playerOpacity, playerZIndex, playerEvents, goMusic, artSize, nowArt,
    nowTitleSize, nowTitle, nowArtist, transportJustify, extraCtlDisplay, shuffleColor, toggleShuffle,
    prev, togglePlay, playing, next, loopColor, toggleLoop, toggleMute, muted, volumeDisplay, vol, setVolume,
    elapsed, seek, progress, duration, noteCol, noteJustify, noteDisplay,
  } = useApp();

  return (
    <div style={{
      position: 'absolute', left: '50%', bottom: 28, transform: 'translateX(-50%)', zIndex: playerZIndex,
      width: 'min(880px,calc(100vw - 24px))', display: 'grid', gridTemplateColumns: playerCols,
      alignItems: 'center', columnGap: 'clamp(12px,2vw,24px)', rowGap: playerRowGap, padding: playerPad,
      borderRadius: 20, background: 'linear-gradient(rgba(24,17,14,.72),rgba(14,10,9,.82))',
      border: '1px solid rgba(242,227,198,.11)', backdropFilter: 'blur(22px) saturate(1.15)', WebkitBackdropFilter: 'blur(22px) saturate(1.15)',
      boxShadow: '0 30px 70px rgba(0,0,0,.5)', animation: 'floatUp 900ms 300ms cubic-bezier(.16,.8,.3,1) both',
      filter: playerFilter, opacity: playerOpacity, pointerEvents: playerEvents, transition: 'filter .5s ease,opacity .5s ease',
    }}>
      <div onClick={goMusic} className="gc-music-link" style={{ display: 'flex', alignItems: 'center', gap: 15, minWidth: 0, cursor: 'pointer' }}>
        <span style={{ flex: 'none', width: artSize, height: artSize, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', background: nowArt, boxShadow: '0 6px 18px rgba(0,0,0,.45)' }}>
          <svg width="30" height="30" viewBox="0 0 40 40" fill="none" style={{ display: 'block' }}><path d="M20 8c5 0 8 3.4 8 8 0 2.6-1.2 4.4-3 5.6l1 1.6c.6 1-.2 2-1.2 1.6l-2-.8c-.9.3-1.9.4-2.8.4s-1.9-.1-2.8-.4l-2 .8c-1 .4-1.8-.6-1.2-1.6l1-1.6c-1.8-1.2-3-3-3-5.6 0-4.6 3-8 8-8z" stroke="rgba(255,240,200,.85)" strokeWidth="1.1" /><circle cx="20" cy="6" r="1.6" fill="rgba(255,240,200,.85)" /></svg>
        </span>
        <span style={{ display: 'flex', flexDirection: 'column', gap: 3, minWidth: 0 }}>
          <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: nowTitleSize, color: '#F6E9D0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{nowTitle}</span>
          <span style={{ fontSize: 13, color: 'rgba(242,227,198,.55)' }}>{nowArtist}</span>
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: transportJustify, gap: 'clamp(5px,1.1vw,13px)' }}>
        <div onClick={toggleShuffle} title="Shuffle" className="gc-icon-btn" style={{ display: extraCtlDisplay, width: 32, height: 32, borderRadius: '50%', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: shuffleColor }}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5" /></svg>
        </div>
        <div onClick={prev} title="Previous" className="gc-icon-btn-c" style={{ width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'rgba(242,227,198,.75)' }}>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M19 5v14l-11-7zM6 5v14" /></svg>
        </div>
        <div onClick={togglePlay} className="gc-play-btn" style={{ width: 50, height: 50, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff', background: 'radial-gradient(circle at 34% 28%,#F58B3C,#E0662A)', boxShadow: '0 8px 26px rgba(224,102,42,.45)' }}>
          {playing ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5h3.5v15H7zM13.5 4.5H17v15h-3.5z" /></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: 2 }}><path d="M7 4.5v15l13-7.5z" /></svg>
          )}
        </div>
        <div onClick={next} title="Next" className="gc-icon-btn-c" style={{ width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'rgba(242,227,198,.75)' }}>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 5v14l11-7zM18 5v14" /></svg>
        </div>
        <div onClick={toggleLoop} title="Repeat" className="gc-icon-btn" style={{ display: extraCtlDisplay, width: 32, height: 32, borderRadius: '50%', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: loopColor }}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17 2l4 4-4 4M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4 4-4M21 13v1a4 4 0 0 1-4 4H3" /></svg>
        </div>
        <div onClick={toggleMute} title={muted ? 'Unmute' : 'Mute'} className="gc-icon-btn-c" style={{ width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'rgba(242,227,198,.75)' }}>
          {muted ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H2v6h4l5 4z" /><path d="M23 9l-6 6M17 9l6 6" /></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H2v6h4l5 4zM15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" /></svg>
          )}
        </div>
        <input type="range" min="0" max="100" value={vol} onChange={(e) => setVolume(+e.target.value)} style={{ display: volumeDisplay, width: 'clamp(56px,7vw,86px)', height: 11, cursor: 'pointer' }} />
      </div>

      <div style={{ gridColumn: 1, display: 'flex', alignItems: 'center', gap: 12, fontSize: 11.5, color: 'rgba(242,227,198,.45)', fontVariantNumeric: 'tabular-nums' }}>
        <span>{elapsed}</span>
        <div onClick={(e) => { const r = e.currentTarget.getBoundingClientRect(); seek((e.clientX - r.left) / r.width); }} style={{ position: 'relative', flex: 1, height: 14, display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <span style={{ position: 'absolute', left: 0, right: 0, height: 2, borderRadius: 2, background: 'rgba(242,227,198,.2)' }} />
          <span style={{ position: 'relative', height: 2, borderRadius: 2, background: '#E0662A', width: progress }} />
          <span style={{ position: 'absolute', left: progress, width: 9, height: 9, marginLeft: -4.5, borderRadius: '50%', background: '#F2E3C6' }} />
        </div>
        <span>{duration}</span>
      </div>

      {/* <span style={{ gridColumn: noteCol, justifySelf: noteJustify, display: noteDisplay, fontSize: 10.5, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(242,227,198,.32)' }}>Streaming audio via YouTube</span> */}
    </div>
  );
}
