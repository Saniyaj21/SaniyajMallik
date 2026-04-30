'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const SERVICE_GROUPS = [
  {
    title: 'WordPress',
    n: '01',
    items: [
      { l: 'WordPress Development', s: 'Custom builds from scratch', href: '/services/wordpress-development' },
      { l: 'WordPress Migration', s: 'WordPress → Kajabi & more', href: '/services/wordpress-migrations' },
      { l: 'Maintenance & Care Plans', s: 'Updates, backups, monitoring', href: '/services/wordpress-maintenance' },
      { l: 'Custom Plugin Development', s: 'When off-the-shelf falls short', href: '/services/wordpress-plugins' },
    ],
  },
  {
    title: 'Custom Websites',
    n: '02',
    items: [
      { l: 'Landing Pages', s: 'Conversion-focused single pages', href: '/services/landing-pages' },
      { l: 'Restaurant & Local Business', s: 'Multi-page presence', href: '/services/business-websites' },
      { l: 'Web Applications & Dashboards', s: 'MERN & Next.js builds', href: '/services/web-applications' },
    ],
  },
  {
    title: 'Mobile Apps',
    n: '03',
    items: [
      { l: 'Business Mobile Apps', s: 'Native apps for your business', href: '/services/mobile-apps' },
    ],
  },
];

