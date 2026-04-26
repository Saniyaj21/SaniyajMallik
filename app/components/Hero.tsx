'use client';

import { useState, useEffect, CSSProperties } from 'react';
import { Reveal, Magnetic } from './primitives';

const roles = ['WordPress', 'LearnDash', 'WooCommerce', 'Next.js', 'React Native', 'Mobile'];

const cornerPositions: CSSProperties[] = [
  { top: 12, left: 12 },
  { top: 12, right: 12 },
  { bottom: 12, left: 12 },
  { bottom: 12, right: 12 },
];

function cornerBorders(idx: number): CSSProperties {
  return {
    borderTop: idx < 2 ? '1px solid var(--ink)' : 'none',
    borderBottom: idx >= 2 ? '1px solid var(--ink)' : 'none',
    borderLeft: idx % 2 === 0 ? '1px solid var(--ink)' : 'none',
    borderRight: idx % 2 === 1 ? '1px solid var(--ink)' : 'none',
  };
}

export function HeroEditorial() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI(x => (x + 1) % roles.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="top"
      className="hero hero-editorial"
      style={{ minHeight: '100vh', paddingTop: 140, paddingBottom: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 40, position: 'relative' }}
    >
      <div
        className="container"
        style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'var(--gap-lg)', alignItems: 'center' }}
      >
        {/* LEFT — headline */}
        <div>
          <Reveal stagger>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40 }}>
              <span className="label">001 — Independent Tech Partner</span>
              <span style={{ flex: 1, height: 1, background: 'var(--rule)', maxWidth: 80 }} />
            </div>
            <h1 style={{ fontSize: 'clamp(48px, 7.5vw, 132px)', lineHeight: 0.92, marginBottom: 28 }}>
              Build, launch &amp;<br />
              scale your<br />
              business <span className="serif-i" style={{ color: 'var(--accent)' }}>online.</span>
            </h1>
            <p style={{ fontSize: 'clamp(16px, 1.3vw, 19px)', maxWidth: 520, color: 'var(--ink-soft)', lineHeight: 1.55, marginBottom: 40 }}>
              High-performing WordPress, LMS &amp; web app builds for education and ecommerce — engineered with senior-level craft, without the agency price tag.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
              <Magnetic>
                <a
                  href="#contact"
                  className="btn"
                  onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                >
                  Book a strategy call <span className="btn-arrow">→</span>
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#work"
                  className="btn btn-ghost"
                  onClick={(e) => { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }); }}
                >
                  View my work
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </div>

        {/* RIGHT — monogram card */}
        <Reveal>
          <div
            className="hero-card"
            style={{ position: 'relative', aspectRatio: '4/5', border: '1px solid var(--rule)', background: 'var(--paper)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
          >
            <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--rule)', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-mute)' }}>
              <span>EST. 2024</span>
              <span>Folio №01</span>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <svg viewBox="0 0 200 200" style={{ width: '70%', height: 'auto' }}>
                <defs>
                  <pattern id="hatch" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="3" stroke="var(--ink)" strokeWidth="0.6" />
                  </pattern>
                </defs>
                <circle cx="100" cy="100" r="95" fill="none" stroke="var(--rule)" strokeWidth="0.6" />
                <circle cx="100" cy="100" r="70" fill="url(#hatch)" opacity="0.18" />
                <text x="100" y="118" textAnchor="middle" fontFamily="var(--font-display)" fontSize="100" fontStyle="italic" fill="var(--ink)">SM</text>
              </svg>
              {cornerPositions.map((pos, idx) => (
                <span
                  key={idx}
                  style={{ position: 'absolute', width: 8, height: 8, ...cornerBorders(idx), ...pos }}
                />
              ))}
            </div>
            <div style={{ padding: '18px', borderTop: '1px solid var(--rule)' }}>
              <div className="label" style={{ marginBottom: 8 }}>Now Building</div>
              <div style={{ height: 28, overflow: 'hidden', position: 'relative' }}>
                {roles.map((r, idx) => (
                  <div
                    key={r}
                    style={{
                      position: 'absolute', inset: 0,
                      fontFamily: 'var(--font-display)', fontSize: 26, fontStyle: 'italic',
                      transform: `translateY(${(idx - i) * 100}%)`,
                      transition: 'transform 0.6s cubic-bezier(.7,0,.3,1)',
                      color: 'var(--ink)',
                    }}
                  >
                    {r}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: '12px 18px', borderTop: '1px solid var(--rule)', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', color: 'var(--ink-mute)' }}>
              <span><span className="status-dot" style={{ marginRight: 6, verticalAlign: 'middle' }} /> Available · Apr 2026</span>
              <span>India · Remote</span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Bottom strip */}
      <Reveal>
        <div className="container" style={{ marginTop: 60 }}>
          <div className="rule" style={{ marginBottom: 18 }} />
          <div className="hero-creds" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>
            <div><span style={{ color: 'var(--ink-mute)' }}>01 / </span> Software Engineer @ WisdmLabs</div>
            <div><span style={{ color: 'var(--ink-mute)' }}>02 / </span> ★ Rising Star — Top Performer 2025</div>
            <div><span style={{ color: 'var(--ink-mute)' }}>03 / </span> 10+ projects delivered end-to-end</div>
          </div>
        </div>
      </Reveal>

      <style>{`
        @media (max-width: 880px) {
          .hero-editorial .container { grid-template-columns: 1fr !important; }
          .hero-card { max-width: 360px; margin: 0 auto; }
        }
        @media (max-width: 600px) {
          .hero-creds { grid-template-columns: 1fr !important; gap: 10px !important; }
        }
      `}</style>
    </section>
  );
}
