'use client';

import { useState } from 'react';
import { Reveal } from './primitives';

function TestimonialCard({ num, name, label, cta }: { num: string; name: string; label: string; cta?: boolean }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        border: '1px solid var(--rule)',
        background: cta && hover ? 'var(--accent)' : 'var(--paper)',
        color: cta && hover ? 'var(--accent-ink)' : 'var(--ink)',
        padding: 'clamp(24px, 2.5vw, 36px)',
        minHeight: 320, display: 'flex', flexDirection: 'column',
        transition: 'background 0.4s, color 0.4s',
        position: 'relative', cursor: cta ? 'none' : 'default',
      }}
    >
      <div className="label" style={{ marginBottom: 24, opacity: 0.7 }}>№ {num}</div>
      <div className="serif-i" style={{ fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.05, marginBottom: 'auto', color: cta ? 'inherit' : 'var(--ink-mute)' }}>
        {cta ? '"Want your name here?"' : '"Review pending — project in progress."'}
      </div>
      <div style={{ marginTop: 32, paddingTop: 20, borderTop: '1px solid currentColor', opacity: 0.9 }}>
        <div style={{ fontSize: 18, marginBottom: 4 }}>{name}</div>
        <div className="label">{label}</div>
        {cta && (
          <div style={{ marginTop: 16, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Let&apos;s work together →
          </div>
        )}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" style={{ borderTop: '1px solid var(--rule)', background: 'var(--bg-soft)' }}>
      <div className="container">
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--gap-md)', marginBottom: 'clamp(48px, 6vw, 80px)' }} className="ts-head">
            <div style={{ gridColumn: 'span 3' }} className="ts-label">
              <div className="label">§ Client Feedback</div>
            </div>
            <div style={{ gridColumn: 'span 9' }} className="ts-headline">
              <h2 style={{ fontSize: 'clamp(40px, 5.5vw, 88px)', marginBottom: 24 }}>
                The reviews are<br /><span className="serif-i" style={{ color: 'var(--accent)' }}>on their way.</span>
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--ink-soft)', maxWidth: 640 }}>
                Actively taking on first independent clients. If you work with me, yours will be the first.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--gap-md)' }} className="ts-grid">
          <TestimonialCard num="01" name="First Client" label="Reserved · pending project" />
          <TestimonialCard num="02" name="Second Client" label="Reserved · pending project" />
          <TestimonialCard num="03" name="You?" label="Available — work with me" cta />
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 980px) { .ts-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 768px) {
          .ts-head { grid-template-columns: 1fr !important; }
          .ts-label, .ts-headline { grid-column: 1 / -1 !important; }
        }
      `}</style>
    </section>
  );
}
