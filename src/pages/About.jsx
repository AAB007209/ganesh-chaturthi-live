import React, { useState } from 'react';
import { ABOUT_STATS, ABOUT_SECTIONS, ABOUT_IDEA, ABOUT_DISCLAIMER } from '../data.js';

const TABS = [
  { key: 'idea', label: 'The Idea' },
  { key: 'disclaimer', label: 'Disclaimer' },
];

export default function About() {
  const [tab, setTab] = useState('idea');
  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: 'clamp(34px,5vw,62px) clamp(16px,3.4vw,32px) 190px', display: 'flex', flexDirection: 'column', gap: 'clamp(22px,3vw,32px)' }}>
      <div style={{
        padding: 'clamp(30px,4.4vw,52px)', borderRadius: 26, background: 'rgba(255,255,255,.06)',
        backdropFilter: 'blur(26px) saturate(1.25)', WebkitBackdropFilter: 'blur(26px) saturate(1.25)',
        border: '1px solid rgba(242,227,198,.14)', boxShadow: '0 22px 70px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.14)',
        display: 'flex', flexDirection: 'column', gap: 16,
      }}>
        <span style={{ fontSize: 11, letterSpacing: '.34em', textTransform: 'uppercase', color: 'rgba(246,236,214,.6)' }}>About</span>
        <h1 style={{ margin: 0, fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: 'clamp(38px,5.6vw,74px)', lineHeight: 1.04, color: '#F6E9D0', textWrap: 'pretty' }}>What this is</h1>
        <p style={{ margin: 0, fontSize: 17, lineHeight: 1.75, color: 'rgba(246,236,214,.94)', maxWidth: '60ch', textWrap: 'pretty' }}>One celebration, one street, read against the clock — morning, afternoon–evening, night. The scene, the playlist and the label in the corner all follow the hour where you are — so what you land on is whatever hour it happens to be.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 'clamp(13px,1.7vw,18px)' }}>
        {ABOUT_STATS.map((s, idx) => (
          <div key={idx} style={{ padding: '22px 24px', borderRadius: 20, background: 'rgba(255,255,255,.045)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(242,227,198,.11)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.11)', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ color: '#E9A93C', display: 'flex' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}><path d={s.icon} /></svg></span>
            <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 25, color: '#F6E9D0', lineHeight: 1.15 }}>{s.value}</span>
            <span style={{ fontSize: 12.5, color: 'rgba(246,236,214,.72)' }}>{s.label}</span>
          </div>
        ))}
      </div>

      <div style={{
        padding: 'clamp(26px,3.4vw,38px)', borderRadius: 24, background: 'rgba(255,255,255,.045)',
        backdropFilter: 'blur(24px) saturate(1.2)', WebkitBackdropFilter: 'blur(24px) saturate(1.2)',
        border: '1px solid rgba(242,227,198,.11)', boxShadow: '0 18px 60px rgba(0,0,0,.32),inset 0 1px 0 rgba(255,255,255,.11)',
        display: 'flex', flexDirection: 'column', gap: 22,
      }}>
        <div role="tablist" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {TABS.map(t => (
            <button
              key={t.key}
              role="tab"
              aria-selected={tab === t.key}
              onClick={() => setTab(t.key)}
              style={{
                cursor: 'pointer', border: '1px solid', borderColor: tab === t.key ? 'rgba(233,169,60,.55)' : 'rgba(242,227,198,.14)',
                background: tab === t.key ? 'linear-gradient(150deg,rgba(233,169,60,.22),rgba(224,102,42,.1))' : 'rgba(255,255,255,.03)',
                color: tab === t.key ? '#F2D6A0' : 'rgba(246,236,214,.68)', borderRadius: 12, padding: '9px 18px',
                fontSize: 13, letterSpacing: '.04em', transition: 'background .25s,border-color .25s,color .25s',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === 'idea' && ABOUT_SECTIONS.map((sec, idx) => (
          <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ flex: 'none', width: 42, height: 42, borderRadius: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(150deg,rgba(233,169,60,.2),rgba(224,102,42,.1))', border: '1px solid rgba(233,169,60,.3)', color: '#F2D6A0' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}><path d={sec.icon} /></svg>
              </span>
              <h2 style={{ margin: 0, fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: 'clamp(24px,2.9vw,32px)', lineHeight: 1.2, color: '#F6E9D0' }}>{sec.title}</h2>
            </div>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.8, color: 'rgba(246,236,214,.94)', textWrap: 'pretty' }}>{sec.body}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {sec.points.map((p, pidx) => (
                <div key={pidx} style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                  <span style={{ flex: 'none', width: 5, height: 5, marginTop: 8, borderRadius: '50%', background: 'rgba(233,169,60,.8)', boxShadow: '0 0 8px rgba(233,169,60,.6)' }} />
                  <span style={{ fontSize: 15.5, lineHeight: 1.7, color: 'rgba(246,236,214,.9)', textWrap: 'pretty' }}>{p.text}</span>
                </div>
              ))}
            </div>
            {ABOUT_IDEA.body.map((p, pidx) => (
              <p key={pidx} style={{ margin: 0, fontSize: 16, lineHeight: 1.8, color: 'rgba(246,236,214,.94)', textWrap: 'pretty' }}>{p}</p>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 6 }}>
              <span style={{ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(246,236,214,.55)' }}>A few sites that inspired this one</span>
              {ABOUT_IDEA.inspirations.map((insp, iidx) => (
                <a key={iidx} href={insp.url} target="_blank" rel="noreferrer" className="gc-link-row" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18, padding: '13px 18px',
                  borderRadius: 14, background: 'rgba(255,255,255,.035)', border: '1px solid rgba(242,227,198,.09)',
                  textDecoration: 'none', transition: 'background .25s,border-color .25s,transform .25s',
                }}>
                  <span style={{ color: 'rgba(246,236,214,.95)', fontSize: 15 }}>{insp.label}</span>
                  <span style={{ color: 'rgba(246,236,214,.5)', fontSize: 12.5 }}>{insp.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                </a>
              ))}
            </div>
            <span style={{ color: 'rgba(246,236,214,.6)', fontSize: 12.5, marginTop: 4 }}>Made with Ganesh Bhakti · 2026</span>
          </div>
        ))}

        {tab === 'disclaimer' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ flex: 'none', width: 42, height: 42, borderRadius: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(150deg,rgba(233,169,60,.2),rgba(224,102,42,.1))', border: '1px solid rgba(233,169,60,.3)', color: '#F2D6A0' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /></svg>
              </span>
              <h2 style={{ margin: 0, fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: 'clamp(24px,2.9vw,32px)', lineHeight: 1.2, color: '#F6E9D0' }}>Disclaimer</h2>
            </div>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.8, color: 'rgba(246,236,214,.94)', textWrap: 'pretty' }}>{ABOUT_DISCLAIMER}</p>
          </div>
        )}
      </div>
    </div>
  );
}
