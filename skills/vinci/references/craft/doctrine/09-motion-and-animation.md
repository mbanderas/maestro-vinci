# 09 — Motion & Animation

Motion is the rarest thing to get right and the most common to overdo. Done well, animation explains state change and reinforces hierarchy. Done badly, it slows the interface, distracts the eye, and signals "more polish needed."

This chapter covers easing, choreography, restraint, and the kinds of motion that actually work.

---

## What motion is for

Motion has three legitimate jobs:

1. **Explaining state change.** Something opened. Something selected. Something arrived.
2. **Establishing spatial relationships.** This came from there. This goes there.
3. **Providing feedback.** Your tap registered. Your form submitted.

Motion is *not* for:

- Decoration
- "Polish"
- Demonstrating that the page loaded
- Making static content feel alive
- Buying time during slow loads (use real loading patterns)

When you reach for an animation, ask: *what state change am I explaining?* If you can't answer, don't animate.

---

## Easing — the foundation

Easing is the most under-considered aspect of motion. The defaults (`linear`, `ease`) are almost always wrong.

### Easing functions

| Curve | When to use |
|---|---|
| `linear` | Almost never. Indicates "no acceleration" — useful only for continuous motion like a loading spinner. |
| `ease-out` | **Default for entering.** Things arrive fast and settle. Most common. |
| `ease-in` | **Default for exiting.** Things leave slow then accelerate away. |
| `ease-in-out` | For motion that stays on screen — repositioning, resizing. |
| `cubic-bezier(0.4, 0, 0.2, 1)` | Material's "standard" — works for almost everything UI. |
| `cubic-bezier(0.16, 1, 0.3, 1)` | A snappier ease-out. Feels modern and responsive. |
| `cubic-bezier(0.34, 1.56, 0.64, 1)` | Slight overshoot — good for arrivals that should feel bouncy. |
| Spring physics | For natural, hand-feel motion. Worth a real library. |

A reliable default stack:

