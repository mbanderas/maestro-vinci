# 17 — Responsive & Device-Aware Design

A design rarely lives at one size. Phones, tablets, laptops, large desktops, projectors, watches, foldables — the same content reflows across all of them. This chapter covers breakpoint strategy, touch vs. pointer design, device frames, and the patterns that make responsive design feel intentional rather than reactive.

---

## Mobile-first vs. desktop-first

**Mobile-first** is the modern default:

- Start at the smallest target (~320–375px wide)
- Layer on complexity as the viewport grows
- Most users globally are on mobile; designing mobile-first respects them
- Forces ruthless prioritization; small screens reveal what's truly essential

**Desktop-first** is appropriate when:

- The product is genuinely desktop-only (dev tools, video editing, CAD)
- The audience is exclusively desktop (some enterprise B2B)
- You're designing a content piece with no interaction (a hero web page)

For most product work, default to mobile-first.

---

## Breakpoints

There's no universal correct set, but a reasonable default:

| Name | Min width | Typical device |
|---|---|---|
| **xs** | 0 | Small phone (older iPhones, low-end Android) |
| **sm** | 640 | Large phone, small tablet portrait |
| **md** | 768 | Tablet portrait, small laptop |
| **lg** | 1024 | Tablet landscape, laptop |
| **xl** | 1280 | Desktop |
| **2xl** | 1536 | Large desktop |

Implementation:

```css
:root { /* xs default */ }
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

### Choose breakpoints by content, not device

The right breakpoints for *your* design are wherever the layout starts to break. If your three-column grid still works at 720px, don't add a breakpoint at 768px just because the framework does.

Add breakpoints when:
- Line length gets too long or too short
- A grid needs to reflow
- Touch targets start to crowd
- A persistent sidebar runs out of room

Remove breakpoints that aren't doing visible work.

---

## Container queries

Container queries respond to a *parent's* size, not the viewport. Use them for components that appear in multiple contexts:

```css
.card-container { container-type: inline-size; }

.card {
  display: flex;
  flex-direction: column;
}

@container (min-width: 400px) {
  .card {
    flex-direction: row;
  }
}
```

A card that lays out one way in a sidebar and differently in a main column should respond to its container, not the viewport. Container queries are now well-supported and should be the default for component-level responsive logic.

---

## Fluid type

Type that scales with the viewport, with sensible min and max:

```css
:root {
  --text-base: clamp(1rem, 0.5rem + 1.5vw, 1.125rem);
  --text-h1: clamp(2rem, 1rem + 4vw, 4rem);
}

body { font-size: var(--text-base); }
h1 { font-size: var(--text-h1); }
```

`clamp(min, ideal, max)` is the workhorse. It scales smoothly within bounds and avoids the "type leaps awkwardly at breakpoints" problem.

For most projects, fluid type for headings and fixed type for body works well. Body copy stays at 16-18px across all sizes; headings scale.

---

## Fluid spacing

Same idea for spacing:

```css
:root {
  --space-section: clamp(48px, 8vw, 128px);
}

