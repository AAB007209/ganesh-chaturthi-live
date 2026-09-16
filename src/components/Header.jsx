import React from 'react';
import { useApp } from '../state/AppState.jsx';

export default function Header() {
  const {
    headerPad, headerCols, clock, ph,
    festivalDisplay, devotees, pillOpacity, centreCol, centreRow, centreJustify,
    centreCreditDisplay, rightCol, rightPillPad, creditDisplay, toggleMenu,
  } = useApp();

  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, zIndex: 50, padding: headerPad,
      display: 'grid', gridTemplateColumns: headerCols, alignItems: 'center',
      columnGap: 'clamp(8px,1.8vw,22px)', rowGap: '10px',
    }}>
      {/* Clock / phase pill */}
      <div style={{
        minWidth: 0, overflow: 'hidden', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center',
        gridColumn: 1, gridRow: 1, justifySelf: 'start', width: 'auto', height: 38,
        gap: 'clamp(7px,.9vw,12px)', padding: '0 17px', borderRadius: 999,
        background: 'rgba(10,11,16,.5)', backdropFilter: 'blur(18px) saturate(1.15)', WebkitBackdropFilter: 'blur(18px) saturate(1.15)',
        border: '1px solid rgba(242,227,198,.12)', boxShadow: '0 8px 30px rgba(0,0,0,.35)',
        color: '#F2E3C6', fontSize: 'clamp(11px,1.05vw,14px)', letterSpacing: '.02em',
      }}>
        <span style={{ flex: 'none', display: 'flex', color: '#F2C066' }}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}><path d={ph.icon} /></svg>
        </span>
        <span style={{ fontVariantNumeric: 'tabular-nums' }}>{clock}</span>
        <span style={{ flex: 'none', width: 3, height: 3, borderRadius: '50%', background: 'rgba(242,227,198,.5)' }} />
        <span style={{ display: festivalDisplay }}>Ganesh Chaturthi</span>
        <span style={{ flex: 'none', display: festivalDisplay, width: 3, height: 3, borderRadius: '50%', background: 'rgba(242,227,198,.5)' }} />
        <span style={{ color: '#E9A93C' }}>{ph.label}</span>
      </div>

      {/* Devotee counter / credit pill (centre) */}
      <div className="gc-centre-pill" style={{
        gridColumn: centreCol, gridRow: centreRow, justifySelf: centreJustify, opacity: pillOpacity,
        transition: 'opacity .4s ease,color .25s,border-color .25s', maxWidth: 'min(46vw,420px)', overflow: 'hidden',
        display: 'flex', alignItems: 'center', height: 38, gap: 9, padding: '0 17px', borderRadius: 999,
        background: 'rgba(10,11,16,.5)', backdropFilter: 'blur(18px) saturate(1.15)', WebkitBackdropFilter: 'blur(18px) saturate(1.15)',
        border: '1px solid rgba(242,227,198,.12)', boxShadow: '0 8px 30px rgba(0,0,0,.35)',
        color: 'rgba(242,227,198,.85)', fontSize: 'clamp(11px,1.02vw,13px)', whiteSpace: 'nowrap',
      }}>
        <span style={{ flex: 'none', display: 'flex', color: '#3FCF6E' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}><path d="M12 3.6a3.4 3.4 0 1 1 0 6.8 3.4 3.4 0 0 1 0-6.8zM5.4 20.4v-1.2c0-2.6 3-4.2 6.6-4.2s6.6 1.6 6.6 4.2v1.2" /></svg>
        </span>
        <span style={{ fontVariantNumeric: 'tabular-nums', color: '#F6E9D0' }}>{devotees}</span>
        <span>devotees visited</span>
        <span style={{ display: centreCreditDisplay, flex: 'none', width: 1, height: 16, background: 'rgba(242,227,198,.16)', margin: '0 3px' }} />
        <span style={{ display: centreCreditDisplay, alignItems: 'center', gap: 7 }}>
          <span style={{ flex: 'none', width: 19, height: 19, borderRadius: '50%', background: 'rgba(233,169,60,.16)', border: '1px solid rgba(233,169,60,.3)', color: '#F2D6A0', fontSize: 9, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>AB</span>
          <span style={{ color: '#E9A93C', fontSize: 9, letterSpacing: '.16em', textTransform: 'uppercase' }}>made by</span>
          <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 15, color: '#F2E3C6' }}>Akash Benki</span>
        </span>
      </div>

      {/* Credit + hamburger (right) */}
      <div style={{
        gridColumn: rightCol, gridRow: 1, justifySelf: 'end', minWidth: 0, whiteSpace: 'nowrap',
        display: 'flex', alignItems: 'center', height: 38, gap: 'clamp(8px,1.2vw,14px)', padding: rightPillPad,
        borderRadius: 999, background: 'rgba(10,11,16,.5)', backdropFilter: 'blur(18px) saturate(1.15)', WebkitBackdropFilter: 'blur(18px) saturate(1.15)',
        border: '1px solid rgba(242,227,198,.12)', boxShadow: '0 8px 30px rgba(0,0,0,.35)',
      }}>
        <a href="#" className="gc-credit-link" style={{ display: creditDisplay, alignItems: 'center', gap: 7, padding: 0, textDecoration: 'none', transition: 'opacity .25s', opacity: .85 }}>
          <span style={{ flex: 'none', width: 19, height: 19, borderRadius: '50%', background: 'rgba(233,169,60,.16)', border: '1px solid rgba(233,169,60,.3)', color: '#F2D6A0', fontSize: 9, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>AB</span>
          <span style={{ color: '#E9A93C', fontSize: 'clamp(8px,.68vw,10px)', letterSpacing: '.16em', textTransform: 'uppercase' }}>made by</span>
          <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(13px,1.15vw,16px)', color: '#F2E3C6' }}>Akash Benki</span>
        </a>
        <div onClick={toggleMenu} className="gc-hamburger" style={{ flex: 'none', display: 'flex', flexDirection: 'column', gap: 4.5, cursor: 'pointer', padding: '5px 7px', borderRadius: 9, transition: 'background .2s' }}>
          <span style={{ display: 'block', width: 22, height: 1.5, background: '#F2E3C6' }} />
          <span style={{ display: 'block', width: 22, height: 1.5, background: '#F2E3C6' }} />
          <span style={{ display: 'block', width: 22, height: 1.5, background: '#F2E3C6' }} />
        </div>
      </div>
    </div>
  );
}
