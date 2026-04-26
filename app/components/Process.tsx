'use client';

import { useState } from 'react';
import { Reveal } from './primitives';

const STEPS = [
  { n: '01', name: 'Discovery & Architecture', d: 'Deep dive into your business logic. No code until the blueprint, user flow, and stack are aligned with your goals.', dur: 'Week 1' },
  { n: '02', name: 'Design & Prototype', d: 'Translate strategy into interface. High-fidelity wireframes and interactive prototypes before heavy engineering.', dur: 'Week 2' },
  { n: '03', name: 'Development & Build', d: 'Heavy lifting. Clean, scalable code. Execution speed without sacrificing maintainability.', dur: 'Weeks 3–6' },
  { n: '04', name: 'Testing & Launch', d: 'Rigorous QA, speed optimization, deployment. Handover or ongoing support — your call.', dur: 'Week 7+' },
];

export function Process() {
  const [active, setActive] = useState(0);

  return (
    <section id="process" style={{ borderTop: '1px solid var(--rule)' }}>
      <div className="container">
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--gap-md)', marginBottom: 'clamp(48px, 6vw, 96px)' }} className="pr-head">
            <div style={{ gridColumn: 'span 3' }} className="pr-label">
              <div className="label">§ Methodology</div>
            </div>
            <div style={{ gridColumn: 'span 9' }} className="pr-headline">
              <h2 style={{ fontSize: 'clamp(40px, 5.5vw, 88px)' }}>
                From idea<br />to <span className="serif-i" style={{ color: 'var(--accent)' }}>launch.</span>
              </h2>
            </div>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'var(--gap-lg)' }} className="pr-grid">
          <Reveal stagger>
            {STEPS.map((s, i) => (
              <button
                key={s.n}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                style={{
                  width: '100%', textAlign: 'left', padding: '20px 0',
                  borderTop: '1px solid var(--rule)',
                  borderBottom: i === STEPS.length - 1 ? '1px solid var(--rule)' : 'none',
                  background: 'transparent', color: 'var(--ink)',
                  display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 16, alignItems: 'center',
                  fontFamily: 'inherit', position: 'relative',
                }}
              >
                <span className="serif" style={{ fontSize: 28, opacity: active === i ? 1 : 0.35, transition: 'opacity 0.3s' }}>{s.n}</span>
                <span className="serif" style={{ fontSize: 'clamp(22px, 2.2vw, 32px)', fontStyle: active === i ? 'italic' : 'normal', color: active === i ? 'var(--accent)' : 'var(--ink)', transition: 'color 0.3s, font-style 0.3s' }}>{s.name}</span>
                <span className="label" style={{ opacity: active === i ? 1 : 0.4 }}>{s.dur}</span>
                <span style={{ position: 'absolute', left: 0, bottom: -1, height: 1, background: 'var(--accent)', width: active === i ? '100%' : '0%', transition: 'width 0.6s cubic-bezier(.2,.8,.2,1)' }} />
              </button>
            ))}
          </Reveal>

          <Reveal from="right" as="div" style={{ position: 'sticky', top: 100, alignSelf: 'start', minHeight: 360 }} className="pr-detail">
            <div className="label" style={{ marginBottom: 20 }}>Phase {STEPS[active].n} — {STEPS[active].dur}</div>
            <h3 className="serif-i" style={{ fontSize: 'clamp(36px, 4.5vw, 64px)', marginBottom: 28, lineHeight: 1.05 }}>
              {STEPS[active].name}
            </h3>
            <p style={{ fontSize: 'clamp(17px, 1.4vw, 22px)', lineHeight: 1.5, color: 'var(--ink-soft)', maxWidth: 540 }}>
              {STEPS[active].d}
            </p>
            <div style={{ marginTop: 40, padding: 20, border: '1px solid var(--rule)', background: 'var(--paper)', display: 'flex', gap: 14, alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: 4 }}>
                {STEPS.map((_, i) => (
                  <div key={i} style={{ width: 24, height: 6, background: i <= active ? 'var(--accent)' : 'var(--rule-soft)', transition: 'background 0.4s' }} />
                ))}
              </div>
              <div className="label" style={{ marginLeft: 'auto' }}>{active + 1} of {STEPS.length}</div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .pr-grid { grid-template-columns: 1fr !important; }
          .pr-detail { position: static !important; }
          .pr-head { grid-template-columns: 1fr !important; }
          .pr-label, .pr-headline { grid-column: 1 / -1 !important; }
        }
      `}</style>
    </section>
  );
}