section { padding-block: var(--space-section); }
```

Section padding that scales from 48px on mobile to 128px on desktop, smoothly. Better than three explicit breakpoints.

---

## Touch vs. pointer

The biggest interaction difference between phone and desktop:

| Aspect | Touch | Pointer |
|---|---|---|
| Minimum target | 44-48px | 24-32px is fine |
| Hover | No hover state | Hover available |
| Precision | Low (fingertip ~10mm) | High (cursor pixel) |
| Multi-touch | Yes | No (mostly) |
| Hover-revealed UI | Hidden | Common |

Practical implications:
- **Don't put functionality only behind hover** on touch devices. Hover-to-reveal menus, tooltips, secondary actions need touch equivalents.
- **Bigger touch targets on mobile** even if it costs density.
- **Different navigation patterns:** hamburger on mobile, persistent nav on desktop; bottom nav on phones, top nav on desktop.

Detect input type:
```css
@media (hover: hover) { /* only on devices with a real hover */ }
@media (pointer: coarse) { /* touch */ }
@media (pointer: fine) { /* precise pointer */ }
```

---

## Navigation patterns by size

| Pattern | Best for |
|---|---|
| **Bottom tab bar** | Mobile primary nav (3-5 items, frequent switching) |
| **Hamburger menu** | Mobile secondary nav, less-used items |
| **Top nav bar** | Tablet and desktop primary nav |
| **Persistent sidebar** | Desktop product UI, complex nav, lots of sections |
| **Off-canvas drawer** | Mobile equivalent of a sidebar (slides in from edge) |

Most products combine: persistent sidebar on desktop, off-canvas drawer on mobile. Same nav items, different presentation.

---

## Reflowing layouts

Common patterns for adapting layouts across breakpoints:

### Stack on mobile, grid on desktop

```css
.cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}
@media (min-width: 640px) {
  .cards { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .cards { grid-template-columns: repeat(3, 1fr); }
}
```

### Sidebar collapses to top

Desktop: sidebar on the left, content right.
Mobile: sidebar above content, often as a drawer.

### Auto-fit grids

For card grids where you just want "fit as many as you can":

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}
```

No breakpoints needed — cards reflow naturally.

### Hide on small, show on large

```css
.desktop-only { display: none; }
@media (min-width: 1024px) {
  .desktop-only { display: block; }
}
```

Use sparingly. If something needs to be hidden on mobile, ask whether it should exist at all.

---

## Images and responsive

### `srcset` and `sizes`

Serve appropriately-sized images for the viewport:

```html
<img
  src="hero-1280.jpg"
  srcset="hero-640.jpg 640w, hero-1280.jpg 1280w, hero-1920.jpg 1920w"
  sizes="(min-width: 1024px) 1280px, 100vw"
  alt="Description"
/>
```

### `<picture>` for art direction

When the image *crops* differently across sizes (a wide hero on desktop, a tighter portrait on mobile):

```html
<picture>
  <source media="(min-width: 1024px)" srcset="hero-wide.jpg" />
  <source media="(min-width: 640px)" srcset="hero-square.jpg" />
  <img src="hero-portrait.jpg" alt="Description" />
</picture>
```

### Aspect ratios

Reserve space for images so layout doesn't jump when they load:

```css
img { aspect-ratio: 16 / 9; object-fit: cover; }
```

---

## Device frames for prototypes

When a prototype is for a phone or desktop app, frame it. A bare browser window with a phone-shaped div in the middle doesn't sell the design.

### Mobile frames

- **iOS frame** for iPhone-targeted designs — status bar, notch/Dynamic Island, home indicator
- **Android frame** for Android-targeted designs — status bar, navigation gestures
- Include realistic time, battery, signal indicators

### Desktop frames

- **macOS window** — traffic light controls, title bar, optional toolbar
- **Browser window** — tab bar, URL bar, browser chrome
- **OS-specific** chrome (Windows, ChromeOS) when the design is platform-specific

Frames should be visually correct, not interactive. Their job is to set context.

---

## Foldables and unusual aspect ratios

Foldables, split-screen mobile, and resizable desktop windows all break the "phone is 375px, tablet is 768px, desktop is 1440px" assumption.

Defenses:
- **Avoid fixed widths** for major layout containers
- **Use container queries** for components that should adapt to their context
- **Test at narrow viewport** (320px) and ultra-wide (2560px+)
- **Accept that some breakpoints won't be perfect** — the layout should degrade gracefully, not catastrophically

---

## Orientation

Some designs care about landscape vs. portrait (games, video, image editors). Most don't, but check:

- Modals and dialogs that work in portrait but overflow in landscape
- Keyboards that take 50% of the screen in landscape on phones
- Hero images that crop awkwardly when orientation changes

```css
@media (orientation: landscape) and (max-height: 500px) {
  /* Probably a phone in landscape — adjust */
}
```

---

## High-DPI / Retina

Most images are now served at 2x or 3x density. CSS pixels are abstract — a "1px border" on a high-DPI screen is multiple physical pixels.

Implications:
- Use SVG for icons and logos when possible (resolution-independent)
- Serve raster images at 2x density at minimum
- Use `image-set()` in CSS for density-aware images
- Test on high-DPI screens — some hairline borders disappear at low DPI

---

## Print

Many designs eventually get printed. A separate print stylesheet is worth the small effort:

```css
@media print {
  body { background: white; color: black; }
  nav, .no-print { display: none; }
  a[href]::after { content: " (" attr(href) ")"; }
  .page-break { page-break-after: always; }
}
```

Things to consider for print:
- No backgrounds (saves ink, often forced anyway)
- No navigation
- Show URLs for links
- Page breaks at logical boundaries
- Real units (`pt`, `cm`, `in`) for sizing

---

## Common responsive failures

- **Designed at one width, broken at all others** — usually 1440px desktop, ignoring everything else
- **Fixed-pixel widths** that don't reflow at narrow viewports
- **Touch targets smaller than 44px** on mobile
- **Hover-only interactions** that don't work on touch
- **Text below 16px on iOS** (triggers auto-zoom on focus)
- **Horizontal scrolling on mobile** (almost always a bug)
- **Sidebar that collapses to nothing** at narrow widths instead of becoming a drawer
- **Images that don't scale** or are wrong density
- **Modal that's bigger than the viewport** on mobile
- **Layouts that work at default zoom but break at 200%**

---

## A responsive checklist

- [ ] Tested at 320px (smallest phone)
- [ ] Tested at 768px (tablet)
- [ ] Tested at 1024px (small laptop)
- [ ] Tested at 1440px (typical desktop)
- [ ] Tested at 1920px+ (large desktop)
- [ ] No horizontal scroll at any width
- [ ] Touch targets 44px+ on mobile
- [ ] Body text 16px+ to avoid iOS zoom
- [ ] Images responsive (`srcset`, `aspect-ratio`)
- [ ] Hover interactions have touch equivalents
- [ ] Navigation adapts (drawer, bottom bar, sidebar) for size
- [ ] Type and spacing scale fluidly or via breakpoints
- [ ] Layout holds at 200% browser zoom
- [ ] Print styles exist if printing matters

---

*See also: [06 — Layout & Spacing](./06-layout-and-spacing.md) for grids, [10 — Interactive Prototypes](./10-interactive-prototypes.md) for prototype frames*
