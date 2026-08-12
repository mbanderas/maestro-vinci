# 05 — Color

Color does three jobs in a design: it carries brand, it builds hierarchy, and it signals state. A good palette makes all three of these effortless. A bad palette fights you on every screen.

This chapter covers how to choose a palette, structure it as tokens, work in modern color spaces, and avoid the common color failures.

---

## Start from the brand

If there's a brand or design system, use its palette. Don't invent. Don't "modernize." Don't sneak in extra colors.

If you genuinely need a color the brand doesn't have (a new accent, a dark mode surface, a danger state), **extend the system explicitly** rather than freelancing. Document the addition. Surface it to the team.

If there's no brand at all: commit to a palette deliberately, document it at the top of the file, and use it consistently.

---

## How a palette works

A good palette isn't "five colors." It's a structured system of **roles** that map to **values**. The roles stay constant; the values can change (for themes, dark mode, accessibility variants).

### Minimum roles for a UI palette

- **Background / Surface** — the dominant area
- **Surface elevated** — cards, panels, popovers on top of background
- **Border / Divider** — hairlines, separations
- **Text primary** — main copy
- **Text secondary** — captions, metadata
- **Text muted** — disabled, placeholder
- **Primary** — the brand color, used for primary actions
- **Primary text** — text that sits on primary-colored backgrounds (usually white or near-black)
- **Accent** — a secondary highlight color, used sparingly
- **Success** — green, for confirmations
- **Warning** — yellow/amber, for caution
- **Danger** — red, for destructive actions and errors
- **Info** — blue, for neutral notifications

That's 13 roles. Most palettes need 15–25 once you add elevation levels and state variants.

### Don't think in hex codes — think in roles

Wrong:
```css
.button { background: #2563eb; color: #ffffff; }
.link { color: #2563eb; }
.alert { border: 1px solid #2563eb; }
```

Right:
```css
.button { background: var(--color-primary); color: var(--color-on-primary); }
.link { color: var(--color-primary); }
.alert { border: 1px solid var(--color-primary); }
```

Now changing the brand color is one find-and-replace. Dark mode is a media query. A new theme is a class on `<html>`.

---

## A complete token system

A real token system has three layers:

### Layer 1 — Primitive tokens (the palette)

