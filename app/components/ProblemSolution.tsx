import { Reveal } from './primitives';

export function ProblemSolution() {
  return (
    <section id="problem" style={{ borderTop: '1px solid var(--rule)' }}>
      <div className="container">
        <Reveal>
          <div style={{ textAlign: 'center' }}>
            <div className="label" style={{ marginBottom: 16 }}>§ The Problem</div>
            <h2 style={{ fontSize: 'clamp(40px, 5.5vw, 88px)', marginBottom: 32 }}>
              The traditional<br />approach is <span className="serif-i" style={{ color: 'var(--accent)' }}>broken.</span>
            </h2>
            <Reveal stagger style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--gap-md)', maxWidth: 800, margin: '0 auto', textAlign: 'left' }} className="ps-cols">
              <div>
                <div className="label" style={{ marginBottom: 12 }}>Agencies</div>
                <p style={{ color: 'var(--ink-soft)', lineHeight: 1.55, fontSize: 16 }}>
                  Overhead, account managers, endless meetings — you pay for the bureaucracy.
                </p>
              </div>
              <div>
                <div className="label" style={{ marginBottom: 12 }}>Freelancers</div>
                <p style={{ color: 'var(--ink-soft)', lineHeight: 1.55, fontSize: 16 }}>
                  Unreliable communication, slipping timelines, messy code you&apos;ll inherit later.
                </p>
              </div>
            </Reveal>
          </div>
        </Reveal>

        <div className="rule-soft" style={{ margin: 'clamp(60px, 8vw, 120px) 0' }} />

        <Reveal>
          <div style={{ textAlign: 'center' }}>
            <div className="label" style={{ marginBottom: 16 }}>§ The Solution</div>
            <h2 style={{ fontSize: 'clamp(40px, 5.5vw, 88px)', marginBottom: 32 }}>
              A dedicated<br /><span className="serif-i">tech partner.</span>
            </h2>
            <p style={{ fontSize: 'clamp(17px, 1.4vw, 22px)', lineHeight: 1.5, maxWidth: 720, color: 'var(--ink-soft)', margin: '0 auto' }}>
              Lean-agency execution with direct one-on-one access. Senior-level architecture, rapid development, full ownership — from sketch to shipping.
            </p>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ps-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
