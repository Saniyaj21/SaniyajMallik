'use client';

import { useState, ReactNode } from 'react';
import { Reveal } from './primitives';

function PhoneFrame({ children, accentBg = '#16140F' }: { children: ReactNode; accentBg?: string }) {
  return (
    <div style={{
      width: '100%', maxWidth: 'clamp(200px, 70vw, 280px)', aspectRatio: '9/19.5',
      background: '#0E0D0A', borderRadius: 36, padding: 8,
      boxShadow: '0 30px 60px -30px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.2)',
      position: 'relative',
    }}>
      <div style={{
        width: '100%', height: '100%', background: accentBg,
        borderRadius: 28, overflow: 'hidden', position: 'relative',
      }}>
        <div style={{
          position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)',
          width: 80, height: 22, background: '#0E0D0A', borderRadius: 100, zIndex: 5,
        }} />
        {children}
      </div>
    </div>
  );
}

function NextMCQScreen() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(180deg, #1a1814 0%, #0E0D0A 100%)', color: '#F2EFE7', padding: '40px 16px 16px', display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-body)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18, fontSize: 11, opacity: 0.7, fontFamily: 'var(--font-mono)' }}>
        <span>Q 7 / 20</span><span style={{ color: '#4ade80' }}>● 02:14</span>
      </div>
      <div style={{ height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 100, marginBottom: 24 }}>
        <div style={{ height: '100%', width: '35%', background: 'var(--accent)', borderRadius: 100 }} />
      </div>
      <div style={{ fontSize: 15, lineHeight: 1.4, marginBottom: 20, fontWeight: 500 }}>
        What&apos;s the time complexity of binary search?
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        {[
          { l: 'A', t: 'O(n)', sel: false },
          { l: 'B', t: 'O(log n)', sel: true },
          { l: 'C', t: 'O(n²)', sel: false },
          { l: 'D', t: 'O(1)', sel: false },
        ].map(o => (
          <div key={o.l} style={{
            border: o.sel ? '1px solid var(--accent)' : '1px solid rgba(255,255,255,0.15)',
            background: o.sel ? 'rgba(36,56,232,0.15)' : 'rgba(255,255,255,0.03)',
            padding: '11px 12px', borderRadius: 10,
            display: 'flex', gap: 10, alignItems: 'center', fontSize: 13,
          }}>
            <span style={{ width: 22, height: 22, borderRadius: 100, background: o.sel ? 'var(--accent)' : 'rgba(255,255,255,0.08)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 600 }}>{o.l}</span>
            <span>{o.t}</span>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
        <div style={{ flex: 1, padding: 11, border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10, textAlign: 'center', fontSize: 12 }}>Skip</div>
        <div style={{ flex: 1, padding: 11, background: 'var(--accent)', borderRadius: 10, textAlign: 'center', fontSize: 12, fontWeight: 600 }}>Submit →</div>
      </div>
    </div>
  );
}

function WatchTogetherScreen() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#0a0a0d', color: '#F2EFE7', display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-body)' }}>
      <div style={{ flex: 1.2, background: 'linear-gradient(135deg, #2438E8 0%, #6f1eff 50%, #ff3973 100%)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 36, left: 14, right: 14, display: 'flex', justifyContent: 'space-between', fontSize: 10, fontFamily: 'var(--font-mono)' }}>
          <span style={{ background: 'rgba(0,0,0,0.4)', padding: '4px 8px', borderRadius: 4, backdropFilter: 'blur(6px)' }}>● LIVE · 4 watching</span>
          <span style={{ background: 'rgba(0,0,0,0.4)', padding: '4px 8px', borderRadius: 4, backdropFilter: 'blur(6px)' }}>SYNC ✓</span>
        </div>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 56, height: 56, borderRadius: 100, background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 0, height: 0, borderLeft: '12px solid white', borderTop: '8px solid transparent', borderBottom: '8px solid transparent', marginLeft: 4 }} />
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 12, left: 14, right: 14 }}>
          <div style={{ height: 3, background: 'rgba(255,255,255,0.25)', borderRadius: 100, marginBottom: 8 }}>
            <div style={{ height: '100%', width: '42%', background: 'white', borderRadius: 100 }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, opacity: 0.85, fontFamily: 'var(--font-mono)' }}>
            <span>04:32</span><span>10:48</span>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, padding: '14px 14px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', opacity: 0.6, marginBottom: 4 }}>ROOM · /sunset-vault</div>
        {[
          { c: '#ff7a59', n: 'A', t: 'this scene is wild 🔥' },
          { c: '#4ade80', n: 'M', t: 'rewind 10s?' },
          { c: '#60a5fa', n: 'K', t: 'we synced perfectly!' },
        ].map((m, i) => (
          <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 12 }}>
            <div style={{ width: 22, height: 22, borderRadius: 100, background: m.c, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 600, color: '#0a0a0d' }}>{m.n}</div>
            <div style={{ background: 'rgba(255,255,255,0.06)', padding: '6px 10px', borderRadius: 12, flex: 1 }}>{m.t}</div>
          </div>
        ))}
        <div style={{ marginTop: 'auto', display: 'flex', gap: 8, alignItems: 'center', padding: '8px 12px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 100, fontSize: 11, opacity: 0.6 }}>
          <span>say something…</span>
        </div>
      </div>
    </div>
  );
}

