# GSAP SVG Assembly Animation — Dismantled → Final Form

## The Problem

SVG elements often have continuous CSS keyframe animations (float, spin, orbit). When you also want a GSAP entrance animation on the same element, both try to write to the `transform` property — they clash, causing jumps, wrong positions, or broken loops.

Additionally, CSS `transform` animations override SVG `transform` **attributes** in modern browsers. An element with `transform="translate(280 280)"` as an SVG attribute will lose that translation the moment a CSS animation touches `transform`.

---

## The Solution: Wrapper `<g>` Pattern

Wrap each animated section in a plain `<g id="...">`. GSAP targets the **wrapper**; CSS animations live on the **inner element**. They act on separate DOM nodes and never conflict.

```jsx
{/* GSAP animates the outer wrapper */}
<g id="wpmaint-badge-updates">

  {/* CSS float animation lives here, untouched */}
  <g className="wpmaint-float-a">
    <g transform="translate(110 100)">
      {/* badge content */}
    </g>
  </g>

</g>
```

GSAP sets `transform: translate(-60px, -60px)` on `#wpmaint-badge-updates`.
CSS sets `transform: translate3d(0, -10px, 0)` on `.wpmaint-float-a`.
The browser **composes** them — no conflict, no jump.

---

## The CSS / SVG Attribute Conflict Fix

For rotating rings that use `transform-origin`, never mix an SVG `transform` attribute with a CSS animation on the same element. The CSS wins and drops the attribute translation.

**Broken:**
```jsx
<g className="wpmaint-clock" transform="translate(280 280)">
  <circle r="224" .../>   {/* relative coords */}
</g>
```
```css
.wpmaint-clock {
  animation: spin 8s linear infinite;
  transform-origin: center;
  transform-box: fill-box; /* ← fights with the SVG translate */
}
```

**Fixed:** Use absolute SVG coordinates and a fixed `transform-origin` in px.
```jsx
<g className="wpmaint-clock">
  <circle cx="280" cy="280" r="224" .../>  {/* absolute coords */}
  <circle cx="504" cy="280" r="3" .../>
  <circle cx="56"  cy="280" r="3" .../>
</g>
```
```css
.wpmaint-clock {
  animation: spin 8s linear infinite;
  transform-origin: 280px 280px; /* absolute SVG coords */
}
```

---

## The GSAP Assembly Timeline

Two separate timelines run in the same `gsap.context()`:

1. **Text reveal** — fires immediately on mount, animates the copy column.
2. **SVG assembly** — fires with a short `delay`, animates the illustration from dismantled to assembled.

```ts
useEffect(() => {
  const ctx = gsap.context(() => {

    // 1. Text reveal
    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .from('.wpmaint-eyebrow', { y: 20, opacity: 0, duration: 0.5 })
      .from('h1',               { y: 32, opacity: 0, duration: 0.65 }, '-=0.25')
      .from('p',                { y: 20, opacity: 0, duration: 0.55 }, '-=0.35')
      .from('.wpmaint-cta',     { y: 16, opacity: 0, duration: 0.5  }, '-=0.35')
      .from('.wpmaint-stage',   { x: 40, opacity: 0, duration: 0.75 }, '-=0.8');

    // 2. SVG assembly
    gsap.timeline({ delay: 0.6, defaults: { ease: 'back.out(1.4)' } })
      .from('#wpmaint-hub',            { scale: 0.2, opacity: 0, transformOrigin: '280px 280px', duration: 0.7, ease: 'back.out(1.7)' })
      .from('#wpmaint-orbit-dots',     { scale: 0.4, opacity: 0, transformOrigin: '280px 280px', duration: 0.6 }, '-=0.3')
      .from('#wpmaint-ring',           { scale: 0,   opacity: 0, transformOrigin: '280px 280px', duration: 0.7 }, '-=0.4')
      .from('#wpmaint-connectors',     { opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
      .from('#wpmaint-badge-updates',  { x: -60, y: -60, opacity: 0, duration: 0.55 }, '-=0.2')
      .from('#wpmaint-badge-backups',  { y: -70,         opacity: 0, duration: 0.55 }, '-=0.4')
      .from('#wpmaint-badge-security', { x:  60, y: -60, opacity: 0, duration: 0.55 }, '-=0.4')
      .from('#wpmaint-badge-uptime',   { x: -60, y:  60, opacity: 0, duration: 0.55 }, '-=0.4')
      .from('#wpmaint-badge-speed',    { y:  70,         opacity: 0, duration: 0.55 }, '-=0.4')
      .from('#wpmaint-badge-support',  { x:  60, y:  60, opacity: 0, duration: 0.55 }, '-=0.4')
      .from('#wpmaint-chip',           { x: -40,         opacity: 0, duration: 0.45 }, '-=0.3')
      .from('#wpmaint-gears',          { scale: 0, opacity: 0, transformOrigin: '470px 265px', duration: 0.5 }, '-=0.3')
      .from('#wpmaint-dots',           { opacity: 0, duration: 0.35, ease: 'power2.out' }, '-=0.2');

  }, heroRef);
  return () => ctx.revert(); // cleanup on unmount
}, []);
```

### Assembly order rationale

| Step | Element | Why first / last |
|------|---------|-----------------|
| 1 | Hub (centre card) | Focal point — establishes the anchor everything connects to |
| 2 | Orbit rings | Expand outward from the hub, reinforce the centre |
| 3 | Outer ring | Last ring to expand, frames the whole illustration |
| 4 | Connectors | Lines only make sense once both endpoints are visible |
| 5–10 | Badges | Fly in from outside simultaneously (staggered 0.15s) — feels like pieces snapping into place |
| 11 | Chip | Small accent, slides in after the main structure is set |
| 12 | Gears | Pop in last — a satisfying mechanical "click" |
| 13 | Dots | Subtle ambient detail, fades in quietly |

---

## Easing choices

| Easing | Used for | Why |
|--------|---------|-----|
| `back.out(1.7)` | Hub | Overshoot gives a satisfying physical "pop" for the centrepiece |
| `back.out(1.4)` | Badges, ring, gears | Slight overshoot reinforces a mechanical snap-into-place feel |
| `power3.out` | Text reveal | Fast-in slow-out feels natural for reading content |
| `power2.out` | Connectors, dots | Gentle fade with no overshoot — these are supporting elements |

---

## Applying to other hero SVGs

1. Identify the **focal element** (usually the central illustration piece).
2. Group every independent section into a `<g id="...">` wrapper.
3. Keep CSS animation classes on the **inner** `<g>`, not the wrapper.
4. Any element that rotates around a fixed point: use **absolute coordinates** + `transform-origin: Xpx Ypx` in CSS, no SVG `transform` attribute.
5. Build the GSAP timeline from centre outward, badges/chips last.
6. Use `gsap.context(fn, ref)` scoped to the section `ref` — keeps selectors local and cleans up on unmount.
