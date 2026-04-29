'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Magnetic } from './primitives';

export function WebApplicationsHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.wa-eyebrow', { y: 20, opacity: 0, duration: 0.5 })
        .from('h1',          { y: 32, opacity: 0, duration: 0.65 }, '-=0.25')
        .from('p',           { y: 20, opacity: 0, duration: 0.55 }, '-=0.35')
        .from('.wa-cta',     { y: 16, opacity: 0, duration: 0.5  }, '-=0.35')
        .from('.wa-stage',   { x: 40, opacity: 0, duration: 0.75 }, '-=0.8');

      gsap.timeline({ delay: 0.6, defaults: { ease: 'back.out(1.4)' } })
        .from('#wa-backdrop',  { scale: 0.9, opacity: 0, transformOrigin: '280px 280px', duration: 0.55, ease: 'power2.out' })
        .from('#wa-pulse',     { scale: 0, opacity: 0, transformOrigin: '280px 280px', duration: 0.6 }, '-=0.2')
        .from('#wa-wires',     { opacity: 0, duration: 0.45, ease: 'power2.out' }, '-=0.3')
        .from('#wa-app',       { scale: 0.82, opacity: 0, transformOrigin: '280px 280px', duration: 0.7, ease: 'back.out(1.7)' }, '-=0.2')
        .from('#wa-mod-api',   { x: -40, y: -30, opacity: 0, duration: 0.55 }, '-=0.2')
        .from('#wa-mod-auth',  { x:  40, y: -30, opacity: 0, duration: 0.55 }, '-=0.4')
        .from('#wa-mod-db',    { x: -40, y:  30, opacity: 0, duration: 0.55 }, '-=0.4')
        .from('#wa-mod-int',   { x:  40, y:  30, opacity: 0, duration: 0.55 }, '-=0.4')
        .from('#wa-terminal',  { y: -30, opacity: 0, duration: 0.5 }, '-=0.3')
        .from('#wa-metrics',   { y:  30, opacity: 0, duration: 0.5 }, '-=0.4')
        .from('#wa-gears',     { scale: 0, opacity: 0, transformOrigin: '498px 88px', duration: 0.5 }, '-=0.3')
        .from('#wa-dots',      { opacity: 0, duration: 0.35, ease: 'power2.out' }, '-=0.2');
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="wa-hero" ref={heroRef}>
      <style>{`
        #wa-hero {
          padding-top: 140px; padding-bottom: 80px;
          background: radial-gradient(1200px 600px at 80% 20%, #eef7fc 0%, transparent 60%),
                      radial-gradient(900px 500px at 10% 90%, #f0e9ff 0%, transparent 60%), #fbfdff;
          color: #0e2230;
        }
        #wa-hero .wa-inner {
          max-width: 1340px; margin: 0 auto; padding: 0 48px;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 48px; align-items: center; min-height: 70vh;
        }
        #wa-hero .wa-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 600; letter-spacing: 0.04em;
          color: #21759b; background: #d6ecf6; padding: 6px 12px; border-radius: 999px;
        }
        #wa-hero .wa-eyebrow::before {
          content: ""; width: 6px; height: 6px; border-radius: 50%;
          background: #7c6cf2; box-shadow: 0 0 0 4px rgba(124,108,242,0.2);
        }
        #wa-hero h1 {
          font-size: clamp(44px,7vw,96px); line-height: 0.92; letter-spacing: -0.02em;
          margin: 18px 0; text-wrap: pretty;
        }
        #wa-hero .wa-grad {
          background: linear-gradient(120deg, #21759b 0%, #7c6cf2 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        #wa-hero p { font-size: 18px; line-height: 1.55; color: #1c3a4f; max-width: 52ch; margin: 0 0 28px; }
        #wa-hero .wa-cta { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }
        #wa-hero .wa-stage {
          position: relative; width: 100%; aspect-ratio: 1/1; max-height: 460px;
          display: flex; align-items: center; justify-content: center; overflow: hidden;
        }
        #wa-hero .wa-stage svg { width: 100%; height: 100%; display: block; overflow: visible; text-rendering: geometricPrecision; shape-rendering: geometricPrecision; }

        @keyframes wa-spin      { to { transform: rotate(360deg); } }
        @keyframes wa-spin-rev  { to { transform: rotate(-360deg); } }
        @keyframes wa-float-y   { 0%,100%{transform:translate3d(0,0,0)} 50%{transform:translate3d(0,-8px,0)} }
        @keyframes wa-float-soft{ 0%,100%{transform:translate3d(0,0,0)} 50%{transform:translate3d(0,-4px,0)} }
        @keyframes wa-dash-flow { to { stroke-dashoffset:-48; } }
        @keyframes wa-dash-rev  { to { stroke-dashoffset:48; } }
        @keyframes wa-packet-fly{
          0%  { offset-distance:0%;  opacity:0; }
          8%  { opacity:1; }
          92% { opacity:1; }
          100%{ offset-distance:100%; opacity:0; }
        }
        @keyframes wa-pulse-ring{ 0%{transform:scale(.5);opacity:.7} 100%{transform:scale(1.6);opacity:0} }
        @keyframes wa-blink     { 0%,88%,100%{opacity:1} 92%,96%{opacity:.25} }
        @keyframes wa-type-bar  { 0%,100%{transform:scaleX(.3)} 50%{transform:scaleX(1)} }
        @keyframes wa-piston    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes wa-block-a   { 0%,18%{transform:translate3d(0,0,0)} 32%,60%{transform:translate3d(8px,-10px,0)} 74%,100%{transform:translate3d(0,0,0)} }
        @keyframes wa-block-b   { 0%,18%{transform:translate3d(0,0,0)} 32%,60%{transform:translate3d(-8px,10px,0)} 74%,100%{transform:translate3d(0,0,0)} }
        @keyframes wa-shimmer-x { 0%{transform:translateX(-80px)} 100%{transform:translateX(280px)} }
        @keyframes wa-pop-dot   { 0%,100%{opacity:.35;transform:scale(.9)} 50%{opacity:1;transform:scale(1.05)} }
        @keyframes wa-wire-hi   { 0%,100%{stroke-opacity:.15} 50%{stroke-opacity:.85} }
        @keyframes wa-cursor    { 0%,49%{opacity:1} 50%,100%{opacity:0} }
        @keyframes wa-scroll-rows{ 0%{transform:translateY(0)} 50%{transform:translateY(-22px)} 100%{transform:translateY(0)} }
        @keyframes wa-graph-grow { 0%{transform:scaleY(.3)} 50%{transform:scaleY(1)} 100%{transform:scaleY(.3)} }

        .wa-spin      { animation: wa-spin 28s linear infinite; transform-origin: center; transform-box: fill-box; }
        .wa-spin-rev  { animation: wa-spin-rev 36s linear infinite; transform-origin: center; transform-box: fill-box; }
        .wa-float-y   { animation: wa-float-y 6s cubic-bezier(.45,.05,.55,.95) infinite; transform-origin: center; transform-box: fill-box; will-change: transform; }
        .wa-float-soft{ animation: wa-float-soft 5s cubic-bezier(.45,.05,.55,.95) infinite; transform-origin: center; transform-box: fill-box; }
        .wa-dash      { stroke-dasharray:6 6; animation: wa-dash-flow 2.2s linear infinite; }
        .wa-dash-rev  { stroke-dasharray:6 6; animation: wa-dash-rev  2.2s linear infinite; }
        .wa-pulse-ring{ animation: wa-pulse-ring 3.2s cubic-bezier(.25,.6,.35,1) infinite; transform-origin: center; transform-box: fill-box; }
        .wa-blink     { animation: wa-blink 4s ease-in-out infinite; }
        .wa-type      { transform-origin: left center; transform-box: fill-box; animation: wa-type-bar 2.4s cubic-bezier(.34,.01,.21,1) infinite; }
        .wa-piston    { animation: wa-piston 1.8s cubic-bezier(.45,.05,.55,.95) infinite; transform-origin: center; transform-box: fill-box; }
        .wa-block-a   { animation: wa-block-a 6s cubic-bezier(.45,.05,.55,.95) infinite; transform-origin: center; transform-box: fill-box; }
        .wa-block-b   { animation: wa-block-b 6s cubic-bezier(.45,.05,.55,.95) infinite; transform-origin: center; transform-box: fill-box; }
        .wa-shimmer   { animation: wa-shimmer-x 4.5s ease-in-out infinite; }
        .wa-dot       { animation: wa-pop-dot 3s cubic-bezier(.45,.05,.55,.95) infinite; transform-origin: center; transform-box: fill-box; }
        .wa-wire      { animation: wa-wire-hi 3s ease-in-out infinite; }
        .wa-cursor    { animation: wa-cursor 1.1s steps(2,end) infinite; }
        .wa-scroll    { animation: wa-scroll-rows 6s cubic-bezier(.45,.05,.55,.95) infinite; }
        .wa-graph     { transform-origin: bottom center; transform-box: fill-box; animation: wa-graph-grow 3.4s cubic-bezier(.34,.01,.21,1) infinite; }

        .wa-packet-1 { offset-path: path('M 168 280 C 200 240, 260 220, 280 192'); animation: wa-packet-fly 3.4s cubic-bezier(.34,.01,.21,1) infinite; will-change: offset-distance; }
        .wa-packet-2 { offset-path: path('M 392 280 C 360 240, 300 220, 280 192'); animation: wa-packet-fly 3.4s cubic-bezier(.34,.01,.21,1) infinite; animation-delay: -1.1s; will-change: offset-distance; }
        .wa-packet-3 { offset-path: path('M 168 380 C 200 420, 260 440, 280 470'); animation: wa-packet-fly 3.4s cubic-bezier(.34,.01,.21,1) infinite; animation-delay: -2.2s; will-change: offset-distance; }
        .wa-packet-4 { offset-path: path('M 392 380 C 360 420, 300 440, 280 470'); animation: wa-packet-fly 3.4s cubic-bezier(.34,.01,.21,1) infinite; animation-delay: -0.6s; will-change: offset-distance; }

        @media (prefers-reduced-motion: reduce) {
          .wa-spin,.wa-spin-rev,.wa-float-y,.wa-float-soft,.wa-dash,.wa-dash-rev,
          .wa-pulse-ring,.wa-blink,.wa-type,.wa-piston,.wa-block-a,.wa-block-b,
          .wa-shimmer,.wa-dot,.wa-wire,.wa-cursor,.wa-scroll,.wa-graph,
          .wa-packet-1,.wa-packet-2,.wa-packet-3,.wa-packet-4 { animation: none; }
        }
        @media (max-width: 1100px) {
          #wa-hero { padding-top: 120px; padding-bottom: 60px; }
          #wa-hero .wa-inner { padding: 0 32px; gap: 32px; }
        }
        @media (max-width: 900px) {
          #wa-hero { padding-top: 100px; padding-bottom: 48px; }
          #wa-hero .wa-inner { grid-template-columns: 1fr; padding: 0 24px; gap: 24px; min-height: unset; }
          #wa-hero .wa-copy { order: 2; }
          #wa-hero .wa-stage { order: 1; max-height: 380px; max-width: 380px; margin: 0 auto; }
        }
        @media (max-width: 600px) {
          #wa-hero { padding-top: 88px; padding-bottom: 40px; }
          #wa-hero .wa-inner { padding: 0 20px; gap: 20px; }
          #wa-hero h1 { font-size: clamp(34px,9vw,52px); margin: 12px 0; }
          #wa-hero p { font-size: 15px; margin-bottom: 20px; max-width: unset; }
          #wa-hero .wa-cta { flex-direction: column; align-items: stretch; }
          #wa-hero .wa-cta .magnetic { width: 100%; }
          #wa-hero .wa-cta .btn { justify-content: center; width: 100%; }
          #wa-hero .wa-stage { max-height: 300px; max-width: 300px; }
        }
      `}</style>

      <div className="wa-inner">
        <div className="wa-copy">
          <span className="wa-eyebrow">WordPress · Custom Web Apps</span>
          <h1>Custom<br />Web <span className="wa-grad">Applications</span></h1>
          <p>Custom web apps built around how you work. We model your domain, wire up the data, and ship a tool that bends to your process — not the other way around.</p>
          <div className="wa-cta">
            <Magnetic>
              <a href="/#contact" className="btn">Scope my app <span className="btn-arrow">→</span></a>
            </Magnetic>
            <Magnetic>
              <a href="/#work" className="btn btn-ghost">See case studies</a>
            </Magnetic>
          </div>
        </div>

        <div className="wa-stage" aria-label="A custom web application diagram with a central app window, connected modules, animated data packets, and live data panels">
          <svg viewBox="0 0 560 560" xmlns="http://www.w3.org/2000/svg" role="img">
            <defs>
              <linearGradient id="wa-appHeader" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#21759b"/><stop offset="100%" stopColor="#7c6cf2"/>
              </linearGradient>
              <linearGradient id="wa-appBody" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff"/><stop offset="100%" stopColor="#f3f8fb"/>
              </linearGradient>
              <linearGradient id="wa-modBlue"   x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#5fb1d4"/><stop offset="100%" stopColor="#21759b"/></linearGradient>
              <linearGradient id="wa-modViolet" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#9d8ff8"/><stop offset="100%" stopColor="#7c6cf2"/></linearGradient>
              <linearGradient id="wa-modMint"   x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#7ee0bf"/><stop offset="100%" stopColor="#3fb98d"/></linearGradient>
              <linearGradient id="wa-modAmber"  x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ffd06b"/><stop offset="100%" stopColor="#f5a623"/></linearGradient>
              <radialGradient id="wa-centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7c6cf2" stopOpacity="0.15"/><stop offset="100%" stopColor="#7c6cf2" stopOpacity="0"/>
              </radialGradient>
              <linearGradient id="wa-shimmerGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="white" stopOpacity="0"/>
                <stop offset="50%" stopColor="white" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="white" stopOpacity="0"/>
              </linearGradient>
              <pattern id="wa-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#cfdde5" strokeWidth="0.5" opacity="0.6"/>
              </pattern>
              <clipPath id="wa-appClip"><rect x="208" y="222" width="144" height="116" rx="8"/></clipPath>
            </defs>

            {/* Blueprint backdrop */}
            <g id="wa-backdrop">
              <rect x="40" y="40" width="480" height="480" rx="28" fill="url(#wa-grid)" opacity="0.7"/>
              <circle cx="280" cy="280" r="240" fill="url(#wa-centerGlow)"/>
              <g stroke="#7c6cf2" strokeWidth="1.4" fill="none" opacity="0.55" strokeLinecap="round">
                <path d="M 40 70 V 40 H 70"/>
                <path d="M 490 40 H 520 V 70"/>
                <path d="M 520 490 V 520 H 490"/>
                <path d="M 70 520 H 40 V 490"/>
              </g>
              <circle cx="280" cy="280" r="220" fill="none" stroke="#cfdde5" strokeWidth="1" strokeDasharray="2 6" opacity="0.7"/>
              <circle cx="280" cy="280" r="178" fill="none" stroke="#cfdde5" strokeWidth="1" strokeDasharray="2 6" opacity="0.55"/>
            </g>

            {/* Connective wires */}
            <g id="wa-wires" fill="none" strokeLinecap="round">
              <path d="M 110 168 L 168 168 Q 188 168, 208 192 L 232 222" stroke="#21759b" strokeWidth="2" opacity="0.25"/>
              <path d="M 110 168 L 168 168 Q 188 168, 208 192 L 232 222" className="wa-dash" stroke="#21759b" strokeWidth="2"/>
              <path d="M 450 168 L 392 168 Q 372 168, 352 192 L 328 222" stroke="#7c6cf2" strokeWidth="2" opacity="0.25"/>
              <path d="M 450 168 L 392 168 Q 372 168, 352 192 L 328 222" className="wa-dash" style={{ animationDelay: '.4s' }} stroke="#7c6cf2" strokeWidth="2"/>
              <path d="M 110 432 L 168 432 Q 188 432, 208 412 L 232 388" stroke="#3fb98d" strokeWidth="2" opacity="0.25"/>
              <path d="M 110 432 L 168 432 Q 188 432, 208 412 L 232 388" className="wa-dash-rev" stroke="#3fb98d" strokeWidth="2"/>
              <path d="M 450 432 L 392 432 Q 372 432, 352 412 L 328 388" stroke="#f5a623" strokeWidth="2" opacity="0.25"/>
              <path d="M 450 432 L 392 432 Q 372 432, 352 412 L 328 388" className="wa-dash-rev" style={{ animationDelay: '.6s' }} stroke="#f5a623" strokeWidth="2"/>
              <path d="M 64 168 H 110" stroke="#cfdde5" strokeWidth="2"/>
              <path d="M 64 432 H 110" stroke="#cfdde5" strokeWidth="2"/>
              <path d="M 450 168 H 496" stroke="#cfdde5" strokeWidth="2"/>
              <path d="M 450 432 H 496" stroke="#cfdde5" strokeWidth="2"/>
              <path d="M 64 168 H 110"  className="wa-wire" stroke="#7c6cf2" strokeWidth="2"/>
              <path d="M 64 432 H 110"  className="wa-wire" style={{ animationDelay: '.7s' }} stroke="#3fb98d" strokeWidth="2"/>
              <path d="M 450 168 H 496" className="wa-wire" style={{ animationDelay: '1.4s' }} stroke="#21759b" strokeWidth="2"/>
              <path d="M 450 432 H 496" className="wa-wire" style={{ animationDelay: '.3s' }} stroke="#f5a623" strokeWidth="2"/>
              <g fill="#ffffff" stroke="#0e2230" strokeWidth="1.2">
                <circle cx="110" cy="168" r="3.4"/>
                <circle cx="450" cy="168" r="3.4"/>
                <circle cx="110" cy="432" r="3.4"/>
                <circle cx="450" cy="432" r="3.4"/>
                <circle cx="232" cy="222" r="3"/>
                <circle cx="328" cy="222" r="3"/>
                <circle cx="232" cy="388" r="3"/>
                <circle cx="328" cy="388" r="3"/>
              </g>
            </g>

            {/* Center app window */}
            <g id="wa-app">
              <rect x="200" y="206" width="160" height="148" rx="12" fill="#0c4a63" opacity="0.12"/>
              <rect x="196" y="200" width="160" height="148" rx="12" fill="url(#wa-appBody)" stroke="#cfdde5" strokeWidth="1.2"/>
              <rect x="196" y="200" width="160" height="22" rx="12" fill="url(#wa-appHeader)"/>
              <rect x="196" y="210" width="160" height="12" fill="url(#wa-appHeader)"/>
              <circle cx="206" cy="211" r="2.4" fill="#ffffff" opacity="0.95"/>
              <circle cx="214" cy="211" r="2.4" fill="#ffffff" opacity="0.65"/>
              <circle cx="222" cy="211" r="2.4" fill="#ffffff" opacity="0.4"/>
              <rect x="244" y="207" width="58" height="4" rx="2" fill="#ffffff" opacity="0.95"/>
              <rect x="244" y="214" width="38" height="3" rx="1.5" fill="#ffffff" opacity="0.55"/>
              <g transform="translate(346 211)">
                <circle r="3" fill="#4fd1a8"/>
                <circle r="3" fill="#4fd1a8" opacity="0.4">
                  <animate attributeName="r" values="3;7;3" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite"/>
                </circle>
              </g>

              {/* Sidebar */}
              <rect x="196" y="222" width="36" height="126" fill="#eef7fc"/>
              <rect x="196" y="346" width="36" height="2"   fill="#cfdde5"/>
              <rect x="200" y="232" width="28" height="14" rx="3" fill="#7c6cf2" opacity="0.18"/>
              <rect x="204" y="237" width="4"  height="4"  rx="1" fill="#7c6cf2"/>
              <rect x="212" y="238" width="14" height="2.4" rx="1.2" fill="#7c6cf2"/>
              <rect x="204" y="254" width="4" height="4" rx="1" fill="#0e2230" opacity="0.55"/>
              <rect x="212" y="255" width="14" height="2.4" rx="1.2" fill="#0e2230" opacity="0.55"/>
              <rect x="204" y="268" width="4" height="4" rx="1" fill="#0e2230" opacity="0.55"/>
              <rect x="212" y="269" width="12" height="2.4" rx="1.2" fill="#0e2230" opacity="0.55"/>
              <rect x="204" y="282" width="4" height="4" rx="1" fill="#0e2230" opacity="0.55"/>
              <rect x="212" y="283" width="14" height="2.4" rx="1.2" fill="#0e2230" opacity="0.55"/>
              <rect x="204" y="296" width="4" height="4" rx="1" fill="#0e2230" opacity="0.55"/>
              <rect x="212" y="297" width="10" height="2.4" rx="1.2" fill="#0e2230" opacity="0.55"/>
              <rect x="204" y="310" width="4" height="4" rx="1" fill="#0e2230" opacity="0.55"/>
              <rect x="212" y="311" width="14" height="2.4" rx="1.2" fill="#0e2230" opacity="0.55"/>
              <circle cx="214" cy="332" r="4.5" fill="#ffb74a"/>
              <rect x="208" y="338" width="14" height="2" rx="1" fill="#0e2230" opacity="0.6"/>

              {/* Body content clipped */}
              <g clipPath="url(#wa-appClip)">
                <rect x="232" y="222" width="120" height="14" fill="#ffffff"/>
                <rect x="232" y="236" width="120" height="1" fill="#eef3f6"/>
                <rect x="240" y="226" width="34" height="6" rx="3" fill="#0e2230"/>
                <rect x="280" y="227" width="20" height="4" rx="2" fill="#cfdde5"/>
                <rect x="304" y="227" width="14" height="4" rx="2" fill="#cfdde5"/>
                <rect x="324" y="225" width="22" height="8" rx="4" fill="#7c6cf2"/>
                <rect x="328" y="228" width="14" height="2" rx="1" fill="#ffffff"/>

                <g transform="translate(238 244)">
                  <rect x="0"  y="0" width="22" height="3" rx="1.5" fill="#0e2230" opacity="0.75"/>
                  <rect x="32" y="0" width="22" height="3" rx="1.5" fill="#0e2230" opacity="0.75"/>
                  <rect x="64" y="0" width="14" height="3" rx="1.5" fill="#0e2230" opacity="0.75"/>
                </g>
                <g className="wa-scroll">
                  <g transform="translate(238 252)">
                    <rect x="0"  y="0"  width="22" height="3" rx="1.5" fill="#cfdde5"/>
                    <rect x="32" y="0"  width="22" height="3" rx="1.5" fill="#cfdde5"/>
                    <rect x="64" y="-2" width="14" height="6" rx="3" fill="#3fb98d" opacity="0.25"/>
                    <circle cx="68" cy="1" r="1.2" fill="#3fb98d"/>
                    <rect x="72" y="0" width="6" height="3" rx="1.5" fill="#3fb98d"/>
                    <rect x="0"  y="8"  width="22" height="3" rx="1.5" fill="#cfdde5"/>
                    <rect x="32" y="8"  width="18" height="3" rx="1.5" fill="#cfdde5"/>
                    <rect x="64" y="6"  width="14" height="6" rx="3" fill="#ffb74a" opacity="0.25"/>
                    <circle cx="68" cy="9" r="1.2" fill="#f5a623"/>
                    <rect x="72" y="8" width="6" height="3" rx="1.5" fill="#f5a623"/>
                    <rect x="0"  y="16" width="22" height="3" rx="1.5" fill="#cfdde5"/>
                    <rect x="32" y="16" width="20" height="3" rx="1.5" fill="#cfdde5"/>
                    <rect x="64" y="14" width="14" height="6" rx="3" fill="#7c6cf2" opacity="0.25"/>
                    <circle cx="68" cy="17" r="1.2" fill="#7c6cf2"/>
                    <rect x="72" y="16" width="6" height="3" rx="1.5" fill="#7c6cf2"/>
                    <rect x="0"  y="24" width="22" height="3" rx="1.5" fill="#cfdde5"/>
                    <rect x="32" y="24" width="14" height="3" rx="1.5" fill="#cfdde5"/>
                    <rect x="64" y="22" width="14" height="6" rx="3" fill="#3fb98d" opacity="0.25"/>
                    <circle cx="68" cy="25" r="1.2" fill="#3fb98d"/>
                    <rect x="72" y="24" width="6" height="3" rx="1.5" fill="#3fb98d"/>
                    <rect x="0"  y="32" width="22" height="3" rx="1.5" fill="#cfdde5"/>
                    <rect x="32" y="32" width="18" height="3" rx="1.5" fill="#cfdde5"/>
                    <rect x="64" y="30" width="14" height="6" rx="3" fill="#ff6b5b" opacity="0.25"/>
                    <circle cx="68" cy="33" r="1.2" fill="#ff6b5b"/>
                    <rect x="72" y="32" width="6" height="3" rx="1.5" fill="#ff6b5b"/>
                    <rect x="0"  y="40" width="22" height="3" rx="1.5" fill="#cfdde5"/>
                    <rect x="32" y="40" width="20" height="3" rx="1.5" fill="#cfdde5"/>
                    <rect x="64" y="38" width="14" height="6" rx="3" fill="#7c6cf2" opacity="0.25"/>
                    <circle cx="68" cy="41" r="1.2" fill="#7c6cf2"/>
                    <rect x="72" y="40" width="6" height="3" rx="1.5" fill="#7c6cf2"/>
                  </g>
                </g>

                <g transform="translate(238 320)">
                  <rect x="0" y="0" width="108" height="14" rx="3" fill="#eef7fc"/>
                  <g fill="#21759b">
                    <rect className="wa-graph" x="2"  y="2" width="6" height="10" rx="1" style={{ animationDelay: '0s' }}/>
                    <rect className="wa-graph" x="12" y="2" width="6" height="10" rx="1" style={{ animationDelay: '.2s' }}/>
                    <rect className="wa-graph" x="22" y="2" width="6" height="10" rx="1" style={{ animationDelay: '.4s' }}/>
                    <rect className="wa-graph" x="32" y="2" width="6" height="10" rx="1" style={{ animationDelay: '.6s' }}/>
                    <rect className="wa-graph" x="42" y="2" width="6" height="10" rx="1" style={{ animationDelay: '.8s' }}/>
                    <rect className="wa-graph" x="52" y="2" width="6" height="10" rx="1" style={{ animationDelay: '1s' }}/>
                    <rect className="wa-graph" x="62" y="2" width="6" height="10" rx="1" style={{ animationDelay: '1.2s' }}/>
                    <rect className="wa-graph" x="72" y="2" width="6" height="10" rx="1" style={{ animationDelay: '1.4s' }}/>
                    <rect className="wa-graph" x="82" y="2" width="6" height="10" rx="1" style={{ animationDelay: '1.6s' }}/>
                    <rect className="wa-graph" x="92" y="2" width="6" height="10" rx="1" style={{ animationDelay: '1.8s' }}/>
                  </g>
                </g>
              </g>

              {/* Shimmer */}
              <g clipPath="url(#wa-appClip)">
                <rect className="wa-shimmer" x="100" y="220" width="60" height="120" fill="url(#wa-shimmerGrad)" opacity="0.55"/>
              </g>

              {/* Cursor */}
              <g transform="translate(338 232)">
                <path className="wa-piston" d="M 0 0 L 8 3 L 4 5 L 3 9 Z" fill="#0e2230" stroke="#ffffff" strokeWidth="0.8" strokeLinejoin="round"/>
              </g>
            </g>

            {/* Pulse rings */}
            <g id="wa-pulse" transform="translate(280 280)">
              <circle className="wa-pulse-ring" r="100" fill="none" stroke="#7c6cf2" strokeWidth="1.4" opacity="0.5"/>
              <circle className="wa-pulse-ring" style={{ animationDelay: '1.6s' }} r="100" fill="none" stroke="#21759b" strokeWidth="1.4" opacity="0.5"/>
            </g>

            {/* API module (top-left) */}
            <g id="wa-mod-api" className="wa-float-y">
              <g transform="translate(70 168)">
                <rect x="-44" y="-34" width="88" height="68" rx="12" fill="#ffffff" stroke="#cfdde5"/>
                <rect x="-38" y="-28" width="38" height="10" rx="5" fill="url(#wa-modBlue)"/>
                <rect x="-34" y="-24" width="6"  height="2" rx="1" fill="#ffffff"/>
                <rect x="-26" y="-24" width="20" height="2" rx="1" fill="#ffffff" opacity="0.85"/>
                <g transform="translate(-38 -10)">
                  <rect x="0"  y="0"  width="76" height="10" rx="3" fill="#eef7fc"/>
                  <rect x="3"  y="3"  width="14" height="4" rx="1.5" fill="#3fb98d"/>
                  <rect x="20" y="3"  width="50" height="2" rx="1"   fill="#0e2230" opacity="0.75"/>
                  <rect x="20" y="6"  width="34" height="1.4" rx="0.7" fill="#0e2230" opacity="0.45"/>
                  <rect x="0"  y="14" width="76" height="10" rx="3" fill="#eef7fc"/>
                  <rect x="3"  y="17" width="14" height="4" rx="1.5" fill="#ffb74a"/>
                  <rect x="20" y="17" width="44" height="2" rx="1"   fill="#0e2230" opacity="0.75"/>
                  <rect x="20" y="20" width="36" height="1.4" rx="0.7" fill="#0e2230" opacity="0.45"/>
                  <rect x="0"  y="28" width="76" height="10" rx="3" fill="#eef7fc"/>
                  <rect x="3"  y="31" width="14" height="4" rx="1.5" fill="#ff6b5b"/>
                  <rect x="20" y="31" width="38" height="2" rx="1"   fill="#0e2230" opacity="0.75"/>
                  <rect x="20" y="34" width="30" height="1.4" rx="0.7" fill="#0e2230" opacity="0.45"/>
                </g>
              </g>
            </g>

            {/* Auth module (top-right) */}
            <g id="wa-mod-auth" className="wa-float-y" style={{ animationDelay: '-1.5s' }}>
              <g transform="translate(490 168)">
                <rect x="-44" y="-34" width="88" height="68" rx="12" fill="#ffffff" stroke="#cfdde5"/>
                <rect x="-38" y="-28" width="38" height="10" rx="5" fill="url(#wa-modViolet)"/>
                <g transform="translate(-34 -23)" fill="none" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round">
                  <path d="M 0 0 V 4 M -3 4 H 3"/>
                  <circle cx="0" cy="-1.5" r="1.5"/>
                </g>
                <rect x="-22" y="-24" width="20" height="2" rx="1" fill="#ffffff" opacity="0.85"/>
                <g transform="translate(0 4)">
                  <path d="M 0 -16 L 14 -10 V 0 Q 14 12 0 18 Q -14 12 -14 0 V -10 Z"
                        fill="#f3eeff" stroke="#7c6cf2" strokeWidth="1.6"/>
                  <path d="M -5 0 L -1 4 L 6 -4" fill="none" stroke="#7c6cf2" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <g transform="translate(-30 22)">
                  <circle cx="0"  cy="0" r="3" fill="#7c6cf2"/>
                  <circle cx="8"  cy="0" r="3" fill="#21759b"/>
                  <circle cx="16" cy="0" r="3" fill="#3fb98d"/>
                  <circle cx="24" cy="0" r="3" fill="#cfdde5" stroke="#cfdde5"/>
                </g>
              </g>
            </g>

            {/* Database module (bottom-left) */}
            <g id="wa-mod-db" className="wa-float-y" style={{ animationDelay: '-3s' }}>
              <g transform="translate(70 432)">
                <rect x="-44" y="-34" width="88" height="68" rx="12" fill="#ffffff" stroke="#cfdde5"/>
                <rect x="-38" y="-28" width="38" height="10" rx="5" fill="url(#wa-modMint)"/>
                <g transform="translate(-34 -23)" fill="none" stroke="#ffffff" strokeWidth="1.2">
                  <ellipse cx="0" cy="-1" rx="2.6" ry="1"/>
                  <path d="M -2.6 -1 V 2 a 2.6 1 0 0 0 5.2 0 V -1"/>
                </g>
                <rect x="-22" y="-24" width="22" height="2" rx="1" fill="#ffffff" opacity="0.85"/>
                <g transform="translate(0 4)">
                  <ellipse cx="0" cy="-12" rx="20" ry="6" fill="#e8f8f0" stroke="#3fb98d" strokeWidth="1.6"/>
                  <path d="M -20 -12 V 8 a 20 6 0 0 0 40 0 V -12" fill="#e8f8f0" stroke="#3fb98d" strokeWidth="1.6"/>
                  <ellipse cx="0" cy="-2" rx="20" ry="6" fill="none" stroke="#3fb98d" strokeWidth="1" opacity="0.65"/>
                  <ellipse cx="0" cy="4"  rx="20" ry="6" fill="none" stroke="#3fb98d" strokeWidth="1" opacity="0.65"/>
                </g>
                <rect x="-30" y="22" width="22" height="4" rx="2" fill="#0e2230"/>
                <rect x="-6"  y="22" width="36" height="4" rx="2" fill="#cfdde5"/>
                <rect x="-6"  y="22" width="22" height="4" rx="2" fill="#3fb98d">
                  <animate attributeName="width" values="14;30;22" dur="3s" repeatCount="indefinite"/>
                </rect>
              </g>
            </g>

            {/* Integrations module (bottom-right) */}
            <g id="wa-mod-int" className="wa-float-y" style={{ animationDelay: '-4.5s' }}>
              <g transform="translate(490 432)">
                <rect x="-44" y="-34" width="88" height="68" rx="12" fill="#ffffff" stroke="#cfdde5"/>
                <rect x="-38" y="-28" width="38" height="10" rx="5" fill="url(#wa-modAmber)"/>
                <g transform="translate(-34 -23)" fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round">
                  <circle cx="-1.6" cy="0" r="1.5"/>
                  <circle cx="1.6"  cy="0" r="1.5"/>
                  <path d="M -1.6 1.5 V 3 M 1.6 1.5 V 3"/>
                </g>
                <rect x="-22" y="-24" width="24" height="2" rx="1" fill="#ffffff" opacity="0.85"/>
                <g transform="translate(0 6)">
                  <g className="wa-block-a">
                    <rect x="-30" y="-12" width="16" height="16" rx="4" fill="#eef7fc" stroke="#cfdde5"/>
                    <circle cx="-22" cy="-4" r="3" fill="#21759b"/>
                  </g>
                  <g className="wa-block-b" style={{ animationDelay: '-1s' }}>
                    <rect x="-10" y="-12" width="16" height="16" rx="4" fill="#f3eeff" stroke="#cfdde5"/>
                    <path d="M -2 -8 L 2 -2 L -6 -2 Z" fill="#7c6cf2"/>
                  </g>
                  <g className="wa-block-a" style={{ animationDelay: '-2s' }}>
                    <rect x="10" y="-12" width="16" height="16" rx="4" fill="#fff4e3" stroke="#cfdde5"/>
                    <rect x="14" y="-8" width="8" height="8" rx="1.5" fill="#f5a623"/>
                  </g>
                  <g className="wa-block-b" style={{ animationDelay: '-3s' }}>
                    <rect x="-30" y="6" width="16" height="16" rx="4" fill="#e8f8f0" stroke="#cfdde5"/>
                    <path d="M -26 14 L -22 18 L -16 10" fill="none" stroke="#3fb98d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <g className="wa-block-a" style={{ animationDelay: '-4s' }}>
                    <rect x="-10" y="6" width="16" height="16" rx="4" fill="#ffece9" stroke="#cfdde5"/>
                    <path d="M -3 10 a 3 3 0 1 1 0 6" fill="none" stroke="#ff6b5b" strokeWidth="1.8" strokeLinecap="round"/>
                    <circle cx="-3" cy="13" r="1" fill="#ff6b5b"/>
                  </g>
                  <g className="wa-block-b" style={{ animationDelay: '-5s' }}>
                    <rect x="10" y="6" width="16" height="16" rx="4" fill="#fdf2f7" stroke="#cfdde5"/>
                    <circle cx="18" cy="14" r="3.4" fill="none" stroke="#ef6ea8" strokeWidth="1.6"/>
                    <path d="M 18 12 V 14 L 19.4 15" stroke="#ef6ea8" strokeWidth="1.4" strokeLinecap="round"/>
                  </g>
                </g>
              </g>
            </g>

            {/* Flying data packets */}
            <g>
              <g className="wa-packet-1"><rect x="-3" y="-3" width="6" height="6" rx="1.5" fill="#21759b"/></g>
              <g className="wa-packet-2"><rect x="-3" y="-3" width="6" height="6" rx="1.5" fill="#7c6cf2"/></g>
              <g className="wa-packet-3"><rect x="-3" y="-3" width="6" height="6" rx="1.5" fill="#3fb98d"/></g>
              <g className="wa-packet-4"><rect x="-3" y="-3" width="6" height="6" rx="1.5" fill="#f5a623"/></g>
            </g>

            {/* Terminal card (top-center) */}
            <g id="wa-terminal" transform="translate(280 90)">
              <g className="wa-float-soft">
                <rect x="-78" y="-30" width="156" height="60" rx="10" fill="#0e2230" stroke="#1c3a4f"/>
                <circle cx="-70" cy="-22" r="2.4" fill="#ff6b5b"/>
                <circle cx="-62" cy="-22" r="2.4" fill="#ffb74a"/>
                <circle cx="-54" cy="-22" r="2.4" fill="#4fd1a8"/>
                <rect x="-20" y="-24" width="40" height="3" rx="1.5" fill="#ffffff" opacity="0.45"/>
                <g transform="translate(-66 -10)">
                  <rect x="0"  y="0"  width="3"  height="3" rx="1"   fill="#7c6cf2"/>
                  <rect x="6"  y="0"  width="14" height="3" rx="1.5" fill="#7c6cf2"/>
                  <rect x="22" y="0"  width="34" height="3" rx="1.5" fill="#5fb1d4"/>
                  <rect x="58" y="0"  width="20" height="3" rx="1.5" fill="#3fb98d"/>
                  <rect x="80" y="0"  width="38" height="3" rx="1.5" fill="#cfdde5" opacity="0.55"/>
                  <rect x="0"  y="8"  width="3"  height="3" rx="1"   fill="#7c6cf2"/>
                  <rect x="6"  y="8"  width="22" height="3" rx="1.5" fill="#ef6ea8"/>
                  <rect x="30" y="8"  width="30" height="3" rx="1.5" fill="#ffb74a"/>
                  <rect x="62" y="8"  width="46" height="3" rx="1.5" fill="#cfdde5" opacity="0.55"/>
                  <rect x="6"  y="16" width="14" height="3" rx="1.5" fill="#5fb1d4"/>
                  <rect x="22" y="16" width="22" height="3" rx="1.5" fill="#cfdde5" opacity="0.55"/>
                  <rect className="wa-type" x="46" y="16" width="40" height="3" rx="1.5" fill="#3fb98d"/>
                  <rect className="wa-cursor" x="88" y="15" width="1.6" height="5" fill="#ffffff"/>
                </g>
              </g>
            </g>

            {/* Metric sparkline card (bottom-center) */}
            <g id="wa-metrics" transform="translate(280 478)">
              <g className="wa-float-soft" style={{ animationDelay: '-2s' }}>
                <rect x="-90" y="-28" width="180" height="56" rx="10" fill="#ffffff" stroke="#cfdde5"/>
                <g transform="translate(-78 -12)">
                  <circle cx="0" cy="0" r="2.6" fill="#4fd1a8"/>
                  <circle cx="0" cy="0" r="2.6" fill="#4fd1a8" opacity="0.4">
                    <animate attributeName="r" values="2.6;6;2.6" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <rect x="6" y="-2" width="26" height="3" rx="1.5" fill="#0e2230"/>
                  <rect x="6" y="4"  width="44" height="2.4" rx="1.2" fill="#0e2230" opacity="0.45"/>
                </g>
                <g transform="translate(-78 8)" className="wa-blink">
                  <rect x="0"  y="0" width="14" height="12" rx="2" fill="#0e2230"/>
                  <rect x="16" y="0" width="6"  height="12" rx="2" fill="#0e2230"/>
                  <rect x="24" y="0" width="14" height="12" rx="2" fill="#7c6cf2"/>
                </g>
                <g transform="translate(-12 0)">
                  <rect x="0" y="-18" width="98" height="34" rx="6" fill="#eef7fc"/>
                  <g stroke="#cfdde5" strokeWidth="0.5" opacity="0.7">
                    <path d="M 0 -8 H 98"/>
                    <path d="M 0 0  H 98"/>
                    <path d="M 0 8  H 98"/>
                  </g>
                  <path d="M 4 8 L 14 4 L 24 0 L 34 6 L 44 -4 L 54 2 L 64 -6 L 74 -2 L 84 -8 L 94 -10"
                        fill="none" stroke="#21759b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <animate attributeName="strokeDasharray" values="0 200;200 0;0 200" dur="6s" repeatCount="indefinite"/>
                  </path>
                  <circle cx="94" cy="-10" r="2.4" fill="#21759b"/>
                  <circle cx="94" cy="-10" r="2.4" fill="#21759b" opacity="0.4">
                    <animate attributeName="r" values="2.4;6;2.4" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite"/>
                  </circle>
                </g>
              </g>
            </g>

            {/* Spinning gears */}
            <g id="wa-gears">
              <g transform="translate(498 88)">
                <g className="wa-spin">
                  <circle r="20" fill="#ffffff" stroke="#cfdde5" strokeWidth="1.4"/>
                  <circle r="8" fill="#21759b"/>
                  <circle r="3.4" fill="#0c4a63"/>
                  <g fill="#21759b">
                    <rect x="-2.4" y="-26" width="4.8" height="7" rx="1.5"/>
                    <rect x="-2.4" y="19"  width="4.8" height="7" rx="1.5"/>
                    <rect x="-26"  y="-2.4" width="7" height="4.8" rx="1.5"/>
                    <rect x="19"   y="-2.4" width="7" height="4.8" rx="1.5"/>
                    <rect x="-21" y="-21" width="7" height="4.8" rx="1.5" transform="rotate(45)"/>
                    <rect x="14"  y="-21" width="7" height="4.8" rx="1.5" transform="rotate(45)"/>
                    <rect x="-21" y="16"  width="7" height="4.8" rx="1.5" transform="rotate(45)"/>
                    <rect x="14"  y="16"  width="7" height="4.8" rx="1.5" transform="rotate(45)"/>
                  </g>
                </g>
              </g>
              <g transform="translate(60 480)">
                <g className="wa-spin-rev">
                  <circle r="14" fill="#ffffff" stroke="#cfdde5" strokeWidth="1.4"/>
                  <circle r="5" fill="#7c6cf2"/>
                  <g fill="#7c6cf2">
                    <rect x="-1.8" y="-18" width="3.6" height="5" rx="1.2"/>
                    <rect x="-1.8" y="13"  width="3.6" height="5" rx="1.2"/>
                    <rect x="-18"  y="-1.8" width="5" height="3.6" rx="1.2"/>
                    <rect x="13"   y="-1.8" width="5" height="3.6" rx="1.2"/>
                    <rect x="-15" y="-15" width="5" height="3.6" rx="1.2" transform="rotate(45)"/>
                    <rect x="10"  y="-15" width="5" height="3.6" rx="1.2" transform="rotate(45)"/>
                    <rect x="-15" y="11"  width="5" height="3.6" rx="1.2" transform="rotate(45)"/>
                    <rect x="10"  y="11"  width="5" height="3.6" rx="1.2" transform="rotate(45)"/>
                  </g>
                </g>
              </g>
            </g>

            <g id="wa-dots">
              <circle className="wa-dot" cx="60"  cy="280" r="2.6" fill="#21759b"/>
              <circle className="wa-dot" style={{ animationDelay: '.4s' }}  cx="500" cy="280" r="2.6" fill="#7c6cf2"/>
              <circle className="wa-dot" style={{ animationDelay: '.8s' }}  cx="280" cy="40"  r="2.6" fill="#3fb98d"/>
              <circle className="wa-dot" style={{ animationDelay: '1.2s' }} cx="280" cy="540" r="2.6" fill="#ff6b5b"/>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
