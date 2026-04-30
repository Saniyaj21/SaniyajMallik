'use client';

import { useState, useRef } from 'react';
import { Reveal } from './primitives';

const FAQS = [
  { q: 'Do you only work with education and ecommerce businesses?', a: "Those are my specialty — that's where my deepest stack experience and pattern library live, so I deliver fastest there. But if your project plays to my strengths (WordPress, web apps, mobile), I'm open. Send the brief and we'll talk." },
  { q: 'How is working with you different from a freelancer or agency?', a: "You get senior-level architecture and direct one-on-one access — no account managers, no junior handoffs. It's the execution capability of a lean agency with the speed and cost of working directly with the builder." },
  { q: 'How long does a typical project take?', a: "A focused WordPress/WooCommerce build runs 4–6 weeks. A full custom web app or mobile app is typically 8–12 weeks. We'll scope it precisely after the discovery call." },
  { q: 'Do you offer ongoing support after the project is done?', a: 'Yes. Most clients keep me on a lightweight monthly retainer for maintenance, performance, and iteration. Or take the codebase and run — your call, fully documented either way.' },
  { q: 'What information do you need to get started?', a: "A short brief on what you're building, who it's for, your timeline, and any constraints (existing stack, integrations, budget range). We'll cover the rest on the strategy call." },
];

function FAQItem({ q, a, num, isOpen, onClick }: { q: string; a: string; num: string; isOpen: boolean; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div style={{ borderTop: '1px solid var(--rule)', borderBottom: '1px solid transparent' }}>
      <button
        onClick={onClick}
        style={{
          width: '100%', padding: '28px 0', display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 24, alignItems: 'center',
          background: 'transparent', border: 'none', textAlign: 'left',
          color: 'var(--ink)', fontFamily: 'inherit',
        }}
      >
        <span className="label" style={{ minWidth: 32 }}>{num}</span>
        <span className="serif" style={{ fontSize: 'clamp(20px, 2.4vw, 32px)', color: isOpen ? 'var(--accent)' : 'var(--ink)', transition: 'color 0.4s' }}>{q}</span>
        <span style={{ width: 28, height: 28, borderRadius: 100, border: '1px solid var(--rule)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, transition: 'transform 0.4s, background 0.3s', transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', background: isOpen ? 'var(--accent)' : 'transparent', color: isOpen ? 'var(--accent-ink)' : 'var(--ink)', borderColor: isOpen ? 'var(--accent)' : 'var(--rule)' }}>+</span>
      </button>
      <div
        ref={ref}
        style={{
          maxHeight: isOpen ? (ref.current?.scrollHeight ?? 200) + 32 : 0,
          overflow: 'hidden', transition: 'max-height 0.5s cubic-bezier(.4,0,.2,1), opacity 0.4s',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div style={{ padding: '0 0 32px clamp(20px, 5vw, 56px)', maxWidth: 720 }}>
          <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--ink-soft)' }}>{a}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" style={{ borderTop: '1px solid var(--rule)', background: 'var(--bg-soft)' }}>
      <div className="container">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(48px, 6vw, 80px)' }}>
            <div className="label" style={{ marginBottom: 16 }}>§ FAQ</div>
            <h2 style={{ fontSize: 'clamp(40px, 5.5vw, 88px)' }}>
              Questions people<br /><span className="serif-i" style={{ color: 'var(--accent)' }}>usually ask.</span>
            </h2>
          </div>
        </Reveal>

        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          {FAQS.map((f, i) => (
            <FAQItem
              key={i}
              {...f}
              num={String(i + 1).padStart(2, '0')}
              isOpen={open === i}
              onClick={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
