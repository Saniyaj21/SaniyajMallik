'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Magnetic } from './primitives';

export function WordPressMigrationsHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.wpm-eyebrow', { y: 20, opacity: 0, duration: 0.5 })
        .from('h1',           { y: 32, opacity: 0, duration: 0.65 }, '-=0.25')
        .from('p',            { y: 20, opacity: 0, duration: 0.55 }, '-=0.35')
        .from('.wpm-cta',     { y: 16, opacity: 0, duration: 0.5  }, '-=0.35')
        .from('.wpm-stage',   { x: 40, opacity: 0, duration: 0.75 }, '-=0.8');
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="wp-migrations-hero" ref={heroRef}>
      <style>{`
        #wp-migrations-hero {
          padding-top: 140px; padding-bottom: 80px;
          background: radial-gradient(1200px 600px at 80% 20%, #eef7fc 0%, transparent 60%),
                      radial-gradient(900px 500px at 10% 90%, #f0e9ff 0%, transparent 60%), #fbfdff;
          color: #0e2230;
        }
        #wp-migrations-hero .wpm-inner {
          max-width: 1340px; margin: 0 auto; padding: 0 48px;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 48px; align-items: center; min-height: 70vh;
        }
        #wp-migrations-hero .wpm-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 600; letter-spacing: 0.04em;
          color: #21759b; background: #d6ecf6; padding: 6px 12px; border-radius: 999px;
        }
        #wp-migrations-hero .wpm-eyebrow::before {
          content: ""; width: 6px; height: 6px; border-radius: 50%;
          background: #4fd1a8; box-shadow: 0 0 0 4px rgba(79,209,168,0.2);
        }
        #wp-migrations-hero h1 {
          font-size: clamp(44px,7vw,96px); line-height: 0.92; letter-spacing: -0.02em;
          margin: 18px 0; text-wrap: pretty;
        }
        #wp-migrations-hero .wpm-grad {
          background: linear-gradient(120deg, #21759b 0%, #7c6cf2 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        #wp-migrations-hero p { font-size: 18px; line-height: 1.55; color: #1c3a4f; max-width: 52ch; margin: 0 0 28px; }
        #wp-migrations-hero .wpm-cta { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }
        #wp-migrations-hero .wpm-stage {
          position: relative; width: 100%; aspect-ratio: 1/1; max-height: 460px;
          display: flex; align-items: center; justify-content: center; overflow: hidden;
        }
        #wp-migrations-hero .wpm-stage svg { width: 100%; height: 100%; display: block; overflow: visible; text-rendering: geometricPrecision; shape-rendering: geometricPrecision; }

        @keyframes wpm-float-a { 0%,100%{transform:translate3d(0,0,0)} 50%{transform:translate3d(0,-10px,0)} }
        @keyframes wpm-float-b { 0%,100%{transform:translate3d(0,0,0)} 50%{transform:translate3d(0,-14px,0)} }
        @keyframes wpm-float-c { 0%,100%{transform:translate3d(0,0,0)} 50%{transform:translate3d(0,-8px,0)} }
        @keyframes wpm-ring-pulse { 0%{transform:scale(.85);opacity:.55} 80%{opacity:.05} 100%{transform:scale(1.55);opacity:0} }
        @keyframes wpm-spin { to{transform:rotate(360deg)} }
        @keyframes wpm-orbit-anim { to{transform:rotate(360deg)} }
        @keyframes wpm-orbit-rev-anim { to{transform:rotate(-360deg)} }
        @keyframes wpm-dash-fwd { to{stroke-dashoffset:-48} }
        @keyframes wpm-pop-dot { 0%,100%{opacity:.35;transform:scale(.9)} 50%{opacity:1;transform:scale(1.05)} }
        @keyframes wpm-shimmer-x { 0%{transform:translateX(-80px)} 100%{transform:translateX(260px)} }
        @keyframes wpm-packet-fly { 0%{offset-distance:0%;opacity:0} 8%{opacity:1} 92%{opacity:1} 100%{offset-distance:100%;opacity:0} }
        @keyframes wpm-progress-fill { 0%{transform:scaleX(.18)} 50%{transform:scaleX(.78)} 100%{transform:scaleX(.96)} }
        @keyframes wpm-check-pop { 0%,70%{transform:scale(.6);opacity:0} 80%{transform:scale(1.18);opacity:1} 100%{transform:scale(1);opacity:1} }

        .wpm-float-a { animation: wpm-float-a 7s cubic-bezier(.45,.05,.55,.95) infinite; transform-origin: center; transform-box: fill-box; will-change: transform; }
        .wpm-float-b { animation: wpm-float-b 8s cubic-bezier(.45,.05,.55,.95) infinite; transform-origin: center; transform-box: fill-box; will-change: transform; }
        .wpm-float-c { animation: wpm-float-c 6.5s cubic-bezier(.45,.05,.55,.95) infinite; transform-origin: center; transform-box: fill-box; will-change: transform; }
        .wpm-ring { animation: wpm-ring-pulse 3.2s cubic-bezier(.25,.6,.35,1) infinite; transform-origin: center; transform-box: fill-box; }
        .wpm-spin { animation: wpm-spin 24s linear infinite; transform-origin: center; transform-box: fill-box; }
        .wpm-orbit { animation: wpm-orbit-anim 32s linear infinite; transform-origin: 280px 280px; }
        .wpm-orbit-rev { animation: wpm-orbit-rev-anim 38s linear infinite; transform-origin: 280px 280px; }
        .wpm-dash-fwd { stroke-dasharray: 6 6; animation: wpm-dash-fwd 2.2s linear infinite; }
        .wpm-dot { animation: wpm-pop-dot 3s cubic-bezier(.45,.05,.55,.95) infinite; transform-origin: center; transform-box: fill-box; }
        .wpm-check { animation: wpm-check-pop 4s cubic-bezier(.34,.01,.21,1) infinite; transform-origin: center; transform-box: fill-box; }
        .wpm-shimmer { animation: wpm-shimmer-x 4s ease-in-out infinite; }
        .wpm-packet { offset-path: path('M 110 320 C 180 180, 380 180, 450 320'); offset-rotate: 0deg; animation: wpm-packet-fly 3.2s cubic-bezier(.45,.05,.55,.95) infinite; will-change: offset-distance, opacity; }
        .wpm-packet-2 { animation-delay: -1.0s; }
        .wpm-packet-3 { animation-delay: -2.0s; }
        .wpm-packet-4 { animation-delay: -0.5s; }
        .wpm-packet-5 { animation-delay: -1.6s; }
        .wpm-progress-fill { transform-origin: left center; transform-box: fill-box; animation: wpm-progress-fill 4.5s cubic-bezier(.34,.01,.21,1) infinite alternate; will-change: transform; }

        @media (prefers-reduced-motion: reduce) {
          .wpm-float-a,.wpm-float-b,.wpm-float-c,.wpm-ring,.wpm-spin,.wpm-orbit,.wpm-orbit-rev,
          .wpm-dash-fwd,.wpm-dot,.wpm-check,.wpm-shimmer,.wpm-packet,.wpm-progress-fill { animation: none; }
        }
        @media (max-width: 1100px) {
          #wp-migrations-hero { padding-top: 120px; padding-bottom: 60px; }
          #wp-migrations-hero .wpm-inner { padding: 0 32px; gap: 32px; }
        }
        @media (max-width: 900px) {
          #wp-migrations-hero { padding-top: 100px; padding-bottom: 48px; }
          #wp-migrations-hero .wpm-inner { grid-template-columns: 1fr; padding: 0 24px; gap: 24px; min-height: unset; }
          #wp-migrations-hero .wpm-copy { order: 2; }
          #wp-migrations-hero .wpm-stage { order: 1; max-height: 380px; max-width: 380px; margin: 0 auto; }
        }
        @media (max-width: 600px) {
          #wp-migrations-hero { padding-top: 88px; padding-bottom: 40px; }
          #wp-migrations-hero .wpm-inner { padding: 0 20px; gap: 20px; }
          #wp-migrations-hero h1 { font-size: clamp(34px,9vw,52px); margin: 12px 0; }
          #wp-migrations-hero p { font-size: 15px; margin-bottom: 20px; max-width: unset; }
          #wp-migrations-hero .wpm-cta { flex-direction: column; align-items: stretch; }
          #wp-migrations-hero .wpm-cta .magnetic { width: 100%; }
          #wp-migrations-hero .wpm-cta .btn { justify-content: center; width: 100%; }
          #wp-migrations-hero .wpm-stage { max-height: 300px; max-width: 300px; }
        }
      `}</style>

      <div className="wpm-inner">
        <div className="wpm-copy">
          <span className="wpm-eyebrow">WordPress · Migrations</span>
          <h1>WordPress<br /><span className="wpm-grad">Migrations</span></h1>
          <p>Move platforms without losing data, SEO, or sleep. We migrate every post, redirect, user, and pixel — with zero-downtime cutovers and integrity checks at every step.</p>
          <div className="wpm-cta">
            <Magnetic>
              <a href="/#contact" className="btn">Plan a migration <span className="btn-arrow">→</span></a>
            </Magnetic>
            <Magnetic>
              <a href="/#contact" className="btn btn-ghost">See the checklist</a>
            </Magnetic>
          </div>
        </div>

        <div className="wpm-stage" aria-label="Illustration of data migrating from a legacy platform to WordPress through a secure verified pipeline">
          <svg viewBox="0 0 560 560" xmlns="http://www.w3.org/2000/svg" role="img">
            <defs>
              <linearGradient id="wpm-cardBg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff"/><stop offset="100%" stopColor="#f3f8fb"/>
              </linearGradient>
              <linearGradient id="wpm-srcHeader" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#6b8294"/><stop offset="100%" stopColor="#8aa2b3"/>
              </linearGradient>
              <linearGradient id="wpm-dstHeader" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#21759b"/><stop offset="100%" stopColor="#7c6cf2"/>
              </linearGradient>
              <linearGradient id="wpm-pipeGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#6b8294"/><stop offset="50%" stopColor="#7c6cf2"/><stop offset="100%" stopColor="#21759b"/>
              </linearGradient>
              <linearGradient id="wpm-pipeFill" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7c6cf2" stopOpacity="0"/>
                <stop offset="50%" stopColor="#7c6cf2" stopOpacity="0.25"/>
                <stop offset="100%" stopColor="#21759b" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="wpm-badgeSeo" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#7ee0bf"/><stop offset="100%" stopColor="#3fb98d"/></linearGradient>
              <linearGradient id="wpm-badgeData" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9bc4"/><stop offset="100%" stopColor="#21759b"/></linearGradient>
              <linearGradient id="wpm-badgeMedia" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ffd06b"/><stop offset="100%" stopColor="#f5a623"/></linearGradient>
              <linearGradient id="wpm-badgeRedir" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#9d8ff8"/><stop offset="100%" stopColor="#7c6cf2"/></linearGradient>
              <linearGradient id="wpm-badgeUsers" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ff8a7d"/><stop offset="100%" stopColor="#ff6b5b"/></linearGradient>
              <linearGradient id="wpm-badgeSsl" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f7a3c6"/><stop offset="100%" stopColor="#ef6ea8"/></linearGradient>
              <radialGradient id="wpm-centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7c6cf2" stopOpacity="0.18"/><stop offset="100%" stopColor="#7c6cf2" stopOpacity="0"/>
              </radialGradient>
              <linearGradient id="wpm-shimmerGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="white" stopOpacity="0"/>
                <stop offset="50%" stopColor="white" stopOpacity="0.5"/>
                <stop offset="100%" stopColor="white" stopOpacity="0"/>
              </linearGradient>
              <clipPath id="wpm-dstClip"><rect x="320" y="300" width="180" height="160" rx="14"/></clipPath>
              <clipPath id="wpm-progressClip"><rect x="343" y="438" width="134" height="10" rx="5"/></clipPath>
            </defs>

            <circle cx="280" cy="280" r="240" fill="url(#wpm-centerGlow)"/>
            <circle cx="280" cy="280" r="200" fill="none" stroke="#cfdde5" strokeWidth="1" strokeDasharray="2 6" opacity="0.7"/>
            <circle cx="280" cy="280" r="248" fill="none" stroke="#cfdde5" strokeWidth="1" strokeDasharray="2 6" opacity="0.5"/>
            <g className="wpm-orbit">
              <circle cx="480" cy="280" r="3" fill="#21759b"/>
              <circle cx="80" cy="280" r="3" fill="#7c6cf2"/>
              <circle cx="280" cy="80" r="2.4" fill="#3fb98d"/>
            </g>
            <g className="wpm-orbit-rev">
              <circle cx="280" cy="528" r="2.4" fill="#ffb74a"/>
              <circle cx="421" cy="421" r="2" fill="#ef6ea8"/>
              <circle cx="139" cy="139" r="2" fill="#21759b" opacity="0.7"/>
            </g>
            <g transform="translate(280 250)">
              <circle className="wpm-ring" r="80" fill="none" stroke="#7c6cf2" strokeWidth="1.6" opacity="0.5"/>
              <circle className="wpm-ring" style={{ animationDelay: '1.3s' }} r="80" fill="none" stroke="#21759b" strokeWidth="1.6" opacity="0.5"/>
            </g>

            {/* Migration arc pipe */}
            <path d="M 110 320 C 180 180, 380 180, 450 320" fill="none" stroke="url(#wpm-pipeFill)" strokeWidth="36" strokeLinecap="round" opacity="0.55"/>
            <path d="M 110 320 C 180 180, 380 180, 450 320" fill="none" stroke="url(#wpm-pipeGrad)" strokeWidth="3" strokeLinecap="round" opacity="0.9"/>
            <path className="wpm-dash-fwd" d="M 110 320 C 180 180, 380 180, 450 320" fill="none" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" opacity="0.85"/>
            <g transform="translate(450 320)">
              <circle r="10" fill="#21759b"/>
              <path d="M -3 -4 L 3 0 L -3 4 Z" fill="#ffffff"/>
            </g>
            <g transform="translate(110 320)">
              <circle r="10" fill="#6b8294"/>
              <circle r="4" fill="#ffffff"/>
            </g>

            {/* Data packets */}
            <g className="wpm-packet">
              <g transform="translate(-12 -10)">
                <rect width="24" height="20" rx="5" fill="#ffffff" stroke="#21759b" strokeWidth="1.4"/>
                <ellipse cx="12" cy="6" rx="6" ry="2" fill="none" stroke="#21759b" strokeWidth="1.2"/>
                <path d="M 6 6 V 14 a 6 2 0 0 0 12 0 V 6" fill="none" stroke="#21759b" strokeWidth="1.2"/>
              </g>
            </g>
            <g className="wpm-packet wpm-packet-2">
              <g transform="translate(-12 -10)">
                <rect width="24" height="20" rx="5" fill="#ffffff" stroke="#7c6cf2" strokeWidth="1.4"/>
                <rect x="6" y="6" width="12" height="1.6" fill="#7c6cf2"/>
                <rect x="6" y="10" width="12" height="1.6" fill="#7c6cf2" opacity="0.6"/>
                <rect x="6" y="14" width="8" height="1.6" fill="#7c6cf2" opacity="0.4"/>
              </g>
            </g>
            <g className="wpm-packet wpm-packet-3">
              <g transform="translate(-12 -10)">
                <rect width="24" height="20" rx="5" fill="#ffffff" stroke="#f5a623" strokeWidth="1.4"/>
                <circle cx="9" cy="9" r="2" fill="#f5a623"/>
                <path d="M 4 16 L 10 11 L 14 14 L 20 8" fill="none" stroke="#f5a623" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
            </g>
            <g className="wpm-packet wpm-packet-4">
              <g transform="translate(-12 -10)">
                <rect width="24" height="20" rx="5" fill="#ffffff" stroke="#ff6b5b" strokeWidth="1.4"/>
                <circle cx="12" cy="9" r="2.4" fill="#ff6b5b"/>
                <path d="M 6 16 a 6 4 0 0 1 12 0" fill="none" stroke="#ff6b5b" strokeWidth="1.4" strokeLinecap="round"/>
              </g>
            </g>
            <g className="wpm-packet wpm-packet-5">
              <g transform="translate(-12 -10)">
                <rect width="24" height="20" rx="5" fill="#ffffff" stroke="#3fb98d" strokeWidth="1.4"/>
                <path d="M 6 12 H 14 L 11 9 M 14 12 L 11 15" fill="none" stroke="#3fb98d" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M 18 8 H 12 L 15 5" fill="none" stroke="#3fb98d" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
              </g>
            </g>

            {/* Source card */}
            <g className="wpm-float-a">
              <g transform="translate(60 300)">
                <rect x="4" y="6" width="120" height="150" rx="14" fill="#0c4a63" opacity="0.10"/>
                <rect x="0" y="0" width="120" height="150" rx="14" fill="url(#wpm-cardBg)" stroke="#cfdde5"/>
                <rect x="0" y="0" width="120" height="28" rx="14" fill="url(#wpm-srcHeader)"/>
                <rect x="0" y="14" width="120" height="14" fill="url(#wpm-srcHeader)"/>
                <circle cx="12" cy="14" r="2.6" fill="#ffffff" opacity="0.9"/>
                <circle cx="22" cy="14" r="2.6" fill="#ffffff" opacity="0.6"/>
                <circle cx="32" cy="14" r="2.6" fill="#ffffff" opacity="0.4"/>
                <rect x="46" y="11" width="50" height="6" rx="3" fill="#ffffff" opacity="0.8"/>
                <g transform="translate(60 70)">
                  <g className="wpm-spin">
                    <circle r="22" fill="#eef3f6" stroke="#cfdde5"/>
                    <circle r="8" fill="#6b8294"/>
                    <g fill="#6b8294">
                      <rect x="-2" y="-26" width="4" height="6" rx="1.5"/>
                      <rect x="-2" y="20" width="4" height="6" rx="1.5"/>
                      <rect x="-26" y="-2" width="6" height="4" rx="1.5"/>
                      <rect x="20" y="-2" width="6" height="4" rx="1.5"/>
                      <rect x="-21" y="-21" width="6" height="4" rx="1.5" transform="rotate(45)"/>
                      <rect x="14" y="-21" width="6" height="4" rx="1.5" transform="rotate(45)"/>
                      <rect x="-21" y="16" width="6" height="4" rx="1.5" transform="rotate(45)"/>
                      <rect x="14" y="16" width="6" height="4" rx="1.5" transform="rotate(45)"/>
                    </g>
                  </g>
                </g>
                <rect x="14" y="108" width="92" height="6" rx="3" fill="#cfdde5"/>
                <rect x="14" y="120" width="64" height="5" rx="2.5" fill="#dde6ec"/>
                <rect x="14" y="130" width="78" height="5" rx="2.5" fill="#dde6ec"/>
                <g transform="translate(102 122)">
                  <circle r="10" fill="#ffffff" stroke="#cfdde5"/>
                  <path d="M -3 0 H 4 M 1 -3 L 4 0 L 1 3" stroke="#6b8294" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </g>
            </g>

            {/* Destination card */}
            <g className="wpm-float-b">
              <g transform="translate(320 300)">
                <rect x="4" y="6" width="180" height="160" rx="14" fill="#0c4a63" opacity="0.12"/>
                <rect x="0" y="0" width="180" height="160" rx="14" fill="url(#wpm-cardBg)" stroke="#cfdde5"/>
                <rect x="0" y="0" width="180" height="32" rx="14" fill="url(#wpm-dstHeader)"/>
                <rect x="0" y="16" width="180" height="16" fill="url(#wpm-dstHeader)"/>
                <circle cx="12" cy="16" r="3" fill="#ffffff" opacity="0.9"/>
                <circle cx="24" cy="16" r="3" fill="#ffffff" opacity="0.6"/>
                <circle cx="36" cy="16" r="3" fill="#ffffff" opacity="0.4"/>
                <rect x="50" y="13" width="78" height="6" rx="3" fill="#ffffff" opacity="0.85"/>
                <g transform="translate(160 16)">
                  <circle r="4" fill="#4fd1a8"/>
                  <circle r="4" fill="#4fd1a8" opacity="0.4">
                    <animate attributeName="r" values="4;9;4" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite"/>
                  </circle>
                </g>
                <g transform="translate(40 78)">
                  <circle r="22" fill="#21759b"/>
                  <circle r="22" fill="none" stroke="#ffffff" strokeWidth="1.4" opacity="0.5"/>
                  <g fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M -12 -5 L -5 10 L 0 -2"/><path d="M 0 -2 L 5 10 L 12 -5"/>
                  </g>
                </g>
                <rect x="74" y="60" width="86" height="8" rx="3" fill="#0e2230"/>
                <rect x="74" y="74" width="68" height="5" rx="2.5" fill="#cfdde5"/>
                <rect x="74" y="84" width="78" height="5" rx="2.5" fill="#dde6ec"/>
                <g transform="translate(20 110)">
                  <rect x="0" y="0" width="46" height="22" rx="5" fill="#eef7fc" stroke="#cfdde5"/>
                  <rect x="6" y="6" width="34" height="3.5" rx="1.5" fill="#21759b"/>
                  <rect x="6" y="14" width="22" height="2.5" rx="1.2" fill="#cfdde5"/>
                  <rect x="54" y="0" width="46" height="22" rx="5" fill="#f3eeff" stroke="#cfdde5"/>
                  <rect x="60" y="6" width="34" height="3.5" rx="1.5" fill="#7c6cf2"/>
                  <rect x="60" y="14" width="22" height="2.5" rx="1.2" fill="#cfdde5"/>
                  <rect x="108" y="0" width="46" height="22" rx="5" fill="#e8f8f0" stroke="#cfdde5"/>
                  <rect x="114" y="6" width="34" height="3.5" rx="1.5" fill="#3fb98d"/>
                  <rect x="114" y="14" width="22" height="2.5" rx="1.2" fill="#cfdde5"/>
                </g>
                <rect x="23" y="138" width="134" height="10" rx="5" fill="#eef3f6" stroke="#cfdde5"/>
                <g clipPath="url(#wpm-progressClip)">
                  <rect className="wpm-progress-fill" x="23" y="138" width="134" height="10" rx="5" fill="url(#wpm-dstHeader)"/>
                </g>
                <g clipPath="url(#wpm-dstClip)">
                  <rect className="wpm-shimmer" x="-80" y="0" width="60" height="160" fill="url(#wpm-shimmerGrad)" opacity="0.55"/>
                </g>
              </g>
            </g>

            {/* Center shield */}
            <g className="wpm-float-c">
              <g transform="translate(280 250)">
                <path d="M 0 -42 L 36 -28 L 36 6 Q 36 30 0 46 Q -36 30 -36 6 L -36 -28 Z" fill="#ffffff" stroke="#21759b" strokeWidth="2"/>
                <path d="M 0 -38 L 32 -25 L 32 5 Q 32 26 0 41 Q -32 26 -32 5 L -32 -25 Z" fill="url(#wpm-dstHeader)" opacity="0.12"/>
                <g className="wpm-check">
                  <path d="M -14 0 L -3 12 L 16 -10" fill="none" stroke="#21759b" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </g>
            </g>

            {/* Connector lines */}
            <g fill="none" strokeLinecap="round">
              <path d="M 280 208 Q 230 170 178 142" stroke="#3fb98d" strokeWidth="1.6" opacity="0.28"/>
              <path className="wpm-dash-fwd" d="M 280 208 Q 230 170 178 142" stroke="#3fb98d" strokeWidth="1.8"/>
              <path d="M 280 208 L 280 122" stroke="#21759b" strokeWidth="1.6" opacity="0.28"/>
              <path className="wpm-dash-fwd" style={{ animationDelay: '.3s' }} d="M 280 208 L 280 122" stroke="#21759b" strokeWidth="1.8"/>
              <path d="M 280 208 Q 330 170 382 142" stroke="#f5a623" strokeWidth="1.6" opacity="0.28"/>
              <path className="wpm-dash-fwd" style={{ animationDelay: '.6s' }} d="M 280 208 Q 330 170 382 142" stroke="#f5a623" strokeWidth="1.8"/>
              <path d="M 200 380 Q 170 430 138 470" stroke="#7c6cf2" strokeWidth="1.6" opacity="0.28"/>
              <path className="wpm-dash-fwd" style={{ animationDelay: '.9s' }} d="M 200 380 Q 170 430 138 470" stroke="#7c6cf2" strokeWidth="1.8"/>
              <path d="M 280 388 L 280 470" stroke="#ff6b5b" strokeWidth="1.6" opacity="0.28"/>
              <path className="wpm-dash-fwd" style={{ animationDelay: '1.2s' }} d="M 280 388 L 280 470" stroke="#ff6b5b" strokeWidth="1.8"/>
              <path d="M 360 380 Q 390 430 422 470" stroke="#ef6ea8" strokeWidth="1.6" opacity="0.28"/>
              <path className="wpm-dash-fwd" style={{ animationDelay: '1.5s' }} d="M 360 380 Q 390 430 422 470" stroke="#ef6ea8" strokeWidth="1.8"/>
            </g>

            {/* SEO badge */}
            <g className="wpm-float-a" style={{ animationDelay: '-.2s' }}>
              <g transform="translate(150 120)">
                <path d="M -26 -15 L 0 -30 L 26 -15 L 26 15 L 0 30 L -26 15 Z" fill="url(#wpm-badgeSeo)" stroke="#2ea077" strokeWidth="1"/>
                <path d="M -22 -13 L 0 -26 L 22 -13" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.3"/>
                <g transform="translate(-3 -3)" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round">
                  <circle r="7"/><path d="M 5 5 L 11 11"/>
                </g>
                <g transform="translate(0 44)">
                  <circle cx="-8" cy="0" r="2" fill="#3fb98d" opacity="0.9"/>
                  <circle cx="0" cy="0" r="2" fill="#3fb98d" opacity="0.5"/>
                  <circle cx="8" cy="0" r="2" fill="#3fb98d" opacity="0.25"/>
                </g>
              </g>
            </g>

            {/* DATA badge */}
            <g className="wpm-float-b" style={{ animationDelay: '-.5s' }}>
              <g transform="translate(280 92)">
                <path d="M -26 -15 L 0 -30 L 26 -15 L 26 15 L 0 30 L -26 15 Z" fill="url(#wpm-badgeData)" stroke="#0c4a63" strokeWidth="1"/>
                <g transform="translate(0 -4)" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round">
                  <ellipse cx="0" cy="-5" rx="9" ry="3" fill="#ffffff"/>
                  <path d="M -9 -5 V 5 a 9 3 0 0 0 18 0 V -5"/>
                  <path d="M -9 0 a 9 3 0 0 0 18 0" opacity="0.6"/>
                </g>
                <g transform="translate(0 44)">
                  <circle cx="-8" cy="0" r="2" fill="#21759b" opacity="0.9"/>
                  <circle cx="0" cy="0" r="2" fill="#21759b" opacity="0.5"/>
                  <circle cx="8" cy="0" r="2" fill="#21759b" opacity="0.25"/>
                </g>
              </g>
            </g>

            {/* MEDIA badge */}
            <g className="wpm-float-c" style={{ animationDelay: '-.8s' }}>
              <g transform="translate(410 120)">
                <path d="M -26 -15 L 0 -30 L 26 -15 L 26 15 L 0 30 L -26 15 Z" fill="url(#wpm-badgeMedia)" stroke="#d68812" strokeWidth="1"/>
                <g transform="translate(0 -2)" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
                  <rect x="-10" y="-7" width="20" height="14" rx="2"/>
                  <circle cx="-4" cy="-2" r="2" fill="#ffffff" stroke="none"/>
                  <path d="M -10 5 L -2 -1 L 4 3 L 10 -2"/>
                </g>
                <g transform="translate(0 44)">
                  <circle cx="-8" cy="0" r="2" fill="#f5a623" opacity="0.9"/>
                  <circle cx="0" cy="0" r="2" fill="#f5a623" opacity="0.5"/>
                  <circle cx="8" cy="0" r="2" fill="#f5a623" opacity="0.25"/>
                </g>
              </g>
            </g>

            {/* REDIRECTS badge */}
            <g className="wpm-float-a" style={{ animationDelay: '-1.0s' }}>
              <g transform="translate(120 488)">
                <path d="M -26 -15 L 0 -30 L 26 -15 L 26 15 L 0 30 L -26 15 Z" fill="url(#wpm-badgeRedir)" stroke="#5847d4" strokeWidth="1"/>
                <g transform="translate(0 -2)" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M -10 4 H 6 L 2 0 M 6 4 L 2 8"/>
                  <path d="M 10 -4 H -2 L 2 -8 M -2 -4 L 2 0" opacity="0.7"/>
                </g>
                <g transform="translate(0 -44)">
                  <circle cx="-8" cy="0" r="2" fill="#7c6cf2" opacity="0.9"/>
                  <circle cx="0" cy="0" r="2" fill="#7c6cf2" opacity="0.5"/>
                  <circle cx="8" cy="0" r="2" fill="#7c6cf2" opacity="0.25"/>
                </g>
              </g>
            </g>

            {/* USERS badge */}
            <g className="wpm-float-b" style={{ animationDelay: '-1.3s' }}>
              <g transform="translate(280 500)">
                <path d="M -26 -15 L 0 -30 L 26 -15 L 26 15 L 0 30 L -26 15 Z" fill="url(#wpm-badgeUsers)" stroke="#c0382e" strokeWidth="1"/>
                <g transform="translate(0 -2)" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round">
                  <circle cx="-5" cy="-4" r="3.5" fill="#ffffff"/>
                  <circle cx="6" cy="-3" r="3" fill="#ffffff" opacity="0.85"/>
                  <path d="M -12 8 a 7 5 0 0 1 14 0" strokeLinejoin="round"/>
                  <path d="M 0 8 a 6 4 0 0 1 12 0" opacity="0.85" strokeLinejoin="round"/>
                </g>
                <g transform="translate(0 -44)">
                  <circle cx="-8" cy="0" r="2" fill="#ff6b5b" opacity="0.9"/>
                  <circle cx="0" cy="0" r="2" fill="#ff6b5b" opacity="0.5"/>
                  <circle cx="8" cy="0" r="2" fill="#ff6b5b" opacity="0.25"/>
                </g>
              </g>
            </g>

            {/* SSL badge */}
            <g className="wpm-float-c" style={{ animationDelay: '-1.6s' }}>
              <g transform="translate(440 488)">
                <path d="M -26 -15 L 0 -30 L 26 -15 L 26 15 L 0 30 L -26 15 Z" fill="url(#wpm-badgeSsl)" stroke="#b94a82" strokeWidth="1"/>
                <g transform="translate(0 -2)" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="-7" y="0" width="14" height="10" rx="2" fill="#ffffff" stroke="none"/>
                  <path d="M -4 0 V -4 a 4 4 0 0 1 8 0 V 0"/>
                  <circle cx="0" cy="5" r="1.4" fill="#ef6ea8" stroke="none"/>
                </g>
                <g transform="translate(0 -44)">
                  <circle cx="-8" cy="0" r="2" fill="#ef6ea8" opacity="0.9"/>
                  <circle cx="0" cy="0" r="2" fill="#ef6ea8" opacity="0.5"/>
                  <circle cx="8" cy="0" r="2" fill="#ef6ea8" opacity="0.25"/>
                </g>
              </g>
            </g>

            {/* 301 chip */}
            <g className="wpm-float-a" style={{ animationDelay: '-.4s' }}>
              <g transform="translate(40 240)">
                <rect width="92" height="28" rx="14" fill="#ffffff" stroke="#cfdde5"/>
                <g transform="translate(15 14)" stroke="#21759b" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M -7 -4 H 5 L 1 -8 M 5 -4 L 1 0"/>
                  <path d="M 7 4 H -5 L -1 8 M -5 4 L -1 0" opacity="0.6"/>
                </g>
                <rect x="34" y="9" width="44" height="4" rx="2" fill="#21759b" opacity="0.85"/>
                <rect x="34" y="17" width="30" height="4" rx="2" fill="#cfdde5"/>
              </g>
            </g>

            {/* Spinning gear */}
            <g transform="translate(490 240)">
              <g className="wpm-spin">
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
              <circle className="wpm-dot" cx="280" cy="40" r="3" fill="#7c6cf2"/>
              <circle className="wpm-dot" style={{ animationDelay: '.4s' }} cx="40" cy="180" r="2.5" fill="#21759b"/>
              <circle className="wpm-dot" style={{ animationDelay: '.8s' }} cx="520" cy="180" r="2.5" fill="#3fb98d"/>
              <circle className="wpm-dot" style={{ animationDelay: '1.2s' }} cx="280" cy="540" r="3" fill="#ff6b5b"/>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
