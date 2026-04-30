'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollParallax } from './primitives';

function PhoneFrame({ screenshot, alt, accentBg = '#16140F' }: { screenshot: string; alt: string; accentBg?: string }) {
  return (
    <div style={{
      width: 200, maxWidth: '50vw', aspectRatio: '9/19.5',
      background: '#0E0D0A', borderRadius: 36,
      boxShadow: '0 30px 60px -30px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.2)',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', inset: 8,
        background: accentBg, borderRadius: 28, overflow: 'hidden',
      }}>
        <Image src={screenshot} alt={alt} fill sizes="200px" style={{ objectFit: 'cover', objectPosition: 'top' }} />
      </div>
    </div>
  );
}

const PROJECTS = [
  {
    n: '01', type: 'Mobile App · Education', name: 'NextMCQ',
    tagline: 'A full-featured MCQ learning platform.',
    desc: 'Students take timed tests, get instant scores, and track progress over time. Built and shipped end-to-end independently.',
    features: ['MCQ test & student dashboard', 'Teacher test management', 'Batch management', 'Rewards & ranking', 'MCQ battle'],
    accentBg: '#0E0D0A', bg: 'rgba(255,255,255,0.04)',
    screenshot: '/nextmcq-screen.jpeg', playStore: 'https://play.google.com/store/apps/details?id=com.nextmcq.app',
  },
  {
    n: '02', type: 'Mobile App · Social', name: 'WatchTogether',
    tagline: 'Watch in sync. No accounts.',
    desc: 'Share a room link and the playback stays perfectly in sync — designed for zero-friction group viewing.',
    features: ['No account creation', 'Realtime chat', 'Video sync'],
    accentBg: '#0a0a0d', bg: 'rgba(255,255,255,0.04)',
    screenshot: '/watch-togather-screen.jpeg', playStore: 'https://play.google.com/store/apps/details?id=com.saniyaj.watchtogather',
  },
] as const;

