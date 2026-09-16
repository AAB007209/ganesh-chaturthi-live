import React from 'react';
import { STORY_FACTS, CHAPTERS } from '../data.js';

export default function Story() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 'clamp(34px,5vw,62px) clamp(16px,3.4vw,32px) 190px', display: 'flex', flexDirection: 'column', gap: 'clamp(24px,3.2vw,38px)' }}>
      <div style={{
        padding: 'clamp(30px,4.4vw,52px)', borderRadius: 26, background: 'rgba(255,255,255,.06)',
        backdropFilter: 'blur(26px) saturate(1.25)', WebkitBackdropFilter: 'blur(26px) saturate(1.25)',
        border: '1px solid rgba(242,227,198,.14)', boxShadow: '0 22px 70px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.14)',
        display: 'flex', flexDirection: 'column', gap: 16,
      }}>
        <span style={{ fontSize: 11, letterSpacing: '.34em', textTransform: 'uppercase', color: 'rgba(246,236,214,.6)' }}>The story</span>
        <h1 style={{ margin: 0, fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: 'clamp(38px,5.6vw,78px)', lineHeight: 1.02, color: '#F6E9D0', textWrap: 'pretty' }}>From quiet prayers to grand celebrations</h1>
        <p style={{ margin: 0, fontSize: 17, lineHeight: 1.75, color: 'rgba(246,236,214,.94)', maxWidth: '60ch', textWrap: 'pretty' }}>Six moments, from a turmeric figure at a doorway to a hundred-strong drum troupe walking an idol down to the sea.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9, marginTop: 6 }}>
          {STORY_FACTS.map((f, idx) => (
            <span key={idx} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 14px', borderRadius: 999, background: 'rgba(255,255,255,.06)', border: '1px solid rgba(242,227,198,.13)', color: 'rgba(246,236,214,.9)', fontSize: 12.5, whiteSpace: 'nowrap' }}>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#E9A93C' }} />
              <span>{f.text}</span>
            </span>
          ))}
        </div>
      </div>

      {CHAPTERS.map((ch) => (
        <div key={ch.num} className="gc-chapter-card" style={{
          padding: 'clamp(24px,3.2vw,36px)', borderRadius: 24, background: 'rgba(255,255,255,.045)',
          backdropFilter: 'blur(24px) saturate(1.2)', WebkitBackdropFilter: 'blur(24px) saturate(1.2)',
          border: '1px solid rgba(242,227,198,.11)', boxShadow: '0 18px 60px rgba(0,0,0,.34),inset 0 1px 0 rgba(255,255,255,.11)',
          display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 'clamp(18px,2.6vw,30px)', alignItems: 'start',
          transition: 'border-color .3s,transform .3s,background .3s',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 50, height: 50, borderRadius: 15, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(150deg,rgba(233,169,60,.22),rgba(224,102,42,.12))', border: '1px solid rgba(233,169,60,.32)', color: '#F2D6A0' }}>
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}><path d={ch.icon} /></svg>
            </span>
            <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 26, color: 'rgba(233,169,60,.5)', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{ch.num}</span>
            <span style={{ width: 1, flex: 1, minHeight: 24, background: 'linear-gradient(rgba(233,169,60,.45),transparent)' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 13, minWidth: 0 }}>
            <span style={{ fontSize: 11, letterSpacing: '.28em', textTransform: 'uppercase', color: 'rgba(246,236,214,.62)' }}>{ch.era}</span>
            <h2 style={{ margin: 0, fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: 'clamp(26px,3.4vw,42px)', lineHeight: 1.12, color: '#F6E9D0', textWrap: 'pretty' }}>{ch.title}</h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.8, color: 'rgba(246,236,214,.94)', textWrap: 'pretty' }}>{ch.body}</p>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.8, color: 'rgba(246,236,214,.94)', textWrap: 'pretty' }}>{ch.body2}</p>
            {ch.body3 && <p style={{ margin: 0, fontSize: 16, lineHeight: 1.8, color: 'rgba(246,236,214,.94)', textWrap: 'pretty' }}>{ch.body3}</p>}
            <div style={{ marginTop: 6, padding: '14px 18px', borderRadius: 12, background: 'rgba(233,169,60,.08)', borderLeft: '2px solid rgba(233,169,60,.5)' }}>
              <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 19, lineHeight: 1.5, color: 'rgba(255,226,170,.98)', textWrap: 'pretty' }}>{ch.pull}</span>
            </div>
          </div>
        </div>
      ))}

      <div style={{
        padding: 'clamp(40px,5vw,64px) 30px', borderRadius: 24, background: 'linear-gradient(150deg,rgba(224,102,42,.16),rgba(233,169,60,.06))',
        backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(233,169,60,.28)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,.13)', display: 'flex', flexDirection: 'column', gap: 12,
        alignItems: 'center', textAlign: 'center',
      }}>
        <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(34px,6vw,60px)', color: '#F6E9D0', lineHeight: 1 }}>Ganapati Bappa Moriya</span>
        <span style={{ fontFamily: "'Tiro Devanagari Sanskrit',serif", fontSize: 'clamp(19px,2.4vw,26px)', color: 'rgba(242,214,160,.85)' }}>पुढच्या वर्षी लवकर या</span>
        <span style={{ fontSize: 11, letterSpacing: '.34em', textTransform: 'uppercase', color: 'rgba(246,236,214,.66)', marginTop: 4 }}>Come early next year</span>
      </div>
    </div>
  );
}