const PROJECTS = [
  {
    n: '01', type: 'Mobile App · Education', name: 'NextMCQ',
    tagline: 'A full-featured MCQ learning platform.',
    desc: 'Students take timed tests, get instant scores, and track progress over time. Built and shipped end-to-end independently.',
    metrics: [{ v: 'iOS · Android', l: 'Platforms' }, { v: '20+', l: 'Subjects' }, { v: 'Live', l: 'Status' }],
    stack: ['React Native', 'Firebase', 'Node.js'],
    accentBg: '#0E0D0A', bg: 'var(--paper)', inkOnDark: false,
    Screen: NextMCQScreen, href: '/case-nextmcq',
  },
  {
    n: '02', type: 'Mobile App · Social', name: 'WatchTogether',
    tagline: 'Watch in sync. No accounts.',
    desc: 'Share a room link and the playback stays perfectly in sync — designed for zero-friction group viewing.',
    metrics: [{ v: 'No-auth', l: 'Onboarding' }, { v: '<200ms', l: 'Sync drift' }, { v: 'Live', l: 'Status' }],
    stack: ['React Native', 'WebSockets', 'Express'],
    accentBg: '#0a0a0d', bg: '#16140F', inkOnDark: true,
    Screen: WatchTogetherScreen, href: '/case-watchtogether',
  },
] as const;

function ProjectCard({ p, reverse }: { p: typeof PROJECTS[number]; reverse: boolean }) {
  const [hover, setHover] = useState(false);
  const Screen = p.Screen;
  return (
    <a
      href={p.href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        textDecoration: 'none', display: 'block',
        border: '1px solid var(--rule)', background: p.bg,
        color: p.inkOnDark ? '#F2EFE7' : 'var(--ink)',
        padding: 'clamp(28px, 4vw, 56px)',
        position: 'relative', overflow: 'hidden',
        transition: 'transform 0.5s cubic-bezier(.2,.8,.2,1)',
        transform: hover ? 'translateY(-4px)' : 'none',
      }}
    >
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 'clamp(20px, 4vw, 64px)', alignItems: 'center' }}
        className={`pc-grid ${reverse ? 'pc-reverse' : ''}`}
      >
        <div style={{ order: reverse ? 2 : 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '4px 16px', marginBottom: 32, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.7 }}>
            <span>№ {p.n} · {p.type}</span>
            <span style={{ flexShrink: 0 }}>↗ Case Study</span>
          </div>
          <h3 style={{ fontSize: 'clamp(48px, 7vw, 104px)', lineHeight: 0.95, marginBottom: 18 }}>{p.name}</h3>
          <p className="serif-i" style={{ fontSize: 'clamp(20px, 2vw, 28px)', marginBottom: 20, opacity: 0.85 }}>{p.tagline}</p>
          <p style={{ fontSize: 16, lineHeight: 1.55, opacity: 0.7, marginBottom: 32, maxWidth: 480 }}>{p.desc}</p>

          <Reveal stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, paddingTop: 24, paddingBottom: 24, borderTop: '1px solid currentColor', borderBottom: '1px solid currentColor', borderColor: p.inkOnDark ? 'rgba(242,239,231,0.18)' : 'var(--rule)', marginBottom: 24 }}>
            {p.metrics.map((m, i) => (
              <div key={i}>
                <div className="serif" style={{ fontSize: 'clamp(22px, 2.4vw, 32px)', marginBottom: 4 }}>{m.v}</div>
                <div className="label" style={{ opacity: 0.7 }}>{m.l}</div>
              </div>
            ))}
          </Reveal>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {p.stack.map(s => (
              <span key={s} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '6px 10px', border: '1px solid currentColor', borderColor: p.inkOnDark ? 'rgba(242,239,231,0.2)' : 'var(--rule)', borderRadius: 100, opacity: 0.85 }}>{s}</span>
            ))}
          </div>

          <div style={{ marginTop: 36, display: 'inline-flex', alignItems: 'center', gap: 12, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Read case study
            <span style={{ display: 'inline-block', transition: 'transform 0.4s', transform: hover ? 'translateX(8px)' : 'none' }}>→</span>
          </div>
        </div>

        <div style={{ order: reverse ? 1 : 2, display: 'flex', justifyContent: 'center' }}>
          <div style={{ transition: 'transform 0.6s cubic-bezier(.2,.8,.2,1)', transform: hover ? 'rotate(-2deg) scale(1.02)' : 'rotate(0) scale(1)' }}>
            <PhoneFrame accentBg={p.accentBg}>
              <Screen />
            </PhoneFrame>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .pc-grid { grid-template-columns: 1fr !important; }
          .pc-grid > div { order: unset !important; }
        }
      `}</style>
    </a>
  );
}

export function FeaturedWork() {
  return (
    <section id="work" style={{ borderTop: '1px solid var(--rule)' }}>
      <div className="container">
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--gap-md)', marginBottom: 'clamp(48px, 6vw, 96px)' }} className="fw-head">
            <div style={{ gridColumn: 'span 3' }} className="fw-label">
              <div className="label">§ Proof of Execution</div>
            </div>
            <div style={{ gridColumn: 'span 9' }} className="fw-headline">
              <h2 style={{ fontSize: 'clamp(40px, 5.5vw, 88px)', marginBottom: 24 }}>
                Built end-to-end,<br /><span className="serif-i" style={{ color: 'var(--accent)' }}>independently.</span>
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--ink-soft)', maxWidth: 640 }}>
                Beyond personal projects, I&apos;ve delivered full WooCommerce stores and LearnDash course platforms for real businesses — under client confidentiality. The same craft goes into every independent build.
              </p>
            </div>
          </div>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(32px, 4vw, 64px)' }}>
          {PROJECTS.map((p, i) => (
            <Reveal key={p.n}>
              <ProjectCard p={p} reverse={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .fw-head { grid-template-columns: 1fr !important; }
          .fw-label, .fw-headline { grid-column: 1 / -1 !important; }
        }
      `}</style>
    </section>
  );
}
