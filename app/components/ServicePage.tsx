'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Reveal, Magnetic } from './primitives';
import type { ServiceData } from '../services/data';
import { WordPressHero } from './WordPressHero';
import { WordPressPluginHero } from './WordPressPluginHero';
import { WordPressMigrationsHero } from './WordPressMigrationsHero';
import { WordPressMaintenanceHero } from './WordPressMaintenanceHero';

const STEPS = [
  { n: '01', h: 'Discover', d: 'Strategy call, scope alignment, success criteria.' },
  { n: '02', h: 'Build', d: 'Architecture, design, development, weekly check-ins.' },
  { n: '03', h: 'Launch', d: 'QA, deployment, training, post-launch support.' },
];

function FAQList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number>(0);
  return (
    <div>
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ borderTop: '1px solid var(--rule)' }}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              style={{
                width: '100%', padding: '24px 0',
                display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 20, alignItems: 'center',
                background: 'transparent', border: 'none', textAlign: 'left',
                color: 'var(--ink)', fontFamily: 'inherit',
              }}
            >
              <span className="label" style={{ minWidth: 28 }}>{String(i + 1).padStart(2, '0')}</span>
              <span
                className="serif"
                style={{
                  fontSize: 'clamp(20px, 2.2vw, 28px)',
                  fontStyle: isOpen ? 'italic' : 'normal',
                  color: isOpen ? 'var(--accent)' : 'var(--ink)',
                  transition: 'all 0.4s',
                }}
              >
                {f.q}
              </span>
              <span style={{
                width: 28, height: 28, borderRadius: 100,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 14,
                transition: 'transform 0.4s, background 0.3s',
                transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                background: isOpen ? 'var(--accent)' : 'transparent',
                color: isOpen ? 'var(--accent-ink)' : 'var(--ink)',
                border: `1px solid ${isOpen ? 'var(--accent)' : 'var(--rule)'}`,
              }}>+</span>
            </button>
            <div style={{ maxHeight: isOpen ? 400 : 0, overflow: 'hidden', transition: 'max-height 0.5s cubic-bezier(.4,0,.2,1)' }}>
              <div style={{ padding: '0 0 28px clamp(20px, 4vw, 48px)', maxWidth: 720 }}>
                <p style={{ fontSize: 16, lineHeight: 1.55, color: 'var(--ink-soft)' }}>{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
      <div style={{ borderTop: '1px solid var(--rule)' }} />
    </div>
  );
}

