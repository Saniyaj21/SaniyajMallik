'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Magnetic } from './primitives';

export function MobileAppsHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.ma-eyebrow', { y: 20, opacity: 0, duration: 0.5 })
        .from('h1',          { y: 32, opacity: 0, duration: 0.65 }, '-=0.25')
        .from('p',           { y: 20, opacity: 0, duration: 0.55 }, '-=0.35')
        .from('.ma-cta',     { y: 16, opacity: 0, duration: 0.5  }, '-=0.35')
        .from('.ma-stage',   { x: 40, opacity: 0, duration: 0.75 }, '-=0.8');

      gsap.timeline({ delay: 0.6, defaults: { ease: 'back.out(1.4)' } })
        .from('#ma-backdrop', { scale: 0.9, opacity: 0, transformOrigin: '280px 280px', duration: 0.55, ease: 'power2.out' })
        .from('#ma-arcs',     { opacity: 0, duration: 0.4, ease: 'power2.out' }, '-=0.2')
        .from('#ma-ios',      { x: -40, opacity: 0, duration: 0.7 }, '-=0.2')
        .from('#ma-android',  { x:  40, opacity: 0, duration: 0.7 }, '-=0.5')
        .from('#ma-cloud',    { y: -30, opacity: 0, duration: 0.55 }, '-=0.3')
        .from('#ma-backend',  { y:  30, opacity: 0, duration: 0.55 }, '-=0.4')
        .from('#ma-gear',     { scale: 0, opacity: 0, transformOrigin: '498px 92px', duration: 0.45 }, '-=0.3')
        .from('#ma-dots',     { opacity: 0, duration: 0.35, ease: 'power2.out' }, '-=0.2');
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="ma-hero" ref={heroRef}>
      <style>{`
        #ma-hero {
          padding-top: 140px; padding-bottom: 80px;
          background: radial-gradient(1200px 600px at 80% 20%, #eef7fc 0%, transparent 60%),
                      radial-gradient(900px 500px at 10% 90%, #e8f8f0 0%, transparent 60%), #fbfdff;
          color: #0e2230;
        }
        #ma-hero .ma-inner {
          max-width: 1340px; margin: 0 auto; padding: 0 48px;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 48px; align-items: center; min-height: 70vh;
        }
        #ma-hero .ma-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 600; letter-spacing: 0.04em;
          color: #21759b; background: #d6ecf6; padding: 6px 12px; border-radius: 999px;
        }
        #ma-hero .ma-eyebrow::before {
          content: ""; width: 6px; height: 6px; border-radius: 50%;
          background: #4fd1a8; box-shadow: 0 0 0 4px rgba(79,209,168,0.2);
        }
        #ma-hero h1 {
          font-size: clamp(44px,7vw,96px); line-height: 0.92; letter-spacing: -0.02em;
          margin: 18px 0; text-wrap: pretty;
        }
        #ma-hero .ma-grad {
          background: linear-gradient(120deg, #21759b 0%, #4fd1a8 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        #ma-hero p { font-size: 18px; line-height: 1.55; color: #1c3a4f; max-width: 52ch; margin: 0 0 28px; }
        #ma-hero .ma-cta { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }
        #ma-hero .ma-stage {
          position: relative; width: 100%; aspect-ratio: 1/1; max-height: 460px;
          display: flex; align-items: center; justify-content: center; overflow: hidden;
        }
        #ma-hero .ma-stage svg { width: 100%; height: 100%; display: block; overflow: visible; text-rendering: geometricPrecision; shape-rendering: geometricPrecision; }

        @keyframes ma-float-y      { 0%,100%{transform:translateY(0)}    50%{transform:translateY(-10px)} }
        @keyframes ma-float-soft   { 0%,100%{transform:translateY(0)}    50%{transform:translateY(-5px)} }
        @keyframes ma-tilt-l       { 0%,100%{transform:rotate(-8deg)}    50%{transform:rotate(-6deg)} }
        @keyframes ma-tilt-r       { 0%,100%{transform:rotate(8deg)}     50%{transform:rotate(6deg)} }
        @keyframes ma-dash-flow    { to { stroke-dashoffset:-48; } }
        @keyframes ma-pulse-ring   { 0%{transform:scale(.5);opacity:.7}  100%{transform:scale(1.6);opacity:0} }
        @keyframes ma-spin         { to { transform:rotate(360deg); } }
        @keyframes ma-blink        { 0%,88%,100%{opacity:1} 92%,96%{opacity:.25} }
        @keyframes ma-notif-in     {
          0%  { transform:translateY(-8px); opacity:0; }
          8%  { transform:translateY(0);    opacity:1; }
          70% { transform:translateY(0);    opacity:1; }
          100%{ transform:translateY(-4px); opacity:0; }
        }
        @keyframes ma-scroll-feed  { 0%{transform:translateY(0)} 50%{transform:translateY(-22px)} 100%{transform:translateY(0)} }
        @keyframes ma-pop-dot      { 0%,100%{opacity:.35;transform:scale(.9)} 50%{opacity:1;transform:scale(1.05)} }
        @keyframes ma-bar-grow     { 0%,100%{transform:scaleY(.4)} 50%{transform:scaleY(1)} }

        .ma-tilt-l   { animation: ma-tilt-l 6s ease-in-out infinite; transform-origin: center; transform-box: fill-box; will-change: transform; }
        .ma-tilt-r   { animation: ma-tilt-r 6s ease-in-out infinite; transform-origin: center; transform-box: fill-box; will-change: transform; }
        .ma-float-y  { animation: ma-float-y 6s ease-in-out infinite; transform-origin: center; transform-box: fill-box; will-change: transform; }
        .ma-float-soft{ animation: ma-float-soft 5s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
        .ma-dash     { stroke-dasharray:6 6; animation: ma-dash-flow 2.4s linear infinite; }
        .ma-pulse    { animation: ma-pulse-ring 3s cubic-bezier(.25,.6,.35,1) infinite; transform-origin: center; transform-box: fill-box; }
        .ma-spin     { animation: ma-spin 28s linear infinite; transform-origin: center; transform-box: fill-box; }
        .ma-blink    { animation: ma-blink 4s ease-in-out infinite; }
        .ma-notif    { animation: ma-notif-in 4s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
        .ma-feed     { animation: ma-scroll-feed 6s ease-in-out infinite; }
        .ma-dot      { animation: ma-pop-dot 3s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
        .ma-bar      { animation: ma-bar-grow 3s ease-in-out infinite; transform-origin: bottom center; transform-box: fill-box; }

        @media (prefers-reduced-motion: reduce) {
          .ma-tilt-l,.ma-tilt-r,.ma-float-y,.ma-float-soft,.ma-dash,.ma-pulse,
          .ma-spin,.ma-blink,.ma-notif,.ma-feed,.ma-dot,.ma-bar { animation: none; }
        }
        @media (max-width: 1100px) {
          #ma-hero { padding-top: 120px; padding-bottom: 60px; }
          #ma-hero .ma-inner { padding: 0 32px; gap: 32px; }
        }
        @media (max-width: 900px) {
          #ma-hero { padding-top: 100px; padding-bottom: 48px; }
          #ma-hero .ma-inner { grid-template-columns: 1fr; padding: 0 24px; gap: 24px; min-height: unset; }
          #ma-hero .ma-copy { order: 2; }
          #ma-hero .ma-stage { order: 1; max-height: 380px; max-width: 380px; margin: 0 auto; }
        }
        @media (max-width: 600px) {
          #ma-hero { padding-top: 88px; padding-bottom: 40px; }
          #ma-hero .ma-inner { padding: 0 20px; gap: 20px; }
          #ma-hero h1 { font-size: clamp(34px,9vw,52px); margin: 12px 0; }
          #ma-hero p { font-size: 15px; margin-bottom: 20px; max-width: unset; }
          #ma-hero .ma-cta { flex-direction: column; align-items: stretch; }
          #ma-hero .ma-cta .magnetic { width: 100%; }
          #ma-hero .ma-cta .btn { justify-content: center; width: 100%; }
          #ma-hero .ma-stage { max-height: 300px; max-width: 300px; }
        }
      `}</style>

      <div className="ma-inner">
        <div className="ma-copy">
          <span className="ma-eyebrow">Mobile Apps · iOS &amp; Android</span>
          <h1>iOS &amp;<br /><span className="ma-grad">Android Apps</span></h1>
          <p>One codebase, both stores, your brand in every pocket. We ship native-feeling apps with a single backend — same content, same logins, same data, on every device.</p>
          <div className="ma-cta">
            <Magnetic>
              <a href="/#contact" className="btn">Plan my app <span className="btn-arrow">→</span></a>
            </Magnetic>
            <Magnetic>
              <a href="/#work" className="btn btn-ghost">See app showcase</a>
            </Magnetic>
          </div>
        </div>

        <div className="ma-stage" aria-label="Two phones side by side, an iPhone and an Android with the same app, sharing a synced backend">
          <svg viewBox="0 0 560 560" xmlns="http://www.w3.org/2000/svg" role="img">
            <defs>
              <linearGradient id="ma-bgRing" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#21759b"/><stop offset="100%" stopColor="#4fd1a8"/>
              </linearGradient>
              <linearGradient id="ma-iosScreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff"/><stop offset="100%" stopColor="#eef7fc"/>
              </linearGradient>
              <linearGradient id="ma-androidScreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff"/><stop offset="100%" stopColor="#eaf6f0"/>
              </linearGradient>
              <linearGradient id="ma-bezelDark" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1c3a4f"/><stop offset="100%" stopColor="#0c4a63"/>
              </linearGradient>
              <linearGradient id="ma-headerBlue" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#21759b"/><stop offset="100%" stopColor="#7c6cf2"/>
              </linearGradient>
              <linearGradient id="ma-headerMint" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#21759b"/><stop offset="100%" stopColor="#3fb98d"/>
              </linearGradient>
              <radialGradient id="ma-centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#21759b" stopOpacity="0.18"/><stop offset="100%" stopColor="#21759b" stopOpacity="0"/>
              </radialGradient>
              <pattern id="ma-dotgrid" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="#cfdde5" opacity="0.55"/>
              </pattern>
              <clipPath id="ma-iosClip"><rect x="118" y="158" width="120" height="244" rx="22"/></clipPath>
              <clipPath id="ma-androidClip"><rect x="322" y="170" width="120" height="244" rx="14"/></clipPath>
            </defs>

            {/* Backdrop */}
            <g id="ma-backdrop">
              <rect x="40" y="40" width="480" height="480" rx="28" fill="url(#ma-dotgrid)" opacity="0.7"/>
              <circle cx="280" cy="280" r="240" fill="url(#ma-centerGlow)"/>
              <g stroke="#21759b" strokeWidth="1.4" fill="none" opacity="0.55" strokeLinecap="round">
                <path d="M 40 70 V 40 H 70"/>
                <path d="M 490 40 H 520 V 70"/>
                <path d="M 520 490 V 520 H 490"/>
                <path d="M 70 520 H 40 V 490"/>
              </g>
            </g>

            {/* Sync arcs */}
            <g id="ma-arcs" fill="none" strokeLinecap="round">
              <path d="M 178 158 Q 230 90, 280 110"  stroke="#7c6cf2" strokeWidth="2" opacity="0.25"/>
              <path d="M 178 158 Q 230 90, 280 110"  className="ma-dash" stroke="#7c6cf2" strokeWidth="2"/>
              <path d="M 382 170 Q 330 92, 280 110"  stroke="#3fb98d" strokeWidth="2" opacity="0.25"/>
              <path d="M 382 170 Q 330 92, 280 110"  className="ma-dash" style={{ animationDelay: '.6s' }} stroke="#3fb98d" strokeWidth="2"/>
              <path d="M 178 402 Q 230 480, 280 460" stroke="#21759b" strokeWidth="2" opacity="0.25"/>
              <path d="M 178 402 Q 230 480, 280 460" className="ma-dash" style={{ animationDelay: '.3s' }} stroke="#21759b" strokeWidth="2"/>
              <path d="M 382 414 Q 330 482, 280 460" stroke="#21759b" strokeWidth="2" opacity="0.25"/>
              <path d="M 382 414 Q 330 482, 280 460" className="ma-dash" style={{ animationDelay: '.9s' }} stroke="#21759b" strokeWidth="2"/>
            </g>

            {/* iPhone (left) */}
            <g id="ma-ios" className="ma-tilt-l">
              <g transform="translate(178 280)">
                <rect x="-66" y="-118" width="132" height="240" rx="26" fill="#0c4a63" opacity="0.18" transform="translate(2 6)"/>
                <rect x="-64" y="-122" width="128" height="244" rx="26" fill="url(#ma-bezelDark)"/>
                <rect x="-60" y="-118" width="120" height="236" rx="22" fill="url(#ma-iosScreen)"/>
                <rect x="-18" y="-118" width="36" height="10" rx="5" fill="#0e2230"/>
                <rect x="-66" y="-92" width="2" height="14" rx="1" fill="#0c4a63"/>
                <rect x="-66" y="-72" width="2" height="22" rx="1" fill="#0c4a63"/>
                <rect x="-66" y="-44" width="2" height="22" rx="1" fill="#0c4a63"/>
                <rect x="64"  y="-66" width="2" height="32" rx="1" fill="#0c4a63"/>
              </g>

              {/* iOS screen content */}
              <g clipPath="url(#ma-iosClip)">
                <text x="130" y="172" fontFamily="Inter, system-ui, sans-serif" fontSize="7" fontWeight="700" fill="#0e2230">9:41</text>
                <g transform="translate(218 168)">
                  <rect x="0"   y="2"  width="1.5" height="3" fill="#0e2230"/>
                  <rect x="2.4" y="1"  width="1.5" height="4" fill="#0e2230"/>
                  <rect x="4.8" y="0"  width="1.5" height="5" fill="#0e2230"/>
                  <rect x="7.2" y="-1" width="1.5" height="6" fill="#0e2230"/>
                  <path d="M 12 4 a 4 4 0 0 1 6 0" fill="none" stroke="#0e2230" strokeWidth="1"/>
                  <path d="M 13.5 4.5 a 2.4 2.4 0 0 1 3 0" fill="none" stroke="#0e2230" strokeWidth="1"/>
                  <circle cx="15" cy="5" r="0.7" fill="#0e2230"/>
                  <rect x="20" y="0.5" width="10" height="5" rx="1.4" fill="none" stroke="#0e2230" strokeWidth="0.7"/>
                  <rect x="21" y="1.5" width="7" height="3" rx="0.6" fill="#3fb98d"/>
                </g>

                <rect x="118" y="180" width="120" height="34" fill="url(#ma-headerBlue)"/>
                <circle cx="132" cy="197" r="6" fill="#ffb74a"/>
                <rect x="144" y="192" width="46" height="3.6" rx="1.8" fill="#ffffff"/>
                <rect x="144" y="200" width="34" height="2.6" rx="1.3" fill="#ffffff" opacity="0.7"/>
                <g transform="translate(220 195)">
                  <path d="M 0 0 a 4 4 0 0 1 8 0 v 4 l 1.4 2 H -1.4 L 0 4 Z" fill="#ffffff"/>
                  <circle cx="2" cy="6" r="1.3" fill="#ffffff"/>
                  <circle cx="8" cy="-1" r="2.2" fill="#ff6b5b" stroke="#ffffff" strokeWidth="0.7"/>
                </g>

                {/* Hero card */}
                <g transform="translate(126 224)">
                  <rect x="0" y="0" width="104" height="46" rx="6" fill="#ffffff" stroke="#cfdde5"/>
                  <rect x="4" y="4" width="38" height="38" rx="4" fill="#d6ecf6"/>
                  <path d="M 8 36 L 18 26 L 26 32 L 36 22 L 40 26 V 38 H 8 Z" fill="#21759b" opacity="0.6"/>
                  <circle cx="32" cy="14" r="3" fill="#ffb74a"/>
                  <rect x="48" y="6"  width="48" height="3.4" rx="1.7" fill="#0e2230"/>
                  <rect x="48" y="13" width="40" height="2.6" rx="1.3" fill="#0e2230" opacity="0.55"/>
                  <rect x="48" y="19" width="44" height="2.6" rx="1.3" fill="#0e2230" opacity="0.55"/>
                  <rect x="48" y="28" width="22" height="6" rx="3" fill="#3fb98d" opacity="0.22"/>
                  <path d="M 92 28 v 12 l 4 -3 l 4 3 v -12 z" fill="#7c6cf2"/>
                </g>

                {/* Scrolling feed */}
                <g className="ma-feed">
                  <g transform="translate(126 278)">
                    <rect x="0" y="0" width="104" height="22" rx="5" fill="#ffffff" stroke="#cfdde5"/>
                    <rect x="4" y="4" width="14" height="14" rx="3" fill="#7c6cf2" opacity="0.22"/>
                    <circle cx="11" cy="11" r="3" fill="#7c6cf2"/>
                    <rect x="22" y="6"  width="50" height="2.8" rx="1.4" fill="#0e2230"/>
                    <rect x="22" y="11" width="38" height="2.2" rx="1.1" fill="#0e2230" opacity="0.55"/>
                    <rect x="22" y="15" width="28" height="2.2" rx="1.1" fill="#0e2230" opacity="0.4"/>
                    <rect x="84" y="9" width="14" height="6" rx="3" fill="#21759b"/>
                    <rect x="0"  y="26" width="104" height="22" rx="5" fill="#ffffff" stroke="#cfdde5"/>
                    <rect x="4"  y="30" width="14" height="14" rx="3" fill="#3fb98d" opacity="0.22"/>
                    <path d="M 7 39 l 3 3 l 6 -6" fill="none" stroke="#3fb98d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="22" y="32" width="48" height="2.8" rx="1.4" fill="#0e2230"/>
                    <rect x="22" y="37" width="40" height="2.2" rx="1.1" fill="#0e2230" opacity="0.55"/>
                    <rect x="22" y="41" width="30" height="2.2" rx="1.1" fill="#0e2230" opacity="0.4"/>
                    <rect x="84" y="35" width="14" height="6" rx="3" fill="#3fb98d"/>
                    <rect x="0"  y="52" width="104" height="22" rx="5" fill="#ffffff" stroke="#cfdde5"/>
                    <rect x="4"  y="56" width="14" height="14" rx="3" fill="#ffb74a" opacity="0.22"/>
                    <path d="M 11 60 l 1.6 3.4 l 3.6 .4 l -2.6 2.4 l .8 3.6 l -3.4 -1.8 l -3.4 1.8 l .8 -3.6 l -2.6 -2.4 l 3.6 -.4 z" fill="#f5a623"/>
                    <rect x="22" y="58" width="46" height="2.8" rx="1.4" fill="#0e2230"/>
                    <rect x="22" y="63" width="38" height="2.2" rx="1.1" fill="#0e2230" opacity="0.55"/>
                    <rect x="22" y="67" width="32" height="2.2" rx="1.1" fill="#0e2230" opacity="0.4"/>
                  </g>
                </g>

                {/* iOS tab bar */}
                <rect x="118" y="378" width="120" height="24" fill="#ffffff"/>
                <rect x="118" y="378" width="120" height="0.7" fill="#cfdde5"/>
                <g transform="translate(132 386)">
                  <path d="M 0 6 L 5 1 L 10 6 V 12 H 0 Z" fill="#21759b"/>
                </g>
                <g transform="translate(160 386)" opacity="0.6">
                  <circle cx="5" cy="6" r="4.5" fill="none" stroke="#0e2230" strokeWidth="1.2"/>
                  <path d="M 8 9 L 11 12" stroke="#0e2230" strokeWidth="1.2" strokeLinecap="round"/>
                </g>
                <g transform="translate(188 386)" opacity="0.6">
                  <rect x="0" y="2" width="10" height="8" rx="1.4" fill="none" stroke="#0e2230" strokeWidth="1.2"/>
                  <path d="M 2 5 H 8 M 2 7 H 6" stroke="#0e2230" strokeWidth="1.2" strokeLinecap="round"/>
                </g>
                <g transform="translate(216 386)" opacity="0.6">
                  <circle cx="5" cy="4" r="2.4" fill="none" stroke="#0e2230" strokeWidth="1.2"/>
                  <path d="M 1 12 a 4 4 0 0 1 8 0" fill="none" stroke="#0e2230" strokeWidth="1.2"/>
                </g>
                <rect x="160" y="396" width="36" height="2.4" rx="1.2" fill="#0e2230" opacity="0.7"/>
              </g>

            </g>

            {/* Android phone (right) */}
            <g id="ma-android" className="ma-tilt-r">
              <g transform="translate(382 292)">
                <rect x="-66" y="-122" width="132" height="244" rx="18" fill="#0c4a63" opacity="0.18" transform="translate(2 6)"/>
                <rect x="-64" y="-126" width="128" height="248" rx="18" fill="url(#ma-bezelDark)"/>
                <rect x="-60" y="-122" width="120" height="240" rx="14" fill="url(#ma-androidScreen)"/>
                <circle cx="0" cy="-114" r="3.2" fill="#0e2230"/>
                <circle cx="0" cy="-114" r="1.4" fill="#1c3a4f"/>
                <rect x="64" y="-86" width="2" height="22" rx="1" fill="#0c4a63"/>
                <rect x="64" y="-58" width="2" height="32" rx="1" fill="#0c4a63"/>
              </g>

              {/* Android screen content */}
              <g clipPath="url(#ma-androidClip)">
                <text x="334" y="184" fontFamily="Inter, system-ui, sans-serif" fontSize="7" fontWeight="600" fill="#0e2230">12:08</text>
                <g transform="translate(420 180)">
                  <rect x="0" y="0.5" width="10" height="5" rx="1.4" fill="none" stroke="#0e2230" strokeWidth="0.7"/>
                  <rect x="1" y="1.5" width="6" height="3" rx="0.6" fill="#3fb98d"/>
                  <path d="M -12 4 a 4 4 0 0 1 6 0" fill="none" stroke="#0e2230" strokeWidth="1"/>
                  <circle cx="-9" cy="5" r="0.7" fill="#0e2230"/>
                  <rect x="-22" y="2"   width="1.5" height="3" fill="#0e2230"/>
                  <rect x="-19.6" y="1" width="1.5" height="4" fill="#0e2230"/>
                  <rect x="-17.2" y="0" width="1.5" height="5" fill="#0e2230"/>
                  <rect x="-14.8" y="-1" width="1.5" height="6" fill="#0e2230"/>
                </g>

                <rect x="322" y="190" width="120" height="38" fill="url(#ma-headerMint)"/>
                <g transform="translate(330 204)" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round">
                  <path d="M 0 0 H 10"/>
                  <path d="M 0 4 H 10"/>
                  <path d="M 0 8 H 10"/>
                </g>
                <rect x="346" y="201" width="46" height="3.6" rx="1.8" fill="#ffffff"/>
                <rect x="346" y="209" width="32" height="2.6" rx="1.3" fill="#ffffff" opacity="0.7"/>
                <g transform="translate(412 204)" stroke="#ffffff" strokeWidth="1.4" fill="none">
                  <circle cx="3" cy="3" r="3"/>
                  <path d="M 5 5 L 8 8" strokeLinecap="round"/>
                </g>
                <circle cx="430" cy="207" r="5" fill="#ffb74a"/>

                {/* Android tabs */}
                <g transform="translate(322 232)">
                  <text x="14" y="9" fontFamily="Inter, system-ui, sans-serif" fontSize="6" fontWeight="700" fill="#3fb98d">FEED</text>
                  <text x="50" y="9" fontFamily="Inter, system-ui, sans-serif" fontSize="6" fontWeight="600" fill="#0e2230" opacity="0.55">SAVED</text>
                  <text x="92" y="9" fontFamily="Inter, system-ui, sans-serif" fontSize="6" fontWeight="600" fill="#0e2230" opacity="0.55">YOU</text>
                  <rect x="11" y="14" width="22" height="2" rx="1" fill="#3fb98d"/>
                  <rect x="0" y="16" width="120" height="0.7" fill="#cfdde5"/>
                </g>

                {/* Stats card with animated bars */}
                <g transform="translate(330 254)">
                  <rect x="0" y="0" width="104" height="50" rx="6" fill="#ffffff" stroke="#cfdde5"/>
                  <rect x="6" y="6" width="40" height="3" rx="1.5" fill="#0e2230"/>
                  <rect x="6" y="12" width="28" height="2.4" rx="1.2" fill="#0e2230" opacity="0.55"/>
                  <rect x="76" y="6" width="22" height="8" rx="4" fill="#3fb98d" opacity="0.22"/>
                  <text x="80" y="12" fontFamily="Inter, system-ui, sans-serif" fontSize="4.4" fontWeight="700" fill="#1a8a64">+12.4%</text>
                  <g transform="translate(8 22)">
                    <rect className="ma-bar" x="0"  y="0" width="6" height="22" rx="1.5" fill="#21759b" opacity="0.7"/>
                    <rect className="ma-bar" style={{ animationDelay: '.2s' }}  x="10" y="0" width="6" height="22" rx="1.5" fill="#21759b" opacity="0.85"/>
                    <rect className="ma-bar" style={{ animationDelay: '.4s' }}  x="20" y="0" width="6" height="22" rx="1.5" fill="#21759b"/>
                    <rect className="ma-bar" style={{ animationDelay: '.6s' }}  x="30" y="0" width="6" height="22" rx="1.5" fill="#3fb98d"/>
                    <rect className="ma-bar" style={{ animationDelay: '.8s' }}  x="40" y="0" width="6" height="22" rx="1.5" fill="#7c6cf2"/>
                    <rect className="ma-bar" style={{ animationDelay: '1s' }}   x="50" y="0" width="6" height="22" rx="1.5" fill="#21759b" opacity="0.85"/>
                    <rect className="ma-bar" style={{ animationDelay: '1.2s' }} x="60" y="0" width="6" height="22" rx="1.5" fill="#21759b"/>
                    <rect className="ma-bar" style={{ animationDelay: '1.4s' }} x="70" y="0" width="6" height="22" rx="1.5" fill="#3fb98d"/>
                    <rect className="ma-bar" style={{ animationDelay: '1.6s' }} x="80" y="0" width="6" height="22" rx="1.5" fill="#21759b" opacity="0.7"/>
                    <rect className="ma-bar" style={{ animationDelay: '1.8s' }} x="90" y="0" width="6" height="22" rx="1.5" fill="#7c6cf2" opacity="0.85"/>
                  </g>
                </g>

                {/* Android feed */}
                <g className="ma-feed" style={{ animationDelay: '-1.5s' }}>
                  <g transform="translate(330 312)">
                    <rect x="0" y="0" width="104" height="22" rx="5" fill="#ffffff" stroke="#cfdde5"/>
                    <circle cx="11" cy="11" r="6" fill="#7c6cf2" opacity="0.22"/>
                    <text x="8" y="13" fontFamily="Inter, system-ui, sans-serif" fontSize="6" fontWeight="800" fill="#7c6cf2">M</text>
                    <rect x="22" y="6"  width="56" height="2.8" rx="1.4" fill="#0e2230"/>
                    <rect x="22" y="11" width="42" height="2.2" rx="1.1" fill="#0e2230" opacity="0.55"/>
                    <rect x="22" y="15" width="32" height="2.2" rx="1.1" fill="#0e2230" opacity="0.4"/>
                    <circle cx="92" cy="11" r="3.4" fill="#ff6b5b"/>
                    <text x="89.5" y="13" fontFamily="Inter, system-ui, sans-serif" fontSize="4.6" fontWeight="800" fill="#ffffff">3</text>
                    <rect x="0"  y="26" width="104" height="22" rx="5" fill="#ffffff" stroke="#cfdde5"/>
                    <circle cx="11" cy="37" r="6" fill="#3fb98d" opacity="0.22"/>
                    <path d="M 8 38 l 2.4 2.4 l 4.6 -4.6" fill="none" stroke="#3fb98d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="22" y="32" width="50" height="2.8" rx="1.4" fill="#0e2230"/>
                    <rect x="22" y="37" width="44" height="2.2" rx="1.1" fill="#0e2230" opacity="0.55"/>
                    <rect x="22" y="41" width="28" height="2.2" rx="1.1" fill="#0e2230" opacity="0.4"/>
                    <rect x="0"  y="52" width="104" height="22" rx="5" fill="#ffffff" stroke="#cfdde5"/>
                    <circle cx="11" cy="63" r="6" fill="#21759b" opacity="0.22"/>
                    <path d="M 8 60 L 14 60 M 8 63 L 14 63 M 8 66 L 12 66" stroke="#21759b" strokeWidth="1.4" strokeLinecap="round"/>
                    <rect x="22" y="58" width="50" height="2.8" rx="1.4" fill="#0e2230"/>
                    <rect x="22" y="63" width="42" height="2.2" rx="1.1" fill="#0e2230" opacity="0.55"/>
                    <rect x="22" y="67" width="34" height="2.2" rx="1.1" fill="#0e2230" opacity="0.4"/>
                  </g>
                </g>

                {/* FAB */}
                <g transform="translate(420 380)">
                  <circle r="11" fill="#ff6b5b"/>
                  <circle r="11" fill="#ff6b5b" opacity="0.4">
                    <animate attributeName="r" values="11;15;11" dur="2.4s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.5;0;0.5" dur="2.4s" repeatCount="indefinite"/>
                  </circle>
                  <path d="M 0 -5 V 5 M -5 0 H 5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                </g>

                {/* Android bottom nav */}
                <rect x="322" y="394" width="120" height="20" fill="#ffffff"/>
                <rect x="322" y="394" width="120" height="0.7" fill="#cfdde5"/>
                <g transform="translate(338 400)">
                  <path d="M 0 6 L 5 1 L 10 6 V 12 H 0 Z" fill="#3fb98d"/>
                </g>
                <g transform="translate(366 400)" opacity="0.55">
                  <rect x="0" y="2" width="10" height="8" rx="1.4" fill="none" stroke="#0e2230" strokeWidth="1.2"/>
                  <path d="M 2 5 H 8" stroke="#0e2230" strokeWidth="1.2" strokeLinecap="round"/>
                </g>
                <g transform="translate(394 400)" opacity="0.55">
                  <circle cx="5" cy="6" r="4.5" fill="none" stroke="#0e2230" strokeWidth="1.2"/>
                  <path d="M 8 9 L 11 12" stroke="#0e2230" strokeWidth="1.2" strokeLinecap="round"/>
                </g>
                <g transform="translate(422 400)" opacity="0.55">
                  <circle cx="5" cy="4" r="2.4" fill="none" stroke="#0e2230" strokeWidth="1.2"/>
                  <path d="M 1 12 a 4 4 0 0 1 8 0" fill="none" stroke="#0e2230" strokeWidth="1.2"/>
                </g>
                <rect x="362" y="408" width="40" height="2" rx="1" fill="#0e2230" opacity="0.55"/>
              </g>

            </g>

            {/* Sync cloud (top-center) */}
            <g id="ma-cloud" transform="translate(280 102)">
              <g className="ma-float-soft">
                <circle className="ma-pulse" r="22" fill="none" stroke="#7c6cf2" strokeWidth="1.4" opacity="0.5"/>
                <circle className="ma-pulse" style={{ animationDelay: '1.4s' }} r="22" fill="none" stroke="#3fb98d" strokeWidth="1.4" opacity="0.5"/>
                <rect x="-32" y="-18" width="64" height="36" rx="18" fill="#ffffff" stroke="#cfdde5"/>
                <g transform="translate(-14 0)" stroke="#21759b" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M -6 -3 a 6 6 0 0 1 12 -1"/>
                  <path d="M 6 -4 L 6 -8 L 2 -8"/>
                  <path d="M 6 3 a 6 6 0 0 1 -12 1"/>
                  <path d="M -6 4 L -6 8 L -2 8"/>
                </g>
                <text x="10" y="3" fontFamily="Inter, system-ui, sans-serif" fontSize="10" fontWeight="800" fill="#7c6cf2" textAnchor="middle">{"{ }"}</text>
              </g>
            </g>

            {/* Shared backend (bottom-center) */}
            <g id="ma-backend" transform="translate(280 470)">
              <g className="ma-float-soft" style={{ animationDelay: '-2s' }}>
                <rect x="-72" y="-26" width="144" height="52" rx="10" fill="#ffffff" stroke="#cfdde5"/>
                <g transform="translate(-54 0)">
                  <circle r="14" fill="#21759b"/>
                  <circle r="14" fill="none" stroke="#0c4a63" strokeWidth="1"/>
                  <g fill="none" stroke="#ffffff" strokeLinecap="round">
                    <rect x="-7" y="-6" width="14" height="4" rx="1" strokeWidth="1.4"/>
                    <rect x="-7" y="-1" width="14" height="4" rx="1" strokeWidth="1.4"/>
                    <rect x="-7" y="4"  width="14" height="4" rx="1" strokeWidth="1.4"/>
                    <circle cx="-4.5" cy="-4" r="0.9" fill="#ffffff" stroke="none"/>
                    <circle cx="-4.5" cy="1"  r="0.9" fill="#ffffff" stroke="none"/>
                    <circle cx="-4.5" cy="6"  r="0.9" fill="#4fd1a8" stroke="none"/>
                  </g>
                </g>
                <text x="-34" y="-6" fontFamily="Inter, system-ui, sans-serif" fontSize="8" fontWeight="800" fill="#0e2230">Shared API Backend</text>
                <rect x="-34" y="0" width="80" height="2.6" rx="1.3" fill="#0e2230" opacity="0.55"/>
                <rect x="-34" y="6" width="62" height="2.6" rx="1.3" fill="#0e2230" opacity="0.4"/>
                <g transform="translate(54 -10)">
                  <circle r="3" fill="#4fd1a8"/>
                  <circle r="3" fill="#4fd1a8" opacity="0.4">
                    <animate attributeName="r" values="3;7;3" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite"/>
                  </circle>
                </g>
                <text x="54" y="10" fontFamily="Inter, system-ui, sans-serif" fontSize="5" fontWeight="700" fill="#1a8a64" textAnchor="middle">SYNCED</text>
              </g>
            </g>

            {/* Spinning gear */}
            <g id="ma-gear" transform="translate(498 92)">
              <g className="ma-spin">
                <circle r="16" fill="#ffffff" stroke="#cfdde5" strokeWidth="1.4"/>
                <circle r="6" fill="#3fb98d"/>
                <g fill="#3fb98d">
                  <rect x="-2" y="-22" width="4" height="6" rx="1.2"/>
                  <rect x="-2" y="16"  width="4" height="6" rx="1.2"/>
                  <rect x="-22" y="-2" width="6" height="4" rx="1.2"/>
                  <rect x="16"  y="-2" width="6" height="4" rx="1.2"/>
                  <rect x="-18" y="-18" width="6" height="4" rx="1.2" transform="rotate(45)"/>
                  <rect x="12"  y="-18" width="6" height="4" rx="1.2" transform="rotate(45)"/>
                  <rect x="-18" y="14"  width="6" height="4" rx="1.2" transform="rotate(45)"/>
                  <rect x="12"  y="14"  width="6" height="4" rx="1.2" transform="rotate(45)"/>
                </g>
              </g>
            </g>

            <g id="ma-dots">
              <circle className="ma-dot" cx="60"  cy="280" r="2.6" fill="#21759b"/>
              <circle className="ma-dot" style={{ animationDelay: '.4s' }}  cx="500" cy="280" r="2.6" fill="#3fb98d"/>
              <circle className="ma-dot" style={{ animationDelay: '.8s' }}  cx="280" cy="44"  r="2.6" fill="#7c6cf2"/>
              <circle className="ma-dot" style={{ animationDelay: '1.2s' }} cx="280" cy="528" r="2.6" fill="#ff6b5b"/>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