```css
:root {
  --ease-out:   cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in:    cubic-bezier(0.7, 0, 0.84, 0);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### The asymmetry rule

**Entering motion is faster than exiting motion.** Things should arrive quickly so the user can act; things should leave gently so the user can track them.

Rough defaults:
- Enter: 150-250ms with `ease-out`
- Exit: 200-300ms with `ease-in`

---

## Duration

Most motion is too slow. Defaults:

- **Micro-interactions** (hover, focus, button press): 100-150ms
- **State changes** (toggle on, accordion open): 200-300ms
- **Large transitions** (page change, modal open): 300-500ms
- **Storytelling motion** (onboarding sequences, hero animations): 500-1500ms

Anything longer than 500ms in a UI better be carrying narrative weight. The user is waiting for it.

For **scrubbed** motion (driven by scroll, drag, time), there's no duration — it's tied to input. But the easing curve still matters.

---

## What to animate

Animate the **smallest possible thing** that conveys the change.

When something enters:
- ✅ Opacity + small translateY (8–16px)
- ✅ Opacity + small scale (0.95 → 1)
- ❌ Slides from way off-screen
- ❌ Bounces, spins, zooms

When something exits:
- ✅ Fade out, optionally with a tiny translate
- ❌ Slides far away, shrinks to nothing

When something changes state (toggle, selection):
- ✅ Color transition on the affected element
- ✅ Subtle scale or border change
- ❌ Whole-element bounce or shake

The pattern is **small, fast, plausible**. Real-world objects don't bounce when they appear.

---

## Choreography

When multiple elements animate, they should feel related — not like they were each told to animate independently.

### Staggering

A list of items appearing should stagger by a small interval (30–80ms) so the eye can follow the sequence:

```css
.item { animation: enter 300ms var(--ease-out) backwards; }
.item:nth-child(1) { animation-delay: 0ms; }
.item:nth-child(2) { animation-delay: 40ms; }
.item:nth-child(3) { animation-delay: 80ms; }
/* ...etc */
```

A subtle stagger reads as composed. No stagger reads as bulk. Heavy stagger reads as showy.

### Origin and direction

Animated elements should appear *from* somewhere meaningful:

- A dropdown opens *from* the button that triggered it
- A modal scales *from* the center, or fades from the trigger
- A new card appears *at* the place it lives, not flying in from off-screen

This spatial coherence is what makes motion feel intentional vs. decorative.

### Cause and effect

Two elements changing should be choreographed:

- The button that's clicked depresses *before* the action's result animates in
- A panel closing finishes *before* the next panel opens (not strictly — they can overlap by 50-100ms for snappiness)
- Loading state appears *before* the request resolves, vanishes *after*

---

## Specific motion patterns

### Hover

```css
.button {
  transition: background-color 150ms var(--ease-out),
              transform 150ms var(--ease-out);
}
.button:hover {
  background-color: var(--color-primary-hover);
  transform: translateY(-1px);
}
```

A 1px lift, a slight color shift. Subtle is the right amount.

### Click / press

A small scale-down (0.97-0.98) on press communicates touch. Optional, but feels good:

```css
.button:active {
  transform: scale(0.97);
}
```

### Focus

Focus ring should appear instantly (no transition delay) but can grow softly. Most important: it must be **visible**.

```css
.input:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  transition: outline-offset 100ms var(--ease-out);
}
```

### Modal / dialog

Backdrop fades in (200ms). Modal scales from 0.95 to 1 and fades in (250ms ease-out). Reverse on close, slightly faster.

### Toast / notification

Slide in from the edge it lives near (top, bottom-right), fade in. 250ms ease-out. Auto-dismiss after 4-6 seconds with a fade out (200ms).

### Accordion

Animate `height` and `opacity` together, 250-300ms ease-in-out. Use a wrapper with `overflow: hidden`.

### Tab change

Cross-fade content (150ms). Optionally translate the new tab content in by 4-8px so the change is visible.

### Page transition

In a SPA, a quick cross-fade (200ms) is enough. Heavy page transitions (slides, scales) get old fast.

### Loading

- **Skeleton screens** for content loads — show the layout shape
- **Spinners** for indeterminate, brief loads (< 2s)
- **Progress bars** for determinate loads with known duration
- **Optimistic UI** when the action is fast and reversible — show the result immediately, reconcile later

---

## Scroll-driven motion

Scroll-linked animation can be powerful but is overused. Guidelines:

- **Parallax** is rarely worth it. It's distracting more often than it's beautiful.
- **Fade-in on scroll** (elements appearing as they enter the viewport) is fine in moderation. Don't apply to everything.
- **Sticky elements** that pin during scroll then release should pin cleanly without jitter.
- **Reveal sequences** for marketing pages can work — but keep them short, and make sure the page is fully usable without them.

Use `IntersectionObserver` for scroll-triggered fades, not scroll-position listeners. Use CSS `animation-timeline: scroll()` where supported.

---

## Reduce motion

Some users have vestibular conditions or motion sensitivity. Respect the OS preference:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

A more nuanced approach: keep functional transitions (color changes, focus rings) but disable non-essential motion (parallax, decorative animations, page transitions).

```css
@media (prefers-reduced-motion: reduce) {
  .parallax, .scroll-fade, .stagger-children {
    animation: none;
    transform: none;
  }
}
```

---

## Performance

Motion that drops frames feels broken. Two rules:

1. **Animate `transform` and `opacity`** when possible. These are compositor-only properties and don't trigger layout or paint.
2. **Avoid animating** `width`, `height`, `top`, `left`, `margin`, `padding`, `box-shadow`, `filter` if you can. They trigger expensive recalculations.

For an accordion or expanding element, animate `transform: scaleY()` and counter-scale children, or use the `height: auto` workaround with FLIP techniques, rather than animating raw `height`.

For shadows that grow on hover, layer two shadows and animate opacity between them, rather than animating shadow blur radius.

---

## Tools and libraries

For CSS-only motion, the techniques above are usually enough.

For richer prototypes:

- **Framer Motion** (React) — declarative, reliable, great defaults
- **Motion One** — smaller, framework-agnostic
- **GSAP** — the workhorse for complex timelines
- **Popmotion / spring-based libs** — for physics-based feel
- **Lottie** — for designer-authored complex animations

For interactive prototypes, simple React state + CSS transitions usually beats reaching for an animation library. Reserve libraries for genuinely complex motion.

---

## A motion debugging checklist

When animation feels off:

- Is the easing correct for the direction? (Ease-out for in, ease-in for out)
- Is the duration appropriate? (Most likely too slow — try halving it)
- Is the motion small enough? (Most likely too big)
- Is the element animating *the right property*? (Transform/opacity, not layout)
- Is multi-element motion choreographed, or independent?
- Does the motion explain a real state change, or is it decoration?
- Does it respect `prefers-reduced-motion`?
- Does it hold up after watching it 20 times in a row, or get annoying?

---

*See also: [10 — Interactive Prototypes](./10-interactive-prototypes.md) for prototype-level motion, [16 — Accessibility](./16-accessibility.md) for reduced motion*
