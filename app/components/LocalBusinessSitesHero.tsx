'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Magnetic } from './primitives';

export function LocalBusinessSitesHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.lbs-eyebrow', { y: 20, opacity: 0, duration: 0.5 })
        .from('h1',           { y: 32, opacity: 0, duration: 0.65 }, '-=0.25')
        .from('p',            { y: 20, opacity: 0, duration: 0.55 }, '-=0.35')
        .from('.lbs-cta',     { y: 16, opacity: 0, duration: 0.5  }, '-=0.35')
        .from('.lbs-stage',   { x: 40, opacity: 0, duration: 0.75 }, '-=0.8');

      gsap.timeline({ delay: 0.6, defaults: { ease: 'back.out(1.4)' } })
        .from('#lbs-sky',        { y: -30, opacity: 0, duration: 0.6 })
        .from('#lbs-buildings',  { y: 20, opacity: 0, duration: 0.55, ease: 'power2.out' }, '-=0.3')
        .from('#lbs-ground',     { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
        .from('#lbs-trees',      { scale: 0, opacity: 0, transformOrigin: 'center bottom', duration: 0.6 }, '-=0.2')
        .from('#lbs-store',      { scale: 0.88, opacity: 0, transformOrigin: '280px 360px', duration: 0.7, ease: 'back.out(1.7)' }, '-=0.3')
        .from('#lbs-pin',        { y: -40, opacity: 0, duration: 0.65 }, '-=0.2')
        .from('#lbs-shopkeeper', { scale: 0, opacity: 0, transformOrigin: '232px 384px', duration: 0.5 }, '-=0.3')
        .from('#lbs-lights',     { opacity: 0, duration: 0.45, ease: 'power2.out' }, '-=0.2')
        .from('#lbs-card-hours',      { x: -40, y: -20, opacity: 0, duration: 0.55 }, '-=0.2')
        .from('#lbs-card-review',     { x:  40, y: -20, opacity: 0, duration: 0.55 }, '-=0.4')
        .from('#lbs-card-directions', { x: -40, y:  20, opacity: 0, duration: 0.55 }, '-=0.4')
        .from('#lbs-card-phone',      { x:  40, y:  20, opacity: 0, duration: 0.55 }, '-=0.4');
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="lbs-hero" ref={heroRef}>
      <style>{`
        #lbs-hero {
          padding-top: 140px; padding-bottom: 80px;
          background: radial-gradient(1200px 600px at 80% 20%, #eef7fc 0%, transparent 60%),
                      radial-gradient(900px 500px at 10% 90%, #f0e9ff 0%, transparent 60%), #fbfdff;
          color: #0e2230;
        }
        #lbs-hero .lbs-inner {
          max-width: 1340px; margin: 0 auto; padding: 0 48px;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 48px; align-items: center; min-height: 70vh;
        }
        #lbs-hero .lbs-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 600; letter-spacing: 0.04em;
          color: #21759b; background: #d6ecf6; padding: 6px 12px; border-radius: 999px;
        }
        #lbs-hero .lbs-eyebrow::before {
          content: ""; width: 6px; height: 6px; border-radius: 50%;
          background: #4fd1a8; box-shadow: 0 0 0 4px rgba(79,209,168,0.2);
        }
        #lbs-hero h1 {
          font-size: clamp(44px,7vw,96px); line-height: 0.92; letter-spacing: -0.02em;
          margin: 18px 0; text-wrap: pretty;
        }
        #lbs-hero .lbs-grad {
          background: linear-gradient(120deg, #21759b 0%, #7c6cf2 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        #lbs-hero p { font-size: 18px; line-height: 1.55; color: #1c3a4f; max-width: 52ch; margin: 0 0 28px; }
        #lbs-hero .lbs-cta { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }
        #lbs-hero .lbs-stage {
          position: relative; width: 100%; aspect-ratio: 1/1; max-height: 460px;
          display: flex; align-items: center; justify-content: center; overflow: hidden;
        }
        #lbs-hero .lbs-stage svg { width: 100%; height: 100%; display: block; overflow: visible; text-rendering: geometricPrecision; shape-rendering: geometricPrecision; }

        @keyframes lbs-pin-drop {
          0%   { transform: translate3d(0,-28px,0); opacity: 0; }
          20%  { transform: translate3d(0,0,0);     opacity: 1; }
          32%  { transform: translate3d(0,-8px,0); }
          44%  { transform: translate3d(0,0,0); }
          100% { transform: translate3d(0,0,0);     opacity: 1; }
        }
        @keyframes lbs-pin-shadow {
          0%,18%  { transform: scale(0.4); opacity: 0.15; }
          22%     { transform: scale(1.15); opacity: 0.45; }
          36%     { transform: scale(1);   opacity: 0.32; }
          100%    { transform: scale(1);   opacity: 0.32; }
        }
        @keyframes lbs-sway-a { 0%,100%{transform:rotate(-1.5deg)} 50%{transform:rotate(1.5deg)} }
        @keyframes lbs-sway-b { 0%,100%{transform:rotate(1.5deg)}  50%{transform:rotate(-2deg)} }
        @keyframes lbs-float-y { 0%,100%{transform:translate3d(0,0,0)} 50%{transform:translate3d(0,-6px,0)} }
        @keyframes lbs-steam-rise {
          0%  { transform:translate3d(0,0,0) scale(1);   opacity:0; }
          20% { opacity:0.8; }
          100%{ transform:translate3d(0,-22px,0) scale(1.6); opacity:0; }
        }
        @keyframes lbs-hand-wave { 0%,100%{transform:rotate(-12deg)} 50%{transform:rotate(14deg)} }
        @keyframes lbs-ring-pulse {
          0%  { transform:scale(0.4); opacity:0.55; }
          80% { opacity:0.05; }
          100%{ transform:scale(1.6); opacity:0; }
        }
        @keyframes lbs-star-twinkle {
          0%,60%,100% { opacity:0.85; transform:scale(1); }
          72%          { opacity:1;   transform:scale(1.18); }
          84%          { opacity:0.85; transform:scale(1); }
        }
        @keyframes lbs-dash-flow { to { stroke-dashoffset:-48; } }
        @keyframes lbs-path-trace {
          0%  { stroke-dashoffset:360; }
          50% { stroke-dashoffset:0; }
          100%{ stroke-dashoffset:-360; }
        }
        @keyframes lbs-door-bell {
          0%,88%,100% { transform:rotate(0); }
          92%         { transform:rotate(-8deg); }
          96%         { transform:rotate(6deg); }
        }
        @keyframes lbs-cloud-drift {
          0%  { transform:translate3d(0,0,0); }
          100%{ transform:translate3d(20px,0,0); }
        }

        .lbs-pin       { animation: lbs-pin-drop 5s cubic-bezier(.34,.01,.21,1) infinite; transform-origin: center bottom; transform-box: fill-box; will-change: transform; }
        .lbs-pin-shadow{ animation: lbs-pin-shadow 5s cubic-bezier(.34,.01,.21,1) infinite; transform-origin: center; transform-box: fill-box; }
        .lbs-sway-a    { animation: lbs-sway-a 5s cubic-bezier(.45,.05,.55,.95) infinite; transform-origin: center bottom; transform-box: fill-box; will-change: transform; }
        .lbs-sway-b    { animation: lbs-sway-b 6.5s cubic-bezier(.45,.05,.55,.95) infinite; transform-origin: center bottom; transform-box: fill-box; will-change: transform; }
        .lbs-float-y   { animation: lbs-float-y 6s cubic-bezier(.45,.05,.55,.95) infinite; transform-origin: center; transform-box: fill-box; will-change: transform; }
        .lbs-steam     { animation: lbs-steam-rise 3.4s cubic-bezier(.34,.01,.21,1) infinite; transform-origin: center; transform-box: fill-box; }
        .lbs-hand      { animation: lbs-hand-wave 1.8s cubic-bezier(.45,.05,.55,.95) infinite; transform-origin: 0 0; transform-box: fill-box; }
        .lbs-ring      { animation: lbs-ring-pulse 3.4s cubic-bezier(.25,.6,.35,1) infinite; transform-origin: center; transform-box: fill-box; }
        .lbs-star      { animation: lbs-star-twinkle 3.4s cubic-bezier(.45,.05,.55,.95) infinite; transform-origin: center; transform-box: fill-box; }
        .lbs-dash      { stroke-dasharray:6 6; animation: lbs-dash-flow 2.2s linear infinite; }
        .lbs-trace     { stroke-dasharray:360; stroke-dashoffset:360; animation: lbs-path-trace 6s cubic-bezier(.45,.05,.55,.95) infinite; }
        .lbs-bell      { animation: lbs-door-bell 4s cubic-bezier(.34,.01,.21,1) infinite; transform-origin: center top; transform-box: fill-box; }
        .lbs-cloud     { animation: lbs-cloud-drift 14s ease-in-out infinite alternate; transform-origin: center; transform-box: fill-box; }

        @media (prefers-reduced-motion: reduce) {
          .lbs-pin,.lbs-pin-shadow,.lbs-sway-a,.lbs-sway-b,.lbs-float-y,
          .lbs-steam,.lbs-hand,.lbs-ring,.lbs-star,.lbs-dash,.lbs-trace,
          .lbs-bell,.lbs-cloud { animation: none; }
        }
        @media (max-width: 1100px) {
          #lbs-hero { padding-top: 120px; padding-bottom: 60px; }
          #lbs-hero .lbs-inner { padding: 0 32px; gap: 32px; }
        }
        @media (max-width: 900px) {
          #lbs-hero { padding-top: 100px; padding-bottom: 48px; }
          #lbs-hero .lbs-inner { grid-template-columns: 1fr; padding: 0 24px; gap: 24px; min-height: unset; }
          #lbs-hero .lbs-copy { order: 2; }
          #lbs-hero .lbs-stage { order: 1; max-height: 380px; max-width: 380px; margin: 0 auto; }
        }
        @media (max-width: 600px) {
          #lbs-hero { padding-top: 88px; padding-bottom: 40px; }
          #lbs-hero .lbs-inner { padding: 0 20px; gap: 20px; }
          #lbs-hero h1 { font-size: clamp(34px,9vw,52px); margin: 12px 0; }
          #lbs-hero p { font-size: 15px; margin-bottom: 20px; max-width: unset; }
          #lbs-hero .lbs-cta { flex-direction: column; align-items: stretch; }
          #lbs-hero .lbs-cta .magnetic { width: 100%; }
          #lbs-hero .lbs-cta .btn { justify-content: center; width: 100%; }
          #lbs-hero .lbs-stage { max-height: 300px; max-width: 300px; }
        }
      `}</style>

      <div className="lbs-inner">
        <div className="lbs-copy">
          <span className="lbs-eyebrow">WordPress · Local Business</span>
          <h1>Local Business<br /><span className="lbs-grad">Sites</span></h1>
          <p>A site that actually represents your business. Built with the warmth of your storefront, the clarity of your hours, and the directions your neighbors are searching for right now.</p>
          <div className="lbs-cta">
            <Magnetic>
              <a href="/#contact" className="btn">Build my site <span className="btn-arrow">→</span></a>
            </Magnetic>
            <Magnetic>
              <a href="/#work" className="btn btn-ghost">See examples</a>
            </Magnetic>
          </div>
        </div>

        <div className="lbs-stage" aria-label="A friendly street scene with a local cafe storefront, a map pin, and floating review and hours cards">
          <svg viewBox="0 0 560 560" xmlns="http://www.w3.org/2000/svg" role="img">
            <defs>
              <linearGradient id="lbs-groundGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e6f0f5"/><stop offset="100%" stopColor="#cfdde5"/>
              </linearGradient>
              <linearGradient id="lbs-storeWall" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff"/><stop offset="100%" stopColor="#eef7fc"/>
              </linearGradient>
              <linearGradient id="lbs-awning" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#21759b"/><stop offset="100%" stopColor="#7c6cf2"/>
              </linearGradient>
              <linearGradient id="lbs-awningStripe" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.65"/><stop offset="100%" stopColor="#ffffff" stopOpacity="0.4"/>
              </linearGradient>
              <linearGradient id="lbs-window" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#d6ecf6"/><stop offset="100%" stopColor="#a9d2e8"/>
              </linearGradient>
              <linearGradient id="lbs-door" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1c3a4f"/><stop offset="100%" stopColor="#0c4a63"/>
              </linearGradient>
              <linearGradient id="lbs-pinGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff8a7d"/><stop offset="100%" stopColor="#ff6b5b"/>
              </linearGradient>
              <linearGradient id="lbs-cardPaper" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff"/><stop offset="100%" stopColor="#f7fbfd"/>
              </linearGradient>
              <radialGradient id="lbs-centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7c6cf2" stopOpacity="0.16"/><stop offset="100%" stopColor="#7c6cf2" stopOpacity="0"/>
              </radialGradient>
            </defs>

            {/* Backdrop glow */}
            <circle cx="280" cy="300" r="230" fill="url(#lbs-centerGlow)"/>

            {/* Sky elements */}
            <g id="lbs-sky">
              {/* Sun */}
              <circle cx="450" cy="120" r="60" fill="#ffb74a" opacity="0.30"/>
              <circle cx="450" cy="120" r="36" fill="#ffb74a" opacity="0.85"/>

              {/* Cloud 1 */}
              <g className="lbs-cloud" opacity="0.85">
                <g transform="translate(80 120)" fill="#ffffff">
                  <circle cx="0"  cy="0" r="14"/>
                  <circle cx="14" cy="-4" r="16"/>
                  <circle cx="28" cy="2" r="12"/>
                  <ellipse cx="14" cy="6" rx="26" ry="8"/>
                </g>
              </g>
              {/* Cloud 2 */}
              <g className="lbs-cloud" style={{ animationDelay: '-7s', animationDuration: '18s' }} opacity="0.8">
                <g transform="translate(310 80)" fill="#ffffff">
                  <circle cx="0"  cy="0" r="10"/>
                  <circle cx="12" cy="-3" r="13"/>
                  <circle cx="24" cy="0" r="9"/>
                  <ellipse cx="12" cy="5" rx="20" ry="6"/>
                </g>
              </g>

              {/* Bird 1 */}
              <g transform="translate(200 150)" stroke="#1c3a4f" strokeWidth="1.8" strokeLinecap="round" fill="none">
                <path>
                  <animate attributeName="d"
                    values="M -6 0 Q -3 -4 0 0 Q 3 -4 6 0; M -6 0 Q -3 4 0 0 Q 3 4 6 0; M -6 0 Q -3 -4 0 0 Q 3 -4 6 0"
                    dur="0.9s" repeatCount="indefinite"/>
                </path>
              </g>
              {/* Bird 2 */}
              <g transform="translate(360 175)" stroke="#1c3a4f" strokeWidth="1.6" strokeLinecap="round" fill="none">
                <path>
                  <animate attributeName="d"
                    values="M -5 0 Q -2.5 -3 0 0 Q 2.5 -3 5 0; M -5 0 Q -2.5 3 0 0 Q 2.5 3 5 0; M -5 0 Q -2.5 -3 0 0 Q 2.5 -3 5 0"
                    dur="0.9s" begin="-0.3s" repeatCount="indefinite"/>
                </path>
              </g>
            </g>

            {/* Back buildings */}
            <g id="lbs-buildings" opacity="0.85">
              <rect x="40"  y="220" width="70"  height="180" rx="3" fill="#cfdde5"/>
              <rect x="48"  y="232" width="14"  height="14"  fill="#eef7fc"/>
              <rect x="68"  y="232" width="14"  height="14"  fill="#eef7fc"/>
              <rect x="88"  y="232" width="14"  height="14"  fill="#eef7fc"/>
              <rect x="48"  y="252" width="14"  height="14"  fill="#eef7fc" opacity="0.7"/>
              <rect x="68"  y="252" width="14"  height="14"  fill="#eef7fc" opacity="0.7"/>
              <rect x="88"  y="252" width="14"  height="14"  fill="#eef7fc"/>
              <path d="M 40 220 L 75 200 L 110 220 Z" fill="#a4b9c5"/>

              <rect x="120" y="250" width="120" height="150" rx="3" fill="#c5d4dd"/>
              <rect x="130" y="262" width="100" height="22" rx="2" fill="#eef7fc" opacity="0.8"/>
              <path d="M 120 250 H 240 L 230 234 H 130 Z" fill="#9eb3bf"/>

              <rect x="430" y="200" width="90" height="200" rx="3" fill="#cfd9e3"/>
              <rect x="440" y="216" width="14" height="14" fill="#eef7fc"/>
              <rect x="460" y="216" width="14" height="14" fill="#eef7fc" opacity="0.7"/>
              <rect x="480" y="216" width="14" height="14" fill="#eef7fc"/>
              <rect x="500" y="216" width="14" height="14" fill="#eef7fc" opacity="0.6"/>
              <rect x="440" y="236" width="14" height="14" fill="#eef7fc" opacity="0.5"/>
              <rect x="460" y="236" width="14" height="14" fill="#eef7fc"/>
              <rect x="480" y="236" width="14" height="14" fill="#eef7fc" opacity="0.7"/>
              <rect x="500" y="236" width="14" height="14" fill="#eef7fc"/>
              <rect x="440" y="256" width="14" height="14" fill="#eef7fc"/>
              <rect x="460" y="256" width="14" height="14" fill="#eef7fc" opacity="0.6"/>
              <rect x="480" y="256" width="14" height="14" fill="#eef7fc" opacity="0.4"/>
              <rect x="500" y="256" width="14" height="14" fill="#eef7fc" opacity="0.7"/>
            </g>

            {/* Trees */}
            <g id="lbs-trees">
              <g className="lbs-sway-a">
                <g transform="translate(70 410)">
                  <rect x="-3" y="0" width="6" height="22" fill="#1c3a4f"/>
                  <circle cx="0"   cy="-8" r="20" fill="#4fd1a8"/>
                  <circle cx="-12" cy="-2" r="14" fill="#3fb98d"/>
                  <circle cx="12"  cy="-2" r="14" fill="#7ee0bf"/>
                </g>
              </g>
              <g className="lbs-sway-b">
                <g transform="translate(490 414)">
                  <rect x="-3" y="0" width="6" height="22" fill="#1c3a4f"/>
                  <circle cx="0"   cy="-6" r="18" fill="#7ee0bf"/>
                  <circle cx="-10" cy="0"  r="12" fill="#3fb98d"/>
                  <circle cx="10"  cy="0"  r="12" fill="#4fd1a8"/>
                </g>
              </g>
            </g>

            {/* Ground / sidewalk */}
            <g id="lbs-ground">
              <path d="M 40 432 Q 280 425 520 432 L 520 540 Q 280 548 40 540 Z" fill="url(#lbs-groundGrad)" opacity="0.85"/>
              <g stroke="#a4b9c5" strokeWidth="1" opacity="0.55">
                <path d="M 80 460 H 500"/>
                <path d="M 130 490 H 480"/>
                <path d="M 110 520 H 460"/>
              </g>
              <g fill="#a4b9c5" opacity="0.6">
                <circle cx="80"  cy="475" r="1.4"/>
                <circle cx="160" cy="500" r="1.4"/>
                <circle cx="240" cy="485" r="1.4"/>
                <circle cx="320" cy="510" r="1.4"/>
                <circle cx="400" cy="490" r="1.4"/>
                <circle cx="480" cy="510" r="1.4"/>
              </g>
              {/* Walking path trace */}
              <path className="lbs-trace"
                d="M 50 530 C 130 510, 200 480, 270 460"
                fill="none" stroke="#7c6cf2" strokeWidth="2.4" strokeLinecap="round" opacity="0.55"/>
            </g>

            {/* Storefront */}
            <g id="lbs-store">
              <ellipse cx="280" cy="432" rx="160" ry="8" fill="#0e2230" opacity="0.10"/>

              <rect x="180" y="252" width="200" height="180" rx="6" fill="url(#lbs-storeWall)" stroke="#cfdde5" strokeWidth="1.5"/>
              <rect x="172" y="248" width="216" height="10" rx="2" fill="#0c4a63"/>
              <rect x="172" y="244" width="216" height="6"  rx="1.5" fill="#135e7c"/>

              {/* Awning */}
              <g transform="translate(180 258)">
                <rect x="0" y="0" width="200" height="30" fill="url(#lbs-awning)"/>
                <rect x="10"  y="0" width="14" height="30" fill="url(#lbs-awningStripe)" opacity="0.9"/>
                <rect x="38"  y="0" width="14" height="30" fill="url(#lbs-awningStripe)" opacity="0.9"/>
                <rect x="66"  y="0" width="14" height="30" fill="url(#lbs-awningStripe)" opacity="0.9"/>
                <rect x="94"  y="0" width="14" height="30" fill="url(#lbs-awningStripe)" opacity="0.9"/>
                <rect x="122" y="0" width="14" height="30" fill="url(#lbs-awningStripe)" opacity="0.9"/>
                <rect x="150" y="0" width="14" height="30" fill="url(#lbs-awningStripe)" opacity="0.9"/>
                <rect x="178" y="0" width="14" height="30" fill="url(#lbs-awningStripe)" opacity="0.9"/>
                <path d="M 0 30 q 7 10 14 0 q 7 10 14 0 q 7 10 14 0 q 7 10 14 0 q 7 10 14 0 q 7 10 14 0 q 7 10 14 0 q 7 10 14 0 q 7 10 14 0 q 7 10 14 0 q 7 10 14 0 q 7 10 14 0 q 7 10 14 0 q 7 10 14 0 L 200 30 Z"
                      fill="url(#lbs-awning)"/>
              </g>

              {/* Sign board */}
              <g className="lbs-float-y">
                <rect x="220" y="298" width="120" height="26" rx="6" fill="#ffffff" stroke="#cfdde5" strokeWidth="1.6"/>
                <g transform="translate(232 311)" fill="#21759b">
                  <ellipse cx="0" cy="0" rx="6" ry="4"/>
                  <path d="M -4 -2 Q 0 0 4 2" stroke="#ffffff" strokeWidth="1.2" fill="none"/>
                </g>
                <rect x="246" y="305" width="80" height="6" rx="2" fill="#0e2230"/>
                <rect x="246" y="315" width="56" height="4" rx="2" fill="#7c6cf2"/>
              </g>

              {/* Left window */}
              <g>
                <rect x="200" y="334" width="64" height="80" rx="4" fill="url(#lbs-window)" stroke="#0c4a63" strokeWidth="1.5"/>
                <path d="M 232 334 V 414" stroke="#0c4a63" strokeWidth="1.5"/>
                <path d="M 200 374 H 264" stroke="#0c4a63" strokeWidth="1.5"/>
                <path d="M 206 340 L 226 340 L 206 360 Z" fill="#ffffff" opacity="0.55"/>
                <rect x="208" y="408" width="22" height="10" rx="2" fill="#0c4a63"/>
                <g className="lbs-sway-a" style={{ animationDuration: '5s' }}>
                  <g transform="translate(219 408)">
                    <path d="M 0 0 Q -6 -8 -10 -14" stroke="#3fb98d" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    <path d="M 0 0 Q  6 -8  10 -14" stroke="#3fb98d" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    <circle cx="-10" cy="-14" r="3" fill="#4fd1a8"/>
                    <circle cx="10"  cy="-14" r="3" fill="#4fd1a8"/>
                    <circle cx="0"   cy="-10" r="3" fill="#7ee0bf"/>
                  </g>
                </g>
                {/* OPEN sign */}
                <g className="lbs-bell">
                  <line x1="232" y1="334" x2="232" y2="346" stroke="#0c4a63" strokeWidth="0.8"/>
                  <rect x="216" y="346" width="32" height="14" rx="3" fill="#ff6b5b" stroke="#9b3526" strokeWidth="1"/>
                  <rect x="220" y="350" width="24" height="3" rx="1.5" fill="#ffffff"/>
                  <rect x="222" y="355" width="20" height="2" rx="1" fill="#ffffff" opacity="0.8"/>
                </g>
              </g>

              {/* Door */}
              <g>
                <rect x="270" y="338" width="40" height="94" rx="5" fill="url(#lbs-door)" stroke="#0e2230" strokeWidth="1.6"/>
                <rect x="278" y="346" width="24" height="28" rx="3" fill="url(#lbs-window)" stroke="#0e2230"/>
                <path d="M 290 346 V 374" stroke="#0e2230"/>
                <circle cx="302" cy="392" r="2" fill="#ffb74a"/>
                <rect x="266" y="430" width="48" height="6" rx="1" fill="#7c6cf2"/>
                <rect x="262" y="434" width="56" height="3" fill="#0c4a63"/>
              </g>

              {/* Right window */}
              <g>
                <rect x="316" y="334" width="56" height="80" rx="4" fill="url(#lbs-window)" stroke="#0c4a63" strokeWidth="1.5"/>
                <path d="M 344 334 V 414" stroke="#0c4a63" strokeWidth="1.5"/>
                <path d="M 316 374 H 372" stroke="#0c4a63" strokeWidth="1.5"/>
                <path d="M 322 340 L 340 340 L 322 358 Z" fill="#ffffff" opacity="0.55"/>
                <rect x="322" y="394" width="14" height="10" rx="2" fill="#ff6b5b"/>
                <rect x="340" y="392" width="12" height="12" rx="2" fill="#7c6cf2"/>
                <rect x="356" y="396" width="12" height="8" rx="2" fill="#ffb74a"/>
                <g>
                  <rect x="320" y="382" width="48" height="8" rx="4" fill="#ffffff" stroke="#cfdde5" strokeWidth="0.8"/>
                  <circle cx="326" cy="386" r="1.4" fill="#3fb98d"/>
                  <rect x="332" y="384" width="32" height="4" rx="1.5" fill="#0e2230"/>
                </g>
              </g>

              {/* Chalkboard sign */}
              <g className="lbs-sway-a" style={{ animationDuration: '7s' }}>
                <g transform="translate(146 432)">
                  <path d="M 0 0 L -10 -32 L 22 -32 L 12 0 Z" fill="#0e2230" stroke="#000000" strokeWidth="1.4" strokeLinejoin="round"/>
                  <rect x="-6" y="-28" width="22" height="22" rx="2" fill="#0c4a63"/>
                  <rect x="-4" y="-25" width="16" height="2" rx="1" fill="#ffb74a"/>
                  <rect x="-4" y="-21" width="12" height="1.6" rx="0.8" fill="#ffffff" opacity="0.7"/>
                  <rect x="-4" y="-17" width="14" height="1.6" rx="0.8" fill="#ffffff" opacity="0.7"/>
                  <rect x="-4" y="-13" width="10" height="1.6" rx="0.8" fill="#ffffff" opacity="0.7"/>
                  <path d="M 14 -22 q -3 -3 -6 0 q 3 4 6 7 q 3 -3 6 -7 q -3 -3 -6 0 Z" fill="#ff6b5b"/>
                </g>
              </g>

              {/* Bicycle */}
              <g transform="translate(395 410)" fill="none" stroke="#0e2230" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="0"  cy="14" r="10"/>
                <circle cx="32" cy="14" r="10"/>
                <path d="M 0 14 L 14 -2 L 28 -2 L 32 14"/>
                <path d="M 14 -2 L 22 14"/>
                <path d="M 28 -2 L 30 -8 L 38 -8" strokeWidth="1.4"/>
                <g strokeWidth="0.8" opacity="0.7">
                  <path d="M 0 4 L 0 24"/>
                  <path d="M -10 14 L 10 14"/>
                  <path d="M 32 4 L 32 24"/>
                  <path d="M 22 14 L 42 14"/>
                </g>
              </g>

              {/* Chimney + steam */}
              <g transform="translate(360 248)">
                <rect x="-6" y="-18" width="14" height="20" rx="2" fill="#0c4a63"/>
                <rect x="-8" y="-22" width="18" height="6"  rx="2" fill="#1c3a4f"/>
                <g fill="#ffffff" opacity="0.85">
                  <circle className="lbs-steam" cx="0" cy="-22" r="5"/>
                  <circle className="lbs-steam" style={{ animationDelay: '-1.1s' }} cx="-4" cy="-26" r="4"/>
                  <circle className="lbs-steam" style={{ animationDelay: '-2.2s' }} cx="4" cy="-24" r="3.5"/>
                </g>
              </g>
            </g>

            {/* Map pin */}
            <g id="lbs-pin" transform="translate(280 232)">
              <ellipse className="lbs-pin-shadow" cx="0" cy="218" rx="20" ry="5" fill="#0e2230"/>
              <g className="lbs-pin">
                <path d="M 0 0 C -22 0, -34 18, -34 38 C -34 62, -8 90, 0 100 C 8 90, 34 62, 34 38 C 34 18, 22 0, 0 0 Z"
                      fill="url(#lbs-pinGrad)" stroke="#d04a3a" strokeWidth="1.6"/>
                <path d="M -16 14 Q -22 26, -16 42" fill="none" stroke="#ffffff" strokeWidth="2.2" opacity="0.55" strokeLinecap="round"/>
                <circle cx="0" cy="38" r="13" fill="#ffffff"/>
                <g transform="translate(0 38)" fill="none" stroke="#ff6b5b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M -7 4 V -2 L 0 -7 L 7 -2 V 4 Z"/>
                  <path d="M -3 4 V 0 H 3 V 4"/>
                </g>
              </g>
              <g transform="translate(0 100)">
                <circle className="lbs-ring" r="20" fill="none" stroke="#ff6b5b" strokeWidth="2"/>
                <circle className="lbs-ring" style={{ animationDelay: '1.4s' }} r="20" fill="none" stroke="#7c6cf2" strokeWidth="2"/>
              </g>
            </g>

            {/* Hours card */}
            <g id="lbs-card-hours" transform="translate(116 168) rotate(-7)">
              <g className="lbs-float-y">
                <rect x="-58" y="-36" width="116" height="72" rx="10" fill="url(#lbs-cardPaper)" stroke="#cfdde5" strokeWidth="1.6"/>
                <rect x="-12" y="-44" width="24" height="10" fill="#ffb74a" opacity="0.7" transform="rotate(-4)"/>
                <g transform="translate(-38 0)" fill="none" stroke="#3fb98d" strokeWidth="2" strokeLinecap="round">
                  <circle r="11" fill="#e8f8f0"/>
                  <path d="M 0 -7 V 0 L 5 4"/>
                </g>
                <rect x="-22" y="-16" width="64" height="6" rx="2" fill="#0e2230"/>
                <rect x="-22" y="-6"  width="48" height="4" rx="2" fill="#7c6cf2"/>
                <rect x="-22" y="6"   width="32" height="3" rx="1.5" fill="#cfdde5"/>
                <rect x="14"  y="6"   width="22" height="3" rx="1.5" fill="#3fb98d"/>
                <rect x="-22" y="14"  width="32" height="3" rx="1.5" fill="#cfdde5"/>
                <rect x="14"  y="14"  width="22" height="3" rx="1.5" fill="#3fb98d"/>
                <rect x="-22" y="22"  width="32" height="3" rx="1.5" fill="#cfdde5"/>
                <rect x="14"  y="22"  width="14" height="3" rx="1.5" fill="#ff6b5b"/>
              </g>
            </g>

            {/* Review card */}
            <g id="lbs-card-review" transform="translate(456 142) rotate(8)">
              <g className="lbs-float-y" style={{ animationDelay: '-2s' }}>
                <rect x="-58" y="-36" width="116" height="72" rx="10" fill="url(#lbs-cardPaper)" stroke="#cfdde5" strokeWidth="1.6"/>
                <rect x="-14" y="-44" width="28" height="10" fill="#7c6cf2" opacity="0.6" transform="rotate(6)"/>
                <circle cx="-38" cy="-14" r="10" fill="#7c6cf2"/>
                <path d="M -44 -2 a 6 4 0 0 1 12 0" fill="#7c6cf2"/>
                <rect x="-22" y="-20" width="56" height="6" rx="2" fill="#0e2230"/>
                <rect x="-22" y="-10" width="36" height="3" rx="1.5" fill="#7c6cf2"/>
                <g fill="#ffb74a">
                  <g className="lbs-star">
                    <path d="M -36 14 l 1.6 3.4 l 3.6 .4 l -2.6 2.4 l .8 3.6 l -3.4 -1.8 l -3.4 1.8 l .8 -3.6 l -2.6 -2.4 l 3.6 -.4 Z"/>
                  </g>
                  <g className="lbs-star" style={{ animationDelay: '-.3s' }}>
                    <path d="M -20 14 l 1.6 3.4 l 3.6 .4 l -2.6 2.4 l .8 3.6 l -3.4 -1.8 l -3.4 1.8 l .8 -3.6 l -2.6 -2.4 l 3.6 -.4 Z"/>
                  </g>
                  <g className="lbs-star" style={{ animationDelay: '-.6s' }}>
                    <path d="M -4 14 l 1.6 3.4 l 3.6 .4 l -2.6 2.4 l .8 3.6 l -3.4 -1.8 l -3.4 1.8 l .8 -3.6 l -2.6 -2.4 l 3.6 -.4 Z"/>
                  </g>
                  <g className="lbs-star" style={{ animationDelay: '-.9s' }}>
                    <path d="M 12 14 l 1.6 3.4 l 3.6 .4 l -2.6 2.4 l .8 3.6 l -3.4 -1.8 l -3.4 1.8 l .8 -3.6 l -2.6 -2.4 l 3.6 -.4 Z"/>
                  </g>
                  <g className="lbs-star" style={{ animationDelay: '-1.2s' }}>
                    <path d="M 28 14 l 1.6 3.4 l 3.6 .4 l -2.6 2.4 l .8 3.6 l -3.4 -1.8 l -3.4 1.8 l .8 -3.6 l -2.6 -2.4 l 3.6 -.4 Z"/>
                  </g>
                </g>
                <rect x="-22" y="2" width="68" height="3" rx="1.5" fill="#7c6cf2"/>
              </g>
            </g>

            {/* Directions card */}
            <g id="lbs-card-directions" transform="translate(120 460) rotate(-4)">
              <g className="lbs-float-y" style={{ animationDelay: '-1s' }}>
                <rect x="-60" y="-36" width="120" height="72" rx="10" fill="url(#lbs-cardPaper)" stroke="#cfdde5" strokeWidth="1.6"/>
                <rect x="-52" y="-28" width="104" height="56" rx="6" fill="#eef7fc"/>
                <g stroke="#cfdde5" strokeWidth="2" strokeLinecap="round">
                  <path d="M -52 -10 H 52"/>
                  <path d="M -52 8 H 52"/>
                  <path d="M -22 -28 V 28"/>
                  <path d="M 18 -28 V 28"/>
                </g>
                <path d="M -52 -22 Q -20 -16 0 -22 Q 30 -28 52 -16" stroke="#7c6cf2" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.45"/>
                <path d="M -44 22 L -44 8 L -22 8 L -22 -10 L 18 -10 L 18 -2"
                      className="lbs-dash" stroke="#ff6b5b" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                <g transform="translate(18 -2)" fill="#ff6b5b">
                  <path d="M 0 0 C -4 0 -7 3 -7 7 C -7 12 0 18 0 18 C 0 18 7 12 7 7 C 7 3 4 0 0 0 Z"/>
                  <circle cx="0" cy="7" r="2.4" fill="#ffffff"/>
                </g>
                <circle cx="-44" cy="22" r="3.4" fill="#3fb98d" stroke="#ffffff" strokeWidth="1.4"/>
              </g>
            </g>

            {/* Phone card */}
            <g id="lbs-card-phone" transform="translate(454 482) rotate(6)">
              <g className="lbs-float-y" style={{ animationDelay: '-3s' }}>
                <rect x="-50" y="-30" width="100" height="60" rx="10" fill="url(#lbs-cardPaper)" stroke="#cfdde5" strokeWidth="1.6"/>
                <g transform="translate(-32 0)" fill="#3fb98d" stroke="#ffffff" strokeWidth="1.2" strokeLinejoin="round">
                  <path d="M -8 -8 q 0 -4 4 -4 h 4 q 4 0 4 4 l 2 6 -4 4 q 4 8 12 12 l 4 -4 6 2 q 4 0 4 4 v 4 q 0 4 -4 4 c -16 0 -32 -16 -32 -32 Z" transform="scale(0.5)"/>
                </g>
                <rect x="-16" y="-12" width="56" height="6" rx="2" fill="#0e2230"/>
                <rect x="-16" y="-2"  width="40" height="4" rx="2" fill="#7c6cf2"/>
                <g className="lbs-float-y" style={{ animationDelay: '-1s', animationDuration: '3.6s' }}>
                  <rect x="-16" y="8" width="56" height="14" rx="7" fill="#21759b"/>
                  <path d="M -8 15 l 4 -3 v 6 z" fill="#ffffff"/>
                  <rect x="0" y="13" width="32" height="4" rx="2" fill="#ffffff"/>
                </g>
                <rect x="-12" y="-38" width="24" height="10" fill="#ff6b5b" opacity="0.65" transform="rotate(-5)"/>
              </g>
            </g>

            {/* Waving shopkeeper */}
            <g id="lbs-shopkeeper" transform="translate(232 384)">
              <circle cx="0" cy="0" r="8" fill="#f4c79d"/>
              <path d="M -8 -3 Q -6 -10 0 -10 Q 6 -10 8 -3 L 6 -2 Q 4 -6 0 -6 Q -4 -6 -6 -2 Z" fill="#0c4a63"/>
              <path d="M -10 8 Q -8 14 0 14 Q 8 14 10 8 L 10 18 H -10 Z" fill="#21759b"/>
              <path d="M -3 8 V 18 M 3 8 V 18" stroke="#ffffff" strokeWidth="1.4"/>
              <circle cx="-2.6" cy="-1" r="0.9" fill="#0e2230"/>
              <circle cx="2.6"  cy="-1" r="0.9" fill="#0e2230"/>
              <path d="M -2 3 Q 0 5 2 3" stroke="#0e2230" strokeWidth="1" fill="none" strokeLinecap="round"/>
              <g className="lbs-hand">
                <g transform="translate(8 6)">
                  <path d="M 0 0 L 12 -10" stroke="#f4c79d" strokeWidth="4" strokeLinecap="round"/>
                  <circle cx="13" cy="-11" r="3.2" fill="#f4c79d"/>
                </g>
              </g>
            </g>

            {/* String lights */}
            <g id="lbs-lights">
              <path d="M 70 380 Q 200 340 280 248" fill="none" stroke="#1c3a4f" strokeWidth="1" opacity="0.5"/>
              <path d="M 280 248 Q 380 340 490 380" fill="none" stroke="#1c3a4f" strokeWidth="1" opacity="0.5"/>
              <g>
                <circle cx="120" cy="356" r="3" fill="#ffb74a"/>
                <circle cx="170" cy="332" r="3" fill="#ff6b5b"/>
                <circle cx="220" cy="304" r="3" fill="#7c6cf2"/>
                <circle cx="340" cy="304" r="3" fill="#3fb98d"/>
                <circle cx="390" cy="332" r="3" fill="#ffb74a"/>
                <circle cx="440" cy="356" r="3" fill="#ff6b5b"/>
              </g>
              <g className="lbs-star" style={{ animationDuration: '2.4s' }}>
                <circle cx="120" cy="356" r="5" fill="#ffb74a" opacity="0.45"/>
              </g>
              <g className="lbs-star" style={{ animationDuration: '2.6s', animationDelay: '-.7s' }}>
                <circle cx="220" cy="304" r="5" fill="#7c6cf2" opacity="0.45"/>
              </g>
              <g className="lbs-star" style={{ animationDuration: '2.4s', animationDelay: '-1.3s' }}>
                <circle cx="340" cy="304" r="5" fill="#3fb98d" opacity="0.45"/>
              </g>
              <g className="lbs-star" style={{ animationDuration: '2.6s', animationDelay: '-1.8s' }}>
                <circle cx="440" cy="356" r="5" fill="#ff6b5b" opacity="0.45"/>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