export function ServicePage({ slug, pillar, pillarN, name, tagline, image, deliverables, personas, faqs, caseStudy }: ServiceData) {
  return (
    <>
      {/* HERO */}
      {slug === 'wordpress-development' ? (
        <WordPressHero />
      ) : slug === 'wordpress-plugins' ? (
        <WordPressPluginHero />
      ) : slug === 'wordpress-migrations' ? (
        <WordPressMigrationsHero />
      ) : slug === 'wordpress-maintenance' ? (
        <WordPressMaintenanceHero />
      ) : (
        <section style={{ minHeight: '45vh', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden', paddingTop: 140, paddingBottom: 60 }}>
          {image && (
            <div className="sp-hero-media" style={{ position: 'absolute', inset: 0 }}>
              <Image src={image} alt={name.replace('\n', ' ')} fill sizes="(max-width: 768px) 100vw, 60vw" quality={85} style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 0 }} priority />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--bg) 38%, transparent 72%)', zIndex: 1 }} />
            </div>
          )}
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <Reveal stagger>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32 }}>
                <span className="label">№ {pillarN}</span>
                <span style={{ width: 60, height: 1, background: 'var(--rule)' }} />
                <span className="label">{pillar}</span>
              </div>
              <h1 style={{ fontSize: 'clamp(56px, 9vw, 144px)', lineHeight: 0.92, marginBottom: 32, maxWidth: '14ch' }}>
                {name.split('\n').map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}
              </h1>
              <p className="serif-i" style={{ fontSize: 'clamp(22px, 2.4vw, 36px)', lineHeight: 1.2, color: 'var(--ink-soft)', marginBottom: 40, maxWidth: 720 }}>{tagline}</p>
              <Magnetic>
                <a href="/#contact" className="btn">
                  Book a strategy call <span className="btn-arrow">→</span>
                </a>
              </Magnetic>
            </Reveal>
          </div>
        </section>
      )}

      {/* DELIVERABLES */}
      <section style={{ borderTop: '1px solid var(--rule)', background: 'var(--bg-soft)' }}>
        <div className="container">
          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--gap-md)', marginBottom: 'clamp(48px, 6vw, 80px)' }} className="sp-block">
              <div style={{ gridColumn: 'span 3' }} className="sp-label"><div className="label">§ What&apos;s included</div></div>
              <div style={{ gridColumn: 'span 9' }} className="sp-content">
                <h2 style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}>Everything you<br />get, <span className="serif-i" style={{ color: 'var(--accent)' }}>delivered.</span></h2>
              </div>
            </div>
          </Reveal>
          <Reveal stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, borderTop: '1px solid var(--rule)' }} className="sp-deliv">
            {deliverables.map((d, i) => (
              <div key={i} style={{ padding: '28px 24px', borderRight: i % 2 === 0 ? '1px solid var(--rule)' : 'none', borderBottom: '1px solid var(--rule)', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <span className="serif" style={{ fontSize: 28, opacity: 0.4, minWidth: 40 }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontSize: 18, lineHeight: 1.4 }}>{d}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section style={{ borderTop: '1px solid var(--rule)' }}>
        <div className="container">
          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--gap-md)', marginBottom: 'clamp(48px, 6vw, 80px)' }} className="sp-block">
              <div style={{ gridColumn: 'span 3' }} className="sp-label"><div className="label">§ Who it&apos;s for</div></div>
              <div style={{ gridColumn: 'span 9' }} className="sp-content">
                <h2 style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}>Built for<br /><span className="serif-i" style={{ color: 'var(--accent)' }}>businesses like yours.</span></h2>
              </div>
            </div>
          </Reveal>
          <Reveal stagger style={{ display: 'grid', gridTemplateColumns: `repeat(${personas.length}, 1fr)`, gap: 'var(--gap-md)' }} className="sp-personas">
            {personas.map((p, i) => (
              <div key={i} style={{ background: 'var(--paper)', padding: 28, minHeight: 240, minWidth: 0 }}>
                <div className="label" style={{ marginBottom: 24 }}>{String(i + 1).padStart(2, '0')}</div>
                <h3 className="serif-i" style={{ fontSize: 28, marginBottom: 12 }}>{p.h}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.5, color: 'var(--ink-soft)' }}>{p.d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ borderTop: '1px solid var(--rule)', background: 'var(--bg-soft)' }}>
        <div className="container">
          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--gap-md)', marginBottom: 'clamp(48px, 6vw, 80px)' }} className="sp-block">
              <div style={{ gridColumn: 'span 3' }} className="sp-label"><div className="label">§ How it works</div></div>
              <div style={{ gridColumn: 'span 9' }} className="sp-content">
                <h2 style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}>From sketch<br />to <span className="serif-i" style={{ color: 'var(--accent)' }}>shipped.</span></h2>
              </div>
            </div>
          </Reveal>
          <Reveal stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid var(--rule)' }} className="sp-steps">
            {STEPS.map((s, i) => (
              <div key={s.n} style={{ padding: '32px 24px', borderRight: i < 2 ? '1px solid var(--rule)' : 'none', borderBottom: '1px solid var(--rule)' }}>
                <div className="bignum" style={{ marginBottom: 20 }}>{s.n}</div>
                <h3 className="serif-i" style={{ fontSize: 32, marginBottom: 12 }}>{s.h}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.5, color: 'var(--ink-soft)' }}>{s.d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CASE STUDY */}
      {caseStudy && (
        <section style={{ borderTop: '1px solid var(--rule)' }}>
          <div className="container">
            <Reveal>
              <div className="label" style={{ marginBottom: 24 }}>§ Related case study</div>
              <Link href={caseStudy.href} style={{ display: 'block', color: 'inherit', textDecoration: 'none', border: '1px solid var(--rule)', padding: 'clamp(28px, 4vw, 56px)', background: 'var(--paper)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, alignItems: 'flex-end' }}>
                  <div>
                    <div className="label" style={{ marginBottom: 16 }}>{caseStudy.type}</div>
                    <h3 style={{ fontSize: 'clamp(40px, 6vw, 88px)', lineHeight: 0.95, marginBottom: 12 }}>{caseStudy.name}</h3>
                    <p className="serif-i" style={{ fontSize: 22, color: 'var(--ink-soft)' }}>{caseStudy.tagline}</p>
                  </div>
                  <span style={{ fontSize: 56, fontFamily: 'var(--font-display)' }}>→</span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section style={{ borderTop: '1px solid var(--rule)', background: 'var(--bg-soft)' }}>
        <div className="container">
          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--gap-md)', marginBottom: 'clamp(48px, 6vw, 64px)' }} className="sp-block">
              <div style={{ gridColumn: 'span 3' }} className="sp-label"><div className="label">§ Common questions</div></div>
              <div style={{ gridColumn: 'span 9' }} className="sp-content">
                <h2 style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}>Things people<br /><span className="serif-i" style={{ color: 'var(--accent)' }}>usually ask.</span></h2>
              </div>
            </div>
          </Reveal>
          <FAQList items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ borderTop: '1px solid var(--rule)', background: 'var(--ink)', color: 'var(--bg)' }}>
        <Reveal style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 32 }} className="container">
          <h2 style={{ fontSize: 'clamp(48px, 8vw, 128px)', lineHeight: 0.9 }}>
            Ready to<br /><span className="serif-i" style={{ color: 'var(--accent)', filter: 'brightness(1.4)' }}>start?</span>
          </h2>
          <div style={{ display: 'flex', gap: 14 }}>
            <Magnetic>
              <a href="/#contact" className="btn" style={{ background: 'var(--bg)', color: 'var(--ink)', borderColor: 'var(--bg)' }}>
                Get in touch <span className="btn-arrow">→</span>
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .sp-hero-media { display: none; }
        }
        @media (max-width: 880px) {
          .sp-block { grid-template-columns: 1fr !important; }
          .sp-label, .sp-content { grid-column: 1 / -1 !important; }
          .sp-personas, .sp-steps { grid-template-columns: 1fr !important; }
          .sp-steps > div { border-right: none !important; }
          .sp-deliv { grid-template-columns: 1fr !important; }
          .sp-deliv > div { border-right: none !important; }
        }
      `}</style>
    </>
  );
}
