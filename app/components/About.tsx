import Image from 'next/image';
import { Reveal } from './primitives';

const TECH = ['WordPress', 'WooCommerce', 'LearnDash', 'React', 'Next.js', 'Node.js', 'React Native', 'Zapier', 'PHP', 'MongoDB', 'TypeScript', 'Tailwind', 'Express', 'Firebase', 'Figma'];


export function About() {
  return (
    <section id="about" style={{ borderTop: '1px solid var(--rule)' }}>
      <div className="container">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(48px, 6vw, 96px)' }}>
            <div className="label" style={{ marginBottom: 16 }}>§ The Builder</div>
            <h2 style={{ fontSize: 'clamp(40px, 5.5vw, 88px)' }}>
              Engineering<br />with an <span className="serif-i" style={{ color: 'var(--accent)' }}>ownership mindset.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', marginBottom: 'clamp(48px, 6vw, 80px)' }} className="ab-stats">
            {[
              { v: '2+', l: 'Years at WisdmLabs' },
              { v: '10+', l: 'Projects delivered' },
              { v: '3', l: 'Platforms — Web, WP, Mobile' },
            ].map((s, i) => (
              <div key={i} style={{ padding: '32px 24px', borderRight: i < 2 ? '1px solid var(--rule)' : 'none' }} className="ab-stat">
                <div className="bignum" style={{ marginBottom: 8 }}>{s.v}</div>
                <div className="label">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 'var(--gap-lg)' }} className="ab-body">
          <Reveal stagger>
            <div className="label" style={{ marginBottom: 18 }}>Who I Am</div>
            <p className="serif-i" style={{ fontSize: 'clamp(22px, 2.4vw, 32px)', lineHeight: 1.25, marginBottom: 28 }}>
              I work as a Software Engineer at WisdmLabs — a product company building enterprise WordPress &amp; LMS plugins used by thousands of businesses worldwide.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--ink-soft)', marginBottom: 18 }}>
              That environment sharpened my standard for what production-grade WordPress actually looks like — performance budgets, edge cases, real-world load.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--ink-soft)' }}>
              On the side, I take on select clients. When you work with me, you&apos;re not managing a freelancer — you&apos;re getting a dedicated technical team member who treats your business like his own.
            </p>
          </Reveal>

          <Reveal>
            <div style={{ border: '1px solid var(--rule)', background: 'var(--paper)', padding: 28, position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 28, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-mute)' }}>
                <span>Certificate №01</span>
                <span>Q4 · 2025</span>
              </div>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', marginBottom: 20, overflow: 'hidden' }}>
                <Image
                  src="/RisingStar-OND25-Saniyaj.jpg"
                  alt="Rising Star Award — Top Performer OND 2025, WisdmLabs"
                  fill
                  sizes="(max-width: 880px) 100vw, 40vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--ink-soft)' }}>
                Recognized for delivering exceptional results across multiple high-stakes plugin releases.
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Tech marquee */}
      <div style={{ marginTop: 'clamp(64px, 8vw, 120px)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', padding: '32px 0', overflow: 'hidden', background: 'var(--paper)' }}>
        <div className="label" style={{ marginBottom: 16, paddingLeft: 'var(--container-px)' }}>Tech Stack · always learning</div>
        <div style={{ overflow: 'hidden', position: 'relative' }}>
          <div className="marquee">
            {[...TECH, ...TECH].map((t, i) => (
              <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 'clamp(16px, 3vw, 32px)', padding: '0 clamp(16px, 3vw, 32px)' }}>
                <span className="serif-i" style={{ fontSize: 'clamp(28px, 4vw, 56px)' }}>{t}</span>
                <span style={{ width: 6, height: 6, borderRadius: 100, background: 'var(--accent)' }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .ab-body { grid-template-columns: 1fr !important; }
          .ab-stats { grid-template-columns: 1fr !important; }
          .ab-stat { border-right: none !important; border-bottom: 1px solid var(--rule); }
          .ab-stat:last-child { border-bottom: none; }
        }
      `}</style>
    </section>
  );
}
