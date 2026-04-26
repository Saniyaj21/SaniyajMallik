'use client';

import { useState } from 'react';
import { Reveal, Magnetic } from './primitives';

type FormState = {
  name: string;
  email: string;
  company: string;
  project: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const PROJECT_TYPES = [
  { v: 'business', l: 'Custom business website', tech: 'WordPress · Elementor' },
  { v: 'landing', l: 'Landing page for lead gen', tech: 'Next.js · React' },
  { v: 'ecommerce', l: 'Ecommerce store', tech: 'WooCommerce' },
  { v: 'coaching', l: 'Coaching or course selling', tech: 'LearnDash · LMS' },
  { v: 'other', l: 'Something else', tech: 'Let\'s figure it out' },
];

function validate(f: FormState): Errors {
  const e: Errors = {};
  if (!f.name || f.name.trim().length < 2) e.name = 'Tell me your name';
  if (!f.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'A valid email helps';
  if (!f.message || f.message.trim().length < 12) e.message = 'A few details please (12+ chars)';
  return e;
}

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', company: '', project: 'wordpress', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);

  const onBlur = (k: keyof FormState) => {
    setTouched(t => ({ ...t, [k]: true }));
    setErrors(validate(form));
  };

  const onChange = (k: keyof FormState, v: string) => {
    const next = { ...form, [k]: v };
    setForm(next);
    if (touched[k]) setErrors(validate(next));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(errs).length === 0) setSubmitted(true);
  };

  const fieldClass = (k: keyof FormState) => {
    if (errors[k] && touched[k]) return 'field error';
    if (touched[k] && !errors[k] && form[k]) return 'field ok';
    return 'field';
  };

  const borderColor = (k: 'name' | 'email' | 'message') => {
    if (errors[k] && touched[k]) return '#ff6b6b';
    if (form[k] && touched[k]) return '#4ade80';
    return undefined;
  };

  const muted60 = 'color-mix(in srgb, var(--bg) 60%, transparent)';
  const muted40 = 'color-mix(in srgb, var(--bg) 40%, transparent)';
  const muted30 = 'color-mix(in srgb, var(--bg) 30%, transparent)';
  const muted18 = 'color-mix(in srgb, var(--bg) 18%, transparent)';
  const muted12 = 'color-mix(in srgb, var(--bg) 12%, transparent)';

  return (
    <section id="contact" style={{ borderTop: '1px solid var(--rule)', background: 'var(--ink)', color: 'var(--bg)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'var(--gap-lg)', alignItems: 'start' }} className="ct-grid">

          {/* Left: section heading */}
          <Reveal>
            <div className="ct-sticky" style={{ position: 'sticky', top: 100 }}>
              <div className="label" style={{ color: muted60, marginBottom: 20 }}>§ Get in Touch</div>
              <h2 style={{ fontSize: 'clamp(36px, 4.5vw, 72px)', marginBottom: 24, lineHeight: 0.98 }}>
                Want to give your customers a better way to{' '}
                <span className="serif-i" style={{ color: 'var(--accent)', filter: 'brightness(1.4)' }}>
                  access your store or courses?
                </span>
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, opacity: 0.6, maxWidth: 420 }}>
                WooCommerce store, LearnDash platform, mobile app, full web build — drop me a message and I&apos;ll respond within 24 hours.
              </p>
            </div>
          </Reveal>

          {/* Right: form card */}
          <Reveal>
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              border: `1px solid ${muted18}`,
              borderRadius: 12,
              padding: 'clamp(24px, 4vw, 40px)',
            }}>
              <div style={{ marginBottom: 28, paddingBottom: 20, borderBottom: `1px solid ${muted12}` }}>
                <div className="label" style={{ color: muted60, marginBottom: 6 }}>Send a message</div>
                <p style={{ fontSize: 14, opacity: 0.6, lineHeight: 1.5 }}>Fill in the form below and I&apos;ll get back to you within 24 hours.</p>
              </div>

              <form onSubmit={onSubmit} noValidate>
                {submitted ? (
                  <div style={{ padding: '32px 0', textAlign: 'center' }}>
                    <div className="serif-i" style={{ fontSize: 'clamp(32px, 4vw, 48px)', marginBottom: 12, color: 'var(--accent)', filter: 'brightness(1.4)' }}>Thanks — got it.</div>
                    <p style={{ fontSize: 16, opacity: 0.6, lineHeight: 1.5 }}>Message received, {form.name.split(' ')[0]}. I&apos;ll be in your inbox within 24 hours.</p>
                  </div>
                ) : (
                  <div style={{ display: 'grid', gap: 20 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="ct-row">
                      <div className={fieldClass('name')}>
                        <label>Name <span style={{ color: 'var(--accent)', filter: 'brightness(1.4)' }}>*</span></label>
                        <input
                          value={form.name}
                          onChange={e => onChange('name', e.target.value)}
                          onBlur={() => onBlur('name')}
                          placeholder="Your name"
                          style={borderColor('name') ? { borderColor: borderColor('name') } : {}}
                        />
                        {errors.name && touched.name && <span className="field-msg">{errors.name}</span>}
                      </div>
                      <div className={fieldClass('email')}>
                        <label>Email <span style={{ color: 'var(--accent)', filter: 'brightness(1.4)' }}>*</span></label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={e => onChange('email', e.target.value)}
                          onBlur={() => onBlur('email')}
                          placeholder="you@company.com"
                          style={borderColor('email') ? { borderColor: borderColor('email') } : {}}
                        />
                        {errors.email && touched.email && <span className="field-msg">{errors.email}</span>}
                      </div>
                    </div>

                    <div className="field">
                      <label>Company <span style={{ opacity: 0.5, fontStyle: 'italic', textTransform: 'none', letterSpacing: 0, fontSize: 11 }}>(optional)</span></label>
                      <input
                        value={form.company}
                        onChange={e => onChange('company', e.target.value)}
                        placeholder="Acme Co."
                      />
                    </div>

                    <div className="field">
                      <label>What are you building?</label>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingTop: 8 }}>
                        {PROJECT_TYPES.map(o => (
                          <button
                            key={o.v}
                            type="button"
                            onClick={() => onChange('project', o.v)}
                            style={{
                              padding: '10px 14px',
                              fontFamily: 'inherit',
                              border: `1px solid ${form.project === o.v ? 'var(--accent)' : muted30}`,
                              background: form.project === o.v ? 'var(--accent)' : 'rgba(255,255,255,0.04)',
                              color: form.project === o.v ? 'var(--accent-ink)' : 'var(--bg)',
                              borderRadius: 8, cursor: 'none', transition: 'all 0.25s',
                              textAlign: 'left',
                              display: 'flex', flexDirection: 'column', gap: 3,
                            }}
                          >
                            <span style={{ fontSize: 13, fontWeight: 500 }}>{o.l}</span>
                            <span style={{
                              fontSize: 10,
                              fontFamily: 'var(--font-mono)',
                              letterSpacing: '0.06em',
                              opacity: form.project === o.v ? 0.75 : 0.45,
                            }}>{o.tech}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className={fieldClass('message')}>
                      <label>Message <span style={{ color: 'var(--accent)', filter: 'brightness(1.4)' }}>*</span></label>
                      <textarea
                        value={form.message}
                        onChange={e => onChange('message', e.target.value)}
                        onBlur={() => onBlur('message')}
                        placeholder="What you're building, who it's for, and your timeline…"
                        rows={4}
                        style={borderColor('message') ? { borderColor: borderColor('message') } : {}}
                      />
                      <span className="field-msg" style={{ color: errors.message && touched.message ? '#ff6b6b' : (form.message.length >= 12 && touched.message ? '#4ade80' : muted40) }}>
                        {errors.message && touched.message
                          ? errors.message
                          : form.message.length >= 12 && touched.message
                            ? '✓ Looks good'
                            : `${form.message.length} / 12 minimum`}
                      </span>
                    </div>

                    <div style={{ paddingTop: 8 }}>
                      <Magnetic>
                        <button
                          type="submit"
                          className="btn"
                          style={{ background: 'var(--bg)', color: 'var(--ink)', borderColor: 'var(--bg)', width: '100%', justifyContent: 'center' }}
                        >
                          Send message <span className="btn-arrow">→</span>
                        </button>
                      </Magnetic>
                      <p style={{ marginTop: 12, fontSize: 12, opacity: 0.45, textAlign: 'center', fontFamily: 'var(--font-mono)' }}>
                        I&apos;ll respond within 24 hours · Mon–Sat
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .ct-grid { grid-template-columns: 1fr !important; }
          .ct-row { grid-template-columns: 1fr !important; }
          .ct-sticky { position: static !important; }
        }
      `}</style>
    </section>
  );
}