function ServicesMega({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      onMouseLeave={onClose}
      style={{
        position: 'fixed',
        top: 76, left: 0, right: 0,
        background: 'var(--paper)',
        color: 'var(--ink)',
        borderTop: '1px solid var(--rule)',
        borderBottom: '1px solid var(--rule)',
        zIndex: 99,
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'auto' : 'none',
        transform: open ? 'translateY(0)' : 'translateY(-12px)',
        transition: 'opacity 0.35s cubic-bezier(.2,.8,.2,1), transform 0.45s cubic-bezier(.2,.8,.2,1)',
        boxShadow: open ? '0 30px 60px -30px rgba(0,0,0,0.18)' : 'none',
      }}
    >
      <div className="container" style={{ padding: '40px var(--container-px) 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--gap-md)' }} className="mega-grid">
          {SERVICE_GROUPS.map((g) => (
            <div key={g.title} style={{ borderTop: '1px solid var(--rule)', paddingTop: 18 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-mute)' }}>
                <span>{g.n}</span>
                <span>{g.title}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {g.items.map((it, idx) => (
                  <Link
                    key={idx}
                    href={it.href}
                    onClick={onClose}
                    style={{
                      display: 'block', textDecoration: 'none', color: 'inherit',
                      padding: '14px 0',
                      borderBottom: idx < g.items.length - 1 ? '1px solid var(--rule-soft)' : 'none',
                      transition: 'transform 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(8px)';
                      const arrow = e.currentTarget.querySelector<HTMLElement>('.mega-arrow');
                      if (arrow) arrow.style.opacity = '1';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      const arrow = e.currentTarget.querySelector<HTMLElement>('.mega-arrow');
                      if (arrow) arrow.style.opacity = '0';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1, minWidth: 0 }}>
                        <div className="serif" style={{ fontSize: 19, fontStyle: 'italic', lineHeight: 1.15 }}>{it.l}</div>
                        <div className="label" style={{ textTransform: 'none', letterSpacing: '0.01em', fontSize: 12 }}>{it.s}</div>
                      </div>
                      <span className="mega-arrow" style={{ opacity: 0, transition: 'opacity 0.3s', fontFamily: 'var(--font-display)', fontSize: 22, lineHeight: 1.1, flexShrink: 0 }}>→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="rule-soft" style={{ margin: '32px 0 18px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-mute)' }}>
          <span>Don&apos;t see what you need?{' '}
            <Link href="/#contact" onClick={onClose} style={{ color: 'var(--ink)', textDecoration: 'underline', textUnderlineOffset: 4 }}>
              Tell me about it →
            </Link>
          </span>
          <span>8 services across 3 pillars</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .mega-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 880) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => { setMenuOpen(false); setServicesOpen(false); };

  const navLinks = [
    { href: '/#work', label: 'Work' },
    { href: '/#process', label: 'Process' },
    { href: '/#about', label: 'About' },
  ];

  return (
    <>
      <header
        className="site-header"
        style={{
          background: scrolled || menuOpen
            ? 'rgba(255, 255, 255, 0.75)'
            : 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          borderBottom: scrolled || menuOpen
            ? '1px solid rgba(14, 34, 48, 0.08)'
            : '1px solid rgba(14, 34, 48, 0.04)',
          boxShadow: scrolled || menuOpen ? '0 4px 24px rgba(14, 34, 48, 0.06)' : 'none',
          color: '#0e2230',
          transition: 'background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
        }}
      >
        <Link href="/" className="logo" aria-label="Saniyaj Mallik — Home">
          <svg viewBox="0 0 250 92" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ height: 35, width: 'auto', display: 'block' }}>
            <defs>
              <linearGradient id="nav-logo-j-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#21759b"/>
                <stop offset="100%" stopColor="#7c6cf2"/>
              </linearGradient>
            </defs>
            <style>{`
              /* One 3.2s cycle: ~1.8s draw, ~1.4s pause, instant reset at 100% */
              /* Each keyframe bakes in its delay as a % of 3.2s so the stagger loops correctly */
              @keyframes nl-s  { 0%,1.3%  {stroke-dashoffset:200} 11.3%,99.9% {stroke-dashoffset:0}   100% {stroke-dashoffset:200} }
              @keyframes nl-ar { 0%,9.4%  {stroke-dashoffset:100} 17.5%,99.9% {stroke-dashoffset:0}   100% {stroke-dashoffset:100} }
              @keyframes nl-as { 0%,16.3% {stroke-dashoffset:40}  20%,99.9%   {stroke-dashoffset:0}   100% {stroke-dashoffset:40}  }
              @keyframes nl-n1 { 0%,17.5% {stroke-dashoffset:40}  21.3%,99.9% {stroke-dashoffset:0}   100% {stroke-dashoffset:40}  }
              @keyframes nl-n2 { 0%,18.8% {stroke-dashoffset:120} 26.9%,99.9% {stroke-dashoffset:0}   100% {stroke-dashoffset:120} }
              @keyframes nl-id { 0%,25%   {opacity:0;transform:scale(0)} 29.7%,99.9% {opacity:1;transform:scale(1)} 100% {opacity:0;transform:scale(0)} }
              @keyframes nl-is { 0%,25.6% {stroke-dashoffset:40}  31.3%,99.9% {stroke-dashoffset:0}   100% {stroke-dashoffset:40}  }
              @keyframes nl-y1 { 0%,29.4% {stroke-dashoffset:40}  33.8%,99.9% {stroke-dashoffset:0}   100% {stroke-dashoffset:40}  }
              @keyframes nl-y2 { 0%,31.3% {stroke-dashoffset:100} 38.8%,99.9% {stroke-dashoffset:0}   100% {stroke-dashoffset:100} }
              @keyframes nl-br { 0%,36.9% {stroke-dashoffset:100} 45%,99.9%   {stroke-dashoffset:0}   100% {stroke-dashoffset:100} }
              @keyframes nl-bs { 0%,43.8% {stroke-dashoffset:40}  47.5%,99.9% {stroke-dashoffset:0}   100% {stroke-dashoffset:40}  }
              @keyframes nl-jd { 0%,45%   {opacity:0;transform:scale(0)} 49.7%,99.9% {opacity:1;transform:scale(1)} 100% {opacity:0;transform:scale(0)} }
              @keyframes nl-jp { 0%,46%   {stroke-dashoffset:100} 55.3%,99.9% {stroke-dashoffset:0}   100% {stroke-dashoffset:100} }
              .nl-s  {stroke-dasharray:200; animation:nl-s  3.2s linear infinite}
              .nl-ar {stroke-dasharray:100; animation:nl-ar 3.2s linear infinite}
              .nl-as {stroke-dasharray:40;  animation:nl-as 3.2s linear infinite}
              .nl-n1 {stroke-dasharray:40;  animation:nl-n1 3.2s linear infinite}
              .nl-n2 {stroke-dasharray:120; animation:nl-n2 3.2s linear infinite}
              .nl-id {transform-box:fill-box; transform-origin:50% 50%; animation:nl-id 3.2s linear infinite}
              .nl-is {stroke-dasharray:40;  animation:nl-is 3.2s linear infinite}
              .nl-y1 {stroke-dasharray:40;  animation:nl-y1 3.2s linear infinite}
              .nl-y2 {stroke-dasharray:100; animation:nl-y2 3.2s linear infinite}
              .nl-br {stroke-dasharray:100; animation:nl-br 3.2s linear infinite}
              .nl-bs {stroke-dasharray:40;  animation:nl-bs 3.2s linear infinite}
              .nl-jd {transform-box:fill-box; transform-origin:50% 50%; animation:nl-jd 3.2s linear infinite}
              .nl-jp {stroke-dasharray:100; animation:nl-jp 3.2s linear infinite}
            `}</style>
            <g transform="translate(-100 -8)">
              <path className="nl-s"  d="M 138 46 C 134 41, 126 40, 120 43 C 112 47, 113 56, 121 58 L 132 60 C 140 62, 140 70, 133 72 C 127 74, 119 73, 116 69" fill="none" stroke="#0e2230" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
              <circle className="nl-ar" cx="160" cy="58" r="14" fill="none" stroke="#0e2230" strokeWidth="7"/>
              <path className="nl-as" d="M 174 44 V 72" fill="none" stroke="#0e2230" strokeWidth="7" strokeLinecap="round"/>
              <path className="nl-n1" d="M 192 44 V 72" fill="none" stroke="#0e2230" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
              <path className="nl-n2" d="M 192 52 C 192 46, 198 44, 204 44 C 212 44, 218 50, 218 58 V 72" fill="none" stroke="#0e2230" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
              <circle className="nl-id" cx="234" cy="35" r="3.6" fill="#0e2230"/>
              <path className="nl-is" d="M 234 46 V 72" fill="none" stroke="#0e2230" strokeWidth="7" strokeLinecap="round"/>
              <path className="nl-y1" d="M 250 44 L 264 66" fill="none" stroke="#0e2230" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
              <path className="nl-y2" d="M 280 44 L 260 84 C 257 89, 252 90, 248 88" fill="none" stroke="#0e2230" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
              <circle className="nl-br" cx="298" cy="58" r="14" fill="none" stroke="#0e2230" strokeWidth="7"/>
              <path className="nl-bs" d="M 312 44 V 72" fill="none" stroke="#0e2230" strokeWidth="7" strokeLinecap="round"/>
              <circle className="nl-jd" cx="334" cy="35" r="3.8" fill="url(#nav-logo-j-grad)"/>
              <path className="nl-jp" d="M 334 46 V 80 C 334 88, 327 92, 320 90" fill="none" stroke="url(#nav-logo-j-grad)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
          </svg>
        </Link>

        {/* Desktop nav */}
        <nav className="nav-pill">
          <button
            onMouseEnter={() => setMegaOpen(true)}
            onClick={() => setMegaOpen(v => !v)}
            style={{
              background: 'transparent', border: 'none', color: 'inherit', font: 'inherit',
              fontSize: 13, padding: '8px 16px', borderRadius: 100,
              display: 'inline-flex', alignItems: 'center', gap: 6,
            }}
          >
            Services{' '}
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ width: 14, height: 14, display: 'inline-block', flexShrink: 0, transform: megaOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.35s cubic-bezier(.45,.05,.55,.95)', willChange: 'transform' }}>
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onMouseEnter={() => setMegaOpen(false)}>{l.label}</a>
          ))}
        </nav>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <a className="header-cta hcta-desktop" href="/#contact">
            <span className="status-dot" /> Let&apos;s Talk
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="hamburger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(o => !o)}
            style={{
              width: 38, height: 38,
              borderRadius: 100,
              border: '1px solid rgba(14,34,48,0.15)',
              background: 'transparent',
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: 5,
              padding: 0,
              color: 'inherit',
              transition: 'border-color 0.3s',
            }}
          >
            <span style={{ display: 'block', width: 16, height: 1.5, background: 'currentColor', borderRadius: 2, transition: 'transform 0.3s, opacity 0.3s', transform: menuOpen ? 'translateY(3.25px) rotate(45deg)' : 'none' }} />
            <span style={{ display: 'block', width: 16, height: 1.5, background: 'currentColor', borderRadius: 2, transition: 'transform 0.3s, opacity 0.3s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 16, height: 1.5, background: 'currentColor', borderRadius: 2, transition: 'transform 0.3s, opacity 0.3s', transform: menuOpen ? 'translateY(-3.25px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </header>

      <ServicesMega open={megaOpen} onClose={() => setMegaOpen(false)} />

      {/* Mobile drawer — outer div is the scroll container only */}
      <div
        style={{
          position: 'fixed', inset: 0, zIndex: 99,
          background: 'rgba(251, 253, 255, 0.94)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          color: '#0e2230',
          display: 'flex', flexDirection: 'column',
          overflowY: 'auto',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      >
        {/* Inner wrapper: margin:auto centres it when content fits;
            collapses to 0 when overflowing so the top stays reachable */}
        <div style={{
          margin: 'auto',
          width: '100%',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: 'clamp(20px, 4vw, 36px)',
          paddingTop: 'clamp(80px, 12vw, 120px)',
          paddingLeft: 'clamp(24px, 6vw, 48px)',
          paddingRight: 'clamp(24px, 6vw, 48px)',
          paddingBottom: 0,
        }}>
        {/* Services toggle */}
        <div style={{ width: '100%', maxWidth: 360, textAlign: 'center' }}>
          <button
            onClick={() => setServicesOpen(v => !v)}
            style={{
              background: 'transparent', border: 'none', color: 'inherit',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 8vw, 64px)',
              fontStyle: 'italic',
              letterSpacing: '-0.02em',
              cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 12,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s',
            }}
          >
            Services
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ width: '0.45em', height: '0.45em', display: 'inline-block', flexShrink: 0, transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.35s cubic-bezier(.45,.05,.55,.95)', willChange: 'transform' }}>
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Services sub-list */}
          <div style={{
            maxHeight: servicesOpen ? 900 : 0,
            overflow: 'hidden',
            transition: 'max-height 0.45s cubic-bezier(.4,0,.2,1)',
          }}>
            <div style={{ paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 0 }}>
              {SERVICE_GROUPS.map((g) => (
                <div key={g.title}>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 10,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'rgba(22,20,15,0.4)',
                    padding: '10px 0 6px',
                    borderTop: '1px solid rgba(22,20,15,0.1)',
                    textAlign: 'left',
                  }}>{g.title}</div>
                  {g.items.map((it, idx) => (
                    <Link
                      key={idx}
                      href={it.href}
                      onClick={close}
                      style={{
                        display: 'block', textDecoration: 'none', color: 'inherit',
                        padding: '10px 0',
                        borderBottom: '1px solid rgba(22,20,15,0.06)',
                        textAlign: 'left',
                        fontFamily: 'var(--font-display)',
                        fontSize: 17,
                        fontStyle: 'italic',
                      }}
                    >
                      {it.l}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {navLinks.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={close}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 8vw, 64px)',
              fontStyle: 'italic',
              color: 'inherit',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
              transition: `opacity 0.4s ease ${(i + 1) * 0.06 + 0.1}s, transform 0.4s ease ${(i + 1) * 0.06 + 0.1}s`,
            }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="/#contact"
          onClick={close}
          style={{
            marginTop: 8,
            padding: '14px 32px',
            border: '1px solid currentColor',
            borderRadius: 100,
            fontFamily: 'var(--font-mono)',
            fontSize: 13,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'inherit',
            textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 10,
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
            transition: `opacity 0.4s ease ${navLinks.length * 0.06 + 0.16}s, transform 0.4s ease ${navLinks.length * 0.06 + 0.16}s`,
          }}
        >
          <span className="status-dot" /> Let&apos;s Talk
        </a>
          <div style={{ height: 'clamp(80px, 12vw, 120px)', flexShrink: 0 }} aria-hidden="true" />
        </div>{/* end inner centering wrapper */}
      </div>

      <style>{`
        .hamburger { display: none; }
        @media (max-width: 880px) {
          .hcta-desktop { display: none !important; }
          .hamburger { display: inline-flex; }
        }
      `}</style>
    </>
  );
}
