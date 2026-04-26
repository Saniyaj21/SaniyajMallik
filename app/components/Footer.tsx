'use client';

import { Reveal } from './primitives';

const iconStyle = { display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 };

function IconMail() {
  return (
    <svg style={iconStyle} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg style={iconStyle} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg style={iconStyle} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="4" />
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg style={iconStyle} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function IconTwitter() {
  return (
    <svg style={iconStyle} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L2.027 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const linkStyle = {
  color: 'inherit' as const,
  textDecoration: 'none' as const,
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  opacity: 0.85,
  transition: 'opacity 0.2s',
};

export function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--bg)', padding: '0 0 32px' }}>
      <div className="container">
        <Reveal>
          <div style={{ textAlign: 'center', padding: '36px 0', borderTop: '1px solid rgba(242,239,231,0.15)', borderBottom: '1px solid rgba(242,239,231,0.15)', marginBottom: 40 }}>
            <div className="serif ft-name" style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1, letterSpacing: '-0.03em', opacity: 0.9 }}>
              <em>S</em>aniyaj <em>M</em>allik
            </div>
          </div>
        </Reveal>

        <Reveal stagger style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 'var(--gap-md)', paddingTop: 0, marginBottom: 40 }} className="ft-grid">
          <div>
            <p style={{ fontSize: 16, lineHeight: 1.5, opacity: 0.7, maxWidth: 360 }}>
              Software Engineer building high-performance WordPress, LMS &amp; ecommerce platforms — independently, with craft.
            </p>
            <div style={{ marginTop: 18, display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 13, fontFamily: 'var(--font-mono)' }}>
              <span className="status-dot" /> Available for new projects
            </div>
          </div>
          <div>
            <div className="label" style={{ marginBottom: 14, color: 'rgba(242,239,231,0.5)' }}>Navigation</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14 }}>
              <a href="/#expertise" style={{ color: 'inherit', textDecoration: 'none' }}>Services</a>
              <a href="/#work" style={{ color: 'inherit', textDecoration: 'none' }}>Featured Work</a>
              <a href="/#process" style={{ color: 'inherit', textDecoration: 'none' }}>Process</a>
              <a href="/#about" style={{ color: 'inherit', textDecoration: 'none' }}>About</a>
            </div>
          </div>
          <div>
            <div className="label" style={{ marginBottom: 14, color: 'rgba(242,239,231,0.5)' }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
              <a href="mailto:saniyajmallik12@gmail.com" style={linkStyle}>
                <IconMail /> saniyajmallik12@gmail.com
              </a>
              <a href="/#contact" style={linkStyle}>
                <IconCalendar /> Strategy call
              </a>
            </div>
          </div>
          <div>
            <div className="label" style={{ marginBottom: 14, color: 'rgba(242,239,231,0.5)' }}>Elsewhere</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
              <a href="#" style={linkStyle}>
                <IconLinkedIn /> LinkedIn
              </a>
              <a href="#" style={linkStyle}>
                <IconGitHub /> GitHub
              </a>
              <a href="#" style={linkStyle}>
                <IconTwitter /> Twitter
              </a>
            </div>
          </div>
        </Reveal>

        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 24, borderTop: '1px solid rgba(242,239,231,0.15)', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.5, gap: 20, flexWrap: 'wrap' }}>
          <span>© 2026 Saniyaj Mallik. All rights reserved.</span>
          <span>Independent work — not affiliated with WisdmLabs.</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) { .ft-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 520px) { .ft-grid { grid-template-columns: 1fr !important; } .ft-name { font-size: 13vw !important; } }
      `}</style>
    </footer>
  );
}
