'use client';

import { useState } from 'react';
import { Reveal } from './primitives';

type FormState = {
  name: string;
  email: string;
  project: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const PROJECT_TYPES = [
  { v: 'business', l: 'Custom business website' },
  { v: 'landing', l: 'Landing page' },
  { v: 'ecommerce', l: 'Ecommerce store' },
  { v: 'coaching', l: 'Coaching or course platform' },
  { v: 'other', l: 'Something else' },
];

function validate(f: FormState): Errors {
  const e: Errors = {};
  if (!f.name || f.name.trim().length < 2) e.name = 'Please enter your name';
  if (!f.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Please enter a valid email';
  if (!f.message || f.message.trim().length < 12) e.message = 'Please add a bit more detail';
  return e;
}

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', project: 'business', message: '' });
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

  return (
    <section id="contact" style={{ borderTop: '1px solid var(--rule)', background: 'var(--ink)', color: 'var(--bg)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'var(--gap-lg)', alignItems: 'start' }} className="ct-grid">

          {/* Left: heading */}
          <Reveal>
            <div className="ct-sticky" style={{ position: 'sticky', top: 100 }}>
              <div className="label" style={{ opacity: 0.45, marginBottom: 20 }}>§ Get in Touch</div>
              <h2 style={{ fontSize: 'clamp(36px, 4.5vw, 72px)', marginBottom: 24, lineHeight: 0.98 }}>
                Let&apos;s work{' '}
                <span className="serif-i" style={{ color: 'var(--accent)', filter: 'brightness(1.4)' }}>
                  together
                </span>
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, opacity: 0.55, maxWidth: 360 }}>
                Drop me a message and I&apos;ll get back to you within 24 hours.
              </p>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal>
            <form onSubmit={onSubmit} noValidate style={{ display: 'grid', gap: 24 }}>
              {submitted ? (
                <div style={{ padding: '48px 0', textAlign: 'center' }}>
                  <div className="serif-i" style={{ fontSize: 'clamp(32px, 4vw, 48px)', marginBottom: 12, color: 'var(--accent)', filter: 'brightness(1.4)' }}>
                    Thanks — got it.
                  </div>
                  <p style={{ fontSize: 15, opacity: 0.55, lineHeight: 1.6 }}>
                    I&apos;ll be in your inbox within 24 hours, {form.name.split(' ')[0]}.
                  </p>
                </div>
              ) : (
                <>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="ct-row">
                    <div className={fieldClass('name')}>
                      <label>Name <span style={{ color: 'var(--accent)', filter: 'brightness(1.4)' }}>*</span></label>
                      <input
                        value={form.name}
                        onChange={e => onChange('name', e.target.value)}
                        onBlur={() => onBlur('name')}
                        placeholder="Your name"
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
                        placeholder="you@example.com"
                      />
                      {errors.email && touched.email && <span className="field-msg">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="field">
                    <label>What are you building?</label>
                    <div className="select-wrap">
                      <select
                        value={form.project}
                        onChange={e => onChange('project', e.target.value)}
                      >
                        {PROJECT_TYPES.map(o => (
                          <option key={o.v} value={o.v}>{o.l}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className={fieldClass('message')}>
                    <label>Message <span style={{ color: 'var(--accent)', filter: 'brightness(1.4)' }}>*</span></label>
                    <textarea
                      value={form.message}
                      onChange={e => onChange('message', e.target.value)}
                      onBlur={() => onBlur('message')}
                      placeholder="Tell me what you're building, who it's for, and your timeline…"
                      rows={4}
                    />
                    {errors.message && touched.message && <span className="field-msg">{errors.message}</span>}
                  </div>

                  <div style={{ paddingTop: 4 }}>
                    <button
                      type="submit"
                      className="btn"
                      style={{ background: 'var(--bg)', color: 'var(--ink)', borderColor: 'var(--bg)', width: '100%', justifyContent: 'center' }}
                    >
                      Send message <span className="btn-arrow">→</span>
                    </button>
                    <p style={{ marginTop: 12, fontSize: 12, opacity: 0.35, textAlign: 'center', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em' }}>
                      I respond within 24 hours · Mon–Sat
                    </p>
                  </div>
                </>
              )}
            </form>
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
