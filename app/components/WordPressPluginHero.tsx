'use client';

import { Magnetic } from './primitives';

export function WordPressPluginHero() {
  return (
    <>
      <section id="wp-plugin-hero">
        <div className="wpp-inner">
          <div className="wpp-copy">
            <span className="wpp-eyebrow">WordPress Engineering</span>
            <h1><span className="wpp-grad">Custom</span> <span className="wpp-grad">plugins,</span> built for your workflow.</h1>
            <p>From a single hook to a full extension suite — we architect, code, and ship WordPress plugins that fit your stack like they were born there.</p>
            <div className="wpp-cta">
              <Magnetic>
                <a href="/#contact" className="btn">Get a plugin <span className="btn-arrow">→</span></a>
              </Magnetic>
              <Magnetic>
                <a href="/#work" className="btn btn-ghost">View case studies</a>
              </Magnetic>
            </div>
          </div>

            <div className="wpp-stage">
              <div className="wpp-stage-inner">
                <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Isometric illustration of WordPress custom plugin development with a code editor, plug socket, and orbiting modules" style={{ width: '100%', height: '100%', display: 'block', overflow: 'visible' }}>
                  <defs>
                    <linearGradient id="wpp-editorTop" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0e2230"/>
                      <stop offset="100%" stopColor="#1c3a4f"/>
                    </linearGradient>
                    <linearGradient id="wpp-editorChrome" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1c3a4f"/>
                      <stop offset="100%" stopColor="#0e2230"/>
                    </linearGradient>
                    <linearGradient id="wpp-editorSide" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#162e3f"/>
                      <stop offset="100%" stopColor="#0a1a25"/>
                    </linearGradient>
                    <linearGradient id="wpp-plugBody" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3a96bf"/>
                      <stop offset="100%" stopColor="#21759b"/>
                    </linearGradient>
                    <linearGradient id="wpp-plugCable" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#21759b"/>
                      <stop offset="100%" stopColor="#7c6cf2"/>
                    </linearGradient>
                    <radialGradient id="wpp-socketGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#7c6cf2" stopOpacity="0.55"/>
                      <stop offset="100%" stopColor="#7c6cf2" stopOpacity="0"/>
                    </radialGradient>
                    <linearGradient id="wpp-chipMint" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#7ee0bf"/>
                      <stop offset="100%" stopColor="#3fb98d"/>
                    </linearGradient>
                    <linearGradient id="wpp-chipViolet" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#9d8ff8"/>
                      <stop offset="100%" stopColor="#6a58e6"/>
                    </linearGradient>
                    <linearGradient id="wpp-chipAmber" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ffd06b"/>
                      <stop offset="100%" stopColor="#f5a623"/>
                    </linearGradient>
                    <linearGradient id="wpp-chipPink" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ff9bc6"/>
                      <stop offset="100%" stopColor="#ef6ea8"/>
                    </linearGradient>
                    <radialGradient id="wpp-groundShadow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#0c4a63" stopOpacity="0.22"/>
                      <stop offset="60%" stopColor="#0c4a63" stopOpacity="0.06"/>
                      <stop offset="100%" stopColor="#0c4a63" stopOpacity="0"/>
                    </radialGradient>
                  </defs>

                  {/* Ground shadow */}
                  <ellipse cx="400" cy="430" rx="320" ry="36" fill="url(#wpp-groundShadow)"/>

                  {/* Code editor */}
                  <g className="wpp-anim-float-a">
                    <g transform="translate(120 150)">
                      <path d="M 320 30 L 340 42 L 340 230 L 320 218 Z" fill="url(#wpp-editorSide)"/>
                      <path d="M 0 218 L 320 218 L 340 230 L 20 230 Z" fill="#0a1a25"/>
                      <rect x="0" y="0" width="320" height="220" rx="10" fill="url(#wpp-editorTop)" stroke="#0a1a25"/>
                      <rect x="0" y="0" width="320" height="26" rx="10" fill="url(#wpp-editorChrome)"/>
                      <rect x="0" y="14" width="320" height="12" fill="url(#wpp-editorChrome)"/>
                      <circle cx="14" cy="13" r="4" fill="#ff6b5b"/>
                      <circle cx="28" cy="13" r="4" fill="#ffb74a"/>
                      <circle cx="42" cy="13" r="4" fill="#4fd1a8"/>
                      <rect x="62" y="6" width="142" height="20" rx="4" fill="#0e2230"/>
                      <path d="M 70 16 l 4 -4 l 0 8 z" fill="#7c6cf2"/>
                      <text x="80" y="20" fontFamily="ui-monospace, Menlo, monospace" fontSize="11" fill="#cfdde5">my-plugin.php</text>
                      <g stroke="#6b8294" strokeWidth="1.4" strokeLinecap="round">
                        <path d="M 192 12 L 198 18"/>
                        <path d="M 198 12 L 192 18"/>
                      </g>
                      <rect x="0" y="26" width="64" height="194" fill="#0a1a25"/>
                      <g fontFamily="ui-monospace, Menlo, monospace" fontSize="9" fill="#6b8294">
                        <text x="8" y="44">▾ src</text>
                        <text x="14" y="58" fill="#cfdde5">plugin.php</text>
                        <text x="14" y="72">hooks.php</text>
                        <text x="14" y="86">admin.php</text>
                        <text x="8" y="102">▸ assets</text>
                        <text x="8" y="116">▸ tests</text>
                        <text x="8" y="130">readme.md</text>
                      </g>
                      <rect x="2" y="49" width="60" height="12" rx="2" fill="#21759b" opacity="0.25"/>
                      <g transform="translate(72 36)">
                        <g fontFamily="ui-monospace, Menlo, monospace" fontSize="9" fill="#3a5366" textAnchor="end">
                          <text x="14" y="10">1</text>
                          <text x="14" y="24">2</text>
                          <text x="14" y="38">3</text>
                          <text x="14" y="52">4</text>
                          <text x="14" y="66">5</text>
                          <text x="14" y="80">6</text>
                          <text x="14" y="94">7</text>
                          <text x="14" y="108">8</text>
                          <text x="14" y="122">9</text>
                          <text x="14" y="136">10</text>
                          <text x="14" y="150">11</text>
                          <text x="14" y="164">12</text>
                          <text x="14" y="178">13</text>
                        </g>
                        <g transform="translate(22 4)">
                          <rect y="0" width="42" height="6" rx="2" fill="#ef6ea8"/>
                          <rect y="14" width="120" height="5" rx="2" fill="#3a5366"/>
                          <rect y="28" width="80" height="5" rx="2" fill="#3a5366"/>
                          <rect y="42" width="36" height="6" rx="2" fill="#7c6cf2"/>
                          <rect x="40" y="42" width="78" height="6" rx="2" fill="#cfdde5"/>
                          <rect y="70" width="44" height="6" rx="2" fill="#4fd1a8"/>
                          <rect x="48" y="70" width="6" height="6" rx="1" fill="#cfdde5"/>
                          <rect x="58" y="70" width="64" height="6" rx="2" fill="#ffb74a"/>
                          <rect x="126" y="70" width="6" height="6" rx="1" fill="#cfdde5"/>
                          <rect x="136" y="70" width="46" height="6" rx="2" fill="#7c6cf2"/>
                          <rect y="84" width="52" height="6" rx="2" fill="#7c6cf2"/>
                          <rect x="56" y="84" width="68" height="6" rx="2" fill="#4fd1a8"/>
                          <rect x="128" y="84" width="40" height="6" rx="2" fill="#cfdde5"/>
                          <rect x="14" y="98" width="36" height="6" rx="2" fill="#ef6ea8"/>
                          <rect x="54" y="98" width="80" height="6" rx="2" fill="#cfdde5"/>
                          <rect x="14" y="112" width="56" height="6" rx="2" fill="#4fd1a8"/>
                          <rect x="74" y="112" width="40" height="6" rx="2" fill="#ffb74a"/>
                          <rect x="14" y="126" width="76" height="6" rx="2" fill="#cfdde5"/>
                          <rect y="140" width="6" height="6" rx="1" fill="#ef6ea8"/>
                          <rect y="154" width="36" height="6" rx="2" fill="#7c6cf2"/>
                          <rect x="40" y="154" width="64" height="6" rx="2" fill="#cfdde5">
                            <animate attributeName="width" values="0;64;64;64" keyTimes="0;0.4;0.9;1" dur="3.4s" repeatCount="indefinite"/>
                          </rect>
                          <rect className="wpp-anim-caret" x="106" y="153" width="2" height="9" fill="#ffffff"/>
                        </g>
                      </g>
                      <rect x="0" y="206" width="320" height="14" fill="#21759b"/>
                      <g fontFamily="ui-monospace, Menlo, monospace" fontSize="8" fill="#ffffff" opacity="0.9">
                        <text x="8" y="216">PHP</text>
                        <text x="32" y="216">UTF-8</text>
                        <text x="68" y="216">Ln 12, Col 18</text>
                      </g>
                      <circle cx="306" cy="213" r="3" fill="#4fd1a8"/>
                    </g>
                  </g>

                  {/* Cable */}
                  <path d="M 380 300 C 430 320, 470 300, 500 280" fill="none" stroke="url(#wpp-plugCable)" strokeWidth="6" strokeLinecap="round"/>
                  <path className="wpp-anim-dash" d="M 380 300 C 430 320, 470 300, 500 280" fill="none" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" opacity="0.55"/>

                  {/* Plug */}
                  <g className="wpp-anim-float-b">
                    <g transform="translate(500 240)">
                      <rect x="-46" y="22" width="22" height="18" rx="4" fill="#0c4a63"/>
                      <rect x="-46" y="24" width="22" height="3" fill="#1a6486"/>
                      <rect x="-46" y="32" width="22" height="3" fill="#1a6486"/>
                      <rect x="-26" y="14" width="56" height="34" rx="8" fill="url(#wpp-plugBody)" stroke="#0c4a63"/>
                      <rect x="-22" y="18" width="48" height="4" rx="2" fill="#ffffff" opacity="0.35"/>
                      <g stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
                        <path d="M -10 30 L -5 40 L 0 32"/>
                        <path d="M 0 32 L 5 40 L 10 30"/>
                      </g>
                      <rect x="30" y="20" width="22" height="5" rx="2" fill="#cfdde5" stroke="#9bbccd"/>
                      <rect x="30" y="36" width="22" height="5" rx="2" fill="#cfdde5" stroke="#9bbccd"/>
                      <rect x="50" y="20" width="3" height="5" fill="#9bbccd"/>
                      <rect x="50" y="36" width="3" height="5" fill="#9bbccd"/>
                    </g>
                  </g>

                  {/* Socket */}
                  <g className="wpp-anim-float-c">
                    <g transform="translate(615 270)">
                      <circle r="62" fill="url(#wpp-socketGlow)"/>
                      <circle className="wpp-anim-ring" r="34" fill="none" stroke="#7c6cf2" strokeWidth="1.8" opacity="0.5"/>
                      <circle className="wpp-anim-ring" r="34" style={{ animationDelay: '1.3s' }} fill="none" stroke="#7c6cf2" strokeWidth="1.8" opacity="0.5"/>
                      <circle r="38" fill="#ffffff" stroke="#cfdde5" strokeWidth="1.5"/>
                      <circle r="32" fill="#f3f7fa" stroke="#dfe9ef"/>
                      <circle r="22" fill="none" stroke="#21759b" strokeWidth="2" opacity="0.55"/>
                      <rect x="-2" y="-12" width="4" height="10" rx="1.5" fill="#0e2230"/>
                      <rect x="-2" y="2" width="4" height="10" rx="1.5" fill="#0e2230"/>
                      <circle r="3" fill="#9bbccd"/>
                      <path d="M -2 0 L 2 0" stroke="#0e2230" strokeWidth="1" strokeLinecap="round"/>
                    </g>
                  </g>

                  {/* HOOK chip */}
                  <g className="wpp-anim-float-a" style={{ animationDelay: '.4s' }}>
                    <g transform="translate(420 110) scale(0.75)">
                      <rect x="-44" y="-16" width="88" height="32" rx="8" fill="url(#wpp-chipMint)" stroke="#2ea077" strokeWidth="1.2"/>
                      <circle cx="0" cy="-16" r="6" fill="#fbfdff" stroke="#2ea077" strokeWidth="1.2"/>
                      <g transform="translate(-26 0)" stroke="#ffffff" strokeWidth="2.4" fill="none" strokeLinecap="round">
                        <path d="M -6 -4 L -6 2 a 6 6 0 0 0 12 0"/>
                        <circle cx="-6" cy="-6" r="1.6" fill="#ffffff" stroke="none"/>
                      </g>
                      <text x="-8" y="4" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#ffffff">HOOK</text>
                    </g>
                  </g>

                  {/* REST chip */}
                  <g className="wpp-anim-float-c" style={{ animationDelay: '.8s' }}>
                    <g transform="translate(660 150) scale(0.75)">
                      <rect x="-46" y="-16" width="92" height="32" rx="8" fill="url(#wpp-chipViolet)" stroke="#5847d4" strokeWidth="1.2"/>
                      <circle cx="-46" cy="0" r="6" fill="#fbfdff" stroke="#5847d4" strokeWidth="1.2"/>
                      <g transform="translate(-30 0)" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M -4 -6 q -4 0 -4 4 q 0 2 -2 2 q 2 0 2 2 q 0 4 4 4"/>
                        <path d="M 4 -6 q 4 0 4 4 q 0 2 2 2 q -2 0 -2 2 q 0 4 -4 4"/>
                      </g>
                      <text x="-12" y="4" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#ffffff">REST</text>
                    </g>
                  </g>

                  {/* ADMIN chip */}
                  <g className="wpp-anim-float-b" style={{ animationDelay: '.2s' }}>
                    <g transform="translate(700 360) scale(0.75)">
                      <rect x="-50" y="-16" width="100" height="32" rx="8" fill="url(#wpp-chipAmber)" stroke="#d68812" strokeWidth="1.2"/>
                      <circle cx="-50" cy="0" r="6" fill="#fbfdff" stroke="#d68812" strokeWidth="1.2"/>
                      <g transform="translate(-32 0)" stroke="#ffffff" strokeWidth="1.8" fill="none" strokeLinejoin="round">
                        <rect x="-7" y="-6" width="14" height="12" rx="1.5"/>
                        <path d="M -7 -2 L 7 -2"/>
                        <circle cx="-4.5" cy="-4.2" r="0.8" fill="#ffffff" stroke="none"/>
                      </g>
                      <text x="-15" y="4" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#ffffff">ADMIN</text>
                    </g>
                  </g>

                  {/* CRON chip */}
                  <g className="wpp-anim-float-a" style={{ animationDelay: '1s' }}>
                    <g transform="translate(360 410) scale(0.75)">
                      <rect x="-42" y="-16" width="84" height="32" rx="8" fill="url(#wpp-chipPink)" stroke="#c0508c" strokeWidth="1.2"/>
                      <circle cx="42" cy="0" r="6" fill="#fbfdff" stroke="#c0508c" strokeWidth="1.2"/>
                      <g transform="translate(-24 0)" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round">
                        <circle r="7"/>
                        <path d="M 0 -4 L 0 0 L 4 2"/>
                      </g>
                      <text x="-10" y="4" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#ffffff">CRON</text>
                    </g>
                  </g>

                  {/* Gear cluster */}
                  <g transform="translate(580 95)">
                    <g className="wpp-anim-spin">
                      <circle r="28" fill="#ffffff" stroke="#cfdde5" strokeWidth="1.5"/>
                      <circle r="11" fill="#21759b"/>
                      <circle r="5" fill="#0c4a63"/>
                      <g fill="#21759b">
                        <rect x="-3" y="-32" width="6" height="9" rx="1.5"/>
                        <rect x="-3" y="23" width="6" height="9" rx="1.5"/>
                        <rect x="-32" y="-3" width="9" height="6" rx="1.5"/>
                        <rect x="23" y="-3" width="9" height="6" rx="1.5"/>
                        <rect x="-26" y="-26" width="9" height="6" rx="1.5" transform="rotate(45)"/>
                        <rect x="17" y="-26" width="9" height="6" rx="1.5" transform="rotate(45)"/>
                        <rect x="-26" y="20" width="9" height="6" rx="1.5" transform="rotate(45)"/>
                        <rect x="17" y="20" width="9" height="6" rx="1.5" transform="rotate(45)"/>
                      </g>
                    </g>
                    <g transform="translate(34 30)" className="wpp-anim-spin-rev">
                      <circle r="14" fill="#ffffff" stroke="#cfdde5" strokeWidth="1.2"/>
                      <circle r="5" fill="#7c6cf2"/>
                      <g fill="#7c6cf2">
                        <rect x="-1.6" y="-17" width="3.2" height="5" rx="1"/>
                        <rect x="-1.6" y="12" width="3.2" height="5" rx="1"/>
                        <rect x="-17" y="-1.6" width="5" height="3.2" rx="1"/>
                        <rect x="12" y="-1.6" width="5" height="3.2" rx="1"/>
                        <rect x="-13" y="-13" width="5" height="3.2" rx="1" transform="rotate(45)"/>
                        <rect x="8" y="-13" width="5" height="3.2" rx="1" transform="rotate(45)"/>
                        <rect x="-13" y="10" width="5" height="3.2" rx="1" transform="rotate(45)"/>
                        <rect x="8" y="10" width="5" height="3.2" rx="1" transform="rotate(45)"/>
                      </g>
                    </g>
                  </g>

                  {/* Version pill */}
                  <g className="wpp-anim-float-c" style={{ animationDelay: '.6s' }}>
                    <g transform="translate(140 105)">
                      <rect width="92" height="24" rx="12" fill="#ffffff" stroke="#cfdde5"/>
                      <circle cx="13" cy="12" r="4" fill="#4fd1a8"/>
                      <text x="24" y="16" fontFamily="ui-monospace, Menlo, monospace" fontSize="10" fontWeight="700" fill="#0e2230">v1.0.0</text>
                      <text x="60" y="16" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="600" fill="#3fb98d">stable</text>
                    </g>
                  </g>

                  {/* Hook snippet */}
                  <g className="wpp-anim-float-b" style={{ animationDelay: '1.2s' }}>
                    <g transform="translate(80 380)">
                      <rect width="170" height="44" rx="8" fill="#ffffff" stroke="#cfdde5"/>
                      <text x="14" y="20" fontFamily="ui-monospace, Menlo, monospace" fontSize="10" fill="#0e2230">
                        <tspan fill="#4fd1a8">add_filter</tspan>
                        <tspan fill="#0e2230">(</tspan>
                        <tspan fill="#ffb74a">&apos;init&apos;</tspan>
                        <tspan fill="#0e2230">,</tspan>
                      </text>
                      <text x="22" y="34" fontFamily="ui-monospace, Menlo, monospace" fontSize="10">
                        <tspan fill="#7c6cf2">__namespace</tspan>
                        <tspan fill="#0e2230">\boot);</tspan>
                      </text>
                    </g>
                  </g>

                  {/* Tests passing badge */}
                  <g className="wpp-anim-float-a" style={{ animationDelay: '.9s' }}>
                    <g transform="translate(290 70)">
                      <rect width="120" height="24" rx="12" fill="#0e2230"/>
                      <g transform="translate(11 12)">
                        <circle r="6" fill="#4fd1a8"/>
                        <path d="M -2.4 0 L -0.5 2 L 2.6 -1.6" stroke="#0e2230" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                      <text x="24" y="16" fontFamily="ui-monospace, Menlo, monospace" fontSize="10" fontWeight="600" fill="#ffffff">tests passing</text>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
      </section>

      <style>{`
        #wp-plugin-hero {
          padding-top: 140px; padding-bottom: 80px;
          background: radial-gradient(1200px 600px at 80% 20%, #eef7fc 0%, transparent 60%),
                      radial-gradient(900px 500px at 10% 90%, #f0e9ff 0%, transparent 60%), #fbfdff;
          color: #0e2230;
        }
        #wp-plugin-hero .wpp-inner {
          max-width: 1340px; margin: 0 auto; padding: 0 48px;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 48px; align-items: center; min-height: 70vh;
        }
        #wp-plugin-hero .wpp-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 600; letter-spacing: 0.04em;
          color: #21759b; background: #d6ecf6; padding: 6px 12px; border-radius: 999px;
        }
        #wp-plugin-hero .wpp-eyebrow::before {
          content: ""; width: 6px; height: 6px; border-radius: 50%;
          background: #7c6cf2; box-shadow: 0 0 0 4px rgba(124,108,242,0.2);
        }
        #wp-plugin-hero h1 {
          font-size: clamp(44px, 7vw, 96px); line-height: 0.92; letter-spacing: -0.02em;
          margin: 18px 0; padding-bottom: 0.12em; text-wrap: pretty; overflow: visible;
        }
        #wp-plugin-hero .wpp-grad {
          background: linear-gradient(120deg, #21759b 0%, #7c6cf2 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        #wp-plugin-hero p { font-size: 18px; line-height: 1.55; color: #1c3a4f; max-width: 52ch; margin: 0 0 28px; }
        #wp-plugin-hero .wpp-cta { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }
        #wp-plugin-hero .wpp-stage {
          position: relative; width: 100%; aspect-ratio: 16 / 10; max-height: 420px;
          display: flex; align-items: center; justify-content: center; overflow: hidden;
        }
        #wp-plugin-hero .wpp-stage-inner {
          width: 100%; height: 100%;
        }
        @keyframes wpp-float-a {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-8px) rotate(0.4deg); }
        }
        @keyframes wpp-float-b {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-12px); }
        }
        @keyframes wpp-float-c {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-6px); }
        }
        @keyframes wpp-spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes wpp-spin-rev {
          from { transform: rotate(360deg); }
          to   { transform: rotate(0deg); }
        }
        @keyframes wpp-ring-pulse {
          0%   { transform: scale(0.9); opacity: 0.55; }
          100% { transform: scale(1.45); opacity: 0; }
        }
        @keyframes wpp-caret-blink {
          0%, 49%   { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes wpp-dash-flow {
          to { stroke-dashoffset: -40; }
        }
        .wpp-anim-float-a  { animation: wpp-float-a 5.5s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
        .wpp-anim-float-b  { animation: wpp-float-b 6.2s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
        .wpp-anim-float-c  { animation: wpp-float-c 4.8s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
        .wpp-anim-spin     { animation: wpp-spin-slow 18s linear infinite; transform-origin: center; transform-box: fill-box; }
        .wpp-anim-spin-rev { animation: wpp-spin-rev 22s linear infinite; transform-origin: center; transform-box: fill-box; }
        .wpp-anim-ring     { animation: wpp-ring-pulse 2.6s ease-out infinite; transform-origin: center; transform-box: fill-box; }
        .wpp-anim-caret    { animation: wpp-caret-blink 1.1s steps(2) infinite; }
        .wpp-anim-dash     { stroke-dasharray: 6 6; animation: wpp-dash-flow 1.6s linear infinite; }
        @media (max-width: 1100px) {
          #wp-plugin-hero { padding-top: 120px; padding-bottom: 60px; }
          #wp-plugin-hero .wpp-inner { padding: 0 32px; gap: 32px; }
        }
        @media (max-width: 900px) {
          #wp-plugin-hero { padding-top: 100px; padding-bottom: 48px; }
          #wp-plugin-hero .wpp-inner { grid-template-columns: 1fr; padding: 0 24px; gap: 24px; min-height: unset; }
          #wp-plugin-hero .wpp-copy { order: 2; }
          #wp-plugin-hero .wpp-stage { order: 1; max-width: 640px; max-height: unset; margin: 0 auto; }
        }
        @media (max-width: 600px) {
          #wp-plugin-hero { padding-top: 88px; padding-bottom: 40px; }
          #wp-plugin-hero .wpp-inner { padding: 0 20px; gap: 20px; }
          #wp-plugin-hero h1 { font-size: clamp(34px, 9vw, 52px); margin: 12px 0; }
          #wp-plugin-hero p { font-size: 15px; margin-bottom: 20px; max-width: unset; }
          #wp-plugin-hero .wpp-cta { flex-direction: column; align-items: stretch; }
          #wp-plugin-hero .wpp-cta .magnetic { width: 100%; }
          #wp-plugin-hero .wpp-cta .btn { justify-content: center; width: 100%; }
          #wp-plugin-hero .wpp-stage { max-width: 100%; }
        }
      `}</style>
    </>
  );
}
