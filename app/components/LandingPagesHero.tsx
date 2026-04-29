'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Magnetic } from './primitives';

export function LandingPagesHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.lp-eyebrow', { y: 20, opacity: 0, duration: 0.5 })
        .from('h1',          { y: 32, opacity: 0, duration: 0.65 }, '-=0.25')
        .from('p',           { y: 20, opacity: 0, duration: 0.55 }, '-=0.35')
        .from('.lp-cta',     { y: 16, opacity: 0, duration: 0.5  }, '-=0.35')
        .from('.lp-stage',   { x: 40, opacity: 0, duration: 0.75 }, '-=0.8');

      gsap.timeline({ delay: 0.6, defaults: { ease: 'back.out(1.4)' } })
        .from('#lp-orbit-rings', { scale: 0.4, opacity: 0, transformOrigin: '280px 280px', duration: 0.6 })
        .from('#lp-pulse',       { scale: 0,   opacity: 0, transformOrigin: '280px 300px', duration: 0.7 }, '-=0.4')
        .from('#lp-connectors',  { opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
        .from('#lp-card',        { scale: 0.8, opacity: 0, transformOrigin: '280px 300px', duration: 0.7, ease: 'back.out(1.7)' }, '-=0.3')
        .from('#lp-badge-conv',  { x: -40, y: -40, opacity: 0, duration: 0.55 }, '-=0.2')
        .from('#lp-badge-ab',    { x:  40, y: -40, opacity: 0, duration: 0.55 }, '-=0.4')
        .from('#lp-badge-speed', { x: -40, y:  40, opacity: 0, duration: 0.55 }, '-=0.4')
        .from('#lp-badge-form',  { x:  40, y:  40, opacity: 0, duration: 0.55 }, '-=0.4')
        .from('#lp-meter',       { x:  40, opacity: 0, duration: 0.5 }, '-=0.3')
        .from('#lp-counter',     { x: -40, opacity: 0, duration: 0.5 }, '-=0.4')
        .from('#lp-attn',        { y: -30, opacity: 0, duration: 0.5 }, '-=0.4')
        .from('#lp-gear',        { scale: 0, opacity: 0, transformOrigin: '508px 372px', duration: 0.5 }, '-=0.3')
        .from('#lp-dots',        { opacity: 0, duration: 0.35, ease: 'power2.out' }, '-=0.2');
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="lp-hero" ref={heroRef}>
      <style>{`
        #lp-hero {
          padding-top: 140px; padding-bottom: 80px;
          background: radial-gradient(1200px 600px at 80% 20%, #eef7fc 0%, transparent 60%),
                      radial-gradient(900px 500px at 10% 90%, #f0e9ff 0%, transparent 60%), #fbfdff;
          color: #0e2230;
        }
        #lp-hero .lp-inner {
          max-width: 1340px; margin: 0 auto; padding: 0 48px;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 48px; align-items: center; min-height: 70vh;
        }
        #lp-hero .lp-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 600; letter-spacing: 0.04em;
          color: #21759b; background: #d6ecf6; padding: 6px 12px; border-radius: 999px;
        }
        #lp-hero .lp-eyebrow::before {
          content: ""; width: 6px; height: 6px; border-radius: 50%;
          background: #4fd1a8; box-shadow: 0 0 0 4px rgba(79,209,168,0.2);
        }
        #lp-hero h1 {
          font-size: clamp(44px,7vw,96px); line-height: 0.92; letter-spacing: -0.02em;
          margin: 18px 0; text-wrap: pretty;
        }
        #lp-hero .lp-grad {
          background: linear-gradient(120deg, #21759b 0%, #7c6cf2 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        #lp-hero p { font-size: 18px; line-height: 1.55; color: #1c3a4f; max-width: 52ch; margin: 0 0 28px; }
        #lp-hero .lp-cta { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }
        #lp-hero .lp-stage {
          position: relative; width: 100%; aspect-ratio: 1/1; max-height: 460px;
          display: flex; align-items: center; justify-content: center; overflow: hidden;
        }
        #lp-hero .lp-stage svg { width: 100%; height: 100%; display: block; overflow: visible; text-rendering: geometricPrecision; shape-rendering: geometricPrecision; }

        @keyframes lp-float-a { 0%,100%{transform:translate3d(0,0,0)} 50%{transform:translate3d(0,-10px,0)} }
        @keyframes lp-float-b { 0%,100%{transform:translate3d(0,0,0)} 50%{transform:translate3d(0,-14px,0)} }
        @keyframes lp-float-c { 0%,100%{transform:translate3d(0,0,0)} 50%{transform:translate3d(0,-8px,0)} }
        @keyframes lp-ring-pulse { 0%{transform:scale(.85);opacity:.55} 80%{opacity:.05} 100%{transform:scale(1.55);opacity:0} }
        @keyframes lp-spin { to{transform:rotate(360deg)} }
        @keyframes lp-orbit { to{transform:rotate(360deg)} }
        @keyframes lp-orbit-rev { to{transform:rotate(-360deg)} }
        @keyframes lp-dash-fwd { to{stroke-dashoffset:-48} }
        @keyframes lp-pop-dot { 0%,100%{opacity:.35;transform:scale(.9)} 50%{opacity:1;transform:scale(1.05)} }
        @keyframes lp-shimmer-x { 0%{transform:translateX(-80px)} 100%{transform:translateX(260px)} }
        @keyframes lp-cursor-tap {
          0%,60%{transform:translate3d(0,0,0)} 72%{transform:translate3d(-2px,-2px,0) scale(.92)}
          78%{transform:translate3d(0,0,0) scale(1)} 100%{transform:translate3d(0,0,0)}
        }
        @keyframes lp-cta-pulse { 0%,100%{transform:scale(1)} 72%{transform:scale(.97)} 80%{transform:scale(1.02)} }
        @keyframes lp-ripple { 0%{r:0;opacity:.5} 100%{r:26;opacity:0} }
        @keyframes lp-meter-needle { 0%{transform:rotate(-70deg)} 50%{transform:rotate(50deg)} 100%{transform:rotate(70deg)} }
        @keyframes lp-scroll-stop {
          0%,18%{transform:translate3d(0,0,0)} 34%{transform:translate3d(0,-64px,0)}
          44%,78%{transform:translate3d(0,-64px,0)} 92%,100%{transform:translate3d(0,0,0)}
        }
        @keyframes lp-attn-bounce {
          0%,60%,100%{transform:translate3d(0,0,0);opacity:.85}
          72%{transform:translate3d(0,-6px,0);opacity:1} 84%{transform:translate3d(0,0,0);opacity:.85}
        }
        @keyframes lp-count-blink { 0%,45%,100%{opacity:1} 50%,95%{opacity:.5} }

        .lp-float-a { animation: lp-float-a 7s cubic-bezier(.45,.05,.55,.95) infinite; transform-origin: center; transform-box: fill-box; will-change: transform; }
        .lp-float-b { animation: lp-float-b 8s cubic-bezier(.45,.05,.55,.95) infinite; transform-origin: center; transform-box: fill-box; will-change: transform; }
        .lp-float-c { animation: lp-float-c 6.5s cubic-bezier(.45,.05,.55,.95) infinite; transform-origin: center; transform-box: fill-box; will-change: transform; }
        .lp-ring    { animation: lp-ring-pulse 3.2s cubic-bezier(.25,.6,.35,1) infinite; transform-origin: center; transform-box: fill-box; }
        .lp-spin    { animation: lp-spin 24s linear infinite; transform-origin: center; transform-box: fill-box; }
        .lp-orbit   { animation: lp-orbit 32s linear infinite; transform-origin: 280px 280px; }
        .lp-orbit-rev { animation: lp-orbit-rev 38s linear infinite; transform-origin: 280px 280px; }
        .lp-dash    { stroke-dasharray: 6 6; animation: lp-dash-fwd 2.2s linear infinite; }
        .lp-dot     { animation: lp-pop-dot 3s cubic-bezier(.45,.05,.55,.95) infinite; transform-origin: center; transform-box: fill-box; }
        .lp-shimmer { animation: lp-shimmer-x 4s ease-in-out infinite; }
        .lp-cursor  { animation: lp-cursor-tap 4.5s cubic-bezier(.34,.01,.21,1) infinite; transform-origin: 0 0; transform-box: fill-box; }
        .lp-cta-pulse { animation: lp-cta-pulse 4.5s cubic-bezier(.34,.01,.21,1) infinite; transform-origin: center; transform-box: fill-box; }
        .lp-ripple  { animation: lp-ripple 2.4s ease-out infinite; transform-origin: center; transform-box: fill-box; }
        .lp-meter   { animation: lp-meter-needle 5s cubic-bezier(.45,.05,.55,.95) infinite alternate; transform-origin: 0 0; transform-box: fill-box; }
        .lp-scroll  { animation: lp-scroll-stop 6s cubic-bezier(.45,.05,.55,.95) infinite; }
        .lp-attn    { animation: lp-attn-bounce 3s cubic-bezier(.45,.05,.55,.95) infinite; transform-origin: center; transform-box: fill-box; }
        .lp-blink   { animation: lp-count-blink 4s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .lp-float-a,.lp-float-b,.lp-float-c,.lp-ring,.lp-spin,.lp-orbit,.lp-orbit-rev,
          .lp-dash,.lp-dot,.lp-shimmer,.lp-cursor,.lp-cta-pulse,.lp-ripple,.lp-meter,
          .lp-scroll,.lp-attn,.lp-blink { animation: none; }
        }
        @media (max-width: 1100px) {
          #lp-hero { padding-top: 120px; padding-bottom: 60px; }
          #lp-hero .lp-inner { padding: 0 32px; gap: 32px; }
        }
        @media (max-width: 900px) {
          #lp-hero { padding-top: 100px; padding-bottom: 48px; }
          #lp-hero .lp-inner { grid-template-columns: 1fr; padding: 0 24px; gap: 24px; min-height: unset; }
          #lp-hero .lp-copy { order: 2; }
          #lp-hero .lp-stage { order: 1; max-height: 380px; max-width: 380px; margin: 0 auto; }
        }
        @media (max-width: 600px) {
          #lp-hero { padding-top: 88px; padding-bottom: 40px; }
          #lp-hero .lp-inner { padding: 0 20px; gap: 20px; }
          #lp-hero h1 { font-size: clamp(34px,9vw,52px); margin: 12px 0; }
          #lp-hero p { font-size: 15px; margin-bottom: 20px; max-width: unset; }
          #lp-hero .lp-cta { flex-direction: column; align-items: stretch; }
          #lp-hero .lp-cta .magnetic { width: 100%; }
          #lp-hero .lp-cta .btn { justify-content: center; width: 100%; }
          #lp-hero .lp-stage { max-height: 300px; max-width: 300px; }
        }
      `}</style>

      <div className="lp-inner">
        <div className="lp-copy">
          <span className="lp-eyebrow">Custom Websites · Landing Pages</span>
          <h1>Landing<br /><span className="lp-grad">Pages</span></h1>
          <p>High-converting pages with animations that stop the scroll. Engineered to load fast, persuade clearly, and turn cold traffic into qualified leads.</p>
          <div className="lp-cta">
            <Magnetic>
              <a href="/#contact" className="btn">Plan a page <span className="btn-arrow">→</span></a>
            </Magnetic>
            <Magnetic>
              <a href="/#work" className="btn btn-ghost">View my work</a>
            </Magnetic>
          </div>
        </div>

        <div className="lp-stage" aria-label="A scrolling landing page card with hero, CTA, conversion meter, and floating proof badges">
          <svg viewBox="0 0 560 560" xmlns="http://www.w3.org/2000/svg" role="img">
            <defs>
              <linearGradient id="lp-cardBg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff"/><stop offset="100%" stopColor="#f3f8fb"/>
              </linearGradient>
              <linearGradient id="lp-dstHeader" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#21759b"/><stop offset="100%" stopColor="#7c6cf2"/>
              </linearGradient>
              <linearGradient id="lp-heroBlock" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#4a9bc4"/><stop offset="100%" stopColor="#7c6cf2"/>
              </linearGradient>
              <linearGradient id="lp-ctaBtn" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff8a7d"/><stop offset="100%" stopColor="#ff6b5b"/>
              </linearGradient>
              <linearGradient id="lp-bConv"  x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#7ee0bf"/><stop offset="100%" stopColor="#3fb98d"/></linearGradient>
              <linearGradient id="lp-bAB"    x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#9d8ff8"/><stop offset="100%" stopColor="#7c6cf2"/></linearGradient>
              <linearGradient id="lp-bSpeed" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ffd06b"/><stop offset="100%" stopColor="#f5a623"/></linearGradient>
              <linearGradient id="lp-bForm"  x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9bc4"/><stop offset="100%" stopColor="#21759b"/></linearGradient>
              <linearGradient id="lp-meterGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ff6b5b"/><stop offset="50%" stopColor="#ffb74a"/><stop offset="100%" stopColor="#3fb98d"/>
              </linearGradient>
              <radialGradient id="lp-centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7c6cf2" stopOpacity="0.18"/><stop offset="100%" stopColor="#7c6cf2" stopOpacity="0"/>
              </radialGradient>
              <linearGradient id="lp-shimmerGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="white" stopOpacity="0"/>
                <stop offset="50%" stopColor="white" stopOpacity="0.55"/>
                <stop offset="100%" stopColor="white" stopOpacity="0"/>
              </linearGradient>
              <clipPath id="lp-pageClip"><rect x="170" y="170" width="220" height="260" rx="14"/></clipPath>
            </defs>

            {/* Backdrop */}
            <circle cx="280" cy="280" r="240" fill="url(#lp-centerGlow)"/>
            <circle cx="280" cy="280" r="200" fill="none" stroke="#cfdde5" strokeWidth="1" strokeDasharray="2 6" opacity="0.7"/>
            <circle cx="280" cy="280" r="248" fill="none" stroke="#cfdde5" strokeWidth="1" strokeDasharray="2 6" opacity="0.5"/>

            <g id="lp-orbit-rings">
              <g className="lp-orbit">
                <circle cx="480" cy="280" r="3"   fill="#21759b"/>
                <circle cx="80"  cy="280" r="3"   fill="#7c6cf2"/>
                <circle cx="280" cy="80"  r="2.4" fill="#3fb98d"/>
              </g>
              <g className="lp-orbit-rev">
                <circle cx="280" cy="528" r="2.4" fill="#ffb74a"/>
                <circle cx="421" cy="421" r="2"   fill="#ef6ea8"/>
                <circle cx="139" cy="139" r="2"   fill="#21759b" opacity="0.7"/>
              </g>
            </g>

            <g id="lp-pulse" transform="translate(280 300)">
              <circle className="lp-ring" r="120" fill="none" stroke="#7c6cf2" strokeWidth="1.6" opacity="0.5"/>
              <circle className="lp-ring" style={{ animationDelay: '1.3s' }} r="120" fill="none" stroke="#21759b" strokeWidth="1.6" opacity="0.5"/>
            </g>

            {/* Connector lines */}
            <g id="lp-connectors" fill="none" strokeLinecap="round">
              <path d="M 220 196 Q 175 150 144 116" stroke="#3fb98d" strokeWidth="1.6" opacity="0.28"/>
              <path className="lp-dash" d="M 220 196 Q 175 150 144 116" stroke="#3fb98d" strokeWidth="1.8"/>
              <path d="M 340 196 Q 380 150 412 116" stroke="#7c6cf2" strokeWidth="1.6" opacity="0.28"/>
              <path className="lp-dash" style={{ animationDelay: '.3s' }} d="M 340 196 Q 380 150 412 116" stroke="#7c6cf2" strokeWidth="1.8"/>
              <path d="M 220 408 Q 178 444 138 480" stroke="#f5a623" strokeWidth="1.6" opacity="0.28"/>
              <path className="lp-dash" style={{ animationDelay: '.6s' }} d="M 220 408 Q 178 444 138 480" stroke="#f5a623" strokeWidth="1.8"/>
              <path d="M 340 408 Q 380 444 422 480" stroke="#21759b" strokeWidth="1.6" opacity="0.28"/>
              <path className="lp-dash" style={{ animationDelay: '.9s' }} d="M 340 408 Q 380 444 422 480" stroke="#21759b" strokeWidth="1.8"/>
            </g>

            {/* Center landing-page card */}
            <g id="lp-card">
              <g className="lp-float-b">
                <rect x="174" y="178" width="220" height="260" rx="14" fill="#0c4a63" opacity="0.12"/>
                <rect x="170" y="170" width="220" height="260" rx="14" fill="url(#lp-cardBg)" stroke="#cfdde5"/>
                <rect x="170" y="170" width="220" height="32" rx="14" fill="url(#lp-dstHeader)"/>
                <rect x="170" y="186" width="220" height="16" fill="url(#lp-dstHeader)"/>
                <circle cx="184" cy="186" r="3" fill="#ffffff" opacity="0.9"/>
                <circle cx="196" cy="186" r="3" fill="#ffffff" opacity="0.6"/>
                <circle cx="208" cy="186" r="3" fill="#ffffff" opacity="0.4"/>
                <rect x="222" y="180" width="124" height="12" rx="6" fill="#ffffff" opacity="0.85"/>
                <rect x="228" y="184" width="6"   height="4"  rx="1" fill="#21759b" opacity="0.7"/>
                <rect x="240" y="184" width="40"  height="4"  rx="1" fill="#21759b" opacity="0.5"/>
                <g transform="translate(376 186)">
                  <circle r="3.6" fill="#4fd1a8"/>
                  <circle r="3.6" fill="#4fd1a8" opacity="0.4">
                    <animate attributeName="r" values="3.6;8;3.6" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite"/>
                  </circle>
                </g>

                {/* Page viewport — inner page slides */}
                <g clipPath="url(#lp-pageClip)">
                  <g className="lp-scroll">
                    <rect x="180" y="212" width="40" height="6" rx="3" fill="#0e2230"/>
                    <rect x="320" y="212" width="60" height="14" rx="7" fill="#eef7fc" stroke="#cfdde5"/>
                    <rect x="328" y="217" width="44" height="4"  rx="2" fill="#21759b"/>
                    <rect x="180" y="232" width="200" height="84" rx="10" fill="url(#lp-heroBlock)"/>
                    <rect x="190" y="244" width="120" height="9" rx="4" fill="#ffffff" opacity="0.95"/>
                    <rect x="190" y="258" width="92"  height="9" rx="4" fill="#ffffff" opacity="0.95"/>
                    <rect x="190" y="274" width="150" height="5" rx="2.5" fill="#ffffff" opacity="0.55"/>
                    <rect x="190" y="282" width="120" height="5" rx="2.5" fill="#ffffff" opacity="0.4"/>
                    <g transform="translate(220 304)">
                      <g className="lp-cta-pulse">
                        <rect x="-30" y="-12" width="60" height="22" rx="11" fill="url(#lp-ctaBtn)"/>
                        <path d="M -8 -3 L -2 0 L -8 3 Z" fill="#ffffff"/>
                        <rect x="2" y="-2.5" width="22" height="5" rx="2" fill="#ffffff" opacity="0.95"/>
                      </g>
                      <circle className="lp-ripple" cx="0" cy="0" r="0" fill="none" stroke="#ff6b5b" strokeWidth="2"/>
                    </g>
                    <g transform="translate(180 326)">
                      <rect x="0"   y="0" width="62" height="42" rx="8" fill="#eef7fc" stroke="#cfdde5"/>
                      <rect x="8"   y="8" width="36" height="4" rx="2" fill="#21759b"/>
                      <rect x="8"   y="16" width="46" height="3" rx="1.5" fill="#cfdde5"/>
                      <rect x="8"   y="22" width="40" height="3" rx="1.5" fill="#cfdde5"/>
                      <g transform="translate(8 32)" fill="#ffb74a">
                        <path d="M 0 4 L 1.2 1.2 L 4 1 L 1.8 -0.8 L 2.4 -3.6 L 0 -2 L -2.4 -3.6 L -1.8 -0.8 L -4 1 L -1.2 1.2 Z"/>
                      </g>
                      <g transform="translate(16 32)" fill="#ffb74a"><path d="M 0 4 L 1.2 1.2 L 4 1 L 1.8 -0.8 L 2.4 -3.6 L 0 -2 L -2.4 -3.6 L -1.8 -0.8 L -4 1 L -1.2 1.2 Z"/></g>
                      <g transform="translate(24 32)" fill="#ffb74a"><path d="M 0 4 L 1.2 1.2 L 4 1 L 1.8 -0.8 L 2.4 -3.6 L 0 -2 L -2.4 -3.6 L -1.8 -0.8 L -4 1 L -1.2 1.2 Z"/></g>
                      <rect x="69"  y="0" width="62" height="42" rx="8" fill="#f3eeff" stroke="#cfdde5"/>
                      <rect x="77"  y="8" width="36" height="4" rx="2" fill="#7c6cf2"/>
                      <rect x="77"  y="16" width="46" height="3" rx="1.5" fill="#cfdde5"/>
                      <rect x="77"  y="22" width="40" height="3" rx="1.5" fill="#cfdde5"/>
                      <rect x="77"  y="32" width="4" height="6" rx="1" fill="#7c6cf2"/>
                      <rect x="83"  y="30" width="4" height="8" rx="1" fill="#7c6cf2"/>
                      <rect x="89"  y="27" width="4" height="11" rx="1" fill="#7c6cf2"/>
                      <rect x="138" y="0" width="62" height="42" rx="8" fill="#e8f8f0" stroke="#cfdde5"/>
                      <rect x="146" y="8" width="36" height="4" rx="2" fill="#3fb98d"/>
                      <rect x="146" y="16" width="46" height="3" rx="1.5" fill="#cfdde5"/>
                      <rect x="146" y="22" width="40" height="3" rx="1.5" fill="#cfdde5"/>
                      <g transform="translate(154 32)">
                        <rect x="-6" y="-5" width="32" height="10" rx="5" fill="#3fb98d"/>
                        <path d="M -3 0 L -1 2 L 4 -3" fill="none" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                    </g>
                    <rect x="180" y="380" width="200" height="14" rx="3" fill="#0e2230"/>
                    <rect x="180" y="400" width="200" height="22" rx="6" fill="#ffffff" stroke="#cfdde5"/>
                    <rect x="186" y="408" width="80"  height="6"  rx="2" fill="#cfdde5"/>
                    <rect x="180" y="430" width="200" height="22" rx="6" fill="#ffffff" stroke="#cfdde5"/>
                  </g>
                </g>

                {/* Cursor */}
                <g transform="translate(338 252)">
                  <g className="lp-cursor">
                    <path d="M 0 0 L 14 4 L 6 7 L 4 15 Z" fill="#0e2230" stroke="#ffffff" strokeWidth="1.4" strokeLinejoin="round"/>
                  </g>
                </g>

                {/* Shimmer */}
                <g clipPath="url(#lp-pageClip)">
                  <rect className="lp-shimmer" x="100" y="170" width="60" height="260" fill="url(#lp-shimmerGrad)" opacity="0.55"/>
                </g>
              </g>
            </g>

            {/* Conversion meter — top-right */}
            <g id="lp-meter">
              <g className="lp-float-c" style={{ animationDelay: '-.4s' }}>
                <g transform="translate(454 196)">
                  <rect x="-50" y="-36" width="100" height="72" rx="12" fill="#0c4a63" opacity="0.07" transform="translate(0 4)"/>
                  <rect x="-50" y="-36" width="100" height="72" rx="12" fill="#ffffff" stroke="#cfdde5"/>
                  <g transform="translate(0 4)">
                    <path d="M -34 0 A 34 34 0 0 1 34 0" fill="none" stroke="#eef3f6" strokeWidth="6" strokeLinecap="round"/>
                    <path d="M -34 0 A 34 34 0 0 1 34 0" fill="none" stroke="url(#lp-meterGrad)" strokeWidth="6" strokeLinecap="round" strokeDasharray="106 200"/>
                    <g stroke="#cfdde5" strokeWidth="1.4" strokeLinecap="round">
                      <path d="M -34 0 L -30 0"/>
                      <path d="M -24 -24 L -20.6 -20.6"/>
                      <path d="M 0 -34 L 0 -30"/>
                      <path d="M 24 -24 L 20.6 -20.6"/>
                      <path d="M 34 0 L 30 0"/>
                    </g>
                    <g className="lp-meter">
                      <path d="M 0 0 L 0 -28" stroke="#0e2230" strokeWidth="2.2" strokeLinecap="round"/>
                      <circle r="3.5" fill="#0e2230"/>
                      <circle r="1.4" fill="#ffffff"/>
                    </g>
                    <rect x="-22" y="14" width="14" height="6" rx="2" fill="#0e2230"/>
                    <rect x="-6"  y="14" width="6"  height="6" rx="2" fill="#0e2230"/>
                    <rect x="2"   y="14" width="20" height="6" rx="2" fill="#3fb98d"/>
                  </g>
                </g>
              </g>
            </g>

            {/* Live conversion counter — bottom-left */}
            <g id="lp-counter">
              <g className="lp-float-a" style={{ animationDelay: '-.8s' }}>
                <g transform="translate(106 392)">
                  <rect x="-46" y="-26" width="92" height="52" rx="12" fill="#ffffff" stroke="#cfdde5"/>
                  <g transform="translate(-32 -14)">
                    <circle r="3" fill="#4fd1a8"/>
                    <circle r="3" fill="#4fd1a8" opacity="0.4">
                      <animate attributeName="r" values="3;7;3" dur="2s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite"/>
                    </circle>
                  </g>
                  <rect x="-22" y="-17" width="48" height="4" rx="2" fill="#cfdde5"/>
                  <g className="lp-blink">
                    <rect x="-32" y="-6" width="14" height="14" rx="3" fill="#0e2230"/>
                    <rect x="-14" y="-6" width="6"  height="14" rx="3" fill="#0e2230"/>
                    <rect x="-4"  y="-6" width="20" height="14" rx="3" fill="#0e2230"/>
                    <rect x="20"  y="-6" width="14" height="14" rx="3" fill="#0e2230"/>
                  </g>
                  <g transform="translate(0 16)" fill="#3fb98d">
                    <path d="M 0 -3 L 4 1 H 1.6 V 4 H -1.6 V 1 H -4 Z"/>
                  </g>
                  <rect x="6" y="13" width="22" height="5" rx="2" fill="#3fb98d"/>
                </g>
              </g>
            </g>

            {/* Attention bubble — top-left */}
            <g id="lp-attn">
              <g className="lp-attn">
                <g transform="translate(118 162)">
                  <path d="M -38 -16 Q -38 -28 -26 -28 L 26 -28 Q 38 -28 38 -16 L 38 4 Q 38 16 26 16 L -8 16 L -16 24 L -14 16 L -26 16 Q -38 16 -38 4 Z"
                        fill="#ffffff" stroke="#cfdde5"/>
                  <g transform="translate(-22 -6)" fill="none" stroke="#ff6b5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M -6 2 L 6 2 L 4 -3 Q 4 -10 0 -10 Q -4 -10 -4 -3 Z" fill="#ff6b5b" stroke="none"/>
                    <circle cx="0" cy="5" r="1.6" fill="#ff6b5b" stroke="none"/>
                  </g>
                  <rect x="-8" y="-12" width="40" height="5" rx="2.5" fill="#0e2230"/>
                  <rect x="-8" y="-3"  width="32" height="4" rx="2"   fill="#cfdde5"/>
                  <rect x="-8" y="5"   width="36" height="4" rx="2"   fill="#cfdde5"/>
                  <circle className="lp-ripple" cx="-22" cy="-6" r="0" fill="none" stroke="#ff6b5b" strokeWidth="1.6"/>
                </g>
              </g>
            </g>

            {/* CONVERSION badge (top-left) */}
            <g id="lp-badge-conv">
              <g className="lp-float-a" style={{ animationDelay: '-.2s' }}>
                <g transform="translate(116 92)">
                  <path d="M -26 -15 L 0 -30 L 26 -15 L 26 15 L 0 30 L -26 15 Z" fill="url(#lp-bConv)" stroke="#2ea077" strokeWidth="1"/>
                  <path d="M -22 -13 L 0 -26 L 22 -13" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.3"/>
                  <g transform="translate(0 -2)" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M -12 6 L -4 -2 L 2 4 L 12 -8"/>
                    <path d="M 6 -8 H 12 V -2"/>
                  </g>
                  <g transform="translate(0 44)">
                    <circle cx="-8" cy="0" r="2" fill="#3fb98d" opacity="0.9"/>
                    <circle cx="0"  cy="0" r="2" fill="#3fb98d" opacity="0.5"/>
                    <circle cx="8"  cy="0" r="2" fill="#3fb98d" opacity="0.25"/>
                  </g>
                </g>
              </g>
            </g>

            {/* A/B TEST badge (top-right) */}
            <g id="lp-badge-ab">
              <g className="lp-float-b" style={{ animationDelay: '-.5s' }}>
                <g transform="translate(440 92)">
                  <path d="M -26 -15 L 0 -30 L 26 -15 L 26 15 L 0 30 L -26 15 Z" fill="url(#lp-bAB)" stroke="#5847d4" strokeWidth="1"/>
                  <g transform="translate(0 -2)" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M -10 6 L -6 -6 L -2 6 M -8.5 2 H -3.5"/>
                    <path d="M 0 -8 L 0 8" opacity="0.55"/>
                    <path d="M 4 -6 H 8 a 3 3 0 0 1 0 6 H 4 a 3 3 0 0 1 0 6 H 4 V -6"/>
                  </g>
                  <g transform="translate(0 44)">
                    <circle cx="-8" cy="0" r="2" fill="#7c6cf2" opacity="0.9"/>
                    <circle cx="0"  cy="0" r="2" fill="#7c6cf2" opacity="0.5"/>
                    <circle cx="8"  cy="0" r="2" fill="#7c6cf2" opacity="0.25"/>
                  </g>
                </g>
              </g>
            </g>

            {/* SPEED badge (bottom-left) */}
            <g id="lp-badge-speed">
              <g className="lp-float-c" style={{ animationDelay: '-.8s' }}>
                <g transform="translate(120 500)">
                  <path d="M -26 -15 L 0 -30 L 26 -15 L 26 15 L 0 30 L -26 15 Z" fill="url(#lp-bSpeed)" stroke="#d68812" strokeWidth="1"/>
                  <g transform="translate(0 0)" fill="#ffffff" stroke="#ffffff" strokeLinejoin="round" strokeWidth="1">
                    <path d="M 2 -12 L -8 4 L -1 4 L -4 12 L 8 -4 L 1 -4 Z"/>
                  </g>
                  <g transform="translate(0 -44)">
                    <circle cx="-8" cy="0" r="2" fill="#f5a623" opacity="0.9"/>
                    <circle cx="0"  cy="0" r="2" fill="#f5a623" opacity="0.5"/>
                    <circle cx="8"  cy="0" r="2" fill="#f5a623" opacity="0.25"/>
                  </g>
                </g>
              </g>
            </g>

            {/* FORM badge (bottom-right) */}
            <g id="lp-badge-form">
              <g className="lp-float-a" style={{ animationDelay: '-1.0s' }}>
                <g transform="translate(440 500)">
                  <path d="M -26 -15 L 0 -30 L 26 -15 L 26 15 L 0 30 L -26 15 Z" fill="url(#lp-bForm)" stroke="#0c4a63" strokeWidth="1"/>
                  <g transform="translate(0 -1)" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="-11" y="-9" width="22" height="6" rx="2"/>
                    <rect x="-11" y="1"  width="22" height="6" rx="2"/>
                    <rect x="-3"  y="9"  width="14" height="4" rx="2" fill="#ffffff" stroke="none"/>
                  </g>
                  <g transform="translate(0 -44)">
                    <circle cx="-8" cy="0" r="2" fill="#21759b" opacity="0.9"/>
                    <circle cx="0"  cy="0" r="2" fill="#21759b" opacity="0.5"/>
                    <circle cx="8"  cy="0" r="2" fill="#21759b" opacity="0.25"/>
                  </g>
                </g>
              </g>
            </g>

            {/* Spinning gear */}
            <g id="lp-gear" transform="translate(508 372)">
              <g className="lp-spin">
                <circle r="18" fill="#ffffff" stroke="#cfdde5" strokeWidth="1.4"/>
                <circle r="7" fill="#21759b"/>
                <circle r="3" fill="#0c4a63"/>
                <g fill="#21759b">
                  <rect x="-2" y="-22" width="4" height="6" rx="1.5"/>
                  <rect x="-2" y="16"  width="4" height="6" rx="1.5"/>
                  <rect x="-22" y="-2" width="6" height="4" rx="1.5"/>
                  <rect x="16"  y="-2" width="6" height="4" rx="1.5"/>
                  <rect x="-18" y="-18" width="6" height="4" rx="1.5" transform="rotate(45)"/>
                  <rect x="12"  y="-18" width="6" height="4" rx="1.5" transform="rotate(45)"/>
                  <rect x="-18" y="14"  width="6" height="4" rx="1.5" transform="rotate(45)"/>
                  <rect x="12"  y="14"  width="6" height="4" rx="1.5" transform="rotate(45)"/>
                </g>
              </g>
            </g>

            <g id="lp-dots">
              <circle className="lp-dot" cx="280" cy="40"  r="3"   fill="#7c6cf2"/>
              <circle className="lp-dot" style={{ animationDelay: '.4s' }} cx="40"  cy="370" r="2.5" fill="#21759b"/>
              <circle className="lp-dot" style={{ animationDelay: '.8s' }} cx="520" cy="160" r="2.5" fill="#3fb98d"/>
              <circle className="lp-dot" style={{ animationDelay: '1.2s' }} cx="280" cy="540" r="3"   fill="#ff6b5b"/>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