function ProjectCard({ p, reverse }: { p: typeof PROJECTS[number]; reverse: boolean }) {
  const [hover, setHover] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          end: 'top 35%',
          scrub: 1.2,
        },
      });

      // Card border + bg wash in
      tl.fromTo(card, { opacity: 0 }, { opacity: 1, duration: 0.2 }, 0);

      // Label — wipe in from left
      tl.from('.pc-label', {
        x: -70, opacity: 0, duration: 0.4,
      }, 0.02);

      // Title — slam up from below with skew + scale (most dramatic element)
      tl.from('.pc-title', {
        y: 120, opacity: 0, scale: 0.84,
        transformOrigin: 'left bottom',
        duration: 0.7,
      }, 0.06);

      // Tagline — slide up after title
      tl.from('.pc-tagline', {
        y: 55, opacity: 0, duration: 0.5,
      }, 0.22);

      // Description — gentle drift up
      tl.from('.pc-desc', {
        y: 35, opacity: 0, duration: 0.4,
      }, 0.33);

      // Feature pills — scale pop staggered
      tl.from('.pc-pill', {
        scale: 0, opacity: 0,
        transformOrigin: 'center',
        stagger: 0.03, duration: 0.28,
        ease: 'back.out(1.8)',
      }, 0.42);

      // CTA button — slide up last
      tl.from('.pc-cta', {
        y: 28, opacity: 0, duration: 0.35,
      }, 0.54);

      // Phone — dramatic swing in: rotate + drop + scale
      tl.from('.pc-phone', {
        y: 160, rotation: reverse ? 10 : -10,
        scale: 0.72, opacity: 0,
        transformOrigin: 'bottom center',
        duration: 0.85,
      }, 0.08);

    }, card);

    return () => ctx.revert();
  }, [reverse]);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'block',
        border: 'none', background: 'transparent',
        color: '#F2EFE7',
        padding: 'clamp(20px, 2.5vw, 36px)',
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
          <div
            className="pc-label"
            style={{ marginBottom: 16, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.7 }}
          >
            № {p.n} · {p.type}
          </div>

          {/* Title in overflow:hidden wrapper for mask-reveal feel */}
          <div style={{ overflow: 'hidden', marginBottom: 10 }}>
            <h3 className="pc-title" style={{ fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: 0.95, margin: 0 }}>
              {p.name}
            </h3>
          </div>

          <p className="pc-tagline serif-i" style={{ fontSize: 'clamp(16px, 1.6vw, 22px)', marginBottom: 10, opacity: 0.85 }}>{p.tagline}</p>
          <p className="pc-desc" style={{ fontSize: 15, lineHeight: 1.5, opacity: 0.7, marginBottom: 16, maxWidth: 480 }}>{p.desc}</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
            {p.features.map((f: string) => (
              <span className="pc-pill" key={f} style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, padding: '6px 12px',
                border: '1px solid rgba(242,239,231,0.2)', borderRadius: 100,
                display: 'inline-flex', alignItems: 'center', gap: 6, opacity: 0.85,
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', flexShrink: 0 }} />
                {f}
              </span>
            ))}
          </div>

          <div className="pc-cta" style={{ marginTop: 4 }}>
            <a
              href={p.playStore}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase',
                color: '#F2EFE7', textDecoration: 'none',
                padding: '12px 20px', border: '1px solid rgba(242,239,231,0.3)', borderRadius: 6,
                background: hover ? 'rgba(255,255,255,0.08)' : 'transparent',
                transition: 'background 0.3s',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.9 }}>
                <path d="M3.18 23.76c.3.17.64.22.98.14l11.35-6.56-2.76-2.76-9.57 9.18zm-1.8-20.4C1.14 3.7 1 4.1 1 4.56v14.88c0 .46.14.86.38 1.2l.08.07 8.34-8.34v-.2L1.46 3.3l-.08.06zm17.44 8.96l-2.37-1.37-2.95 2.95 2.95 2.95 2.39-1.38c.68-.39.68-1.77-.02-2.15zM4.16.22L15.51 6.78l-2.76 2.76L3.18.36C3.5.28 3.86.1 4.16.22z" />
              </svg>
              View on Play Store
            </a>
          </div>
        </div>

        <div style={{ order: reverse ? 1 : 2, display: 'flex', justifyContent: 'center' }}>
          <ScrollParallax depth={-50}>
            <div className="pc-phone" style={{ transition: 'transform 0.6s cubic-bezier(.2,.8,.2,1)', transform: hover ? 'rotate(-2deg) scale(1.02)' : 'rotate(0) scale(1)' }}>
              <PhoneFrame screenshot={p.screenshot} alt={p.name} accentBg={p.accentBg} />
            </div>
          </ScrollParallax>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .pc-grid { grid-template-columns: 1fr !important; }
          .pc-grid > div { order: unset !important; }
        }
      `}</style>
    </div>
  );
}

export function FeaturedWork() {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          end: 'top 50%',
          scrub: 1,
        },
      });

      tl.from('.fw-label', { x: -50, opacity: 0, duration: 0.35 }, 0)
        .from('.fw-h2', { y: 70, opacity: 0, scale: 0.9, duration: 0.6 }, 0.08)
        .from('.fw-desc', { y: 30, opacity: 0, duration: 0.4 }, 0.28);
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" style={{ borderTop: '1px solid var(--rule)', background: '#0b0f1a', color: '#F2EFE7' }}>
      <div className="container">
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: 'clamp(48px, 6vw, 96px)' }}>
          <div className="fw-label label" style={{ marginBottom: 16, color: 'rgba(242,239,231,0.5)' }}>§ Proof of Execution</div>
          <h2 className="fw-h2" style={{ fontSize: 'clamp(40px, 5.5vw, 88px)', marginBottom: 24, color: '#F2EFE7' }}>
            Built end-to-end,<br /><span className="serif-i" style={{ color: 'var(--accent)' }}>independently.</span>
          </h2>
          <p className="fw-desc" style={{ fontSize: 17, lineHeight: 1.55, color: 'rgba(242,239,231,0.6)', maxWidth: 640, margin: '0 auto' }}>
            Beyond personal projects, I&apos;ve delivered full WooCommerce stores and LearnDash course platforms for real businesses — under client confidentiality. The same craft goes into every independent build.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(24px, 3vw, 40px)', maxWidth: 860, margin: '0 auto' }}>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.n} p={p} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
