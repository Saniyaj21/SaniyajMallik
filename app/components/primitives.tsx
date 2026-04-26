'use client';

import React, { useRef, useEffect, useState, ElementType, ReactNode, HTMLAttributes } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ── Custom Cursor ──────────────────────────────────
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const [variant, setVariant] = useState<'default' | 'hover' | 'text'>('default');

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as Element;
      if (!t.closest) return;
      if (t.closest('a, button, .btn, [data-cursor="hover"]')) setVariant('hover');
      else if (t.closest('input, textarea, select, [contenteditable]')) setVariant('text');
      else setVariant('default');
    };

    let raf: number;
    const loop = () => {
      ring.current.x += (target.current.x - ring.current.x) * 0.18;
      ring.current.y += (target.current.y - ring.current.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring ${variant}`} />
    </>
  );
}

// ── Magnetic ───────────────────────────────────────
interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export function Magnetic({ children, strength = 0.35, className = '' }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };
    const onLeave = () => { el.style.transform = 'translate(0,0)'; };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);

  return (
    <span
      ref={ref}
      className={`magnetic ${className}`}
      style={{ display: 'inline-block', transition: 'transform 0.5s cubic-bezier(.2,.8,.2,1)' }}
    >
      {children}
    </span>
  );
}

// ── Reveal ─────────────────────────────────────────
interface RevealProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  stagger?: boolean;
  from?: 'bottom' | 'left' | 'right';
  as?: ElementType;
}

export function Reveal({ children, stagger = false, from = 'bottom', className = '', as: As = 'div', ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;

    const fromVars = from === 'left' ? { x: -60, y: 0 } : from === 'right' ? { x: 60, y: 0 } : { y: 40, x: 0 };

    const ctx = gsap.context(() => {
      if (stagger) {
        gsap.from(Array.from(el.children), {
          opacity: 0,
          ...fromVars,
          stagger: 0.12,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      } else {
        gsap.from(el, {
          opacity: 0,
          ...fromVars,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      }
    }, el);

    return () => ctx.revert();
  }, [stagger, from]);

  const El = As as React.ElementType;
  return (
    <El ref={ref} className={className} {...rest}>
      {children}
    </El>
  );
}

// ── ThemeToggle ────────────────────────────────────
interface ThemeToggleProps {
  theme: 'light' | 'dark';
  setTheme: (t: 'light' | 'dark') => void;
}

export function ThemeToggle({ theme, setTheme }: ThemeToggleProps) {
  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      style={{
        width: 38, height: 38, borderRadius: 100,
        border: '1px solid rgba(255,255,255,0.4)',
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(10px)',
        color: 'inherit',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      }}
      aria-label="Toggle theme"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {theme === 'light' ? (
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        ) : (
          <>
            <circle cx="12" cy="12" r="4.5" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </>
        )}
      </svg>
    </button>
  );
}
