'use client';

import { useState } from 'react';
import { Reveal } from './primitives';

const CAPABILITIES = [
  {
    n: '01',
    tag: 'Ecommerce / Education',
    title: 'WordPress, built right.',
    desc: 'Online stores and course platforms — from scratch or from inherited mess. No cookie-cutter setups.',
    items: [
      'WooCommerce stores, memberships & subscriptions',
      'LearnDash LMS & full course platforms',
      'Custom plugin & feature development',
      'Zapier automations & third-party integrations',
      'Migrations & platform upgrades',
    ],
  },
  {
    n: '02',
    tag: 'Web / Custom Builds',
    title: 'Web apps that fit your business.',
    desc: 'A professional online presence or a custom platform shaped around how you actually operate.',
    items: [
      'Business websites that convert',
      'Custom apps with MERN or Next.js',
      'User portals, dashboards & booking systems',
      'API integrations & payment gateways',
    ],
  },
  {
    n: '03',
    tag: 'Mobile / iOS & Android',
    title: 'A mobile app for your business.',
    desc: 'A dedicated app for your store, courses or services — single codebase, both stores.',
    items: [
      'Ecommerce apps for WooCommerce stores',
      'Course & learning apps for educators',
      'Service booking & client-facing apps',
      'App Store & Play Store deployment',
    ],
  },
];

function CapCard({ n, tag, title, desc, items }: typeof CAPABILITIES[number]) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="hover-area"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        border: '1px solid var(--rule)',
        background: hover ? 'var(--ink)' : 'var(--paper)',
        color: hover ? 'var(--bg)' : 'var(--ink)',
        padding: '28px 28px 32px',
        display: 'flex', flexDirection: 'column',
        minHeight: 'clamp(320px, 40vw, 460px)',
        transition: 'background 0.4s, color 0.4s',
        position: 'relative', overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 64, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.7 }}>
        <span>{n}</span>
        <span>{tag}</span>
      </div>
      <h3 style={{ fontSize: 'clamp(28px, 3vw, 40px)', marginBottom: 16, flex: 1 }}>{title}</h3>
      <p style={{ fontSize: 14.5, lineHeight: 1.55, opacity: 0.75, marginBottom: 22 }}>{desc}</p>
      <div style={{ height: 1, background: 'currentColor', opacity: 0.2, marginBottom: 20 }} />
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
        {items.map((it, i) => (
          <li key={i} style={{ display: 'flex', gap: 10 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, opacity: 0.6, paddingTop: 3, minWidth: 22 }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Capabilities() {
  return (
    <section id="expertise" style={{ borderTop: '1px solid var(--rule)', background: 'var(--bg-soft)' }}>
      <div className="container">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(48px, 6vw, 96px)' }}>
            <div className="label" style={{ marginBottom: 16 }}>§ Core Capabilities</div>
            <h2 style={{ fontSize: 'clamp(40px, 5.5vw, 88px)' }}>
              Everything your<br />business needs to <span className="serif-i" style={{ color: 'var(--accent)' }}>grow online.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal stagger className="cap-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--gap-md)' }}>
          {CAPABILITIES.map(c => <CapCard key={c.n} {...c} />)}
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .cap-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
