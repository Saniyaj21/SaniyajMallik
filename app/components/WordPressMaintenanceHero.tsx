'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Magnetic } from './primitives';

export function WordPressMaintenanceHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.wpmaint-eyebrow', { y: 20, opacity: 0, duration: 0.5 })
        .from('h1',               { y: 32, opacity: 0, duration: 0.65 }, '-=0.25')
        .from('p',                { y: 20, opacity: 0, duration: 0.55 }, '-=0.35')
        .from('.wpmaint-cta',     { y: 16, opacity: 0, duration: 0.5  }, '-=0.35')
        .from('.wpmaint-stage',   { x: 40, opacity: 0, duration: 0.75 }, '-=0.8');
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="wp-maintenance-hero" ref={heroRef}>
      <style>{`
        #wp-maintenance-hero {
          padding-top: 140px; padding-bottom: 80px;
          background: radial-gradient(1200px 600px at 80% 20%, #eef7fc 0%, transparent 60%),
                      radial-gradient(900px 500px at 10% 90%, #f0e9ff 0%, transparent 60%), #fbfdff;
          color: #0e2230;
        }
        #wp-maintenance-hero .wpmaint-inner {
          max-width: 1340px; margin: 0 auto; padding: 0 48px;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 48px; align-items: center; min-height: 70vh;
        }
        #wp-maintenance-hero .wpmaint-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 600; letter-spacing: 0.04em;
          color: #21759b; background: #d6ecf6; padding: 6px 12px; border-radius: 999px;
        }
        #wp-maintenance-hero .wpmaint-eyebrow::before {
          content: ""; width: 6px; height: 6px; border-radius: 50%;
          background: #4fd1a8; box-shadow: 0 0 0 4px rgba(79,209,168,0.2);
        }
        #wp-maintenance-hero h1 {
          font-size: clamp(44px,7vw,96px); line-height: 0.92; letter-spacing: -0.02em;
          margin: 18px 0; text-wrap: pretty;
        }
        #wp-maintenance-hero .wpmaint-grad {
          background: linear-gradient(120deg, #21759b 0%, #7c6cf2 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        #wp-maintenance-hero p { font-size: 18px; line-height: 1.55; color: #1c3a4f; max-width: 52ch; margin: 0 0 28px; }
        #wp-maintenance-hero .wpmaint-cta { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }
        #wp-maintenance-hero .wpmaint-stage {
          position: relative; width: 100%; aspect-ratio: 1/1; max-height: 460px;
          display: flex; align-items: center; justify-content: center; overflow: hidden;
        }
        #wp-maintenance-hero .wpmaint-stage svg { width: 100%; height: 100%; display: block; overflow: visible; text-rendering: geometricPrecision; shape-rendering: geometricPrecision; }

        @keyframes wpmaint-float-a { 0%,100%{transform:translate3d(0,0,0)} 50%{transform:translate3d(0,-10px,0)} }
        @keyframes wpmaint-float-b { 0%,100%{transform:translate3d(0,0,0)} 50%{transform:translate3d(0,-14px,0)} }
        @keyframes wpmaint-float-c { 0%,100%{transform:translate3d(0,0,0)} 50%{transform:translate3d(0,-8px,0)} }
        @keyframes wpmaint-ring-pulse { 0%{transform:scale(.85);opacity:.55} 80%{opacity:.05} 100%{transform:scale(1.55);opacity:0} }
        @keyframes wpmaint-spin { to{transform:rotate(360deg)} }
        @keyframes wpmaint-spin-rev { to{transform:rotate(-360deg)} }
        @keyframes wpmaint-orbit-anim { to{transform:rotate(360deg)} }
        @keyframes wpmaint-orbit-rev-anim { to{transform:rotate(-360deg)} }
        @keyframes wpmaint-dash-fwd { to{stroke-dashoffset:-48} }
        @keyframes wpmaint-pop-dot { 0%,100%{opacity:.35;transform:scale(.9)} 50%{opacity:1;transform:scale(1.05)} }
        @keyframes wpmaint-shimmer-x { 0%{transform:translateX(-80px)} 100%{transform:translateX(260px)} }
        @keyframes wpmaint-check-pop { 0%,70%{transform:scale(.6);opacity:0} 80%{transform:scale(1.18);opacity:1} 100%{transform:scale(1);opacity:1} }
        @keyframes wpmaint-heart-beat { 0%,100%{transform:scale(1)} 20%{transform:scale(1.12)} 40%{transform:scale(.98)} 60%{transform:scale(1.08)} }
        @keyframes wpmaint-clock-sweep { to{transform:rotate(360deg)} }
        @keyframes wpmaint-ekg-draw { 0%{stroke-dashoffset:360} 60%{stroke-dashoffset:0} 100%{stroke-dashoffset:-360} }

        .wpmaint-float-a { animation: wpmaint-float-a 7s cubic-bezier(.45,.05,.55,.95) infinite; transform-origin: center; transform-box: fill-box; will-change: transform; }
        .wpmaint-float-b { animation: wpmaint-float-b 8s cubic-bezier(.45,.05,.55,.95) infinite; transform-origin: center; transform-box: fill-box; will-change: transform; }
        .wpmaint-float-c { animation: wpmaint-float-c 6.5s cubic-bezier(.45,.05,.55,.95) infinite; transform-origin: center; transform-box: fill-box; will-change: transform; }
        .wpmaint-ring { animation: wpmaint-ring-pulse 3.2s cubic-bezier(.25,.6,.35,1) infinite; transform-origin: center; transform-box: fill-box; }
        .wpmaint-spin { animation: wpmaint-spin 24s linear infinite; transform-origin: center; transform-box: fill-box; }
        .wpmaint-spin-rev { animation: wpmaint-spin-rev 28s linear infinite; transform-origin: center; transform-box: fill-box; }
        .wpmaint-orbit { animation: wpmaint-orbit-anim 32s linear infinite; transform-origin: 280px 280px; }
        .wpmaint-orbit-rev { animation: wpmaint-orbit-rev-anim 38s linear infinite; transform-origin: 280px 280px; }
        .wpmaint-clock { animation: wpmaint-clock-sweep 8s linear infinite; transform-origin: center; transform-box: fill-box; }
        .wpmaint-dash-fwd { stroke-dasharray: 6 6; animation: wpmaint-dash-fwd 2.2s linear infinite; }
        .wpmaint-dot { animation: wpmaint-pop-dot 3s cubic-bezier(.45,.05,.55,.95) infinite; transform-origin: center; transform-box: fill-box; }
        .wpmaint-heart { animation: wpmaint-heart-beat 1.6s cubic-bezier(.45,.05,.55,.95) infinite; transform-origin: center; transform-box: fill-box; }
        .wpmaint-ekg { stroke-dasharray: 360; stroke-dashoffset: 360; animation: wpmaint-ekg-draw 3.4s cubic-bezier(.45,.05,.55,.95) infinite; }
        .wpmaint-shimmer { animation: wpmaint-shimmer-x 4s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .wpmaint-float-a,.wpmaint-float-b,.wpmaint-float-c,.wpmaint-ring,.wpmaint-spin,.wpmaint-spin-rev,
          .wpmaint-orbit,.wpmaint-orbit-rev,.wpmaint-clock,.wpmaint-dash-fwd,.wpmaint-dot,
          .wpmaint-heart,.wpmaint-ekg,.wpmaint-shimmer { animation: none; }
          .wpmaint-ekg { stroke-dashoffset: 0; }
        }
        @media (max-width: 1100px) {
          #wp-maintenance-hero { padding-top: 120px; padding-bottom: 60px; }
          #wp-maintenance-hero .wpmaint-inner { padding: 0 32px; gap: 32px; }
        }
        @media (max-width: 900px) {
          #wp-maintenance-hero { padding-top: 100px; padding-bottom: 48px; }
          #wp-maintenance-hero .wpmaint-inner { grid-template-columns: 1fr; padding: 0 24px; gap: 24px; min-height: unset; }
          #wp-maintenance-hero .wpmaint-copy { order: 2; }
          #wp-maintenance-hero .wpmaint-stage { order: 1; max-height: 380px; max-width: 380px; margin: 0 auto; }
        }
        @media (max-width: 600px) {
          #wp-maintenance-hero { padding-top: 88px; padding-bottom: 40px; }
          #wp-maintenance-hero .wpmaint-inner { padding: 0 20px; gap: 20px; }
          #wp-maintenance-hero h1 { font-size: clamp(34px,9vw,52px); margin: 12px 0; }
          #wp-maintenance-hero p { font-size: 15px; margin-bottom: 20px; max-width: unset; }
          #wp-maintenance-hero .wpmaint-cta { flex-direction: column; align-items: stretch; }
          #wp-maintenance-hero .wpmaint-cta .magnetic { width: 100%; }
          #wp-maintenance-hero .wpmaint-cta .btn { justify-content: center; width: 100%; }
          #wp-maintenance-hero .wpmaint-stage { max-height: 300px; max-width: 300px; }
        }
      `}</style>

      <div className="wpmaint-inner">
        <div className="wpmaint-copy">
          <span className="wpmaint-eyebrow">WordPress · Care Plans</span>
          <h1>Maintenance &amp;<br /><span className="wpmaint-grad">Care Plans</span></h1>
          <p>Your site, always updated, always backed up. Proactive monitoring, weekly updates, daily backups, and uptime watch — handled by senior engineers while you sleep.</p>
          <div className="wpmaint-cta">
            <Magnetic>
              <a href="/#contact" className="btn">Start a care plan <span className="btn-arrow">→</span></a>
            </Magnetic>
            <Magnetic>
              <a href="/#contact" className="btn btn-ghost">See what&rsquo;s included</a>
            </Magnetic>
          </div>
        </div>

        <div className="wpmaint-stage" aria-label="Illustration of a WordPress site under continuous care: monitoring heartbeat, scheduled updates, backups, and security shield">
          <svg viewBox="0 0 560 560" xmlns="http://www.w3.org/2000/svg" role="img">
            <defs>
              <linearGradient id="wpmaint-cardBg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff"/><stop offset="100%" stopColor="#f3f8fb"/>
              </linearGradient>
              <linearGradient id="wpmaint-hubHeader" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#21759b"/><stop offset="100%" stopColor="#7c6cf2"/>
              </linearGradient>
              <linearGradient id="wpmaint-bUpd" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9bc4"/><stop offset="100%" stopColor="#21759b"/></linearGradient>
              <linearGradient id="wpmaint-bBkp" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#7ee0bf"/><stop offset="100%" stopColor="#3fb98d"/></linearGradient>
              <linearGradient id="wpmaint-bSec" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#9d8ff8"/><stop offset="100%" stopColor="#7c6cf2"/></linearGradient>
              <linearGradient id="wpmaint-bUpt" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ff8a7d"/><stop offset="100%" stopColor="#ff6b5b"/></linearGradient>
              <linearGradient id="wpmaint-bSpd" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ffd06b"/><stop offset="100%" stopColor="#f5a623"/></linearGradient>
              <linearGradient id="wpmaint-bSup" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f7a3c6"/><stop offset="100%" stopColor="#ef6ea8"/></linearGradient>
              <linearGradient id="wpmaint-ekgGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3fb98d" stopOpacity="0"/>
                <stop offset="50%" stopColor="#3fb98d"/>
                <stop offset="100%" stopColor="#3fb98d" stopOpacity="0"/>
              </linearGradient>
              <radialGradient id="wpmaint-centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7c6cf2" stopOpacity="0.18"/><stop offset="100%" stopColor="#7c6cf2" stopOpacity="0"/>
              </radialGradient>
              <linearGradient id="wpmaint-shimmerGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="white" stopOpacity="0"/>
                <stop offset="50%" stopColor="white" stopOpacity="0.5"/>
                <stop offset="100%" stopColor="white" stopOpacity="0"/>
              </linearGradient>
              <clipPath id="wpmaint-hubClip"><rect x="170" y="170" width="220" height="220" rx="18"/></clipPath>
            </defs>

            <circle cx="280" cy="280" r="240" fill="url(#wpmaint-centerGlow)"/>
            <circle cx="280" cy="280" r="200" fill="none" stroke="#cfdde5" strokeWidth="1" strokeDasharray="2 6" opacity="0.7"/>
            <circle cx="280" cy="280" r="248" fill="none" stroke="#cfdde5" strokeWidth="1" strokeDasharray="2 6" opacity="0.5"/>

            {/* Outer rotating schedule ring */}
            <g className="wpmaint-clock" transform="translate(280 280)">
              <circle r="224" fill="none" stroke="#7c6cf2" strokeWidth="1.4" strokeDasharray="3 12" opacity="0.45"/>
              <circle cx="224" cy="0" r="3" fill="#21759b"/>
              <circle cx="0" cy="224" r="3" fill="#3fb98d"/>
              <circle cx="-224" cy="0" r="3" fill="#7c6cf2"/>
              <circle cx="0" cy="-224" r="3" fill="#ffb74a"/>
            </g>

            <g className="wpmaint-orbit">
              <circle cx="480" cy="280" r="2.6" fill="#21759b"/>
              <circle cx="80" cy="280" r="2.6" fill="#7c6cf2"/>
            </g>
            <g className="wpmaint-orbit-rev">
              <circle cx="421" cy="421" r="2" fill="#ef6ea8"/>
              <circle cx="139" cy="139" r="2" fill="#21759b" opacity="0.7"/>
            </g>
            <g transform="translate(280 280)">
              <circle className="wpmaint-ring" r="120" fill="none" stroke="#7c6cf2" strokeWidth="1.6" opacity="0.5"/>
              <circle className="wpmaint-ring" style={{ animationDelay: '1.3s' }} r="120" fill="none" stroke="#21759b" strokeWidth="1.6" opacity="0.5"/>
            </g>

            {/* Center hub card */}
            <g className="wpmaint-float-b">
              <rect x="174" y="178" width="220" height="220" rx="18" fill="#0c4a63" opacity="0.10"/>
              <rect x="170" y="170" width="220" height="220" rx="18" fill="url(#wpmaint-cardBg)" stroke="#cfdde5"/>
              <rect x="170" y="170" width="220" height="40" rx="18" fill="url(#wpmaint-hubHeader)"/>
              <rect x="170" y="192" width="220" height="18" fill="url(#wpmaint-hubHeader)"/>
              <rect x="170" y="200" width="220" height="10" fill="url(#wpmaint-hubHeader)"/>
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

              {/* Heartbeat block */}
              <g transform="translate(186 226)">
                <rect x="0" y="0" width="58" height="5" rx="2.5" fill="#cfdde5"/>
                <g transform="translate(10 22)" className="wpmaint-heart">
                  <path d="M 0 6 C -10 -2, -10 -14, 0 -10 C 10 -14, 10 -2, 0 6 Z" fill="#ff6b5b"/>
                </g>
                <rect x="26" y="10" width="22" height="18" rx="3" fill="#0e2230"/>
                <rect x="52" y="10" width="14" height="18" rx="3" fill="#0e2230"/>
                <rect x="70" y="10" width="30" height="18" rx="3" fill="#0e2230"/>
                <g transform="translate(120 8)">
                  <rect width="56" height="20" rx="10" fill="#e8f8f0"/>
                  <path d="M 8 11 L 12 15 L 22 5" stroke="#3fb98d" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="28" y="7" width="4" height="6" rx="1" fill="#3fb98d"/>
                  <rect x="34" y="5" width="4" height="8" rx="1" fill="#3fb98d"/>
                  <rect x="40" y="3" width="4" height="10" rx="1" fill="#3fb98d"/>
                </g>
              </g>

              {/* EKG area */}
              <g transform="translate(186 280)">
                <g stroke="#eef3f6" strokeWidth="1">
                  <line x1="0" y1="0" x2="188" y2="0"/>
                  <line x1="0" y1="22" x2="188" y2="22"/>
                  <line x1="0" y1="44" x2="188" y2="44"/>
                  <line x1="0" y1="66" x2="188" y2="66"/>
                  <line x1="0" y1="88" x2="188" y2="88"/>
                </g>
                <line x1="0" y1="50" x2="188" y2="50" stroke="#cfdde5" strokeWidth="1" strokeDasharray="2 4"/>
                <path className="wpmaint-ekg"
                  d="M 0 50 L 24 50 L 32 50 L 38 30 L 46 70 L 54 20 L 62 60 L 70 50 L 96 50 L 104 50 L 110 32 L 118 68 L 126 26 L 134 56 L 142 50 L 188 50"
                  fill="none" stroke="url(#wpmaint-ekgGrad)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="142" cy="50" r="3.4" fill="#3fb98d">
                  <animate attributeName="cx" values="0;188;0" dur="3.4s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0;1;1;0" dur="3.4s" repeatCount="indefinite"/>
                </circle>
              </g>

              {/* Status row */}
              <g transform="translate(186 380)">
                <rect x="0" y="0" width="56" height="14" rx="7" fill="#eef7fc" stroke="#cfdde5"/>
                <circle cx="9" cy="7" r="2.6" fill="#21759b"/>
                <rect x="16" y="5" width="32" height="4" rx="2" fill="#21759b" opacity="0.7"/>
                <rect x="66" y="0" width="56" height="14" rx="7" fill="#e8f8f0" stroke="#cfdde5"/>
                <circle cx="75" cy="7" r="2.6" fill="#3fb98d"/>
                <rect x="82" y="5" width="32" height="4" rx="2" fill="#3fb98d" opacity="0.7"/>
                <rect x="132" y="0" width="56" height="14" rx="7" fill="#f3eeff" stroke="#cfdde5"/>
                <circle cx="141" cy="7" r="2.6" fill="#7c6cf2"/>
                <rect x="148" y="5" width="32" height="4" rx="2" fill="#7c6cf2" opacity="0.7"/>
              </g>

              <g clipPath="url(#wpmaint-hubClip)">
                <rect className="wpmaint-shimmer" x="170" y="170" width="60" height="220" fill="url(#wpmaint-shimmerGrad)" opacity="0.55"/>
              </g>
            </g>

            {/* Connector dashes */}
            <g fill="none" strokeLinecap="round">
              <path d="M 220 196 Q 165 155 128 118" stroke="#21759b" strokeWidth="1.6" opacity="0.28"/>
              <path className="wpmaint-dash-fwd" d="M 220 196 Q 165 155 128 118" stroke="#21759b" strokeWidth="1.8"/>
              <path d="M 280 170 L 280 102" stroke="#3fb98d" strokeWidth="1.6" opacity="0.28"/>
              <path className="wpmaint-dash-fwd" style={{ animationDelay: '.3s' }} d="M 280 170 L 280 102" stroke="#3fb98d" strokeWidth="1.8"/>
              <path d="M 340 196 Q 395 155 432 118" stroke="#7c6cf2" strokeWidth="1.6" opacity="0.28"/>
              <path className="wpmaint-dash-fwd" style={{ animationDelay: '.6s' }} d="M 340 196 Q 395 155 432 118" stroke="#7c6cf2" strokeWidth="1.8"/>
              <path d="M 220 364 Q 170 410 138 452" stroke="#ff6b5b" strokeWidth="1.6" opacity="0.28"/>
              <path className="wpmaint-dash-fwd" style={{ animationDelay: '.9s' }} d="M 220 364 Q 170 410 138 452" stroke="#ff6b5b" strokeWidth="1.8"/>
              <path d="M 280 388 L 280 470" stroke="#f5a623" strokeWidth="1.6" opacity="0.28"/>
              <path className="wpmaint-dash-fwd" style={{ animationDelay: '1.2s' }} d="M 280 388 L 280 470" stroke="#f5a623" strokeWidth="1.8"/>
              <path d="M 340 364 Q 390 410 422 452" stroke="#ef6ea8" strokeWidth="1.6" opacity="0.28"/>
              <path className="wpmaint-dash-fwd" style={{ animationDelay: '1.5s' }} d="M 340 364 Q 390 410 422 452" stroke="#ef6ea8" strokeWidth="1.8"/>
            </g>

            {/* UPDATES badge (top-left) */}
            <g className="wpmaint-float-a">
              <g transform="translate(110 100)">
                <path d="M -32 -18 L 0 -36 L 32 -18 L 32 18 L 0 36 L -32 18 Z" fill="url(#wpmaint-bUpd)" stroke="#0c4a63" strokeWidth="1"/>
                <path d="M -28 -16 L 0 -32 L 28 -16" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.3"/>
                <g transform="translate(0 -4)" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M -10 0 a 10 10 0 1 1 3 7"/>
                  <path d="M -12 -6 L -10 0 L -4 -2"/>
                </g>
                <g transform="translate(0 50)">
                  <circle cx="-8" cy="0" r="2" fill="#21759b" opacity="0.9"/>
                  <circle cx="0" cy="0" r="2" fill="#21759b" opacity="0.5"/>
                  <circle cx="8" cy="0" r="2" fill="#21759b" opacity="0.25"/>
                </g>
              </g>
            </g>

            {/* BACKUPS badge (top-center) */}
            <g className="wpmaint-float-b">
              <g transform="translate(280 70)">
                <path d="M -34 -19 L 0 -38 L 34 -19 L 34 19 L 0 38 L -34 19 Z" fill="url(#wpmaint-bBkp)" stroke="#2ea077" strokeWidth="1"/>
                <g transform="translate(0 -4)" fill="#ffffff" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round">
                  <path d="M -12 0 a 6 6 0 0 1 6 -6 a 7 7 0 0 1 13 1 a 5 5 0 0 1 0 10 H -8 a 5 5 0 0 1 -4 -5 Z"/>
                  <g fill="none" stroke="#3fb98d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 0 4 V 14"/>
                    <path d="M -4 10 L 0 14 L 4 10"/>
                  </g>
                </g>
                <g transform="translate(0 52)">
                  <circle cx="-8" cy="0" r="2.2" fill="#3fb98d" opacity="0.9"/>
                  <circle cx="0" cy="0" r="2.2" fill="#3fb98d" opacity="0.5"/>
                  <circle cx="8" cy="0" r="2.2" fill="#3fb98d" opacity="0.25"/>
                </g>
              </g>
            </g>

            {/* SECURITY badge (top-right) */}
            <g className="wpmaint-float-c">
              <g transform="translate(450 100)">
                <path d="M -32 -18 L 0 -36 L 32 -18 L 32 18 L 0 36 L -32 18 Z" fill="url(#wpmaint-bSec)" stroke="#5847d4" strokeWidth="1"/>
                <g transform="translate(0 -2)">
                  <path d="M 0 -14 L 12 -9 L 12 1 Q 12 9 0 14 Q -12 9 -12 1 L -12 -9 Z" fill="#ffffff"/>
                  <path d="M -5 -1 L -1 4 L 6 -5" fill="none" stroke="#7c6cf2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <g transform="translate(0 50)">
                  <circle cx="-8" cy="0" r="2" fill="#7c6cf2" opacity="0.9"/>
                  <circle cx="0" cy="0" r="2" fill="#7c6cf2" opacity="0.5"/>
                  <circle cx="8" cy="0" r="2" fill="#7c6cf2" opacity="0.25"/>
                </g>
              </g>
            </g>

            {/* UPTIME badge (bottom-left) */}
            <g className="wpmaint-float-a" style={{ animationDelay: '-.8s' }}>
              <g transform="translate(120 470)">
                <path d="M -32 -18 L 0 -36 L 32 -18 L 32 18 L 0 36 L -32 18 Z" fill="url(#wpmaint-bUpt)" stroke="#c0382e" strokeWidth="1"/>
                <g transform="translate(0 -2)">
                  <circle r="11" fill="none" stroke="#ffffff" strokeWidth="2"/>
                  <circle r="1.6" fill="#ffffff"/>
                  <g style={{ animation: 'wpmaint-clock-sweep 8s linear infinite', transformOrigin: '0px 0px', transformBox: 'fill-box' }}>
                    <line x1="0" y1="0" x2="0" y2="-7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                  </g>
                  <line x1="0" y1="0" x2="6" y2="0" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" opacity="0.7"/>
                </g>
                <g transform="translate(0 50)">
                  <circle cx="-8" cy="0" r="2" fill="#ff6b5b" opacity="0.9"/>
                  <circle cx="0" cy="0" r="2" fill="#ff6b5b" opacity="0.5"/>
                  <circle cx="8" cy="0" r="2" fill="#ff6b5b" opacity="0.25"/>
                </g>
              </g>
            </g>

            {/* SPEED badge (bottom-center) */}
            <g className="wpmaint-float-b" style={{ animationDelay: '-1.0s' }}>
              <g transform="translate(280 500)">
                <path d="M -34 -19 L 0 -38 L 34 -19 L 34 19 L 0 38 L -34 19 Z" fill="url(#wpmaint-bSpd)" stroke="#d68812" strokeWidth="1"/>
                <g transform="translate(0 -2)" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M -12 4 a 12 12 0 0 1 24 0"/>
                  <path d="M -8 4 a 8 8 0 0 1 16 0" opacity="0.6"/>
                  <path d="M 0 4 L 6 -6"/>
                  <circle cx="0" cy="4" r="1.6" fill="#ffffff" stroke="none"/>
                </g>
                <g transform="translate(0 52)">
                  <circle cx="-8" cy="0" r="2.2" fill="#f5a623" opacity="0.9"/>
                  <circle cx="0" cy="0" r="2.2" fill="#f5a623" opacity="0.5"/>
                  <circle cx="8" cy="0" r="2.2" fill="#f5a623" opacity="0.25"/>
                </g>
              </g>
            </g>

            {/* SUPPORT badge (bottom-right) */}
            <g className="wpmaint-float-c" style={{ animationDelay: '-1.2s' }}>
              <g transform="translate(440 470)">
                <path d="M -32 -18 L 0 -36 L 32 -18 L 32 18 L 0 36 L -32 18 Z" fill="url(#wpmaint-bSup)" stroke="#b94a82" strokeWidth="1"/>
                <g transform="translate(0 -1)" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M -10 2 a 10 10 0 0 1 20 0 V 6"/>
                  <rect x="-12" y="2" width="6" height="9" rx="2" fill="#ffffff" stroke="none"/>
                  <rect x="6" y="2" width="6" height="9" rx="2" fill="#ffffff" stroke="none"/>
                  <path d="M 10 11 V 13 a 4 3 0 0 1 -4 3 H 0"/>
                  <circle cx="-2" cy="16" r="1.4" fill="#ffffff" stroke="none"/>
                </g>
                <g transform="translate(0 50)">
                  <circle cx="-8" cy="0" r="2" fill="#ef6ea8" opacity="0.9"/>
                  <circle cx="0" cy="0" r="2" fill="#ef6ea8" opacity="0.5"/>
                  <circle cx="8" cy="0" r="2" fill="#ef6ea8" opacity="0.25"/>
                </g>
              </g>
            </g>

            {/* 24/7 chip */}
            <g className="wpmaint-float-a" style={{ animationDelay: '-.4s' }}>
              <g transform="translate(40 240)">
                <rect width="92" height="28" rx="14" fill="#ffffff" stroke="#cfdde5"/>
                <g transform="translate(15 14)" fill="none" stroke="#21759b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 5 -5 a 6 6 0 1 0 0 10 a 5 5 0 0 1 0 -10 Z" fill="#21759b" stroke="none"/>
                  <circle cx="-3" cy="-4" r="0.8" fill="#ffb74a" stroke="none"/>
                  <circle cx="-7" cy="2" r="0.6" fill="#ffb74a" stroke="none"/>
                </g>
                <rect x="32" y="9" width="14" height="4" rx="2" fill="#0e2230"/>
                <rect x="48" y="9" width="14" height="4" rx="2" fill="#0e2230"/>
                <line x1="65" y1="6" x2="71" y2="22" stroke="#cfdde5" strokeWidth="1.6" strokeLinecap="round"/>
                <rect x="74" y="9" width="10" height="4" rx="2" fill="#0e2230"/>
                <rect x="32" y="17" width="52" height="4" rx="2" fill="#cfdde5"/>
              </g>
            </g>

            {/* Big spinning gear */}
            <g transform="translate(490 250)">
              <g className="wpmaint-spin">
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

            {/* Small counter-rotating gear */}
            <g transform="translate(450 280)">
              <g className="wpmaint-spin-rev">
                <circle r="14" fill="#ffffff" stroke="#cfdde5" strokeWidth="1.2"/>
                <circle r="5" fill="#7c6cf2"/>
                <g fill="#7c6cf2">
                  <rect x="-1.5" y="-17" width="3" height="5" rx="1"/>
                  <rect x="-1.5" y="12" width="3" height="5" rx="1"/>
                  <rect x="-17" y="-1.5" width="5" height="3" rx="1"/>
                  <rect x="12" y="-1.5" width="5" height="3" rx="1"/>
                  <rect x="-13" y="-13" width="5" height="3" rx="1" transform="rotate(45)"/>
                  <rect x="8" y="-13" width="5" height="3" rx="1" transform="rotate(45)"/>
                  <rect x="-13" y="10" width="5" height="3" rx="1" transform="rotate(45)"/>
                  <rect x="8" y="10" width="5" height="3" rx="1" transform="rotate(45)"/>
                </g>
              </g>
            </g>

            <g>
              <circle className="wpmaint-dot" cx="280" cy="40" r="3" fill="#3fb98d"/>
              <circle className="wpmaint-dot" style={{ animationDelay: '.4s' }} cx="40" cy="370" r="2.5" fill="#21759b"/>
              <circle className="wpmaint-dot" style={{ animationDelay: '.8s' }} cx="520" cy="370" r="2.5" fill="#7c6cf2"/>
              <circle className="wpmaint-dot" style={{ animationDelay: '1.2s' }} cx="280" cy="540" r="3" fill="#f5a623"/>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
