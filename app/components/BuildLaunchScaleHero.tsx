'use client';

import { Magnetic } from './primitives';

export function BuildLaunchScaleHero() {
  return (
    <section id="bls-hero">
      <style>{`
        #bls-hero {
          padding-top: 140px; padding-bottom: 80px;
          background: radial-gradient(1200px 600px at 80% 20%, #eef7fc 0%, transparent 60%),
                      radial-gradient(900px 500px at 10% 90%, #f0e9ff 0%, transparent 60%), #fbfdff;
          color: #0e2230;
        }
        #bls-hero .bls-inner {
          max-width: 1340px; margin: 0 auto; padding: 0 48px;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 48px; align-items: center; min-height: 70vh;
        }
        #bls-hero .bls-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 600; letter-spacing: 0.04em;
          color: #21759b; background: #d6ecf6; padding: 6px 12px; border-radius: 999px;
        }
        #bls-hero .bls-eyebrow::before {
          content: ""; width: 6px; height: 6px; border-radius: 50%;
          background: #4fd1a8; box-shadow: 0 0 0 4px rgba(79,209,168,0.2);
        }
        #bls-hero h1 {
          font-size: clamp(44px,7vw,96px); line-height: 0.92; letter-spacing: -0.02em;
          margin: 18px 0; text-wrap: pretty;
        }
        #bls-hero .bls-grad {
          background: linear-gradient(120deg, #21759b 0%, #7c6cf2 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        #bls-hero p { font-size: 18px; line-height: 1.55; color: #1c3a4f; max-width: 52ch; margin: 0 0 28px; }
        #bls-hero .bls-cta { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }
        #bls-hero .bls-stage {
          position: relative; width: 100%; aspect-ratio: 1/1; max-height: 460px;
          display: flex; align-items: center; justify-content: center; overflow: hidden;
        }
        #bls-hero .bls-stage svg { width: 100%; height: 100%; display: block; overflow: visible; text-rendering: geometricPrecision; shape-rendering: geometricPrecision; -webkit-font-smoothing: antialiased; }

        @keyframes bls-ring-pulse { 0%{transform:scale(.85);opacity:.55} 80%{opacity:.05} 100%{transform:scale(1.55);opacity:0} }
        @keyframes bls-spin { to{transform:rotate(360deg)} }
        @keyframes bls-orbit-anim { to{transform:rotate(360deg)} }
        @keyframes bls-orbit-rev-anim { to{transform:rotate(-360deg)} }
        @keyframes bls-bar-grow { 0%{transform:scaleY(.2)} 100%{transform:scaleY(1)} }
        @keyframes bls-line-draw { to{stroke-dashoffset:0} }
        @keyframes bls-dash { to{stroke-dashoffset:-48} }
        @keyframes bls-pop-dot { 0%,100%{opacity:.35;transform:scale(.9)} 50%{opacity:1;transform:scale(1.05)} }
        @keyframes bls-shimmer-x { 0%{transform:translateX(-80px)} 100%{transform:translateX(260px)} }

        .bls-ring { animation: bls-ring-pulse 3.2s cubic-bezier(.25,.6,.35,1) infinite; transform-origin: center; transform-box: fill-box; }
        .bls-spin { animation: bls-spin 24s linear infinite; transform-origin: center; transform-box: fill-box; }
        .bls-orbit { animation: bls-orbit-anim 32s linear infinite; transform-origin: 280px 280px; }
        .bls-orbit-rev { animation: bls-orbit-rev-anim 38s linear infinite; transform-origin: 280px 280px; }
        .bls-bar { transform-origin: bottom center; transform-box: fill-box; animation: bls-bar-grow 3.4s cubic-bezier(.34,.01,.21,1) infinite alternate; }
        .bls-line { stroke-dasharray: 280; stroke-dashoffset: 280; animation: bls-line-draw 4s cubic-bezier(.34,.01,.21,1) infinite alternate; }
        .bls-dash { stroke-dasharray: 6 6; animation: bls-dash 2.2s linear infinite; }
        .bls-dot { animation: bls-pop-dot 3s cubic-bezier(.45,.05,.55,.95) infinite; transform-origin: center; transform-box: fill-box; }
        .bls-shimmer { animation: bls-shimmer-x 4s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .bls-ring,.bls-spin,.bls-orbit,.bls-orbit-rev,.bls-bar,.bls-line,.bls-dash,.bls-dot,.bls-shimmer { animation: none; }
          .bls-line { stroke-dashoffset: 0; }
        }
        @media (max-width: 1100px) {
          #bls-hero { padding-top: 120px; padding-bottom: 60px; }
          #bls-hero .bls-inner { padding: 0 32px; gap: 32px; }
        }
        @media (max-width: 900px) {
          #bls-hero { padding-top: 100px; padding-bottom: 48px; }
          #bls-hero .bls-inner { grid-template-columns: 1fr; padding: 0 24px; gap: 24px; min-height: unset; }
          #bls-hero .bls-copy { order: 2; }
          #bls-hero .bls-stage { order: 1; max-height: 380px; }
        }
        @media (max-width: 600px) {
          #bls-hero { padding-top: 88px; padding-bottom: 40px; }
          #bls-hero .bls-inner { padding: 0 20px; gap: 20px; }
          #bls-hero h1 { font-size: clamp(34px,9vw,52px); margin: 12px 0; }
          #bls-hero p { font-size: 15px; margin-bottom: 20px; max-width: unset; }
          #bls-hero .bls-cta { flex-direction: column; align-items: stretch; }
          #bls-hero .bls-cta .magnetic { width: 100%; }
          #bls-hero .bls-cta .btn { justify-content: center; width: 100%; }
          #bls-hero .bls-stage { max-height: 320px; }
        }
      `}</style>

      <div className="bls-inner">
        <div className="bls-copy">
          <span className="bls-eyebrow">WordPress · LMS · Web Apps</span>
          <h1>Build, launch &amp;<br /><span className="bls-grad">scale</span> your business online.</h1>
          <p>High-performing WordPress, LMS &amp; web app builds for education and ecommerce — engineered with senior-level craft, without the agency price tag.</p>
          <div className="bls-cta">
            <Magnetic>
              <a href="#contact" className="btn">Book a strategy call <span className="btn-arrow">→</span></a>
            </Magnetic>
            <Magnetic>
              <a href="#work" className="btn btn-ghost">View my work</a>
            </Magnetic>
          </div>
        </div>

        <div className="bls-stage" aria-label="Central dashboard with growth chart, orbited by build, launch, and scale modules">
          <svg viewBox="0 0 560 560" xmlns="http://www.w3.org/2000/svg" role="img">
            <defs>
              <linearGradient id="bls-hubBg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff"/><stop offset="100%" stopColor="#f3f8fb"/>
              </linearGradient>
              <linearGradient id="bls-hubHeader" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#21759b"/><stop offset="100%" stopColor="#7c6cf2"/>
              </linearGradient>
              <linearGradient id="bls-barBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4a9bc4"/><stop offset="100%" stopColor="#21759b"/>
              </linearGradient>
              <linearGradient id="bls-barViolet" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9d8ff8"/><stop offset="100%" stopColor="#6a58e6"/>
              </linearGradient>
              <linearGradient id="bls-barMint" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7ee0bf"/><stop offset="100%" stopColor="#3fb98d"/>
              </linearGradient>
              <linearGradient id="bls-chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7c6cf2" stopOpacity="0.45"/><stop offset="100%" stopColor="#7c6cf2" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="bls-modBuild" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4a9bc4"/><stop offset="100%" stopColor="#21759b"/>
              </linearGradient>
              <linearGradient id="bls-modLaunch" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff8a7d"/><stop offset="100%" stopColor="#ff6b5b"/>
              </linearGradient>
              <linearGradient id="bls-modScale" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9d8ff8"/><stop offset="100%" stopColor="#7c6cf2"/>
              </linearGradient>
              <linearGradient id="bls-modLms" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7ee0bf"/><stop offset="100%" stopColor="#3fb98d"/>
              </linearGradient>
              <linearGradient id="bls-modShop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffd06b"/><stop offset="100%" stopColor="#f5a623"/>
              </linearGradient>
              <radialGradient id="bls-centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7c6cf2" stopOpacity="0.18"/><stop offset="100%" stopColor="#7c6cf2" stopOpacity="0"/>
              </radialGradient>
              <linearGradient id="bls-shimmerGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="white" stopOpacity="0"/>
                <stop offset="50%" stopColor="white" stopOpacity="0.5"/>
                <stop offset="100%" stopColor="white" stopOpacity="0"/>
              </linearGradient>
              <clipPath id="bls-hubClip"><rect x="170" y="170" width="220" height="220" rx="18"/></clipPath>
            </defs>

            <circle cx="280" cy="280" r="240" fill="url(#bls-centerGlow)"/>
            <circle cx="280" cy="280" r="200" fill="none" stroke="#cfdde5" strokeWidth="1" strokeDasharray="2 6" opacity="0.7"/>
            <circle cx="280" cy="280" r="248" fill="none" stroke="#cfdde5" strokeWidth="1" strokeDasharray="2 6" opacity="0.5"/>
            <g className="bls-orbit">
              <circle cx="480" cy="280" r="3" fill="#21759b"/>
              <circle cx="80" cy="280" r="3" fill="#7c6cf2"/>
              <circle cx="280" cy="80" r="2.4" fill="#3fb98d"/>
            </g>
            <g className="bls-orbit-rev">
              <circle cx="280" cy="528" r="2.4" fill="#ffb74a"/>
              <circle cx="421" cy="421" r="2" fill="#ef6ea8"/>
              <circle cx="139" cy="139" r="2" fill="#21759b" opacity="0.7"/>
            </g>
            <g transform="translate(280 280)">
              <circle className="bls-ring" r="120" fill="none" stroke="#7c6cf2" strokeWidth="1.6" opacity="0.5"/>
              <circle className="bls-ring" style={{ animationDelay: '1.3s' }} r="120" fill="none" stroke="#21759b" strokeWidth="1.6" opacity="0.5"/>
            </g>

            {/* Center hub — dashboard card with animateTransform float */}
            <g>
              <g>
                <animateTransform attributeName="transform" type="translate" values="0 0; 0 -8; 0 0" dur="8s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0.05 0.55 0.95; 0.45 0.05 0.55 0.95"/>
                <rect x="174" y="178" width="220" height="220" rx="18" fill="#0c4a63" opacity="0.10"/>
                <rect x="170" y="170" width="220" height="220" rx="18" fill="url(#bls-hubBg)" stroke="#cfdde5"/>
                <rect x="170" y="170" width="220" height="40" rx="18" fill="url(#bls-hubHeader)"/>
                <rect x="170" y="192" width="220" height="18" fill="url(#bls-hubHeader)"/>
                <rect x="170" y="200" width="220" height="10" fill="url(#bls-hubHeader)"/>
                <circle cx="186" cy="190" r="3.4" fill="#ffffff" opacity="0.85"/>
                <circle cx="198" cy="190" r="3.4" fill="#ffffff" opacity="0.6"/>
                <circle cx="210" cy="190" r="3.4" fill="#ffffff" opacity="0.4"/>
                <rect x="230" y="187" width="70" height="6" rx="3" fill="#ffffff" opacity="0.85"/>
                <rect x="230" y="196" width="44" height="4" rx="2" fill="#ffffff" opacity="0.5"/>
                <circle cx="372" cy="190" r="4" fill="#4fd1a8"/>
                <circle cx="372" cy="190" r="4" fill="#4fd1a8" opacity="0.4">
                  <animate attributeName="r" values="4;9;4" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite"/>
                </circle>
                <g transform="translate(186 226)">
                  <rect x="0" y="0" width="58" height="5" rx="2.5" fill="#cfdde5"/>
                  <rect x="0" y="10" width="22" height="18" rx="3" fill="#21759b"/>
                  <rect x="26" y="10" width="14" height="18" rx="3" fill="#0e2230"/>
                  <rect x="44" y="10" width="30" height="18" rx="3" fill="#21759b"/>
                  <g transform="translate(120 8)">
                    <rect width="56" height="20" rx="10" fill="#e8f8f0"/>
                    <path d="M 9 13 L 14 7 L 18 11 L 25 4" stroke="#3fb98d" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="30" y="7" width="4" height="6" rx="1" fill="#3fb98d"/>
                    <rect x="36" y="5" width="4" height="8" rx="1" fill="#3fb98d"/>
                    <rect x="42" y="3" width="4" height="10" rx="1" fill="#3fb98d"/>
                  </g>
                </g>
                <g transform="translate(186 280)">
                  <g stroke="#eef3f6" strokeWidth="1">
                    <line x1="0" y1="0" x2="188" y2="0"/>
                    <line x1="0" y1="22" x2="188" y2="22"/>
                    <line x1="0" y1="44" x2="188" y2="44"/>
                    <line x1="0" y1="66" x2="188" y2="66"/>
                    <line x1="0" y1="88" x2="188" y2="88"/>
                  </g>
                  <g>
                    <rect className="bls-bar" x="0" y="56" width="20" height="32" rx="3" fill="url(#bls-barBlue)"/>
                    <rect className="bls-bar" style={{ animationDelay: '.12s' }} x="28" y="48" width="20" height="40" rx="3" fill="url(#bls-barBlue)"/>
                    <rect className="bls-bar" style={{ animationDelay: '.24s' }} x="56" y="52" width="20" height="36" rx="3" fill="url(#bls-barViolet)"/>
                    <rect className="bls-bar" style={{ animationDelay: '.36s' }} x="84" y="36" width="20" height="52" rx="3" fill="url(#bls-barViolet)"/>
                    <rect className="bls-bar" style={{ animationDelay: '.48s' }} x="112" y="26" width="20" height="62" rx="3" fill="url(#bls-barMint)"/>
                    <rect className="bls-bar" style={{ animationDelay: '.60s' }} x="140" y="16" width="20" height="72" rx="3" fill="url(#bls-barMint)"/>
                    <rect className="bls-bar" style={{ animationDelay: '.72s' }} x="168" y="6" width="20" height="82" rx="3" fill="url(#bls-barMint)"/>
                  </g>
                  <path d="M 10 60 L 38 50 L 66 54 L 94 36 L 122 26 L 150 16 L 178 8 L 178 88 L 10 88 Z" fill="url(#bls-chartFill)" opacity="0.7"/>
                  <path className="bls-line" d="M 10 60 L 38 50 L 66 54 L 94 36 L 122 26 L 150 16 L 178 8" fill="none" stroke="#7c6cf2" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="178" cy="8" r="4.5" fill="#ffffff" stroke="#7c6cf2" strokeWidth="2.4"/>
                </g>
                <g clipPath="url(#bls-hubClip)">
                  <rect className="bls-shimmer" y="170" width="60" height="220" fill="url(#bls-shimmerGrad)" opacity="0.55"/>
                </g>
              </g>
            </g>

            {/* Connector lines */}
            <g fill="none" strokeLinecap="round">
              <path d="M 220 196 Q 165 155 128 118" stroke="#21759b" strokeWidth="1.6" opacity="0.3"/>
              <path className="bls-dash" d="M 220 196 Q 165 155 128 118" stroke="#21759b" strokeWidth="1.8"/>
              <path d="M 280 170 L 280 102" stroke="#ff6b5b" strokeWidth="1.6" opacity="0.3"/>
              <path className="bls-dash" style={{ animationDelay: '.3s' }} d="M 280 170 L 280 102" stroke="#ff6b5b" strokeWidth="1.8"/>
              <path d="M 340 196 Q 395 155 432 118" stroke="#7c6cf2" strokeWidth="1.6" opacity="0.3"/>
              <path className="bls-dash" style={{ animationDelay: '.6s' }} d="M 340 196 Q 395 155 432 118" stroke="#7c6cf2" strokeWidth="1.8"/>
              <path d="M 220 364 Q 170 410 138 452" stroke="#3fb98d" strokeWidth="1.6" opacity="0.3"/>
              <path className="bls-dash" style={{ animationDelay: '.9s' }} d="M 220 364 Q 170 410 138 452" stroke="#3fb98d" strokeWidth="1.8"/>
              <path d="M 340 364 Q 390 410 422 452" stroke="#f5a623" strokeWidth="1.6" opacity="0.3"/>
              <path className="bls-dash" style={{ animationDelay: '1.2s' }} d="M 340 364 Q 390 410 422 452" stroke="#f5a623" strokeWidth="1.8"/>
            </g>

            {/* BUILD tile (top-left) */}
            <g>
              <g transform="translate(110 100)">
                <animateTransform attributeName="transform" type="translate" values="110 100; 110 90; 110 100" dur="7s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0.05 0.55 0.95; 0.45 0.05 0.55 0.95"/>
                <path d="M -32 -18 L 0 -36 L 32 -18 L 32 18 L 0 36 L -32 18 Z" fill="url(#bls-modBuild)" stroke="#0c4a63" strokeWidth="1"/>
                <path d="M -28 -16 L 0 -32 L 28 -16" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.3"/>
                <g transform="translate(0 -8)" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
                  <path d="M -12 -2 L 0 -8 L 12 -2 L 0 4 Z"/>
                  <path d="M -12 4 L 0 10 L 12 4"/>
                  <path d="M -12 10 L 0 16 L 12 10"/>
                </g>
                <g transform="translate(0 50)">
                  <circle cx="-8" cy="0" r="2" fill="#21759b" opacity="0.9"/>
                  <circle cx="0" cy="0" r="2" fill="#21759b" opacity="0.5"/>
                  <circle cx="8" cy="0" r="2" fill="#21759b" opacity="0.25"/>
                </g>
              </g>
            </g>

            {/* LAUNCH tile (top-center) */}
            <g>
              <g transform="translate(280 70)">
                <animateTransform attributeName="transform" type="translate" values="280 70; 280 56; 280 70" dur="8s" begin="-0.3s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0.05 0.55 0.95; 0.45 0.05 0.55 0.95"/>
                <path d="M -34 -19 L 0 -38 L 34 -19 L 34 19 L 0 38 L -34 19 Z" fill="url(#bls-modLaunch)" stroke="#c0382e" strokeWidth="1"/>
                <g transform="translate(0 -8)" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 0 -14 Q 6 -8 6 0 L 6 8 L -6 8 L -6 0 Q -6 -8 0 -14 Z" fill="#ffffff" stroke="none" opacity="0.95"/>
                  <circle cx="0" cy="-2" r="2" fill="#ff6b5b" stroke="none"/>
                  <path d="M -6 4 L -10 12 L -6 12" fill="#ffffff" stroke="none"/>
                  <path d="M 6 4 L 10 12 L 6 12" fill="#ffffff" stroke="none"/>
                  <path d="M -2 12 L 0 18 L 2 12" fill="#ffd06b" stroke="none"/>
                </g>
                <g transform="translate(0 52)">
                  <circle cx="-8" cy="0" r="2.2" fill="#ff6b5b" opacity="0.9"/>
                  <circle cx="0" cy="0" r="2.2" fill="#ff6b5b" opacity="0.5"/>
                  <circle cx="8" cy="0" r="2.2" fill="#ff6b5b" opacity="0.25"/>
                </g>
              </g>
            </g>

            {/* SCALE tile (top-right) */}
            <g>
              <g transform="translate(450 100)">
                <animateTransform attributeName="transform" type="translate" values="450 100; 450 92; 450 100" dur="6.5s" begin="-0.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0.05 0.55 0.95; 0.45 0.05 0.55 0.95"/>
                <path d="M -32 -18 L 0 -36 L 32 -18 L 32 18 L 0 36 L -32 18 Z" fill="url(#bls-modScale)" stroke="#5847d4" strokeWidth="1"/>
                <g transform="translate(0 -4)">
                  <rect x="-12" y="2" width="5" height="10" rx="1" fill="#ffffff" opacity="0.95"/>
                  <rect x="-3" y="-2" width="5" height="14" rx="1" fill="#ffffff" opacity="0.95"/>
                  <rect x="6" y="-8" width="5" height="20" rx="1" fill="#ffffff" opacity="0.95"/>
                  <path d="M 10 -12 L 14 -8 L 10 -4" stroke="#ffffff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <g transform="translate(0 50)">
                  <circle cx="-8" cy="0" r="2" fill="#7c6cf2" opacity="0.9"/>
                  <circle cx="0" cy="0" r="2" fill="#7c6cf2" opacity="0.5"/>
                  <circle cx="8" cy="0" r="2" fill="#7c6cf2" opacity="0.25"/>
                </g>
              </g>
            </g>

            {/* LMS tile (bottom-left) */}
            <g>
              <g transform="translate(120 470)">
                <animateTransform attributeName="transform" type="translate" values="120 470; 120 462; 120 470" dur="6.5s" begin="-0.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0.05 0.55 0.95; 0.45 0.05 0.55 0.95"/>
                <path d="M -32 -18 L 0 -36 L 32 -18 L 32 18 L 0 36 L -32 18 Z" fill="url(#bls-modLms)" stroke="#2ea077" strokeWidth="1"/>
                <g transform="translate(0 -2)" fill="#ffffff" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round">
                  <path d="M -14 -2 L 0 -10 L 14 -2 L 0 6 Z"/>
                  <path d="M -8 2 L -8 8 a 8 4 0 0 0 16 0 L 8 2" fill="none"/>
                  <circle cx="12" cy="0" r="1.4"/>
                  <path d="M 12 0 L 12 8" strokeWidth="1.2"/>
                </g>
                <g transform="translate(0 50)">
                  <circle cx="-8" cy="0" r="2" fill="#3fb98d" opacity="0.9"/>
                  <circle cx="0" cy="0" r="2" fill="#3fb98d" opacity="0.5"/>
                  <circle cx="8" cy="0" r="2" fill="#3fb98d" opacity="0.25"/>
                </g>
              </g>
            </g>

            {/* ECOMMERCE tile (bottom-right) */}
            <g>
              <g transform="translate(440 470)">
                <animateTransform attributeName="transform" type="translate" values="440 470; 440 460; 440 470" dur="7s" begin="-1s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0.05 0.55 0.95; 0.45 0.05 0.55 0.95"/>
                <path d="M -32 -18 L 0 -36 L 32 -18 L 32 18 L 0 36 L -32 18 Z" fill="url(#bls-modShop)" stroke="#d68812" strokeWidth="1"/>
                <g transform="translate(0 -4)" stroke="#ffffff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M -12 -8 L -8 -8 L -4 8 L 10 8 L 12 -2 L -6 -2"/>
                  <circle cx="-3" cy="13" r="1.8" fill="#ffffff"/>
                  <circle cx="8" cy="13" r="1.8" fill="#ffffff"/>
                </g>
                <g transform="translate(0 50)">
                  <circle cx="-8" cy="0" r="2" fill="#f5a623" opacity="0.9"/>
                  <circle cx="0" cy="0" r="2" fill="#f5a623" opacity="0.5"/>
                  <circle cx="8" cy="0" r="2" fill="#f5a623" opacity="0.25"/>
                </g>
              </g>
            </g>

            {/* Code chip (top-left atmosphere) with animateTransform float */}
            <g>
              <g transform="translate(40 240)">
                <animateTransform attributeName="transform" type="translate" values="40 240; 40 232; 40 240" dur="6.5s" begin="-0.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0.05 0.55 0.95; 0.45 0.05 0.55 0.95"/>
                <rect width="86" height="28" rx="14" fill="#ffffff" stroke="#cfdde5"/>
                <g transform="translate(15 14)" stroke="#21759b" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M -5 -4 L -9 0 L -5 4"/>
                  <path d="M 5 -4 L 9 0 L 5 4"/>
                  <path d="M -1 5 L 2 -5"/>
                </g>
                <rect x="34" y="10" width="40" height="4" rx="2" fill="#21759b" opacity="0.85"/>
                <rect x="34" y="17" width="28" height="4" rx="2" fill="#cfdde5"/>
              </g>
            </g>

            {/* Spinning gear (top-right) */}
            <g transform="translate(490 250)">
              <g className="bls-spin">
                <circle r="22" fill="#ffffff" stroke="#cfdde5" strokeWidth="1.4"/>
                <circle r="9" fill="#21759b"/>
                <circle r="4" fill="#0c4a63"/>
                <g fill="#21759b">
                  <rect x="-2.5" y="-26" width="5" height="7" rx="1.5"/>
                  <rect x="-2.5" y="19" width="5" height="7" rx="1.5"/>
                  <rect x="-26" y="-2.5" width="7" height="5" rx="1.5"/>
                  <rect x="19" y="-2.5" width="7" height="5" rx="1.5"/>
                  <rect x="-21" y="-21" width="7" height="5" rx="1.5" transform="rotate(45)"/>
                  <rect x="14" y="-21" width="7" height="5" rx="1.5" transform="rotate(45)"/>
                  <rect x="-21" y="16" width="7" height="5" rx="1.5" transform="rotate(45)"/>
                  <rect x="14" y="16" width="7" height="5" rx="1.5" transform="rotate(45)"/>
                </g>
              </g>
            </g>

            <g>
              <circle className="bls-dot" cx="280" cy="40" r="3" fill="#ff6b5b"/>
              <circle className="bls-dot" style={{ animationDelay: '.4s' }} cx="40" cy="370" r="2.5" fill="#21759b"/>
              <circle className="bls-dot" style={{ animationDelay: '.8s' }} cx="520" cy="370" r="2.5" fill="#7c6cf2"/>
              <circle className="bls-dot" style={{ animationDelay: '1.2s' }} cx="280" cy="525" r="3" fill="#3fb98d"/>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
