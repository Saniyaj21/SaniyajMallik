'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const SERVICE_GROUPS = [
  {
    title: 'WordPress',
    n: '01',
    items: [
      { l: 'WordPress Development', s: 'Custom builds from scratch', href: '/services/wordpress-development' },
      { l: 'Migrations', s: 'WordPress → Kajabi & more', href: '/services/wordpress-migrations' },
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
          <span>12 services across 3 pillars</span>
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
        <Link href="/" className="logo"><em>S</em>aniyaj <em>M</em>allik</Link>

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
            <span style={{
              fontSize: 9,
              transform: megaOpen ? 'rotate(180deg)' : 'rotate(0)',
              transition: 'transform 0.3s',
              display: 'inline-block',
            }}>▼</span>
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
            <span style={{
              fontSize: '0.45em', display: 'inline-block',
              transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0)',
              transition: 'transform 0.3s',
            }}>▼</span>
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