The raw values, named by what they *are* (not what they're *for*):

```css
:root {
  --gray-50: #fafafa;
  --gray-100: #f4f4f5;
  --gray-200: #e4e4e7;
  --gray-300: #d4d4d8;
  --gray-400: #a1a1aa;
  --gray-500: #71717a;
  --gray-600: #52525b;
  --gray-700: #3f3f46;
  --gray-800: #27272a;
  --gray-900: #18181b;
  --gray-950: #09090b;

  --blue-500: #3b82f6;
  --blue-600: #2563eb;
  --blue-700: #1d4ed8;
  /* ...and so on for each hue */
}
```

### Layer 2 — Semantic tokens (the roles)

Mapped to primitives. Named by *use*:

```css
:root {
  --color-bg:           var(--gray-50);
  --color-surface:      #ffffff;
  --color-border:       var(--gray-200);
  --color-text:         var(--gray-900);
  --color-text-muted:   var(--gray-500);
  --color-primary:      var(--blue-600);
  --color-on-primary:   #ffffff;
}

[data-theme="dark"] {
  --color-bg:           var(--gray-950);
  --color-surface:      var(--gray-900);
  --color-border:       var(--gray-800);
  --color-text:         var(--gray-50);
  --color-text-muted:   var(--gray-400);
  --color-primary:      var(--blue-500);
  --color-on-primary:   var(--gray-950);
}
```

### Layer 3 — Component tokens (optional)

When a component needs a value that may diverge from the semantic role:

```css
:root {
  --color-button-primary-bg: var(--color-primary);
  --color-button-primary-bg-hover: var(--blue-700);
  --color-button-primary-text: var(--color-on-primary);
}
```

Use this layer sparingly. It exists for the day someone says "make all the buttons darker but leave the links alone."

---

## Choosing the palette

### Hue selection

- **One primary brand color** — the most-used non-neutral. Choose deliberately.
- **One or two accent colors** — for emphasis, highlights, illustrations.
- **A full neutral ramp** — 10–12 grays from near-white to near-black.
- **Functional colors** — success, warning, danger, info. These often live in their own ramps.

### How many shades per hue?

A typical scale is 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 — eleven steps. You won't use all of them on any one screen, but the full ramp lets you fine-tune state variants (hover, active, disabled, focus) without resorting to opacity hacks.

### Generating a scale

Three good approaches:

1. **Tailwind's palette** — battle-tested, generous range, works on screen
2. **Radix Colors** — APCA-tuned, with paired step pairs for backgrounds + borders + text
3. **Roll your own in OKLCH** — see the next section

---

## OKLCH — the modern way to color

`oklch(L C H)` is a perceptually-uniform color space. Two colors with the same `L` (lightness) actually *look* equally light, which is not true in HSL or RGB.

```css
/* Same lightness, different hues — visually equally bright */
oklch(70% 0.15 25);    /* salmon */
oklch(70% 0.15 145);   /* sage */
oklch(70% 0.15 245);   /* sky */
```

### Why it matters

- **Harmonic palettes** — fix L and C, sweep H to get equal-weight hues
- **Smooth ramps** — sweep L while keeping H constant for consistent-feeling shades
- **Accessible color** — pair colors by L to predict contrast without checking
- **Dark mode** — invert L while keeping H and C; the palette translates cleanly

### Quick recipes

A full neutral ramp:
```css
--gray-50:  oklch(98% 0    0);
--gray-100: oklch(96% 0    0);
--gray-200: oklch(92% 0.005 250);
--gray-300: oklch(86% 0.005 250);
--gray-400: oklch(70% 0.01  250);
--gray-500: oklch(55% 0.01  250);
--gray-600: oklch(45% 0.01  250);
--gray-700: oklch(35% 0.01  250);
--gray-800: oklch(25% 0.01  250);
--gray-900: oklch(15% 0.01  250);
--gray-950: oklch(8%  0.005 250);
```

A primary ramp matched to the neutrals:
```css
--blue-50:  oklch(98% 0.02  250);
--blue-100: oklch(95% 0.04  250);
--blue-500: oklch(60% 0.18  250);  /* the brand color */
--blue-900: oklch(20% 0.10  250);
```

Pick a hue, lock L and step it, and you get a harmonious scale automatically.

---

## Accent strategy

Most surface area should be **neutral**. Accent colors *point*, they don't *fill*.

A useful ratio: **60-30-10**:
- 60% neutral background
- 30% supporting (slightly differentiated surfaces, dividers, secondary text)
- 10% accent / primary

When you find yourself with three or four colors all fighting for attention, pull back. One accent used confidently lands harder than three competing for the same screen.

---

## Color and hierarchy

Color reinforces hierarchy *after* size and position. A common mistake is to use color *instead* of size.

- The most important thing on a page should be **bigger** and *also* maybe brighter
- Secondary content can be **smaller** and *also* maybe muted
- Use color for emphasis on already-emphatic elements, not as the sole hierarchy tool

Three quick rules:

1. **Color the primary action.** One button per screen carries the primary color.
2. **Mute the secondary text.** Captions, metadata, timestamps in lower-contrast neutral.
3. **Limit non-neutral surfaces.** A colored hero or section break can be powerful — three colored sections in a row is noise.

---

## Dark mode

Dark mode is not "invert everything." Real dark mode means:

- **Lift the background** from pure black to off-black. `#0a0a0a` or `oklch(8% 0 0)` is better than `#000` — pure black creates harsh halos and crushes shadows.
- **Lighten the brand color.** A blue that pops on white often disappears on black. Use a 1-2 step lighter shade of the brand.
- **Reduce contrast on text.** White on black is too harsh. Use `#e5e5e5` or `oklch(92% 0 0)`.
- **Soften shadows** — shadows are less visible on dark surfaces. Use longer, more diffuse shadows, or replace with subtle gradients.
- **Invert elevation logic.** On light, higher elevation = more shadow. On dark, higher elevation = *lighter* surface.

Test the dark variant on a real screen, not in a screenshot. Dark mode is where the gap between "screenshot looks fine" and "actually works" is widest.

---

## Functional color

The semantic colors — success, warning, danger, info — should be **distinctive and predictable**.

- **Success — green.** Don't be clever; green means success.
- **Warning — yellow/amber.** Reserved for "be careful," not "FYI."
- **Danger — red.** Reserved for destructive actions and errors.
- **Info — blue.** Neutral notifications, system messages.

Don't use these colors for non-semantic decoration. A green underline on a link will read as success. A red badge will read as urgent. Reserve them.

Also — **don't rely on color alone**. A "required field" indicator should be a red asterisk *plus* the word "required." Color-blind users, monochrome printouts, and screen readers all benefit.

---

## Color and accessibility

Minimum contrast ratios (WCAG AA):

- **Normal text:** 4.5:1
- **Large text (18px+ regular, or 14px+ bold):** 3:1
- **UI components and graphical objects:** 3:1

For AAA: 7:1 for normal, 4.5:1 for large.

APCA (the newer, perceptually-accurate model) gives better real-world results — aim for **Lc 75+ for body text**, Lc 60+ for large text. APCA is not yet in WCAG but it's a better predictor of legibility.

Tools:
- Browser devtools have contrast checkers built in
- Stark, Contrast, A11y plugins for Figma
- [APCA contrast checker](https://www.myndex.com/APCA/) for the modern model

---

## Don't lean on gradients

Gradients in the background are the most-overused "make it feel modern" move. They almost always:

- Add visual noise without semantic weight
- Conflict with content placed on top
- Look dated within 18 months
- Hide poor hierarchy decisions

When you reach for a gradient, ask first: would a solid color and stronger type get the same effect? Usually yes.

Gradients *do* work when:
- They're the brand (Stripe, Instagram, etc.)
- They serve a specific function (depth on a 3D button, a fade-out scroll mask)
- They're tonal — same hue, slight lightness shift — and serve to add subtle dimension

Avoid: rainbow gradients, gradients across the full page, gradients on text (unless very deliberate), gradients as a substitute for hierarchy.

---

## Don't lean on translucency

Frosted glass and translucent surfaces are popular but should be used sparingly:

- Only when there's something **interesting** behind them (otherwise just use a solid)
- Backdrop blur is expensive — avoid on long lists or large surfaces
- Test on a busy background — translucency that "looks great on a gradient" often fails on real content

---

## A color debugging checklist

When color "feels off":

- Are you using tokens, not raw hex codes?
- Is the contrast sufficient? (Check body, captions, primary buttons, links)
- Is there one clear primary color, or are three colors fighting?
- Is the neutral ramp doing its job, or are you using accent colors as neutrals?
- Does dark mode hold up?
- Are functional colors (red, green, amber) used only for their semantic meaning?
- Are gradients earning their place, or hiding a hierarchy problem?

---

*See also: [04 — Typography](./04-typography.md) for type contrast, [13 — Working with Design Systems](./13-design-systems.md) for token architecture, [16 — Accessibility](./16-accessibility.md) for contrast requirements*
