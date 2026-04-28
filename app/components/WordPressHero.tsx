'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Magnetic } from './primitives';

export function WordPressHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.wph-eyebrow', { y: 20, opacity: 0, duration: 0.5 })
        .from('h1',           { y: 32, opacity: 0, duration: 0.65 }, '-=0.25')
        .from('p',            { y: 20, opacity: 0, duration: 0.55 }, '-=0.35')
        .from('.wph-cta',     { y: 16, opacity: 0, duration: 0.5  }, '-=0.35')
        .from('.wph-stage',   { x: 40, opacity: 0, duration: 0.75 }, '-=0.8');

      gsap.timeline({ delay: 0.6, defaults: { ease: 'back.out(1.4)' } })
        .from('#wph-platform', { scale: 0.7, opacity: 0, transformOrigin: '400px 400px', duration: 0.7, ease: 'back.out(1.7)' })
        .from('#wph-puck',     { y:  40, opacity: 0, duration: 0.55 }, '-=0.3')
        .from('#wph-browser',  { x: -50, y: -20, opacity: 0, duration: 0.65 }, '-=0.3')
        .from('#wph-rocket',   { y: -60, opacity: 0, duration: 0.6 }, '-=0.2')
        .from('#wph-block-a',  { x:  40,         opacity: 0, duration: 0.5 }, '-=0.2')
        .from('#wph-block-b',  { x:  40, y: -20, opacity: 0, duration: 0.5 }, '-=0.4')
        .from('#wph-block-c',  { x:  40, y: -30, opacity: 0, duration: 0.5 }, '-=0.4')
        .from('#wph-wrench',   { x: -40,         opacity: 0, duration: 0.45 }, '-=0.3')
        .from('#wph-trail',    { opacity: 0, duration: 0.35, ease: 'power2.out' }, '-=0.3')
        .from('#wph-micro',    { y: -15, opacity: 0, duration: 0.4, ease: 'power2.out' }, '-=0.2')
        .from('#wph-cursor',   { opacity: 0, duration: 0.3, ease: 'power2.out' }, '-=0.2');
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section id="wp-dev-hero" ref={heroRef}>
        <div className="wph-inner">
          <div className="wph-copy">
            <span className="wph-eyebrow">WordPress Studio</span>
            <h1>Build &amp; <span className="wph-grad">launch</span> your WordPress site.</h1>
            <p>From blank canvas to liftoff. Drag, drop, and deploy with a build kit that&rsquo;s purpose&#8209;built for the world&rsquo;s most popular CMS.</p>
            <div className="wph-cta">
              <Magnetic>
                <a href="/#contact" className="btn">Book a strategy call <span className="btn-arrow">→</span></a>
              </Magnetic>
              <Magnetic>
                <a href="/#work" className="btn btn-ghost">See our work</a>
              </Magnetic>
            </div>
          </div>

            <div className="wph-stage">
              <div className="wph-stage-inner">
                <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Isometric illustration of a WordPress workbench with a launching rocket" style={{ width: '100%', height: '100%', display: 'block', overflow: 'visible' }}>
                  <defs>
                    <linearGradient id="wph-platTop" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ffffff"/>
                      <stop offset="100%" stopColor="#eaf3f8"/>
                    </linearGradient>
                    <linearGradient id="wph-platSide" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#cfe1ec"/>
                      <stop offset="100%" stopColor="#9bbccd"/>
                    </linearGradient>
                    <linearGradient id="wph-platFront" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#bcd5e2"/>
                      <stop offset="100%" stopColor="#86adc1"/>
                    </linearGradient>
                    <linearGradient id="wph-wpTop" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3a96bf"/>
                      <stop offset="100%" stopColor="#21759b"/>
                    </linearGradient>
                    <linearGradient id="wph-wpSide" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1a6486"/>
                      <stop offset="100%" stopColor="#0c4a63"/>
                    </linearGradient>
                    <linearGradient id="wph-cardSide" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#dfe9ef"/>
                      <stop offset="100%" stopColor="#a8c0cd"/>
                    </linearGradient>
                    <linearGradient id="wph-rocketBody" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#ffffff"/>
                      <stop offset="50%" stopColor="#f1f6f9"/>
                      <stop offset="100%" stopColor="#c9d8e1"/>
                    </linearGradient>
                    <linearGradient id="wph-rocketNose" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ff8a7d"/>
                      <stop offset="100%" stopColor="#ff6b5b"/>
                    </linearGradient>
                    <linearGradient id="wph-rocketFin" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ff8a7d"/>
                      <stop offset="100%" stopColor="#e04a3a"/>
                    </linearGradient>
                    <linearGradient id="wph-flameGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#fff2c4"/>
                      <stop offset="40%" stopColor="#ffb74a"/>
                      <stop offset="100%" stopColor="#ff6b5b" stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="wph-blockMint" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#7ee0bf"/>
                      <stop offset="100%" stopColor="#3fb98d"/>
                    </linearGradient>
                    <linearGradient id="wph-blockViolet" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#9d8ff8"/>
                      <stop offset="100%" stopColor="#6a58e6"/>
                    </linearGradient>
                    <linearGradient id="wph-blockAmber" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ffd06b"/>
                      <stop offset="100%" stopColor="#f5a623"/>
                    </linearGradient>
                    <radialGradient id="wph-groundShadow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#0c4a63" stopOpacity="0.22"/>
                      <stop offset="60%" stopColor="#0c4a63" stopOpacity="0.06"/>
                      <stop offset="100%" stopColor="#0c4a63" stopOpacity="0"/>
                    </radialGradient>
                    <linearGradient id="wph-shimmerGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="white" stopOpacity="0"/>
                      <stop offset="50%" stopColor="white" stopOpacity="0.55"/>
                      <stop offset="100%" stopColor="white" stopOpacity="0"/>
                    </linearGradient>
                    <clipPath id="wph-cardClip">
                      <rect x="0" y="0" width="170" height="110" rx="8"/>
                    </clipPath>
                  </defs>

                  {/* Ground shadow */}
                  <ellipse cx="400" cy="430" rx="320" ry="40" fill="url(#wph-groundShadow)"/>

                  {/* Platform */}
                  <g id="wph-platform">
                    <path d="M 400 280 L 660 360 L 400 440 L 140 360 Z" fill="url(#wph-platTop)" stroke="#bdd3de" strokeWidth="1.2"/>
                    <path d="M 660 360 L 660 388 L 400 468 L 400 440 Z" fill="url(#wph-platSide)"/>
                    <path d="M 140 360 L 140 388 L 400 468 L 400 440 Z" fill="url(#wph-platFront)"/>
                    <g opacity="0.35" stroke="#9fbfcf" strokeWidth="0.8" fill="none">
                      <path d="M 270 320 L 530 400"/>
                      <path d="M 335 300 L 595 380"/>
                      <path d="M 205 340 L 465 420"/>
                      <path d="M 335 420 L 595 340"/>
                      <path d="M 270 440 L 530 360"/>
                      <path d="M 205 380 L 465 300"/>
                    </g>
                    <g transform="translate(400 360)">
                      <ellipse className="wph-anim-ring" cx="0" cy="0" rx="60" ry="22" fill="none" stroke="#21759b" strokeWidth="1.6" opacity="0.5"/>
                      <ellipse className="wph-anim-ring" cx="0" cy="0" rx="60" ry="22" style={{ animationDelay: '1.2s' }} fill="none" stroke="#21759b" strokeWidth="1.6" opacity="0.5"/>
                    </g>
                  </g>

                  {/* Browser window */}
                  <g id="wph-browser">
                    <g className="wph-anim-float-a" style={{ animationDelay: '.2s' }}>
                      <g transform="translate(180 175)">
                        <path d="M 0 18 L 14 26 L 14 142 L 0 134 Z" fill="url(#wph-cardSide)"/>
                        <path d="M 0 134 L 14 142 L 184 60 L 170 52 Z" fill="#94b3c2"/>
                        <rect x="0" y="0" width="170" height="118" rx="8" fill="#ffffff" stroke="#cfdde5"/>
                        <rect x="0" y="0" width="170" height="18" rx="8" fill="#eef4f8"/>
                        <rect x="0" y="10" width="170" height="8" fill="#eef4f8"/>
                        <circle cx="10" cy="9" r="3" fill="#ff6b5b"/>
                        <circle cx="22" cy="9" r="3" fill="#ffb74a"/>
                        <circle cx="34" cy="9" r="3" fill="#4fd1a8"/>
                        <rect x="60" y="5" width="80" height="8" rx="4" fill="#dfe7ec"/>
                        <rect x="12" y="28" width="60" height="38" rx="4" fill="#21759b"/>
                        <rect x="20" y="36" width="36" height="4" rx="2" fill="#ffffff" opacity="0.85"/>
                        <rect x="20" y="44" width="44" height="3" rx="1.5" fill="#ffffff" opacity="0.55"/>
                        <rect x="20" y="50" width="28" height="3" rx="1.5" fill="#ffffff" opacity="0.55"/>
                        <rect x="80" y="28" width="78" height="14" rx="3" fill="#e7eef3"/>
                        <rect x="80" y="46" width="78" height="6" rx="2" fill="#eef3f6"/>
                        <rect x="80" y="56" width="60" height="6" rx="2" fill="#eef3f6"/>
                        <rect x="12" y="74" width="46" height="34" rx="4" fill="#f3f7fa" stroke="#e1ebf0"/>
                        <rect x="62" y="74" width="46" height="34" rx="4" fill="#f3f7fa" stroke="#e1ebf0"/>
                        <rect x="112" y="74" width="46" height="34" rx="4" fill="#f3f7fa" stroke="#e1ebf0"/>
                        <circle cx="35" cy="86" r="4" fill="#7c6cf2"/>
                        <rect x="22" y="96" width="26" height="3" rx="1.5" fill="#cfdde5"/>
                        <circle cx="85" cy="86" r="4" fill="#4fd1a8"/>
                        <rect x="72" y="96" width="26" height="3" rx="1.5" fill="#cfdde5"/>
                        <circle cx="135" cy="86" r="4" fill="#ffb74a"/>
                        <rect x="122" y="96" width="26" height="3" rx="1.5" fill="#cfdde5"/>
                        <g clipPath="url(#wph-cardClip)">
                          <rect x="-60" y="18" width="60" height="100" fill="url(#wph-shimmerGrad)" opacity="0.6">
                            <animateTransform attributeName="transform" type="translate" values="-60 0; 230 0" dur="3.5s" repeatCount="indefinite"/>
                          </rect>
                        </g>
                      </g>
                    </g>
                  </g>

                  {/* WP puck */}
                  <g id="wph-puck">
                    <g className="wph-anim-float-b">
                      <g transform="translate(400 295)">
                        <path d="M -70 0 C -70 22 -38 36 0 36 C 38 36 70 22 70 0 L 70 -22 C 70 0 38 14 0 14 C -38 14 -70 0 -70 -22 Z" fill="url(#wph-wpSide)"/>
                        <ellipse cx="0" cy="-22" rx="70" ry="22" fill="url(#wph-wpTop)" stroke="#0c4a63" strokeWidth="0.8"/>
                        <ellipse cx="0" cy="-22" rx="60" ry="18.5" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.45"/>
                        <g transform="translate(0 -22) scale(1 0.34)">
                          <circle r="46" fill="#ffffff"/>
                          <circle r="46" fill="none" stroke="#0c4a63" strokeWidth="2.2" opacity="0.25"/>
                          <g fill="none" stroke="#21759b" strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M -30 -16 L -16 22 L -2 -8"/>
                            <path d="M -2 -8 L 12 22 L 26 -16"/>
                          </g>
                          <path d="M -2 -8 L -2 -22" stroke="#21759b" strokeWidth="6" strokeLinecap="round"/>
                        </g>
                      </g>
                    </g>
                  </g>

                  {/* Block A: mint */}
                  <g id="wph-block-a">
                    <g className="wph-anim-float-c">
                      <g transform="translate(545 295)">
                        <path d="M 0 0 L 50 -16 L 100 0 L 50 16 Z" fill="url(#wph-blockMint)"/>
                        <path d="M 100 0 L 100 36 L 50 52 L 50 16 Z" fill="#2ea077"/>
                        <path d="M 0 0 L 0 36 L 50 52 L 50 16 Z" fill="#3fb98d"/>
                        <g transform="translate(50 0) scale(1 0.5)" stroke="#ffffff" strokeWidth="3" strokeLinecap="round">
                          <path d="M -7 0 L 7 0"/>
                          <path d="M 0 -7 L 0 7"/>
                        </g>
                      </g>
                    </g>
                  </g>

                  {/* Block B: violet */}
                  <g id="wph-block-b">
                    <g className="wph-anim-float-a" style={{ animationDelay: '.6s' }}>
                      <g transform="translate(560 240)">
                        <path d="M 0 0 L 45 -14 L 90 0 L 45 14 Z" fill="url(#wph-blockViolet)"/>
                        <path d="M 90 0 L 90 32 L 45 46 L 45 14 Z" fill="#5847d4"/>
                        <path d="M 0 0 L 0 32 L 45 46 L 45 14 Z" fill="#6a58e6"/>
                        <g transform="translate(45 0) scale(1 0.5)" fill="none" stroke="#ffffff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M -10 -5 L -16 0 L -10 5"/>
                          <path d="M 10 -5 L 16 0 L 10 5"/>
                        </g>
                      </g>
                    </g>
                  </g>

                  {/* Block C: amber */}
                  <g id="wph-block-c">
                    <g className="wph-anim-float-b" style={{ animationDelay: '.4s' }}>
                      <g transform="translate(605 188)">
                        <path d="M 0 0 L 38 -12 L 76 0 L 38 12 Z" fill="url(#wph-blockAmber)"/>
                        <path d="M 76 0 L 76 26 L 38 38 L 38 12 Z" fill="#d68812"/>
                        <path d="M 0 0 L 0 26 L 38 38 L 38 12 Z" fill="#f5a623"/>
                        <g transform="translate(38 0) scale(1 0.5)" fill="none" stroke="#ffffff" strokeWidth="2.4" strokeLinejoin="round">
                          <rect x="-9" y="-6" width="18" height="12" rx="1.5"/>
                          <circle cx="-3" cy="-2" r="1.5" fill="#ffffff" stroke="none"/>
                          <path d="M -9 4 L -2 -1 L 4 3 L 9 0"/>
                        </g>
                      </g>
                    </g>
                  </g>

                  {/* Wrench */}
                  <g id="wph-wrench">
                    <g className="wph-anim-float-c" style={{ animationDelay: '.8s' }}>
                      <g transform="translate(120 320) rotate(-22)">
                        <rect x="0" y="-6" width="80" height="12" rx="6" fill="#4a9bc4"/>
                        <rect x="6" y="-6" width="60" height="2" fill="#ffffff" opacity="0.35"/>
                        <path d="M 80 -14 a 16 16 0 1 1 0 28 L 80 8 a 8 8 0 0 0 0 -16 Z" fill="#21759b"/>
                        <circle cx="86" cy="0" r="4" fill="#0c4a63"/>
                      </g>
                    </g>
                  </g>

                  {/* Cursor */}
                  <g id="wph-cursor">
                    <g className="wph-anim-cursor">
                      <g transform="translate(335 250)">
                        <path d="M 0 0 L 14 4 L 6 7 L 9 16 L 5 17 L 2 9 L -3 12 Z" fill="#0e2230" stroke="#ffffff" strokeWidth="1.4" strokeLinejoin="round"/>
                      </g>
                    </g>
                  </g>

                  {/* Trail dots */}
                  <g id="wph-trail" opacity="0.55">
                    <circle cx="475" cy="280" r="2.6" fill="#21759b"/>
                    <circle cx="473" cy="265" r="2.2" fill="#21759b" opacity="0.8"/>
                    <circle cx="471" cy="248" r="1.8" fill="#21759b" opacity="0.6"/>
                    <circle cx="469" cy="230" r="1.5" fill="#21759b" opacity="0.4"/>
                    <circle cx="467" cy="210" r="1.2" fill="#21759b" opacity="0.25"/>
                  </g>

                  {/* Rocket */}
                  <g id="wph-rocket">
                    <g className="wph-anim-rocket">
                      <g transform="translate(478 130)">
                        <path d="M -10 58 Q -14 78 0 96 Q 14 78 10 58 Z" fill="url(#wph-flameGrad)"/>
                        <path d="M -5 60 Q -7 76 0 88 Q 7 76 5 60 Z" fill="#ffe28a" opacity="0.95"/>
                        <circle className="wph-anim-spark" cx="-6" cy="92" r="2" fill="#ffb74a"/>
                        <circle className="wph-anim-spark" cx="6" cy="92" r="1.6" fill="#ff6b5b" style={{ animationDelay: '.4s' }}/>
                        <circle className="wph-anim-spark" cx="0" cy="96" r="1.4" fill="#ffd06b" style={{ animationDelay: '.8s' }}/>
                        <circle className="wph-anim-spark" cx="-3" cy="94" r="1.2" fill="#ffb74a" style={{ animationDelay: '1.2s' }}/>
                        <path d="M -16 0 Q -16 -32 0 -52 Q 16 -32 16 0 L 16 56 Q 0 64 -16 56 Z" fill="url(#wph-rocketBody)" stroke="#9bbccd" strokeWidth="1"/>
                        <path d="M 0 -50 L 0 60" stroke="#cfdde5" strokeWidth="0.8"/>
                        <path d="M -16 -2 Q -16 -32 0 -52 Q 16 -32 16 -2 Z" fill="url(#wph-rocketNose)"/>
                        <path d="M -4 -42 Q 0 -50 4 -42" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.7"/>
                        <circle cx="0" cy="6" r="11" fill="#0c4a63"/>
                        <circle cx="0" cy="6" r="9" fill="#21759b"/>
                        <circle cx="-3" cy="3" r="3" fill="#ffffff" opacity="0.45"/>
                        <g stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" fill="none">
                          <path d="M -5 4 L -2.5 9 L 0 5.5"/>
                          <path d="M 0 5.5 L 2.5 9 L 5 4"/>
                        </g>
                        <path d="M -16 30 L -28 56 L -16 56 Z" fill="url(#wph-rocketFin)"/>
                        <path d="M  16 30 L  28 56 L  16 56 Z" fill="url(#wph-rocketFin)"/>
                        <circle cx="0" cy="32" r="1.4" fill="#9bbccd"/>
                        <circle cx="0" cy="44" r="1.4" fill="#9bbccd"/>
                      </g>
                    </g>
                  </g>

                  {/* Micro-elements */}
                  <g id="wph-micro" opacity="0.85">
                    <g className="wph-anim-float-a" style={{ animationDelay: '1s' }}>
                      <g transform="translate(290 150)">
                        <rect x="0" y="0" width="44" height="20" rx="4" fill="#ffffff" stroke="#cfdde5"/>
                        <path d="M 8 10 L 12 6 L 12 14 Z" fill="#21759b"/>
                        <path d="M 36 10 L 32 6 L 32 14 Z" fill="#21759b"/>
                        <rect x="16" y="8" width="12" height="4" rx="1" fill="#cfdde5"/>
                      </g>
                    </g>
                    <g className="wph-anim-float-c" style={{ animationDelay: '1.4s' }}>
                      <g transform="translate(620 110)">
                        <rect x="0" y="0" width="58" height="22" rx="11" fill="#ffffff" stroke="#cfdde5"/>
                        <circle cx="11" cy="11" r="4" fill="#4fd1a8"/>
                        <circle cx="11" cy="11" r="4" fill="#4fd1a8" opacity="0.4">
                          <animate attributeName="r" values="4;9;4" dur="2s" repeatCount="indefinite"/>
                          <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite"/>
                        </circle>
                        <text x="20" y="15" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill="#0e2230">LIVE</text>
                      </g>
                    </g>
                    <g className="wph-anim-float-b" style={{ animationDelay: '.2s' }}>
                      <g transform="translate(700 250)">
                        <g>
                          <circle r="11" fill="#ffffff" stroke="#cfdde5"/>
                          <circle r="4" fill="#21759b"/>
                          <g fill="#21759b">
                            <rect x="-1.5" y="-13" width="3" height="5" rx="1"/>
                            <rect x="-1.5" y="8" width="3" height="5" rx="1"/>
                            <rect x="-13" y="-1.5" width="5" height="3" rx="1"/>
                            <rect x="8" y="-1.5" width="5" height="3" rx="1"/>
                          </g>
                          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="14s" repeatCount="indefinite"/>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
      </section>

      <style>{`
        #wp-dev-hero {
          padding-top: 140px; padding-bottom: 80px;
          background: radial-gradient(1200px 600px at 80% 20%, #eef7fc 0%, transparent 60%),
                      radial-gradient(900px 500px at 10% 90%, #f0e9ff 0%, transparent 60%), #fbfdff;
          color: #0e2230;
        }
        #wp-dev-hero .wph-inner {
          max-width: 1340px; margin: 0 auto; padding: 0 48px;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 48px; align-items: center; min-height: 70vh;
        }
        #wp-dev-hero .wph-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 600; letter-spacing: 0.04em;
          color: #21759b; background: #d6ecf6; padding: 6px 12px; border-radius: 999px;
        }
        #wp-dev-hero .wph-eyebrow::before {
          content: ""; width: 6px; height: 6px; border-radius: 50%;
          background: #4fd1a8; box-shadow: 0 0 0 4px rgba(79,209,168,0.2);
        }
        #wp-dev-hero h1 {
          font-size: clamp(44px, 7vw, 96px); line-height: 0.92; letter-spacing: -0.02em;
          margin: 18px 0; text-wrap: pretty;
        }
        #wp-dev-hero .wph-grad {
          background: linear-gradient(120deg, #21759b 0%, #7c6cf2 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        #wp-dev-hero p { font-size: 18px; line-height: 1.55; color: #1c3a4f; max-width: 52ch; margin: 0 0 28px; }
        #wp-dev-hero .wph-cta { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }
        #wp-dev-hero .wph-stage {
          position: relative; width: 100%; aspect-ratio: 16 / 10; max-height: 420px;
          display: flex; align-items: center; justify-content: center; overflow: hidden;
        }
        #wp-dev-hero .wph-stage-inner {
          width: 100%; height: 100%;
        }
        @keyframes wph-float-a {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-8px) rotate(0.4deg); }
        }
        @keyframes wph-float-b {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-12px); }
        }
        @keyframes wph-float-c {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-6px); }
        }
        @keyframes wph-rocket-bob {
          0%, 100% { transform: translate(0, 0); }
          50%      { transform: translate(-2px, -10px); }
        }
        @keyframes wph-spark {
          0%   { transform: translateY(0) scale(1); opacity: 0; }
          20%  { opacity: 1; }
          100% { transform: translateY(40px) scale(0.4); opacity: 0; }
        }
        @keyframes wph-ring-pulse {
          0%   { transform: scale(0.9); opacity: 0.55; }
          100% { transform: scale(1.45); opacity: 0; }
        }
        @keyframes wph-cursor-tap {
          0%, 60%, 100% { transform: translate(0, 0); }
          70%, 80%      { transform: translate(-2px, 2px); }
        }
        .wph-anim-float-a { animation: wph-float-a 5.5s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
        .wph-anim-float-b { animation: wph-float-b 6.2s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
        .wph-anim-float-c { animation: wph-float-c 4.8s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
        .wph-anim-rocket  { animation: wph-rocket-bob 3.2s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
        .wph-anim-spark   { animation: wph-spark 1.6s ease-out infinite; transform-origin: center; transform-box: fill-box; }
        .wph-anim-ring    { animation: wph-ring-pulse 2.4s ease-out infinite; transform-origin: center; transform-box: fill-box; }
        .wph-anim-cursor  { animation: wph-cursor-tap 3s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
        @media (max-width: 1100px) {
          #wp-dev-hero { padding-top: 120px; padding-bottom: 60px; }
          #wp-dev-hero .wph-inner { padding: 0 32px; gap: 32px; }
        }
        @media (max-width: 900px) {
          #wp-dev-hero { padding-top: 100px; padding-bottom: 48px; }
          #wp-dev-hero .wph-inner { grid-template-columns: 1fr; padding: 0 24px; gap: 24px; min-height: unset; }
          #wp-dev-hero .wph-copy { order: 2; }
          #wp-dev-hero .wph-stage { order: 1; max-width: 640px; max-height: unset; margin: 0 auto; }
        }
        @media (max-width: 600px) {
          #wp-dev-hero { padding-top: 88px; padding-bottom: 40px; }
          #wp-dev-hero .wph-inner { padding: 0 20px; gap: 20px; }
          #wp-dev-hero h1 { font-size: clamp(34px, 9vw, 52px); margin: 12px 0; }
          #wp-dev-hero p { font-size: 15px; margin-bottom: 20px; max-width: unset; }
          #wp-dev-hero .wph-cta { flex-direction: column; align-items: stretch; }
          #wp-dev-hero .wph-cta .magnetic { width: 100%; }
          #wp-dev-hero .wph-cta .btn { justify-content: center; width: 100%; }
          #wp-dev-hero .wph-stage { max-width: 100%; }
        }
      `}</style>
    </>
  );
}
